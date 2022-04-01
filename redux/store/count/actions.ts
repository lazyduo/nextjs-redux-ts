import {
	actionTypesCounter,
} from "../../interfaces"

export const counterIncrement = () => ({
    type: actionTypesCounter.COUNTER_INCREMENT
})

export const counterDecrement = () => ({
    type: actionTypesCounter.COUNTER_DECREMENT
})

export const counterReset = () => ({
    type: actionTypesCounter.COUNTER_RESET
})