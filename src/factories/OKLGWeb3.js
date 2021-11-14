import assert from "assert";
import Web3 from "web3";
import OKLG from "./web3/OKLG";

export default {
  oklg: null,
  web3: null,

  // https://medium.com/valist/how-to-connect-web3-js-to-metamask-in-2020-fee2b2edf58a
  async connect() {
    if (this.web3) return true;
    if (window.ethereum) {
      await window.ethereum.send("eth_requestAccounts");
      this.web3 = window.web3 = new Web3(window.ethereum);
      return true;
    }
    return false;
  },

  setOklg(oklgContract) {
    return (this.oklg = OKLG(this.web3, oklgContract));
  },

  async connectAndThrowIfError() {
    await this.connect();
    assert(this.web3 && this.oklg, "not connected");
  },

  async totalSupply() {
    await this.connectAndThrowIfError();
    return await this.oklg.methods.totalSupply().call();
  },
};
