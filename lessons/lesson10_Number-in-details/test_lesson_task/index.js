Number('34'); // 34
Number(null); // 0
Number(undefined); // NaN

Number.isNaN('text'); // false
Number.isNaN(NaN); // true

NaN == NaN; // false
NaN === NaN; // false

Number.isFinite('17'); // false
isFinite('17'); // true

Number.isInteger(17); // true
Number.isInteger(17.0); // true
Number.isInteger(17.17); // false
Number.isInteger('17'); // false
Number.isInteger(Infinity); //
Number.isInteger(NaN); //
Number.isInteger(undefined); //
Number.isInteger(null); //
