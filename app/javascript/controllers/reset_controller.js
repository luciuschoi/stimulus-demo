import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="reset"
export default class extends Controller {
  static values = {
    enabled: Boolean,
  };
  static outlets = ["counter"];

  connect() {
    console.log("Reset Controller connected...", this.element);
  }

  enabledValueChanged() {
    if (this.enabledValue) {
      this.element.removeAttribute("disabled");
    } else {
      this.element.setAttribute("disabled", "");
    }
  }

  handleReset() {
    console.log("Reset button clicked...");
    if (this.hasCounterOutlet) {
      this.counterOutlet.countValue = 0;
    }
  }
}
