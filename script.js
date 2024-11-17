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
/////////////// Card Template ////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
let lineOne = document.getElementById("image-container")

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

