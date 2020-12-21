let display = document.getElementById("display");

function mas(elem){
  display.value = display.value + elem.value;
}

function res(){
  display.value = 0;
}

function calc(){
  display.value = eval(display.value);
  return;
}