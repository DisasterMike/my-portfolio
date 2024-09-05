import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="hobby-info-toggle"
export default class extends Controller {
  static targets = [ "button", "mover" ]

  connect() {
    // console.log("Hello from the hobby info toggle controller");
  }

  hover(event){
    // Remove active class from all buttons
    this.buttonTargets.forEach(button => {
      button.classList.remove("active");
    });

    // Add active class to current hovered button
    event.currentTarget.classList.add("active");

    // Remove all hobby classes from text divs
    this.moverTarget.classList.remove("game");
    this.moverTarget.classList.remove("web");
    this.moverTarget.classList.remove("board-game");

    // Add hobby class to the text div
    const currentHobby = event.currentTarget.dataset.hobby;
    if(currentHobby === "game"){
      this.moverTarget.classList.add("game");
    }
    if(currentHobby === "web"){
      this.moverTarget.classList.add("web");
    }
    if(currentHobby === "board"){
      this.moverTarget.classList.add("board-game");
    }
  }
}
