import { StyleSheet } from 'react-native';

import { StylesInterfaces } from '../../../../core/types';

const styles: StylesInterfaces = StyleSheet.create({
    todoItem: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 16,
        marginTop: 16,
        borderColor: "#BBB",
        borderWidth: 1,
        borderStyle: "dashed",
        borderRadius: 10,
    },
    titleStyle: { width: '70%' },
    filterActionView: {
        alignItems: 'center', flexDirection: 'row'
    }
});

export default styles;
