document.addEventListener('DOMContentLoaded', function () {
    // Counter element and buttons
    const counterElement = document.getElementById('counter');
    const likeList = document.querySelector('.likes');
    const commentList = document.getElementById('list');
    const commentInput = document.getElementById('comment-input');
    const submitButton = document.getElementById('submit');
    const pauseButton = document.getElementById('pause');
    const plusButton = document.getElementById('plus');
    const minusButton = document.getElementById('minus');
    const heartButton = document.getElementById('heart');
    const restartButton = document.getElementById('restart');
  
    // Counter value and pause state
    let counterValue = 0;
    let isPaused = false;
  
    // Function to update the counter display
    function updateCounter() {
      counterElement.innerText = counterValue;
    }
  
    // Function to increment the counter every second
    function incrementCounter() {
      if (!isPaused) {
        counterValue++;
        updateCounter();
      }
    }
  
    // Functions to disable and enable buttons
    function disableButtons() {
      plusButton.disabled = true;
      minusButton.disabled = true;
      heartButton.disabled = true;
      submitButton.disabled = true;
    }
  
    function enableButtons() {
      plusButton.disabled = false;
      minusButton.disabled = false;
      heartButton.disabled = false;
      submitButton.disabled = false;
    }
  
    // Function to toggle pause and update button text
    function togglePause() {
      isPaused = !isPaused;
      if (isPaused) {
        disableButtons();
        pauseButton.innerText = 'Resume';
      } else {
        enableButtons();
        pauseButton.innerText = 'Pause';
      }
    }
  
    // Function to restart the counter
    function restartCounter() {
      counterValue = 0;
      updateCounter();
    }
  
    // Function to add a comment to the list
    function addComment() {
      const commentText = commentInput.value;
      if (commentText.trim() !== '') {
        const commentItem = document.createElement('div');
        commentItem.innerText = commentText;
        commentList.appendChild(commentItem);
        commentInput.value = ''; // Clear the input field after adding a comment
      }
    }
  
    // Event listeners for button clicks
    plusButton.addEventListener('click', function () {
      incrementCounter();
    });
  
    minusButton.addEventListener('click', function () {
      counterValue--;
      updateCounter();
    });
  
    heartButton.addEventListener('click', function () {
      const likeItem = document.createElement('li');
      likeItem.innerText = `Liked ${counterValue} ❤️`;
      likeList.appendChild(likeItem);
    });
  
    pauseButton.addEventListener('click', function () {
      togglePause();
    });
  
    submitButton.addEventListener('click', function (event) {
      event.preventDefault(); // Prevent form submission and page reload
      addComment();
    });
  
    restartButton.addEventListener('click', function () {
      enableButtons();
      isPaused = false;
      pauseButton.innerText = 'Pause';
      restartCounter();
    });
  
    // Initial setup: Increment counter every second
    setInterval(incrementCounter, 1000);
});
  
  