let calculation = localStorage.getItem('calculation') ||'';

      let inputElement = document.querySelector('.js-result-block');

      inputElement.innerHTML = calculation;

      function updateCalculation(value)
      {
        calculation += value;
        // console.log(calculation);
        inputElement.innerHTML = calculation;
        saveCalculation();
      }

      function saveCalculation()
      {
        localStorage.setItem('calculation',calculation);
      }