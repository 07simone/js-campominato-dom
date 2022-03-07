document.getElementById("play").addEventListener("click",
function(){
    nuovaPartita();
   /*  creaGriglia(); */
    }
)

function nuovaPartita(){
    document.getElementById("griglia").innerHTML ="";               // si resetta tutto       //parent
    const livelli = parseInt(document.getElementById("livelli").value);
    
    let celleRow;
    let numeroCelle;
    let punti = 0;
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

    
    const bombs = listaBombe(16, numeroCelle);
    console.log(bombs)
/* celleRow = Math.sqrt(numeroCelle) */
for(let i = 1; i <= numeroCelle; i++){
    const caselle = creaGriglia(i, celleRow)

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
 



function creaGriglia (numero, celleRow){
    const celle = document.createElement("div");                                                      // mi sono creato un div nella griglia,  a questo div li vado a d assegnare la classe custom
    celle.classList.add("box1")
    
    celle.innerHTML = `${numero}`                                                   // chiamata box-1 e con il return me la vado a restituire 
    return celle;                                              
}

/* function numeriRandom(minValue,maxValue){
    if(isNaN(parseInt( minValue)) || isNaN(parseInt(maxValue))){

    } 
    return(Math.floor(Math.random() * ((maxValue + 1) - minValue) + minValue));
} */

function listaBombe(grenades, numeroCelle){
const bombs =[];
for (i = 0; i < grenades; i++){
    bombs.push(numeriRandom(bombs, 1, numeroCelle));
}
return bombs;
}





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


function listaPunti(elementId,write){
    document.getElementById(elementId).innerHTML = write}  