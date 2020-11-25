class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
     player1=createSprite(100,200);
     player1.addImage(p1);
     player1.scale=0.3
     player2=createSprite(300,200);
     player2.addImage(p2);
     player2.scale=0.3
     player3=createSprite(500,200);
     player3.addImage(p3);
     player3.scale=0.3
     player4=createSprite(700,200);
     player4.addImage(p4);
     player4.scale=0.3
     pr=[player1,player2,player3,player4]

     
  }

  play(){
    form.hide();

    Player.getPlayerInfo();
    player.getsurvivorsatend(); 
    if(allPlayers !== undefined){
      //var display_position = 100;
      background(bg);
     
      //index of the array
      var index = 0;

      //x and y position of the cars
      var x = 200;
      var y = 200

      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;

        if(keyDown(UP_ARROW)){
          pr[index-1].y=pr[index-1].y+10

        }
        if(keyDown(DOWN_ARROW)){
          pr[index-1].y=pr[index-1].y-10

        }
        if(keyDown(RIGHT_ARROW)){
          pr[index-1].x=pr[index-1].x+10

        }
        if(keyDown(LEFT_ARROW)){
          pr[index-1].x=pr[index-1].x-10

        }
        if (index === player.index){
          strokeWeight(10);
          stroke("red");
          fill("red");
          ellipse(x,y,60,60)
         
          camera.position.x = pr[index-1].x;
          camera.position.y = pr[index-1].y;
        }
       
        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }

    }

   

    //if(){
      //gameState=2
      //player.rank=player.rank+1;
      //Player.updatesurvivorssatend(player.rank)
    //}

    drawSprites();
  }
  end(){
    console.log("game has ended")
    console.log("rank:"+player.rank)
  }
}
