<script>
import {
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  LinkedinIcon,
} from "vue-feather-icons";
export default {
  components: {
    FacebookIcon,
    TwitterIcon,
    InstagramIcon,
    LinkedinIcon,
  },
};
</script>

<template>
  <div>
    <!-- Footer Start -->
    <!-- <section
      class="footer"
      style="background-image: url(assets/images/footer-bg.png)"
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <div class="mb-5">
              <img src="@/assets/images/logo-light.png" alt class height="24" />
              <p class="text-white-50 my-4 font-size-15">
                Cras ultricies mi eu turpis sit hendrerit fringilla vestibulum
                ante ipsum primis in faucibus ultrices posuere cubilia.
              </p>
              <ul class="list-inline footer-social-icon-content">
                <li class="list-inline-item mr-4">
                  <a href="javascript: void(0);" class="footer-social-icon">
                    <facebook-icon></facebook-icon>
                  </a>
                </li>
                <li class="list-inline-item mr-4">
                  <a href="javascript: void(0);" class="footer-social-icon">
                    <twitter-icon></twitter-icon>
                  </a>
                </li>
                <li class="list-inline-item mr-4">
                  <a href="javascript: void(0);" class="footer-social-icon">
                    <instagram-icon></instagram-icon>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="javascript: void(0);" class="footer-social-icon">
                    <linkedin-icon></linkedin-icon>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-7 offset-lg-1">
            <div class="row">
              <div class="col-md-4">
                <h6 class="text-white text-uppercase mb-4">About Us</h6>
                <ul class="list-unstyled footer-sub-menu">
                  <li>
                    <a href="javascript: void(0);" class="footer-link">Works</a>
                  </li>
                  <li>
                    <a href="javascript: void(0);" class="footer-link"
                      >Strategy</a
                    >
                  </li>
                  <li>
                    <a href="javascript: void(0);" class="footer-link"
                      >Releases</a
                    >
                  </li>
                  <li>
                    <a href="javascript: void(0);" class="footer-link">Press</a>
                  </li>
                  <li>
                    <a href="javascript: void(0);" class="footer-link"
                      >Mission</a
                    >
                  </li>
                </ul>
              </div>
              <div class="col-md-4">
                <h6 class="text-white text-uppercase mb-3">Customers</h6>
                <ul class="list-unstyled footer-sub-menu">
                  <li>
                    <a href="javascript: void(0);" class="footer-link"
                      >Tranding</a
                    >
                  </li>
                  <li>
                    <a href="javascript: void(0);" class="footer-link"
                      >Popular</a
                    >
                  </li>
                  <li>
                    <a href="javascript: void(0);" class="footer-link"
                      >Customers</a
                    >
                  </li>
                  <li>
                    <a href="javascript: void(0);" class="footer-link"
                      >Features</a
                    >
                  </li>
                </ul>
              </div>
              <div class="col-md-4">
                <h6 class="text-white text-uppercase mb-3">Support</h6>
                <ul class="list-unstyled footer-sub-menu">
                  <li>
                    <a href="javascript: void(0);" class="footer-link"
                      >Developers</a
                    >
                  </li>
                  <li>
                    <a href="javascript: void(0);" class="footer-link"
                      >Support</a
                    >
                  </li>
                  <li>
                    <a href="javascript: void(0);" class="footer-link"
                      >Customer Service</a
                    >
                  </li>
                  <li>
                    <a href="javascript: void(0);" class="footer-link"
                      >Get Started</a
                    >
                  </li>
                  <li>
                    <a href="javascript: void(0);" class="footer-link">Guide</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> -->
    <div class="footer-alt py-3">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="text-center">
              <p class="text-white-50 font-size-15 mb-0">
                {{ new Date().getFullYear() }} © oklg
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Footer End -->
  </div>
</template>
