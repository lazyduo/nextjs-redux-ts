import {
	actionTypesCounter,
} from "../../interfaces"

export const counterIncrement = () => {
    return {
        type: actionTypesCounter.COUNTER_INCREMENT
    }
}

export const counterDecrement = () => {
    return {
        type: actionTypesCounter.COUNTER_DECREMENT
    }
}

export const counterReset = () => {
    return {
        type: actionTypesCounter.COUNTER_RESET
    }
}