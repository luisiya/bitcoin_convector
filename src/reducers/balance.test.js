import balanceReducer from "./balance";
import balanceReducer2 from "./balance";
import * as constants from "../actions/constants";

describe("balanceReducer", () => {
    describe("When initializing", () => {
        const balance = 10;
        it("set a balance", () => {
            expect(balanceReducer(undefined, { type: constants.SET_BALANCE, balance })).toEqual(balance);
        });
        describe("when re-initializing", () => {
            it('should reads balance from cookies', function () {
                expect(balanceReducer2(undefined, {})).toEqual(balance);
            });
        });

    });

    it("deposit for balance", () => {
        const deposit = 10;
        const initialState = 5;

        expect(balanceReducer(initialState, { type: constants.DEPOSIT, deposit})).toEqual(initialState + deposit);
    });

    it("withdraw from balance", () => {
        const withdraw = 10;
        const initialState = 20;

        expect(balanceReducer(initialState, {type: constants.WITHDRAW, withdraw})).toEqual(initialState - withdraw);
    });
});