import {ParagraphElement, ReferenceElement, RootElement, WordsElement} from './element';

export function decorate(element) {

  if (element instanceof ReferenceElement) {
    return `<span class="text-info ix-reference">[${element.index}]</span>`;
  } else if (element instanceof WordsElement) {
    return `<span>${element.value}</span>`;
  } else if (element instanceof ParagraphElement) {
    const content = element.children.map(x => decorate(x)).join('');
    return `<p>${content}</p>`;
  } else if (element instanceof RootElement) {
    return element.children.map(x => decorate(x)).join('\n');
  } else {
    throw `Unknown element ${element.constructor.name}`;
  }
}