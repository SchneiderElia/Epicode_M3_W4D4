/////////////////////////////////////////////////////////////////////
/////////////// change color link active ///////////////////////////
/////////////////////////////////////////////////////////////////////

let navLinks = document.querySelectorAll('.nav-link');

for (let link of navLinks) {
  link.addEventListener('click', function() {
    // Rimuovi la classe "active" da tutti i link
    for (let otherLink of navLinks) {
      otherLink.classList.remove('active');
    }

    this.classList.add('active'); 
    this.style.cursor = "default"
  });
}

/////////////////////////////////////////////////////////////////////
/////////////// home link active on start ///////////////////////////
/////////////////////////////////////////////////////////////////////

let homeLink = document.querySelector(".nav-link[href='Netflix-Clone.html']")

function homeLinks() {
    if (homeLink) {
        homeLink.classList.add("active")
        homeLink.style.cursor = "default"
    }
    
}homeLinks()

/////////////////////////////////////////////////////////////////////
/////////////// notify boxed ////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

let bellBox = document.getElementById("bell")
let timer;

let box = document.createElement("div")
box.id = "notify"
bellBox.appendChild(box)

let notifyBox = document.getElementById("notify")

bellBox.addEventListener("mouseover", () => {
    notifyBox.style.display = "block"
    clearTimeout(timer)
});

notifyBox.addEventListener("mouseover" , () =>{
    notifyBox.style.display = "block"
    clearTimeout(timer)
})

bellBox.addEventListener("mouseout", () => {
  timer = setTimeout (() =>{
    let box = document.getElementById("notify")
    if (box) {
      notifyBox.style.display = "none"
      
    }
  },500)

});

/////////////////////////////////////////////////////////////////////
/////////////// Array Films ////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

let filmCover = ["asset/1.png",
                "asset/2.png",
                "asset/3.png",
                "asset/4.png",
                "asset/5.png",
                "asset/6.png",
                "asset/7.png",
                "asset/8.png",
                "asset/9.png",
                "asset/10.png",
                "asset/11.png",
                "asset/12.png",
                "asset/13.png",
                "asset/15.png",
                "asset/16.png",
                "asset/17.png",
                "asset/18.png"
]

/////////////////////////////////////////////////////////////////////
/////////////// Card Line One ////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

let lineOne = document.getElementById("image-containerOne")

for (let i = 0; i < filmCover.length; i++){

    let card = document.createElement("div")
    card.classList = "card"
    lineOne.appendChild(card)

    let img = document.createElement("img")
    img.src = filmCover[i]
    img.alt = "FilmCover" +  (i)
    img.classList = "ImgCover"
    card.appendChild(img)
}

/////////////////////////////////////////////////////////////////////
/////////////// Card Line Two ////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array; 
  
}
let filmCoverMescolati = shuffle([...filmCover]);

filmCover = shuffle(filmCover);

console.log(filmCover);


let lineTwo = document.getElementById("image-containerTwo")

for (let i = 0; i < filmCover.length; i++){

    let card = document.createElement("div")
    card.classList = "card"
    lineTwo.appendChild(card)

    let img = document.createElement("img")
    img.src = filmCover[i]
    img.alt = "FilmCover" +  (i)
    img.classList = "ImgCover"
    card.appendChild(img)
}

/////////////////////////////////////////////////////////////////////
/////////////// Card Line Three ////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array; 
  
}
let filmCoverMescolati2 = shuffle([...filmCover]);

filmCover = shuffle(filmCover);

console.log(filmCover);


let lineThree = document.getElementById("image-containerThree")

for (let i = 0; i < filmCover.length; i++){

    let card = document.createElement("div")
    card.classList = "card"
    lineThree.appendChild(card)

    let img = document.createElement("img")
    img.src = filmCover[i]
    img.alt = "FilmCover" +  (i)
    img.classList = "ImgCover"
    card.appendChild(img)
}

/////////////////////////////////////////////////////////////////////
/////////////// Arrow ///////////////////////////////////////
/////////////////////////////////////////////////////////////////////


// Funzione per lo scorrimento delle immagini
function scorrimentoFilm(containerId, prevButtonId, nextButtonId) {
  const container = document.getElementById(containerId);
  const cards = container.querySelectorAll(".card");
  const prevButton = document.getElementById(prevButtonId);
  const nextButton = document.getElementById(nextButtonId);
  let currentIndex = 0;
  

  // Mostra la card corrente e nascondi le altre
  function showCard(index) {
    cards.forEach((card, i) => {
      card.style.display = (i >= index && i < index + 6) ? "block" : "none";
    });
  }

  // Funzione per passare alla card successiva
  function nextCard() {
    if (currentIndex < cards.length - 6) {
      currentIndex++;
      showCard(currentIndex);
      prevButton.disabled = false; // Abilita il pulsante "indietro"
    }
    if (currentIndex === cards.length - 6) {
      nextButton.disabled = true; // Disabilita il pulsante "avanti" se si è alla fine
    }
  }

  // Funzione per passare alla card precedente
  function prevCard() {
    if (currentIndex > 0) {
      currentIndex--;
      showCard(currentIndex);
      nextButton.disabled = false; // Abilita il pulsante "avanti"
    }
    if (currentIndex === 0) {
      prevButton.disabled = true; // Disabilita il pulsante "indietro" se si è all'inizio
    }
  }

  // Mostra la prima card all'avvio
  showCard(currentIndex);

  // Aggiungi event listener ai pulsanti
  prevButton.addEventListener("click", prevCard)
  nextButton.addEventListener("click", nextCard)
}

// Chiama la funzione per ogni riga di film
scorrimentoFilm("image-containerOne", "prev-button", "next-button")
scorrimentoFilm("image-containerTwo", "prev-button-2", "next-button-2")
scorrimentoFilm("image-containerThree", "prev-button-3", "next-button-3")

/////////////////////////////////////////////////////////////////////
/////////////// Change content Page  ///////////////////////////////////////
/////////////////////////////////////////////////////////////////////

let linkNavbar = document.getElementById("TVShows");
    let content = document.getElementById("content");

    // Definisci il nuovo contenuto
    let contentTV = document.createElement("div")
      

    let newcontent = `
    <div class=hello>
    <div>
    <h1><b>Hello</b> <br> Nothing here yet<br><br><br><br></h1>  
    <a href="Netflix-Clone.html" style="text-decoration:none"><h1 style="color:red">Go Back</h1></a>
    </div>

      
      <img src="asset/japangirl.png" alt="japangirl" class="img-fluid">
      </div>
    `;

    linkNavbar.addEventListener("click", () => {
      content.innerHTML = newcontent; 
    });