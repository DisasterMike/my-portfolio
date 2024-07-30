import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="logo-letters"
export default class extends Controller {
  connect() {
    // console.log("hello from logo letters");
  }

  buttonsToggle(){
    const letters = this.element.querySelectorAll(".moving-letter");
    letters.forEach(letter => {
      letter.classList.toggle("letter-buttons");
    });
    const helloText = this.element.querySelector(".hello-text");
    // helloText.innerText = "👋🏻 Hi, I'm Michael";
    helloText.innerText = "";
  }
}
