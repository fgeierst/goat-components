import { unsafeCSS as d, LitElement as u, html as b } from "lit";
import { property as l, customElement as x } from "lit/decorators.js";
import { classMap as c } from "lit/directives/class-map.js";
const h = {
  prefix: "goat"
}, f = `@media (max-width: 700px){:host{--_transition-duration: var(--transition-duration, .2s);--_color-text: var(--color-text, black);--_color-background: var(--color-background, white);--_translateX: var(--translateX, 0);--_translateY: var(--translateY, -100%);position:relative}.clipbox{position:absolute;display:grid;overflow:hidden;transition:visibility var(--_transition-duration) linear}[aria-expanded=false]+.clipbox{visibility:hidden}.clipbox__panel{transition:transform var(--_transition-duration) cubic-bezier(.77,0,.175,1);background-color:var(--_color-background)}[aria-expanded=false]+.clipbox>.clipbox__panel{transform:translate(var(--_translateX),var(--_translateY))}.hamburger{all:unset;position:relative;background-color:var(--_color-background);width:48px;height:48px}.hamburger:before,.hamburger:after{content:"";display:block;width:24px;height:3px;position:absolute;left:12px;background-color:var(--_color-text);transition:transform .2s}.hamburger:before{top:18px}.hamburger[aria-expanded=true]:before{top:calc(50% - 1.5px);transform:rotate(-45deg)}.hamburger:after{bottom:18px}.hamburger[aria-expanded=true]:after{top:calc(50% - 1.5px);transform:rotate(45deg)}}@media (min-width: 701px){button{display:none}}.visually-hidden{position:absolute;transform:scale(0)}:focus-visible{outline:2px solid;outline-offset:2px}
`;
var m = Object.defineProperty, v = Object.getOwnPropertyDescriptor, o = (p, e, i, a) => {
  for (var t = a > 1 ? void 0 : a ? v(e, i) : e, n = p.length - 1, s; n >= 0; n--)
    (s = p[n]) && (t = (a ? s(e, i, t) : s(t)) || t);
  return a && t && m(e, i, t), t;
};
let r = class extends u {
  constructor() {
    super(), this.buttonLabel = "Menu", this.expanded = !1, this.hamburgerIcon = !1;
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
  _onClick() {
    this.expanded = !this.expanded;
  }
};
r.styles = d(f);
o([
  l({ type: String })
], r.prototype, "buttonLabel", 2);
o([
  l({ type: Boolean, reflect: !0 })
], r.prototype, "expanded", 2);
o([
  l({ type: Boolean })
], r.prototype, "hamburgerIcon", 2);
r = o([
  x(`${h.prefix}-slideout`)
], r);
export {
  r as Slideout
};
