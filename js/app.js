$(document).ready(function(){
	
	$('.btn-wrapper').click(function(){
		fillInQuiz(quiz.one);
		$(this).hide("slow");
	});
})

var quiz = {
	one: ["choice1", "choice2", "choice3", "choice4", "choice5"],
	two: ["choice1", "choice2", "choice3", "choice4", "choice5"],
	three: ["choice1", "choice2", "choice3", "choice4", "choice5"]
}

function fillInQuiz(choices) {
	for(i=0; i<choices.length; i++){
		$("#choiceList").append('<li class="choice">' + choices[i] +'</li>');
	}
}

