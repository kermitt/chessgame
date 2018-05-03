'use strict'

class Piece {
  constructor (unicode, cellId, color, id, type) {
    this.unicode = unicode
    this.cellId = cellId
    this.color = color
    this.id = id
    this.type = type
    this.moveCount = 0 
    this.possibleSpaces = -1
    this.moves = []  
  }
  getHtml () {
    return "<div class='piece' onclick='pieceClick(\"" + this.id + "\");'>" + this.unicode + '</div>'
  }
  getColor() { 
    return this.color
  }
}

class King extends Piece {
  constructor (unicode, cellId, color, id,type) {
    super(unicode, cellId, color, id,type)
    this.possibleSpaces = 1
    this.moves = [
    [-1,-1],
    [-1,1],
    [ 1,1],
    [ 1,-1],
    [ 1,0],
    [ -1,0],
    [ 0,1],
    [ 0,-1]
    ]
  }
  
  getHtml () {
    return "<div class='piece' onclick='kingClick(\"" + this.id + "\");'>" + this.unicode + '</div>'
  }

}
class Queen extends Piece {
  constructor (unicode, cellId, color, id, type) {
    super(unicode, cellId, color, id,type)
    this.possibleSpaces = 7
    this.moves = [
    [ -1,-1],
    [ -1,1],
    [ 1,1],
    [ 1,-1],
    [ 1,0],
    [ -1,0],
    [ 0,1],
    [ 0,-1]
    ]
  }
}
class Rook extends Piece {
  constructor (unicode, cellId, color, id, type) {
    super(unicode, cellId, color, id,type)
    this.possibleSpaces = 7
    this.moves = [
    [ 1,0],
    [ -1,0],
    [ 0,1],
    [ 0, -1]
    ]
  }
}

class Bishop extends Piece {
  constructor (unicode, cellId, color, id, type) {
    super(unicode, cellId, color, id,type)
    this.possibleSpaces = 7
    this.moves = [
    [-1, -1],
    [ -1,1],
    [1, 1],
    [ 1,-1]
    ]
  }
}
class Knight extends Piece {
  constructor (unicode, cellId, color, id,type) {
    super(unicode, cellId, color, id,type)
    this.possibleSpaces = 1
    this.moves = [
    [ -2,-1],
    [ -2,1],
    [ -1,2],
    [ 1,2],
    [ 2,1],
    [ 2,-1],
    [ 1,-2],
    [ -1,-2]
    ]
  }
}
class PawnWhite extends Piece {
  constructor (unicode, cellId, color, id,type) {
    super(unicode, cellId, color, id,type)
    this.possibleSpaces = 1
    this.moves = [[1, 0]]
  }
  getHtml () {
    return "<div class='piece' onclick='pawnClick(\"" + this.id + "\");'>" + this.unicode + '</div>'
  }
}
class PawnBlack extends Piece {
  constructor (unicode, cellId, color, id, type) {
    super(unicode, cellId, color, id, type)
    this.possibleSpaces = 1
    this.moves = [[-1, 0]]
  }

  getHtml () {
    return "<div class='piece' onclick='pawnClick(\"" + this.id + "\");'>" + this.unicode + '</div>'
  }
}
// + --------------------------------------------------------------------------+
let PIECES = {}

PIECES['wk'] = new King('\u2654', 'e1', "WHITE", 'wk','K')
PIECES['bk'] = new King('\u265A', 'e8', "BLACK", 'bk','K')
    //
PIECES['wq'] = new Queen('\u2655', 'd1', "WHITE", 'wq','Q')
PIECES['bq'] = new Queen('\u265B', 'd8', "BLACK", 'bq','Q')
    //
PIECES['wr1'] = new Rook('\u2656', 'a1', "WHITE", 'wr1','R')
PIECES['wr2'] = new Rook('\u2656', 'h1', "WHITE", 'wr2','R')
PIECES['br1'] = new Rook('\u265C', 'a8', "BLACK", 'br1','R')
PIECES['br2'] = new Rook('\u265C', 'h8', "BLACK", 'br2','R')
    //
PIECES['wb1'] = new Bishop('\u2657', 'f1', "WHITE", 'wb1','B')
PIECES['wb2'] = new Bishop('\u2657', 'c1', "WHITE", 'wb2','B')
PIECES['bb1'] = new Bishop('\u265D', 'c8', "BLACK", 'bb1','B')
PIECES['bb2'] = new Bishop('\u265D', 'f8', "BLACK", 'bb2','B')
    //
PIECES['wk1'] = new Knight('\u2658', 'b1', "WHITE", 'wk1','K')
PIECES['wk2'] = new Knight('\u2658', 'g1', "WHITE", 'wk2','K')
PIECES['bk1'] = new Knight('\u265E', 'b8', "BLACK", 'bk1','K')
PIECES['bk2'] = new Knight('\u265E', 'g8', "BLACK", 'bk2','K')
    //
PIECES['wp1'] = new PawnWhite('\u2659', 'a2', "WHITE", 'wp1','P')
PIECES['wp2'] = new PawnWhite('\u2659', 'b2', "WHITE", 'wp2','P')
PIECES['wp3'] = new PawnWhite('\u2659', 'c2', "WHITE", 'wp3','P')
PIECES['wp4'] = new PawnWhite('\u2659', 'd2', "WHITE", 'wp4','P')
PIECES['wp5'] = new PawnWhite('\u2659', 'e2', "WHITE", 'wp5','P')
PIECES['wp6'] = new PawnWhite('\u2659', 'f2', "WHITE", 'wp6','P')
PIECES['wp7'] = new PawnWhite('\u2659', 'g2', "WHITE", 'wp7','P')
PIECES['wp8'] = new PawnWhite('\u2659', 'h2', "WHITE", 'wp8','P')
    //
PIECES['bp1'] = new PawnBlack('\u265F', 'a7', "BLACK", 'bp1','P')
PIECES['bp2'] = new PawnBlack('\u265F', 'b7', "BLACK", 'bp2','P')
PIECES['bp3'] = new PawnBlack('\u265F', 'c7', "BLACK", 'bp3','P')
PIECES['bp4'] = new PawnBlack('\u265F', 'd7', "BLACK", 'bp4','P')
PIECES['bp5'] = new PawnBlack('\u265F', 'e7', "BLACK", 'bp5','P')
PIECES['bp6'] = new PawnBlack('\u265F', 'f7', "BLACK", 'bp6','P')
PIECES['bp7'] = new PawnBlack('\u265F', 'g7', "BLACK", 'bp7','P')
PIECES['bp8'] = new PawnBlack('\u265F', 'h7', "BLACK", 'bp8','P')

try { 
  module.exports = { PIECES } 
} catch(err) {
  if ( err == "ReferenceError: module is not defined") {
      // ignore this 'error'... it is because browsers are not node
  } else {
      console.log(err)
  }
}