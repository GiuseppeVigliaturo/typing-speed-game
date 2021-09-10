function initTest() {
    let testo = document.getElementById('contenitore-parole').textContent;
    let i= 0;
    let arr = testo.split(' '); 
    nextWord(arr,i);
}

function nextWord(arrayparole, contatore) {
    let wordInput = document.getElementById('inp');
    
    wordInput.addEventListener('keyup',(e) => {
        if (e.key === 'Enter') {
            matchWord(arrayparole,wordInput.value,contatore);
            contatore++;
            wordInput.value='';
        }
    
    })
}

function matchWord(array,word,cont) {
    const right = document.getElementById('parole-esatte');
    const wrong = document.getElementById('parole-errate');
    let risposteEsatte = 0;
    let risposteErrate = 0;
    if (array[cont] === word) {
        risposteEsatte = +1;
        right.textContent=  risposteEsatte;
    }
    else  {
        risposteErrate = +1;
        wrong.textContent=  risposteErrate;
    }
    
}
export default initTest;