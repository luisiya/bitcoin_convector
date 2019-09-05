import React from "react";
import { mount, shallow } from "enzyme";
import { Loot } from "./Loot";

describe("Loot", () => {
    const mockFetchbitcoin = jest.fn();
    let props = { balance: 10, bitcoin: {}};
    let loot = shallow (<Loot {...props}/>);

    it("Loot renders correctly", () => {
       expect(loot).toMatchSnapshot();
    });

    describe("When Loot mounted", () => {
        beforeEach(() => {
            props.fetchBitcoin = mockFetchbitcoin;
            loot = mount(<Loot {...props}/>);
        });
        it("Dispatches fetchBitcoin method from props", () => {
            expect(mockFetchbitcoin).toHaveBeenCalled();
        });
    });

    describe('When thre are valid bitcoin props', function () {
        beforeEach(() => {
            props = { balance: 10, bitcoin: {bpi: {USD: {rate: "1,000"}}}};
            loot = shallow (<Loot {...props}/>);
        });

            it('should displays correct bitcoin value', function () {
                expect(loot.find(".bitcoinBalance").text()).toEqual("Bitcoin Balance: 0.01");
            });

    });
});