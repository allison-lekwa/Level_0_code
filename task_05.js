function areaOfTriangle(side_1, side_2, side_3){
    var s = 0.5*(side_1 + side_2 + side_3);
    var area = (s*(s-side_1)*(s-side_2)*(s-side_3))**0.5;
    console.log(area);
}

//Testing Code
areaOfTriangle(3,4,5)