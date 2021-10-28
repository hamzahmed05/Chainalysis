# ChainAlysis
A webpage that shows prices of Bitcoin and Ethereum from two(Blockchain and Coinbase) service providers. 
It also gives recommendations on where to buy and where to sell. 

## Technology
### React and Express
The project uses React for the front and Express for the backend. 
Because Express uses javascript for both backend and front-end development, I find it avdantageous to use Express.
React allows for simplicity and works well with Express. 



### REST API
For Blockchain, the dataset extracted contains two arrays: bids and asks. Each arrays consisting of orders objects that include prices, quantities, and num. 
For simplicity, the BTC and ETH prices were extracted from the first positions of the bid and ask arrays.

For Coinbase, the dataset extracted simply contained the sell price for the given currency symbol. 


## Setup
Clone or download the repo
Make sure to have npm installed

`cd ChainAlysis`

`npm install`


## Running The App
To start the Express server,

`npm run start-backend`

To start React,

`npm start`
## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

`









