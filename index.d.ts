export interface ElementColor {
  name: string;
  nameCN: string;
  hex: string;
  light: string;
  dark: string;
  traditionalCN: string;
}

export const elements: {
  wood: ElementColor;
  fire: ElementColor;
  earth: ElementColor;
  metal: ElementColor;
  water: ElementColor;
};

export function getElement(key: keyof typeof elements): ElementColor | null;
export function allElements(): ElementColor[];
