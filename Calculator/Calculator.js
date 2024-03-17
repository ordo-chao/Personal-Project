calculator = ''
// console.log(calculator)

function calculate(number)
{
  calculator += number;
  console.log(calculator)
  document.querySelector(".result-showing").innerHTML = calculator
}

function operation(operate)
{
  calculator += operate;
  console.log(calculator)
  document.querySelector(".result-showing").innerHTML = calculator
}

function evaluation()
{
  result = eval(calculator)
  console.log(result)
  document.querySelector(".result-showing").innerHTML = `${calculator} = ${result}`
  calculator = ''
}
