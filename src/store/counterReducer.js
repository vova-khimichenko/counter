import {saveState} from "../LocStorFunctions";

let initialState = {
    currentCount: null,
    maxCount: 1,
    startCount: 0,
    // isDataEntering: false,
    // isMaxError: false,
    // isStartError: false,
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
        // case 'RESET_COUNT':
        //     return {
        //         ...state,
        //         currentCount: state.startCount,
        //         isUpCountMax: false
        //     }
        case 'VALIDATION_VALUES':
            return action.maxValue < 1 || action.maxValue <= action.startValue
                ? {
                    ...state,
                    isMaxError: true
                }
                : {
                    ...state,
                    isMaxError: false,
                    isUpCountMax: false,
                    isDataEntering: false
                }
                && (action.startValue < 0 || action.startValue >= action.maxValue)
                    ? {
                        ...state,
                        isStartError: true
                    }
                    : {
                        ...state,
                        isStartError: false,
                        isUpCountMax: false,
                        isDataEntering: false
                    }
        default:
            return state
    }
}

export const upCount = (currentValue) => ({type: 'UP_COUNT', currentValue})
export const setCount = () => ({type: 'SET_COUNT'})
// export const resetCount = () => ({type: 'RESET_COUNT'})
export const enterMaxValue = (maxValue) => ({type: 'ENTER_MAX_VALUE', maxValue})
export const enterStartValue = (startValue) => ({type: 'ENTER_START_VALUE', startValue})
export const validationValues = (startValue, maxValue) => ({type: 'VALIDATION_VALUES', startValue, maxValue})
