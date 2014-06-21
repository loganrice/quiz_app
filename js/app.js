var quiz = [
	{ choices: ["hand stand", "top spin", "head spin", "pushup"],
	correctAnswer: 3,
	info: "Warning: Do not do this move on concrete… for obvious reasons. The headspin is probably the most iconic and most unnatural move in breakdancing. Although its origins are derived from capoeira, Kid freeze has claimed to have invented the ‘continuous headspin’. Today, the move has been mastered by bboys around the world. In fact Bboy Aichi, from Japan, holds the Guiness World record for 135 rotations in 1 minute."
}
]

$(document).ready(function(){
	
	$('.btn-wrapper').click(function(){
		$(this).hide("slow");
		startQuiz();
	});

	$('#choiceList').on('click', '.choice', function() {
		hasAnswer($(this).attr('id'));
	})
})

function startQuiz() {
	fillInQuiz(quiz[0].choices);
}

function hasAnswer(choice) {
	return quiz[0].correctAnswer == choice;
}

function fillInQuiz(choices) {
	for(i=0; i<choices.length; i++){
		var listItem = '<li class="choice" id=' + i + '>' + choices[i] + '</li>';
		$("#choiceList").append(listItem);
	}
}

