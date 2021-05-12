import React from "react"
import { mount, ReactWrapper, shallow, ShallowWrapper } from "enzyme"
import UpdateButton from './UpdateButton'

describe("UpdateButton", () => {
    let component: ReactWrapper
  
  beforeEach(() => {
      let fetchData: Function = function() {
          //test function
      }
    const props = {
        fetchData: fetchData,
        gotError: false
    }
    component = mount(<UpdateButton {...props}/>)
  })
  
  it("should render a <div />", () => {
    expect(component.find("div").length).toBeGreaterThanOrEqual(1)
  })

  it("should invoke get data method when clicking update button", () => {
    const spy = jest.spyOn(component.instance(), 'getData');//TODO fix this
    component.instance().forceUpdate();
    expect(spy).toHaveBeenCalledTimes(0);
    component.find('button#updateButton').first().simulate('click');
    expect(spy).toHaveBeenCalledTimes(1);
  })
})