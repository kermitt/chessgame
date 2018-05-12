function verdict(isOk, msg, reportingId) {
    if (isOk) {
		console.log("PASS " + msg)
		document.getElementById(reportingId).classList.add('pass')
    } else {
        console.log("FAIL " + msg)
		document.getElementById(reportingId).classList.add('fail')
    }
}



function test_cell_id(btn) {
    let expected = {
        '6_6': [6, 6],
        '1_6': [1, 6],
        '2_1': [2, 1],
        '5_3': [5, 3]
    }
    let isOk = true
    Object.keys(expected).forEach((given) => {
        let rc = expected[given]
        let given1 = given + "_1"
        let given2 = given + "_2"
        let ary = lookup(rc)
        let id1 = ary[0]
        let id2 = ary[1]
        if (id1 !== given1) {
            isOk = false
        }
        document.getElementById(id1).classList.add('influenced')
        document.getElementById(id2).classList.add('influenced')

        rc[0] += 1
        ary = lookup(rc)
        let id_to_use_from_rc1 = ary[0]
        let id_to_use_from_rc2 = ary[1]
        document.getElementById(id_to_use_from_rc1).classList.add('attack')
    })
    verdict(isOk, "test_cell_id", btn)
}

function testPlacement(btn) {

    let black_pawn_row = ['6_6', '6_5', '6_4', '6_3', '6_2', '6_1', '6_0']
    let isOk = true
    let first_y = document.getElementById("6_7_2").getBoundingClientRect().y
    let first_x = document.getElementById("6_7_2").getBoundingClientRect().x
    black_pawn_row.forEach((id, i) => {
        id += "_2"
        let elem = document.getElementById(id)
        let box = elem.getBoundingClientRect()

        let y = box.y
        let x = box.x

        if (y !== first_y) {
            isOk = false
        }
        if (x <= first_x) {
            isOk = false
        }
        document.getElementById(id).classList.add('attack')
    })
    verdict(isOk, "testPlacement", btn)

}



function testCellLookupFromPiece(btn) {
    let piece = PIECES['wp3']
    let cell = getCellById(piece.cellId)
	let isOk = cell.id === piece.cellId
   verdict(isOk, "testCellLookupFromPiece", btn)
}

function testPieceClick_rook(btn) {

	let pieceId = "wr1"
	let presentationId = "0_0_2" // rook in on 0,0 board 2...   but pieceClick does not actual use that info
	pieceClick(pieceId, presentationId )
	let count = 0 
	board.forEach((row)=>{
		row.forEach((cell)=>{
			if ( cell.isInfluenced || cell.isAttacked || cell.isSupported ) {
				count++
			} else { 

			}
		})
	})
	let isOk = count > 0
	verdict(isOk, "testPieceClick_rook", btn)
}


function testSharedState(btn) { 
	// Does board and id2cell_lookup, both Cell collections, share state?
	board[6][6].isInfluenced = true  
	let c = getCellById("6_6")
	let isOk = c.isInfluenced == true 
	verdict(isOk, "testSharedState", btn)
}