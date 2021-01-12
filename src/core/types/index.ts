import { ReactNode } from 'react';
import { ViewStyle, TextStyle } from 'react-native';
export interface StylesInterfaces {
    header?: ViewStyle;
    headTitle?: TextStyle;
    mainContainer?: ViewStyle;
    mainContent?: ViewStyle;
    list?: ViewStyle;
    todoItem?: ViewStyle;
    input?: TextStyle;
    actionButtonView?: ViewStyle;
    titleStyle?: TextStyle
    filterActionView?: ViewStyle
}

export type HeaderProps = {
    headerTitle: string;
};

export type ReactChildern = {
    children?: ReactNode;
};

export type TodoItemProps = {
    item?: { title: string; key: string };
    onDelete: Function;
    onSave: Function;
    savedTodo: string;
};

export type GlobalFun = {
    val: string;
    setState: Function;
    prevState?: any[];
};

export type AddTodoProps = {
    addTodoHandler: Function;
};

export type ActionButtonProps = {
    onPress: () => void;
    title: string;
    color: string;
};
