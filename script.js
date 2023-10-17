
let idtable=""
let name=""
let people=""
let table=[]
let peopleEatTab=0
let totalPeople = 0
const tab = document.createElement("table");
const coloumn2 = document.getElementById("coloumn2")


const nomiColonne = [
    "Number",
    "Name",
    "People",
    "Ar",
    "Canc",
  ];


function recTable() {
    idtable = document.getElementById("tableNum").value
    name = document.getElementById("tableName").value
    people = document.getElementById("persNum").value

    tab.innerHTML=""
    app = {
        Number: idtable,
        Name: name,
        People: people,
        Ar: `<button id="${idtable}" onclick="confirmTable(this.id)"><i class="fa-solid fa-check fa-xs"></i></button>`,
        Canc:`<button id="${idtable}" onclick="deleleTable(this.id)"><i class="fa-solid fa-trash fa-xs"></i></button>`,
        }
    table[idtable] = app
    console.log(table)

    const tabella = new Tables(nomiColonne,table)

}

function confirmTable(id) {

    peopleEatTab = parseInt(table[id].People)
    totalPeople = parseInt(totalPeople) + peopleEatTab
    totPeople()
    console.log(totalPeople)

    tab.innerHTML=""
    table[id] = {}
    const tabella = new Tables(nomiColonne,table)

}

function deleleTable(id) {

    tab.innerHTML=""
    table[id] = {}
    const tabella = new Tables(nomiColonne,table)
}

function delAll() {
    table.splice(0,table.length)
    tab.innerHTML=""
    console.log(table)
}

function totPeople() {
    coloumn2.innerHTML=""
    const contenuto = document.createTextNode(`Il totale delle persone che hanno mangiato e: ${totalPeople}`)
    coloumn2.appendChild(contenuto)
}


class Tables {

    nomiColonne
    table

    constructor(nomiColonne,table){
        this.nomiColonne = nomiColonne
        this.table = table
        this.createTab()
    }

    createTab() {
        tab.appendChild(this.generaColonne());
        tab.appendChild(this.generaRighe());
        document.getElementById("tab").appendChild(tab);
    }

    generaColonne(){
        const colonne = document.createElement("thead");
        this.nomiColonne.forEach((nomeColonna) => {
        const th = document.createElement("th");
        const contenuto = document.createTextNode(nomeColonna);
        th.appendChild(contenuto);
        colonne.appendChild(th);
            
        });
            return colonne;
    }

    generaRighe(){

        const righe = document.createElement("tbody");
        this.table.forEach(riga => {
        const tr = document.createElement("tr");
        Object.keys(riga).forEach((key) => {
            const cella = document.createElement("td");
            const contenuto = `${riga[key]}`
            cella.innerHTML = contenuto
            tr.appendChild(cella);
        });
        righe.appendChild(tr);
        
            
        });

           return righe;     
    }

}

tab.className = "table"