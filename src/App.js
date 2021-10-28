import React, {Component} from "react";
import logo from './Chainalysis.jpeg';
import './App.css';





class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { BlockChainPayLoad: [], CoinbasePayLoad: {}};
  }
  

  callAPI() {
    fetch("http://localhost:2000/ExchangeA")
    .then(res => res.json())
    .then( jsondata => this.setState({BlockChainPayLoad:jsondata}))
    .catch(err => err);

    fetch("http://localhost:2000/ExchangeB")
    .then(res => res.json())
    .then( jsondata => this.setState({CoinbasePayLoad:jsondata}))
    .catch(err => err);

  }

  giveRecommendationBuyBTC(){
    if(this.state.BlockChainPayLoad.BTCbidPrice < this.state.CoinbasePayLoad.BTCbidPrice) {
      return "BlockChain"
    } else {
      return "CoinBase"
    }
  }
  giveRecommendationSellBTC(){
    if(this.state.BlockChainPayLoad.BTCaskPrice > this.state.CoinbasePayLoad.BTCaskPrice) {
      return "BlockChain"
    } else {
      return "CoinBase"
    }
  }
  giveRecommendationBuyETH(){
    if(this.state.BlockChainPayLoad.ETHbidPrice < this.state.CoinbasePayLoad.ETHbidPrice) {
      return "BlockChain"
    } else {
      return "CoinBase"
    }
  }
  giveRecommendationSellETH(){
    if(this.state.BlockChainPayLoad.ETHaskPrice > this.state.CoinbasePayLoad.ETHaskPrice) {
      return "BlockChain"
    } else {
      return "CoinBase"
    }
  }

  componentWillMount() {
      this.callAPI();

  }

  render() {
    return (
      <div className = "App"> 
        <header className="App-header">  
            <img src={logo} style={{width:'100px', height:'100px'}} alt="logo" />
        </header>
        <div style={{clear:'both'}}> 
          <h2 style={{float: "left"}}>BlockChain</h2>
          <h2 style={{float: "right"}}>Coinbase</h2>
        </div>
        <div class="row">
          <div class="column">
            <table style={{paddingLeft:'170px'}}>
              <tr>
                <th>Buy/Sell Prices</th>
                <th>BTC</th>
                <th>ETH</th>
              </tr>
              <tr>
                <td>Buy</td>
                <td>${this.state.BlockChainPayLoad.BTCbidPrice}</td>
                <td>${this.state.BlockChainPayLoad.ETHbidPrice}</td>
              </tr>
              <tr>
                <td>Sell</td>
                <td>${this.state.BlockChainPayLoad.BTCaskPrice}</td>
                <td>${this.state.BlockChainPayLoad.ETHaskPrice}</td>
              </tr>
            </table>
          </div>
          <div class="column">
            <table style={{paddingLeft:'170px'}}>
              <tr>
                <th>Buy/Sell Prices</th>
                <th>BTC</th>
                <th>ETH</th>
              </tr>
              <tr>
                <td>Buy</td>
                <td>${this.state.CoinbasePayLoad.BTCbidPrice}</td>
                <td>${this.state.CoinbasePayLoad.ETHbidPrice}</td>
              </tr>
              <tr>
                <td>Sell</td>
                <td>${this.state.CoinbasePayLoad.BTCaskPrice}</td>
                <td>${this.state.CoinbasePayLoad.ETHaskPrice}</td>
              </tr>
            </table>
          </div>
          </div>
      <div style={{padding:'50px'}}>
        <h1> For Bitcoin buyers, we recommend to buy Bitcoin from {this.giveRecommendationBuyBTC()}</h1>
        <h1> For Bitcoin Sellers, we recommend to sell to {this.giveRecommendationSellBTC()} </h1>
        <h1> For Ethereum buyers, we recommend to buy Bitcoin from {this.giveRecommendationBuyETH()} </h1>
        <h1> For Ethereum Sellers, we recommend to sell to {this.giveRecommendationSellETH()}</h1>
      </div>
      </div>
    )
  }
}

export default App;


/*
<h1 className = "App-title">Exchange A</h1>
          <p className = "App-intro"> ETH Buy Price: ${this.state.BlockChainPayLoad[0]} </p>
          <h1 className = "App-title"> Exchange B </h1>
          <p className = "App-intro"> ETH Buy Price: ${this.state.CoinbasePayLoad.BTCbidPrice} </p>
          {this.giveRecommendation()}

*/