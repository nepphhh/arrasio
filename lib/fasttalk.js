'use strict'

let u32 = new Uint32Array(1)
let c32 = new Uint8Array(u32.buffer)
let f32 = new Float32Array(u32.buffer)

let u16 = new Uint16Array(1)
let c16 = new Uint8Array(u16.buffer)

/** Header Codes
 * S = sign bit, 0 = positive or 0, 1 = negative
 * 0000 - 0 or false
 * 0001 - 1 or true
 * 001S - 8 bit
 *
 * 010S - 16 bit
 * 011S - 32 bit
 *
 * 1000 - float
 * 1001 - single optional non null byte string
 * 1010 - 8 bit null-terminated string
 * 1011 - 16 bit null-terminated string
 *
 * 1100 - repeat again twice
 * 1101 - repeat again thrice
 * 1110 - repeat 4 + n times (0 <= n < 16)
 * 1111 - end of header
 */

/** An explanation of the new protocol - fasttalk 2.0
 * The new fasttalk system, named fasttalk 2.0, is designed to be backward compatible with fasttalk 1.0.
 * Instead of operating on a string, the data is put onto a Uint8Array, which makes it much faster.
 * The type indicators are also made shorter, changing from 1 byte to 4 bits, and special compressions for 0 and 1 and type repeats are also added, which reduced bandwidth usage.
 * 
 * The algorithm compresses an array of JavaScript numbers and strings into a single packets. Booleans are automatically casted to 0 and 1.
 * Each packet consists of two main parts: the header codes, and the data.
 * The header codes are 4 bit each, and there must be an even number of them.
 * In a packet, the header code always start and end with code 15 (0b1111). The actual headers are put between them. The starting code allows the client to instantly check to see which version of the protocol is used, and fall back if necessary. The encding codes allows the client to signal the start of the data section. Since there must be an even number of header codes, if there is an odd number of headers, there will be two code 15s at the end instead of only one.
 * 
 * When the data is being compressed, each element of the array is labeled to one of 12 types, which is the first 12 header codes in the table above. If more than 3 header codes of the same type is used, they are compressed into shorter blocks to indicate repeats.
 */

