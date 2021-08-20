let qtBtn = document.querySelector(".btn")
let qtLine = document.getElementById("qt-line")
let quotes = [
    "I wake up every morning determined both to change the world and have one hell of a good time. Sometimes this makes planning the day a little difficult. -- E. B. White",

    "Anything you can do or dream..., begin it. Boldness has genius, power and magic in it. - Goethe",

    "It's better to know some of the questions than all of the answers. - James Thurber",

    "The greatest danger for most of us is not that our aim is too high and we miss it, but that it is too low and we reach it. - Michelangelo",

    "In the beginner's mind, there are many possibilities. In the expert's mind, there are few. - Suzuki Roshi",

    "Different isn't always better. But better is always different. - Marshall Thurber",

    "Dream as if you'll live forever. Live as if you'll die tomorrow. -- James Dean",

    "Those who say it cannot be done should not interrupt the person doing it. - Chinese proverb",

    "Start a large foolish project, like Noah! It makes no difference what people think of you. -- Rumi",

    "Belief consists in accepting the affirmations of the soul; unbelief in denying them. --Emerson"
]
function randomQuote(){
    let x = Math.floor(Math.random() * quotes.length)
    qtLine.innerHTML=quotes[x];
}

qtBtn.addEventListener("click",randomQuote)


// use . or # while in queryselector
// only use function name in addEventListener