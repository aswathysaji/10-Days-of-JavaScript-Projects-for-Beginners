//Get the input value
function getInput(){
  return document.getElementById('input-value').innerText;
}

//Print input value
function printInput(num){
  document.getElementById('input-value').innerText = num;
}

//Get the output value
function getOutput(){
  return document.getElementById('output-value').innerText;
}

//Print the output value
function printOutput(num){
  if(num==""){
    document.getElementById('output-value').innerText=num;
  }
  else{
    document.getElementById('output-value').innerText = getFormattedNumber(num);
  }
}

//Function to display number with commas
function getFormattedNumber(num){
  if(num=="-"){
    return "";
  }
  let n = Number(num);
  let value = n.toLocaleString("en");
  return value;
}


//function to dislay number without commas

function reverseNumberFormat(num){
  return Number(num.replace(/,/g,''));
}

//get all operators
let operators = document.getElementsByClassName('operator');


for(let i=0;i<operators.length;i++){
  operators[i].addEventListener('click',function(){
    if(this.id=='clear'){
      printInput("");
      printOutput("");
    }
    else if(this.id=="backspace"){
      let output = reverseNumberFormat(getOutput()).toString();
      if(output){ //if output has a value
        output = output.substr(0,output.length-1);
        printOutput(output);
      }
    }
    else{
      let input = getInput();
      let output = getOutput();
      if(output=="" && input!=""){
        if(isNaN(input[input.length-1])){
          input = input.substr(0,input.length-1);
        }
      }
      if(output!="" || input!=""){
        output = output==""?
        output:reverseNumberFormat(output);
        input = input+output;
        if(this.id=="="){
          let result = eval(input);
          printOutput(result);
          printInput("");
        }
        else{
          input = input+this.id;
          printInput(input);
          printOutput("");
        }
      }
    }
  });
}

//get all numbers

let numbers = document.getElementsByClassName('number');
console.log(numbers);

for(let i=0;i<numbers.length;i++){
  numbers[i].addEventListener('click',function(){
    let output = reverseNumberFormat(getOutput());
    if(output!=NaN){ //if output is a number
      output = output+this.id;
      printOutput(output);
    }
  });
}

