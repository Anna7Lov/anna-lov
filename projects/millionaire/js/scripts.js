'use strict';

const startContent = document.querySelector('.start-content');
const startButton = document.querySelector('.start-button');
const gameContent = document.querySelector('.game-content');
const question = document.querySelector('.question');
const answerOptions = document.querySelector('.answer-options');
const answerItem = document.querySelectorAll('.answer-options__item');
const levelItem = document.querySelectorAll('.level-list__item');
const fiftyFifty = document.querySelector('.fifty-fifty');
const callFriend = document.querySelector('.call-friend');
const friend = document.querySelector('.friend');
const friendAnswer = document.querySelector('.friend__answer');
const gameOver = document.querySelector('.game-over');
const gameOverText = document.querySelector('.game-over__text');
const buttonYes = document.querySelector('.game-over__button-yes');
const buttonNo = document.querySelector('.game-over__button-no');
let isFiftyFiftyApplied = false;
let isCallFriendApplied = false;
let level = 0;

startButton.addEventListener('click', handleStartButtonClick);
function handleStartButtonClick() {
    startContent.classList.add('closed');
    gameContent.classList.add('active-flex');
    generateQuestion(answerItem);
    renderLevel();
}

function generateQuestion(answerItem) {
    question.textContent = questions[level].question;
    for (let elem of answerItem) {
        elem.classList.remove('hidden');
    }
    const arr = questions[level].answer;
    for (let j = arr.length - 1; j > 0; j--) {
        let k = Math.floor(Math.random() * (j + 1));
        [arr[j], arr[k]] = [arr[k], arr[j]];
    }
    for (let i = 0; i < answerItem.length; i++) {
        answerItem[i].textContent = arr[i];
    }
}

function renderLevel() {
    if (level === 0) {
        levelItem[levelItem.length - 1 - level].classList.add('current');
    } else if (level < 15) {
        levelItem[levelItem.length - 1 - level].classList.add('current');
        levelItem[levelItem.length - 1 - level + 1].classList.add('passed');
    } else {
        levelItem[levelItem.length - 1 - level + 1].classList.add('passed');
    }
}

answerOptions.addEventListener('click', e => {
    const answer = e.target.closest('.answer-options__item');
    if (!answer) return;
    answerOptions.classList.add('disabled');
    fiftyFifty.classList.add('disabled');
    callFriend.classList.add('disabled');
    answer.classList.add('chosen');
    setTimeout(() => {
        answer.classList.remove('chosen');
        if (answer.textContent === questions[level].correct) {
            answer.classList.add('right');
            if (level === 14) {
                level++;
                renderLevel();
                setTimeout(() => showGameOver(), 1500);
            } else {
                setTimeout(() => {
                    answer.classList.remove('right');
                    answerOptions.classList.remove('disabled');
                    if (!isFiftyFiftyApplied) {
                        fiftyFifty.classList.remove('disabled');
                    }
                    if (!isCallFriendApplied) {
                        callFriend.classList.remove('disabled');
                    }
                    level++;
                    generateQuestion(answerItem);
                    renderLevel();
                }, 1000);
            }
        } else {
            answer.classList.add('wrong');
            for (let s = 0; s < answerItem.length; s++) {
                if (answerItem[s].textContent === questions[level].correct) {
                    answerItem[s].classList.add('right');
                }
            }
            setTimeout(() => showGameOver(), 1500);
        }
    }, 1000);
});

fiftyFifty.addEventListener('click', fiftyFiftyHelp);
function fiftyFiftyHelp() {
    isFiftyFiftyApplied = true;
    fiftyFifty.classList.add('disabled');
    callFriend.classList.add('disabled');
    const notCorrectAnswers = [];
    for (let l = 0; l < answerItem.length; l++) {
        if (answerItem[l].textContent !== questions[level].correct) {
            notCorrectAnswers.push(l);
        }
    }
    for (let m = 0; m < 2; m++) {
        const random = getRamdomNumber(notCorrectAnswers.length);
        const n = notCorrectAnswers[random];
        answerItem[n].classList.add('hidden');
        notCorrectAnswers.splice(random, 1);
    }
}

function getRamdomNumber(length) {
    return Math.floor(Math.random() * length);
}

callFriend.addEventListener('click', callFriendHelp);
function callFriendHelp() {
    isCallFriendApplied = true;
    callFriend.classList.add('disabled');
    fiftyFifty.classList.add('disabled');
    friend.classList.add('active');
    const friendAnswersArr = []; // will be an array with 2 correct answers and 1 incorrect. Random will choose one of them, which will be the result
    const notCorrectAnswers = [];
    for (let p = 0; p < answerItem.length; p++) {
        if (answerItem[p].textContent !== questions[level].correct) {
            notCorrectAnswers.push(p);
        } else {
            friendAnswersArr.push(p);
            friendAnswersArr.push(p);
        }
    }
    const q = notCorrectAnswers[getRamdomNumber(notCorrectAnswers.length)];
    friendAnswersArr.push(q);    
    const r = friendAnswersArr[getRamdomNumber(friendAnswersArr.length)];
    const result = answerItem[r].textContent;
    friendAnswer.textContent = `Привіт! Я вважаю вірна відповідь ${result}`;
    setTimeout(() => friend.classList.remove('active'), 3000);
}

function showGameOver() {
    gameContent.classList.add('closed');
    gameOver.classList.add('active');
    let prize;
    if (level <= 4) {
        prize = '0';
    } else if (level < 10) {
        prize = '1000';
    } else if (level < 15) {
        prize = '32 000';
    } else {
        prize = '1 000 000';
    }
    gameOverText.textContent = `Ваш виграш: ${prize}$`;
}

buttonYes.addEventListener('click', handleYes);
function handleYes() {
    gameOver.classList.remove('active');
    gameContent.classList.remove('closed');
    answerOptions.classList.remove('disabled');
    fiftyFifty.classList.remove('disabled');
    callFriend.classList.remove('disabled');
    for (let item of answerItem) {
        item.classList.remove('right');
        item.classList.remove('wrong');
    }
    for (let lvl of levelItem) {
        lvl.classList.remove('current');
        lvl.classList.remove('passed');
    }
    isFiftyFiftyApplied = false;
    isCallFriendApplied = false;
    level = 0;
    generateQuestion(answerItem);
    renderLevel();
}

buttonNo.addEventListener('click', handleNo);
function handleNo() {
    window.location.href = '../index.html';
}