export class Element {
  constructor(value) {
    this.value = value;
  }
}

export class ReferenceElement extends Element {
  constructor(value, index) {
    super(value);
    this.index = index;
  }
}

export class BrokenReferenceElement extends Element {}

export class WordElement extends Element {}

export class ParagraphElement extends Element {}

export class LiElement extends Element {}
