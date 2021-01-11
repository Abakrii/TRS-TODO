import React, { FC } from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import { HeaderProps } from '../../types';
const { header, headTitle } = styles;
const Header: FC<HeaderProps> = ({ headerTitle = '' }): JSX.Element => {
    return (
        <View style={header}>
            <Text style={headTitle}>
                {headerTitle}
            </Text>
        </View>
    )
};

export default Header;