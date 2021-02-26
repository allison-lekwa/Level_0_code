// This function returns the maximum of three inputed numbers
function maxNum(num_1,num_2,num_3, num_4){

    if(num_1 > num_2 && num_1 > num_3 && num_1 > num_4){
        console.log(num_1);
    }else if(num_2 > num_1 && num_2 > num_3 && num_2 > num_4){
        console.log(num_2);
    }else if(num_3 > num_1 && num_3 > num_2 && num_3 > num_4){
        console.log(num_3);
    }
    else{
        console.log(num_4);
    }
}
// Testing Code
maxNum(4,7,2,12)