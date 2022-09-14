 var last_position_of_x, last_position_of_y;
 var  canvas = document.getElementById('myCanvas');
 var  ctx = canvas.getContext("2d");   
 var   color = "black";
 var   width_of_line = 2;

    var width = screen.width;
    var new_width = screen.width - 70;
    var new_height = screen.height - 300;

    var new_width2 = canvas.width - 140;
    var new_height2 = canvas.height - 200;

    if (width < 992) 
    {
        document.getElementById("myCanvas").width = new_width;
        document.getElementById("myCanvas").height = new_height;
        document.body.style.overflow = "hidden";
    }

    if (width > 992) 
    {
        document.getElementById("myCanvas").width = new_width2;
        document.getElementById("myCanvas").height = new_height2;
        document.body.style.overflow = "hidden";
    }
    canvas.addEventListener("touchstart", my_touchstart);


    function my_touchstart(e)
    {
        
        console.log("touch started");
        last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
        last_position_of_y = e.touches[0].clientY - canvas.offsetTop;
    }


    canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e)
    {

         current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
         current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_touch_x + "y = " + current_position_of_touch_y);
        ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
        ctx.stroke();

        last_position_of_x = current_position_of_touch_x; 
        last_position_of_y = current_position_of_touch_y;
    }

    canvas.addEventListener("mousedown", myMousedown);

function myMousedown(e) 
{

    events = "mouseDown";
}

canvas.addEventListener("mousemove", myMousemove);

function myMousemove(e) 
{
 currentx = e.clientX-canvas.offsetLeft;
 currenty = e.clientY-canvas.offsetTop;
 
 if (events == "mouseDown") 
 {
    color = document.getElementById("color").value; width_of_line = document.getElementById("width_of_line").value;
      ctx.beginPath();        ;oç,
     ctx.strokeStyle = color;
     ctx.lineWidth = width_of_line;
     console.log("last postitions of X and Y: " + "X = "+ lastpos_x + "Y = "+ lastpos_y);
     ctx.moveTo(lastpos_x, lastpos_y);

     console.log("current postitions of X and Y: " + "X = "+ currentx + "Y = "+ currenty);
     ctx.moveTo(lastpos_x, lastpos_y);
     ctx.lineTo(currentx, currenty);
     ctx.stroke();
 }

 lastpos_x = currentx;
 lastpos_y = currenty
}

canvas.addEventListener("mouseleave", myMouseleave);
function myMouseleave(e) 
{
    events = "mouseleave";
}

canvas.addEventListener("mouseup", myMouseup);
function myMouseup(e) 
{
    events = "mouseup";
}

    function cleararea() 
    {
        ctx.clearRect(0, 0, canvas.width, canvas.height);  
    }
    
//Addictonal Activity start
        
        //Addictonal Activity ends
