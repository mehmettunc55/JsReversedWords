// const input = document.getElementById('input-string')
//const input = document.querySelector('.display')
//const input = document.querySelector('p')

function reversedString(string){
    
    console.log('Entered Word: ', string);

    var splitString = string.split(" ")
     
    var reverseArray = splitString.reverse(); 
    
    var joinArray = reverseArray.join(" ");   
    
    document.querySelector('#display-string').innerText = joinArray;
}
     


const input = document.querySelector('#input-string');
const button = document.querySelector('#submit-button');

button.addEventListener('click', button => {
    reversedString(input.value)
});