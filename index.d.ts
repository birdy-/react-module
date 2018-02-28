export declare const getModuleReducerKey: () => string;
export declare const setModuleReducerKey: (key: string) => void;
export declare function getReducers<ReducerType>(): ReducerType;
export declare function registerModuleReducer<ModuleState>(moduleName: string, reducer: ModuleState): void;
export declare function getModuleState<State, Name extends keyof State[ModuleReducerKey], ModuleReducerKey extends keyof State>(moduleName: Name, state: State, moduleReducer?: ModuleReducerKey): State[ModuleReducerKey][Name];
import * as rsaga from "redux-saga/effects";
export declare type SagaType = rsaga.AllEffect | rsaga.RootEffect | rsaga.TakeEffect | rsaga.ChannelTakeEffect<any> | rsaga.PutEffect<any> | rsaga.ChannelPutEffect<any> | rsaga.RaceEffect | rsaga.CallEffect | rsaga.CpsEffect | rsaga.ForkEffect | rsaga.JoinEffect | rsaga.CancelEffect | rsaga.SelectEffect | rsaga.ActionChannelEffect | rsaga.CancelledEffect | rsaga.FlushEffect<any> | rsaga.GetContextEffect | rsaga.SetContextEffect<any> | rsaga.Effect[];
export declare const getSagas: () => (rsaga.RootEffect | rsaga.TakeEffect | rsaga.ChannelTakeEffect<any> | rsaga.PutEffect<any> | rsaga.ChannelPutEffect<any> | rsaga.AllEffect | rsaga.RaceEffect | rsaga.CallEffect | rsaga.CpsEffect | rsaga.ForkEffect | rsaga.JoinEffect | rsaga.CancelEffect | rsaga.SelectEffect | rsaga.ActionChannelEffect | rsaga.CancelledEffect | rsaga.FlushEffect<any> | rsaga.GetContextEffect | rsaga.SetContextEffect<any> | rsaga.Effect[])[];
export declare const registerModuleSaga: (saga: rsaga.RootEffect | rsaga.TakeEffect | rsaga.ChannelTakeEffect<any> | rsaga.PutEffect<any> | rsaga.ChannelPutEffect<any> | rsaga.AllEffect | rsaga.RaceEffect | rsaga.CallEffect | rsaga.CpsEffect | rsaga.ForkEffect | rsaga.JoinEffect | rsaga.CancelEffect | rsaga.SelectEffect | rsaga.ActionChannelEffect | rsaga.CancelledEffect | rsaga.FlushEffect<any> | rsaga.GetContextEffect | rsaga.SetContextEffect<any> | rsaga.Effect[]) => void;
