import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="scrolling-opacity"
export default class extends Controller {
  static targets = [ "scrollWatcher", "project" ]

  connect() {
    console.log("Hello from the scrolling opacity controller");
    console.log(this.scrollWatcherTarget);
    console.log(this.projectTarget);

    const navObserver = new IntersectionObserver((entries) => {
      // this.projectTarget.classList.toggle("opacity-full", entries[0].isIntersecting); // second parameter makes it so the toggle will only remove if false, or add if true
      if(entries[0].isIntersecting){
        // stopTransition = true;
        this.projectTarget.classList.add("opacity-full");
      }
    }, {rootMargin: `0px 0px 0px 0px`});

    navObserver.observe(this.scrollWatcherTarget);
  }
}
