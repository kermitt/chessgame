let board = [] 
let id2cell_lookup = {} 
function lookup(rowcol) {
    let r = rowcol[0]
    let c = rowcol[1]
    let id1 = board[r][c].getPresentationId1() 
    let id2 = board[r][c].getPresentationId2() 
    return [id1, id2]
} 
function getCellById(cellId) {
    return id2cell_lookup[cellId]
}
function setup() { 
    let k = 0 
    for ( let row = 0; row < 8; row++) {
        board[row] = [] 
        for ( let col = 0; col < 8; col++) {
            let id = row + "_" + col
            let css = k % 2 == 0 ? "dark":"light"
            let cell = new Cell(row,col, id, css) 
            board[row][col] = cell
            id2cell_lookup[id] = cell
            
            k++
        }
        k++
    } 
} 
function makePresentationTables() { 
    // white POV
    let t1 = "<table border='1'>"	
      for (let row = 7; row > -1; row--) {
        t1 += "<tr>"
        for (let col = 0; col < 8; col++) {
            t1 += board[row][col].getHTML1()
        }
        t1 += "</tr>" 
    }
    t1 += "</table>" 
    document.getElementById("table1").innerHTML = t1

    // black POV
    let t2 = "<table border='1'>"	
      for (let row = 0; row < 8; row++) {
        t2 += "<tr>"
        for (let col = 7; col > -1; col--) {
            t2 += board[row][col].getHTML2()
        }
        t2 += "</tr>" 
    }
    t2 += "</table>" 
    document.getElementById("table2").innerHTML = t2
}

function addPieces() { 
    for (let pieceId in PIECES) {
        let piece = PIECES[pieceId]
        let cellId1 = piece.getCellId1()
        let cellId2 = piece.getCellId2()
        
        document.getElementById(piece.getCellId1()).innerHTML = piece.getHTML1()
        document.getElementById(piece.getCellId2()).innerHTML = piece.getHTML2()
    }
}


class Cell {
    constructor(row,col,id, css) { 
        this.row = row
        this.col = col
        this.id = id 
        this.presentationId1 = id + "_1"
        this.presentationId2 = id + "_2"
        this.css = css
        this.isInfluenced = false
        this.isAttacked = false
        this.isSupported = false
    } 
    getHTML1() { 
        let me = "<td>"
        me += "<div class='" + this.css + "' id='" + this.presentationId1 + "' onclick='cellClick(\"" + this.id + "\",\"" + this.presentationId1 + "\")'>"
        me += this.id
        me += "</div>"
        me += "</td>"
        return me
    } 
    getHTML2() { 
        let me = "<td>"
        me += "<div class='" + this.css + "' id='" + this.presentationId2+ "' onclick='cellClick(\"" + this.id + "\",\"" + this.presentationId2 + "\")'>"
        me += this.id
        me += "</div>"
        me += "</td>"
        return me
    } 

    getId() { 
        return this.id
    } 
    getPresentationId1() { 
        return this.presentationId1
    }
    getPresentationId2() { 
        return this.presentationId2
    }
} 