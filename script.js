const correctAnswers = ['B', 'B', 'A', 'B', 'B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');


form.addEventListener('submit', e => {
    e.preventDefault();
    let score = 0;
    const userAnswers = [form.Q1.value, form.Q2.value, form.Q3.value, form.Q4.value, form.Q5.value, form.Q6.value, form.Q7.value, form.Q8.value]

    //Answers Check(Cummulative)
    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score += (100/8)

        }

    });
    //Result Display and Automatic scroll up when hitting submit button
    //console.log(score);
    scrollTo(0, 0);
    result.classList.remove('d-none');
    let output = 0;
    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${output>score?score:output}%`;
        if (output >= score) {
            clearInterval(timer);
        } else {
            output++; 
        }
    },50)



});
