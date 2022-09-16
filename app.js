// https://www.omnicalculator.com/conversion/quarts-to-pounds

const v =  document.getElementById('v');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const poundsRadio = document.getElementById('poundsRadio');
const quartsRadio = document.getElementById('quartsRadio');

let pounds;
let quarts = v; 

// labels of the inpust
const variable = document.getElementById('variable');

poundsRadio.addEventListener('click', function() {
  variable.textContent = 'Quarts';
  quarts = v;
  result.textContent = '';
});

quartsRadio.addEventListener('click', function() {
  variable.textContent = 'Pounds';
  pounds = v;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(poundsRadio.checked)
    result.textContent = `Pounds = ${computepounds().toFixed(5)}`;

  else if(quartsRadio.checked)
    result.textContent = `Quarts = ${computequarts().toFixed(5)}`;
})

// calculation

function computepounds() {
  return Number(quarts.value) * 2.086351;
}

function computequarts() {
  return Number(pounds.value) / 2.086351;
}