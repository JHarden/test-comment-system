import React from 'react';
import Comment from './Comment';
import renderer from 'react-test-renderer'
const mock = () => { }

const props = {
  author: 'john',
  text: 'this is a comment!',
  date: 'yesterday'
}

test('Comment component test', () => {
  const component = renderer.create(
    <Comment {...props}></Comment>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
