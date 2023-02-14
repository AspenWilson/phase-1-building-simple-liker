// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const hearts = document.getElementsByClassName('like-glyph');
//encompasses all the hearts on the page

// Your JavaScript code goes here!
document.addEventListener('DOMContentLoaded',() => {
  function userClick(e) {
    const heart=e.target;
    mimicServerCall()
      .then(function(msg) {
       if (heart.innerText === EMPTY_HEART){
       heart.innerText = FULL_HEART;
       heart.classList.add('activated-heart');
      } 
        else if (heart.innerText === FULL_HEART) {
        heart.innerText = EMPTY_HEART;
        heart.classList.remove('activated-heart');
        }
      })
     .catch(function(error) {
        const errMsg = document.getElementById('modal')
      //grabs the modal with the error
        errMsg.removeAttribute('hidden')
//removes the 'hidden' attribute
        setTimeout(() => {
          const errMsg = document.getElementById('modal')
          console.log(errMsg)
          errMsg.className = 'hidden'}, 3000)
    })
  }
  for (let i=0; i< hearts.length; i++){
   hearts[i].addEventListener("click", userClick)
  }
})



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
