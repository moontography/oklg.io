<script>
import Navbar from "@/components/navbar";
import Tokenomics from "@/components/tokenomics";
import Features from "@/components/features";
import Roadmap from "@/components/roadmap";
import Blog from "@/components/blog";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

/**
 * Index-6
 */
export default {
  components: { Navbar, Tokenomics, Features, Roadmap, Blog, Contact, Footer },
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
            <div class="col-lg-8">
              <div class="text-center">
                <h1 class="text-white hero-6-title mb-4 line-height-1_4">
                  ok.let's.go.
                </h1>
                <p class="text-white-50 w-75 mx-auto font-size-15">
                  culture, meme, community, utility
                </p>
                <div class="mt-4 text-white-50">
                  <button
                    type="button"
                    class="mr-1 btn rounded-pill btn-primary ml-2 mt-4 mt-sm-0"
                  >
                    <img
                      src="@/assets/images/uniswap-white.png"
                      class="img-fluid mr-2"
                      style="max-height: 35px"
                    />
                    buy on uniswap
                  </button>
                  <button
                    type="button"
                    class="btn rounded-pill btn-primary ml-2 mt-4 mt-sm-0"
                  >
                    <img
                      src="@/assets/images/pancakeswap-white.png"
                      class="img-fluid mr-2"
                      style="max-height: 35px"
                    />
                    buy on pancakeswap
                  </button>
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
      <Contact />
      <Footer />
    </div>
  </div>
</template>
