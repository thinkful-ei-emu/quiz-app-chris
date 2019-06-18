import Question from './Question';
import getQuestions from './TriviaApi';

class Quiz {
  constructor(name){
    this.unasked = [];
    this.asked = [];
    this.score = 0;
    this.scoreHistory = [];
    this.active = false;
    this.highScore = 0;
  }

  startGame() {
    //turn the quiz active
    this.active = true;
    //pull the questions from the server
    this.generateQuestions();
    //get the first question
    this.getCurrentQuestion();
  }

  getCurrentQuestion() {
    //pulls the first element of the unasked array
    //displays it on the page
    console.log(this.unasked);
    // Question.text = this.unasked;
    // Question.answers = this.unasked[0];
    // Question.correctAnswer = this.unasked[0];

    // console.log(Question.text);
    //splices that element and adds it to the asked array
    this.asked = this.unasked.slice( 0 , 1 );
    this.unasked.splice( 0 , 1 );
    console.log(this['unasked'].length);
  }

  nextQuestion(){
    this.getCurrentQuestion();

  }

  getProgressBar() {
    let progress = 'Inactive';
    if (this.active) {
      progress = `${this.asked.length} of 5`;
    }
  }

  increaseScore(x){
    this.score += x;
    this.showCorrectAnswer(x);
  }

  showCorrectAnswer(x){
    if (x === 1) {
      console.log(`You got it! The correct answer was: ${this.correctAnswer}`);
    }
    else if (x === 0) {
      console.log(`Sorry, that's incorrect. 
        You answered: ${this.userAnswer} The correct answer was: ${this.correctAnswer}`);
    }
    else {
      console.log('Please select a valid answer');
    }
  }

  generateQuestions(){
    const self = this;
    return getQuestions()
      .then(function({results}) {
        results.forEach(function(question) {
          self.addQuestions(question);
        });
      });
  }

  addQuestions(question){
  //pushes the questions to the unasked array+
    return this.unasked.push(question);
  }

  highScoreCheck() {
    if (this.score > this.highScore)
      return true;
    else {
      return false;
    }
  }

  quizCompleted(){
    //display completion screen
    //turn active to false
    this.active = false;
    //check if it is a high score
    if (this.highScoreCheck) {
      console.log('That is a new high score!');
    }
    //add score to score history if it is a new high score
    this.scoreHistory.push(this.score);

    console.log(`Good job! Your final score was ${this.score} out of 5`);
      
  }
}

export default Quiz;