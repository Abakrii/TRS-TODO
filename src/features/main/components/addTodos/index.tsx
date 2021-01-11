import React, { FC, useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import styles from './styles';
import { useTranslation } from 'react-i18next';
import { translationBaseKey } from '../../../../core/utils/constants';
import { globalChangeHandler } from '../../../../core/utils/methods';
import { AddTodoProps } from '../../../../core/types';
const { input } = styles;
const AddTodos: FC<AddTodoProps> = ({ addTodoHandler }): JSX.Element => {
    const [text, setText] = useState();
    const { t } = useTranslation();
    const changeHandler = (val: string) => {
        globalChangeHandler({ val, setState: setText })
    };

    return (
        <View>
            <TextInput
                style={input}
                placeholder={t(`${translationBaseKey}.todoPlaceH`)}
                onChangeText={changeHandler}
            />
            <Button
                disabled={!text}
                onPress={() => addTodoHandler(text)}
                title={t(`${translationBaseKey}.addTodo`)} color="coral" />
        </View>
    );
};

export default AddTodos;
