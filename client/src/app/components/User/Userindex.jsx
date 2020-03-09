import React, { useState, useReducer, useEffect, } from 'react';
import { questionnaire, initialState } from '../../../reducers/user.reducer/reducer'
import Questionnaire from './User-components/Questionnnaire';
import Fin from './User-components/Fin'
import Debut from './User-components/Debut';
import LogoAmiltoneSeul from '../../../img/LogoASeul.png'
import './user-style.scss'
import TimeOutModal from './TimeOutModal';
import LogoAmiltone from "../../../img/LogoAmiltone.svg"


const Userindex = () => {
  const [state, dispatch] = useReducer(questionnaire, initialState);
  const [page, setPage] = useState(1)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    dispatch({ type: 'getQuestionnaire' })
  }, [])

  useEffect(() => {
    let postItem = {
      id_user: state.id_user,
      id_tes: state.id_test,
      answers: state.answers,
      isEnded: true
    }
    state.isEnded && console.log('fin', postItem)
  }, [state.isEnded, state])

  let handlePageChange = () => {
    page === 1 ? setPage(2) : setPage(1)
  }

  const navigateInTest = () => {
    if (state.indexQuestion === state.questions.length - 1) {
      endTest()
      //setTestIsEnded(true)
    } else {
      dispatch({ type: 'setIndex' })
    }
  }

  const endTest = () => {
    dispatch({ type: 'endTest' })
  }

  const ValidateResponse = (answer, visible) => {
    dispatch({ type: 'getAnswer', payload: answer })
    visible ? setVisible(visible) : navigateInTest()
  }

  const TimedOutNav = () => {
    navigateInTest()
    setVisible(false)
  }

  let handleComponent = () => {
    switch (page) {
      case 1:
        return <Debut handlePageChange={() => handlePageChange()} test={state} />;
      case 2:
        return <Questionnaire handlePageChange={() => handlePageChange()} test={state} ValidateResponse={(answer, visible) => ValidateResponse(answer, visible)} isEnded={state.isEnded} />;
      default:
        return 'erreur d affichage'
    }
  }
  return (
    <div className='User'>
      <div className={visible ? 'modalOpacity' : undefined}>
        <div className='logoAmiltone'>
          <img src={LogoAmiltone} alt='logoAmiltone' />
        </div>
        <div className="Userindex container-fluid">
          <div className='logoAmiltoneSeul'>
            <img src={LogoAmiltoneSeul} alt='logoAmiltoneSeul' />
          </div>
          {
            state.isEnded ? <Fin /> : handleComponent()
          }
        </div>
      </div>
      <TimeOutModal visible={visible} TimedOutNav={() => TimedOutNav()} />
    </div>
  )
}

export default Userindex;