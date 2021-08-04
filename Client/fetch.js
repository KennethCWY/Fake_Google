//Fetch data from API and display onto HTML

function searchResult() {
    let input = document.getElementById('search-bar').value.toLowerCase();
    fetch(`http://localhost:3000/${input}`)
      .then(resp => resp.json())
      .then(data => appendData(data))
      function appendData(data) {
        let mainContainer = document.getElementById("result");
        for (let i = 0; i < data.length; i++) {
          let div = document.createElement("div");
          div.innerHTML = `<a href=${data[i].link}>${data[i].title}</a>` + `<br>` + data[i].text;
          mainContainer.appendChild(div);
        }}
      }

      searchResult()
