import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="language-toggle"
export default class extends Controller {
  static targets = [ "toggle" ]

  connect() {
    // Get the search params to determine the state of the toggle
    const url = new URL(window.location.href);
    const lang = url.searchParams.get("locale");

    // check whether it's set to Japanese or not...
    if(lang === "jp"){
      this.toggleTarget.checked = false; // set toggle to Off to begin with
      this.#SetToggleAfterDelay(true); // change toggle after a delay so we see it after the page loads
    }else{
      this.toggleTarget.checked = true; // set toggle to On to begin with
      this.#SetToggleAfterDelay(false); // change toggle after a delay so we see it after the page loads
    }
  }

  #SetToggleAfterDelay(state){
    setTimeout(() => {
      this.toggleTarget.checked = state;
      console.log(state);
    }, 100);
  }
}