let encode = message => {
  let headers = []
  let headerCodes = []
  let contentSize = 0
  let lastTypeCode = 0b1111
  let repeatTypeCount = 0
  for (let block of message) {
    let typeCode = 0
    if (block === 0 || block === false) {
      typeCode = 0b0000
    } else if (block === 1 || block === true) {
      typeCode = 0b0001
    } else if (typeof block === 'number') {
      if (!Number.isInteger(block) || block < -0x100000000 || block >= 0x100000000) {
        typeCode = 0b1000
        contentSize += 4
      } else if (block >= 0) {
        if (block < 0x100) {
          typeCode = 0b0010
          contentSize++
        } else if (block < 0x10000) {
          typeCode = 0b0100
          contentSize += 2
        } else if (block < 0x100000000) {
          typeCode = 0b0110
          contentSize += 4
        }
      } else {
        if (block >= -0x100) {
          typeCode = 0b0011
          contentSize++
        } else if (block >= -0x10000) {
          typeCode = 0b0101
          contentSize += 2
        } else if (block >= -0x100000000) {
          typeCode = 0b0111
          contentSize += 4
        }
      }
    } else if (typeof block === 'string') {
      let hasUnicode = false
      for (let i = 0; i < block.length; i++) {
        if (block.charAt(i) > '\xff') {
          hasUnicode = true
        } else if (block.charAt(i) === '\x00') {
          console.error('Null containing string', block)
          throw new Error('Null containing string')
        }
      }
      if (!hasUnicode && block.length <= 1) {
        typeCode = 0b1001
        contentSize++
      } else if (hasUnicode) {
        typeCode = 0b1011
        contentSize += block.length * 2 + 2
      } else {
        typeCode = 0b1010
        contentSize += block.length + 1
      }
    } else {
      console.error('Unencodable data type', block)
      throw new Error('Unencodable data type')
    }
    headers.push(typeCode)
    if (typeCode === lastTypeCode) {
      repeatTypeCount++
    } else {
      headerCodes.push(lastTypeCode)
      if (repeatTypeCount >= 1) {
        while (repeatTypeCount > 19) {
          headerCodes.push(0b1110)
          headerCodes.push(15)
          repeatTypeCount -= 19
        }
        if (repeatTypeCount === 1)
          headerCodes.push(lastTypeCode)
        else if (repeatTypeCount === 2)
          headerCodes.push(0b1100)
        else if (repeatTypeCount === 3)
          headerCodes.push(0b1101)
        else if (repeatTypeCount < 20) {
          headerCodes.push(0b1110)
          headerCodes.push(repeatTypeCount - 4)
        }
      }
      repeatTypeCount = 0
      lastTypeCode = typeCode
    }
  }
  headerCodes.push(lastTypeCode)
  if (repeatTypeCount >= 1) {
    while (repeatTypeCount > 19) {
      headerCodes.push(0b1110)
      headerCodes.push(15)
      repeatTypeCount -= 19
    }
    if (repeatTypeCount === 1)
      headerCodes.push(lastTypeCode)
    else if (repeatTypeCount === 2)
      headerCodes.push(0b1100)
    else if (repeatTypeCount === 3)
      headerCodes.push(0b1101)
    else if (repeatTypeCount < 20) {
      headerCodes.push(0b1110)
      headerCodes.push(repeatTypeCount - 4)
    }
  }
  headerCodes.push(0b1111)
  if (headerCodes.length % 2 === 1)
    headerCodes.push(0b1111)

  let output = new Uint8Array((headerCodes.length >> 1) + contentSize)
  for (let i = 0; i < headerCodes.length; i += 2) {
    let upper = headerCodes[i]
    let lower = headerCodes[i + 1]
    output[i >> 1] = (upper << 4) | lower
  }
  let index = headerCodes.length >> 1
  for (let i = 0; i < headers.length; i++) {
    let block = message[i]
    switch (headers[i]) {
      case 0b0000:
      case 0b0001:
        break
      case 0b0010:
      case 0b0011:
        output[index++] = block
        break
      case 0b0100:
      case 0b0101:
        u16[0] = block
        output.set(c16, index)
        index += 2
        break
      case 0b0110:
      case 0b0111:
        u32[0] = block
        output.set(c32, index)
        index += 4
        break
      case 0b1000:
        f32[0] = block
        output.set(c32, index)
        index += 4
        break
      case 0b1001:
        {
          let byte = block.length === 0 ? 0 : block.charCodeAt(0)
          output[index++] = byte
        }
        break
      case 0b1010:
        for (let i = 0; i < block.length; i++) {
          output[index++] = block.charCodeAt(i)
        }
        output[index++] = 0
        break
      case 0b1011:
        for (let i = 0; i < block.length; i++) {
          let charCode = block.charCodeAt(i)
          output[index++] = charCode & 0xff
          output[index++] = charCode >> 8
        }
        output[index++] = 0
        output[index++] = 0
        break
    }
  }

  return output
}

let decode = packet => {
  let data = new Uint8Array(packet)
  if (data[0] >> 4 !== 0b1111)
    return null

  let headers = []
  let lastTypeCode = 0b1111
  let index = 0
  let consumedHalf = true
  while (true) {
    if (index >= data.length)
      return null
    let typeCode = data[index]

    if (consumedHalf) {
      typeCode &= 0b1111
      index++
    } else {
      typeCode >>= 4
    }
    consumedHalf = !consumedHalf

    if ((typeCode & 0b1100) === 0b1100) {
      if (typeCode === 0b1111) {
        if (consumedHalf)
          index++
        break
      }

      let repeat = typeCode - 10 // 0b1100 - 2
      if (typeCode === 0b1110) {
        if (index >= data.length)
          return null
        let repeatCode = data[index]

        if (consumedHalf) {
          repeatCode &= 0b1111
          index++
        } else {
          repeatCode >>= 4
        }
        consumedHalf = !consumedHalf

        repeat += repeatCode
      }

      for (let i = 0; i < repeat; i++)
        headers.push(lastTypeCode)
    } else {
      headers.push(typeCode)
      lastTypeCode = typeCode
    }
  }

  let output = []
  for (let header of headers) {
    switch (header) {
      case 0b0000:
        output.push(0)
        break
      case 0b0001:
        output.push(1)
        break
      case 0b0010:
        output.push(data[index++])
        break
      case 0b0011:
        output.push(data[index++] - 0x100)
        break
      case 0b0100:
        c16[0] = data[index++]
        c16[1] = data[index++]
        output.push(u16[0])
        break
      case 0b0101:
        c16[0] = data[index++]
        c16[1] = data[index++]
        output.push(u16[0] - 0x10000)
        break
      case 0b0110:
        c32[0] = data[index++]
        c32[1] = data[index++]
        c32[2] = data[index++]
        c32[3] = data[index++]
        output.push(u32[0])
        break
      case 0b0111:
        c32[0] = data[index++]
        c32[1] = data[index++]
        c32[2] = data[index++]
        c32[3] = data[index++]
        output.push(u32[0] - 0x100000000)
        break
      case 0b1000:
        c32[0] = data[index++]
        c32[1] = data[index++]
        c32[2] = data[index++]
        c32[3] = data[index++]
        output.push(f32[0])
        break
      case 0b1001:
        {
          let byte = data[index++]
          output.push(byte === 0 ? '' : String.fromCharCode(byte))
        }
        break
      case 0b1010:
        {
          let string = ''
          let byte = 0
          while (byte = data[index++]) {
            string += String.fromCharCode(byte)
          }
          output.push(string)
        }
        break
      case 0b1011:
        {
          let string = ''
          let byte = 0
          while (byte = data[index++] | (data[index++] << 8)) {
            string += String.fromCharCode(byte)
          }
          output.push(string)
        }
        break
    }
  }

  return output
}

