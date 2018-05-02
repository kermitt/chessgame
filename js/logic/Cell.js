/*
This is an object, mostly, to keep track of influences which is
needed to deal with check threats to the king
*/
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
    getCellHtml2 () {
        return "<td><div onclick='cellClick(\"" + this.id + "_2\");'' id='" + this.id + "_2' class='" + this.css + "'>" + this.id + "_2</div></td>"
      }
  }