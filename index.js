function play(str) {
    console.log(str, " <= The string passed in")
   let displayField = document.getElementById('display')
   
    if (str === "q" || str === "Q") {
        displayField.innerHTML = 'A Few good men; Answers';    
    } else if (str === "w" || str === "W") {
        displayField.innerHTML = 'The Shawshank Redemption; Busy'; 
    } else if (str === "e" || str === "E") {
        displayField.innerHTML = 'The Shawshank Redemption; Escaped'; 
    } else if (str === "a" || str === "A") {
        displayField.innerHTML = 'Forrest Gump; Gifted'; 
    } else if (str === "s" || str === "S") {
        displayField.innerHTML = 'Forrest Gump; Jesus'; 
    } else if (str === "d" || str === "D") {
        displayField.innerHTML = 'The God Father; Mogreen'; 
    } else if (str === "z" || str === "Z") {
        displayField.innerHTML = 'The Shawshank Redemption; Cheers'; 
    } else if (str === "x" || str === "X") {
        displayField.innerHTML = 'Fight Club; Rules'; 
    } else if (str === "c" || str === "C") {
        displayField.innerHTML = 'Forrest Gump; Run'; 
    } 


  var audio = document.getElementById(str);
  audio.play();
}


window.document.onkeyup = function(event) {
    let keystroke = event.key;
    if (keystroke === "q" || keystroke === "Q") {
        play("Q");
    } else if (keystroke === "w" || keystroke === "W") {
        play("W"); 
    } else if (keystroke === "e" || keystroke === "E") {
        play("E");
    } else if (keystroke === "a" || keystroke === "A") {
        play("A");
    } else if (keystroke === "s" || keystroke === "S") {
        play("S");
    } else if (keystroke === "d" || keystroke === "D") {
        play("D");
    } else if (keystroke === "z" || keystroke === "Z") {
        play("Z");
    } else if (keystroke === "x" || keystroke === "X") {
        play("X");
    } else if (keystroke === "c" || keystroke === "C") {
        play("C");
    }
}
