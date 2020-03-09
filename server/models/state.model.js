function question(id, type, question) {
  (this.id_question = id),
    (this.type = type),
    (this.question = question),
    (this.question_form = function() {
      return {
        id_question: this.id_question,
        type: this.type,
        question: this.question
      };
    });
}
function possibilite(id, possibilite, id_question) {
  (this.id_possibilite = id),
    (this.possibilite = possibilite),
    ((this.id_question = id_question),
    (this.possibilite_form = function() {
      return {
        id_possibilite: this.id_possibilite,
        possibilite: this.possibilite,
        id_question: this.id_question
      };
    }));
}

module.exports = { question, possibilite };
