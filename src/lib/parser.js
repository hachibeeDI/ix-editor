import { Parjs } from 'parjs';

class NumericLiteral {

  constructor(value) {
    this.value = value;
  }
}

export function parse(s) {
  const tupleElement = Parjs.float();

  // Allow whitespace around elements:
  const paddedElement = tupleElement.between(Parjs.whitespaces).map(x => new NumericLiteral(x));

  // Multiple instances of {paddedElement}, separated by a comma:
  const separated = paddedElement.manySepBy(Parjs.string(','));

  // Surround everything with parentheses:
  const surrounded = separated.between(Parjs.string('('), Parjs.string(')'));

  return surrounded.parse(s);
}
