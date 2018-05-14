'use strict'

class Piece {
    constructor(unicode, cellId, color, id, type) {
        this.unicode = unicode
        this.cellId = cellId
        this.color = color
        this.id = id
        this.presentationId1 = cellId + "_1"
        this.presentationId2 = cellId + "_2"
        this.type = type
        this.moveCount = 0
        this.possibleSpaces = -1
        this.moves = []
        this.possible = {}
    }

    getCellId1() {
        return this.cellId + "_1"
    }


    getCellId2() {
        return this.cellId + "_2"
    }

    getHTML1() {
        return "<div class='piece' id='" + this.presentationId1 + "' onclick='pieceClick(\"" + this.id + "\",\"" + this.presentationId1 + "\");'>" + this.unicode + '</div>'
    }
    getHTML2() {
        return "<div class='piece' id='" + this.presentationId2 + "' onclick='pieceClick(\"" + this.id + "\",\"" + this.presentationId2 + "\");'>" + this.unicode + '</div>'
    }
    getColor() {
        return this.color
    }

    determinePossibleMoves() {
      this.possible = {} 
        let cell = getCellById(this.cellId)
        let row = cell.row
        let col = cell.col

        this.moves.forEach((rowcol) => {

          let r = row
      let c = col
  

        for (let i = 0; i < this.possibleSpaces; i++) {
            r += rowcol[0]
            c += rowcol[1]
            let cellId = r + "_" + c


            if (id2cell_lookup.hasOwnProperty(cellId)) {
                let otherCell = id2cell_lookup[cellId]
                let otherCellPieceColor = otherCell.getPieceColor()

                if (otherCellPieceColor == undefined) {
                    otherCell.setIsInfluenced(true)
                    this.possible[cellId] = "influenced"
                } else {


                    i += 100 // leave the loop
                    if (otherCellPieceColor === this.color) {
                        otherCell.setIsSupported(true)
                        this.possible[cellId] = "support"
                    } else {
                        otherCell.setIsAttacked(true)
                        this.possible[cellId] = "attack"
                    }

                }

            }
        }
      })
    }

}
class King extends Piece {
    constructor(unicode, cellId, color, id, type) {
        super(unicode, cellId, color, id, type)
        this.possibleSpaces = 1
        this.moves = [
            [-1, -1],
            [-1, 1],
            [1, 1],
            [1, -1],
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1]
        ]
    }

    getHtml() {
        return "<div class='piece' onclick='kingClick(\"" + this.id + "\");'>" + this.unicode + '</div>'
    }

}
class Queen extends Piece {
    constructor(unicode, cellId, color, id, type) {
        super(unicode, cellId, color, id, type)
        this.possibleSpaces = 7
        this.moves = [
            [-1, -1],
            [-1, 1],
            [1, 1],
            [1, -1],
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1]
        ]
    }
}
class Rook extends Piece {
    constructor(unicode, cellId, color, id, type) {
        super(unicode, cellId, color, id, type)
        this.possibleSpaces = 7
        this.moves = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1]
        ]
    }
}

class Bishop extends Piece {
    constructor(unicode, cellId, color, id, type) {
        super(unicode, cellId, color, id, type)
        this.possibleSpaces = 7
        this.moves = [
            [-1, -1],
            [-1, 1],
            [1, 1],
            [1, -1]
        ]
    }
}
class Knight extends Piece {
    constructor(unicode, cellId, color, id, type) {
        super(unicode, cellId, color, id, type)
        this.possibleSpaces = 1
        this.moves = [
            [-2, -1],
            [-2, 1],
            [-1, 2],
            [1, 2],
            [2, 1],
            [2, -1],
            [1, -2],
            [-1, -2]
        ]
    }
}
class PawnWhite extends Piece {
    constructor(unicode, cellId, color, id, type) {
        super(unicode, cellId, color, id, type)
        this.possibleSpaces = 1
        this.moves = [
            [1, 0]
        ]
    }
    getHtml() {
        return "<div class='piece' onclick='pawnClick(\"" + this.id + "\");'>" + this.unicode + '</div>'
    }
}
class PawnBlack extends Piece {
    constructor(unicode, cellId, color, id, type) {
        super(unicode, cellId, color, id, type)
        this.possibleSpaces = 1
        this.moves = [
            [-1, 0]
        ]
    }

