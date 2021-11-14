<script>
import Navbar from "@/components/navbar";
import Tokenomics from "@/components/tokenomics";
import Features from "@/components/features";
import Roadmap from "@/components/roadmap";
import Blog from "@/components/blog";
import Rewards from "@/components/rewards";
import Footer from "@/components/footer";

/**
 * Index-6
 */
export default {
  components: {
    Navbar,
    Tokenomics,
    Features,
    Roadmap,
    Blog,
    Rewards,
    Footer,
  },
  data() {
    return {
      navbarcolor: true,
    };
  },
};
</script>

<template>
  <div>
    <Navbar :navbarcolor="this.navbarcolor" />
    <div v-scroll-spy>
      <!-- Hero Start -->
      <section class="hero-6-bg position-relative" id="home">
        <div class="bg-overlay"></div>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-10">
              <div class="text-center">
                <h1 class="text-white hero-6-title mb-3 line-height-1_4">
                  ok.let's.go.
                </h1>
                <p class="text-white-50 w-75 mb-5 mx-auto font-size-15">
                  culture, meme, community, utility
                </p>
                <div class="mt-4 mb-5 text-white-50">
                  <a
                    href="https://app.uniswap.org/#/swap?outputCurrency=0x5dbb9f64cd96e2dbbca58d14863d615b67b42f2e"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="mr-1 btn rounded-pill btn-primary ml-2 mt-4 mt-sm-0"
                  >
                    <img
                      src="@/assets/images/uniswap-white.png"
                      class="img-fluid mr-2"
                      style="max-height: 35px"
                    />
                    buy on uniswap (ERC-20 $OKLG)
                  </a>
                  <a
                    href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x55e8b37a3c43b049dedf56c77f462db095108651"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn rounded-pill btn-primary ml-2 mt-4 mt-sm-0"
                  >
                    <img
                      src="@/assets/images/pancakeswap-white.png"
                      class="img-fluid mr-2"
                      style="max-height: 35px"
                    />
                    buy on pancakeswap (BEP-20 $OKLG)
                  </a>
                </div>
                <div class="links text-center d-flex justify-content-center">
                  <span>
                    <a
                      class="link"
                      href="https://twitter.com/oklgio"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        class="link_logo"
                        src="@/assets/images/icons/twitter.svg"
                      />
                    </a>
                  </span>
                  <span class="ml-3">
                    <a
                      class="link"
                      href="https://t.me/ok_lg"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        class="link_logo"
                        src="@/assets/images/icons/telegram.svg"
                      />
                    </a>
                  </span>
                  <span class="ml-3">
                    <a
                      class="link"
                      href="https://etherscan.io/token/0x5dbb9f64cd96e2dbbca58d14863d615b67b42f2e"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        class="link_logo"
                        src="@/assets/images/icons/etherscan.svg"
                      />
                    </a>
                  </span>
                  <span class="ml-3">
                    <a
                      class="link"
                      href="https://www.bscscan.com/token/0x55e8b37a3c43b049dedf56c77f462db095108651"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        class="link_logo"
                        src="@/assets/images/icons/bscscan.svg"
                      />
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="row justify-content-center">
            <div class="col-lg-8">
              <div class="text-center Subcribe-form mt-5">
                <form action="#">
                  <input type="text" placeholder="Enter your Email..." />
                  <button
                    type="submit"
                    class="btn rounded-pill btn-primary ml-2 mt-4 mt-sm-0"
                  >
                    SubCribe
                  </button>
                </form>
              </div>
            </div>
          </div> -->
        </div>
      </section>
      <!-- Hero End -->
      <Features />
      <Tokenomics />
      <Roadmap />
      <!-- <Blog /> -->
      <Rewards />
      <Footer />
    </div>
  </div>
</template>

<style lang="scss">
.links {
  a {
    background: #fff;
    border-radius: 50%;
    padding: 2px;
    overflow: hidden;
  }

  .link {
    max-width: none;
    height: 36px;
    width: 36px;
    display: block;
  }

  .link_logo {
    width: 100%;
    max-width: none;
    height: 100%;
  }
}
</style>
