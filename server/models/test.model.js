class Car {
  constructor(quiz, ques) {
    this.id_quiz = quiz[0].id_quiz;
    this.level = quiz[0].level;
    this.language = quiz[0].language;
    this.duration = quiz[0].duration;
    this.question = [];
    this.proposition = {};
    for (let i = 0; i < ques.length; i++) {
      this.question.push(ques[i][0]);
      console.log(ques[i][0]);
    }
  }
}

module.exports = Car;
