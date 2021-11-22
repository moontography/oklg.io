<template>
  <!-- Contact Us Start -->
  <section class="section" id="rewards">
    <div v-if="globalLoading">...</div>
    <div v-else class="container">
      <div class="row justify-content-center">
        <div class="col-lg-6">
          <div class="text-center">
            <h3 class="title mb-4">
              Claim Rewards
              <div v-if="userAddress">
                <small>{{ shortAddy }}</small>
              </div>
            </h3>
            <!-- <p class="text-muted font-size-15">
              coming soon!
            </p> -->
            <div v-if="globalError" class="alert alert-danger">
              {{ globalError.message }}
            </div>
            <div v-else-if="oklgContract">
              <div class="mb-2">
                Your share of the rewards pool
                <b>({{ poolSizeEth }} {{ nativeSymbol }})</b> is currently
              </div>
              <h4 class="mb-3">
                {{ rewardsHumanReadable }} {{ nativeSymbol }}
              </h4>
              <button
                class="btn btn-success"
                v-if="canClaimAndHasRewards"
                :disabled="!canClaimAndHasRewards"
                @click="claimRewards"
              >
                Claim Your Rewards!
              </button>
              <div v-else>
                You'll be able to claim
                {{
                  claimHumanReadableDate
                    ? `at ${claimHumanReadableDate}`
                    : "when you buy some $OKLG!"
                }}
              </div>
            </div>
            <button class="btn btn-primary" v-else @click="web3Connect">
              Connect to your Wallet
            </button>
          </div>
        </div>
      </div>
      <!-- <div class="row align-items-center">
        <div class="col-lg-7">
          <div class="custom-form mb-5 mb-lg-0">
            <div id="message"></div>
            <form name="contact-form" id="contact-form">
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="name">Name*</label>
                    <input
                      id="name"
                      type="text"
                      class="form-control"
                      placeholder="Your name..."
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="email">Email Address*</label>
                    <input
                      id="email"
                      type="email"
                      class="form-control"
                      placeholder="Your email..."
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-12">
                  <div class="form-group">
                    <label for="comments">Message*</label>
                    <textarea
                      id="comments"
                      rows="4"
                      class="form-control"
                      placeholder="Your message..."
                    ></textarea>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12">
                  <button type="button" class="btn btn-primary">
                    Send Message
                    <send-icon class="icon-size-15 ml-2 icon"></send-icon>
                  </button>
                  <div id="simple-msg"></div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="col-lg-5">
          <div class="contact-detail text-muted ml-lg-5">
            <p class>
              <mail-icon class="icon-xs icon mr-1"></mail-icon>:
              <span>support@website.com</span>
            </p>
            <p class>
              <LinkIcon class="icon-xs icon mr-1"></LinkIcon>:
              <span>www.website.com</span>
            </p>
            <p class>
              <PhoneCallIcon class="icon-xs icon mr-1"></PhoneCallIcon>:
              <span>(+001) 123 456 7890</span>
            </p>
            <p class>
              <ClockIcon class="icon-xs icon mr-1"></ClockIcon>:
              <span>9:00 AM - 6:00 PM</span>
            </p>
            <p class>
              <MapPinIcon class="icon-xs icon mr-1"></MapPinIcon>:
              <span>1644 Deer Ridge Drive Rochelle Park, NJ 07662</span>
            </p>
          </div>
        </div>
      </div> -->
    </div>
  </section>
  <!-- Contact Us End -->
</template>

