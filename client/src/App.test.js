import React from 'react';
import { mount, shallow } from "enzyme";
import App from './App';
import Articles from './components/articles/Articles';
import Header from './components/layout/Header';

const listArticles = () => {
  let articlesToTest = [{
    articleId: 1,
    id: 1,
    title: "test title 1",
    author: "alexis",
    url: "",
    created: "1996-10-15T00:05:32.000Z"
  }, {
    articleId: 2,
    id: 2,
    title: "test title 2",
    author: "juan",
    url: "",
    created: "2020-06-01T00:05:32.000Z"
  } ,{
    articleId: 3,
    id: 3,
    title: "test title 3",
    author: "maria",
    url: "",
    created: "2020-05-31T00:05:32.000Z"
  }];

  return articlesToTest;
}

describe("Api Cron Testing", () => {

  //let wrapper;
  beforeEach(() => {
    //wrapper = mount(<App />);
  });

  test("render app", () => {
    mount(<App />);
  });

  test("render the title of the app", () => {
    let headerWrapper = shallow(<Header/>)
    expect(headerWrapper.find("#title").text()).toContain("HN Feed");
  });

  test("show when there are no articles", () => {
    let articlesWrapper = mount(<Articles articles={[]} />);
    expect(articlesWrapper.find(".article")).toHaveLength(0);
    expect(articlesWrapper.find("#no-articles").last().text()).toContain("Articles not found! :(");
  });

  test("show list of articles", () => {
    let articlesToTest = listArticles();
    let articlesWrapper = mount(<Articles articles={articlesToTest} />);
    expect(articlesWrapper.find(".article")).toHaveLength(3);
  });

  test("simulate delete article", () => {
    let articlesToTest = listArticles();
    let articlesWrapper = mount(<Articles articles={articlesToTest} />);
    //console.log(articlesWrapper.debug());
    expect(articlesWrapper.find(".article")).toHaveLength(3);
    articlesWrapper.find("#btnDelete").first().simulate("click");
    expect(articlesWrapper.find(".article")).toHaveLength(2);
  }); 

});