import { LitElement as t, html as e, css as o } from "lit";
class n extends t {
  static get properties() {
    return {
      /**
       * Label for the disclosure button
       */
      buttonLabel: { type: String }
    };
  }
  constructor() {
    super();
  }
  render() {
    return e`
			<button @click=${this._onClick} part="button">
				${this.buttonLabel}
			</button>
      <slot></slot>
    `;
  }
  _onClick() {
    console.log("clicked");
  }
  static get styles() {
    return o`
      :host {
				background-color: pink;
      }
    `;
  }
}
window.customElements.define("goat-slideout-panel", n);
export {
  n as GoatSlideoutPanel
};
