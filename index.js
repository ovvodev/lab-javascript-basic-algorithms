// Iteration 1: Names and Input
const hacker1 = "Konstantinos Papathanasiou";
console.log(`The driver's name is ${hacker1}.`);

const hacker2 = "Brendan Eich";
console.log(`The navigator's name is ${hacker2}.`);

// Iteration 2: Conditionals
const lengthOfDriver = hacker1.length;
const lengthOfNavigator = hacker2.length;

if (lengthOfDriver > lengthOfNavigator){
    console.log(`The driver has the longest name, it has ${lengthOfDriver} characters.`);
} else if (lengthOfNavigator > lengthOfDriver){
    console.log(`It seems that the navigator has the longest name, it has ${lengthOfNavigator} characters.`);
}else {
    console.log(`Wow, you both have equally long names, ${lengthOfDriver} characters!.`);
}

// Iteration 3: Loops

let newDriverStr = "";

for (let i = 0; i < hacker1.length; i++){
    newDriverStr += hacker1[i] + " ";
}

console.log(newDriverStr.toUpperCase());

let newNavigator = "";

for (let i = hacker2.length - 1; i >= 0; i--){
    newNavigator += hacker2[i];
}

console.log(newNavigator);

if (hacker1.localeCompare(hacker2) === -1){
 console.log("The driver's name goes first.");
} else if (hacker1.localeCompare(hacker2) === 1){
    console.log("Yo, the navigator goes first, definitely.");
}else{
    console.log("What?! You both have the same name?");
}


// Bonus 1

const longText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mattis hendrerit velit non blandit. Morbi odio massa, ullamcorper in orci id, mattis accumsan lorem. Donec quis nisi est. Phasellus posuere eros dui, nec varius elit dapibus non. Phasellus a rutrum nulla. Vestibulum laoreet euismod sapien in rutrum. Curabitur lobortis volutpat neque, id consequat magna aliquam eu.Sed pharetra dolor ut justo egestas, ac euismod magna lacinia. Duis finibus euismod ipsum, nec vestibulum tellus. Proin ut ullamcorper leo. Phasellus pellentesque est vitae pulvinar aliquet. Nam ornare venenatis purus, vel porttitor turpis sollicitudin vel. Integer non semper est. Aenean in hendrerit orci.In efficitur, eros ut pellentesque tempus, velit magna blandit elit, et fringilla dui turpis sit amet leo. Sed eu placerat turpis. Sed dictum pulvinar quam, id mollis lorem consequat at. Curabitur tristique blandit dui, rhoncus lobortis felis consectetur rhoncus. Praesent lobortis eu ante fermentum interdum. Nam at felis semper orci facilisis varius. In quis orci nec tellus ultrices lobortis eu a quam. Ut eu est at erat aliquet scelerisque. Morbi eget accumsan justo, quis fermentum mi. Vivamus in metus gravida, scelerisque odio a, pretium mauris. Morbi varius nunc orci, vitae condimentum nunc sodales vitae. Aenean ipsum justo, tempus a justo eget, egestas mollis nunc. Nulla facilisi. Nam aliquam erat sit amet urna eleifend tincidunt. Donec non hendrerit risus.';

let words = longText.split(" ");
    
console.log(words.length);

let wordEt = "et";
let countEt = 0;

for (let i = 0; i < words.length; i++){
    if (words[i] === wordEt) {
        countEt++
    }
}
 console.log(countEt);

 // Bonus 2

 const phraseToCheck = "Was it a car or a cat I saw?";
 
 