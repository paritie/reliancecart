const answers = Array.from(document.querySelectorAll('.answer'));
const ans = Array.from(document.querySelectorAll('.ans'))
const question_items = Array.from(document.querySelectorAll('.question-item'));


const answersParents = answers.map(answer => answer.parentElement);

answersParents.map(element => {
    const children = element.children; //get the chilren of the div
    const grandChildren = children[1].children; // again, get the children of the above element

    // add onclick event listener to each question 
    grandChildren[0].addEventListener('click', () => {
        const otherQuestions = ans.filter(item => item !== grandChildren[1]);
        otherQuestions.map(item => item.classList.remove('display-block'));
        grandChildren[1].classList.toggle('display-block');
    })
})

question_items.map(element => {
    const children = element.children;
    children[0].addEventListener('click', () => {
        const question = children[1].children[0]
        question.click();
    })
})