import { GlobalFun } from '../types';
export const globalDeleteHandler = ({ val, setState }: GlobalFun) => {
    setState((prevState: any[]) => {
        return prevState.filter((state: any) => state.key != val);
    });
};

export const globalChangeHandler = ({ val, setState }: GlobalFun) => {
    setState(val);
};

export const globalAddToDo = ({ val, setState }: GlobalFun) => {
    setState((prevTodos: any) => {
        return [{ title: val, key: Math.random().toString() }, ...prevTodos];
    });
};


