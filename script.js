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