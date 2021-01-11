import React, { FC } from 'react';
import { View } from 'react-native';
import styles from './styles';
import { ReactChildern } from '../../../../core/types';
const { mainContent } = styles;
const Content: FC<ReactChildern> = ({ children = <></> }): JSX.Element => {
    return (
        <View style={mainContent}>
            {children}
        </View>
    )
};

export default Content;