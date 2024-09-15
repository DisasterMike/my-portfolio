import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="game-image-switch"
export default class extends Controller {
  static targets = [ "gameImage", "mainImage" ]

  connect() {
    // console.log("Hello from the game image switch controller");

    // Set first picture as default one
    this.gameImageTargets[0].classList.add("current");
  }

  switch(event){
    // remove "current" class from all images
    this.gameImageTargets.forEach(image => {
      image.classList.remove("current");
    });

    // add to one clicked on
    event.currentTarget.classList.add("current");

    // change main image to match what you clicked
    this.mainImageTarget.style.backgroundImage = event.currentTarget.style.backgroundImage;
  }
}
