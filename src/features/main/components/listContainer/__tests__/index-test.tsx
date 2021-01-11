import React from 'react';
import renderer from 'react-test-renderer';
import ListContainer from '../';

test('renders correctly', () => {
    const tree = renderer.create(<ListContainer><></></ListContainer>).toJSON();
    expect(tree).toMatchSnapshot();
});


