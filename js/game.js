class Game{
    constructor(){

    }
    getState(){
        var gamestateref = database.ref("Gamestate");
        gamestateref.on("value",function(data){
           gamestate = data.val()
        })
    }
    update(state){
        database.ref("/").update({
            Gamestate: state
        })
    }
    async start(){
        if(gamestate === 0){
            player = new Player();
            var playercntref = await database.ref("PlayerCount").once("value");
            if(playercntref.exists()){
                playercount = playercntref.val();
                player.getCount();

            }
            form = new Form();
           
            form.display(); 
        }
        car1 = createSprite(200,200);
        car1.addImage(car1img)
        car2 = createSprite(400,200); 
        car2.addImage(car2img)
        car3 = createSprite(600,200);
        car3.addImage(car3img)
        car4 = createSprite(800,200);
        car4.addImage(car4img)
        cararray = [car1,car2,car3,car4]
        
    }

    play(){
        form.hide();
        textSize(25);
        text("Game has begun! All the Best!!",150,150)
        Player.getplayerdata();
        player.getRank();
        if(playerdata !== undefined){
            background("#c68767")
            image(trackimg,0,-displayHeight*5,displayWidth, displayHeight*6) 
            var index = 0
            var x = 200
            var y;
          
            for(var car in playerdata){
                index = index+1;
                x = x+200
                y = displayHeight - playerdata[car].distance
                cararray[index-1].x = x;
                cararray[index-1].y = y;
                if(index === player.index){
                    stroke(15);
                    fill("blue");
                    ellipse(x,y,60,70)
                    cararray[index-1].shapeColor = "green";
                    camera.position.x = displayWidth/2;
                    camera.position.y = cararray[index-1].y


                }
             }
        }
        if(keyIsDown(UP_ARROW) && player.index !== null){
            player.distance = player.distance + 50;
            player.updatename();
        }

        if(player.distance>5000){
            gamestate = 2;
            player.rank = player.rank + 1
            Player.updateRank(player.rank);
            fill("white");
            textSize(25)
            text("Congratulations! Your rank is: " + player.rank,displayWidth/2-100, y-20)
        }




        drawSprites();
    }
    
    end(){
        console.log("Game has ended. I feel sorry for you.")
        console.log(player.rank)
    }
}