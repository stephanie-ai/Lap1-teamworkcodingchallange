
const button1 = document.getElementById('submit1');
//const button2 = document.getElementById('submit2');

button1.addEventListener('click', getMessage1);

function getMessage1() {
    fetch('http://localhost:3000/googlesearch')
    .then(r => r.text())
    .then(console.log)
    .catch(console.warn)
};

getMessage1();



/*
.then(appendCheeseData).catch(console.warn)

function appendCheeseData(data) {
    
}


*/
//function submitAllResults(e) {
 //   e.preventDefault();
    
  //  const resultsData = {
     //   title: e.target.title.value,
       // content: e.target.content.value
 //   };
       
     //   getAllResults()
  //  }            
//function getAllResults() {
//    fetch('http://localhost:3000/googlesearch')
  //  .then(r => r.json ())
 //   .then(logResults)
   // .catch(err => console.warn('Opa, something went wrong!', err))  
//}

//function logResults(results) {
   // console.log(results)
//};




