import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="counter"
export default class extends Controller {
  connect() {
    console.log("Counter Controller connected...", this.element);
    console.log(this.element.textContent);
  }

  increment() {
    this.element.textContent = parseInt(this.element.textContent) + 1;
  }
}
