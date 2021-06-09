class Quiz {
  constructor(){
    this.heading= createElement('h1')
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
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements

    //write code to change the background color here
    background("yellow")

    //write code to show a heading for showing the result of Quiz
    this.heading.html("Results Of The Quiz")
    this.heading.position(350,0)
    //call getContestantInfo( ) here
    Contestant.getPlayerInfo()

    //write condition to check if contestantInfor is not undefined
    if(allContestants !== undefined){
      fill ("blue")
      textSize(20)
      text("*NOTE:Contestant who answered the question correct are highlighted Green color!",80,230)
                                                                                                       
                                                                                                       
   

    //write code to highlight contest who answered correctly
    var disposition=250
  for(var plr in allContestants){
    disposition+=50
    if(allContestants[plr].answer==="2"){
    fill("green")
    }else{
    fill("red")
    }
text(allContestants[plr].name+" : "+allContestants[plr].answer,130,disposition)
    
  }
    
  }
  }
  }
