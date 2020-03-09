import React from 'react';

import Chrono from './Chrono'
import QuestionLibre from './QuestionLibre';
import QuestionSimple from './QuestionSimple'



function Questionnaire({ test, ValidateResponse }) {




  let question = test.questions[test.indexQuestion]
  let type = question.type

  return (
    <div className='Questionnaire container-fluid'>
      <div className='row'>
        <div className='question col-md-4'>
          <div className='questionnaire_progression'>
            question {test.indexQuestion + 1} / {test.questions && test.questions.length}
          </div>
          <div className='question_title'>
            {
              question.question
            }
          </div >
        </div>
        <div className='answer col-md-8'>
          <div className=' questionnaire_chrono'>
            <Chrono ValidateResponse={(answer, visible) => ValidateResponse(answer, visible)} timer={test.timer} indexQuestion={test.indexQuestion} />
          </div>
          <div className='answer_title'>
            Votre (vos) réponse(s):
          </div>
          <div className="answers">
            {
              type === 'libre' && <QuestionLibre ValidateResponse={(answer, visible) => ValidateResponse(answer, visible)} />}

            {
              type === 'simple' && <QuestionSimple question={question} ValidateResponse={(answer, visible) => ValidateResponse(answer, visible)} />
            }
          </div>
        </div>

      </div>

    </div>
  )

}

export default Questionnaire