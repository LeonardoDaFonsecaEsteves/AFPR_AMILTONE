import React, { useState, useEffect } from 'react';

function QuestionLibre({ ValidateResponse }) {
  const [rep, setRep] = useState('')

  useEffect(() => {
    return () => setRep('')
  }, [])

  let getAnswer = (e) => {
    e.preventDefault();
    setRep(e.target.value)
  }

  return (
    <div className='QuestionLibre'>
      <form >
        <div className='reponses'>
          <input value={rep} onChange={e => getAnswer(e)} />
        </div>
        <div className="btn" onClick={(e) => ValidateResponse(rep, false)}>
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

export default QuestionLibre