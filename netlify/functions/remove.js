const fetch = require('node-fetch')

exports.handler = async function remove() {
    const checkboxes = document.querySelectorAll('.checkbox:checked');
    Array.prototype.forEach.call(checkboxes, function (checkbox) {
      console.log(checkboxes);
      console.log(checkbox.closest)
      checkbox.closest('label').remove();
    });
  }