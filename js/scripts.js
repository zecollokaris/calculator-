//Business (or back-end) logic:

      var add = function(number1, number2) {
        return number1 + number2;
      };

     var subtract = function(number1, number2) {
       return number1 - number2;
     };

     var multiply = function(number1, number2) {
       return number1 * number2;
     };

     var divide = function(number1, number2) {
       return number1 / number2;
     };

     // Everything below this line is user interface (or front-end) logic:

      var number1 = parseInt(prompt("Enter a number:"));
      var number2 = parseInt(prompt("Enter another number:"));
      alert(add(number1, number2));
