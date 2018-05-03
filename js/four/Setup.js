function makeLogicBoard() {
    let k = 0
    for (let row = 8; row > 0; row--) {
        for (let col = 1; col < 9; col++) {
            let rc = row + "_" + col
            let id = letters[col - 1] + row
            id_rc[id] = [row, col]
            rc_id[rc] = id
            k++
            let css = k % 2 == 0 ? 'dark' : 'light'
            let cell = new Cell(css, id)
            board[id] = cell
        }
        k++
    }
    makeTables()
}

const makeTables = () => {
    // Make the LEFT board ( white's POV  )
    let html1 = "<table border='1'>"

    for (let row = 8; row > 0; row--) {
        html1 += "<tr>"
        for (let col = 1; col < 9; col++) {
            let id = letters[col - 1] + row
            html1 += board[id].getCellHtml()
        }
        html1 += "</tr>"
    }
    html1 += "</table>"
    document.getElementById("board").innerHTML = html1

    // Make the mirrored RIGHT board ( black's POV  )
    let html2 = "<table border='1'>"
    for (let row = 1; row < 9; row++) {
        html2 += "<tr>"
        for (let col = 8; col > 0; col--) {
            let actualCellId = letters[col - 1] + row
            let id2 = letters[col - 1] + row + "_2"
            html2 += board[actualCellId].getCellHtml2()
        }
        html2 += "</tr>"
    }
    html2 += "</table>"
    document.getElementById("board2").innerHTML = html2
}

function addPieces() {
    for (let pieceId in pieces) {
        let piece = pieces[pieceId]
        let cellId = piece.cellId

        board[cellId].setPiece(pieceId) // for logic 
        let cellId1_dom = cellId // for display
        let cellId2_dom = cellId + "_2" // for display

        document.getElementById(cellId1_dom).innerHTML = piece.getHtml()
        document.getElementById(cellId2_dom).innerHTML = piece.getHtml()
    }
}