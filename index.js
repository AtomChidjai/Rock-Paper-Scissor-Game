const computer_choice_display = document.getElementById('Computer-Choice');
const player_choice_display = document.getElementById('Player-Choice');
const result_display = document.getElementById('Result');
const choice = document.querySelectorAll('button');

let user_choice;
let comp_choice;
let result_result;

choice.forEach(choice => choice.addEventListener('click',(user) => {
    user_choice = user.target.id;
    player_choice_display.innerHTML = user_choice;
    generateComputer();
    FinalResult();
}));

function generateComputer(){
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber === 1)
    {
        comp_choice = "Rock";
    }
    else if (randomNumber === 2)
    {
        comp_choice = "Paper";
    }
    else
    {
        comp_choice = "Scissor";
    }
    computer_choice_display.innerHTML = comp_choice;
}

function FinalResult(){
    if (comp_choice === user_choice)
    {
        result_result = "Its a Draw!!";
    }
    if (comp_choice === "Rock" && user_choice === "Paper")
    {
        result_result =  "You Win!!";
    }
    if (comp_choice === "Rock" && user_choice === "Scissor")
    {
        result_result =  "You Lose!!";
    }
    if (comp_choice === "Paper" && user_choice === "Rock")
    {
        result_result =  "You Lose!!";
    }
    if (comp_choice === "Paper" && user_choice === "Scissor")
    {
        result_result =  "You Win!!";
    }
    if (comp_choice === "Scissor" && user_choice === "Rock")
    {
        result_result =  "You Win!!";
    }
    if (comp_choice === "Scissor" && user_choice === "Paper")
    {
        result_result =  "You Lose!!";
    }
    result_display.innerHTML = result_result;
}
