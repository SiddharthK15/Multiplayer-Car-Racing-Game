class Form {
    constructor(){
        this.input = createInput("Type your name here");
        this.button = createButton("Play");
        this.greeting = createElement("h2");
        this.reset = createButton("Reset Game");

    }
    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
    }
    display(){
        var title = createElement("h1");
        title.html("Multiplayer Car Racing Game")
        title.position(250,20)
        this.input.position(displayWidth/2, displayHeight/2 - 100);
        this.button.position(displayWidth/2, displayHeight/2- 30);

        this.reset.position(displayWidth/2 + 20, 30)


        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value()
            playercount = playercount + 1;
            player.index = playercount;
            player.updatecount(playercount);
            player.updatename();
            this.greeting.html("Hey " + player.name + "!");
            this.greeting.position(displayWidth/2, displayHeight/2 - 75)
        })
    

        this.reset.mousePressed(()=>{
            game.update(0);
            player.updatecount(0);
            Player.deleteplayer();
            
        })
        
    }
}

//.value = Takes the value