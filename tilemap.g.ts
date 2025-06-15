// Auto-generated code. Do not edit.
namespace myImages {

    helpers._registerFactory("image", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "myTiles.transparency16":return img`
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
`;
            case "myTiles.tile1":
            case "myTile":return img`
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
`;
        }
        return null;
    })

    helpers._registerFactory("animation", function(name: string) {
        switch(helpers.stringTrim(name)) {

        }
        return null;
    })

    helpers._registerFactory("song", function(name: string) {
        switch(helpers.stringTrim(name)) {

        }
        return null;
    })

}
// Auto-generated code. Do not edit.

// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "crowdRace":
            case "crowdRace2":return tiles.createTilemap(hex`1000100003020405060708090a0503020809060701010101010101010101010101010101010101010101010101010101010b0b0b0101010101010101010b0b0b01010101010101010b0b0b0101010101010101010101010101010101010101010101010101010b0b0101010b0b01010101010101010101010101010101010b0b0101010101010101010101010101010101010101010101010b0b0b0b01010101010b0b0b010101010101010101010101010101010b0b0b010101010101010b0b0b0101010101010101010101010101010101010101010101010b0b0b0b010101010101010c0101010101010101010101010101010b0b0b0b0b0101010101010101010101`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . 2 2 2 
. . . . . . . . . 2 2 2 . . . . 
. . . . 2 2 2 . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . 2 2 . . . 2 2 . . . . . . . 
. . . . . . . . . . 2 2 . . . . 
. . . . . . . . . . . . . . . . 
. . . . 2 2 2 2 . . . . . 2 2 2 
. . . . . . . . . . . . . . . . 
2 2 2 . . . . . . . 2 2 2 . . . 
. . . . . . . . . . . . . . . . 
. . . . . 2 2 2 2 . . . . . . . 
. . . . . . . . . . . . . . . . 
2 2 2 2 2 . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.builtin.brick,sprites.builtin.crowd1,sprites.builtin.crowd0,sprites.builtin.crowd2,sprites.builtin.crowd3,sprites.builtin.crowd4,sprites.builtin.crowd5,sprites.builtin.crowd6,sprites.builtin.crowd7,sprites.builtin.crowd8,sprites.vehicle.roadHorizontal,myTiles.tile1], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return myTiles.transparency16;
            case "myTile":
            case "tile1":return myTiles.tile1;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
