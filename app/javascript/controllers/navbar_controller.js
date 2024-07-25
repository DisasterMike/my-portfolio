import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="navbar"
export default class extends Controller {
  connect() {
  }

  static afterLoad(identifier, application){
    console.log("hello");
    const primaryHeader = document.querySelector(".main-nav");
    const scrollWatcher = document.createElement("div");

    scrollWatcher.setAttribute("data-scroll-watcher", "");
    primaryHeader.before(scrollWatcher);

    const navObserver = new IntersectionObserver((entries) => {
      primaryHeader.classList.toggle("sticking", !entries[0].isIntersecting)
    }, {rootMargin: "200px 0px 0px 0px"});

    navObserver.observe(scrollWatcher);
  }
}
