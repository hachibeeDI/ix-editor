import {BrokenReferenceElement, ParagraphElement, ReferenceElement, WordElement} from './element';

export function decorate(element) {
  if (element instanceof BrokenReferenceElement) {
    return `<span class="text-danger ix-reference">[?]</span>`;
  } else if (element instanceof ReferenceElement) {
    return `<span class="text-info ix-reference">[${element.index}]</span>`;
  } else if (element instanceof WordElement) {
    return `<span>${element.value}</span>`;
  } else if (element instanceof ParagraphElement) {
    const content = element.value.map(x => decorate(x)).join('');
    return `<p>${content}</p>`;
  } else if (element instanceof Array) {
    return element.map(x => decorate(x)).join('')
  } else {
    throw `Unknown element ${element.constructor.name}`;
  }
}