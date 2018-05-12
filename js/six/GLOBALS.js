function zeroout() { 
    let ids = ["_1","_2"]
    board.forEach((row)=> { 
        row.forEach((cell)=>{
            let id1 = cell.getPresentationId1()
            let id2 = cell.getPresentationId2()

            let cell1 = document.getElementById(id1)

            cell1.classList.remove("influenced")
            cell1.classList.remove("support")
            cell1.classList.remove("attack")

            let cell2 = document.getElementById(id2)
            cell2.classList.remove("influenced")
            cell2.classList.remove("support")
            cell2.classList.remove("attack")



            cell.isInfluenced = false
            cell.isAttacked = false
            cell.isSupported = false


        })
    })
}

