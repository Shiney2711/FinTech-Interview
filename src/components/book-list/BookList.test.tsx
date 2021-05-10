import React from "react"
import { shallow, ShallowWrapper } from "enzyme"
import BookList from './BookList'

describe("Timer", () => {
  let container: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>

  beforeEach(() => (container = shallow(<BookList />)))

  it("should render a <div />", () => {
    expect(container.find("div").length).toBeGreaterThanOrEqual(1)
  })
})