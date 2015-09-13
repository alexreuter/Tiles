$(function(){
    
/*******************************************************************************************************
                                        CANVAS SETUP
*******************************************************************************************************/
    var c=document.getElementById("canvas");
    var ctx=c.getContext("2d");
/*******************************************************************************************************
                                        CANVAS RESIZE
*******************************************************************************************************/
    canvas.width = window.innerWidth-(window.innerHeight*0.03);
    canvas.height = window.innerHeight-(window.innerHeight*0.035);
/*******************************************************************************************************
                                    GAME VARIABLES
*******************************************************************************************************/
    var framerate = 30;

/*******************************************************************************************************
                                MAIN ANIMATION FUNCTION
*******************************************************************************************************/
    
    
    function main()
    {
        //CALL SPECIFIC ANIMATING FUNCTIONS HERE
        
        
        ctx.fillStyle = "black";
        ctx.fillRect(0,0,canvas.width,canvas.height);
        drawTiles();
    }
    
    setInterval(main,200);
    //1000/framerate
    
    function drawTiles()
    {
        var tiles = 200;
        var border = 0;
        var width = 0;
        var rows = 200;
        
        width = (canvas.width-(border*(tiles-1)))/tiles;
        height = (canvas.height-(border*rows-1))/rows;
        ctx.fillStyle = getRandomColor();
        
        for(x=0;x<rows;x++){
            for (i=0;i<tiles;i++)
            {    
                ctx.fillRect(0+(width*i)+(border*i),0,width,height);
                ctx.fillStyle = getRandomColor();
                ctx.fillRect(0+(width*i)+(border*i),0+(height*(x+1)) + (border*(x+1)),width,height);
            }
        }        
    }
    
    function getRandomColor() 
    {
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++ ) 
        {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    
    
    
//END OF WINDOW READY FUNCTION.
});