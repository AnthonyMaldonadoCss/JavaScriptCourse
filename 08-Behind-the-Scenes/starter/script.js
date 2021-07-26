'use strict';

function calcAge(birthyear) {
  const age = 2021 - birthyear;

  function printAnge() {
    let output = ` ${firstName} You are ${age}, born in ${birthyear}`;
    console.log(output);

    if (birthyear >= 1991 && birthyear <= 1996) {
      var millenial = true;

      const firstName = `Heczaid`;
      const str = `oh, and you're a milleniall, ${firstName}`;
      console.log(str);

      //Reassing outer scope's variable
      output = `New String`;

      function add(a, b) {
        return a + b;
      }
    }

    console.log(millenial);
    console.log(output);

    //not running whit use strict mode
    // console.log(add(2, 3));
  }

  printAnge();
  return age;
}

const firstName = 'Anthony';

calcAge(1995);
