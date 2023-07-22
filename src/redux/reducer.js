const initialState = {
  num1: '',
  num2: '',
  result: '',
  error: ''
}
export default function reducer (state = initialState, action) {
  if (action.type === 'SET_RESULT') {
    return { ...state, result: action.payload}
  } else if (action.type === "SET_ERROR") {
    return { ...state, result: null, error: action.payload}
  }
}

