import React from 'react';
import Vote from './Vote';
import renderer from 'react-test-renderer'
const mock = () => { }

const props = {
  votes: 12,
  onVote: () => {},
  hasVoted: false
}

test('Vote component test', () => {
  const component = renderer.create(
    <Vote {...props}></Vote>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
