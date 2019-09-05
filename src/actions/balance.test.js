import * as constants from "./constants";
import * as actions from "./balance";

it("Action to set a balance", () => {
    const balance = 0;
    const expectedAction = { type: constants.SET_BALANCE, balance};

    expect(actions.setBalance(balance)).toEqual(expectedAction);
});

it("Action to set deposit", () => {
    const deposit = 10;
    const expectedAction = { type: constants.DEPOSIT, deposit};

    expect(actions.deposit(deposit)).toEqual(expectedAction);
});

it("Action to withdraw from balance", () => {
    const withdraw = 10;
    const expectedAction = { type: constants.WITHDRAW, withdraw};

    expect(actions.withdraw(withdraw)).toEqual(expectedAction);
});