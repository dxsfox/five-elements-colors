'use strict';

const elements = {
  wood:  { name: 'Wood',  nameCN: '木', hex: '#4CAF50', light: '#C8E6C9', dark: '#2E7D32', traditionalCN: '#00A86B' },
  fire:  { name: 'Fire',  nameCN: '火', hex: '#FF5722', light: '#FFCCBC', dark: '#BF360C', traditionalCN: '#E53935' },
  earth: { name: 'Earth', nameCN: '土', hex: '#FFC107', light: '#FFECB3', dark: '#FF8F00', traditionalCN: '#FDD835' },
  metal: { name: 'Metal', nameCN: '金', hex: '#9E9E9E', light: '#F5F5F5', dark: '#424242', traditionalCN: '#E0E0E0' },
  water: { name: 'Water', nameCN: '水', hex: '#2196F3', light: '#BBDEFB', dark: '#1565C0', traditionalCN: '#1A237E' },
};

function getElement(key) {
  return elements[key] || null;
}

function allElements() {
  return Object.values(elements);
}

module.exports = { elements, getElement, allElements };
