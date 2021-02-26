//The function takes in an input integer
// and converts it into hours and minutes
function convertHourandMinute(number){
    var hour = (number/60 | 0);
    var minute = number%60;
    if(hour == 1 && minute == 1){
        console.log(hour + " hour, " + minute + " minute")
    }else if(hour == 1 && minute > 1){
        console.log(hour + " hour, " + minute + " minutes")
    }else if(hour > 1 && minute == 1){
        console.log(hour + " hours, " + minute + " minute")
    }else{
        console.log(hour + " hours, " + minute + " minutes")
    }
    
}

//Testing Code
convertHourandMinute(133);
convertHourandMinute(61);
convertHourandMinute(83);
convertHourandMinute(121);