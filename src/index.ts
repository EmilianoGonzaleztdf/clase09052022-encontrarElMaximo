let numImput: number = Number(prompt("ingrese un numero"));
let mayor = numImput;
while (numImput != 0) {
  numImput = Number(prompt("ingrese un numero"));
  if (mayor < numImput) {
    mayor = numImput;
  }
}
console.log("el numero mayor es:" + mayor);
