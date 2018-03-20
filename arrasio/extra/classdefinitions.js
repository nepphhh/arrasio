var _g = {
    // Basic types
        dummy: {
            data: [], 
            type: Attachment, bulletType: undefined,
        },
        swarm: {
            /*** RELOAD RECOIL SHUDDER   SIZE   HEALTH  DAMAGE   PEN    SPEED     MAX     RANGE  DENSITY  SPRAY   RESIST  */
            data: [15,   0.25,   0.05,    0.6,   0.25,   0.5,     1,      5,       5,      100,     2,      5,      1], 
            type: Gun, bulletType: Swarm,
        },
        trap: {
            /*** RELOAD RECOIL SHUDDER   SIZE   HEALTH  DAMAGE   PEN    SPEED     MAX     RANGE  DENSITY  SPRAY   RESIST  */
            data: [40,    1,    0.25,     1,      10,     2,      1,      5,       1,      450,     5,      15,      3], 
            type: Gun, bulletType: Trap,
        },
        drone: {
            /*** RELOAD RECOIL   SIZE   HEALTH  DAMAGE   PEN    SPEED     MAX     RANGE  DENSITY  RESIST  */
            data: [100,  0.25,    1,      8,     0.7,     1,      2,       6,      200,    0.2,    1.5], 
            type: Spawner, bulletType: Drone,
        },

    // Templates/Modifiers
        lowpower: {
            /*** RELOAD RECOIL SHUDDER   SIZE   HEALTH  DAMAGE   PEN    SPEED     MAX     RANGE  DENSITY  SPRAY   RESIST  */
            data: [1,     1,      2,      1,      1,     0.5,    0.7,     1,       1,       1,      1,     0.5,    0.7], 
            type: undefined, bulletType: undefined,
        },
        halfrecoil: {
            /*** RELOAD RECOIL SHUDDER   SIZE   HEALTH  DAMAGE   PEN    SPEED     MAX     RANGE  DENSITY  SPRAY   RESIST  */
            data: [1,    0.5,     1,      1,      1,      1,      1,      1,       1,       1,      1,      1,      1], 
            type: undefined, bulletType: undefined,
        },
        morerecoil: {
            /*** RELOAD RECOIL SHUDDER   SIZE   HEALTH  DAMAGE   PEN    SPEED     MAX     RANGE  DENSITY  SPRAY   RESIST  */
            data: [1,    1.24,    1,      1,      1,      1,      1,      1,       1,       1,      1,      1,      1], 
            type: undefined, bulletType: undefined,
        },
        doublereload: {
            /*** RELOAD RECOIL SHUDDER   SIZE   HEALTH  DAMAGE   PEN    SPEED     MAX     RANGE  DENSITY  SPRAY   RESIST  */
            data: [0.5,     1,      1,      1,      1,      1,      1,      1,       1,       1,      1,      1,      1], 
            type: undefined, bulletType: undefined,
        },
        halfreload: {
            /*** RELOAD RECOIL SHUDDER   SIZE   HEALTH  DAMAGE   PEN    SPEED     MAX     RANGE  DENSITY  SPRAY   RESIST  */
            data: [2,     1,      1,      1,      1,      1,      1,      1,       1,       1,      1,      1,      1], 
            type: undefined, bulletType: undefined,
        },
        lessreload: {
            /*** RELOAD RECOIL SHUDDER   SIZE   HEALTH  DAMAGE   PEN    SPEED     MAX     RANGE  DENSITY  SPRAY   RESIST  */
            data: [1.33,  1,      1,      1,      1,      1,      1,      1,       1,       1,      1,      1,      1], 
            type: undefined, bulletType: undefined,
        },
        morespeed: {
            /*** RELOAD RECOIL SHUDDER   SIZE   HEALTH  DAMAGE   PEN    SPEED     MAX     RANGE  DENSITY  SPRAY   RESIST  */
            data: [1,     1,      1,      1,      1,      1,      1,     1.3,     1.3,      1,      1,      1,      1], 
            type: undefined, bulletType: undefined,
        },
        halfrange: {
            /*** RELOAD RECOIL SHUDDER   SIZE   HEALTH  DAMAGE   PEN    SPEED     MAX     RANGE  DENSITY  SPRAY   RESIST  */
            data: [1,     1,      1,      1,      1,      1,      1,      1,       1,      0.5,     1,      1,      1], 
            type: undefined, bulletType: undefined,
        },
        bitlessspeed: {
            /*** RELOAD RECOIL SHUDDER   SIZE   HEALTH  DAMAGE   PEN    SPEED     MAX     RANGE  DENSITY  SPRAY   RESIST  */
            data: [1,     1,      1,      1,      1,      1,      1,    0.93,     0.93,     1,      1,      1,      1], 
            type: undefined, bulletType: undefined,
        },    
    _BLANK: {
        /*** RELOAD RECOIL SHUDDER   SIZE   HEALTH  DAMAGE   PEN    SPEED     MAX     RANGE  DENSITY  SPRAY   RESIST  */
        data: [1,     1,      1,      1,      1,      1,      1,      1,       1,       1,      1,      1,      1], 
        type: undefined, bulletType: undefined,
    },
    // Bullet defintions
    flank: {
        /*** RELOAD RECOIL SHUDDER   SIZE   HEALTH  DAMAGE   PEN    SPEED     MAX     RANGE  DENSITY  SPRAY   RESIST  */
        data: [1.2,   1.2,    1,      1,      1.5,    0.9,    0.8,    0.8,     1,       1,      1,      1,      1], 
        type: Gun, bulletType: Bullet,
    },    
    pound: {
        /*** RELOAD RECOIL SHUDDER   SIZE   HEALTH  DAMAGE   PEN    SPEED     MAX     RANGE  DENSITY  SPRAY   RESIST  */
        data: [2,     3,    0.5,      1,       2,     2,     0.8,    0.9,     0.6,      1,     1.25,    1,      1], 
        type: Gun, bulletType: Bullet,
    },
        destroy: {
            /*** RELOAD RECOIL SHUDDER   SIZE   HEALTH  DAMAGE   PEN    SPEED     MAX     RANGE  DENSITY  SPRAY   RESIST  */
            data: [2,     2,     0.5,      1,     2,      2,      1,      1,      0.6,      1,     1.1,     1,     1.5], 
            type: Gun, bulletType: Bullet,
        },
        arty: {
            /*** RELOAD RECOIL SHUDDER   SIZE   HEALTH  DAMAGE   PEN    SPEED     MAX     RANGE  DENSITY  SPRAY   RESIST  */
            data: [1,    0.8,      1,      1,      1,      1,      1,    1.3,     1.3,      1,      1,      1,      1], 
            type: Gun, bulletType: Bullet,
        },
            spread: {
                /*** RELOAD RECOIL SHUDDER   SIZE   HEALTH  DAMAGE   PEN    SPEED     MAX     RANGE  DENSITY  SPRAY   RESIST  */
                data: [0.78125, 0.5, 0.5,     1,     0.8,     1,      1,   1.5/0.78, 1/0.78,    1,      1,      1,      1], 
                type: Gun, bulletType: Bullet,
            },
            skim: {
                /*** RELOAD RECOIL SHUDDER   SIZE   HEALTH  DAMAGE   PEN    SPEED     MAX     RANGE  DENSITY  SPRAY   RESIST  */
                data: [1,     1,      1,      1,      1,      1,      1,      1,       1,       1,      1,      1,      1], 
                type: Gun, bulletType: [Bullet, 'tank.skimmerMissile'],
            },

    sniper: {
        /*** RELOAD RECOIL SHUDDER   SIZE   HEALTH  DAMAGE   PEN    SPEED     MAX     RANGE  DENSITY  SPRAY   RESIST  */
        data: [1.5,   1,    0.25,     1,     1.25,   1.25,    1,     1.25,    1.5,     1.2,     1,     0.2,    1.25], 
        type: Gun, bulletType: Bullet,
    },
        rifle: {
            /*** RELOAD RECOIL SHUDDER   SIZE   HEALTH  DAMAGE   PEN    SPEED     MAX     RANGE  DENSITY  SPRAY   RESIST  */
            data: [0.8,  0.8,    1.5,      1,      1,      1,    0.9,     1,      0.8,       1,      1,      1,      1], 
            type: Gun, bulletType: Bullet,
        },
        assass: {
            /*** RELOAD RECOIL SHUDDER   SIZE   HEALTH  DAMAGE   PEN    SPEED     MAX     RANGE  DENSITY  SPRAY   RESIST  */
            data: [2,     1,     0.25,     1,    1.2,    1.2,    1.25,   1.25,    1.25,     1,      1,      1,     1.25],
            type: Gun, bulletType: Bullet,
        },
        hunter: {
            /*** RELOAD RECOIL SHUDDER   SIZE   HEALTH  DAMAGE   PEN    SPEED     MAX     RANGE  DENSITY  SPRAY   RESIST  */
            data: [1.35,  0.7,    1,     0.9,    0.7,    0.85,    1,     1.2,      1,       1,      1,      1,     1.2], 
            type: Gun, bulletType: Bullet,
        },
        hunter2: {
            /*** RELOAD RECOIL SHUDDER   SIZE   HEALTH  DAMAGE   PEN    SPEED     MAX     RANGE  DENSITY  SPRAY   RESIST  */
            data: [1,     1,      1,      0.8,    2,     0.4,     1,      1,       1,       1,     1.2,      1,     1.2], 
            type: Gun, bulletType: Bullet,
        },
            preda: {
                /*** RELOAD RECOIL SHUDDER   SIZE   HEALTH  DAMAGE   PEN    SPEED     MAX     RANGE  DENSITY  SPRAY   RESIST  */
                data: [1.25,  1,      1,      1,      1,     1.1,     1,     1.1,     1.05,     1,      1,      1,      1], 
                type: Gun, bulletType: Bullet,
            },
    
    mach: {
        /*** RELOAD RECOIL SHUDDER   SIZE   HEALTH  DAMAGE   PEN    SPEED     MAX     RANGE  DENSITY  SPRAY   RESIST  */
        data: [0.8,   1,      2,      1,     0.8,    0.8,    0.6,     1,       1,       1,      1,      2,     0.9], 
        type: Gun, bulletType: Bullet,
    },
        blaster: {
            /*** RELOAD RECOIL SHUDDER   SIZE   HEALTH  DAMAGE   PEN    SPEED     MAX     RANGE  DENSITY  SPRAY   RESIST  */
            data: [1,    1.2,    1.25,    1.1,   1.5,     1,     0.6,    0.8,     0.33,    0.6,    0.5,    1.5,     0.8], 
            type: Gun, bulletType: Bullet,
        },
        chain: {
            /*** RELOAD RECOIL SHUDDER   SIZE   HEALTH  DAMAGE   PEN    SPEED     MAX     RANGE  DENSITY  SPRAY   RESIST  */
            data: [1.25, 1.33,   0.8,      1,     0.8,    1,     1.1,    1.25,    1.25,    1.1,    1.25,   0.5,     1.1], 
            type: Gun, bulletType: Bullet,
        },
        mini: {
            /*** RELOAD RECOIL SHUDDER   SIZE   HEALTH  DAMAGE   PEN    SPEED     MAX     RANGE  DENSITY  SPRAY   RESIST  */
            data: [1.2,  0.8,     1,     0.8,    0.5,    0.45,   1.25,   1.2,     0.6,     1.2,     1,     0.5,     1], 
            type: Gun, bulletType: Bullet,
        },
            stream: {
                /*** RELOAD RECOIL SHUDDER   SIZE   HEALTH  DAMAGE   PEN    SPEED     MAX     RANGE  DENSITY  SPRAY   RESIST  */
                data: [1.1,   1,      1,      1,      1,      1,      1,     1.1,      1,       1,      1,      1,      1], 
                type: Gun, bulletType: Bullet,
            },

    twin: {
        /*** RELOAD RECOIL SHUDDER   SIZE   HEALTH  DAMAGE   PEN    SPEED     MAX     RANGE  DENSITY  SPRAY   RESIST  */
        data: [1,    0.8,    0.9,     1,      1,    0.667,   0.7,     1,      1.5,      1,      1,     0.9,      1], 
        type: Gun, bulletType: Bullet,
    },
        triple: {
            /*** RELOAD RECOIL SHUDDER   SIZE   HEALTH  DAMAGE   PEN    SPEED     MAX     RANGE  DENSITY  SPRAY   RESIST  */
            data: [1.5, 0.667,   0.9,      1,     1,      1,      1,    1.15,     1.15,     1,     1.1,    0.9,      1], 
            type: Gun, bulletType: Bullet,
        },
            quint: {
                /*** RELOAD RECOIL SHUDDER   SIZE   HEALTH  DAMAGE   PEN    SPEED     MAX     RANGE  DENSITY  SPRAY   RESIST  */
                data: [1.5, 0.667,   0.9,      1,     1,     0.75,    1,    1.15,     1.15,     1,     1.1,    0.9,      1], 
                type: Gun, bulletType: Bullet,
            },
            
        dual: {
            /*** RELOAD RECOIL SHUDDER   SIZE   HEALTH  DAMAGE   PEN    SPEED     MAX     RANGE  DENSITY  SPRAY   RESIST  */
            data: [1.5,   1,     0.8,    1.25,   1.5,    0.8,    1.1,    1.1,     1.3,     0.8,    1.25,      1,    1.25], 
            type: Gun, bulletType: Bullet,
        },
        bent: {
            /*** RELOAD RECOIL SHUDDER   SIZE   HEALTH  DAMAGE   PEN    SPEED     MAX     RANGE  DENSITY  SPRAY   RESIST  */
            data: [1.25, 1.1,    1.2,     1,      1,      1,      1,      1,       1,       1,     0.8,     1,      0.9], 
            type: Gun, bulletType: Bullet,
        },
        gunner: {
            /*** RELOAD RECOIL SHUDDER   SIZE   HEALTH  DAMAGE   PEN    SPEED     MAX     RANGE  DENSITY  SPRAY   RESIST  */
            data: [1.25,  1,     1.3,    1.1,    0.8,    0.8,    1.15,   0.9,     0.8,     1,      1.5,     1,     1.2], 
            type: Gun, bulletType: Bullet,
        },
            power: {
                /*** RELOAD RECOIL SHUDDER   SIZE   HEALTH  DAMAGE   PEN    SPEED     MAX     RANGE  DENSITY  SPRAY   RESIST  */
                data: [1.25,  1,     0.8,    1.2,     1,      1,     1.25,   1.3,      1,       1,      2,      1,      1], 
                type: Gun, bulletType: Bullet,
            },
    
    // Trap definitions
    block: {
        /*** RELOAD RECOIL SHUDDER   SIZE   HEALTH  DAMAGE   PEN    SPEED     MAX     RANGE  DENSITY  SPRAY   RESIST  */
        data: [1.5,   2,     0.1,    0.7,    1.5,    1.5,     1,      1,      1.5,     1.25,    1,      1,      1], 
        type: Gun, bulletType: Block,
    },
        construct: {
            /*** RELOAD RECOIL SHUDDER   SIZE   HEALTH  DAMAGE   PEN    SPEED     MAX     RANGE  DENSITY  SPRAY   RESIST  */
            data: [1,     1,      1,     1.15,   1.25,   1.25,    1,      1,      1.25,     1,      1,      1,      1], 
            type: Gun, bulletType: Block,
        },

    // Drone definitions
    over: {
        /*** RELOAD RECOIL   SIZE   HEALTH  DAMAGE   PEN    SPEED     MAX     RANGE  DENSITY  RESIST  */
        data: [1.2,   1,      1,     0.6,      1,     1,      1,      0.8,     1.25,    2,      1], 
        type: Spawner, bulletType: Drone,
    },
    weak: {
        /*** RELOAD RECOIL   SIZE   HEALTH  DAMAGE   PEN    SPEED     MAX     RANGE  DENSITY  RESIST  */
        data: [2,     1,      1,     0.5,    0.5,     1,      1,      0.8,     0.6,     1,      1], 
        type: Spawner, bulletType: Drone,
    },

};


