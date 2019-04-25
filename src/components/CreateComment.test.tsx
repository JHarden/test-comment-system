import React from 'react';
import CreateComment from './CreateComment';
import renderer from 'react-test-renderer'
const mock = () => { }

const props = {
  author: 'john',
  text: 'this is a comment!',
  date: 'yesterday',
  onShowComment: () => {}
}

test('Create Comment component test', () => {
  const component = renderer.create(
    <CreateComment {...props}></CreateComment>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
