import Web3 from "web3";
let web3;
export function hasWeb3Provider() {
    return typeof window !== 'undefined' && typeof window.web3 !== 'undefined' && typeof window.ethereum !== 'undefined'
}
if (hasWeb3Provider()) {
    window.ethereum.request({ method: "eth_requestAccounts" });
    web3 = new Web3(window.ethereum)
}

export default web3;