var tank = { // Define tanks

    generic: new entityPlan({
        name: 'Generic Entity',
        /****** ACCEL   SPEED   HEALTH  DAMAGE   PEN     FOV    DRONES */
        body: [   1,      1,      1,      1,      1,      1,      0],
        guns: [],
    }), 

    basic: new entityPlan({
        name: 'Basic',
        shape: 4,
        /****** ACCEL   SPEED   HEALTH  DAMAGE   PEN     FOV    DRONES */
        body: [   1,      1,      1,      1,      1,      1,      0],
        guns: [
            [ /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            [      18,     8,      1,      0,      0,      0,      0,   ], 
            [_g.basic], 'manual', 'main', 'master', 0, ''],
        ]
    }), 

    skimmerMissile: new entityPlan({
        name: 'Missile',
        type: 'bullet',
        /****** ACCEL   SPEED   HEALTH  DAMAGE   PEN     FOV    DRONES */
        body: [   1,      5,      1,      1,      1,      1,      0],
        guns: [
            [ /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            [      15,     7,      1,      0,     -3,     160,     0,   ], 
            [_g.basic, _g.morerecoil, _g.morerecoil, _g.morerecoil], 'always', 'main', 'master', 0, ''], [
            [      15,     7,      1,      0,      3,     200,     0,   ], 
            [_g.basic, _g.morerecoil, _g.morerecoil, _g.morerecoil], 'always', 'main', 'master', 0, ''],
        ]
    }), 

    twin: new entityPlan({
        name: 'Twin',
        /****** ACCEL   SPEED   HEALTH  DAMAGE   PEN     FOV    DRONES */
        body: [   1,      1,      1,      1,      1,      1,      0],
        guns: [
            [ /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            [      20,     8,      1,      0,     5.5,     0,      0,   ], 
            [_g.basic, _g.twin], 'manual', 'main', 'master', 0, ''], [
            [      20,     8,      1,      0,    -5.5,     0,     0.5,  ], 
            [_g.basic, _g.twin], 'manual', 'main', 'master', 0, ''],
        ]
    }),
        gunner: new entityPlan({
            name: 'Gunner',
            /****** ACCEL   SPEED   HEALTH  DAMAGE   PEN     FOV    DRONES */
            body: [   1,     0.7,     1,      1,      1,      1,      0],
            guns: [
                [ /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                [      14,     4,      1,      0,      7,      0,     0.5,  ], 
                    [_g.basic, _g.twin, _g.gunner], 'manual', 'main', 'master', 0, ''], [
                [      14,     4,      1,      0,     -7,      0,     0.75, ], 
                    [_g.basic, _g.twin, _g.gunner], 'manual', 'main', 'master', 0, ''], [
                [      17,     4,      1,      0,      4,      0,      0,   ], 
                    [_g.basic, _g.twin, _g.gunner], 'manual', 'main', 'master', 0, ''], [
                [      17,     4,      1,      0,     -4,      0,     0.25, ], 
                    [_g.basic, _g.twin, _g.gunner], 'manual', 'main', 'master', 0, ''],
            ]
        }), 
            heavy: new entityPlan({
                name: 'Heavy Gunner',
                /****** ACCEL   SPEED   HEALTH  DAMAGE   PEN     FOV    DRONES */
                body: [   1,     0.6,     1,      1,      1,      1,      0],
                guns: [
                    [ /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    [      14,     4,      1,      0,      7,      0,     0.8,  ], 
                        [_g.basic, _g.twin, _g.gunner, _g.power], 'manual', 'main', 'master', 0, ''], [
                    [      14,     4,      1,      0,     -7,      0,     0.6,  ], 
                        [_g.basic, _g.twin, _g.gunner, _g.power], 'manual', 'main', 'master', 0, ''], [
                    [      17,     5,      1,      0,      4,      0,     0.4,  ], 
                        [_g.basic, _g.twin, _g.gunner], 'manual', 'main', 'master', 0, ''], [
                    [      17,     5,      1,      0,     -4,      0,     0.2,  ], 
                        [_g.basic, _g.twin, _g.gunner], 'manual', 'main', 'master', 0, ''],[
                    [      17,     4,      1,      0,      0,      0,      0,   ], 
                        [_g.basic, _g.twin, _g.gunner, _g.power], 'manual', 'main', 'master', 0, ''],
                ]
            }), 

        double: new entityPlan({
            name: 'Double Twin',
            /****** ACCEL   SPEED   HEALTH  DAMAGE   PEN     FOV    DRONES */
            body: [   1,    0.95,     1,      1,      1,      1,      0],
            guns: [
                [ /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                [      20,     8,      1,      0,     5.5,     0,      0,   ], 
                [_g.basic, _g.twin], 'manual', 'main', 'master', 0, ''], [
                [      20,     8,      1,      0,    -5.5,     0,     0.5,  ], 
                [_g.basic, _g.twin], 'manual', 'main', 'master', 0, ''], [
                [      20,     8,      1,      0,     5.5,    180,     0,   ], 
                [_g.basic, _g.twin], 'manual', 'main', 'master', 0, ''], [
                [      20,     8,      1,      0,    -5.5,    180,    0.5,  ], 
                [_g.basic, _g.twin], 'manual', 'main', 'master', 0, ''],
            ]
        }),
            doubletrap: new entityPlan({
                name: 'Double Trap Guard',
                /****** ACCEL   SPEED   HEALTH  DAMAGE   PEN     FOV    DRONES */
                body: [   1,    0.95,     1,      1,      1,      1,      0],
                guns: [
                    [ /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    [      20,     8,      1,      0,    -5.5,     0,      0,   ], 
                        [_g.basic, _g.twin], 'manual', 'main', 'master', 0, ''], [
                    [      14,     7,      1,      0,     -6,     180,     0,   ], 
                        [_g.dummy] ], [
                    [      4,      7,     1.5,    14,     -6,     180,     0,   ], 
                        [_g.twin, _g.trap], 'manual', 'main', 'master', 0, ''], [
                    [      20,     8,      1,      0,     5.5,     0,     0.5,  ], 
                        [_g.basic, _g.twin], 'manual', 'main', 'master', 0, ''], [
                    [      14,     7,      1,      0,      6,     180,    0.5,  ], 
                        [_g.dummy] ], [
                    [      4,      7,     1.5,    14,      6,     180,    0.5,  ], 
                        [_g.twin, _g.trap], 'manual', 'main', 'master', 0, ''],
                ]
            }),
            tripletwin: new entityPlan({
                name: 'Triple Twin',
                /****** ACCEL   SPEED   HEALTH  DAMAGE   PEN     FOV    DRONES */
                body: [   1,    0.95,     1,      1,      1,      1,      0],
                guns: [
                    [ /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    [      20,     8,      1,      0,     5.5,     0,      0,   ], 
                        [_g.basic, _g.twin], 'manual', 'main', 'master', 0, ''], [
                    [      20,     8,      1,      0,    -5.5,     0,     0.5,  ], 
                        [_g.basic, _g.twin], 'manual', 'main', 'master', 0, ''], [
                    [      20,     8,      1,      0,     5.5,    120,     0,   ], 
                        [_g.basic, _g.twin], 'manual', 'main', 'master', 0, ''], [
                    [      20,     8,      1,      0,    -5.5,    120,    0.5,  ], 
                        [_g.basic, _g.twin], 'manual', 'main', 'master', 0, ''], [
                    [      20,     8,      1,      0,     5.5,    240,     0,   ], 
                        [_g.basic, _g.twin], 'manual', 'main', 'master', 0, ''], [
                    [      20,     8,      1,      0,    -5.5,    240,    0.5,  ], 
                        [_g.basic, _g.twin], 'manual', 'main', 'master', 0, ''],
                ]
            }),
            doublebent: new entityPlan({
                name: 'Bent Double',
                /****** ACCEL   SPEED   HEALTH  DAMAGE   PEN     FOV    DRONES */
                body: [   1,      1,      1,      1,      1,      1,      0],
                guns: [
                    [ /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    [      20,     8,      1,      0,     -2,    -20,     0.5,  ], 
                    [_g.basic, _g.twin, _g.bent], 'manual', 'main', 'master', 0, ''], [
                    [      20,     8,      1,      0,      2,     20,     0.5,  ], 
                    [_g.basic, _g.twin, _g.bent], 'manual', 'main', 'master', 0, ''], [
                    [      22,     8,      1,      0,      0,      0,      0,   ], 
                    [_g.basic, _g.twin, _g.bent], 'manual', 'main', 'master', 0, ''], [
                    [      20,     8,      1,      0,     -2,    -160,    0.5,  ], 
                    [_g.basic, _g.twin, _g.bent], 'manual', 'main', 'master', 0, ''], [
                    [      20,     8,      1,      0,      2,     160,    0.5,  ], 
                    [_g.basic, _g.twin, _g.bent], 'manual', 'main', 'master', 0, ''], [
                    [      22,     8,      1,      0,      0,     180,     0,   ], 
                    [_g.basic, _g.twin, _g.bent], 'manual', 'main', 'master', 0, ''],
                ]
            }),

        bent: new entityPlan({
            name: 'Triple Shot',
            /****** ACCEL   SPEED   HEALTH  DAMAGE   PEN     FOV    DRONES */
            body: [   1,     0.85,    1,      1,      1,      1,      0],
            guns: [
                [ /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                [      19,     8,      1,      0,     -2,    -20,     0.5,  ], 
                [_g.basic, _g.twin, _g.bent], 'manual', 'main', 'master', 0, ''], [
                [      19,     8,      1,      0,      2,     20,     0.5,  ], 
                [_g.basic, _g.twin, _g.bent], 'manual', 'main', 'master', 0, ''], [
                [      22,     8,      1,      0,      0,      0,      0,   ], 
                [_g.basic, _g.twin, _g.bent], 'manual', 'main', 'master', 0, ''],
            ]
        }),
            penta: new entityPlan({
                name: 'Penta Shot',
                /****** ACCEL   SPEED   HEALTH  DAMAGE   PEN     FOV    DRONES */
                body: [   1,     0.85,    1,      1,      1,      1,      0],
                guns: [
                    [ /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    [      16,     8,      1,      0,     -3,    -40,    0.667, ], 
                        [_g.basic, _g.twin, _g.bent, _g.bent], 'manual', 'main', 'master', 0, ''], [
                    [      16,     8,      1,      0,      3,     40,    0.667, ], 
                        [_g.basic, _g.twin, _g.bent, _g.bent], 'manual', 'main', 'master', 0, ''], [
                    [      19,     8,      1,      0,     -2,    -20,    0.333, ], 
                        [_g.basic, _g.twin, _g.bent, _g.bent], 'manual', 'main', 'master', 0, ''], [
                    [      19,     8,      1,      0,      2,     20,    0.333, ], 
                        [_g.basic, _g.twin, _g.bent, _g.bent], 'manual', 'main', 'master', 0, ''], [
                    [      23,     8,      1,      0,      0,      0,      0,   ], 
                        [_g.basic, _g.twin, _g.bent, _g.bent], 'manual', 'main', 'master', 0, ''],
                ]
            }),

        triple: new entityPlan({
            name: 'Triplet',
            /****** ACCEL   SPEED   HEALTH  DAMAGE   PEN     FOV    DRONES */
            body: [   1,     0.7,     1,      1,      1,     1.05,    0],
            guns: [
                [ /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                [      18,     9,      1,      0,     5.5,     0,     0.5,  ], 
                    [_g.basic, _g.twin, _g.triple], 'manual', 'main', 'master', 0, ''], [
                [      18,     9,      1,      0,    -5.5,     0,     0.5,  ], 
                    [_g.basic, _g.twin, _g.triple], 'manual', 'main', 'master', 0, ''], [
                [      21,     9,      1,      0,      0,      0,      0,  ], 
                    [_g.basic, _g.twin, _g.triple], 'manual', 'main', 'master', 0, ''],
            ]
        }), 
            quint: new entityPlan({
                name: 'Quintuplet',
                /****** ACCEL   SPEED   HEALTH  DAMAGE   PEN     FOV    DRONES */
                body: [   1,     0.6,     1,      1,      1,     1.1,     0],
                guns: [
                    [ /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    [      16,    10,      1,      0,     -5,      0,    0.667, ], 
                        [_g.basic, _g.twin, _g.triple, _g.quint], 'manual', 'main', 'master', 0, ''], [
                    [      16,    10,      1,      0,      5,      0,    0.667, ], 
                        [_g.basic, _g.twin, _g.triple, _g.quint], 'manual', 'main', 'master', 0, ''], [
                    [      19,    10,      1,      0,     -3,      0,    0.333, ], 
                        [_g.basic, _g.twin, _g.triple, _g.quint], 'manual', 'main', 'master', 0, ''], [
                    [      19,    10,      1,      0,      3,      0,    0.333, ], 
                        [_g.basic, _g.twin, _g.triple, _g.quint], 'manual', 'main', 'master', 0, ''], [
                    [      22,    10,      1,      0,      0,      0,      0,   ], 
                        [_g.basic, _g.twin, _g.triple, _g.quint, _g.doublereload], 'manual', 'main', 'master', 0, ''],
                ]
            }), 
            dual: new entityPlan({
                name: 'Dual',
                /****** ACCEL   SPEED   HEALTH  DAMAGE   PEN     FOV    DRONES */
                body: [  0.8,    0.7,     1,      1,      1,     1.1,     0],
                guns: [
                    [ /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    [      20,     7,      1,      0,     5.5,     0,      0,   ], 
                        [_g.basic, _g.twin, _g.dual, _g.lowpower], 'manual', 'main', 'master', 0, ''], [
                    [      20,     7,      1,      0,    -5.5,     0,     0.5,  ], 
                        [_g.basic, _g.twin, _g.dual, _g.lowpower], 'manual', 'main', 'master', 0, ''], [
                    [      18,    8.5,     1,      0,     5.5,     0,      0,   ], 
                        [_g.basic, _g.twin, _g.dual], 'manual', 'main', 'master', 0, ''], [
                    [      18,    8.5,     1,      0,    -5.5,     0,     0.5,  ], 
                        [_g.basic, _g.twin, _g.dual], 'manual', 'main', 'master', 0, ''],
                ]
            }),   

    machine: new entityPlan({
        name: 'Machine Gun',
        /****** ACCEL   SPEED   HEALTH  DAMAGE   PEN     FOV    DRONES */
        body: [   1,      1,      1,      1,      1,      1,      0],
        guns: [
            [ /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            [      20,     8,     1.7,     0,      0,      0,      0,   ], 
            [_g.basic, _g.mach], 'manual', 'main', 'master', 0, ''],
        ]
    }),
        doublemach: new entityPlan({
            name: 'Double Machine',
            /****** ACCEL   SPEED   HEALTH  DAMAGE   PEN     FOV    DRONES */
            body: [   1,      1,      1,      1,      1,      1,      0],
            guns: [
                [ /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                [      20,     8,     1.7,     0,      0,      0,      0,   ], 
                [_g.basic, _g.mach], 'manual', 'main', 'master', 0, ''], [
                [      20,     8,     1.7,     0,      0,     180,    0.5,  ], 
                [_g.basic, _g.mach], 'manual', 'main', 'master', 0, ''],
            ]
        }),   
            triplemach: new entityPlan({
                name: 'Triple Machine',
                /****** ACCEL   SPEED   HEALTH  DAMAGE   PEN     FOV    DRONES */
                body: [   1,      1,      1,      1,      1,      1,      0],
                guns: [
                    [ /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    [      20,     8,     1.7,     0,      0,      0,      0,   ], 
                    [_g.basic, _g.mach], 'manual', 'main', 'master', 0, ''], [
                    [      20,     8,     1.7,     0,      0,     120,    0.5,  ], 
                    [_g.basic, _g.mach], 'manual', 'main', 'master', 0, ''], [
                    [      20,     8,     1.7,     0,      0,     240,    0.5,  ], 
                    [_g.basic, _g.mach], 'manual', 'main', 'master', 0, ''],
                ]
            }),  
            halfnhalf: new entityPlan({
                name: "Half 'n Half",
                /****** ACCEL   SPEED   HEALTH  DAMAGE   PEN     FOV    DRONES */
                body: [   1,      1,      1,      1,      1,      1,      0],
                guns: [
                    [ /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    [      13,     8,     1.9,     4,      0,      0,      0,   ], 
                    [_g.basic, _g.mach, _g.blaster], 'manual', 'main', 'master', 0, 'Blaster'], [
                    [      24,     8,     1.5,     0,      0,     180,    0.5,  ], 
                    [_g.basic, _g.mach, _g.chain], 'manual', 'main', 'master', 0, 'Chain'],
                ]
            }), 
        
        chain: new entityPlan({
            name: "Chain Gun",
            /****** ACCEL   SPEED   HEALTH  DAMAGE   PEN     FOV    DRONES */
            body: [   1,      1,      1,      1,      1,     1.15,    0],
            guns: [
                [ /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                [      24,     8,     1.5,     0,      0,      0,     0.5,  ], 
                [_g.basic, _g.mach, _g.chain], 'manual', 'main', 'master', 0, ''],
            ]
        }),

        blaster: new entityPlan({
            name: "Blaster",
            /****** ACCEL   SPEED   HEALTH  DAMAGE   PEN     FOV    DRONES */
            body: [   1,      1,      1,      1,      1,      1,      0],
            guns: [
                [ /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                [      13,     8,     1.9,     4,      0,      0,      0,   ], 
                [_g.basic, _g.mach, _g.blaster], 'manual', 'main', 'master', 0, ''],
            ]
        }), 
            bentblaster: new entityPlan({
                name: "Bent Blaster",
                /****** ACCEL   SPEED   HEALTH  DAMAGE   PEN     FOV    DRONES */
                body: [   1,      1,      1,      1,      1,      1,      0],
                guns: [
                    [ /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    [      13,     8,     1.7,     4,     -2,     -15,    0.5,  ], 
                        [_g.basic, _g.mach, _g.blaster, _g.bent, _g.halfrecoil, _g.lowpower], 'manual', 'main', 'master', 0, 'Side'], [
                    [      13,     8,     1.7,     4,      2,      15,    0.5,  ],
                        [_g.basic, _g.mach, _g.blaster, _g.bent, _g.halfrecoil, _g.lowpower], 'manual', 'main', 'master', 0, 'Side'], [
                    [      13,     8,     1.9,     6,      0,      0,      0,   ],
                        [_g.basic, _g.mach, _g.blaster, _g.bent, _g.halfrecoil], 'manual', 'main', 'master', 0, 'Front'],
                ]
            }), 

        mini: new entityPlan({
            name: 'Minigun',
            /****** ACCEL   SPEED   HEALTH  DAMAGE   PEN     FOV    DRONES */
            body: [   1,      1,      1,      1,      1,     1.1,     0],
            guns: [
                [ /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                [      23,     8,      1,      0,      0,      0,      0,   ], 
                    [_g.basic, _g.mini], 'manual', 'main', 'master', 0, ''], [
                [      20,     8,      1,      0,      0,      0,    0.333, ], 
                    [_g.basic, _g.mini], 'manual', 'main', 'master', 0, ''], [
                [      17,     8,      1,      0,      0,      0,    0.667, ], 
                    [_g.basic, _g.mini], 'manual', 'main', 'master', 0, ''],
            ]
        }),
            stream: new entityPlan({
                name: 'Streamliner',
                /****** ACCEL   SPEED   HEALTH  DAMAGE   PEN     FOV    DRONES */
                body: [   1,      1,      1,      1,      1,     1.15,    0],
                guns: [
                    [ /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    [     24.5,    8,      1,      0,      0,      0,      0,   ], 
                        [_g.basic, _g.mini, _g.stream], 'manual', 'main', 'master', 0, ''], [
                    [      23,     8,      1,      0,      0,      0,     0.2,  ], 
                        [_g.basic, _g.mini, _g.stream], 'manual', 'main', 'master', 0, ''], [
                    [     21.5,    8,      1,      0,      0,      0,     0.4,  ], 
                        [_g.basic, _g.mini, _g.stream], 'manual', 'main', 'master', 0, ''], [
                    [      20,     8,      1,      0,      0,      0,     0.6,  ], 
                        [_g.basic, _g.mini, _g.stream], 'manual', 'main', 'master', 0, ''], [
                    [     18.5,    8,      1,      0,      0,      0,     0.7,  ], 
                        [_g.basic, _g.mini, _g.stream], 'manual', 'main', 'master', 0, ''],
                ]
            }),
            hotshot: new entityPlan({
                name: 'Hotshot',
                /****** ACCEL   SPEED   HEALTH  DAMAGE   PEN     FOV    DRONES */
                body: [   1,      1,      1,      1,      1,     1.1,     0],
                guns: [
                    [ /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    [      24,    15,      1,      0,      0,      0,      0,   ], 
                        [_g.basic, _g.mini, _g.destroy, _g.halfreload], 'manual', 'main', 'master', 0, ''], [
                    [      20,    15,      1,      0,      0,      0,    0.333, ], 
                        [_g.basic, _g.mini, _g.destroy, _g.halfreload], 'manual', 'main', 'master', 0, ''], [
                    [      16,    15,      1,      0,      0,      0,    0.667, ], 
                        [_g.basic, _g.mini, _g.destroy, _g.halfreload], 'manual', 'main', 'master', 0, ''],
                ]
            }),    

    sniper: new entityPlan({
        name: 'Sniper',
        /****** ACCEL   SPEED   HEALTH  DAMAGE   PEN     FOV    DRONES */
        body: [  0.5,    0.8,     1,      1,      1,     1.1,     0],
        guns: [
            [ /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            [      24,     8,      1,      0,      0,      0,      0,   ], 
            [_g.basic, _g.sniper], 'manual', 'main', 'master', 0, ''],
        ]
    }),
        rifle: new entityPlan({
            name: 'Carbine',
            /****** ACCEL   SPEED   HEALTH  DAMAGE   PEN     FOV    DRONES */
            body: [  0.75,   0.9,     1,      1,      1,     1.1,     0],
            guns: [
                [ /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                [      24,     8,      1,      0,      0,      0,      0,   ], 
                [_g.basic, _g.sniper, _g.rifle], 'manual', 'main', 'master', 0, ''], [
                [      5,      7,    -1.1,     9,      0,     180,     0,   ], 
                [_g.dummy] ]
            ]
        }),   
            rifletrap: new entityPlan({
                name: 'Bushwhacker',
                /****** ACCEL   SPEED   HEALTH  DAMAGE   PEN     FOV    DRONES */
                body: [  0.75,   0.9,     1,      1,      1,     1.1,     0],
                guns: [
                    [ /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    [      24,     8,      1,      0,      0,      0,      0,   ], 
                    [_g.basic, _g.sniper, _g.rifle], 'manual', 'main', 'master', 0, ''], [
                    [      12,     8,      1,      0,      0,     180,     0,   ], 
                    [_g.dummy] ], [
                    [      4,      8,     1.5,    12,      0,     180,     0,   ], 
                    [_g.trap, _g.halfreload], 'manual', 'main', 'master', 0, ''],
                ]
            }),   
            longrifle: new entityPlan({
                name: 'Rifle',
                /****** ACCEL   SPEED   HEALTH  DAMAGE   PEN     FOV    DRONES */
                body: [  0.7,    0.9,     1,      1,      1,     1.35,    0],
                guns: [
                    [ /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    [      26,     8,      1,      0,      0,      0,      0,   ], 
                    [_g.basic, _g.sniper, _g.rifle], 'manual', 'main', 'master', 0, ''], [
                    [      5,      7,    -1.1,     9,      0,     180,     0,   ], 
                    [_g.dummy] ]
                ]
            }),  
            multirifle: new entityPlan({
                name: 'Blunderbuss',
                /****** ACCEL   SPEED   HEALTH  DAMAGE   PEN     FOV    DRONES */
                body: [  0.75,   0.8,     1,      1,      1,     1.1,     0],
                guns: [
                    [ /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    [      16,     3,      1,      0,     2.5,     2,      0,   ], 
                        [_g.basic, _g.sniper, _g.rifle, _g.halfreload, _g.halfrecoil, _g.lowpower, _g.bitlessspeed], 
                        'manual', 'main', 'master', 0, 'Pellet'], [
                    [      16,     3,      1,      0,    -2.5,    -2,      0,   ], 
                        [_g.basic, _g.sniper, _g.rifle, _g.halfreload, _g.halfrecoil, _g.lowpower, _g.bitlessspeed], 
                        'manual', 'main', 'master', 0, 'Pellet'], [
                    [      14,     3,      1,      0,     2.75,    4,      0,   ], 
                        [_g.basic, _g.sniper, _g.rifle, _g.halfreload, _g.halfrecoil, _g.lowpower, _g.bitlessspeed, _g.bitlessspeed], 
                        'manual', 'main', 'master', 0, 'Pellet'], [
                    [      14,     3,      1,      0,    -2.75,   -4,      0,   ],
                        [_g.basic, _g.sniper, _g.rifle, _g.halfreload, _g.halfrecoil, _g.lowpower, _g.bitlessspeed, _g.bitlessspeed], 
                        'manual', 'main', 'master', 0, 'Pellet'], [
                    [      12,     3,      1,      0,      3,      6,      0,   ], 
                        [_g.basic, _g.sniper, _g.rifle, _g.halfreload, _g.halfrecoil, _g.lowpower, _g.bitlessspeed, _g.bitlessspeed, _g.bitlessspeed], 
                        'manual', 'main', 'master', 0, 'Pellet'], [
                    [      12,     3,      1,      0,     -3,     -6,      0,   ], 
                        [_g.basic, _g.sniper, _g.rifle, _g.halfreload, _g.halfrecoil, _g.lowpower, _g.bitlessspeed, _g.bitlessspeed, _g.bitlessspeed], 
                        'manual', 'main', 'master', 0, 'Pellet'], [
                    [      24,     7,      1,      0,      0,      0,      0,   ], 
                       [_g.basic, _g.sniper, _g.rifle, _g.halfreload], 'manual', 'main', 'master', 0, 'Main'], [
                    [      6,      7,     -1.5,     8,      0,     180,     0,   ], 
                    [_g.dummy] ]
                ]
            }), 

        assass: new entityPlan({
            name: 'Assassin',
            /****** ACCEL   SPEED   HEALTH  DAMAGE   PEN     FOV    DRONES */
            body: [  0.35,   0.6,     1,      1,      1,     1.25,     0],
            guns: [
                [ /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                [      27,     8,      1,      0,      0,      0,      0,   ], 
                [_g.basic, _g.sniper, _g.assass], 'manual', 'main', 'master', 0, ''], [
                [      5,      8,    -1.6,     8,      0,      0,      0,   ], 
                [_g.dummy] ]
            ]
        }),
            buttbutt: new entityPlan({
                name: 'Sniper Gunner',
                /****** ACCEL   SPEED   HEALTH  DAMAGE   PEN     FOV    DRONES */
                body: [  0.35,   0.6,     1,      1,      1,     1.25,     0],
                guns: [
                    [ /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    [      16,     3,      1,      0,     -3,     180,     0,   ], 
                        [_g.basic, _g.gunner, _g.power], 'manual', 'main', 'master', 0, 'Gunner'], [
                    [      16,     3,      1,      0,      3,     180,     0,   ], 
                        [_g.basic, _g.gunner, _g.power], 'manual', 'main', 'master', 0, 'Gunner'], [
                    [      12,     12,     1,      0,      0,     180,     0,   ], 
                    [_g.dummy] ], [
                    [      27,     8,      1,      0,      0,      0,      0,   ], 
                        [_g.basic, _g.sniper, _g.assass, _g.halfreload], 'manual', 'main', 'master', 0, 'Assassin'], [
                    [      5,      8,    -1.6,     8,      0,      0,      0,   ], 
                    [_g.dummy] ]
                ]
            }),
            ranger: new entityPlan({
                name: 'Ranger',
                /****** ACCEL   SPEED   HEALTH  DAMAGE   PEN     FOV    DRONES */
                body: [  0.35,   0.6,     1,      1,      1,     1.5,     0],
                guns: [
                    [ /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    [      32,     8,      1,      0,      0,      0,      0,   ], 
                    [_g.basic, _g.sniper, _g.assass], 'manual', 'main', 'master', 0, ''], [
                    [      5,      8,    -1.6,     8,      0,      0,      0,   ], 
                    [_g.dummy] ]
                ]
            }),

        hunter: new entityPlan({
            name: 'Hunter',
            /****** ACCEL   SPEED   HEALTH  DAMAGE   PEN     FOV    DRONES */
            body: [  0.5,    0.7,     1,      1,      1,     1.15,    0],
            guns: [
                [ /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                [      24,     8,      1,      0,      0,      0,      0,   ], 
                [_g.basic, _g.sniper, _g.hunter, _g.hunter2], 'manual', 'main', 'master', 0, 'High-Penetration'], [
                [     21.5,   11.5,    1,      0,      0,      0,     0.2,  ], 
                [_g.basic, _g.sniper, _g.hunter], 'manual', 'main', 'master', 0, 'High-Damage'],
            ]
        }),
            poach: new entityPlan({
                name: 'Poacher',
                /****** ACCEL   SPEED   HEALTH  DAMAGE   PEN     FOV    DRONES */
                body: [  0.5,    0.7,     1,      1,      1,     1.15,    0],
                guns: [
                    [ /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    [      24,     8,      1,      0,      0,      0,      0,   ], 
                    [_g.basic, _g.sniper, _g.hunter, _g.hunter2], 'manual', 'main', 'master', 0, 'High-penetration'], [
                    [     21.5,   11.5,    1,      0,      0,      0,     0.2,  ], 
                    [_g.basic, _g.sniper, _g.hunter], 'manual', 'main', 'master', 0, 'High-damage'], [
                    [      7,     12,     1.2,     8,      0,      0,     180,  ], 
                    [_g.drone, _g.weak], 'always', 'auto', 'master', 3, ''],
                ]
            }),
            preda: new entityPlan({
                name: 'Predator',
                /****** ACCEL   SPEED   HEALTH  DAMAGE   PEN     FOV    DRONES */
                body: [  0.5,    0.65,    1,      1,      1,     1.15,    0],
                guns: [
                    [ /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    [      24,     8,      1,      0,      0,      0,      0,   ], 
                        [_g.basic, _g.sniper, _g.hunter, _g.hunter2, _g.hunter2, _g.preda], 'manual', 'main', 'master', 0, 'Ultra-High-Penetration'], [
                    [     21.5,  11.5,     1,      0,      0,      0,     0.1,  ], 
                        [_g.basic, _g.sniper, _g.hunter, _g.hunter2, _g.preda], 'manual', 'main', 'master', 0, 'High-Penetration'], [
                    [      19,    14,      1,      0,      0,      0,     0.2,  ], 
                        [_g.basic, _g.sniper, _g.hunter, _g.preda], 'manual', 'main', 'master', 0, 'High-Damage'],
                ]
            }),
        
    pounder: new entityPlan({
        name: 'Pounder',
        /****** ACCEL   SPEED   HEALTH  DAMAGE   PEN     FOV    DRONES */
        body: [   1,      1,      1,      1,      1,      1,      0],
        guns: [
            [ /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            [      20,    12,      1,      0,      0,      0,      0,   ], 
            [_g.basic, _g.pound], 'manual', 'main', 'master', 0, ''],
        ]
    }),
        builder: new entityPlan({
            name: 'Builder',
            /****** ACCEL   SPEED   HEALTH  DAMAGE   PEN     FOV    DRONES */
            body: [   1,     0.8,     1,      1,     1.05,    1,      0],
            guns: [
                [ /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                [      18,    14,      1,      0,      0,      0,      0,   ], 
                [_g.dummy] ], [
                [      2,     14,     1.1,     18,     0,      0,      0,   ], 
                [_g.trap, _g.block], 'manual', 'main', 'master', 0, ''],
            ]
        }),   
            construct: new entityPlan({
                name: 'Constructor',
                /****** ACCEL   SPEED   HEALTH  DAMAGE   PEN     FOV    DRONES */
                body: [  0.5,    0.8,     1,      1,     1.05,    1,      0],
                guns: [
                    [ /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    [      18,    18,      1,      0,      0,      0,      0,   ], 
                    [_g.dummy] ], [
                    [      2,     18,     1.2,     18,     0,      0,      0,   ], 
                    [_g.trap, _g.block, _g.construct], 'manual', 'main', 'master', 0, ''],
                ]
            }),              
            conq: new entityPlan({
                name: 'Conqueror',
                /****** ACCEL   SPEED   HEALTH  DAMAGE   PEN     FOV    DRONES */
                body: [  0.7,    0.8,     1,      1,     1.05,    1,      0],
                guns: [
                    [ /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    [      18,    14,      1,      0,      0,      0,      0,   ], 
                    [_g.dummy] ], [
                    [      2,     14,     1.1,     18,     0,      0,      0,   ], 
                    [_g.trap, _g.block], 'manual', 'main', 'master', 0, 'Builder'], [
                    [      20,    12,      1,      0,      0,     180,    0.5,   ], 
                    [_g.basic, _g.pound], 'manual', 'main', 'master', 0, 'Pounder'],
                ]
            }),   

        artillery: new entityPlan({
            name: 'Artillery',
            /****** ACCEL   SPEED   HEALTH  DAMAGE   PEN     FOV    DRONES */
            body: [   1,     0.8,     1,      1,      1,      1,      0],
            guns: [
                [ /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                [      17,     3,      1,      0,     -6,     -7,     0.25, ], 
                    [_g.basic, _g.gunner, _g.power], 'manual', 'main', 'master', 0, 'Secondary'], [
                [      17,     3,      1,      0,      6,      7,     0.75, ], 
                    [_g.basic, _g.gunner, _g.power], 'manual', 'main', 'master', 0, 'Secondary'], [
                [      19,    12,      1,      0,      0,      0,      0,   ], 
                    [_g.basic, _g.pound, _g.arty], 'manual', 'main', 'master', 0, 'Heavy'],
            ]
        }),          
            mortar: new entityPlan({
                name: 'Mortar',
                /****** ACCEL   SPEED   HEALTH  DAMAGE   PEN     FOV    DRONES */
                body: [   1,     0.8,     1,      1,      1,      1,      0],
                guns: [
                    [ /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    [      17,     3,      1,      0,      8,      0,     0.2,  ], 
                    [_g.basic, _g.gunner, _g.power, _g.twin], 'manual', 'main', 'master', 0, 'Secondary'], [
                    [      17,     3,      1,      0,     -8,      0,     0.4,  ], 
                    [_g.basic, _g.gunner, _g.power, _g.twin], 'manual', 'main', 'master', 0, 'Secondary'], [
                    [      17,     3,      1,      0,     5.5,     0,     0.6,  ], 
                    [_g.basic, _g.gunner, _g.power, _g.twin], 'manual', 'main', 'master', 0, 'Secondary'], [
                    [      17,     3,      1,      0,    -5.5,     0,     0.8,  ], 
                    [_g.basic, _g.gunner, _g.power, _g.twin], 'manual', 'main', 'master', 0, 'Secondary'], [
                    [      19,    10,      1,      0,      0,      0,      0,   ], 
                    [_g.basic, _g.pound, _g.arty, _g.arty], 'manual', 'main', 'master', 0, 'Heavy'],
                ]
            }),  
            spread: new entityPlan({
                name: 'Spreadshot',
                /****** ACCEL   SPEED   HEALTH  DAMAGE   PEN     FOV    DRONES */
                body: [   1,     0.8,     1,      1,      1,      1,      0],
                guns: [
                    [ /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    [      13,     3,      1,      0,    -1.2,    -90,    5/6,  ], 
                        [_g.basic, _g.gunner, _g.power, _g.twin, _g.lowpower, _g.lessreload], 'manual', 'main', 'master', 0, 'Spread'], [
                    [      14,     3,      1,      0,    -1.4,    -70,    4/6,  ], 
                        [_g.basic, _g.gunner, _g.power, _g.twin, _g.lowpower, _g.lessreload], 'manual', 'main', 'master', 0, 'Spread'], [
                    [      15,     3,      1,      0,    -1.8,    -50,    3/6,  ], 
                        [_g.basic, _g.gunner, _g.power, _g.twin, _g.lowpower, _g.lessreload], 'manual', 'main', 'master', 0, 'Spread'], [
                    [      16,     3,      1,      0,    -2.3,    -30,    2/6,  ], 
                        [_g.basic, _g.gunner, _g.power, _g.twin, _g.lowpower, _g.lessreload], 'manual', 'main', 'master', 0, 'Spread'], [
                    [      17,     3,      1,      0,    -3.5,    -10,    1/6,  ], 
                       [_g.basic, _g.gunner, _g.power, _g.twin, _g.lowpower, _g.lessreload], 'manual', 'main', 'master', 0, 'Spread'], [
                    [      13,     3,      1,      0,     1.2,     90,    5/6,  ], 
                       [_g.basic, _g.gunner, _g.power, _g.twin, _g.lowpower, _g.lessreload], 'manual', 'main', 'master', 0, 'Spread'], [
                    [      14,     3,      1,      0,     1.4,     70,    4/6,  ], 
                       [_g.basic, _g.gunner, _g.power, _g.twin, _g.lowpower, _g.lessreload], 'manual', 'main', 'master', 0, 'Spread'], [
                    [      15,     3,      1,      0,     1.8,     50,    3/6,  ], 
                       [_g.basic, _g.gunner, _g.power, _g.twin, _g.lowpower, _g.lessreload], 'manual', 'main', 'master', 0, 'Spread'], [
                    [      16,     3,      1,      0,     2.3,     30,    2/6,  ], 
                      [_g.basic, _g.gunner, _g.power, _g.twin, _g.lowpower, _g.lessreload], 'manual', 'main', 'master', 0, 'Spread'], [
                    [      17,     3,      1,      0,     3.5,     10,    1/6,  ], 
                       [_g.basic, _g.gunner, _g.power, _g.twin, _g.lowpower, _g.lessreload], 'manual', 'main', 'master', 0, 'Spread'], [
                    [      19,    10,      1,      0,      0,      0,      0,   ], 
                    [_g.basic, _g.pound, _g.spread, _g.lessreload], 'manual', 'main', 'master', 0, 'Front'],
                ]
            }),  
            skimmer: new entityPlan({
                name: 'Skimmer',
                /****** ACCEL   SPEED   HEALTH  DAMAGE   PEN     FOV    DRONES */
                body: [   1,     0.8,     1,      1,      1,      1,      0],
                guns: [
                    [ /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    [      19,    12,      1,      0,      0,      0,      0, ], 
                    [_g.basic, _g.pound, _g.arty, _g.skim], 'manual', 'main', 'master', 0, ''], [
                    [      17,    17,      1,      0,      0,      0,      0,   ], 
                    [_g.dummy] ],
                ]
            }), 

        destroy: new entityPlan({
            name: 'Destroyer',
            /****** ACCEL   SPEED   HEALTH  DAMAGE   PEN     FOV    DRONES */
            body: [   1,     0.9,     1,      1,      1,      1,      0],
            guns: [
                [ /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                [      21,    14,      1,      0,      0,      0,      0,   ], 
                [_g.basic, _g.pound, _g.destroy], 'manual', 'main', 'master', 0, ''],
            ]
        }),
            anni: new entityPlan({
                name: 'Annihilator',
                /****** ACCEL   SPEED   HEALTH  DAMAGE   PEN     FOV    DRONES */
                body: [   1,     0.9,     1,      1,      1,      1,      0],
                guns: [
                    [ /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    [     20.5,  19.5,     1,      0,      0,      0,      0,   ], 
                    [_g.basic, _g.pound, _g.destroy], 'manual', 'main', 'master', 0, ''],
                ]
            }),
            hybrid: new entityPlan({
                name: 'Hybrid',
                /****** ACCEL   SPEED   HEALTH  DAMAGE   PEN     FOV    DRONES */
                body: [   1,     0.9,     1,      1,      1,      1,      0],
                guns: [
                    [ /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    [      21,    14,      1,      0,      0,      0,      0,   ], 
                    [_g.basic, _g.pound, _g.destroy], 'manual', 'main', 'master', 0, ''], [
                    [      7,     12,     1.2,     8,      0,     180,     0,   ], 
                    [_g.drone, _g.weak], 'always', 'auto', 'master', 3, ''],
                ]
            }),
            death: new entityPlan({
                name: 'Death Star',
                /****** ACCEL   SPEED   HEALTH  DAMAGE   PEN     FOV    DRONES */
                body: [   1,     0.9,     1,      1,      1,      1,      0],
                guns: [
                    [ /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    [      16,    14,      1,      0,      0,      0,      0,   ], 
                        [_g.basic, _g.pound, _g.destroy, _g.halfreload], 'manual', 'main', 'master', 0, ''], [
                    [      16,    14,      1,      0,      0,     120,     0,   ], 
                        [_g.basic, _g.pound, _g.destroy, _g.halfreload], 'manual', 'main', 'master', 0, ''], [
                    [      16,    14,      1,      0,      0,     240,     0,   ], 
                        [_g.basic, _g.pound, _g.destroy, _g.halfreload], 'manual', 'main', 'master', 0, ''], [
                    [      16,    14,      1,      0,      0,      60,    0.05, ], 
                        [_g.basic, _g.pound, _g.destroy, _g.halfreload], 'manual', 'main', 'master', 0, ''], [
                    [      16,    14,      1,      0,      0,     180,    0.05, ], 
                        [_g.basic, _g.pound, _g.destroy, _g.halfreload], 'manual', 'main', 'master', 0, ''], [
                    [      16,    14,      1,      0,      0,     300,    0.05, ], 
                        [_g.basic, _g.pound, _g.destroy, _g.halfreload], 'manual', 'main', 'master', 0, ''],
                ]
            }),

    flank: new entityPlan({
        name: 'Flank Guard',
        /****** ACCEL   SPEED   HEALTH  DAMAGE   PEN     FOV    DRONES */
        body: [   1,      1,      1,      1,      1,      1,      0],
        guns: [
            [ /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            [      18,     8,      1,      0,      0,      0,      0,   ], 
            [_g.basic, _g.flank], 'manual', 'main', 'master', 0, ''], [
            [      18,     8,      1,      0,      0,      120,    0,   ], 
            [_g.basic, _g.flank], 'manual', 'main', 'master', 0, ''], [
            [      18,     8,      1,      0,      0,      240,    0,   ], 
            [_g.basic, _g.flank], 'manual', 'main', 'master', 0, ''],
        ]
    }),
        halftrap: new entityPlan({
            name: 'Trap Guard',
            /****** ACCEL   SPEED   HEALTH  DAMAGE   PEN     FOV    DRONES */
            body: [   1,      1,      1,      1,      1,      1,      0],
            guns: [
                [ /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                [      20,     8,      1,      0,      0,      0,      0,   ], 
                [_g.basic, _g.flank], 'manual', 'main', 'master', 0, ''], [
                [      14,     8,      1,      0,      0,     180,     0,   ], 
                [_g.dummy] ], [
                [      4,      8,     1.5,    14,      0,     180,     0,   ], 
                [_g.trap], 'manual', 'main', 'master', 0, ''],
            ]
        }), 
            guntrap: new entityPlan({
                name: 'Gunner Trapper',
                /****** ACCEL   SPEED   HEALTH  DAMAGE   PEN     FOV    DRONES */
                body: [  0.35,   0.6,     1,      1,      1,     1.25,     0],
                guns: [
                    [ /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    [      20,     3,      1,      0,     -4,      0,      0,   ], 
                        [_g.basic, _g.gunner, _g.power], 'manual', 'main', 'master', 0, ''], [
                    [      20,     3,      1,      0,      4,      0,      0,   ], 
                        [_g.basic, _g.gunner, _g.power], 'manual', 'main', 'master', 0, ''], [
                    [      12,     15,     1,      0,      0,      0,      0,   ], 
                    [_g.dummy] ], [
                    [      14,     8,      1,      0,      0,     180,     0,   ], 
                    [_g.dummy] ], [
                    [      4,      8,     1.5,    14,      0,     180,     0,   ], 
                    [_g.trap], 'manual', 'main', 'master', 0, ''],
                ]
            }),            

        tri: new entityPlan({
            name: 'Tri-Angle',
            /****** ACCEL   SPEED   HEALTH  DAMAGE   PEN     FOV    DRONES */
            body: [  1.1,    1.1,    0.9,     1,      1,      1,      0],
            guns: [
                [ /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                [      20,     8,      1,      0,      0,      0,      0,   ], 
                [_g.basic, _g.flank, _g.halfrecoil], 'manual', 'main', 'master', 0, ''], [
                [      16,     8,      1,      0,      0,     145,     0,   ], 
                [_g.basic, _g.flank, _g.lowpower, _g.morerecoil], 'manual', 'main', 'master', 0, 'Booster'], [
                [      16,     8,      1,      0,      0,     215,     0,   ], 
                [_g.basic, _g.flank, _g.lowpower, _g.morerecoil], 'manual', 'main', 'master', 0, 'Booster'],
            ]
        }),  
            bomber: new entityPlan({
                name: 'Bomber',
                /****** ACCEL   SPEED   HEALTH  DAMAGE   PEN     FOV    DRONES */
                body: [  1.1,    1,1,     0.9,     1,      1,      1,      0],
                guns: [
                    [ /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    [      20,     8,      1,      0,      0,      0,      0,   ], 
                        [_g.basic, _g.flank, _g.halfrecoil], 'manual', 'main', 'master', 0, 'Front'], [
                    [      18,     8,      1,      0,      0,     130,     0,   ], 
                        [_g.basic, _g.flank, _g.morerecoil], 'manual', 'main', 'master', 0, 'Wing'], [
                    [      18,     8,      1,      0,      0,     230,     0,   ], 
                        [_g.basic, _g.flank, _g.morerecoil], 'manual', 'main', 'master', 0, 'Wing'], [
                    [      14,     8,      1,      0,      0,     180,    0.5,   ], 
                    [_g.dummy] ], [
                    [      4,      8,     1.5,    14,      0,     180,     0,   ], 
                    [_g.trap], 'manual', 'main', 'master', 0, ''],
                ]
            }), 
            booster: new entityPlan({
                name: 'Booster',
                /****** ACCEL   SPEED   HEALTH  DAMAGE   PEN     FOV    DRONES */
                body: [  1.1,    1.1,    0.9,     1,      1,      1,      0],
                guns: [
                    [ /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    [      20,     8,      1,      0,      0,      0,      0,   ], 
                        [_g.basic, _g.flank, _g.halfrecoil], 'manual', 'main', 'master', 0, ''], [
                    [      13,     7,      1,      0,     -1,     130,    0.5,  ], 
                        [_g.basic, _g.flank, _g.lowpower, _g.morerecoil], 'manual', 'main', 'master', 0, 'Booster'], [
                    [      13,     7,      1,      0,      1,     230,    0.5,  ], 
                        [_g.basic, _g.flank, _g.lowpower, _g.morerecoil], 'manual', 'main', 'master', 0, 'Booster'], [
                    [      16,     8,      1,      0,      0,     145,     0,   ], 
                        [_g.basic, _g.flank, _g.lowpower, _g.morerecoil], 'manual', 'main', 'master', 0, 'Booster'], [
                    [      16,     8,      1,      0,      0,     215,     0,   ], 
                        [_g.basic, _g.flank, _g.lowpower, _g.morerecoil], 'manual', 'main', 'master', 0, 'Booster'],
                ]
            }), 
            fighter: new entityPlan({
                name: 'Fighter',
                /****** ACCEL   SPEED   HEALTH  DAMAGE   PEN     FOV    DRONES */
                body: [  1.1,    1.1,    0.9,     1,      1,      1,      0],
                guns: [
                    [ /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    [      20,     8,      1,      0,      0,      0,      0,   ], 
                        [_g.basic, _g.flank, _g.halfrecoil], 'manual', 'main', 'master', 0, 'Front'], [
                    [      17,     7,      1,      0,      1,     -90,     0,   ], 
                        [_g.basic, _g.flank, _g.flank], 'manual', 'main', 'master', 0, 'Side'], [
                    [      17,     7,      1,      0,     -1,      90,     0,   ], 
                        [_g.basic, _g.flank, _g.flank], 'manual', 'main', 'master', 0, 'Side'], [
                    [      16,     8,      1,      0,      0,     145,     0,   ], 
                        [_g.basic, _g.flank, _g.lowpower, _g.morerecoil], 'manual', 'main', 'master', 0, 'Booster'], [
                    [      16,     8,      1,      0,      0,     215,     0,   ], 
                        [_g.basic, _g.flank, _g.lowpower, _g.morerecoil], 'manual', 'main', 'master', 0, 'Booster'],
                ]
            }),  

        hexa: new entityPlan({
            name: 'Hexa',
            /****** ACCEL   SPEED   HEALTH  DAMAGE   PEN     FOV    DRONES */
            body: [   1,      1,      1,      1,      1,      1,      0],
            guns: [
                [ /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                [      18,     8,      1,      0,      0,      0,      0,   ], 
                [_g.basic, _g.flank, _g.flank], 'manual', 'main', 'master', 0, ''], [
                [      18,     8,      1,      0,      0,     120,     0,   ], 
                [_g.basic, _g.flank, _g.flank], 'manual', 'main', 'master', 0, ''], [
                [      18,     8,      1,      0,      0,     240,     0,   ], 
                [_g.basic, _g.flank, _g.flank], 'manual', 'main', 'master', 0, ''], [
                [      18,     8,      1,      0,      0,      60,    0.5,  ], 
                [_g.basic, _g.flank, _g.flank], 'manual', 'main', 'master', 0, ''], [
                [      18,     8,      1,      0,      0,     180,    0.5,  ], 
                [_g.basic, _g.flank, _g.flank], 'manual', 'main', 'master', 0, ''], [
                [      18,     8,      1,      0,      0,     300,    0.5,  ], 
                [_g.basic, _g.flank, _g.flank], 'manual', 'main', 'master', 0, ''],
            ]
        }),
            octo: new entityPlan({
                name: 'Octo',
                /****** ACCEL   SPEED   HEALTH  DAMAGE   PEN     FOV    DRONES */
                body: [   1,      1,      1,      1,      1,      1,      0],
                guns: [
                    [ /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    [      18,     8,      1,      0,      0,      0,      0,   ], 
                        [_g.basic, _g.flank, _g.flank], 'manual', 'main', 'master', 0, ''], [
                    [      18,     8,      1,      0,      0,      90,     0,   ], 
                        [_g.basic, _g.flank, _g.flank], 'manual', 'main', 'master', 0, ''], [
                    [      18,     8,      1,      0,      0,     180,     0,   ], 
                        [_g.basic, _g.flank, _g.flank], 'manual', 'main', 'master', 0, ''], [
                    [      18,     8,      1,      0,      0,     270,     0,   ], 
                        [_g.basic, _g.flank, _g.flank], 'manual', 'main', 'master', 0, ''], [
                    [      18,     8,      1,      0,      0,      45,    0.5,  ], 
                        [_g.basic, _g.flank, _g.flank], 'manual', 'main', 'master', 0, ''], [
                    [      18,     8,      1,      0,      0,     135,    0.5,  ], 
                        [_g.basic, _g.flank, _g.flank], 'manual', 'main', 'master', 0, ''], [
                    [      18,     8,      1,      0,      0,     225,    0.5,  ], 
                        [_g.basic, _g.flank, _g.flank], 'manual', 'main', 'master', 0, ''], [
                    [      18,     8,      1,      0,      0,     315,    0.5,  ], 
                        [_g.basic, _g.flank, _g.flank], 'manual', 'main', 'master', 0, ''],
                ]
            }),
            duodeca: new entityPlan({
                name: 'Tornado',
                /****** ACCEL   SPEED   HEALTH  DAMAGE   PEN     FOV    DRONES */
                body: [   1,      1,      1,      1,      1,      1,      0],
                guns: [
                    [ /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    [      18,     8,      1,      0,      0,      0,      0,   ], 
                        [_g.basic, _g.flank, _g.flank, _g.flank], 'manual', 'main', 'master', 0, ''], [
                    [      18,     8,      1,      0,      0,     120,    2/3,  ], 
                        [_g.basic, _g.flank, _g.flank, _g.flank], 'manual', 'main', 'master', 0, ''], [
                    [      18,     8,      1,      0,      0,     240,    1/3,  ], 
                        [_g.basic, _g.flank, _g.flank, _g.flank], 'manual', 'main', 'master', 0, ''], [
                    [      18,     8,      1,      0,      0,      60,    1/3,  ], 
                        [_g.basic, _g.flank, _g.flank, _g.flank], 'manual', 'main', 'master', 0, ''], [
                    [      18,     8,      1,      0,      0,     180,     0,   ], 
                        [_g.basic, _g.flank, _g.flank, _g.flank], 'manual', 'main', 'master', 0, ''], [
                    [      18,     8,      1,      0,      0,     300,    2/3,  ], 
                        [_g.basic, _g.flank, _g.flank, _g.flank], 'manual', 'main', 'master', 0, ''], [                
                    [      18,     8,      1,      0,      0,      0,     1/6,  ], 
                        [_g.basic, _g.flank, _g.flank, _g.flank], 'manual', 'main', 'master', 0, ''], [
                    [      18,     8,      1,      0,      0,     150,    5/6,  ], 
                        [_g.basic, _g.flank, _g.flank, _g.flank], 'manual', 'main', 'master', 0, ''], [
                    [      18,     8,      1,      0,      0,     270,    1/2,  ], 
                        [_g.basic, _g.flank, _g.flank, _g.flank], 'manual', 'main', 'master', 0, ''], [
                    [      18,     8,      1,      0,      0,      90,    1/2,  ], 
                        [_g.basic, _g.flank, _g.flank, _g.flank], 'manual', 'main', 'master', 0, ''], [
                    [      18,     8,      1,      0,      0,     210,    1/6,  ], 
                        [_g.basic, _g.flank, _g.flank, _g.flank], 'manual', 'main', 'master', 0, ''], [
                    [      18,     8,      1,      0,      0,     330,    5/6,  ], 
                        [_g.basic, _g.flank, _g.flank, _g.flank], 'manual', 'main', 'master', 0, ''],
                ]
            }),

    manager: new entityPlan({
        name: 'Manager',
        /****** ACCEL   SPEED   HEALTH  DAMAGE   PEN     FOV    DRONES */
        body: [  0.8,   0.95,     1,      1,      1,     1.1,      4],
        guns: [
            [ /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            [      7,     12,     1.2,     8,      0,      0,      0,   ], 
            [_g.drone], 'always', 'main', 'master', 0, ''],
        ]
    }),
        cruiser: new entityPlan({
            name: 'Cruiser',
            /****** ACCEL   SPEED   HEALTH  DAMAGE   PEN     FOV    DRONES */
            body: [  0.8,     1,      1,      1,      1,     1.15,     0],
            guns: [
                [ /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                [      7,      7,     0.6,     7,     -3.5,      0,      0,   ], 
                [_g.swarm], 'manual', 'main', 'master', 0, ''], [
                [      7,      7,     0.6,     7,      3.5,      0,     0.5,   ], 
                [_g.swarm], 'manual', 'main', 'master', 0, ''],
            ]
        }),
            battle: new entityPlan({
                name: 'Battleship',
                /****** ACCEL   SPEED   HEALTH  DAMAGE   PEN     FOV    DRONES */
                body: [  0.8,    0.7,     1,      1,      1,     1.25,     0],
                guns: [
                    [ /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    [      7,      9,     0.6,     6,     -3,     -30,    0.5,   ], 
                    [_g.swarm], 'manual', 'main', 'master', 0, ''], [
                    [      7,      9,     0.6,     6,      3,     30,    0.5,   ], 
                    [_g.swarm], 'manual', 'main', 'master', 0, ''], [
                    [      7,      9,     0.6,     7,      0,      0,      0,   ], 
                    [_g.swarm], 'manual', 'main', 'master', 0, ''],
                ]
            }),
            carrier: new entityPlan({
                name: 'Carrier',
                /****** ACCEL   SPEED   HEALTH  DAMAGE   PEN     FOV    DRONES */
                body: [  0.8,     1,      1,      1,      1,     1.15,     0],
                guns: [
                    [ /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    [      7,      7,     0.6,     7,    -3.5,    90,      0,   ], 
                    [_g.swarm], 'manual', 'main', 'master', 0, 'Guided'], [
                    [      7,      7,     0.6,     7,     3.5,    90,     0.5,  ], 
                    [_g.swarm], 'manual', 'auto', 'master', 0, 'Autonomous'], [
                    [      7,      7,     0.6,     7,    -3.5,    270,     0,   ], 
                    [_g.swarm], 'manual', 'auto', 'master', 0, 'Autonomous'], [
                    [      7,      7,     0.6,     7,     3.5,    270,    0.5,  ], 
                    [_g.swarm], 'manual', 'main', 'master', 0, 'Guided'],
                ]
            }),
            defend: new entityPlan({
                name: 'Unknown Tank',
                /****** ACCEL   SPEED   HEALTH  DAMAGE   PEN     FOV    DRONES */
                body: [  0.6,   0.6,     1,      1,      1,     1.15,      0],
                guns: [
                    [ /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    [      7,      7,     0.6,     7,      0,      0,      0,   ], 
                    [_g.swarm, _g.halfreload], 'manual', 'main', 'master', 0, ''], [
                    [      7,      7,     0.6,     7,      0,     120,   0.333, ], 
                    [_g.swarm, _g.halfreload], 'manual', 'main', 'master', 0, ''], [
                    [      7,      7,     0.6,     7,      0,     240,   0.667, ], 
                    [_g.swarm, _g.halfreload], 'manual', 'main', 'master', 0, ''],  [
                    [      14,     8,      1,      0,      0,     60,      0,   ], 
                    [_g.dummy] ], [
                    [      4,      8,     1.5,    14,      0,     60,      0,   ], 
                    [_g.trap, _g.halfrange, _g.halfreload], 'manual', 'main', 'master', 0, ''], [
                    [      14,     8,      1,      0,      0,     180,     0,   ], 
                    [_g.dummy] ], [
                    [      4,      8,     1.5,    14,      0,     180,     0,   ], 
                    [_g.trap, _g.halfrange, _g.halfreload], 'manual', 'main', 'master', 0, ''], [
                    [      14,     8,      1,      0,      0,     300,     0,   ], 
                    [_g.dummy] ], [
                    [      4,      8,     1.5,    14,      0,     300,     0,   ], 
                    [_g.trap, _g.halfrange, _g.halfreload], 'manual', 'main', 'master', 0, ''],
                ]
            }), 

        overseer: new entityPlan({
            name: 'Overseer',
            /****** ACCEL   SPEED   HEALTH  DAMAGE   PEN     FOV    DRONES */
            body: [  0.7,   0.90,     1,      1,      1,     1.1,      8],
            guns: [
                [ /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                [      7,     12,     1.2,     8,      0,     90,      0,   ], 
                [_g.drone, _g.over], 'always', 'main', 'master', 0, ''], [ 
                [      7,     12,     1.2,     8,      0,     270,     0,   ], 
                [_g.drone, _g.over], 'always', 'main', 'master', 0, ''],
            ]
        }),   
            overlord: new entityPlan({
                name: 'Overlord',
                /****** ACCEL   SPEED   HEALTH  DAMAGE   PEN     FOV    DRONES */
                body: [  0.6,   0.8,     1,      1,      1,     1.1,      8],
                guns: [
                    [ /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    [      7,     12,     1.2,     8,      0,      0,      0,   ], 
                    [_g.drone, _g.over], 'always', 'main', 'master', 0, ''], [ 
                    [      7,     12,     1.2,     8,      0,      90,     0,   ], 
                    [_g.drone, _g.over], 'always', 'main', 'master', 0, ''], [ 
                    [      7,     12,     1.2,     8,      0,     180,     0,   ], 
                    [_g.drone, _g.over], 'always', 'main', 'master', 0, ''], [ 
                    [      7,     12,     1.2,     8,      0,     270,     0,   ], 
                    [_g.drone, _g.over], 'always', 'main', 'master', 0, ''],
                ]
            }), 
            overtrap: new entityPlan({
                name: 'Overtrapper',
                /****** ACCEL   SPEED   HEALTH  DAMAGE   PEN     FOV    DRONES */
                body: [  0.6,   0.80,     1,      1,      1,     1.1,      4],
                guns: [
                    [ /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    [      7,     12,     1.2,     8,      0,     125,     0,   ], 
                    [_g.drone, _g.over], 'always', 'main', 'master', 0, ''], [ 
                    [      7,     12,     1.2,     8,      0,     235,     0,   ], 
                    [_g.drone, _g.over], 'always', 'main', 'master', 0, ''], [
                    [      14,     8,      1,      0,      0,     0,       0,   ], 
                    [_g.dummy] ], [
                    [      4,      8,     1.5,    14,      0,     0,       0,   ], 
                    [_g.trap], 'manual', 'main', 'master', 0, ''],                        
                ]
            }),   
            
};


