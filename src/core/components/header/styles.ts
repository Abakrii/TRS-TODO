import { StyleSheet } from 'react-native';

import { StylesInterfaces } from '../../types';

const styles: StylesInterfaces = StyleSheet.create({
    header: {
        height: 80,
        paddingTop: 38,
        backgroundColor: 'coral'
    },
    headTitle: {
        textAlign: 'center',
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold'
    }
});

export default styles;
