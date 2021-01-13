import React from 'react';
import renderer from 'react-test-renderer';
import TodoItem from '../';

test('renders correctly', () => {
    const tree = renderer.create(<TodoItem
        savedTodoKey={[{ id: "1", title: "totdo title" }]}
        onSave={() => console.log('on save is working')}
        item={{ id: "1", title: "text item text", }}
        onDelete={() => console.log('on delete')}
    />).toJSON();
    expect(tree).toMatchSnapshot();
});


