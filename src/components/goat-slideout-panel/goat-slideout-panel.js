import { LitElement, css, html } from 'lit'

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class GoatSlideoutPanel extends LitElement {
  static get properties() {
    return {
      /**
       * Label for the disclosure button
       */
      buttonLabel: { type: String },
    }
  }

  constructor() {
    super()
  }

  render() {
    return html`
			<button @click=${this._onClick} part="button">
				${this.buttonLabel}
			</button>
      <slot></slot>
    `
  }

  _onClick() {
		console.log('clicked');
  }

  static get styles() {
    return css`
      :host {
				background-color: pink;
      }
    `
  }
}

window.customElements.define('goat-slideout-panel', GoatSlideoutPanel)
