import P from 'parsimmon'
import {BrokenReferenceElement, ParagraphElement, ReferenceElement, WordElement} from './element';

export function parse(input) {
  let id = 0;
  let counter = 0;
  let referenceIds = [];

  const ixParser = P.createLanguage({
    broken_ref: function(r) {
      return r.word
        .wrap(P.string('['), P.string(']'))
        .map(x => new BrokenReferenceElement(++id, x));
    },
    ref: function(r) {
      return P.digits
        .wrap(P.string('['), P.string(']'))
        .map(x => {
          referenceIds.push(x);
          return new ReferenceElement(++id, x, ++counter);
        })
        .or(r.broken_ref);
    },
    word: function() {
      return P.regex(/.+?/)
        .map(x => new WordElement(++id, x));
    },
    paragraph: function(r) {
      return P.alt(r.ref, r.word).many()
        .skip(P.newline)
        .map(x => new ParagraphElement(++id, x))
    },
    expression: function(r) {
      return r.paragraph.many();
    }
  });

  if (!input.endsWith('\n')) {
    input += '\n';
  }

  const ast = ixParser.expression.parse(input);
  return {ast, referenceIds};
}