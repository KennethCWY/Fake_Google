//Access Buttons from index.html
const searchBtn = document.querySelector('#search-btn');
const luckyBtn = document.querySelector('#lucky-btn');
const searchbar = document.querySelector('#search-bar')

//Event Listeners for Button Clicks
searchBtn.addEventListener('click', search); 
luckyBtn.addEventListener('click', lucky);

//Get User Input and bring user to new page
function search(e) {
    e.preventDefault();
    let input = document.getElementById('search-bar').value.toLowerCase();
    window.location.href = `${input}.html`;
  }

//Takes user to random page from data
function lucky(e){
    e.preventDefault();
    fetch(`http://localhost:3000/random`)
      .then(resp => resp.json())
      .then(data => window.location.href = data.link)
}
