import React from 'react';
import CreateArticle from './CreateArticle';
import renderer from 'react-test-renderer'
const mock = () => { }

const props = {
  author: 'john',
  text: 'this is a comment!',
  date: 'yesterday',
  onCreateArticle: () => {}
}

test('Create Article component test', () => {
  const component = renderer.create(
    <CreateArticle {...props}></CreateArticle>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
