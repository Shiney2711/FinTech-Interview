import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { mount, ReactWrapper, shallow, ShallowWrapper } from 'enzyme'
import BookList from './components/book-list/BookList'
import UpdateButton from './components/update-button/UpdateButton'

describe('App', () => {
  //TODO better type
  let component: ReactWrapper

  beforeEach(() => {
    component = mount(<App/>)
  })

  it('should mount', () => {
    expect(component.length).toBe(1)
  })

  it("should render the BookList Component", () => {
    expect(component.find('BookList')).toHaveLength(1);
  })

  it("should render the UpdateButton Component", () => {
    expect(component.find('UpdateButton')).toHaveLength(1);
  })
})
