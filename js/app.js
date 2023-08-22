// tasks
//Show Operations(1/2/3/4)
//1.add
//2.Subtract
//3.Multiply
//4.Division
//Select Operations

//Request Num 1 & 2
//run
//output

const operations = document.getElementById("operations");
const fstNum = document.getElementById("fstNum");
const scNum = document.getElementById("scNum");
const btn = document.getElementById("btn");
const result = document.getElementById("result");


var x = document.getElementById("operations").selectedIndex;
var y = document.getElementById("operations").options;
const valueOp = y[x].value;

console.log(valueOp);
console.log(valueOp);

const add = (fn, sn) => {
  return fn + sn;
};

const addOp = () => {
  addTotal = add(fstNum.valueAsNumber, scNum.valueAsNumber);
  result.innerText = `${addTotal}`;
};

const subtract = (fn, sn) => {
  return fn - sn;
};

const subtractOp = () => {
  subTotal = subtract(fstNum.valueAsNumber, scNum.valueAsNumber);
  result.innerText = `${subTotal}`;
};

const multiply = (fn, sn) => {
  return fn * sn;
};
const multiplyOp = () => {
  multiTotal = multiply(fstNum.valueAsNumber, scNum.valueAsNumber);
  result.innerText = `${multiTotal}`;
};

const division = (fn, sn) => {
  return fn % sn;
};
const divisionOp = () => {
  visionTotal = division(fstNum.valueAsNumber, scNum.valueAsNumber);
  result.innerText = `${visionTotal}`;
};

if (valueOp === 1) {
  btn.addEventListener("click", addOp);
} else if (valueOp === 2) {
  btn.addEventListener("click", subtractOp);
} else if (valueOp === 3) {
  btn.addEventListener("click", multiplyOp);
} else if (valueOp === 4) {
  btn.addEventListener("click", divisionOp);
} else {
  result.innerText = null;
}
