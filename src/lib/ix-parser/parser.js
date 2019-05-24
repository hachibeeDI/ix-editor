import {Parjs} from 'parjs/index';
import 'parjs/unicode';
import {ParagraphElement, ReferenceElement, RootElement, WordsElement} from './element';

export function parse(s) {
  let referenceCounter = 0;

  const uuid = Parjs.hex.exactly(8).then(Parjs.string('-'))
    .then(Parjs.hex.exactly(4)).then(Parjs.string('-'))
    .then(Parjs.hex.exactly(4)).then(Parjs.string('-'))
    .then(Parjs.hex.exactly(4)).then(Parjs.string('-'))
    .then(Parjs.hex.exactly(12)).str;

  const reference = Parjs.string('!').q
    .then(uuid)
    .between(Parjs.string('['), Parjs.string(']'))
    .map(x => new ReferenceElement(x, ++referenceCounter));

  const char = Parjs.any(Parjs.uniLetter, Parjs.uniDigit, Parjs.uniSpace);

  const words = char.then(char.many()).str
    .map(x => new WordsElement(x));

  const paragraph = Parjs.any(reference, words).many()
    .map(x => new ParagraphElement(x));

  const root = paragraph.manySepBy(Parjs.newline)
    .map(x => new RootElement(x));

  return root.parse(s);
}
