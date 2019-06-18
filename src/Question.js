import Quiz from './Quiz';

class Question {
  constructor(questionData){
    this.text;
    this.answers = [];
    this.correctAnswer;
    this.userAnswer = null;
  }


  // Methods:
  //   submitAnswer(answer: string)  - sets the userAnswer prop
  //   answerStatus()                - returns {Integer} indicating question's state:
  //                                 -1: unanswered, 0: answered incorrectly, 1: answered correctly

  submitAnswer(){
    // check if the answer is correct
    let x = this.getAnswerStatus();
    // depending on the response, provide the correct next screen
    Quiz.increaseScore(x);

  }

  getAnswerStatus() {
    if (this.correctAnswer === this.userAnswer) {
      return 1;
    }
    else if (this.correctAnswer !== this.userAnswer) {
      return 0;
    }
    else {
      return -1;
    }
  }
}

export default Question;