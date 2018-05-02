
const WHITE = 'white'
const BLACK = 'black'

class Piece {
  constructor (unicode, cellId, color, name) {
    this.unicode = unicode
    this.cellId = cellId
    this.color = color
    this.name = name
    this.moveCount = 0 
    this.possibleSpaces = -1
    this.moves = []  
  }
  getHtml () {
    return "<div class='piece' onclick='pieceClick(\"" + this.name + "\");'>" + this.unicode + '</div>'
  }
  getColor() { 
    return this.color
  }
}

class King extends Piece {
  constructor (unicode, cellId, color, name) {
    super(unicode, cellId, color, name)
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
    return "<div class='piece' onclick='kingClick(\"" + this.name + "\");'>" + this.unicode + '</div>'
  }

}
class Queen extends Piece {
  constructor (unicode, cellId, color, name) {
    super(unicode, cellId, color, name)
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
  constructor (unicode, cellId, color, name) {
    super(unicode, cellId, color, name)
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
  constructor (unicode, cellId, color, name) {
    super(unicode, cellId, color, name)
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
  constructor (unicode, cellId, color, name) {
    super(unicode, cellId, color, name)
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
  constructor (unicode, cellId, color, name) {
    super(unicode, cellId, color, name)
    this.possibleSpaces = 1
    this.moves = [[1, 0]]
  }
  getHtml () {
    return "<div class='piece' onclick='pawnClick(\"" + this.name + "\");'>" + this.unicode + '</div>'
  }
}
class PawnBlack extends Piece {
  constructor (unicode, cellId, color, name) {
    super(unicode, cellId, color, name)
    this.possibleSpaces = 1
    this.moves = [[-1, 0]]
  }

  getHtml () {
    return "<div class='piece' onclick='pawnClick(\"" + this.name + "\");'>" + this.unicode + '</div>'
  }
}
// + --------------------------------------------------------------------------+
let pieces = {}

pieces['wk'] = new King('\u2654', 'e1', WHITE, 'wk')
pieces['bk'] = new King('\u265A', 'e8', BLACK, 'bk')
    //
pieces['wq'] = new Queen('\u2655', 'd1', WHITE, 'wq')
pieces['bq'] = new Queen('\u265B', 'd8', BLACK, 'bq')
    //
pieces['wr1'] = new Rook('\u2656', 'a1', WHITE, 'wr1')
pieces['wr2'] = new Rook('\u2656', 'h1', WHITE, 'wr2')
pieces['br1'] = new Rook('\u265C', 'a8', BLACK, 'br1')
pieces['br2'] = new Rook('\u265C', 'h8', BLACK, 'br2')
    //
pieces['wb1'] = new Bishop('\u2657', 'f1', WHITE, 'wb1')
pieces['wb2'] = new Bishop('\u2657', 'c1', WHITE, 'wb2')
pieces['bb1'] = new Bishop('\u265D', 'c8', BLACK, 'bb1')
pieces['bb2'] = new Bishop('\u265D', 'f8', BLACK, 'bb2')
    //
pieces['wk1'] = new Knight('\u2658', 'b1', WHITE, 'wk1')
pieces['wk2'] = new Knight('\u2658', 'g1', WHITE, 'wk2')
pieces['bk1'] = new Knight('\u265E', 'b8', BLACK, 'bk1')
pieces['bk2'] = new Knight('\u265E', 'g8', BLACK, 'bk2')
    //
    /*
pieces['wp1'] = new PawnWhite('\u2659', 'a2', WHITE, 'wp1')
pieces['wp2'] = new PawnWhite('\u2659', 'b2', WHITE, 'wp2')
pieces['wp3'] = new PawnWhite('\u2659', 'c2', WHITE, 'wp3')
pieces['wp4'] = new PawnWhite('\u2659', 'd2', WHITE, 'wp4')
pieces['wp5'] = new PawnWhite('\u2659', 'e2', WHITE, 'wp5')
pieces['wp6'] = new PawnWhite('\u2659', 'f2', WHITE, 'wp6')
pieces['wp7'] = new PawnWhite('\u2659', 'g2', WHITE, 'wp7')
pieces['wp8'] = new PawnWhite('\u2659', 'h2', WHITE, 'wp8')
*/    //
pieces['bp1'] = new PawnBlack('\u265F', 'a7', BLACK, 'bp1')
pieces['bp2'] = new PawnBlack('\u265F', 'b7', BLACK, 'bp2')
pieces['bp3'] = new PawnBlack('\u265F', 'c7', BLACK, 'bp3')
pieces['bp4'] = new PawnBlack('\u265F', 'd7', BLACK, 'bp4')
pieces['bp5'] = new PawnBlack('\u265F', 'e7', BLACK, 'bp5')
pieces['bp6'] = new PawnBlack('\u265F', 'f7', BLACK, 'bp6')
pieces['bp7'] = new PawnBlack('\u265F', 'g7', BLACK, 'bp7')
pieces['bp8'] = new PawnBlack('\u265F', 'h7', BLACK, 'bp8')
