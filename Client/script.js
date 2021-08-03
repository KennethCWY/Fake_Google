const searchBtn = document.querySelector('#search-btn');
const luckyBtn = document.querySelector('#lucky-btn');
const searchbar = document.querySelector('#search-bar')



searchBtn.addEventListener('click', search);
luckyBtn.addEventListener('click', lucky);
// luckyBtn.addEventListener('click', );

function search(e) {
    e.preventDefault();
    let input = document.getElementById('search-bar').value.toLowerCase();
    fetch(`http://localhost:3000/${input}`)
      .then(resp => resp.text())
      .then(data => document.getElementById('result').innerHTML = data);
  }

function lucky(e){
    e.preventDefault();
    fetch(`http://localhost:3000/random`)
      .then(resp => resp.text())
      .then(data => document.getElementById('result').innerHTML = data);
}
