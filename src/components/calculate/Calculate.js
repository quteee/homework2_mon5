import React from 'react';
import { useSelector, useDispatch} from "react-redux";
import {useState} from "react";

function Calculate() {

  const [num1, setNum1] = useState('')
  const [num2, setNum2] = useState('')

  const result = useSelector(state => state.result);
  const error = useSelector(state => state.error)

  const dispatch = useDispatch();

  const handleNum1Change = (e) => {
    setNum1(e.target.value);
  };

  const handleNum2Change = (e) => {
    setNum2(e.target.value);
  };

  const handlePlus = () => {
    if (num1 === '' || num2 === '') {
      dispatch({
        type: "SET_ERROR",
        payload: "Пустого поля быть не должно"
      })
    } else {
      const result = num1 + num2
      dispatch({
        type: "SET_RESULT",
        payload: result
      })
    }
  }

  const handleMinus = () => {
    if (num1 === '' || num2 === '') {
      dispatch({
        type: "SET_ERROR",
        payload: "Пустого поля быть не должно"
      })
    } else {
      const result = num1 - num2
      dispatch({
        type: "SET_RESULT",
        payload: result
      })
    }
  }

  const handleMultiply = () => {
    if (num1 === '' || num2 === '') {
      dispatch({
        type: "SET_ERROR",
        payload: "Пустого поля быть не должно"
      })
    } else {
      const result = num1 * num2
      dispatch({
        type: "SET_RESULT",
        payload: result
      })
    }
  }

  const handleDivide = () => {
    if (num1 === '' || num2 === '') {
      dispatch({
        type: "SET_ERROR",
        payload: "Пустого поля быть не должно"
      })
    } else {
      const result = num1 / num2
      dispatch({
        type: "SET_RESULT",
        payload: result
      })
    }
  }
  return (
    <div>
      <input type="number" value={num1} onChange={handleNum1Change} />
      <input type="number" value={num2} onChange={handleNum2Change} />
      <button onClick={handlePlus}>+</button>
      <button onClick={handleMinus}>-</button>
      <button onClick={handleMultiply}>*</button>
      <button onClick={handleDivide}>/</button>
      <p>Результат: {result}</p>}
      <h3>Ошибка: {error}</h3>
    </div>
  );
}
export default Calculate;

