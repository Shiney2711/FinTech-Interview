import React from "react"
import { mount, ReactWrapper, shallow, ShallowWrapper } from "enzyme"
import BookList from './BookList'

describe("BookList", () => {
  let component: ReactWrapper
  
  beforeEach(() => {
    const props = {
      data: [
        {
          Title: "Book1",
          Cost: 17.5,
          BookCategory: "Crime"
        },
        {
          Title: "Book2",
          Cost: 23.8,
          BookCategory: "Romance"
        },
        {
          Title: "Book3",
          Cost: 4,
          BookCategory: "Crime"
        }
      ],
      gotError: false
    }
    component = mount(<BookList {...props}/>)
  })
  
  it("should render a <div />", () => {
    expect(component.find("div").length).toBeGreaterThanOrEqual(1)
  })

  it("should display the correct 5% discounted price of a Crime category book", () => {
    let elements = component.find('label#categoryDiscount')
    expect(elements.at(0).text()).toEqual("$16.63")
    expect(elements.at(1).text()).toEqual("$3.80")
  })

  it("should display the correct 10% tax price", () => {
    let elements = component.find('label#taxAmount')
    expect(elements.at(0).text()).toEqual("$1.66")
    expect(elements.at(1).text()).toEqual("$2.38")
    expect(elements.at(2).text()).toEqual("$0.38")
  })

  it("should display the correct totals", () => {
    expect(component.find('td#discountTotal').text()).toEqual("-$1.08")//discount
    expect(component.find('td#taxTotal').text()).toEqual("+$4.42")//tax
    expect(component.find('td#subtotal').text()).toEqual("$48.65")//subtotal
  })
})