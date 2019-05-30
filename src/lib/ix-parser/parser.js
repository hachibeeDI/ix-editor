import P from 'parsimmon'
import {BrokenReferenceElement, LiElement, ParagraphElement, ReferenceElement, WordElement} from "./element";

let counter = 0;

export const IxParser = P.createLanguage({
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
    return P.regex(/[^\[\]\n]+/)
      .map(x => new WordElement(x));
  },
  paragraph: function(r) {
    return r.ref.or(r.word)
      .many().skip(P.newline)
      .map(x => new ParagraphElement(x));
  },
  li: function(r) {
    return r.word
      .wrap(P.string('- '), P.end)
      .map(x => new LiElement(x));
  },
  expression: function(r) {
    return P.alt(r.li, r.paragraph, P.newline).many()
  }
});

export function parse(input) {
  counter = 0;
  return IxParser.expression.parse(input + '\n');
}