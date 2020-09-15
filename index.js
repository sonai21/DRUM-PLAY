var numberOfDrum = document.querySelectorAll(".drum").length;

for(var i = 0; i< numberOfDrum; i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click", function (){
    var buttonInerHTML = this.innerHTML;
    makeSound(buttonInerHTML);
    buttonAnime(buttonInerHTML);
  });
}

document.addEventListener("keypress", function(event){
  makeSound(event.key);
  buttonAnime(event.key);
});
function makeSound(letter){
  switch(letter){
    case "w":
      var audio = new Audio('sounds/tom-1.mp3');
      audio.play();
    break;

    case "a":
      var audio = new Audio('sounds/tom-2.mp3');
      audio.play();
    break;

    case "s":
      var audio = new Audio('sounds/tom-3.mp3');
      audio.play();
    break;

    case "d":
      var audio = new Audio('sounds/tom-4.mp3');
      audio.play();
    break;

    case "j":
      var audio = new Audio('sounds/crash.mp3');
      audio.play();
    break;

    case "k":
      var audio = new Audio('sounds/kick-bass.mp3');
      audio.play();
    break;

    case "l":
      var audio = new Audio('sounds/snare.mp3');
      audio.play();
    break;

    default: console.log("letter");
  }
}

function buttonAnime(key)
{
  var activeKey = document.querySelector("." + key);
  activeKey.classList.add("pressed");
  setTimeout(function(){
    activeKey.classList.remove("pressed")
  }, 100);
}
