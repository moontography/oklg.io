<script>
import {
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  LinkedinIcon,
  ArrowRightCircleIcon,
} from "vue-feather-icons";

export default {
  props: {
    navbarcolor: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    FacebookIcon,
    TwitterIcon,
    InstagramIcon,
    LinkedinIcon,
    ArrowRightCircleIcon,
  },
  mounted: () => {
    window.onscroll = function() {
      onwindowScroll();
    };
    var navbar = document.getElementById("navbar");
    function onwindowScroll() {
      if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
      ) {
        navbar.classList.add("nav-sticky");
      } else {
        navbar.classList.remove("nav-sticky");
      }
    }
  },
  methods: {
    /**
     * Toggle menu
     */
    toggleMenu() {
      document.getElementById("navbarCollapse").classList.toggle("show");
    },
  },
};
</script>

<template>
  <!--Navbar Start-->
  <nav
    class="navbar navbar-expand-lg fixed-top navbar-custom sticky sticky-dark"
    id="navbar"
    :class="{ 'navbar-light': navbarcolor === true }"
  >
    <div class="container">
      <!-- LOGO -->
      <a class="navbar-brand logo" href="/">
        <img
          src="@/assets/images/oklg_mtgy_dark.png"
          alt
          class="logo-dark"
          height="24"
        />
        <img
          src="@/assets/images/oklg_mtgy_light.png"
          alt
          class="logo-light"
          height="24"
        />
        <!-- <h1 class="logo-light text-white my-0">[oklg]</h1>
        <h1 class="logo-dark my-0">[oklg]</h1> -->
      </a>
      <button
        class="navbar-toggler"
        type="button"
        @click="toggleMenu()"
        aria-label="Toggle navigation"
      >
        <i class="mdi mdi-menu"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul
          class="navbar-nav mx-auto navbar-center"
          id="mySidenav"
          v-scroll-spy-active
        >
          <li class="nav-item">
            <a
              href="javascript: void(0);"
              v-scroll-to="'#home'"
              class="nav-link"
              >Home</a
            >
          </li>
          <li class="nav-item">
            <a
              href="javascript: void(0);"
              v-scroll-to="{ el: '#features', offset: -2 }"
              class="nav-link"
              >Innovation</a
            >
          </li>
          <li class="nav-item">
            <a
              href="javascript: void(0);"
              v-scroll-to="{ el: '#tokenomics', offset: -2 }"
              class="nav-link"
              >Tokenomics</a
            >
          </li>
          <li class="nav-item">
            <a
              href="javascript: void(0);"
              v-scroll-to="{ el: '#roadmap', offset: -2 }"
              class="nav-link"
              >Roadmap</a
            >
          </li>
          <li class="nav-item">
            <a
              href="javascript: void(0);"
              v-scroll-to="{ el: '#rewards', offset: -1 }"
              class="nav-link"
              >Claim Rewards</a
            >
          </li>
          <!-- <li class="nav-item">
            <a
              href="javascript: void(0);"
              v-scroll-to="{ el: '#contact', offset: -50 }"
              class="nav-link"
              >Contact Us</a
            >
          </li> -->
        </ul>
        <!-- <ul class="navbar-nav navbar-center">
          <li class="nav-item">
            <a
              href="javascript: void(0);"
              class="nav-link"
              v-b-modal.login-modal
              >Log in</a
            >
          </li>
          <li class="nav-item">
            <a
              href="javascript: void(0);"
              class="nav-link"
              v-b-modal.register-modal
              >Register</a
            >
          </li>
        </ul> -->
      </div>
    </div>
    <!-- <b-modal id="login-modal" hide-header hide-footer centered>
      <div class="text-center">
        <h3 class="title mb-4">Welcome To Lezir</h3>
        <h4 class="text-uppercase text-primary">
          <b>Login</b>
        </h4>
      </div>
      <div class="login-form mt-4">
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Username / Email</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              placeholder="Youremail@gmail.com"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <a
            href="javascript: void(0);"
            class="float-right text-muted font-size-15"
            >Forgot Password.?</a
          >
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="customCheck1"
            />
            <label class="custom-control-label font-size-15" for="customCheck1"
              >Remember Me</label
            >
          </div>
          <div class="text-center mt-4">
            <button type="submit" class="btn btn-primary">
              Login
              <arrow-right-circle-icon
                class="icon-size-15 icon ml-1"
              ></arrow-right-circle-icon>
            </button>
          </div>
        </form>
        <div class="position-relative text-center mt-4">
          <span class="login-border"></span>
          <p class="social-login text-muted font-size-17">Social Login</p>
        </div>
        <div class="text-center">
          <ul class="list-inline mt-2 mb-3">
            <li class="list-inline-item mr-3">
              <a
                href="javascript: void(0);"
                class="login-social-icon icon-primary"
              >
                <facebook-icon class="icon-xs"></facebook-icon>
              </a>
            </li>
            <li class="list-inline-item mr-3">
              <a
                href="javascript: void(0);"
                class="login-social-icon icon-info"
              >
                <twitter-icon class="icon-xs"></twitter-icon>
              </a>
            </li>
            <li class="list-inline-item mr-3">
              <a
                href="javascript: void(0);"
                class="login-social-icon icon-danger"
              >
                <instagram-icon class="icon-xs"></instagram-icon>
              </a>
            </li>
            <li class="list-inline-item">
              <a
                href="javascript: void(0);"
                class="login-social-icon icon-success"
              >
                <linkedin-icon class="icon-xs"></linkedin-icon>
              </a>
            </li>
          </ul>
          <p class="text-muted mb-0">
            New User?
            <a href="javascript: void(0);" class="text-primary">Signup</a>
          </p>
        </div>
      </div>
    </b-modal>

    <b-modal id="register-modal" hide-header hide-footer centered>
      <div class="text-center">
        <h3 class="title mb-4">Welcome To Lezir</h3>
        <h4 class="text-uppercase text-primary">
          <b>Register</b>
        </h4>
      </div>
      <div class="login-form mt-4">
        <form>
          <div class="form-group">
            <label for="exampleInputUsername">User Name</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputUsername"
              placeholder="Enter Name"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputEmail2">Email</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail2"
              placeholder="Youremail@gmail.com"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword2">Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword2"
              placeholder="Password"
            />
          </div>
          <a
            href="javascript: void(0);"
            class="float-right text-muted font-size-15"
            >Forgot Password.?</a
          >
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="customCheck2"
            />
            <label class="custom-control-label font-size-15" for="customCheck2"
              >Remember Me</label
            >
          </div>
          <div class="text-center mt-4">
            <button type="submit" class="btn btn-primary">
              Register
              <arrow-right-circle-icon
                class="icon-size-15 icon ml-1"
              ></arrow-right-circle-icon>
            </button>
          </div>
        </form>
        <div class="position-relative text-center mt-4">
          <span class="login-border"></span>
          <p class="social-login text-muted font-size-17">Social Login</p>
        </div>
        <div class="text-center">
          <ul class="list-inline mt-2 mb-3">
            <li class="list-inline-item mr-3">
              <a
                href="javascript: void(0);"
                class="login-social-icon icon-primary"
              >
                <facebook-icon class="icon-xs"></facebook-icon>
              </a>
            </li>
            <li class="list-inline-item mr-3">
              <a
                href="javascript: void(0);"
                class="login-social-icon icon-info"
              >
                <twitter-icon class="icon-xs"></twitter-icon>
              </a>
            </li>
            <li class="list-inline-item mr-3">
              <a
                href="javascript: void(0);"
                class="login-social-icon icon-danger"
              >
                <instagram-icon class="icon-xs"></instagram-icon>
              </a>
            </li>
            <li class="list-inline-item">
              <a
                href="javascript: void(0);"
                class="login-social-icon icon-success"
              >
                <linkedin-icon class="icon-xs"></linkedin-icon>
              </a>
            </li>
          </ul>
          <p class="text-muted mb-0">
            New User?
            <a href="javascript: void(0);" class="text-primary">Signup</a>
          </p>
        </div>
      </div>
    </b-modal> -->
  </nav>
  <!-- Navbar End -->
</template>
