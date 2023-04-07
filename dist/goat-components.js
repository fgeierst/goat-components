import { unsafeCSS as d, LitElement as u, html as b } from "lit";
import { property as p, customElement as h } from "lit/decorators.js";
import { classMap as c } from "lit/directives/class-map.js";
const x = {
  prefix: "goat"
}, _ = `.hamburger{all:unset;position:relative;background-color:var(--_color-background);width:48px;height:48px}.hamburger:before,.hamburger:after{content:"";display:block;width:24px;height:3px;position:absolute;left:12px;background-color:var(--_color-text);transition:transform .2s}.hamburger:before{top:18px}.hamburger[aria-expanded=true]:before{top:calc(50% - 1.5px);transform:rotate(-45deg)}.hamburger:after{bottom:18px}.hamburger[aria-expanded=true]:after{top:calc(50% - 1.5px);transform:rotate(45deg)}:host{--_transition-duration: var(--transition-duration, .2s);--_color-text: var(--color-text, black);--_color-background: var(--color-background, white);--_translateX: var(--translateX, 0);--_translateY: var(--translateY, -100%);position:relative}.clipbox{position:absolute;display:grid;overflow:hidden;transition:visibility var(--_transition-duration) linear}[aria-expanded=false]+.clipbox{visibility:hidden}.clipbox__panel{transition:transform var(--_transition-duration) cubic-bezier(.77,0,.175,1);background-color:var(--_color-background)}[aria-expanded=false]+.clipbox>.clipbox__panel{transform:translate(var(--_translateX),var(--_translateY))}.visually-hidden{position:absolute;transform:scale(0)}:focus-visible{outline:2px solid;outline-offset:2px}
`;
var f = Object.defineProperty, v = Object.getOwnPropertyDescriptor, n = (o, r, i, a) => {
  for (var e = a > 1 ? void 0 : a ? v(r, i) : r, s = o.length - 1, l; s >= 0; s--)
    (l = o[s]) && (e = (a ? l(r, i, e) : l(e)) || e);
  return a && e && f(r, i, e), e;
};
let t = class extends u {
  constructor() {
    super(), this.buttonLabel = "Menu", this.expanded = !1, this.hamburgerIcon = !1, this._onEscapeKeyBound = null;
  }
  render() {
    return b`
			<button
				class=${c({ hamburger: this.hamburgerIcon })}
				aria-expanded=${this.expanded ? "true" : "false"} 
				@click=${this._onClick} part="button"
			>
				<span class=${c({ "visually-hidden": this.hamburgerIcon })}>
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
    this.expanded = !0, this._onEscapeKeyBound = this._onEscapeKey.bind(this), document.addEventListener("keydown", this._onEscapeKeyBound);
  }
  _close() {
    this.expanded = !1, document.removeEventListener("keydown", this._onEscapeKeyBound);
  }
  _onClick() {
    this.expanded ? this._close() : this._open();
  }
  _onEscapeKey(o) {
    o.key === "Escape" && this._close();
  }
};
t.styles = d(_);
n([
  p({ type: String })
], t.prototype, "buttonLabel", 2);
n([
  p({ type: Boolean, reflect: !0 })
], t.prototype, "expanded", 2);
n([
  p({ type: Boolean })
], t.prototype, "hamburgerIcon", 2);
t = n([
  h(`${x.prefix}-slideout`)
], t);
export {
  t as Slideout
};
