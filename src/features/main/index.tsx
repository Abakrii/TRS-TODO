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

    const [todos, setTodos] = useState([]);

    const [savedTodoKey, setSaveTodo] = useState([]);



    const addTodoHandler = (id: string) => {
        globalAddToDo({ val: id, setState: setTodos })
    };
    const deleteHandler = (id: string) => {
        globalDeleteHandler({ val: id, setState: setTodos })
    };




    const onSelect = (item: any) => {
        const { id = "", title = "" } = item;
        setSaveTodo(prevTodos => {
            return [{ id, title }, ...prevTodos];
        });
    }


    const renderItem = ({ item }: any) => {
        return (
            <TodoItem
                item={item}
                onSave={onSelect}
                onDelete={deleteHandler}
                savedTodoKey={savedTodoKey}
            />
        )
    }

    return (
        <View style={mainContainer}>
            <Header headerTitle={t(`${translationBaseKey}.headerTitle`)} />
            <Content>
                <AddTodos addTodoHandler={addTodoHandler} />
                <ListContainer>
                    <FlatList
                        data={todos}
                        keyExtractor={(item) => item.id}
                        renderItem={renderItem}
                    />
                </ListContainer>
            </Content>
        </View>
    )
};

export default Main;