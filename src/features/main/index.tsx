import React, { FC, useState } from 'react';
import { View, FlatList } from 'react-native';
import styles from './styles';
import { useTranslation } from 'react-i18next';
import Header from '../../core/components/header';
import Content from './components/content';
import ListContainer from './components/listContainer';
import TodoItem from './components/todoItem';
import { globalDeleteHandler, globalAddToDo, } from '../../core/utils/methods';
import { translationBaseKey } from '../../core/utils/constants'
import AddTodos from './components/addTodos';
const { mainContainer } = styles;
const Main: FC = (): JSX.Element => {
    const { t } = useTranslation();

    const [todos, setTodos] = useState(
        [
            { key: "1", title: "Drink coffe" },
            { key: "2", title: "Drink tea" },
            { key: "3", title: "Drink water" }
        ]
    );

    const [savedTodo, setSaveTodo] = useState('');

    const addTodoHandler = (title: string) => {
        globalAddToDo({ val: title, setState: setTodos })
    };
    const deleteHandler = (key: string) => {
        globalDeleteHandler({ val: key, setState: setTodos })
    };

    const saveHandler = (title: string,) => {
        setSaveTodo(title);
    };




    return (
        <View style={mainContainer}>
            <Header headerTitle={t(`${translationBaseKey}.headerTitle`)} />
            <Content>
                <AddTodos addTodoHandler={addTodoHandler} />
                <ListContainer>
                    <FlatList
                        data={todos}
                        keyExtractor={(item) => item.key}
                        renderItem={({ item }) => (
                            <TodoItem
                                item={item}
                                onSave={saveHandler}
                                onDelete={deleteHandler}
                                savedTodo={savedTodo}
                            />
                        )} />
                </ListContainer>
            </Content>
        </View>
    )
};

export default Main;