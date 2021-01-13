import { GlobalFun } from '../types';
export const globalDeleteHandler = ({ val, setState }: GlobalFun) => {
    setState((prevState: any[]) => {
        return prevState.filter((state: any) => state.id != val);
    });
};

export const globalChangeHandler = ({ val, setState }: GlobalFun) => {
    setState(val);
};

export const globalAddToDo = ({ val, setState }: GlobalFun) => {
    setState((prevTodos: any) => {
        return [{ id: Math.random().toString(), title: val, }, ...prevTodos];
    });
};


