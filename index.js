document.addEventListener("DOMContentLoaded", () => {
  //select sections and bg
  var bg = document.querySelector("body");
  var yellowSection = document.getElementById("yellow-section");
  var purpleSection = document.getElementById("purple-section");
  var greenSection = document.getElementById("green-section");
  var blueSection = document.getElementById("blue-section");
  var classes = ["white", "yellow", "purple", "green", "blue"];

  document.addEventListener("scroll", handleScroll);

  function handleScroll() {
    const halfWindowHeight = window.innerHeight * 0.7;
    const yellowRect = yellowSection.getBoundingClientRect();
    const purpleRect = purpleSection.getBoundingClientRect();
    const greenRect = greenSection.getBoundingClientRect();
    const blueRect = blueSection.getBoundingClientRect();
    
    if (!bg.classList.contains("white") &&
    yellowRect.top > halfWindowHeight
    ){
      assignClass("white")
    }
    if (
      !bg.classList.contains("yellow") &&
      yellowRect.top <= halfWindowHeight &&
      purpleRect.top > halfWindowHeight
    ) {
      assignClass("yellow");
    }
    if (
      !bg.classList.contains("purple") &&
      purpleRect.top <= halfWindowHeight &&
      greenRect.top > halfWindowHeight
    ) {
      assignClass("purple");
    }
    if (
      !bg.classList.contains("green") &&
      greenRect.top <= halfWindowHeight &&
      blueRect.top > halfWindowHeight
    ) {
      assignClass("green");
    }
    if (!bg.classList.contains("blue") && 
    blueRect.top <= halfWindowHeight) {
      assignClass("blue");
    }
  }

  //assign active class & remove others
  function assignClass(classToAdd) {
    
    const classesToDrop = classes.filter(cl => cl !== classToAdd);
    bg.classList.add(classToAdd);
    classesToDrop.forEach(cl => bg.classList.remove(cl));
    console.log(bg.classList);
  }
});
