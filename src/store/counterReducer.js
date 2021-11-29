let initialState = {
    currentCount: null,
    maxCount: 1,
    startCount: 0
}

export const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ENTER_MAX_VALUE':
            return {
                ...state,
                maxCount: action.maxValue,
            }
        case 'ENTER_START_VALUE':
            return {
                ...state,
                startCount: action.startValue,
            }
        case 'SET_COUNT':
            return {
                ...state,
                currentCount: state.startCount,
            }
        case 'UP_COUNT':
            return {
                ...state,
                currentCount: action.currentValue,
            }
        case 'RESET_COUNT':
            return {
                ...state,
                currentCount: state.startCount,
            }
        default:
            return state
    }
}

export const enterMaxValue = (maxValue) => ({type: 'ENTER_MAX_VALUE', maxValue})
export const enterStartValue = (startValue) => ({type: 'ENTER_START_VALUE', startValue})
export const setCount = () => ({type: 'SET_COUNT'})
export const upCount = (currentValue) => ({type: 'UP_COUNT', currentValue})
export const resetCount = () => ({type: 'RESET_COUNT'})
