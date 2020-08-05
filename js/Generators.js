/**
|--------------------------------------------------
| Generators
|--------------------------------------------------
*/

function* add() {
  const x = yield "Value of x";
  const y = yield "Value of y";
  const z = yield "Value of z";

  return console.log("sum = ", x + y + z);
}

const sum = new add();

sum.next(10);
sum.next(10);
sum.next(10);
