let cell_button = document.getElementById("cell_button");
let cell_div = document.getElementById("cell_div")

cell_button.onclick = () =>
{
  cell_button.textContent = "Sign up with your number instead";
  cell_button.id = "second_call";
  cell_div.style.width = "700px";

  //creating input for country code
  let cell_input_country = document.createElement("input");
  cell_input_country.id = "user_input_country";
  cell_input_country.placeholder = "+ 254";
  cell_input_country.type = "Number";
  cell_input_country.required;
  cell_div.appendChild(cell_input_country);

  //creating input for number
  let cell_input_number = document.createElement("input");
  cell_input_number.id = "user_input_number";
  cell_input_number.placeholder = "Enter your number";
  cell_input_number.required;
  cell_div.appendChild(cell_input_number);

  //creating continue button
  const continue_button = document.createElement("button");
  continue_button.id = "continue_button";
  continue_button.textContent = "Continue";
  cell_div.appendChild(continue_button);



 continue_button.onclick = ()=>
 {
   let number = cell_input_number.value;
  //  let country_code = cell_input_country.value;

  if(number == 0 || number == undefined)
  {
   cell_input_number.style.border ; "none";
   console.log("boo")
  }
  console.log("Hello")
 }
}