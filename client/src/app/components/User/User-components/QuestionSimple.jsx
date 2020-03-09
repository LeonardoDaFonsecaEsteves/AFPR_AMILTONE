import React, { useState, useEffect } from 'react';
import { setCheckedPossibilities } from '../../../../reducers/user.reducer/reducer';

function QuestionSimple({ question, ValidateResponse }) {
  const [Answers, setAnswers] = useState([])
  const [Sol, setSol] = useState([])

  useEffect(() => {
    setSol(setCheckedPossibilities(question.possibilite))
  }, [question.possibilite])


  const getChecked = (ind, answer) => {
    let result = [...Answers]
    let solTemp = [...Sol]
    solTemp[ind].isChecked = !Sol[ind].isChecked
    setSol(solTemp)
    if (Sol[ind].isChecked) {
      result.push(answer)
    } else {
      result = result.filter(ans => ans !== answer)
    }
    setAnswers(result)
  }

  const checkSubmit = () => {
    ValidateResponse(Answers, false)
    setAnswers([])
  }

  return (
    <div className='QuestionSimple'>
      <form >
        <div className='reponses'>
          {
            Sol.map((answer, ind) => {
              return (
                <div key={answer.id_possibilite} className='answer_check'>
                  <label className='answer_label'>
                    <input type='checkbox' className="answer_input" checked={Sol[ind].isChecked} onChange={() => getChecked(ind, answer.possibilite)}
                    />
                    <span className={answer.isChecked ? "answerChecked-text" : "answer_text"} > {answer.possibilite}</span>
                  </label>
                </div>
              )
            })
          }
        </div>

        <div className="btn" onClick={() => checkSubmit()}>
          <div className="isBtn">
            <span>
              valider la réponse
          </span>
          </div>
        </div>
      </form>
    </div>
  )
}

export default QuestionSimple