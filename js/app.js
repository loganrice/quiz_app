var quiz = [
	{ choices: ["hand stand", "top spin", "head spin", "pushup"],
	correctAnswer: 2,
	info: "Warning: Do not do this move on concrete… for obvious reasons. The headspin is probably the most iconic and most unnatural move in breakdancing. Although its origins are derived from capoeira, Kid freeze has claimed to have invented the ‘continuous headspin’. Today, the move has been mastered by bboys around the world. In fact Bboy Aichi, from Japan, holds the Guiness World record for 135 rotations in 1 minute.",
	image: "headspin.gif"
	},
	{ choices: ["jackhammers", "arm hops", "one arm push ups", "plank"],
	correctAnswer: 0,
	info: "You’ll come to find that many bboy moves do not actually look exactly like they sound. Such is the case for the jackhammer. This move may look impossible, but it’s actually just a matter of manipulating balance. It utilizes a technique called “stabbing, in which you support your entire bodyweight by placing your elbow on the stomach at a 90 degree angle. With the proper set up and a little leg push, the jackhammer is born.",
	image: "jackhammers.gif"
	},
	{ choices: ["hand stand", "moon walk", "head slide", "walking the dog"],
	correctAnswer: 2,
	info: "Warning: Do not",
	image: "headslide.gif"
	},
	{ choices: ["Baby Spins", "moon walk", "head slide", "walking the dog"],
	correctAnswer: 0,
	info: "This move is new. In fact, it’s so new, I had to make up a name for it. The ‘baby’ comes from a baby freeze, one of breakdancing’s most basic freezes. Basically, you quickly move in a circle while in this freeze. Not many bboys consider this a typical powermove yet, but it sure is becoming popular.",
	image: "babyspins.gif"
	}
]

var CURRENTQUESTION = 0;
var SCORE = 0;

$(document).ready(function(){
	$(".questionTotal").text(quiz.length);

	$("#reset-btn").click(function() {
		location.reload();
	})

	$('.btn-wrapper').click(function(){
		$(this).hide("slow");
		nextQuestion();
		$("#next-btn").show();
	});

	$('#choiceList').on('click', '.choice', function() {
		var answer = hasAnswer($(this).attr('id'));
		if (answer == true){
			$(this).addClass("correct");
			increaseScore();
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
	return quiz[CURRENTQUESTION - 1].correctAnswer == choice;
}

function increaseScore() {
	SCORE++;
}

function fillInQuiz(quizObject) {
	if (isLastQuestion() == true) {
		$("#next-btn").hide();
		listItem = "<li class='unhighlight'>" + SCORE + " Out of " + quiz.length + "were correct</li>"
		$("#choiceList").append(listItem);
		$("#quizImage").attr("src", "img/breakdance.gif");
	} else {
		var choices = quizObject[CURRENTQUESTION].choices;
		var image = quizObject[CURRENTQUESTION].image;
		var imagePath = "img/" + image
		$(".questionNum").text(CURRENTQUESTION + 1);
		$("#quizImage").attr("src", imagePath);
		for(i=0; i<choices.length; i++){
			var listItem = '<li class="choice" id=' + i + '>' + choices[i] + '</li>';
			$("#choiceList").append(listItem);
		}
	}
}

function isLastQuestion() {
	return CURRENTQUESTION == quiz.length;
}

function nextQuestion() {
	$('#choiceList > li').remove();
	fillInQuiz(quiz);
	return CURRENTQUESTION++;
}
