import P from 'parsimmon'
import {BrokenReferenceElement, ParagraphElement, ReferenceElement, WordElement} from './element';

export function parse(input) {
  let counter = 0;

  const ixParser = P.createLanguage({
    broken_ref: function(r) {
      return r.word
        .wrap(P.string('['), P.string(']'))
        .map(x => new BrokenReferenceElement(x));
    },
    ref: function(r) {
      return P.digits
        .wrap(P.string('['), P.string(']'))
        .map(x => new ReferenceElement(x, ++counter))
        .or(r.broken_ref);
    },
    word: function() {
      return P.regex(/.+?/)
        .map(x => new WordElement(x));
    },
    paragraph: function(r) {
      return P.alt(r.ref, r.word).many()
        .skip(P.newline)
        .map(x => new ParagraphElement(x))
    },
    expression: function(r) {
      return r.paragraph.many();
    }
  });

  if (!input.endsWith('\n')) {
    input += '\n';
  }

  return ixParser.expression.parse(input);
}