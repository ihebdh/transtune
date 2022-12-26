
const resetButton = document.querySelector('.reset-button');
//empty all the fields wheb the reset button is clicked
resetButton.addEventListener('click', () => {
  const inputFields = document.querySelectorAll('input');
  inputFields.forEach(input => {
  input.value = '';
  // hide the seny message
  const message = document.querySelector('#message');
  message.innerHTML = '';
});
});



const form = document.getElementById('form');
form.addEventListener('submit', event => {
  // check for empty fields
  const name = document.querySelector('#name').value;
  const link = document.querySelector('#link').value;
  const traject = document.querySelector('#traject').value;
  if (!name || !link || !traject) {
    event.preventDefault();
    const errorMessage = document.getElementById('message');
    errorMessage.innerHTML = localStorage.getItem("language") == "ar" ?   'يرجى تعبئة جميع الحقول' :'Please fill in all fields';
    errorMessage.style.color = "red";
   
  }else {
    setTimeout(function() {
      // code to be executed after 2 seconds
      const message = document.querySelector('#message');
      message.innerHTML = localStorage.getItem("language") == "ar" ?'تم إرسال!' : 'sent!' ;
    }, 500);
    
  }

  
// display sent message when the data was delvered to the file


});
