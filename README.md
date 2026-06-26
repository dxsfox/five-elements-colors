# Five Elements Colors / 五色

> Chinese Five Elements (Wu Xing) color palette for BaZi & Chinese metaphysics apps.

```bash
npm install five-elements-colors
```

## Usage

### JS/TS

```ts
import { elements, getElement } from 'five-elements-colors';

// All elements
console.log(elements.wood.hex);   // '#4CAF50'
console.log(elements.fire.nameCN); // '火'

// Single element
const e = getElement('water');
console.log(e.light); // '#BBDEFB'
```

### CSS (copy)

```css
:root {
  --element-wood: #4CAF50;
  --element-fire: #FF5722;
  --element-earth: #FFC107;
  --element-metal: #9E9E9E;
  --element-water: #2196F3;
}
```

## Palette

| Element | Chinese | Modern Hex | Traditional | 
|---------|---------|-------------|-------------|
| Wood 🌿 | 木 | `#4CAF50` | 青 `#00A86B` |
| Fire 🔥 | 火 | `#FF5722` | 赤 `#E53935` |
| Earth 🟡 | 土 | `#FFC107` | 黃 `#FDD835` |
| Metal ⚪ | 金 | `#9E9E9E` | 白 `#E0E0E0` |
| Water 🔵 | 水 | `#2196F3` | 黑 `#1A237E` |

## License

MIT — feel free to use in any project.

---

*Powered by [InsightBaZi](https://www.insightbazi.com/en/bazi-calculator) — Free multilingual BaZi calculator*
