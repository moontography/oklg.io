import BigNumber from "bignumber.js";
import Web3Modal from "../../factories/Web3Modal";
import ERC20 from "../../factories/web3/ERC20";

export default {
  async init({ commit, dispatch, getters, state }, reset = false) {
    try {
      commit("SET_INIT_LOADING", true);
      commit("SET_GLOBAL_ERROR", null);

      // an error with this API will break the app if we await, so don't here
      // dispatch("getMtgyPriceUsd");

      // await ExponentialBackoff(async () => {
      //   await Promise.all([
      //     dispatch("getMTGYCirculatingSupply"),
      //     dispatch("getMTGYTotalSupply"),
      //     dispatch("getMtgyTokenInfo"),
      //     dispatch("getMtgyTokenChart"),
      //     dispatch("getCurrentBlock"),
      //   ]);
      // });

      if (!window.web3) {
        return commit(
          "SET_GLOBAL_ERROR",
          new Error(
            "Make sure you using a web3 enabled browser like Metamask, TrustWallet etc."
          )
        );
      }
      if (state.web3 && state.web3.isConnected && !reset) return;

      // Remove loader to connect wallet
      commit("SET_INIT_LOADING", false);

      const { provider, web3 } = await Web3Modal.connect();
      commit("SET_WEB3_PROVIDER", provider);
      commit("SET_WEB3_INSTANCE", web3);
      commit("SET_WEB3_IS_CONNECTED", true);

      // Add loader back
      commit("SET_INIT_LOADING", true);

      const resetConnection = async () => {
        dispatch("disconnect");
        // const currentRoute = state.route;
        // router.push("/redirecting");
        // router.push(currentRoute);
        await dispatch("init", true);
      };
      Web3Modal.bindProviderEvents({
        accountsChanged: resetConnection,
        chainChanged: resetConnection,
        disconnect: () => dispatch("disconnect"),
      });

      commit("SET_WEB3_CHAIN_ID", await web3.eth.getChainId());

      if (!getters.activeNetwork) {
        throw new Error(
          `The selected network is not supported. Please connect to a supported network, ${state.eth.networks
            .map((n) => n.name)
            .join(", ")}`
        );
      }

      const [accountAddy] = await web3.eth.getAccounts();
      commit("SET_WEB3_USER_ADDRESS", accountAddy);
      // await dispatch("refreshable");
    } catch (err) {
      // toast.error(err.message || err);
      commit("SET_GLOBAL_ERROR", new Error(err));
    } finally {
      commit("SET_INIT_LOADING", false);
    }
  },

  async getUserBalance({ commit, dispatch, getters }) {
    const { userBalance, decimals } = await dispatch(
      "getErc20TokenInfo",
      getters.activeNetwork.contracts.mtgy
    );
    commit(
      "SET_WEB3_USER_BALANCE",
      new BigNumber(userBalance).div(new BigNumber(10).pow(decimals)).toString()
    );
  },

  // async refreshable({ dispatch, state }) {
  //   if (state.refreshableInterval) return;

  //   const go = async () => {
  //     try {
  //       // an error with this API will break the app if we await, so don't here
  //       dispatch("getMtgyPriceUsd");

  //       await Promise.all([
  //         dispatch("getUserBalance"),
  //         dispatch("getMTGYCirculatingSupply"),
  //         dispatch("getMTGYTotalSupply"),
  //         dispatch("getMtgyTokenChart"),
  //         dispatch("getCurrentBlock"),
  //       ]);
  //     } catch (err) {
  //       console.error(`Error refreshing data`, err);
  //     }
  //   };
  //   state.refreshableInterval = setInterval(go, 10000);
  //   await go();
  // },

  disconnect({ commit }) {
    commit("SET_WEB3_PROVIDER", null);
    commit("SET_WEB3_INSTANCE", null);
    commit("SET_WEB3_IS_CONNECTED", false);
    commit("SET_WEB3_CHAIN_ID", null);
    commit("SET_WEB3_USER_ADDRESS", "");

    // Clear cached provider to be able to switch between providers when disconnecting wallet
    Web3Modal.clearCachedProvider();
  },

  async getCurrentBlock({ state, commit }) {
    const web3 = state.web3.instance;
    if (!web3) return;
    const block = await web3.eth.getBlockNumber();
    commit("SET_CURRENT_BLOCK", block);
  },

  async getErc20TokenInfo({ state }, tokenAddy) {
    const userAddy = state.web3.address;
    const contract = ERC20(state.web3.instance, tokenAddy);
    const [name, symbol, decimals, userBalance] = await Promise.all([
      contract.methods.name().call(),
      contract.methods.symbol().call(),
      contract.methods.decimals().call(),
      contract.methods.balanceOf(userAddy).call(),
    ]);
    return {
      address: tokenAddy,
      name,
      symbol,
      decimals,
      userBalance,
    };
  },

  async getErc721TokenInfo({ state }, tokenAddy) {
    const userAddy = state.web3.address;
    const contract = ERC721(state.web3.instance, tokenAddy);
    const [name, symbol, userBalance] = await Promise.all([
      contract.methods.name().call(),
      contract.methods.symbol().call(),
      contract.methods.balanceOf(userAddy).call(),
    ]);
    return {
      address: tokenAddy,
      name,
      symbol,
      userBalance,
    };
  },
};
