
const textarea_code = document.querySelector( '#code' );
const textarea_output = document.querySelector( '#output' );

const calc_button = document.querySelector( '#calc_button' );
calc_button.addEventListener( 'click', onClickCalcButton );

function onClickCalcButton()
  {
  const predef = "e=Math.E;pi=Math.PI;function abs(x){return(Math.abs(x))};function ceil(x){return(Math.ceil(x))};function floor(x){return(Math.floor(x))};function round(x){return(Math.round(x))};function sign(x){return(Math.sign(x))};function pow(x,y){return(Math.pow(x,y))};function sqrt(x){return(Math.sqrt(x))};function cbrt(x){return(Math.cbrt(x))};function exp(x){return(Math.exp(x))};function log(x){return(Math.log(x))};function log10(x){return(Math.log10(x))};function sin(x){return(Math.sin(x))};function cos(x){return(Math.cos(x))};function tan(x){return(Math.tan(x))};function atan2(y,x){return(Math.atan2(y,x))};function asin(x){return(Math.asin(x))};function acos(x){return(Math.acos(x))};function atan(x){return(Math.atan(x))};function sinh(x){return(Math.sinh(x))};function cosh(x){return(Math.cosh(x))};function tanh(x){return(Math.tanh(x))};function asinh(x){return(Math.asinh(x))};function acosh(x){return(Math.acosh(x))};function atanh(x){return(Math.atanh(x))};function random(){return(Math.random())};";
  const code = predef + textarea_code.value;
  const result = eval( code );
  textarea_output.textContent = result;
  }