<script>
import BigNumber from "bignumber.js";
import dayjs from "dayjs";
import {
  SendIcon,
  MailIcon,
  LinkIcon,
  PhoneCallIcon,
  ClockIcon,
  MapPinIcon,
} from "vue-feather-icons";
import { mapState } from "vuex";
import OKLG from "../factories/web3/OKLG";
export default {
  components: {
    SendIcon,
    MailIcon,
    LinkIcon,
    PhoneCallIcon,
    ClockIcon,
    MapPinIcon,
  },

  data() {
    return {
      canClaimRewards: false,
      calculateETHRewards: null,
      lastRewardsClaim: null,
      rewardsClaimTimeSeconds: null,
      eligibleForRewardBooster: null,
      ethRewardsBalance: null,
    };
  },

  watch: {
    async globalLoading(isLoading) {
      if (isLoading) return;
      await this.web3Connect();
    },
  },

  computed: {
    ...mapState({
      globalError: (state) => state.globalError,
      globalLoading: (state) => state.globalLoading,
      isConnected: (state) => state.web3.isConnected,
      oklgContract: (state, getters) =>
        getters.activeNetwork &&
        getters.activeNetwork.contracts.oklg &&
        OKLG(state.web3.instance, getters.activeNetwork.contracts.oklg),
      nativeSymbol: (_, getters) =>
        getters.activeNetwork.native_currency.symbol,
      userAddress: (state) => state.web3.address,
    }),

    shortAddy() {
      const f3 = this.userAddress.slice(0, 6);
      const l3 = this.userAddress.slice(-4);
      return `${f3}...${l3}`;
    },

    canClaimAndHasRewards() {
      return this.canClaimRewards && this.hasRewardsToClaim;
    },

    claimHumanReadableDate() {
      return this.lastRewardsClaim != 0
        ? dayjs(new BigNumber(this.lastRewardsClaim).times(1000).toNumber())
            .add(this.rewardsClaimTimeSeconds, "seconds")
            // .format("YYYY-MM-DD h:mm a")
            .format("YYYY-MM-DD HH:mm")
        : null;
    },

    hasRewardsToClaim() {
      return new BigNumber(this.calculateETHRewards).gt(0);
    },

    rewardsHumanReadable() {
      return new BigNumber(this.calculateETHRewards || 0)
        .div(new BigNumber(10).pow(18))
        .toFormat();
    },

    poolSizeEth() {
      return new BigNumber(this.ethRewardsBalance || 0)
        .div(new BigNumber(10).pow(18))
        .toFormat(4);
    },
  },

  methods: {
    async setConnectedState() {
      try {
        const [
          canClaimRewards,
          calculateETHRewards,
          lastRewardsClaim,
          rewardsClaimTimeSeconds,
          eligibleForRewardBooster,
          ethRewardsBalance,
        ] = await Promise.all([
          this.oklgContract.methods.canClaimRewards(this.userAddress).call(),
          this.oklgContract.methods
            .calculateETHRewards(this.userAddress)
            .call(),
          this.oklgContract.methods
            .getLastETHRewardsClaim(this.userAddress)
            .call(),
          this.oklgContract.methods.rewardsClaimTimeSeconds().call(),
          this.oklgContract.methods
            .eligibleForRewardBooster(this.userAddress)
            .call(),
          this.oklgContract.methods.ethRewardsBalance().call(),
        ]);
        this.canClaimRewards = canClaimRewards;
        this.calculateETHRewards = calculateETHRewards;
        this.lastRewardsClaim = lastRewardsClaim;
        this.rewardsClaimTimeSeconds = rewardsClaimTimeSeconds;
        this.eligibleForRewardBooster = eligibleForRewardBooster;
        this.ethRewardsBalance = ethRewardsBalance;
      } catch (err) {
        console.error(`Error fetching reward info`);
        this.$toast.error(`There was an error connecting to your wallet.`);
      }
    },

    async claimRewards() {
      try {
        await this.oklgContract.methods
          .claimETHRewards()
          .send({ from: this.userAddress });
        await this.setConnectedState();
      } catch (err) {
        console.error(`Error claiming`, err);
        this.$toast.error(`There was an error claiming your rewards.`);
      }
    },

    async web3Connect() {
      try {
        await this.$store.dispatch("init");
        await this.setConnectedState();
      } catch (err) {
        console.error("error connecting to web3", err);
        // this.$toast.error(`There was an error connecting to your wallet.`);
      }
    },
  },

  async created() {
    await this.web3Connect();
  },
};
</script>
