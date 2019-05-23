import { Streams, N, C, F } from '@masala/parser';

const blanks = () => C.char(' ').optrep();

class OperatorParser {

  constructor(element) {
    this.element = element
  }

  decorate() {
    return `<b style="color:gray">${this.element}</b>`;
  }

  static expression(symbol) {
    return blanks().drop()
        .then(C.char(symbol))
        .then(blanks().drop())
        .single()
        .map(x => new OperatorParser(x));
  }
}

class IntParser {

  constructor(element) {
    this.element = element;
  }

  decorate() {
    return `<span style="color:blue">${this.element}</span>`;
  }

  static expression() {
    return N.integer().map(x => new IntParser(x));
  }
}

class SumParser {

  constructor(element) {
    this.element = element;
  }

  decorate() {
    return `<div style="background-color:#ccf">${this.element.value.map(x => x.decorate()).join('')}</div>`;
  }

  static expression() {
    return IntParser.expression()
        .then(OperatorParser.expression('+'))
        .then(IntParser.expression())
        .map(x => new SumParser(x));
  }
}

class MultiParser {

  constructor(element) {
    this.element = element;
  }

  decorate() {
    return `<div style="background-color:#cfc">${this.element.value.map(x => x.decorate()).join('')}</div>`;
  }

  static expression() {
    return IntParser.expression()
        .then(OperatorParser.expression('*'))
        .then(IntParser.expression())
        .map(x => new MultiParser(x));
  }
}

export class Parser {

  constructor(element) {
    this.element = element;
  }

  static parse(s) {
    return Parser.expression().parse(Streams.ofString(s));
  }

  decorate() {
    return `<div>${this.element.decorate()}</div>`;
  }

  static expression() {
    return F.try(SumParser.expression())
        .or(MultiParser.expression())
        .map(x => new Parser(x));
  }
}
