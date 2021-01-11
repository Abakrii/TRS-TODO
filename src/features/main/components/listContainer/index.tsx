import React, { FC } from 'react';
import { View } from 'react-native';
import styles from './styles';
import { ReactChildern } from '../../../../core/types';

const { list } = styles;
const ListContainer: FC<ReactChildern> = ({ children = <></> }): JSX.Element => {
    return (
        <View style={list}>
            {children}
        </View>
    )
};

export default ListContainer;