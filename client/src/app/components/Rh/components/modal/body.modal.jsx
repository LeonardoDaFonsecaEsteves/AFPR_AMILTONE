import React from 'react';

const BodyMdal = ({ responce, questions }) => {
    return (
        <div className="Body" >
            {/* {questions.map((question, i) => {
                return (
                    <div className="QuestionReponse" >
                        <div className="Question">
                            <span> {i + 1}: {question.isQuestion} ? score : {i}</span>
                        </div>
                    </div>
                )
            })} */}
        </div>
    )

}

export default BodyMdal;