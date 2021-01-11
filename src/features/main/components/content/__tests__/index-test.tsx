import React from 'react';
import renderer from 'react-test-renderer';
import Content from '../';

test('renders correctly', () => {
    const tree = renderer.create(<Content><></></Content>).toJSON();
    expect(tree).toMatchSnapshot();
});


