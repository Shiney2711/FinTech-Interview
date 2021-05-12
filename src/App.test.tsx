import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { mount, shallow, ShallowWrapper } from 'enzyme'
import BookList from './components/book-list/BookList'
import UpdateButton from './components/update-button/UpdateButton'

describe('App', () => {
  //TODO better type
  let component: any

  beforeEach(() => {
    component = mount(<App />)
  })

  it('should mount', () => {
    expect(component.length).toBe(1)
  })

  it("should render the BookList Component", () => {
    let data = [
      {
        cost: 100,
        category: "Crime"
      },
      {
        cost: 50,
        category: "Romance"
      }
    ]
    let totals = {
      totalCost: 0,
      totalTax: 0,
      totalDiscount: 0
    }
    expect(component.containsMatchingElement(<BookList data={data} totals={totals} />)).toEqual(true)
  })

  it("should render the UpdateButton Component", () => {
    let fetchData: any = function() {
      // Some code
    };
    expect(component.containsMatchingElement(<UpdateButton fetchData={fetchData}/>)).toEqual(true)
  })
})
