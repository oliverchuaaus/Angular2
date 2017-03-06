//Action
interface Action {
    type: string;
    payload?: any;
}

//Reducer
interface Reducer<T> {
    (state: T, action: Action): T;
}

//Concrete Reducer
let reducer: Reducer<number> = (state: number, action?: Action) => {
    if (!action) return state;
    switch (action.type) {
        case 'Increment': return state + 1;
        case 'Decrement': return state - 1;
        case 'Plus': return state + action.payload;
        default: return state;
    }
};

//Store
class Store<T>{
    constructor(private reducer:Reducer<T>,public state:T){
    }

    dispatch(action:Action):void{
        this.state = this.reducer(this.state, action);
        //subscriber part
        this.listeners.forEach( (listener:ListenerCallback) => listener());    
    }

    //subscriber part
    private listeners:ListenerCallback[] = [];
    subscribe(listener:ListenerCallback):UnsubcribeCallback{
        this.listeners.push(listener);
        return ()=> {
            this.listeners = this.listeners.filter(l => l!== listener);
        };
    }
    
}

//Subscriber
interface ListenerCallback{ 
    ():void;
}

interface UnsubcribeCallback{ 
    ():void;
}



//no action returns current action
console.log(reducer(0, null));
console.log();

//increment/decrement action
let increment: Action = { type: 'Increment' };
console.log(reducer(0, increment));
let decrement: Action = { type: 'Decrement' };
console.log(reducer(0, decrement));
console.log();

//add n action
let add7: Action = { type: 'Plus', payload: 7 };
console.log(reducer(0, add7));
console.log();

//Using Store
let store = new Store<number>(reducer,0);
console.log(store.state);
store.dispatch(increment);
console.log(store.state);
store.dispatch(add7);
console.log(store.state);
console.log();

//Subscribe
let unsub = store.subscribe(()=>{console.log('state changed: '+store.state)});
store.dispatch(increment);
console.log(store.state);
store.dispatch(increment);
console.log(store.state);
unsub();
store.dispatch(increment);
console.log(store.state);
