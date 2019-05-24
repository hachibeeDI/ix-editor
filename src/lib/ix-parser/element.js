export class Element {}

export class LeafElement extends Element {
  constructor(value) {
    super();
    this.value = value;
  }
}

export class NodeElement extends Element {
  constructor(children) {
    super();
    this.children = children;
  }
}

export class ReferenceElement extends LeafElement {
  constructor(value, index) {
    super(value);
    this.index = index;
  }
}

export class WordsElement extends LeafElement {}

export class ParagraphElement extends NodeElement {}

export class RootElement extends NodeElement {}