let encodeLegacy = (() => {
  // unsigned 8-bit integer
  let arrUint8 = new Uint8Array(1)
  // unsigned 16-bit integer
  let arrUint16 = new Uint16Array(1)
  let charUint16 = new Uint8Array(arrUint16.buffer)
  // unsigned 32-bit integer
  let arrUint32  = new Uint32Array(1)
  let charUint32 = new Uint8Array(arrUint32.buffer)
  // 32-bit float
  let arrFloat32  = new Float32Array(1)
  let charFloat32 = new Uint8Array(arrFloat32.buffer)
  // build a useful internal function
  let typeEncoder = (type, number) => {
    let output = ''
    switch (type) {
      case 'RawUint8':
        arrUint8[0] = number
        return String.fromCharCode(arrUint8[0])
      case 'RawUint16':
        arrUint16[0] = number
        return String.fromCharCode(charUint16[0], charUint16[1])
      case 'Uint8':
        arrUint8[0] = number
        return '0' + String.fromCharCode(arrUint8[0])
      case 'Uint16':
        arrUint16[0] = number
        return '1' + String.fromCharCode(charUint16[0], charUint16[1])
      case 'Uint32':
        arrUint32[0] = number
        return '2' + String.fromCharCode(charUint32[0], charUint32[1], charUint32[2], charUint32[3])
      case 'Sint8':
        arrUint8[0] = -1 - number
        return '3' + String.fromCharCode(arrUint8[0])
      case 'Sint16':
        arrUint16[0] = -1 - number
        return '4' + String.fromCharCode(charUint16[0], charUint16[1])
      case 'Sint32':
        arrUint32[0] = -1 - number
        return '5' + String.fromCharCode(charUint32[0], charUint32[1], charUint32[2], charUint32[3])
      case 'Float32':
        arrFloat32[0] = number
        return '6' + String.fromCharCode(charFloat32[0], charFloat32[1], charFloat32[2], charFloat32[3])
      case 'String8':
        return '7' + typeEncoder('RawUint16', number.length) + number
      case 'String16':
        for (let i=0, strLen=number.length; i < strLen; i++) {
          output += typeEncoder('RawUint16', number.charCodeAt(i))
        }
        return '8' + typeEncoder('RawUint16', output.length) + output
      default: throw new Error('Unknown encoding type.')
    }
  }
  let findType = value => {
    if (typeof value === 'string') {
      for (let i = 0; i < value.length; i++) {
        if (value.charCodeAt(i) > 255) return 'String16'
      }
      return 'String8'
    }
    if (typeof value === 'boolean') return 'Uint8'
    if (typeof value !== 'number') {
      console.log(value)
      throw new Error('Unencodable data type')
    }
    if (value !== Math.floor(value)) return 'Float32'
    if (value < 0) {
      if (value >= -256) return 'Sint8'
      if (value >= -65535) return 'Sint16'
      if (value >= -4294967295) return 'Sint32'
    } else {
      if (value < 256) return 'Uint8'
      if (value < 65535) return 'Uint16'
      if (value < 4294967295) return 'Uint32'
    }
    return 'Float32'
  }
  // build the function
  return (arr, verbose = false) => {
    let output = arr.shift()
    if (typeof output !== 'string')
      throw new Error('No identification code!')
    arr.forEach(value => output += typeEncoder(findType(value), value))
    let len = output.length
    let buffer = new ArrayBuffer(len)
    let integerView = new Uint8Array(buffer)
    for (let i = 0; i < len; i++) {
      integerView[i] = output.charCodeAt(i)
    }
    if (verbose) {
      console.log('OUTPUT: ' + integerView)
      console.log('RAW OUTPUT: ' + output)
      console.log('SIZE: ' + len)
    }
    return buffer
  }
})()

