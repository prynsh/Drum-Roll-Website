// document.querySelectorAll("button")[0].addEventListener("click",handle);
// document.querySelectorAll("button")[1].addEventListener("click",handle);
// document.querySelectorAll("button")[2].addEventListener("click",handle);
// document.querySelectorAll("button")[3].addEventListener("click",handle);
// document.querySelectorAll("button")[4].addEventListener("click",handle);
// document.querySelectorAll("button")[5].addEventListener("click",handle);
// document.querySelectorAll("button")[6].addEventListener("click",handle);
//instead of that write a for loop for it and run it till the end of the lenght of array





//for clicks
var number=document.querySelectorAll(".drum").length;
for(var i=0;i<number;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var inner=this.innerHTML;
        makeSound(inner);
        addAnimation(inner);
    });
}
//for key press
document.addEventListener("keypress",function(event){
    makeSound(event.key);
    addAnimation(event.key);
});
function makeSound(key){
    switch (key) {
        case "w":
            var crash = new Audio('./sounds/crash.mp3');
             crash.play();
            break;
        case "a":
            var kick_bass = new Audio('./sounds/kick-bass.mp3');
             kick_bass.play();
            break;
        case "s":
            var snare = new Audio('./sounds/snare.mp3');
             snare.play();
            break;
        case "d":
            var tom_1 = new Audio('./sounds/tom-1.mp3');
             tom_1.play();
            break;
        case "j":
            var tom_2 = new Audio('./sounds/tom-2.mp3');
             tom_2.play();
            break;
        case "k":
            var tom_3 = new Audio('./sounds/tom-3.mp3');
             tom_3.play();
            break;
        case "l":
            var tom_4 = new Audio('./sounds/tom-4.mp3');
             tom_4.play();
            break;
            
        default:
            console.log(key);
    }

}
function addAnimation(currentkey){
    var btn = document.querySelector("."+ currentkey);
    btn.classList.add("pressed");
    setTimeout(function(){
        btn.classList.remove("pressed")}, 100);
}