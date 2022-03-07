document.getElementById("play").addEventListener("click",
function(){
    nuovaPartita();

    }
)

function nuovaPartita(){
    document.querySelector("#griglia").innerHTML = "";               // si resetta tutto       //parent
    const livelli = parseInt(document.getElementById("livelli").value);
    

    let celleRow;
    let numeroCelle;
    let punti = 0;

    switch (livelli){                                           // sai utilizza in questo caso per sostituire (if)
        case 1:
        /* default: */
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

    //bombe lista
    const bombs = listaBombe(16, numeroCelle);
    console.log(bombs)

for(let i = 1; i <= numeroCelle; i++){
    const caselle = creaGriglia(i);
    
    caselle.addEventListener("click",function(){
     if ( !bombs.includes (i)){                               // se il numero di bombe non è presente nella lista alloora mi comporto come se nulla fosse
        
            this.classList.add("active")
            punti++
            listaPunti("punteggio",` il punteggio è${punti}` )
        
     } else{ 
        
            this.classList.add("active-bomb")
            listaPunti("punteggio",` hai perso, il tuo punteggio è ${punti}` )
        }
    });

    
    document.getElementById("griglia").appendChild(caselle);
    }
}
 



function creaGriglia (numero){
    const celle = document.createElement("div");                                                      // mi sono creato un div nella griglia,  a questo div li vado a d assegnare la classe custom
    celle.classList.add("box1")
    
    celle.innerHTML = `${numero}`                                                   // chiamata box-1 e con il return me la vado a restituire 
    return celle;                                              
}



function listaBombe(grenades, numeroCelle){
const bombs =[];
for (i = 0; i < grenades; i++){
    bombs.push(numeriRandom(bombs, 1, numeroCelle));
}
return bombs;
}



//generazione numeri random

function numeriRandom( numberDark,min,max){
    let check = false;
    let random;
    while (!check){
        random = Math.floor(Math.random() * ((max + 1) - min) + min);
    if (!numberDark.includes(random)){
        check = true;
    }
    
    
    }
    return random;
}
    // funzione per la visuazlizzazione dei punti

function listaPunti(elementId, writePoints){
    document.getElementById(elementId).innerHTML = writePoints;
}   