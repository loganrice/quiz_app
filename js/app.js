var quiz = [
	{ choices: ["hand stand", "top spin", "head spin", "pushup"],
	correctAnswer: 3,
	info: "Warning: Do not do this move on concrete… for obvious reasons. The headspin is probably the most iconic and most unnatural move in breakdancing. Although its origins are derived from capoeira, Kid freeze has claimed to have invented the ‘continuous headspin’. Today, the move has been mastered by bboys around the world. In fact Bboy Aichi, from Japan, holds the Guiness World record for 135 rotations in 1 minute."
	},
	{ choices: ["one", "two", "three", "four"],
	correctAnswer: 3,
	info: "Warning: Do not"
	}
]

var CURRENTQUESTION = 0;

$(document).ready(function(){
	
	$('.btn-wrapper').click(function(){
		$(this).hide("slow");
		nextQuestion();
	});

	$('#choiceList').on('click', '.choice', function() {
		var answer = hasAnswer($(this).attr('id'));
		if (answer == true){
			$(this).addClass("correct");
		} else {
			$(this).addClass("incorrect");
		}
		$(this).removeClass("choice");
		$(this).siblings().removeClass("choice");
		$(this).siblings().addClass("unhighlight");
	})

	$("#next-btn").click( function() {
		nextQuestion();
	});
})

function hasAnswer(choice) {
	return quiz[CURRENTQUESTION].correctAnswer == choice;
}

function fillInQuiz(choices) {
	for(i=0; i<choices.length; i++){
		var listItem = '<li class="choice" id=' + i + '>' + choices[i] + '</li>';
		$("#choiceList").append(listItem);
	}
}

function nextQuestion() {
	$('#choiceList > li').remove();
	fillInQuiz(quiz[CURRENTQUESTION].choices);
	CURRENTQUESTION++;
}
