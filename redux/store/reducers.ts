import { combineReducers, Reducer, AnyAction } from "redux";

import counter from "./count/reducer"

import { RootStateInterface } from "../interfaces"

const rootReducer: Reducer<
	RootStateInterface,
	AnyAction
> = combineReducers<RootStateInterface>({
	counter,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;