const fetch = require('node-fetch')

exports.handler = async function add() {
    var myDiv = document.getElementById("myDiv");
    var inputValue = document.getElementById("myInput").value;
    var checkbox = document.createElement('input');
    if (inputValue === '') {
      alert("Cannot be Empty!");
      return;
    } else {
      var person = arr.push(prompt('Enter monthly subscription cost'));
      const nuevo = arr.map((i) => Number(i));
      const sum = nuevo.reduce((a, b) => a + b);
      // alert('Monthly total: ' + sum); 
      if (person != null) {
        // document.getElementById("demo").innerHTML =
        // "$" + nuevo + " for " + inputValue;
        setTimeout(function () {
          document.getElementById("demo").innerHTML = '';
        }, 1500);
        document.getElementById("subsCost").innerHTML = "$" + sum;
      }
      document.getElementById("myUL").appendChild(checkbox);
    }
    console.log(arr);
    // Assigning the attributes to created checkbox 
    checkbox.type = "checkbox";
    checkbox.name = "name";
    checkbox.value = "value";
    checkbox.classList.add("checkbox");
    // create label for checkbox 
    var label = document.createElement('label');
    console.log(checkbox.classList);
    // appending the checkbox and created text to the created label tag   
    label.appendChild(checkbox);
    label.appendChild(document.createTextNode(inputValue));
    // appending label to div
    myDiv.appendChild(label);
    return arr;
  }