{ // Define classic upgrades
    tank.basic.upgrades = [c.TIER_1, tank.twin, tank.sniper, tank.machine, tank.flank, tank.skimmerMissile];

        tank.twin.upgrades = [c.TIER_2, tank.double, tank.bent];
            tank.double.upgrades = [c.TIER_3, tank.tripletwin, tank.octo, tank.carrier];
            tank.bent.upgrades = [c.TIER_3, tank.penta, tank.triple, tank.spread];
        
        tank.sniper.upgrades = [c.TIER_2, tank.assass, tank.hunter, tank.overseer, tank.builder];
            tank.assass.upgrades = [c.TIER_3, tank.ranger];
            tank.hunter.upgrades = [c.TIER_3, tank.preda];
            tank.overseer.upgrades = [c.TIER_3, tank.overlord, tank.overtrap, tank.carrier];
            tank.builder.upgrades = [c.TIER_3, tank.defend, tank.guntrap, tank.overtrap, tank.construct];

        tank.machine.upgrades = [c.TIER_2, tank.destroy, tank.gunner];
            tank.destroy.upgrades = [c.TIER_3, tank.hybrid, tank.anni, tank.skimmer];
            tank.gunner.upgrades = [c.TIER_3, tank.guntrap, tank.stream];

        tank.flank.upgrades = [c.TIER_2, tank.tri, tank.hexa];
            tank.tri.upgrades = [c.TIER_3, tank.booster, tank.fighter];
            tank.hexa.upgrades = [c.TIER_3, tank.octo];
}

