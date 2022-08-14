<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-third py-5">
    <div class="container">
      <div class="col-lg-4">
        <router-link to="/" class=""
          ><img
            class="img-fluid"
            src="../assets/Images/DOYOGA-logo.png"
            alt="logo"
            style="width: 96px; height: 31px"
        /></router-link>
      </div>
      <button
        class="navbar-toggler-custom rounded-3"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon" style="width: 33px; height: 25px;"></span>
      </button>
      <div class="collapse navbar-collapse pt-lg-0" id="navbarSupportedContent">
        <div class="container-lg px-0 pt-3 pt-lg-0">
          <div class="col-lg-12">
          <div class="row gx-0  align-items-center text-md-center flex-md-row flex-column text-lg-start gy-md-3 gy-2">
            <div class="col">
              <ul class="d-flex justify-content-lg-evenly justify-content-md-between justify-content-center list-unstyled align-items-lg-center mb-0  ">
                <li class="">
                  <router-link class="link-gray px-lg-3 px-4  px-md-0 ps-md-0 text-decoration-none fw-lg-light fw-md-normal"  to="/products"
                    >課程介紹</router-link
                  >
                </li>
                <li class="">
                  <router-link class="link-gray px-lg-3 px-4  px-md-0 text-decoration-none fw-lg-light fw-md-normal" to="/place">瑜珈空間</router-link>
                </li>
                <li class="">
                  <router-link class="link-gray px-lg-3 px-4  px-md-0 text-decoration-none fw-lg-light fw-md-normal" to="/curriculum">當月課表</router-link>
                </li>
              </ul>
            </div>
            <div class="col">
              <ul class="navbar-nav justify-content-md-end justify-content-evenly flex-row">
                <li class="nav-item w-75 w-md-auto">
                  <a class="btn btn-outline-primary btn-custom rounded-md-4" href="#">立即預約</a>
                </li>
                <li class="nav-item ps-4 pe-lg-0 d-none d-md-block">
                  <a class="btn btn-outline-primary btn-custom rounded-md-4" href="#">聯絡我們</a>
                </li>
              </ul>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {}
</script>
