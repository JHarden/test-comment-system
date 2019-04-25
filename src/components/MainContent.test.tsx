import React from 'react';
import MainContent from './MainContent';
import renderer from 'react-test-renderer'
const mock = () => { }

const props = {
  userName: 'john',
  articles: [],
  onGetArticles: () => {},
  isCreatingArticle: false,
  onClickArticleCreate: () => {}

}

test('MainContent component test', () => {
  const component = renderer.create(
    <MainContent {...props}></MainContent>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
