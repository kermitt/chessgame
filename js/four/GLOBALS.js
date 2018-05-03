const WHITE = "WHITE"
const BLACK = "BLACK"
const LIGHT = "LIGHT"
const DARK = "DARK"
const INFLUENCE = "INFLUENCE"
const ATTACK = "ATTACK"
const SUPPORT= "SUPPORT"
let POSSIBLE_MOVES = {}
let LOOKUP_DOM1 = {} // A board
let LOOKUP_DOM2 = {} // A mirrored board
let LOOKUP_CELL = {} // The logical cell lookup
try { 
    module.exports = {
        WHITE,
        BLACK,
        LIGHT,
        DARK,
        INFLUENCE,
        ATTACK,
        SUPPORT,
        POSSIBLE_MOVES,
        LOOKUP_DOM1,
        LOOKUP_DOM2,
        LOOKUP_CELL
    }
} catch(err) {
    if ( err == "ReferenceError: module is not defined") {
        // ignore this 'error'... it is because browsers are not node
    } else {
        console.log(err)
    }
}