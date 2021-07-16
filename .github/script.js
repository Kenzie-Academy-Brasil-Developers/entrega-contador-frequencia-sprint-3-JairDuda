const button = document.getElementById("countButton");


function contadorDeletras(){
    let typedText = document.getElementById("textInput").value;
    const letterCounts = {};
    let currentLetter = {};
    typedText = typedText.toLowerCase(); 
    typedText = typedText.replace(/[^a-z'\s]+/g, ""); 

    for (let i = 0; i < typedText.length; i++) {

        currentLetter = typedText[i];
        // faça algo com cada letra 
        if (letterCounts[currentLetter] === undefined) {
            letterCounts[currentLetter] = 1; 
        } else { 
            letterCounts[currentLetter]++; 
        }
 }

 return letterCounts;

}

function contadorDePalavras(){
    let typedText = document.getElementById("textInput").value;
    const wordCounts = {};
    let currentword = {};
    typedText = typedText.toLowerCase(); 
    
    let word = typedText.split(/\s/); 
    console.log(word)
    
    for (let i = 0; i < word.length; i++) {

        currentword  = word[i];
        // faça algo com cada palavra 
        if (wordCounts[currentword] === undefined) {
            wordCounts[currentword] = 1; 
        } else { 
            wordCounts[currentword]++; 
        }
 }

 return wordCounts;

}

button.addEventListener("click", function() {  
   // teu código vai aqui ... 
    let letterCounts = {}
    letterCounts = contadorDeletras()
    console.log(letterCounts)
   
  for (let letter in letterCounts) { 
    const span = document.createElement("span"); 
    const textContent = `"${letter}": ${letterCounts[letter]}, `;
    span.innerText = textContent; 
    const letters = document.getElementById("lettersDiv");
    letters.appendChild(span); 
 }

 return letterCounts

});


button.addEventListener("click", function() {  
    // teu código vai aqui ... 
     let wordCounts = {}
     wordCounts = contadorDePalavras()
     console.log(wordCounts)
    
   for (let word in wordCounts) { 
     const span = document.createElement("span"); 
     const textContent = `"${word}": ${wordCounts[word]}, `;
     span.innerText = textContent; 
     const words = document.getElementById("wordsDiv");
     words.appendChild(span); 
  }
 
  return wordCounts
 
 });