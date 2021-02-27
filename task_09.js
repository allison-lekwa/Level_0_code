// THe function outputs all the vowels in a string
function vowel(word){
    var wordList = word.split('');
    console.log(wordList);
    var vowelList = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    var container = [];

    //This code snipets searches for possible vowel letters
    for(var i = 0; i < vowelList.length; i++){
        for(var j = 0; j < wordList.length; j++){
            if(wordList[j] == vowelList[i]){
                if(!container.includes(vowelList[i])){
                    container.push(vowelList[i]);
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
vowel("hippOpotamus");