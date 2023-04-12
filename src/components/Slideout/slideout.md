# Slideout



## Examples

## With text label

```html 
<goat-slideout buttonLabel="Main Menu">
	<ul>
		<li><a href="#">Home</a></li>
		<li><a href="#">About</a></li>
	</ul>
</goat-slideout>
```

## With animated hambuger icon
```html 
<goat-slideout hamburgerIcon>
	...
</goat-slideout>
```

## Importing

### CDN
```javascript
import * as GoatSlideout from "https://cdn.skypack.dev/goat-components";
```

### NPM
```bash
npm install goat-components
```

```javascript
import { Slideout } from 'goat-components';
```

## Slots 

| Name      | Description                    |
| --------- | ------------------------------ |
| (default) | Content that is sliding in/out |


## Attributes & Properties

| Name            | Description                                                                                                               | Reflects | Type      | Default  |
| --------------- | ------------------------------------------------------------------------------------------------------------------------- | -------- | --------- | -------- |
| `buttonLabel`   | Label of the toggl button.                                                                                                | no       | `string`  | `"Menu"` |
| `expanded`      | Whether the panel is expanded or not.                                                                                     | yes      | `boolean` | `false`  |
| `hamburgerIcon` | When this attribute is set, a hamburger icon is shown on the button. The `buttonLabel` is then visually hidden in a span. | no       | `boolean` | `false`  |


## CSS Custom Properties

| Name                    | Description                            | Default |
| ----------------------- | -------------------------------------- | ------- |
| `--transition-duration` | Duration of slide transition           | `.2s`   |
| `--color-text`          | Text color                             | `black` |
| `--color-background`    | Background color                       | `white` |
| `--translateX`          | Horizontal distance the slide is moved | `0`     |
| `--translateY`          | Vertical distance the slide is moved   | `-100%` |

## CSS Parts

| Name      | Description                                                                                                 |
| --------- | ----------------------------------------------------------------------------------------------------------- |
| `button`  | Button that toggles the visibility of the panel.                                                            |
| `clipbox` | The wrapper around the drawer that has `overflow:hidden`. By default it has `visibility: hidden` initially. |
| `panel`   | The drawer that is sliding in/out. By default it has `visibility: hidden` initially.                        |