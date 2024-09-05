import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="hobby-info-toggle"
export default class extends Controller {
  static targets = [ "button", "mover", "web", "games", "board" ]

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

      this.gamesTarget.querySelector("a").classList.add("games");
      this.webTarget.querySelector("a").classList.remove("web");
      this.boardTarget.querySelector("a").classList.remove("board-games");
    }
    if(currentHobby === "web"){
      this.moverTarget.classList.add("web");

      this.webTarget.querySelector("a").classList.add("web");
      this.gamesTarget.querySelector("a").classList.remove("games");
      this.boardTarget.querySelector("a").classList.remove("board-games");
    }
    if(currentHobby === "board"){
      this.moverTarget.classList.add("board-game");

      this.boardTarget.querySelector("a").classList.add("board-games");
      this.webTarget.querySelector("a").classList.remove("web");
      this.gamesTarget.querySelector("a").classList.remove("games");
    }
  }
}
