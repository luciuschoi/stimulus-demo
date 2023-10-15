import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="counter"
export default class extends Controller {
  static targets = [ 'count' ]
  static values = {
    count: Number
  }
  static classes = ['overTen']
  static outlets = ['reset']

  connect() {
    console.log("Counter controller connected...", this.element)
  }

  resetOutletConnected(outlet, _element) {
    console.log('Reset Outlet connected', outlet)
  }

  resetOutletDisonnected(outlet, _element) {
    console.log('Reset Outlet disconnected', outlet)
  }

  increment() {
    this.countValue++;
  }

  countValueChanged() {
    console.log("countValueChanged callback called...")
    this.countTarget.textContent = this.countValue;
    if (this.countValue >= 5) {
      this.countTarget.classList.add(this.overTenClass)
      setTimeout(() => {
        this.resetOutlet.enabledValue = true
      }, 0)
    } else {
      this.countTarget.classList.remove(this.overTenClass)
      setTimeout(() => {
        this.resetOutlet.enabledValue = false;
      }, 0);
    }
  }
}
