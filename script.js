// form Data

let userName = document.getElementById('userName');

let userEmail = document.getElementById('userEmail');

let userMessage = document.getElementById('userMessage');

let userBtn = document.getElementById('userBtn');

let text = document.getElementById('text');


userBtn.addEventListener('click' , function(){

    if(userName.value === "" | userEmail.value === "" | userMessage.value === "" ){

        text.innerText = 'Please Fill This Form Correctly!'
    }else{

       text.innerText = 'Successfully Submitted ✔'
    }
});


// form data end 

let img1 = document.querySelector('#img1');

img1.addEventListener('click' , function(){

window.location.href="https://abdulmajeed229.github.io/Honey-Website/"
})

let img2 = document.querySelector('#img2');


img2.addEventListener('click' , function(){

    window.location.href="https://abdulmajeed229.github.io/Gym-Landing-Page/"
});

let img3 = document.querySelector('#img3');



img3.addEventListener('click' , function(){

    window.location.href="https://abdulmajeed229.github.io/Solicitor-Website/"
});



let img4 = document.querySelector('#img4');



img4.addEventListener('click' , function(){

    window.location.href="https://abdulmajeed229.github.io/Spot-Finder-Clone/"
});



let sentence = document.getElementById('text');


const phrases = [
    "Web & App Developer" ,
    "Web Designer" ,
  ];

  // Element to display typing
  const typingTextElement = document.getElementById('text');

  // Function to simulate typing
  function typeText(index) {
    let currentPhrase = phrases[index % phrases.length];
    let charIndex = 0;

    const typingInterval = setInterval(() => {
      typingTextElement.textContent = currentPhrase.substring(0, charIndex) + '|';
      charIndex++;

      if (charIndex > currentPhrase.length) {
        clearInterval(typingInterval);

        // Delay before backspacing
        setTimeout(() => {
          backspaceText(currentPhrase.length);
        }, 1000); // Delay before backspacing
      }
    }, 100); // Typing speed
  }

  // Function to simulate backspacing
  function backspaceText(length) {
    let charIndex = length;

    const backspaceInterval = setInterval(() => {
      typingTextElement.textContent = typingTextElement.textContent.substring(0, charIndex) + '|';
      charIndex--;

      if (charIndex < 0) {
        clearInterval(backspaceInterval);

        // Delay before typing next phrase
        setTimeout(() => {
          typeText(Math.floor(Math.random() * phrases.length));
        }, 1000); // Delay before typing next phrase
      }
    }, 50); // Backspacing speed
  }

 
  typeText(0);
