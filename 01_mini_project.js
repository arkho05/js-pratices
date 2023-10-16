/* make a rectangle and when we move mouse on the rectangle on
the left side we want to gradually6 change the color of that 
rectangle to red and when we move mouse to the right side we want to change 
the color to blue */

var rect = document.querySelector("#center");//dom


rect.addEventListener("mousemove", function(box){
    var rectanglelocation =rect.getBoundingClientRect();
    var insiderectval = box.clientX - rectanglelocation.left;
    
    // if(insiderectval < rectanglelocation.width/2){
    //     console.log("left");
    // }
    // else {
    //     console.log("right");
    // }  // 2nd answer


    // 3rd Qustion

    if (insiderectval < rectanglelocation.width/2){

    } else{
         
    }


});


// console.log(gsap.utils.mapRange(0, 250, 255, 0, 23));


var mapper=(gsap.utils.mapRange(0, 250, 255, 0,));

console.log(mapper(23));



















 

 
