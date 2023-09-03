const accordion = document.getElementsByClassName('content-container');
const answer = document.getElementsByClassName('answer');
const question = document.getElementsByClassName('question');
for(let i = 0; i < accordion.length; i++){
accordion[i].addEventListener('click', () => {
    answer[i].classList.toggle('active');
    question[i].classList.toggle('font-increase');
    question[i].classList.toggle('minus');
})}
