let userScore = 0 ;
let computerScore = 0 ;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreboard_div =document.querySelector(".scoreboard");
const result_P =document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice()
{
const choices = ['r','p','s'];
const randomNumber = Math.floor(Math.random()*3);
return choices[randomNumber];
}
function convert (letter)
{
  if (letter==="r")return "ROCK";
  if(letter==="p")return "PAPER";
  return "SCISSORS";

}
function win(userChoice,computerChoice)
{
userScore++ ;
userScore_span.innerHTML= userScore;
computerScore_span.innerHTML=computerScore;
const smalluser = "(USER)".fontsize(3).sub();
const smallcomp = "(COMP)".fontsize(3).sub();
const userChoice_div = document.getElementById(userChoice);

result_P.innerHTML = convert(userChoice)+smalluser+" BEATS "+ convert(computerChoice)+smallcomp + ". YOU WIN 😈🔥";
userChoice_div.classList.add('greenglow');
setTimeout(function(){userChoice_div.classList.remove('greenglow') },1000);
 }
function lose(userChoice,computerChoice)
{
  computerScore++ ;
  userScore_span.innerHTML= userScore;
  computerScore_span.innerHTML=computerScore;
  const smalluser = "(user)".fontsize(3).sub();
  const smallcomp = "(comp)".fontsize(3).sub();
const userChoice_div = document.getElementById(userChoice);
  result_P.innerHTML = convert(userChoice)+smalluser+" LOSES TO "+ convert(computerChoice)+smallcomp + ". YOU LOST 😭 ";
  userChoice_div.classList.add('redglow');
  setTimeout(function(){userChoice_div.classList.remove('redglow') },1000);
}
function draw(userChoice,computerChoice)
{

  const smalluser = "(user)".fontsize(3).sub();
  const smallcomp = "(comp)".fontsize(3).sub();
const userChoice_div = document.getElementById(userChoice);
  result_P.innerHTML = convert(userChoice)+smalluser+" EQUALS "+ convert(computerChoice)+smallcomp + ". DRAW 💣";
  userChoice_div.classList.add('greyglow');
  setTimeout(function(){userChoice_div.classList.remove('greyglow') },1000);
}
function game (userChoice)
{
const computerChoice = getComputerChoice();
switch(userChoice+computerChoice)
{
case "rs" :
case "pr" :
case "sp" :
win(userChoice,computerChoice);
  break ;
case "rp" :
case "ps" :
case "sr" :
lose(userChoice,computerChoice);
break ;
case "rr" :
case "pp" :
case "ss" :
draw(userChoice,computerChoice);
break ;
}

}

function main ()
{
  rock_div.addEventListener('click',function(){
  game ("r");

  })
  paper_div.addEventListener('click',function(){
  game ("p");
  })
  scissors_div.addEventListener('click',function(){
  game ("s");
  })
}
main();
