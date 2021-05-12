import React from "react"
import { shallow, ShallowWrapper } from "enzyme"
import UpdateButton from './UpdateButton'

describe("UpdateButton", () => {
    let component: any
    let fetchData: any = function() {
        // Some code
    };
    beforeEach(() => (component = shallow(<UpdateButton fetchData={fetchData} />)));

    it("should render a <div />", () => {
        expect(component.find("div").length).toBeGreaterThanOrEqual(1)
    })

    it('invoke fetch method on button press', () => {
        const getData = jest.spyOn(UpdateButton.prototype, 'getData');
        component.find('button').simulate('click');
        component.update();
        expect(getData).toHaveBeenCalled();
    });
})