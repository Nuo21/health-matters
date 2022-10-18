
const quoteText = document.getElementById('quote-text'),
    quoteTags = document.getElementById('quote-tags'),
    quoteAuthor = document.getElementbyID('quote-author'),
    genQuoteBtn = document.getElementbyID('gen-quote-btn');

function randomQuote(){
    fetch('https://api.quotable.io/random')
    .then(response => response.json ())
    .then(data =>{
        quoteText.textContent = data.content;
        quoteTags.textContent = data.tags;
        quoteAuthor.textContent = '-- ${data.author}';
    
    });
}

randomQuote ();
genQuoteBtn.addEventListener('click' , () =>{
    randomQuote ();

});