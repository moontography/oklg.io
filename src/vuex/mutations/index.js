export default {
  SET_GLOBAL_ERROR(state, error) {
    state.globalError = error;
  },

  SET_GLOBAL_LOADING(state, isLoading) {
    state.globalLoading = isLoading;
  },

  SET_INIT_LOADING(state, isLoading) {
    state.initLoading = isLoading;
  },

  SET_WEB3_IS_CONNECTED(state, isConnected) {
    state.web3.isConnected = isConnected;
  },

  SET_WEB3_CHAIN_ID(state, chainId) {
    state.web3.chainId = chainId;
  },

  SET_WEB3_INSTANCE(state, web3) {
    state.web3.instance = web3;
  },

  SET_WEB3_PROVIDER(state, provider) {
    state.web3.provider = provider;
  },

  SET_WEB3_USER_ADDRESS(state, addy) {
    state.web3.address = addy;
  },

  SET_WEB3_USER_BALANCE(state, balance) {
    state.web3.userBalance = balance;
  },

  SET_OKLG_INST(state, inst) {
    state.oklgInst = inst;
  },
};
