import React from 'react';
import renderer from 'react-test-renderer';
import AddTodos from '../';

test('renders correctly', () => {
    const tree = renderer.create(
        <AddTodos
            addTodoHandler={() => console.log('add todo is working')}
        />).toJSON();
    expect(tree).toMatchSnapshot();
});


