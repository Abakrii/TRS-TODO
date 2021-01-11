
import React, { FC } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { ReactChildern } from '../../types';

const HoleContainer: FC<ReactChildern> = ({ children = <></> }): JSX.Element => {
    return (
        <>
            <SafeAreaView>
                <ScrollView contentInsetAdjustmentBehavior="automatic">
                    {children}
                </ScrollView>
            </SafeAreaView>
        </>
    );
};

export default HoleContainer;
