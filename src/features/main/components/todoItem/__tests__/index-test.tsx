import React from 'react';
import renderer from 'react-test-renderer';
import TodoItem from '../';

test('renders correctly', () => {
    const tree = renderer.create(<TodoItem item={{ title: "text item text", key: "1" }} onDelete={() => console.log('on delete')} />).toJSON();
    expect(tree).toMatchSnapshot();
});


