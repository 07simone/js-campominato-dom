document.getElementById("play").addEventListener("click",
function(){
    nuovaPartita();
   /*  creaGriglia(); */
    }
)

function nuovaPartita(){
    document.getElementById("griglia").innerHTML=="";               // si resetta tutto       //parent
    const livelli = parseInt(document.getElementById("livelli").value);
    
    let celleRow;
    let numeroCelle;

    switch (livelli){
        case 1:
        default:
            numeroCelle =100;
            celleRow =10;
            break;
        case 2:
                numeroCelle =81;
                celleRow =9;
                break;  
        case 3:

            numeroCelle =49;
            celleRow =7;
            break;
    }

/* celleRow = Math.sqrt(numeroCelle) */
for(let i = 1; i <= numeroCelle; i++){
    const caselle = creaGriglia(i, celleRow)
    caselle.addEventListener("click",function(){
        this.classList.add("active")
    })
    document.getElementById("griglia").appendChild(caselle);
    }
}



 const gridElement = document.getElementById("griglia");      

function creaGriglia (numero, celleRow){
    const celle = document.createElement("div");                                                      // mi sono creato un div nella griglia,  a questo div li vado a d assegnare la classe custom
    celle.classList.add("box1")
    /* celle.style.width = `calc(100% / ${celleRow}`
    celle.style.width = celle.style.width */
    celle.innerHTML = `${numero}`                                                   // chiamata box-1 e con il return me la vado a restituire 
    return celle;                                              
}
