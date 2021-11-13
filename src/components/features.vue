<script>
import hljs from "highlightjs";
import {
  LayoutIcon,
  LifeBuoyIcon,
  ServerIcon,
  RssIcon,
} from "vue-feather-icons";
export default {
  components: { LayoutIcon, LifeBuoyIcon, ServerIcon, RssIcon },
  created() {
    console.log("HL", hljs);
    hljs.highlightAll();
  },
};
</script>

<template>
  <div>
    <!-- Features Start -->
    <section class="section bg-light feather-bg-img" id="features">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-6">
            <div class="text-center mb-5">
              <h3 class="title mb-3">
                Cutting Edge Features
              </h3>
              <p class="text-muted font-size-15">
                We implemented brand new, never seen before dynamic logic in our
                tokenomics to up the game while supporting our fellow crypto
                communities.
              </p>
            </div>
          </div>
        </div>

        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="mb-4 mb-lg-0">
              <img
                src="@/assets/images/monkey.png"
                alt
                class="img-fluid d-block mx-auto"
              />
            </div>
          </div>

          <div class="col-lg-5 offset-lg-1">
            <p class="font-weight-medium text-uppercase mb-2">
              <i
                class="mdi mdi-chart-bubble h2 text-primary mr-1 align-middle"
              ></i>
              Creative Features
            </p>
            <h3 class="font-weight-semibold line-height-1_4 mb-4">
              Buy back &amp; burn for frens
            </h3>
            <p class="text-muted font-size-15 mb-4">
              By default our 2% buy back and burn fee will do just that for
              $OKLG. But it doesn't stop there. We can change the token we buy
              back and burn! New and upcoming project that we as a community
              want to support? Let's temporarily support them by buying back
              their token and burn supply to help push some green candles!
            </p>
            <!-- <p class="text-muted mb-2">
              <layout-icon class="icon-xs mr-1"></layout-icon>Donec pede justo
              fringilla vel nec.
            </p>
            <p class="text-muted">
              <life-buoy-icon class="icon-xs mr-1"></life-buoy-icon>Cras
              ultricies mi eu turpis hendrerit fringilla.
            </p>
            <div class="mt-5">
              <a href="javascript: void(0);" class="btn btn-primary mr-2"
                >Read More</a
              >
              <a href="javascript: void(0);" class="btn btn-soft-primary"
                >Buy Now</a
              >
            </div> -->
          </div>
        </div>
      </div>
    </section>

    <section class="section feather-bg-img">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-5">
            <p class="font-weight-medium text-uppercase mb-2">
              <i
                class="mdi mdi-chart-bubble h2 text-primary mr-1 align-middle"
              ></i>
              Creative Features
            </p>
            <h3 class="font-weight-semibold line-height-1_4 mb-4">
              Elevated rewards &amp; fee exclusion
            </h3>
            <!-- <h3 class="font-weight-semibold line-height-1_4 mb-4">Build <b>community</b> & <b>conversion</b> with our suite of <b>social tool</b></h3> -->
            <p class="text-muted font-size-15 mb-4">
              By creating a smart contract that implements the following
              interface, we can dynamically elevate your native rewards &amp;
              exclude wallets from fees. Holding a minimum balance of another
              token? Get elevated rewards. We will poll and periodically update
              this logic and create a formal governance process in the future!
            </p>
            <!-- <p class="text-muted mb-2">
              <server-icon class="icon-xs mr-1"></server-icon>Donec pede justo
              fringilla vel nec.
            </p>
            <p class="text-muted">
              <rss-icon class="icon-xs mr-1"></rss-icon>Cras ultricies mi eu
              turpis hendrerit fringilla.
            </p>
            <div class="mt-5">
              <a href="javascript: void(0);" class="btn btn-primary mr-2"
                >Read More</a
              >
              <a href="javascript: void(0);" class="btn btn-soft-primary"
                >Buy Now</a
              >
            </div> -->
          </div>
          <div class="col-lg-6 offset-lg-1">
            <div class="mt-4 mt-lg-0">
              <div class="card">
                <div class="card-body">
                  <!-- <img
                src="@/assets/images/features-img-1.png"
                alt
                class="img-fluid d-block mx-auto"
              /> -->
                  <pre class="m-0">
                <code class="solidity">
interface IConditional {
  function passesTest(address wallet) external view returns (bool);
}
                  </code>
                </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Features End -->
  </div>
</template>
