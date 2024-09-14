import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="hobby-info-toggle"
export default class extends Controller {
  static targets = [ "button", "mover", "web", "games", "board", "webPic", "gamesPic", "boardPic", "webLink", "gamesLink", "boardLink" ]

  connect() {
    // console.log("Hello from the hobby info toggle controller");

    // set the hrefs for the about row text so it works for different languages
    this.webTarget.querySelector("a").href = this.webLinkTarget.querySelector("a").href;
    this.gamesTarget.querySelector("a").href = this.gamesLinkTarget.querySelector("a").href;
    this.boardTarget.querySelector("a").href = this.boardLinkTarget.querySelector("a").href;
  }

  hover(event){
    // Remove active class from all buttons
    this.buttonTargets.forEach(button => {
      button.classList.remove("active");
    });

    // Remove all show classes from pictures
    this.webPicTarget.classList.remove("show");
    this.gamesPicTarget.classList.remove("show");
    this.boardPicTarget.classList.remove("show");

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

      this.gamesPicTarget.classList.add("show");

      this.gamesTarget.querySelector("a").classList.add("games");
      this.webTarget.querySelector("a").classList.remove("web");
      this.boardTarget.querySelector("a").classList.remove("board-games");
    }
    if(currentHobby === "web"){
      this.moverTarget.classList.add("web");

      this.webPicTarget.classList.add("show");

      this.webTarget.querySelector("a").classList.add("web");
      this.gamesTarget.querySelector("a").classList.remove("games");
      this.boardTarget.querySelector("a").classList.remove("board-games");
    }
    if(currentHobby === "board"){
      this.moverTarget.classList.add("board-game");

      this.boardPicTarget.classList.add("show");

      this.boardTarget.querySelector("a").classList.add("board-games");
      this.webTarget.querySelector("a").classList.remove("web");
      this.gamesTarget.querySelector("a").classList.remove("games");
    }
  }
}
