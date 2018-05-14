/* Each cell is a logic entity on the logical board. 
Each cell is also responsible for the _dom_ presentation layer in thee 
white and black POV tables*/
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
        this.isSelected = false
        this.pieceId = undefined;
        this.pieceColor = undefined;
    } 
    removePiece() {
        this.pieceId = undefined; 
        this.pieceColor = undefined; 
        document.getElementById(this.presentationId1).innerHTML = ""
        document.getElementById(this.presentationId2).innerHTML = ""
        
    }
    setPiece(pieceId, pieceColor) {
        this.pieceId = pieceId
        this.pieceColor = pieceColor
        document.getElementById(this.presentationId1).innerHTML = pieceId
        document.getElementById(this.presentationId2).innerHTML = pieceId
    }



    getPieceColor() { 
        return this.pieceColor
    }
    getPiece() { 
        return this.pieceId;
    }
    getHTML1() { 
        let me = "<div class='" + this.css + "' id='" + this.presentationId1 + "' onclick='cellClick(\"" + this.id + "\",\"" + this.presentationId1 + "\")'>"
        me += this.id
        me += "</div>"
        return me
    } 
    getHTML2() { 
        let me = "<div class='" + this.css + "' id='" + this.presentationId2+ "' onclick='cellClick(\"" + this.id + "\",\"" + this.presentationId2 + "\")'>"
        me += this.id
        me += "</div>"
        return me
    } 
    /*
    setIsSelected(flag) { 
        if ( flag ) { 
            this.isSelected = true
            document.getElementById(this.presentationId1).classList.add("selected")
            document.getElementById(this.presentationId2).classList.add("selected")
        } else {
            this.isInfluenced = false
            document.getElementById(this.presentationId1).classList.remove("selected")
            document.getElementById(this.presentationId2).classList.remove("selected")
        }
    }
    */
    setIsInfluenced(flag) {
        if ( flag ) { 
            this.isInfluenced = true
            document.getElementById(this.presentationId1).classList.add("influenced")
            document.getElementById(this.presentationId2).classList.add("influenced")
        } else {
            this.isInfluenced = false
            document.getElementById(this.presentationId1).classList.remove("influenced")
            document.getElementById(this.presentationId2).classList.remove("influenced")
        }
    }
    setIsAttacked(flag) {
        if ( flag ) {
            this.isAttacked = true
            document.getElementById(this.presentationId1).classList.add("attack")
            document.getElementById(this.presentationId2).classList.add("attack")
        } else {
            this.isAttacked = false
            document.getElementById(this.presentationId1).classList.remove("attack")
            document.getElementById(this.presentationId2).classList.remove("attack")
        }
    }
    setIsSupported(flag) { 
        if ( flag ) {
            this.isSupported = true 
            document.getElementById(this.presentationId1).classList.add("support")
            document.getElementById(this.presentationId2).classList.add("support")
        } else {
            this.isSupported = false
            document.getElementById(this.presentationId1).classList.remove("support")
            document.getElementById(this.presentationId2).classList.remove("support")
        }
    }
    

    getId() { 
        return this.id
    }
    getPresentationIds() {
        return [this.presentationId1,this.presentationId2]
    }
} 