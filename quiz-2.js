var readlineSync = require("readline-sync");

var score = 0;
function play(question, answer){
  var theUser = readlineSync.question(question);

  if(answer.toUpperCase() === theUser.toUpperCase()){
    console.log("Correct Answer!")
    score++;
  }else{
    console.log("Incorrect Answer!")
    score--;
   
  }
  console.log("Your current score = "+score);
  console.log("The correct answer is : " + answer)
}

var marvelquestion = [{
                        question : " What is the name of the metal that makes up Wolverines indestructible claws ? " ,
                        answer :  "Adamantium"
                      },
                      {
                        question : "What is the name of the dimension where Doctor Strange gains most of his mystical knowledge and training? ",
                        answer : "Kamar Taj"
                      },
                      {
                        question : "Which Avenger is a skilled archer and goes by the name Hawkeye? ",
                        answer : "Clint Barton"
                      },{
                        question : "Who is the Norse god of mischief and Thor's adopted brother? ",
                        answer : "Loki"
                      },{
                        question : "What is the name of the powerful energy source that Tony Stark's arc reactor technology is based on? ",
                        answer : "Palladium"
                      },{
                        question : "Which powerful artifact was used to create Vision in the Marvel Cinematic Universe? ",
                        answer : " Mind Stone"
                      },{
                        question : "What is the real name of the supervillain known as the Green Goblin? ",
                        answer : "Norman Osborn"
                      },
                      {
                        question : "What is the name of the alien symbiote that originally bonded with Spider-Man before becoming Venom? ",
                        answer : "Venom"
                      },
                      {
                        question : "What is the name of Thor's enchanted hammer? ",
                        answer : "Mjolnir"
                      },
                      {
                        question : "Which superhero possesses incredible superhuman strength and the ability to shrink and grow in size? ",
                        answer : "Ant man"
                      },{
                        question : "What is the name of the powerful alien artifact that the Avengers must protect from Loki in the first Avengers movie? ",
                        answer : "Tesseract"
                      }]

var highScore = [{
                      name : "Sagar",
                      score : "10"
},
                 {
                      name : "lav",
                      score : "9",
                 }]

var thePlayer = readlineSync.question("Please enter your name :");
console.log("Welcome "+ thePlayer.toUpperCase() + " to the Marvel quiz!");
console.log("+++++++++++++++++++++++++++++++++++++++++++")
for(var i = 0; i<marvelquestion.length; i++){
 var currentvalue = marvelquestion[i];
  play(currentvalue.question, currentvalue.answer);
  console.log("------------------------------------------------------------------------")
}
console.log("\n")
console.log("Score Board")
console.log("------------------------------------")
for (var i = 0; i<highScore.length ; i++){
  
  var currentScore = highScore[i];
  console.log("name : " + currentScore.name);
  console.log("Score : " + currentScore.score);
  console.log("----------------------------------")
}

console.log("If you have beaten the current score please ping me with the screenshot i'll update your put your name on score board ")