import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="project-color-setter"
export default class extends Controller {
  static targets = ["project"];

  connect() {
    // console.log("hello from the color setting controller");

    let classToAdd = "black";
    this.projectTargets.forEach(project => {
      project.classList.add(classToAdd);
      if(classToAdd === "black"){
        classToAdd = "white";
      }else{
        classToAdd = "black";
      }
    });
  }
}
