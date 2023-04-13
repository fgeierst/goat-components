import { unsafeCSS as f, LitElement as m, html as i } from "lit";
import { property as p, customElement as _, state as v } from "lit/decorators.js";
import { classMap as b } from "lit/directives/class-map.js";
const x = {
  prefix: "goat"
}, g = `.hamburger{all:unset;position:relative;background-color:var(--_color-background);width:48px;height:48px}.hamburger:before,.hamburger:after{content:"";display:block;width:24px;height:3px;position:absolute;left:12px;background-color:var(--_color-text);transition:transform .2s}.hamburger:before{top:18px}.hamburger[aria-expanded=true]:before{top:calc(50% - 1.5px);transform:rotate(-45deg)}.hamburger:after{bottom:18px}.hamburger[aria-expanded=true]:after{top:calc(50% - 1.5px);transform:rotate(45deg)}:host{--_transition-duration: var(--transition-duration, .2s);--_color-text: var(--color-text, black);--_color-background: var(--color-background, white);--_translateX: var(--translateX, 0);--_translateY: var(--translateY, -100%);position:relative}.clipbox{position:absolute;display:grid;overflow:hidden;transition:visibility var(--_transition-duration) linear}[aria-expanded=false]+.clipbox{visibility:hidden}.clipbox__panel{transition:transform var(--_transition-duration) cubic-bezier(.77,0,.175,1);background-color:var(--_color-background)}[aria-expanded=false]+.clipbox>.clipbox__panel{transform:translate(var(--_translateX),var(--_translateY))}.visually-hidden{position:absolute;transform:scale(0)}:focus-visible{outline:2px solid;outline-offset:2px}
`;
var y = Object.defineProperty, S = Object.getOwnPropertyDescriptor, c = (e, t, n, a) => {
  for (var r = a > 1 ? void 0 : a ? S(t, n) : t, s = e.length - 1, o; s >= 0; s--)
    (o = e[s]) && (r = (a ? o(t, n, r) : o(r)) || r);
  return a && r && y(t, n, r), r;
};
let l = class extends m {
  constructor() {
    super(), this.buttonLabel = "Menu", this.expanded = !1, this.hamburgerIcon = !1, this._onEscapeKeyBound = null;
  }
  render() {
    return i`
			<button
				class=${b({ hamburger: this.hamburgerIcon })}
				aria-expanded=${this.expanded ? "true" : "false"} 
				@click=${this._onClick} part="button"
			>
				<span class=${b({ "visually-hidden": this.hamburgerIcon })}>
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
  _onEscapeKey(e) {
    e.key === "Escape" && this._close();
  }
};
l.styles = f(g);
c([
  p({ type: String })
], l.prototype, "buttonLabel", 2);
c([
  p({ type: Boolean, reflect: !0 })
], l.prototype, "expanded", 2);
c([
  p({ type: Boolean })
], l.prototype, "hamburgerIcon", 2);
l = c([
  _(`${x.prefix}-slideout`)
], l);
const $ = `.panel{border:2px solid}
`;
var I = Object.defineProperty, w = Object.getOwnPropertyDescriptor, h = (e, t, n, a) => {
  for (var r = a > 1 ? void 0 : a ? w(t, n) : t, s = e.length - 1, o; s >= 0; s--)
    (o = e[s]) && (r = (a ? o(t, n, r) : o(r)) || r);
  return a && r && I(t, n, r), r;
};
let u = class extends m {
  constructor() {
    super(), this.menu = null, this._currentSubmenuId = 0, this._searchprompt = "";
  }
  render() {
    return i`
			<form>
				<input type="search" placeholder="Search..."
					@input=${(e) => this._searchprompt = e.target.value} 

				/>
				<button type="submit">Search</button>
			</form>

			<div class="panel">
				${this._searchprompt ? this.renderSearchResults() : this.renderSubmenu(this.getSubmenuById(this._currentSubmenuId))}
			</div>
		`;
  }
  renderSubmenu(e) {
    return i`
			<h2>${e.label}</h2>
			<ul>
				${e.items.map((t) => this.renderItem(t))}
			</ul>
		`;
  }
  getSubmenuById(e) {
    return this.getSubmenus(this.menu).find((t) => t.id === e);
  }
  getItems(e) {
    const t = [];
    function n(a) {
      const { id: r, label: s, href: o, items: d } = a;
      t.push({
        id: r,
        label: s,
        href: o
      }), d && d.forEach(n);
    }
    return n(e), t;
  }
  getSubmenus(e) {
    const t = [];
    function n(a) {
      const r = [];
      a.items && a.items.forEach((s) => {
        r.push({
          id: s.id,
          label: s.label,
          href: s.href,
          hasSubmenu: !!s.items
        }), s.items && n({
          id: s.id,
          label: s.label,
          items: s.items
        });
      }), t.push({
        id: a.id,
        label: a.label,
        items: r
      });
    }
    return n(e), t;
  }
  renderSearchResults() {
    console.log(this.getItems(this.menu));
    const e = this.getItems(this.menu).filter((t) => t.label.toLowerCase().startsWith(this._searchprompt.toLowerCase()));
    return i`
			<h2>Search Resuls</h2>
			<ul>
				${e.length === 0 ? i` 
					<li> No results found. </li>
				` : e.map((t) => i`
						<li>
							<a href="${t.href}">
								${t.label}
							</a>
						</li>
					`)}
			</ul>
		`;
  }
  renderItem(e) {
    return e.hasSubmenu ? i`
				<li>
					<button 
						@click=${() => this.switchTo(e.id)}
					>
						${e.label}
					</button>
				</li>
			` : i`
			<li>
				<a href="${e.href}">
					${e.label}
				</a>
			</li>
		`;
  }
  switchTo(e) {
    this._currentSubmenuId = e;
  }
};
u.styles = f($);
h([
  p({
    attribute: !1
  })
], u.prototype, "menu", 2);
h([
  v()
], u.prototype, "_currentSubmenuId", 2);
h([
  v()
], u.prototype, "_searchprompt", 2);
u = h([
  _(`${x.prefix}-searchable-menu`)
], u);
export {
  u as SearchableMenu,
  l as Slideout
};
