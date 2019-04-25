import React from 'react';
import Login from './Login';
import renderer from 'react-test-renderer'
const mock = () => { }

const props = {
  userName: 'john',
  onLogin: () => {}
}

test('Login component test', () => {
  const component = renderer.create(
    <Login {...props}></Login>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
