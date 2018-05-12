function zeroout() { 
    let ids = ["_1","_2"]
    board.forEach((row)=> { 
        row.forEach((cell)=>{
 
cell.setIsSelected(false) 
 cell.setIsInfluenced(false)
 cell.setIsAttacked(false)
  cell.setIsSupported(false)
        
 
            /* 
            let id1 = cell.getPresentationId1()
            let id2 = cell.getPresentationId2()

            let cell1 = document.getElementById(id1)

            cell1.classList.remove("influenced")
            cell1.classList.remove("support")
            cell1.classList.remove("attack")
            cell1.classList.remove("selected")


            let cell2 = document.getElementById(id2)
            cell2.classList.remove("influenced")
            cell2.classList.remove("support")
            cell2.classList.remove("attack")
            cell2.classList.remove("attack")
            cell2.classList.remove("selected")

            

            cell.isInfluenced = false
            cell.isAttacked = false
            cell.isSupported = false

*/
        })
    })
}
function unroll(obj) {
    console.log(JSON.stringify(obj,null,2))
}


