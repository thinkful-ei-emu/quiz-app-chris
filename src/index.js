import $ from 'jquery';
import 'normalize.css';

import './index.css';

import {  getQuestions  } from './TriviaApi';
import Quiz from './Quiz';

const newQuiz = new Quiz;

$(document).ready(function() {
  newQuiz.startGame();
});