import { Streams, N, C, F } from '@masala/parser';

const blanks = () => C.char(' ').optrep();

function operator(symbol) {
  return blanks().drop()
    .then(C.char(symbol))
    .then(blanks().drop())
    .single()
    .map(x => `operator:${x}`);
}

function int() {
  return N.integer().map(x => `int:${x}`);
}

function sum() {
  return int()
    .then(operator('+'))
    .then(int());
}

function multiplication() {
  return int()
    .then(operator('*'))
    .then(int());
}

function combinator() {
  return F.try(sum())
    .or(multiplication());
}

export function parseOperation(line) {
  return combinator().parse(Streams.ofString(line));
}
