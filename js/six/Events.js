let possible = undefined

function pieceClick(pieceId, presentationId) {
	console.log("pieceId: " + pieceId + " presentationId: " + presentationId )
//	determinePossibleMoves(pieceId)
}

function determinePossibleMoves(pieceId) {
	console.log(pieceId )
	possible = {} 
    let piece = PIECES[pieceId]
    let cell = getCellById(piece.cellId)
	let row = cell.row
	activePieceId = pieceId
	let col = cell.col
	// left / right / straight / forward/ diagnal etc etc 
    piece.moves.forEach((rowcol) => {

        let r = row
		let c = col
		// rook can move 7 in one direction, but a knight only one...
        for (let i = 0; i < piece.possibleSpaces; i++) {
            r += rowcol[0]
            c += rowcol[1]
			let cellId = r + "_" + c
			// if on the board....
            if (id2cell_lookup.hasOwnProperty(cellId)) {
                let otherCell = id2cell_lookup[cellId]
                let otherCellPieceColor = otherCell.getPieceColor()
                if (otherCellPieceColor == undefined) {
                    otherCell.setIsInfluenced(true)
                    possible[cellId] = "influenced"
                } else {
                    i += 100 // leave the loop
                    if (otherCellPieceColor === piece.color) {
						otherCell.setIsSupported(true)
						possible[cellId] = "support"
                    } else {
                        otherCell.setIsAttacked(true)
                        possible[cellId] = "attack"
                    }
                }
            }
        }
	})
	console.log(JSON.stringify(possible,null,2))
}

function cellClick(cellId, presentationId) {
	console.log(" cellClick: "+ cellId +" presentationId: " + presentationId )
	/* 
	if ( cellId !== PIECES[activePieceId].cellId ) {
		if ( possible.hasOwnProperty(cellId)) { 
			let oldCellId = PIECES[activePieceId].cellId
			let oldCell = id2cell_lookup[oldCellId] 
			PIECES[activePieceId].cellId = cellId
			document.getElementById(oldCellId + "_1").innerHTML = ""
			document.getElementById(oldCellId + "_2").innerHTML = ""
			document.getElementById(cellId + "_1").innerHTML = PIECES[activePieceId].getHTML1() 
			document.getElementById(cellId + "_2").innerHTML = PIECES[activePieceId].getHTML2() 
			oldCell.pieceid = ""
			zeroout()
			possible = undefined
			activePieceId = undefined
		} else {
		}
	} else {
	}
	*/
}