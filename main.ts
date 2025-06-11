//=================================GLOBAL===================================


//================================CONSTANTS=================================


//================================CLASSES===================================


//================================FUNCTIONS==================================
function createHero(): void {
    mySprite = sprites.create(img`
        . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . 
        . . f f e e e e f 2 f . . . 
        . f f e e e e f 2 2 2 f . . 
        . f e e e f f e e e e f . . 
        . f f f f e e 2 2 2 2 e f . 
        . f e 2 2 2 f f f f e 2 f . 
        f f f f f f f e e e f f f . 
        f f e 4 4 e b f 4 4 e e f . 
        f e e 4 d 4 1 f d d e f f . 
        . f e e e 4 d d d d f d d f 
        . . . f e e 4 e e e f b b f 
        . . . f 2 2 2 4 d d e b b f 
        . . f f 4 4 4 e d d e b f . 
        . . f f f f f f e e f f . . 
        . . . f f . . . f f f . . . 
        `, SpriteKind.Player)
    controller.moveSprite(mySprite, 100, 0)
    mySprite.ay = gravity
    scene.cameraFollowSprite(mySprite)
}
function createTilemap(): void {
    tiles.setCurrentTilemap(assets.tilemap`crowdRace`)
}
function spawnHero(): void{
 tiles.placeOnRandomTile(mySprite,assets.image`myTile`)
}
//================================EVENT HANDLERS=============================
game.onUpdate(function () {
    if (mySprite.vy == 0) {
        number_of_jumps = 0
    }
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vy < 30 || number_of_jumps == 1) {
        number_of_jumps += 1
        mySprite.vy = jump_speed
    }
})

//================================MAIN=======================================
createTilemap()
let gravity = 300
let mySprite: Sprite = null
let jump_speed = -175
let number_of_jumps = 0
createHero()
spawnHero()