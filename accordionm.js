
const acc = document.getElementsByClassName("accordion");
const init = 1; // init 1 or 0 change behaviour

for (let i = 0; i < acc.length; i++) {
  
  acc[i].addEventListener("click", function() {
  
    //removes name "active" and hide content of panel
    if (init) {
      hidePanel(acc, i); 
    } 
    
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    
    if (panel.style.maxHeight)  {
        panel.style.maxHeight = null;
      } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

/*
* function hidePanel removes name "active" from class list
* of any item exept i-th (clikked) and removes maxheight prop.
* from corresponding "panel"
*/
const hidePanel = (acc, i) => {

  for (let j = 0; j < acc.length; j++) {
        if (j != i) {
            acc[j].classList.remove("active");
            acc[j].nextElementSibling.style.maxHeight = null;
        }
  }
}
