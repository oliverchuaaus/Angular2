//State
interface AppState{
    messages:string[];
}

//Action
interface Action {
    type: string;
    payload?: any;
}

interface AddMessageAction extends Action{
    message:string;
}

interface DeleteMessageAction extends Action{
    index:number;
}

//Reducer
interface Reducer<T> {
    (state: T, action: Action): T;
}

let reducer1:Reducer<AppState>(state:AppState,action);
