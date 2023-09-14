import { LitElement, unsafeCSS, html } from 'lit'
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import { settings } from '../settings'
import style from './slideout.css?inline';

@customElement(`${settings.prefix}-slideout`)
export class Slideout extends LitElement {

	@property({ type: String }) buttonLabel = 'Menu';
	@property({ type: Boolean, reflect: true }) expanded = false;
	@property({ type: Boolean }) hamburgerIcon = false;
	private _onEscapeKeyBound = null;

	constructor() {
		super()
	}

	static styles = unsafeCSS(style);

	render() {
		return html`
			<button
				class=${classMap({ 'hamburger': this.hamburgerIcon })}
				aria-expanded=${this.expanded ? 'true' : 'false'} 
				@click=${this._onClick} part="button"
			>
				<span class=${classMap({ 'visually-hidden': this.hamburgerIcon })}>
					${this.buttonLabel}
				</span>
			</button>

			<div class="clipbox" part="clipbox">
				<div class="clipbox__panel" part="panel">
					<slot></slot>
				</div>
			</div>
		`;
	}

	_open() {
		this.expanded = true;
		this._onEscapeKeyBound = this._onEscapeKey.bind(this);
		document.addEventListener('keydown', this._onEscapeKeyBound);
	}

	_close() {
		this.expanded = false;
		document.removeEventListener('keydown', this._onEscapeKeyBound);
	}

	_onClick() {
		this.expanded ? this._close() : this._open();
	}

	_onEscapeKey(event: KeyboardEvent) {
		if (event.key !== 'Escape') {
			return;
		}
		this._close();
	}
}