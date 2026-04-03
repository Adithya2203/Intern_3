const theme=document.getElementById("theme")

theme.onclick=()=>{

document.body.classList.toggle("dark")

}

const images=[
"https://picsum.photos/500/300?1",
"https://picsum.photos/500/300?2",
"https://picsum.photos/500/300?3",
"https://picsum.photos/500/300?4"
]

let i=0

const img=document.getElementById("image")
const dotsContainer=document.getElementById("dots")

images.forEach((_,index)=>{

let dot=document.createElement("span")

dot.onclick=()=>{

i=index
show()

}

dotsContainer.appendChild(dot)

})

function show(){

img.src=images[i]

document.querySelectorAll(".dots span").forEach(d=>d.classList.remove("active"))

document.querySelectorAll(".dots span")[i].classList.add("active")

}

show()

setInterval(()=>{

i=(i+1)%images.length
show()

},4000)

const quiz=[

{q:"Which language runs in browser?",a:["Python","Java","JavaScript","C"],c:2},

{q:"Which is frontend framework?",a:["Node","React","Django","Laravel"],c:1},

{q:"Which is styling language?",a:["HTML","CSS","SQL","C++"],c:1}

]

let qi=0
let score=0
let time=15

const q=document.getElementById("question")
const ans=document.getElementById("answers")
const timer=document.getElementById("timer")

function load(){

const d=quiz[qi]

q.innerText=d.q

ans.innerHTML=""

d.a.forEach((t,index)=>{

let b=document.createElement("button")

b.innerText=t

b.onclick=()=>{

if(index===d.c)score++

next()

}

ans.appendChild(b)

})

startTimer()

}

function next(){

qi++

update()

if(qi<quiz.length){

load()

}else{

finish()

}

}

function update(){

document.getElementById("progress").style.width=(qi/quiz.length)*100+"%"

}

function finish(){

q.innerText="Quiz Finished"

ans.innerHTML=""

document.getElementById("score").innerText="Score "+score+" / "+quiz.length

timer.innerText=""

}

function startTimer(){

time=15

timer.innerText="Time "+time

const interval=setInterval(()=>{

time--

timer.innerText="Time "+time

if(time===0){

clearInterval(interval)

next()

}

},1000)

}

load()

document.getElementById("quoteBtn").onclick=()=>{

const box=document.getElementById("quote")

box.innerText="Loading..."

fetch("https://dummyjson.com/quotes/random")

.then(r=>r.json())

.then(d=>{

box.innerText=d.quote+" — "+d.author

})

}