const form = document.querySelector('form');

form.addEventListener('submit', function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');

    if(height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = `Please Enter a Valid Height ${height}`;
    } else if(weight === '' || height < 0 || isNaN(weight)) {
        result.innerHTML = `Please Enter a Valid Height ${weight}`;
    }else {
       const bmi = (weight / ((height*height)/1000)).toFixed(1)

       result.innerHTML = `<span>${bmi}</span>`;

       if(bmi === bmi > 0 || bmi <= 18.6){
        resulttext.innerHTML = `${bmi} is Under Weight`;
    }else if(bmi === bmi >= 18.7 || bmi <= 24.9){
        resulttext.innerHTML = `${bmi} is Normal Range`;
    }else if(bmi === bmi >= 24.9){
        resulttext.innerHTML = `${bmi} is Overweight`;
    }
    }

   
});