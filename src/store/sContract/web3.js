import Web3 from "web3";
let web3;
if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    web3 = new Web3(window.web3.currentProvider)
}
else {
    web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/v3/0836c0ac05454f5a95a693d55adbe438'))
}

export default web3;