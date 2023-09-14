import { LitElement, unsafeCSS, html } from 'lit'
import { customElement, property, state } from 'lit/decorators.js';

import { settings } from '../settings'
import style from './searchable-menu.css?inline';

@customElement(`${settings.prefix}-searchable-menu`)
export class SearchableMenu extends LitElement {

	@property({
		attribute: false,
	}) menu = null;

	@state() _currentSubmenuId: number = 0;
	@state() _searchprompt: string = '';

	constructor() {
		super();
	}

	static styles = unsafeCSS(style);

	render() {
		return html`
			<form>
				<input type="search" placeholder="Search..."
					@input=${e => this._searchprompt = e.target.value} 

				/>
				<button type="submit">Search</button>
			</form>

			<div class="panel">
				${this._searchprompt
				? this.renderSearchResults()
				: this.renderSubmenu(this.getSubmenuById(this._currentSubmenuId))
			}
			</div>
		`;
	}

	renderSubmenu(item) {
		return html`
			<h2>${item.label}</h2>
			<ul>
				${item.items.map(item => this.renderItem(item))}
			</ul>
		`;
	}

	getSubmenuById(id) {
		return this.getSubmenus(this.menu).find(item => item.id === id);
	}
	getItems(menu) {
		const array = [];
		function addItem(item) {
			const { id, label, href, items } = item;
			array.push({
				id,
				label,
				href
			});
			if (items) {
				items.forEach(addItem);
			}
		}
		addItem(menu);
		return array;
	}

	getSubmenus(menu) {
		const array = [];
		function add(obj) {
			const items = [];
			if (obj.items) {
				obj.items.forEach(item => {
					items.push({
						id: item.id,
						label: item.label,
						href: item.href,
						hasSubmenu: item.items ? true : false,
					})
					if (item.items) {
						add({
							id: item.id,
							label: item.label,
							items: item.items,
						});
					}
				})
			}
			array.push({
				id: obj.id,
				label: obj.label,
				items: items
			})
		}
		add(menu);
		return array;
	}

	renderSearchResults() {
		const filteredItems = this.getItems(this.menu).filter(item => {
			return item.label.toLowerCase().startsWith(this._searchprompt.toLowerCase());
		});
		return html`
			<h2>Search Resuls</h2>
			<ul>
				${filteredItems.length === 0 ? html` 
					<li> No results found. </li>
				` :
				filteredItems.map(item => html`
						<li>
							<a href="${item.href}">
								${item.label}
							</a>
						</li>
					`)}
			</ul>
		`;
	}

	renderItem(item) {
		if (item.hasSubmenu) {
			return html`
				<li>
					<button 
						@click=${() => this.switchTo(item.id)}
					>
						${item.label}
					</button>
				</li>
			`;
		}

		return html`
			<li>
				<a href="${item.href}">
					${item.label}
				</a>
			</li>
		`;
	}

	switchTo(id: number) {
		this._currentSubmenuId = id;
	}


}