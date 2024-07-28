import { Controller } from "@hotwired/stimulus"

// const observerMarginValues = "100px 0px 0px 0px";

// Connects to data-controller="navbar"
export default class extends Controller {
  static targets = [ "mainNav" ]

  connect() {
    // create div that determines when to change the navbar
    const scrollWatcher = document.createElement("div");
    // set data attribute so we know what it does
    scrollWatcher.setAttribute("data-scroll-watcher", "");
    this.mainNavTarget.before(scrollWatcher);

    const navHeight = this.mainNavTarget.offsetHeight;
    // console.log(navHeight);
    // const observerMarginValues = `${navHeight}px 0px 0px 0px`
    const observerMarginValues = `${0}px 0px 0px 0px`

    //
    const navObserver = new IntersectionObserver((entries) => {
      this.mainNavTarget.classList.toggle("sticking-nav", !entries[0].isIntersecting) // second parameter makes it so the toggle will only remove if false, or add if true
    }, {rootMargin: observerMarginValues});

    navObserver.observe(scrollWatcher);
  }
}
