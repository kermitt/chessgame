//use strict'

//const Cell = require('./Cell')
//const WHITE = require('./GLOBALS').WHITE
//const BLACK = require('./GLOBALS').BLACK
//const LIGHT = require('./GLOBALS').LIGHT
//const DARK = require('./GLOBALS').DARK

class Cell {
    constructor (css, id) {
        this.css = css
        this.id = id
        this.pieceId = ""
    }
    getPieceId() {
        return this.pieceId // Might be "". Might be a pieceId. 
    }
    setPiece(pieceId) {
        this.pieceId = pieceId
    }
    getCellHtml () {
      return "<td><div onclick='cellClick(\"" + this.id + "\");'' id='" + this.id + "' class='" + this.css + "'>" + this.id + "</div></td>"
    }
}

class Board {
  constructor () {
    this.board = [] 
    this.PIECES = require('./Pieces').PIECES
    this.LOOKUP_CELL = require('./GLOBALS').LOOKUP_CELL

    const letters = ["a", "b", "c", "d", "e", "f", "g", "h"]
    let i = 0
    for ( let row = 0; row < 8; row++ ){ 
        this.board[row] = [] 
        for ( let col = 0; col < 8; col++ ) {
            let css = i++ % 2 == 0 ? "LIGHT" : "DARK"  
            let cellId = letters[row] + ( col + 1 ) //human friendly id
            this.LOOKUP_CELL[cellId] = [row, col]
            
            let c = new Cell(css, cellId)
            this.board[row][col] = c         
        }
        i++ // need to stagger the colors for 'checker board' appearance
    }

    for ( let k in this.PIECES) {
        let piece = this.PIECES[k]
        let rc = this.LOOKUP_CELL[piece.cellId]
        let r = rc[0]
        let c = rc[1]
        this.board[r][c].setPiece(piece.id)
    }
  }
}


try { 
    module.exports = {
        Board,
        Cell
    }
} catch(err) {
    if ( err == "ReferenceError: module is not defined") {
        // ignore this 'error'... it is because browsers are not node
    } else {
        console.log(err)
    }
}