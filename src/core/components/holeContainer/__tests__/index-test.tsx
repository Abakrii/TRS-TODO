import React from 'react';
import renderer from 'react-test-renderer';
import HoleContainer from '../';

test('renders correctly', () => {
    const tree = renderer.create(<HoleContainer><></></HoleContainer>).toJSON();
    expect(tree).toMatchSnapshot();
});


