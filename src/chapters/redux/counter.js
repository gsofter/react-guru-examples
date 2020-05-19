const INCREASE = 'INCREASE'
const DECREASE = 'DECREASE'
export const increase = () => ({ type: INCREASE })
export const decrease = () => ({ type: DECREASE })

const initialState = {
  number: 0,
}

const counterReducer = (state = initialState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case INCREASE:
      return {
        number: state.number + 1,
      }
    case DECREASE:
      return {
        number: state.number - 1,
      }

    default:
      return state
  }
}

export { counterReducer }
