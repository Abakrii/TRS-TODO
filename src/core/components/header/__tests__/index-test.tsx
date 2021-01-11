import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../';

test('renders correctly', () => {
    const tree = renderer.create(<Header headerTitle="test header title" />).toJSON();
    expect(tree).toMatchSnapshot();
});


