namespace SpriteKind {
    export const Coin = SpriteKind.create()
    export const Ball = SpriteKind.create()
    export const door = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Ball, function (sprite, otherSprite) {
    otherSprite.destroy()
    HoOh = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    animation.runImageAnimation(
    HoOh,
    [img`
        ..............................................
        ..............................................
        ..............................................
        ..............................................
        ..............................................
        ..............................................
        ..............................................
        ..............................................
        ..............................................
        ..............................................
        ..............................................
        .......ff.....................................
        ......f1ff....................................
        .....f722f....................................
        ....f7122f....................................
        ....f722f.................ff..................
        ...f7222f...........5....ff7f.................
        ...f7222f................f2d7f................
        ...f7222f........5...5....f2d7f...............
        ...f1222f......5........55f2d2f5..............
        ...f1222f..........ffff...f22d7f..............
        ...f7d222f.......fff11ffff222d7f5.............
        ....fd222ff.....f11441411f222df...............
        ....f7d2f44ff..f441444444f222d7f..............
        .....f7ff4444f.f44444444f2222d7f5.............
        ......f444444ff44444444f2222ddf...............
        ......f4444422f444444ff22222d7f...............
        .......f4442222f444ff222222d7f................
        ........f442ff27f4f2222222d7f.................
        ........ff2f1f272ff222222d7ff.................
        ........f42212722f22222dd7f4f.................
        .......f44422ff2222222d7ff44f.................
        .......f444ff2d22222dfff44ff..................
        ......f44ff.fdd22222df44ff....................
        ......f4f...f1dd222dd1f4f.....................
        .......f.....fffdddd111f......................
        ............f88ffffd111f......................
        ............f8f8f..f11ff......................
        .............fff....f88ff.....................
        ....................f8f8f.....................
        .....................fff......................
        ..............................................
        ..............................................
        ..............................................
        ..............................................
        ..............................................
        `,img`
        ..............................................
        ..............................................
        ..............................................
        ..............................................
        ..............................................
        ..............................................
        ..............................................
        ..............................................
        ..............................................
        ..............................................
        .......................44.....................
        .......ff.....................................
        ......f1ff..................4444..............
        .....f722f..............4.....................
        ....f7122f............444.....................
        ....f722f........44.5.....ff.44...............
        ...f7222f........4..5.4..ff7f.44..............
        ...f7222f................f2d7f.44.............
        ...f7222f.....4..55.55....f2d7f.4.............
        ...f1222f......5........55f2d2f5..............
        ...f1222f.....55...ffff...f22d7f..............
        ...f7d222f.......fff11ffff222d7f5.............
        ....fd222ff.....f11441411f222df..5............
        ....f7d2f44ff..f441444444f222d7f..............
        .....f7ff4444f.f44444444f2222d7f5.............
        ......f444444ff44444444f2222ddf..5............
        ......f4444422f444444ff22222d7f...............
        .......f4442222f444ff222222d7f................
        ........f442ff27f4f2222222d7f.................
        ........ff2f1f272ff222222d7ff.................
        ........f42212722f22222dd7f4f.................
        .......f44422ff2222222d7ff44f.................
        .......f444ff2d22222dfff44ff..................
        ......f44ff.fdd22222df44ff....................
        ......f4f...f1dd222dd1f4f.....................
        .......f.....fffdddd111f......................
        ............f88ffffd111f......................
        ............f8f8f..f11ff......................
        .............fff....f88ff.....................
        ....................f8f8f.....................
        .....................fff......................
        ..............................................
        ..............................................
        ..............................................
        ..............................................
        ..............................................
        `,img`
        ..............................................
        ..............................................
        ..............................................
        ..............................................
        ..............................................
        ..............................................
        ..............................................
        .........................2222.................
        ........................22....22..............
        .............................22...............
        .......................44..222................
        .......ff............2.....2..................
        ......f1ff.......22..2......4444.2............
        .....f722f.....222......55.......2............
        ....f7122f............445.......22............
        ....f722f........44.5.....ff.44...............
        ...f7222f........4..5.4..ff7f.44..............
        ...f7222f.........2....5.f2d7f.42.............
        ...f7222f.....4..52.55.5..f2d7f.25............
        ...f1222f......5........55f2d2f5.2.5..........
        ...f1222f.....55...ffff...f22d7f..55..........
        ...f7d222f.......fff11ffff222d7f5.5...........
        ....fd222ff.....f11441411f222df..5............
        ....f7d2f44ff..f441444444f222d7f..............
        .....f7ff4444f.f44444444f2222d7f5.............
        ......f444444ff44444444f2222ddf.22............
        ......f4444422f444444ff22222d7f22.............
        .......f4442222f444ff222222d7f22..............
        ........f442ff27f4f2222222d7f.................
        ........ff2f1f272ff222222d7ff.................
        ........f42212722f22222dd7f4f.................
        .......f44422ff2222222d7ff44f.................
        .......f444ff2d22222dfff44ff..................
        ......f44ff.fdd22222df44ff....................
        ......f4f...f1dd222dd1f4f.....................
        .......f.....fffdddd111f......................
        ............f88ffffd111f......................
        ............f8f8f..f11ff......................
        .............fff....f88ff.....................
        ....................f8f8f.....................
        .....................fff......................
        ..............................................
        ..............................................
        ..............................................
        ..............................................
        ..............................................
        `],
    100,
    true
    )
    HoOh.setPosition(Charizard.x + 50, Charizard.y - 70)
    HoOh.follow(Charizard)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile6`, function (sprite, location) {
    game.over(true, effects.confetti)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Coin, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Charizard.vy == 0) {
        Charizard.vy = -170
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    game.over(false, effects.slash)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    if (Charizard.y < otherSprite.y) {
        info.changeScoreBy(3)
    } else {
        info.changeLifeBy(-1)
    }
})
let HoOh: Sprite = null
let Pokeball: Sprite = null
let candy: Sprite = null
let Charizard: Sprite = null
scene.setBackgroundColor(12)
Charizard = sprites.create(img`
    ................................
    ....ffff........................
    ...f2222ff......................
    ..f2552222f.....................
    ..f55222ffff..ffff....ff........
    .f44f22ff444fff444f...f4f.......
    .f4f4ff44884f4444ff...f4f.......
    f44ff448888ff444ff4f...f4f......
    f4f4488888ff444f.f44f..f44f.....
    ff4888888ffff4f...f44ffff4f.....
    f488888888f44ff..fff444444f.....
    fffff8888844444ff444f444444f....
    f4444ff4f444444444ff44f4444f....
    .f44f444f444f4444f.f441f444ff...
    .f44f444f44f1f44f...f41ff4444f..
    ..ff44444f4444ff4f...ff444444f..
    ...f444444f441f44f.....ff444f...
    ...f44444f4fff44f........fff....
    ....f44444f555ff4f..............
    ....f44444f5ffffff..............
    .....f444fff....................
    .....f4141f.....................
    ......ffff......................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    `, SpriteKind.Player)
controller.moveSprite(Charizard, 100, 0)
tiles.setTilemap(tilemap`level1`)
Charizard.ay = 350
scene.cameraFollowSprite(Charizard)
info.setLife(3)
for (let value of tiles.getTilesByType(assets.tile`myTile7`)) {
    candy = sprites.create(img`
        ............................
        ............................
        ............................
        ............................
        ...................ff.......
        ..................f88f......
        .................f888f......
        .................888888f....
        .............fff81888888f...
        ...........f888888188888f...
        ..........f8888888818888f...
        ..........88888888881888....
        .........888888888888fff....
        .........f88888888888.......
        .........f8888888888f.......
        .........f1888888888f.......
        .....fff888188888888........
        ....f88888881888888f........
        ....f8888888f18888f.........
        .....f88888888ff8...........
        ......f888888...............
        ......f88888f...............
        .......f8888f...............
        ........ff88f...............
        ..........ff................
        ............................
        ............................
        ............................
        `, SpriteKind.Coin)
    animation.runImageAnimation(
    candy,
    [img`
        ..........................
        ..........................
        .................ff.......
        ................f88f......
        ...............f888f......
        ...............888888f....
        ...........fff81888888f...
        .........f888888188888f...
        ........f8888888818888f...
        ........88888888881888....
        .......888888888888fff....
        .......f88888888888.......
        .......f8888888888f.......
        .......f1888888888f.......
        ...fff888188888888........
        ..f88888881888888f........
        ..f8888888f18888f.........
        ...f88888888ff8...........
        ....f888888...............
        ....f88888f...............
        .....f8888f...............
        ......ff88f...............
        ........ff................
        ..........................
        ..........................
        ..........................
        `,img`
        ..........................
        ..........................
        .................ff5......
        .............5..f88f.5....
        ..........4....f888f....5.
        ...............888888f....
        ...........fff81888888f...
        .....45..f888888188888f...
        ....4...f8888888818888f...
        ........88888888881888..5.
        .......888888888888fff....
        .......f88888888888.......
        ......5f8888888888f..5....
        ....5..f1888888888f.......
        ...fff888188888888..5.....
        ..f88888881888888f........
        ..f8888888f18888f.........
        ...f88888888ff8...5.......
        ....f888888....5..........
        ....f88888f...............
        ..5..f8888f.5.............
        ......ff88f...............
        ........ff................
        ..........................
        ......5...................
        ..........................
        `,img`
        ..........................
        .............4............
        ...........444...ff5......
        .............5..f88f.444..
        ..........4..54f888f..544.
        .............4.888888f.4..
        ........554fff81888888f.4.
        .....45..f888888188888f...
        ....4...f8888888818888f...
        ......4.88888888881888..5.
        .....4.888888888888fff....
        ....4..f88888888888.......
        ......5f8888888888f..5....
        ....5.4f1888888888f..4..4.
        ...fff888188888888..4444..
        ..f88888881888888f........
        ..f8888888f18888f4........
        ...f88888888ff84445.......
        ....f888888...444.........
        444.f88888f44..44.........
        .45..f8888f.44..4.........
        .444..ff88f44.............
        ....45..ff................
        .....44...................
        ......444.................
        ........4.................
        `,img`
        .................22.......
        ...........2.4..222.2.....
        ...........224...ff522....
        ........2....5..f88f.242..
        ........2.4.254f888f..544.
        .......22....4.888888f.22.
        ....2222554fff81888888f.2.
        ...2245..f888888188888f...
        ...24...f8888888818888f.2.
        ......4.888888888818882.5.
        .....4.888888888888fff2...
        ....4..f88888888888.......
        ......5f8888888888f..52...
        ....5.4f1888888888f..4224.
        .2.fff888188888888..4244..
        .2f88888881888888f...2....
        ..f8888888f18888f4..22....
        ...f88888888ff844452......
        ....f888888...444.........
        424.f88888f44..42.........
        .25..f8888f.442.4.........
        .444..ff88f44.............
        ....45..ff................
        .....44..222..............
        ......422.................
        ........4.................
        `,img`
        .................22.......
        ...........2.4..222.2.....
        ...........224...ff522....
        ........2....5..f88f.242..
        ........2.4.254f888f..544.
        .......22....4.888888f.22.
        ....2222554fff81888888f.2.
        ...2245..f888888188888f...
        ...24...f8888888818888f.2.
        ......45888888888818882.5.
        ..22.4.888888888888fff2...
        .2444..f88888888888.....2.
        .2.4..5f8888888888f..52.2.
        ...45.4f1888888888f..4224.
        .24fff888188888888..4244..
        .2f88888881888888f...2....
        ..f8888888f18888f4..22....
        ...f88888888ff844452......
        ...5f888888...444.........
        424.f88888f44..42.........
        .25..f8888f.442.4.........
        .444..ff88f42.............
        ....45.5ff................
        .....44..222..............
        ......422.................
        ........4.................
        `,img`
        ..........................
        ..........................
        ..........................
        ..........................
        ..........................
        ..........................
        ..........................
        ..........................
        ..........................
        ..........................
        ..........................
        ..........................
        ..........................
        ..........................
        ..........................
        ..........................
        ..........................
        ..........................
        ..........................
        ..........................
        ..........................
        ..........................
        ..........................
        ..........................
        ..........................
        ..........................
        `],
    100,
    true
    )
    tiles.placeOnTile(candy, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
}
for (let value of tiles.getTilesByType(assets.tile`myTile9`)) {
    Pokeball = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f a a a a f f . . . . 
        . . . f a a a a a a a a f . . . 
        . . . f a b b a a b b a f . . . 
        . . f a a b a b b a b a a f . . 
        . . f a a b a f f a b a a f . . 
        . . f f a a f 1 b f a a f f . . 
        . . f 1 f f f b b f f f b f . . 
        . . . f 1 1 1 f f b b b f . . . 
        . . . f b 1 1 1 b b b b f . . . 
        . . . . f f b b b b f f . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Ball)
    tiles.placeOnTile(Pokeball, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
}
game.onUpdate(function () {
    Charizard.setImage(img`
        ................................
        ....ffff........................
        ...f2222ff......................
        ..f2552222f.....................
        ..f55222ffff..ffff....ff........
        .f44f22ff444fff444f...f4f.......
        .f4f4ff44884f4444ff...f4f.......
        f44ff448888ff444ff4f...f4f......
        f4f4488888ff444f.f44f..f44f.....
        ff4888888ffff4f...f44ffff4f.....
        f488888888f44ff..fff444444f.....
        fffff8888844444ff444f444444f....
        f4444ff4f444444444ff44f4444f....
        .f44f444f444f4444f.f441f444ff...
        .f44f444f44f1f44f...f41ff4444f..
        ..ff44444f4444ff4f...ff444444f..
        ...f444444f441f44f.....ff444f...
        ...f44444f4fff44f........fff....
        ....f44444f555ff4f..............
        ....f44444f5ffffff..............
        .....f444fff....................
        .....f4141f.....................
        ......ffff......................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        `)
    if (Charizard.vy < 0) {
        Charizard.setImage(img`
            ................ff..............
            ...............f44f.............
            .............fff444f............
            ..........fff444444f............
            .........f444444444f............
            .......ff44f4444f4f.............
            ......f44fff444ff4f.............
            ......fff..f44f11f..............
            ...........f44444f..............
            ..........f44f44f...............
            .........f44f4ff................
            .......ff44ff4f.................
            ......f4fff.f44f.ff.ff..........
            ......f44f...f44f44f4f..........
            ......f444f..f444f44ff..........
            ......ff444ff4444ff4ff..........
            .......f4444f444f41f5f..........
            .......fff4f444f144f5f..........
            ......f44fff4444f44f55f.........
            .....ff488fff44444f4ffff........
            ....f2f4888f88444f4f44f1f.......
            ....f2ff488888fff4444444f.......
            ...f222f4888884444444441f.......
            ...f2222f48888f444444444f.......
            ...f2522f48888f4444444ff........
            ...f255f4f488f4ff444ff..........
            ....f254ff488f444fff............
            .....ff444f48f444f..............
            .......ff44f4f4ff...............
            .........ffffff.................
            ................................
            ................................
            `)
    } else if (Charizard.vy > 0) {
        Charizard.setImage(img`
            ................................
            ................................
            .................ffffff.........
            ...............ff4f4f44ff.......
            ..............f444f84f444ff.....
            ............fff444f884ff452f....
            ..........ff444ff4f884f4f552f...
            ........ff4444444f88884f2252f...
            .......f444444444f88884f2222f...
            .......f1444444444888884f222f...
            .......f4444444fff888884ff2f....
            .......f1f44f4f44488f8884f2f....
            ........ffff4f44444fff884ff.....
            .........f55f44f4444fff44f......
            ..........f5f441f444f4fff.......
            ..........f5f14f444f4444f.......
            ..........ff4ff4444ff444ff......
            ..........ff44f444f..f444f......
            ..........f4f44f44f...f44f......
            ..........ff.ff.f44f.fff4f......
            .................f4ff44ff.......
            ................ff4f44f.........
            ...............f44f44f..........
            ..............f44444f...........
            ..............f11f44f..fff......
            .............f4ff444fff44f......
            .............f4f4444f44ff.......
            ............f444444444f.........
            ............f444444fff..........
            ............f444fff.............
            .............f44f...............
            ..............ff................
            `)
    } else if (Charizard.x % 2 == 0) {
        Charizard.setImage(img`
            ................................
            ....ffff........................
            ...f2222ff......................
            ..f2552222f.....................
            ..f55222ffff..ffff....ff........
            .f44f22ff444fff444f...f4f.......
            .f4f4ff44884f4444ff...f4f.......
            f44ff448888ff444ff4f...f4f......
            f4f4488888ff444f.f44f..f44f.....
            ff4888888ffff4f...f44ffff4f.....
            f488888888f44ff..fff444444f.....
            fffff8888844444ff444f444444f....
            f4444ff4f444444444ff44f4444f....
            .f44f444f444f4444f.f441f444ff...
            .f44f444f44f1f44f...f41ff4444f..
            ..ff44444f4444ff4f...ff444444f..
            ...f444444f441f44f.....ff444f...
            ...f44444f4fff44f........fff....
            ....f44444f555ff4f..............
            ...f44444f.5ffffff..............
            ....f444ff.f....................
            ....f4141f......................
            .....ffff.......................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            `)
    } else {
    	
    }
    if (Charizard.vx < 0) {
        Charizard.image.flipX()
    }
})
