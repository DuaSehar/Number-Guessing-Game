import inquirer from 'inquirer'
type  anstype = {
  guess :number}

const systemgeneratednumber=Math.floor(Math.random()*100)
async function startgame() {
  console.log("Welcome to my Game ");
  console.log("Guess a number between 1 and 100");
  await numbrguess()
}

 async function numbrguess() {
   
let answers:anstype = await inquirer.prompt([

    {
        type:"number",
        name:"guess",
        message:"Enter you number"

    },
    
  ]);
  checkGuess()
function checkGuess () {
 const  guess= answers.guess;
if(guess === systemgeneratednumber) {
  console.log("Congrats! You guessed the corrrect number");}
 else if(guess < systemgeneratednumber) {
    console.log("Too low! Try a high Number");}
 else  if(guess > systemgeneratednumber) {
      console.log("Too High! Try a low Number");
    }
  else{
    console.log("Invalid Number");
    
  }
  }
  async function playagain() {
   const response =await inquirer.prompt({
  type : 'number',
  name : 'startagain',
  message : 'Do you want to play again?'
   })
    if (response.startagain){
      startgame()
      
    }
    else
    {
      console.log("Thanks for playing");
      
    }
   
  }    }

startgame()

