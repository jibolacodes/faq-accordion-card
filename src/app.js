const faqs = [
	{
		question: 'How many team members can I invite?',
		answer: ''
	},
	{
		question: 'What is the maximum file upload size?',
		answer: 'No more than 2GB. All files in your account must fit your allotted storage space.'
	},
	{
		question: 'How do I reset my password?',
		answer: ''
	},
	{
		question: 'Can I cancel my subscription?',
		answer: ''
	},
	{
		question: 'Do you provide additional support?',
		answer: ''
	}
]

const article = document.querySelector('#article');

window.addEventListener('DOMContentLoaded', function(){
	let content = faqs.map(function(faq){
		return (
			`<div class="faq">
				<div class="question-center">
					<h2 class="question">${faq.question}</h2>
					<button class='btn'>
						<img class="arrow" src="../../images/icon-arrow-down.svg">
					</button>
				</div>
				<p class="answer">${faq.answer}</p>
				<div class="underline"></div>
			</div>`
	)
	});
	article.innerHTML = content.join('');

	const questions = document.querySelectorAll('.faq');

	questions.forEach(function(question){
		question.addEventListener('click', function(e){
			const element = e.currentTarget;
			const faq = element.querySelector('.question');
			const answer = element.querySelector('.answer');
			const arrow = element.querySelector('.arrow');

			answer.classList.toggle('show');
			arrow.classList.toggle('rotate');
			faq.classList.toggle('bold-text');
			faq.style.color = 'black';
		})
	})
})