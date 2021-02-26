// This function returns the maximum of three inputed numbers
function maxNum(num_1,num_2,num_3){
    if(num_1 > num_2 && num_1 > num_3){
        console.log(num_1);
    }else if(num_2 > num_1 && num_2 > num_3){
        console.log(num_2);
    }else{
        console.log(num_3);
    }
}
// Testing Code
maxNum(4,7,2)