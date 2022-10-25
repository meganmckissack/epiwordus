import React from "react";
import Proptypes from 'prop-types';


function InputWord(props) {
  return (
    <React.Fragment>
      <p>{props.inputWord}</p>
    </React.Fragment>
  )
}

InputWord.propTypes = {
  inputWord: Proptypes.string.isRequired,
}

export default InputWord;