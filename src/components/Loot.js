import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchBitcoin } from "../actions/bitcoin";

export class Loot extends Component{
    componentDidMount() {
        this.props.fetchBitcoin();
    }
    getBitcoin = () => {
         const { bitcoin } = this.props;
         if (Object.keys(bitcoin).length === 0) return "";

         return this.props.balance / parseInt(bitcoin.bpi.USD.rate.replace(",", ""), 10);

    };
    render() {
        return(
            <h3 className="bitcoinBalance">Bitcoin Balance: {this.getBitcoin()}</h3>
        )
    }
}

export default connect(state => state, {fetchBitcoin} )(Loot);