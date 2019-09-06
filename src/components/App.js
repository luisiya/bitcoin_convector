import React from "react";
import Wallet from "./Wallet";
import Loot from "./Loot";

const App = () => {
    return (
        <div>
            <h2>☘ LOOT CHECK </h2>
            <hr/>
            <Wallet/>
            <hr/>
            <Loot/>
            <div className="coinLink"><span>Powered by  ☝<a target="_blank" href="https://www.coindesk.com/price"> CoinDesk</a></span></div>
        </div>
    )

};

export default App;