/*
{ // Define upgrades
    tank.basic.upgrades = [c.TIER_1, tank.twin, tank.machine, tank.sniper, tank.flank, tank.pounder, tank.manager];

        tank.twin.upgrades = [c.TIER_2, tank.double, tank.triple, tank.bent, tank.gunner];
            tank.double.upgrades = [c.TIER_3, tank.tripletwin, tank.doublebent, tank.doubletrap];
            tank.triple.upgrades = [c.TIER_3, tank.quint, tank.dual, tank.battle];
            tank.bent.upgrades = [c.TIER_3, tank.doublebent, tank.penta, tank.bentblaster];
            tank.gunner.upgrades = [c.TIER_3, tank.heavy, tank.mortar];
        
        tank.machine.upgrades = [c.TIER_2, tank.blaster, tank.chain, tank.doublemach, tank.mini];
            tank.blaster.upgrades = [c.TIER_3, tank.bentblaster];
            tank.doublemach.upgrades = [c.TIER_3, tank.triplemach];
            tank.mini.upgrades = [c.TIER_3, tank.stream, tank.hotshot];

        tank.sniper.upgrades = [c.TIER_2, tank.assass, tank.rifle, tank.hunter];
            tank.assass.upgrades = [c.TIER_3, tank.ranger, tank.buttbutt];
            tank.rifle.upgrades = [c.TIER_3, tank.longrifle, tank.rifletrap, tank.multirifle];
            tank.hunter.upgrades = [c.TIER_3, tank.preda, tank.poach];

        tank.flank.upgrades = [c.TIER_2, tank.hexa, tank.halftrap, tank.tri];
            tank.hexa.upgrades = [c.TIER_3, tank.octo, tank.duodeca, tank.death];
            tank.halftrap.upgrades = [c.TIER_3, tank.guntrap, tank.rifletrap, tank.doubletrap, tank.bomber, tank.defend];
            tank.tri.upgrades = [c.TIER_3, tank.booster, tank.fighter, tank.bomber];

        tank.pounder.upgrades = [c.TIER_2, tank.destroy, tank.artillery, tank.builder];
            tank.destroy.upgrades = [c.TIER_3, tank.anni, tank.hybrid, tank.hotshot, tank.death];
            tank.artillery.upgrades = [c.TIER_3, tank.mortar, tank.spread];
            tank.builder.upgrades = [c.TIER_3, tank.constructor, tank.conq];
    
        tank.manager.upgrades = [c.TIER_2, tank.overseer, tank.cruiser];
            tank.cruiser.upgrades = [c.TIER_3, tank.carrier, tank.battle, tank.defend];
            tank.overseer.upgrades = [c.TIER_3, tank.overlord, tank.overtrap];
}
*/
