import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="hobby-info-toggle"
export default class extends Controller {
  static targets = [ "button" ]

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

    // Make text change under the buttons
  }
}
