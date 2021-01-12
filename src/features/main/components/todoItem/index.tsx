import React, { FC } from 'react';
import { View, TextInput, Text } from 'react-native';
import styles from './styles';
import { TodoItemProps } from '../../../../core/types';
import ActionButton from '../../../../core/components/actionButton';
import { useTranslation } from 'react-i18next';
import { translationBaseKey } from '../../../../core/utils/constants';
const { todoItem, titleStyle, filterActionView } = styles;
const TodoItem: FC<TodoItemProps> = ({
  item,
  onDelete,
  onSave,
  savedTodo,
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
      onAction: () => onSave(title),
    },
  ];


  const filterActions = () => (
    buttonItems
      .filter((item) => item.id === '1' || title !== savedTodo)
      .map((filteredData) => {
        const { id, name, color, onAction } = filteredData;
        return (
          <View style={filterActionView} key={id}>
            <ActionButton
              key={id}
              onPress={onAction}
              title={name}
              color={color}
            />
            {title === savedTodo && id === '1' && <Text>{t(`${translationBaseKey}.done`)}</Text>}
          </View >
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