    getHtml() {
        return "<div class='piece' onclick='pawnClick(\"" + this.id + "\");'>" + this.unicode + '</div>'
    }
}
// + --------------------------------------------------------------------------+
let PIECES = {}

PIECES['wk'] = new King('\u2654', '0_4', "WHITE", 'wk', 'K')
PIECES['bk'] = new King('\u265A', '7_4', "BLACK", 'bk', 'K')
//

PIECES['wq'] = new Queen('\u2655', '0_3', "WHITE", 'wq', 'Q')
PIECES['bq'] = new Queen('\u265B', '7_3', "BLACK", 'bq', 'Q')
//
PIECES['wr1'] = new Rook('\u2656', '0_0', "WHITE", 'wr1', 'R')
PIECES['wr2'] = new Rook('\u2656', '0_7', "WHITE", 'wr2', 'R')
PIECES['br1'] = new Rook('\u265C', '7_0', "BLACK", 'br1', 'R')
PIECES['br2'] = new Rook('\u265C', '7_7', "BLACK", 'br2', 'R')

//
PIECES['wb1'] = new Bishop('\u2657', '0_2', "WHITE", 'wb1', 'B')
PIECES['wb2'] = new Bishop('\u2657', '0_5', "WHITE", 'wb2', 'B')
PIECES['bb1'] = new Bishop('\u265D', '7_2', "BLACK", 'bb1', 'B')
PIECES['bb2'] = new Bishop('\u265D', '7_5', "BLACK", 'bb2', 'B')
//
PIECES['wk1'] = new Knight('\u2658', '0_1', "WHITE", 'wk1', 'Kn')
PIECES['wk2'] = new Knight('\u2658', '0_6', "WHITE", 'wk2', 'Kn')
PIECES['bk1'] = new Knight('\u265E', '7_1', "BLACK", 'bk1', 'Kn')
PIECES['bk2'] = new Knight('\u265E', '7_6', "BLACK", 'bk2', 'Kn')

//
PIECES['wp1'] = new PawnWhite('\u2659', '1_0', "WHITE", 'wp1', 'P')
PIECES['wp2'] = new PawnWhite('\u2659', '1_1', "WHITE", 'wp2', 'P')
PIECES['wp3'] = new PawnWhite('\u2659', '1_2', "WHITE", 'wp3', 'P')
PIECES['wp4'] = new PawnWhite('\u2659', '1_3', "WHITE", 'wp4', 'P')
PIECES['wp5'] = new PawnWhite('\u2659', '1_4', "WHITE", 'wp5', 'P')
PIECES['wp6'] = new PawnWhite('\u2659', '1_5', "WHITE", 'wp6', 'P')
PIECES['wp7'] = new PawnWhite('\u2659', '1_6', "WHITE", 'wp7', 'P')
PIECES['wp8'] = new PawnWhite('\u2659', '1_7', "WHITE", 'wp8', 'P')
//

PIECES['bp1'] = new PawnBlack('\u265F', '6_0', "BLACK", 'bp1', 'P')
PIECES['bp2'] = new PawnBlack('\u265F', '6_1', "BLACK", 'bp2', 'P')
PIECES['bp3'] = new PawnBlack('\u265F', '6_2', "BLACK", 'bp3', 'P')
PIECES['bp4'] = new PawnBlack('\u265F', '6_3', "BLACK", 'bp4', 'P')
PIECES['bp5'] = new PawnBlack('\u265F', '6_4', "BLACK", 'bp5', 'P')
PIECES['bp6'] = new PawnBlack('\u265F', '6_5', "BLACK", 'bp6', 'P')
PIECES['bp7'] = new PawnBlack('\u265F', '6_6', "BLACK", 'bp7', 'P')
PIECES['bp8'] = new PawnBlack('\u265F', '6_7', "BLACK", 'bp8', 'P')