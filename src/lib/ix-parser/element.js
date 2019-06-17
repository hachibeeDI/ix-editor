export class Element {
  constructor(name, id, value) {
    this.name = name;
    this.id = id;
    this.value = value;
  }
}

export class ReferenceElement extends Element {
  constructor(id, value, index) {
    super('Reference', id, value);
    this.index = index;
  }
}

export class BrokenReferenceElement extends Element {
  constructor(id, value) {
    super('BrokenReference', id, value);
  }
}

export class WordElement extends Element {
  constructor(id, value) {
    super('Word', id, value);
  }
}

export class ParagraphElement extends Element {
  constructor(id, value) {
    super('Paragraph', id, value);
  }
}
