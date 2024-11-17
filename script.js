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