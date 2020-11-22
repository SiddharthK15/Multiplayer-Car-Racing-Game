class Player {
    constructor(){
        this.name = null;
        this.distance = 0;
        this.index = null;
        this.rank = null;

    }
    getCount(){
        var playercntref = database.ref("PlayerCount");
        playercntref.on("value", function(data){
            playercount = data.val();
        });

    }

updatecount(count){
    database.ref("/").update({
        PlayerCount:count
    })
}

updatename(){

var playerindex = "Players/Player" + this.index;
database.ref(playerindex).set({
    Name:this.name,
    distance:this.distance

})
}


getRank(){
    database.ref("Rank").on("value", (data) =>{
        this.rank = data.val()
    })
    
}

static updateRank(rank){
database.ref('/').update({
    Rank : rank
})
}

static getplayerdata(){
    var playerdataref = database.ref("Players");
    playerdataref.on("value", (data) => {
        playerdata = data.val()
    })
}

static deleteplayer(){
    
database.ref("/").update({
    Players:" "
})

    

    
}



}

// => arrow operator - takes the control back to the top of the class(line 3,4,5)