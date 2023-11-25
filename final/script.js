// Event Listeners
document.getElementById('btsImage').addEventListener('click', function () {
    alert('Go listening "Best of me!') // Display alert on click

    // Play the BTS song
    playBtsSong();
});

document.getElementById('btsImage').addEventListener('mouseover', function () {
    this.style.transform = 'scale(1.2)'; // Zoom in on mouseover
});

document.addEventListener('keypress', function (event) {
    if (event.key === 'a' || event.key === 'A') {
        alert('You pressed the letter A!'); // Display alert on 'A' key press
    }
});

// Animation
function rotateImage() {
    var image = document.getElementById('btsImage');
    var currentRotation = 0;

    setInterval(function () {
        currentRotation += 10;
        image.style.transform = 'rotate(' + currentRotation + 'deg)';
    }, 100);
}

rotateImage(); // Start the rotation animation

// Sound
var audio;

function playBtsSong() {
    if (!audio) {
        audio = new Audio('sound/best-of-me.mp3');
    }

    audio.play(); // Play a BTS song
}


const btsImage1 = document.getElementById('btsImage1');

function displayCuteMessage() {
  const cuteMessages = [
    "RM:If you want to love others, then first you need to love yourself. ",
    "RM:Our biggest mistake is that we give up very quickly. Sometimes, in order to achieve what you want, you need to try not once, but over and over again.",
    "RM:The butterfly begins to develop already from the caterpillar. Anyone can succeed. Eventually, I will achieve my dream, even if by a miracle.",
    "Jin:To live without worries and surrounded by good people... Isn't that happiness?",
    "Jin:We didn't even know what was going on or what we were aiming for, but we kept moving forward.",
    "Suga:People get desperate because they don't see the future. They will be able to move forward if they see the light…",
    "Suga:We all look ugly in the morning",
    "Hope:I will work very hard so that you can confidently say: I am glad that I have become a BTS fan.",
    "Hope:I will become your hope.",
    "Jimin:Always go your own way, even if you only live for one day.",
    "Jimin:The stage is my world, capable of healing me.",
    "V:Forget that you were hurt, but never forget what it taught you.",
    "V:Don't fall into the trap of someone else's dream.",
    "JK:Life without passion is like death.",
    "JK:Effort creates you. You'll regret it someday if you don't do your best now.",
    
  ];
  const randomIndex = Math.floor(Math.random() * cuteMessages.length);
  alert(cuteMessages[randomIndex]);
}

function rotateImage1() {
  const currentRotation = parseInt(getComputedStyle(btsImage1).getPropertyValue('transform').split(',')[1]) || 0;
  const newRotation = currentRotation;
  btsImage1.style.transform = `rotate(${newRotation}deg)`;
}

function resetImage1() {
  btsImage1.style.transform = 'rotate(0deg)';
}

btsImage1.addEventListener('click', displayCuteMessage);
btsImage1.addEventListener('click', rotateImage1);
btsImage1.addEventListener('dblclick', resetImage1);

// Get the button element
const btsButton = document.getElementById('btsButton');

// Event listener for mouseover
btsButton.addEventListener('mouseover', function () {
  console.log('Hovered over the BTS button!');
});

// Event listener for mouseout
btsButton.addEventListener('mouseout', function () {
  console.log('Mouse out of the BTS button!');
});

// Event listener for click
btsButton.addEventListener('click', function () {
  alert('BTS is amazing! 🎉💜');
});

document.addEventListener('keypress', function(event) {
    // Get the pressed key as uppercase
    const keyPressed = String.fromCharCode(event.which).toUpperCase();
  
    // Check which key was pressed and change the background color accordingly
    switch(keyPressed) {
      case 'B':
        document.body.style.backgroundColor = '#ffcdd2'; // Red color
        break;
      case 'T':
        document.body.style.backgroundColor = '#e1bee7'; // Blue color
        break;
      case 'S':
        document.body.style.backgroundColor = '#f5f5f5'; // Yellow color
        break;
      default:
        // Do nothing for other keys
    }
  });
  document.addEventListener('keypress', function(event) {
    // Get the pressed key as uppercase
    const keyPressed = String.fromCharCode(event.which).toUpperCase();
  
    // Check which key was pressed and change the background color accordingly
    switch(keyPressed) {
      case 'B':
        document.body.style.backgroundColor = '#f8bbd0'; // Red color
        break;
      case 'T':
        document.body.style.backgroundColor = '#ffcdd2'; // Blue color
        break;
      case 'S':
        document.body.style.backgroundColor = 'rgb(244, 202, 255)'; // Yellow color
        break;
      default:
        // Do nothing for other keys
    }
  });
  
  document.getElementById('readMoreBtn').addEventListener('click', function() {
    const additionalText = document.getElementById('additionalText');
    additionalText.classList.toggle('hidden');
    this.textContent = additionalText.classList.contains('hidden') ? 'Read More' : 'Read Less';
  });
  function myFunction() {
    // Get the value of the input field with id="numb"
    let x = document.getElementById("numb").value;
    // If x is Not a Number or less than one or greater than 10
    let text;
    if (isNaN(x) || x < 1 || x > 10) {
      text = "Input not valid";
    } else {
      text = "Input OK";
    }
    document.getElementById("demo").innerHTML = text;
  }
  function submitQuiz() {

    var answers = document.forms["quiz-form"].elements;

    var correctAnswers = 0;
    for (var i = 0; i < answers.length; i++) {
        if (answers[i].type === 'radio' && answers[i].checked) {
            
            if (answers[i].name === 'q1' && answers[i].value === 'c1') {
                correctAnswers++;
            }

            if (answers[i].name === 'q2' && answers[i].value === 'a2') {
                correctAnswers++;
            }
            
            if (answers[i].name === 'q3' && answers[i].value === 'b3') {
                correctAnswers++;
            }
            if (answers[i].name === 'q4' && answers[i].value === 'b4') {
                correctAnswers++;
            }
            if (answers[i].name === 'q5' && answers[i].value === 'a5') {
                correctAnswers++;
            }
            if (answers[i].name === 'q6' && answers[i].value === 'c6') {
                correctAnswers++;
            }
            if (answers[i].name === 'q7' && answers[i].value === 'c7') {
                correctAnswers++;
            }
            if (answers[i].name === 'q8' && answers[i].value === 'b8') {
                correctAnswers++;
            }
        }
    }

    var resultContainer = document.getElementById('result-container');
    resultContainer.innerHTML = 'You answered ' + correctAnswers + ' out of 8 questions correctly';
}
