const test_en_dur = {
  id_user: 1,
  nom: 'Caillaud',
  prenom: 'Tom',
  id_test: 1,
  langage: 'React',
  niveau: "débutant",
  duree: 3000000,
  isEnded: false,
  questions: [
    {
      id_question: 1,
      type: 'libre',
      time: 5000,
      question: 'En CSS, Quel élément sépare la propriété de sa valeur ?',
      possibilite: {
        id_possibilite: 1,
        possibilite: 'a',
      }
    }, {
      id_question: 2,
      type: 'simple',
      question: 'Quelle est la syntaxe pour déclarer l\'encodage des caractères du document en UTF-8 ?',
      time: 5000,
      possibilite: [{
        id_possibilite: 2,
        possibilite: '<meta encoding="text/html; charset=utf-8">',
      }, {
        id_possibilite: 3,
        possibilite: '<meta charset="text/html; UTF-8">',
      }, {
        id_possibilite: 4,
        possibilite: '<meta charset="utf-8">',
      }
      ]
    }, {
      id_question: 3,
      type: 'simple',
      time: 90000,
      question: 'Qui est le meilleur joueur de babyfoot de l\'agence?',
      possibilite: [{
        id_possibilite: 2,
        possibilite: 'Ghena',
      }, {
        id_possibilite: 3,
        possibilite: 'Baudouin',
      }, {
        id_possibilite: 4,
        possibilite: 'Leo',
      }, {
        id_possibilite: 5,
        possibilite: 'Antho',
      }
      ]
    }, {
      id_question: 4,
      type: 'simple',
      question: 'Soit un conteneur "div" auquel on veut donner une largeur *visible* totale de 760 pixels. Avec quel style obtiendra-t-on ce résultat ? Note : le modèle de boite standard des CSS est bien sûr appliqué.',
      time: 1145000,
      possibilite: [{
        id_possibilite: 2,
        possibilite: 'div {width: 760px; padding: 12px; border-width: 1px; margin: 0;}',
      }, {
        id_possibilite: 3,
        possibilite: ' div {width: 740px; padding: 1em; border-width: 0; margin: 0;}',
      }, {
        id_possibilite: 4,
        possibilite: 'div {width: 720px; padding: 5px; border-width: 5px; margin: 10px;}',
      }, {
        id_possibilite: 5,
        possibilite: 'div {width: 700px; padding: 29px; border-width: 1px; margin: 0;}',
      }
      ]
    }, {
      id_question: 5,
      type: 'libre',
      time: 15000,
      question: 'Quelle propriété  CSS utilise t\'on pour souligner du texte',
      possibilite: {
        id_possibilite: 1,
        possibilite: 'a',
      }
    }
  ]
}


export default test_en_dur