let decodeLegacy = (() => {
  // unsigned 8-bit integer
  let arrUint8 = new Uint8Array(1)
  // unsigned 16-bit integer
  let arrUint16 = new Uint16Array(1)
  let charUint16 = new Uint8Array(arrUint16.buffer)
  // unsigned 32-bit integer
  let arrUint32  = new Uint32Array(1)
  let charUint32 = new Uint8Array(arrUint32.buffer)
  // 32-bit float
  let arrFloat32  = new Float32Array(1)
  let charFloat32 = new Uint8Array(arrFloat32.buffer)
  // build a useful internal function
  let typeDecoder = (str, type, offset) => {
    switch(type) {
    case 'Uint8':
      return str.charCodeAt(offset++)
    case 'Uint16':
      for (let i = 0; i < 2; i++) {
        charUint16[i] = str.charCodeAt(offset++)
      }
      return arrUint16[0]
    case 'Uint32':
      for (let i = 0; i < 4; i++) {
        charUint32[i] = str.charCodeAt(offset++)
      }
      return arrUint32[0]
    case 'Sint8':
      return -1 - str.charCodeAt(offset++)
    case 'Sint16':
      for (let i = 0; i < 2; i++) {
        charUint16[i] = str.charCodeAt(offset++)
      }
      return -1 - arrUint16[0]
    case 'Sint32':
      for (let i = 0; i < 4; i++) {
        charUint32[i] = str.charCodeAt(offset++)
      }
      return -1 - arrUint32[0]
    case 'Float32':
      for (let i = 0; i < 4; i++) {
        charFloat32[i] = str.charCodeAt(offset++)
      }
      return arrFloat32[0]
    default: throw new Error('Unknown decoding type.')
    }
  }
  // actually decode it
  return raw => { try {
    let intView = new Uint8Array(raw)
    let str = ''
    for (let i=0; i < intView.length; i++) {
      str += String.fromCharCode(intView[i])
    }
    let offset = 1
    let output = [str.charAt(0)]
    while (offset < str.length) {
      switch (str[offset++]) {
      case '0':
        output.push(typeDecoder(str, 'Uint8', offset))
        offset++
        break
      case '1':
        output.push(typeDecoder(str, 'Uint16', offset))
        offset += 2
        break
      case '2':
        output.push(typeDecoder(str, 'Uint32', offset))
        offset += 4
        break
      case '3':
        output.push(typeDecoder(str, 'Sint8', offset))
        offset++
        break
      case '4':
        output.push(typeDecoder(str, 'Sint16', offset))
        offset += 2
        break
      case '5':
        output.push(typeDecoder(str, 'Sint32', offset))
        offset += 4
        break
      case '6':
        output.push(typeDecoder(str, 'Float32', offset))
        offset += 4
        break
      case '7': { // String8
        let len = typeDecoder(str, 'Uint16', offset)
        offset += 2
        output.push(str.slice(offset, offset + len))
        offset += len
      } break
      case '8': { // String16
        let len = typeDecoder(str, 'Uint16', offset)
        offset += 2
        let arr = str.slice(offset, offset + len)
        let buf = new Uint16Array(len / 2)
        for (let i = 0; i < len; i += 2) {
          buf[i/2] = typeDecoder(arr, 'Uint16', i)
        }
        output.push(String.fromCharCode.apply(null, buf))
        offset += len
      } break
      default:
        offset = str.length
        throw new Error('Unknown decoding command. Decoding exited.')
      }
    }
    return output
  } catch(err) {
    console.log(err)
    return -1
  } }
})()

