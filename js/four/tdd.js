'use strict'

const Board = require('./logic').Board

const board = new Board() 

const testGlobals = () => {
    // test the values 
    let x = ["WHITE","BLACK","LIGHT","DARK","INFLUENCE","ATTACK","SUPPORT"]
    let isOk = true
    x.forEach((expected)=> { 
        let actual = require("./GLOBALS")[expected]
        if (actual !== expected) {
            console.log("BOO! " + actual + " but expected " + expected )
        }
    })
    // test the types 
    x = ["POSSIBLE_MOVES","LOOKUP_DOM1","LOOKUP_DOM2","LOOKUP_CELL"]
    x.forEach((expected)=> { 
        let actual = require("./GLOBALS")[expected]
        if ( typeof actual != "object") {
            console.log("BOO! " + actual + " but expected object" )
        }
    })
    verdict(isOk, "importGlobals")
}

const setupBoard = () => { 
    const LIGHT = require('./GLOBALS').LIGHT
    const DARK = require('./GLOBALS').DARK

    let isOk = true 
    if ( board.board.length != 8 || board.board[0].length != 8 ) { 
        isOk = false 
    }     
    let left_up = board.board[0][0]
    let left_down = board.board[7][0]
    let right_up = board.board[0][7]
    let right_down = board.board[7][7]

    if ( left_up.css !== LIGHT || left_up.id !== "a1") {
        isOk = false
    }
    if ( left_down.css !== DARK || left_down.id !== "h1") {
        isOk = false
    }
    if ( right_up.css !== DARK || right_up.id !== "a8") {
        isOk = false
    }
    if ( right_down.css !== LIGHT || right_down.id !== "h8") {
        isOk = false
    }
    verdict(isOk, "board is OK and the four corner cells are well formed" )
}

const  testDoesTheBoardHavePieces = () => { 
    let count = 0 
    for ( let k in board.PIECES) {
        count++ 
    }
    let isOk = count === 32
    verdict(isOk, "The board has " + count + " pieces ")
}

const testAreTheBoardsOnTheBoard_and_doesTheBoardKnowAboutThat = () => { 
    let pieces_on_the_board_count = 0 
    for ( let row = 0; row < 8; row++ ){ 
        for ( let col = 0; col < 8; col++ ) {
            let cell = board.board[row][col]
            if ( cell.pieceId != "") {
                pieces_on_the_board_count++
            }
        }
    }
    let isOk = pieces_on_the_board_count === 32 
    verdict(isOk, "testAreTheBoardsOnTheBoard_and_doesTheBoardKnowAboutThat")
}
const testCellLookup = () => { 

    const expected = { 
        a1:[0,0],
        a2:[0,1],
        h1:[7,0],
        h8:[7,7]
    }
    let isOk = true 
    for ( let key in expected ) { 
        let e = expected[key]
        let a = board.LOOKUP_CELL[key]
        if ( e[0] !== a[0] || e[1] !== a[1] ) {
            isOk = false
        }        
    }
    verdict(isOk, "board.LOOKUP_CELL is good ")
}

const board_layoutIsProper = () => {
    let expected = ""
    expected += "\tR P x  x  x  x  P R \n"
    expected += "\tK P x  x  x  x  P K \n"
    expected += "\tB P x  x  x  x  P B \n"
    expected += "\tQ P x  x  x  x  P Q \n"
    expected += "\tK P x  x  x  x  P K \n"
    expected += "\tB P x  x  x  x  P B \n"
    expected += "\tK P x  x  x  x  P K \n"
    expected += "\tR P x  x  x  x  P R "

   let actual = getCurrentLayout()
    let isOk = expected === actual
    console.log(actual)
    verdict(isOk,"board_layoutIsProper" )
}







////// -------------- HOUSEWORK FOLLOWS ------------------ /////////////

const getCurrentLayout = () => {
                    
    let layout = "" 
    board.board.forEach((row, i)=> { 
        layout += "\t"
        row.forEach((cell,j)=>{
            let type = "x"
            if ( cell.pieceId !== "" ) { 
                let piece = board.PIECES[cell.pieceId]
                layout += piece.type + " "
            } else {
                layout += "x  "
            }
        })
        if ( i < board.board.length - 1 ) { 
            layout += "\n"
        }
    }) 
    return layout

}



function note(msg) {
    console.log("\t\t" + msg)
}
function unroll(obj, msg ) {
    msg = msg || ""
    console.log( msg + " " + JSON.stringify(obj,null,6))
}
function verdict(flag, msg) {
    if ( flag ) {
        console.log("PASS " + msg )
    } else {
        console.log("FAIL " + msg )
    }
}
function main() {
    console.log("\n\n\n******************************\n")
    testGlobals()
    setupBoard()
    testDoesTheBoardHavePieces()
    testAreTheBoardsOnTheBoard_and_doesTheBoardKnowAboutThat() 
    testCellLookup()
    board_layoutIsProper()
}
main()