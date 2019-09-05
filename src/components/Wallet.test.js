import React from "react";
import { shallow } from "enzyme";
import { Wallet } from "./Wallet";

describe("Wallet", () => {
    const mockDeposit = jest.fn();
    const mockWithdraw = jest.fn();
    const props = { balance: 20, deposit: mockDeposit, withdraw: mockWithdraw };
    const wallet = shallow(<Wallet {...props} />);

    it("Wallet renders correctly", () => {
        expect(wallet).toMatchSnapshot();
    });
    it("Correctly display balance from props", () => {
        expect(wallet.find(".balance").text()).toEqual("Wallet Balance : 20")
    });
    it("Check of input for balance existing", () => {
        expect(wallet.find(".input-wallet").exists()).toEqual(true);
    });
    describe("When user type some text to input", () => {
        const userBalance = 25;

        beforeEach(() => {
            wallet.find(".input-wallet").simulate("change", {target: {value: userBalance}});
        });

        it("Update balance in state and convert it", () => {
            expect(wallet.state().balance).toEqual(parseInt(userBalance, 10));
        });
        describe("User wants to make deposit", () => {
            beforeEach(() => wallet.find(".btn-deposit").simulate("click"));

            it("dispatches deposit from props", () => {
                expect(mockDeposit).toHaveBeenCalledWith(parseInt(userBalance, 10));
            });
        });
        describe('User wants to withdraw from deposit', function () {
            beforeEach(() => wallet.find(".btn-withdraw").simulate("click"));

            it("dispatches withdraw from props", () => {
                expect(mockWithdraw).toHaveBeenCalledWith(parseInt(userBalance, 10));
            });
        });

    });

});