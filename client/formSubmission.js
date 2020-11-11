// let search 

// const searchWindow  = document.getElementById('search');
// const button1 = document.getElementById('submit1');
// const button2 = document.getElementById('submit2');

// form.addEventListener('submit', submitForm)

const form = document.getElementById("my-form");

function getRandomResults() {
    fetch('http://localhost:3000/feelinglucky')
        .then(r => r.json())
        .catch(console.warn)
}

function getAllResults() {
    fetch('http://localhost:3000/googlesearch')
        .then(r => r.json())
        .catch(console.warn)
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(e);
    if(e.submitter.id === "btn1") {
        getAllResults();
    } else {
        getRandomData();
    }
})

console.log("Hey I am connected")


