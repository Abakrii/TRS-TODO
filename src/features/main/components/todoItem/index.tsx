import React, { FC, Fragment } from 'react';
import { View, TextInput, Text } from 'react-native';
import styles from './styles';
import { TodoItemProps } from '../../../../core/types';
import ActionButton from '../../../../core/components/actionButton';
import { useTranslation } from 'react-i18next';
import { translationBaseKey } from '../../../../core/utils/constants';
const { todoItem, titleStyle, } = styles;
const TodoItem: FC<TodoItemProps> = ({
  item,
  onDelete,
  onSave,
  savedTodoKey,
}): JSX.Element => {
  const { t } = useTranslation();
  const { title = '', key = '' } = item || {};
  const buttonItems = [
    {
      id: '1',
      name: t(`${translationBaseKey}.delete`),
      color: 'red',
      onAction: () => onDelete(key),
    },
    {
      id: '2',
      name: t(`${translationBaseKey}.save`),
      color: 'blue',
      onAction: () => onSave(key),
    },
  ];


  const filterActions = () => (
    buttonItems
      .filter((item) => item.id === '1' || key !== savedTodoKey)
      .map((filteredActions) => {
        const { id, name, color, onAction } = filteredActions;
        return (
          <Fragment key={id} >
            <ActionButton
              key={id}
              onPress={onAction}
              title={name}
              color={color}
            />
            {key === savedTodoKey && <Text>{t(`${translationBaseKey}.done`)}</Text>}
          </Fragment >
        );
      })
  )


  return (
    <View style={todoItem}>
      <TextInput style={titleStyle}>{title}</TextInput>
      {filterActions()}
    </View>
  );
};

export default TodoItem;
