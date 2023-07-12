var qouteArr = [
{theQoute : "“Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.”", writer:"--Martin Luther King Jr"},
{theQoute : "“Be yourself; everyone else is already taken.”", writer:"--Oscar Wilde"},
{theQoute : "“In three words I can sum up everything I've learned about life: it goes on.”", writer:"--Robert Frost "},
{theQoute : "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”", writer:"--Albert Einstein"},
{theQoute : "“Be the change that you wish to see in the world.”", writer:"--Mahatma Gandhi"},
{theQoute : "“Live as if you were to die tomorrow. Learn as if you were to live forever.”", writer:"--Mahatma Gandhi"},
{theQoute : "It's not what happens to you, but how you react to it that matters.", writer:"--Epictetus"}
]

function generateQuote(){
    var qoute = document.getElementById("qoute")
    var writer = document.getElementById("writer")
    var randomizer = Math.floor(Math.random(qouteArr)* (qouteArr.length)) 
    qoute.innerHTML = qouteArr[randomizer].theQoute
    writer.innerHTML = qouteArr[randomizer].writer
}


