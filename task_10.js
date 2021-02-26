// THe function outputs all the vowels in a string
function vowel(firstWord, secondWord){
    var firstWordList = firstWord.toLowerCase().split('');
    var secondWordList = secondWord.toLowerCase().split('');
    var container = [];

    //This code snipets searches for possible vowel letters
    for(var i = 0; i < firstWordList.length; i++){
        for(var j = 0; j < secondWordList.length; j++){
            if(secondWordList[j] == firstWordList[i]){
                if(!container.includes(firstWordList[i])){
                    container.push(firstWordList[i]);
                }
            }
        }
            
    }
    //This code snipets determines what to output
    if(container.length != 0){
        for(var i = 0; i< container.length; i++){
            console.log(container[i])
        }
    }else{
        console.log("The word does not contain a vowel");
    }

}

//Testing Code
vowel("hippopotamus", "tigress");