const result = document.getElementById("result");
const regex = /^[a-z0-9]*$/;

const checker = () => {
  const word = document.getElementById("text-input").value;
  if (word.length === 0){
    alert("Please input a value");
  } else {
    const letters = word.split("");
    console.log(letters);
    let filteredLetters = new Array();
    let reversedLetters = new Array();
    for (let i = 0; i < letters.length; i++){
      if(regex.test(letters[i].toLowerCase())){
        filteredLetters.push(letters[i].toLowerCase());
      }
    }
    for (let i = (filteredLetters.length - 1); i >= 0; i--){
      reversedLetters.push(filteredLetters[i]);
    }
    console.log(filteredLetters);
    console.log(reversedLetters);
    let check = true;
    for (let i = 0; i < filteredLetters.length; i++){
      if(filteredLetters[i] !== reversedLetters[i]){
        check = !check;
        break;
      }
    }
    if(check){
      result.innerText = word + " is a palindrome";
    } else {
      result.innerText = word + " is not a palindrome";
    }
  }
}

document.getElementById("check-btn").addEventListener("click", checker);