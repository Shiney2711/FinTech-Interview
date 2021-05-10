import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { shallow, ShallowWrapper } from 'enzyme'
import BookList from './components/book-list/BookList'

describe('<App />', () => {
  let component: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>

  beforeEach(() => {
    component = shallow(<App />)
  })

  test('It should mount', () => {
    expect(component.length).toBe(1)
  })

  test("should render the BookList Component", () => {
    expect(component.containsMatchingElement(<BookList />)).toEqual(true)
  })
})
