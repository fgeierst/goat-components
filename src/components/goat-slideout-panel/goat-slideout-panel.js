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
			buttonLabel: { type: String, default: 'Menu' },

      /**
       * aria-expanded state
       */
			expanded: { type: Boolean, default: false },
			
    }
  }

  constructor() {
    super()
  }

	/**
 	* Markup
 	*/
  render() {
    return html`
			<button aria-expanded=${this.expanded} @click=${this._onClick} part="button">
				${this.buttonLabel}
			</button>
      <slot></slot>
    `
  }

	/**
 	* Styling
 	*/
  static get styles() {
		return css`
		:host {
			background-color: pink;
		}
    `
	}
	
	/**
 	* Click event handler
 	*/
	_onClick() {
		this.expanded = !this.expanded;
		console.log('clicked');
	}
}

window.customElements.define('goat-slideout-panel', GoatSlideoutPanel)
