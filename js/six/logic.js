function pieceClick( id, presentationId ) { 
  //console.log("pieceClick!\n" + id + "\n" + presentationId)
  zeroout()
  let piece = PIECES[id]
  let cell = getCellById(piece.cellId)

	let row = cell.row
	let col = cell.col
	piece.moves.forEach((rowcol)=> {
		let r = row
		let c = col

		for ( let i = 0; i < piece.possibleSpaces; i++ ) { 
			 r += rowcol[0]
			 c += rowcol[1]

			let natural = r + "_" + c
			if (id2cell_lookup.hasOwnProperty(natural)) { 
				document.getElementById(natural + "_1").classList.add('influenced')
        document.getElementById(natural + "_2").classList.add('influenced')
        id2cell_lookup[natural].isInfluenced = true 
			} else { 
			}
		}
	})
}



function cellClick( logicalId, presentationId ) {
  console.log("CliCK!! " + logicalId + "   presentationId " + presentationId  )
}