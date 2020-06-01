import React from 'react';
import { mount, shallow } from "enzyme";
import App from './App';

describe("Api Cron Testing", () => {

  let wrapper;
  beforeEach(() => {
    wrapper = mount(<App />);
  });

  test("render the title of the app", () => {
    expect(wrapper.find("#title").text()).toContain("HN Feed");
  });

});