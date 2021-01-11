import React, {FC} from 'react';
import {View, Button} from 'react-native';
import styles from './styles';
import {ActionButtonProps} from '../../types';

const {actionButtonView} = styles;
const ActionButton: FC<ActionButtonProps> = ({
  onPress,
  title,
  color,
}): JSX.Element => {
  return (
    <View style={actionButtonView}>
      <Button color={color} onPress={onPress} title={title} />
    </View>
  );
};

export default ActionButton;