/*
let testSuite = {
  generateCase() {
    let generator = [
      () => 0,
      () => 1,
      () => Math.random(),
      () => 1 / (Math.random() + .1),
      () => Math.round(Math.random() * 1000 - 500),
      () => Math.round(Math.random() * 100000 - 500000),
      () => Infinity,
      () => Math.random().toString().charAt(2),
      () => Array(Math.floor(Math.random() * 10)).fill(0).map(() => String.fromCharCode(Math.floor(1 + Math.random() * 254))).join(''),
      () => Array(Math.floor(Math.random() * 12)).fill(0).map(() => String.fromCharCode(Math.floor(1 + Math.random() * 65534))).join(''),
    ]
    let amount = Math.floor(Math.random() * 50)
    let testCase = [String.fromCharCode(Math.floor(32 + Math.random() * 95))]
    for (let i = 0; i < amount; i++) {
      let repeat = Math.min(Math.floor(1 / Math.random()), 100)
      let type = Math.floor(Math.random() * generator.length)
      for (let i = 0; i < repeat; i++)
        testCase.push(generator[type]())
    }
    return testCase
  },
  fuzzer() {
    return Array(Math.ceil(100 + Math.random())).fill(0).map((r, i) => Math.floor(Math.random() * 256) | (i === 0 ? 0b11110000 : 0))
  },
  testEquivalency(original) {
    let recoded = decode(encode(original))
    if (recoded.length !== original.length) {
      console.error(original, recoded)
      throw new Error('Different length')
    } else {
      for (let i = 0; i < recoded.length; i++)
        if (recoded[i] !== original[i] &&
            !(typeof recoded[i] === 'number' &&
              typeof original[i] === 'number' &&
              Math.abs(recoded[i] - original[i]) < 0.0001)) {
          console.error(original, recoded)
          throw new Error('Different content at index ' + i)
        }
    }
  },
  now() {
    let hrTimeNew = process.hrtime()
    return hrTimeNew[0] * 1000 + hrTimeNew[1] / 1000000
  },
  run() {
    for (let i = 0; i < 2000; i++)
      this.testEquivalency(this.generateCase())
    for (let i = 0; i < 2000; i++)
      encode(this.fuzzer())
    console.log('## Fasttalk Speed Test')
    console.log('## Encoding')
    let encodeNewTotal = 0
    let encodeLegacyTotal = 0
    let encodeNewTotalSize = 0
    let encodeLegacyTotalSize = 0
    for (let i = 0; i < 6; i++) {
      let roundStart = this.now()
      for (let i = 0; i < 10000; i++) {
        encodeNewTotalSize += encode(this.generateCase()).length
      }
      let roundMid = this.now()
      for (let i = 0; i < 10000; i++) {
        encodeLegacyTotalSize += encodeLegacy(this.generateCase()).byteLength
      }
      let roundEnd = this.now()

      let newSpeed = roundMid - roundStart
      let legacySpeed = roundEnd - roundMid
      encodeNewTotal += newSpeed
      encodeLegacyTotal += legacySpeed
      console.log(`Round ${ i } - New: ${ newSpeed.toFixed(4).padStart(9) }ms  |  Old: ${ legacySpeed.toFixed(4).padStart(9) }ms`)
    }
    console.log(`Total   - New: ${ encodeNewTotal.toFixed(4).padStart(9) }ms  |  Old: ${ encodeLegacyTotal.toFixed(4).padStart(9) }ms`)
    console.log(`Size    - ${ encodeNewTotalSize } bytes vs. ${ encodeLegacyTotalSize } bytes`)
    console.log('## Encoding + Decoding')
    let decodeNewTotal = 0
    let decodeLegacyTotal = 0
    for (let i = 0; i < 6; i++) {
      let roundStart = this.now()
      for (let i = 0; i < 10000; i++) {
        decode(encode(this.generateCase()))
      }
      let roundMid = this.now()
      for (let i = 0; i < 10000; i++) {
        decodeLegacy(encodeLegacy(this.generateCase()))
      }
      let roundEnd = this.now()

      let newSpeed = roundMid - roundStart
      let legacySpeed = roundEnd - roundMid
      decodeNewTotal += newSpeed
      decodeLegacyTotal += legacySpeed
      console.log(`Round ${ i } - New: ${ newSpeed.toFixed(4).padStart(9) }ms  |  Old: ${ legacySpeed.toFixed(4).padStart(9) }ms`)
    }
    console.log(`Total   - New: ${ decodeNewTotal.toFixed(4).padStart(9) }ms  |  Old: ${ decodeLegacyTotal.toFixed(4).padStart(9) }ms`)
    console.log('## Fasttalk Speed Test Ended')
  },
}
testSuite.run()
*/

exports.encode = encode
exports.decode = data => {
  let output = decode(data)
  if (!output)
    output = decodeLegacy(data)
  return output
}
