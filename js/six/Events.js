function pieceClick(id, presentationId) {
    zeroout()
    let piece = PIECES[id]
    let cell = getCellById(piece.cellId)
    cell.setIsSelected(true)
    let row = cell.row
    let col = cell.col
    unroll(cell)
    unroll(piece)
    piece.moves.forEach((rowcol) => {
        let r = row
        let c = col
        for (let i = 0; i < piece.possibleSpaces; i++) {
            r += rowcol[0]
            c += rowcol[1]
            let natural = r + "_" + c
            if (id2cell_lookup.hasOwnProperty(natural)) {
                // On the board! 
                let otherCell = id2cell_lookup[natural]
                let otherCellPieceColor = otherCell.getPieceColor()
                // Does this cell have a piece? 
                //No? Ok, then it is influenced. 
                //Yes? Ok, then it is attackable or supportable... 
                if (otherCellPieceColor == undefined) {
                    otherCell.setIsInfluenced(true)
                } else {
                    if (otherCellPieceColor === piece.color) {
                        otherCell.setIsSupported(true)
                    } else {
                        otherCell.setIsAttacked(true)
                    }
                }
            }
        }
    })
}



function cellClick(logicalId, presentationId) {
    console.log("CliCK!! " + logicalId + "   presentationId " + presentationId)
}