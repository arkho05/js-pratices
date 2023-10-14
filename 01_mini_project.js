/* make a rectangle and when we move mouse on the rectangle on
the left side we want to gradually6 change the color of that 
rectangle to red and when we move mouse to the right side we want to change 
the color to blue */

var rect = document.querySelector("#center");//dom

rect.addEventListener("mousemove", function(box){
    var rectanglelocation =rect.getBoundingClientRect();
    var insiderectval = box.clientx - rectanglelocation.left;
    
    if(insiderectval<rectanglelocation.width/2){
        console.log("left");
    }
    else {
        console.log("right");
    }
})

 

 
