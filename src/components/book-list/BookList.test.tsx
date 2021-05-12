import React from "react"
import { mount, shallow, ShallowWrapper } from "enzyme"
import BookList from './BookList'

describe("BookList", () => {
  let component: any
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

  beforeEach(() => (component = mount(<BookList data={data} totals={totals} />)))

  it("should render a <div />", () => {
    expect(component.find("div").length).toBeGreaterThanOrEqual(1)
  })
})