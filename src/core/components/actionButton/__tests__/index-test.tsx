import React from 'react';
import renderer from 'react-test-renderer';
import ActionButton from '../';

test('renders correctly', () => {
    const tree = renderer.create(
        <ActionButton onPress={() => console.log('on press is working')}
            color="#FFF"
            title="Button testing"
        />).toJSON();
    expect(tree).toMatchSnapshot();
});


