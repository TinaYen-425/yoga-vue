<template>
  <div class="bg-primary text-white">
    <div class="border-bottom border-white">
      <div class="container">
        <div
          class="d-flex justify-content-lg-between align-items-lg-center flex-column flex-lg-row py-md-8 py-6"
        >
          <p class="mb-lg-0 fs-3 fw-500 mb-2">現在訂閱，獲得課程優惠碼！</p>
          <div class="input-group subscribe-btn">
            <input
              type="text"
              class="form-control placeholder-primary"
              placeholder="輸入您的電子信箱"
            />
            <button class="subscribe-text-secondary">訂閱</button>
          </div>
        </div>
      </div>
    </div>
    <div class="container py-md-8 py-6">
        <div class="row justify-content-between mb-2">
            <div class="col">
                <router-link router-link to="/">
                    <img src="../assets/Images/DOYOGA.png" alt="logo" style="width: 96px; height: 31px;">
                </router-link>
            </div>
            <div class="col">
                <ul class="d-flex list-unstyled justify-content-end mb-0">
                    <li><a class="link-light fs-4 px-1" href="#"><i class="bi bi-facebook"></i></a></li>
                    <li><a class="link-light fs-4 px-1" href="#"><i class="bi bi-instagram"></i></a></li>
                    <li><a class="link-light fs-4 ps-1 pe-0" href="#"><i class="bi bi-line"></i></a></li>
                </ul>
            </div>
        </div>
        <div class="row align-items-md-end flex-md-row flex-column">
            <div class="col-md-4 mb-2 mb-md-0">
                <ul class="list-unstyled mb-0">
                    <li class="mb-2"><router-link class="link-light fw-light text-decoration-none" to="/products">課程介紹</router-link></li>
                    <li class="mb-2"><router-link class="link-light fw-light text-decoration-none" to="/place">瑜珈空間</router-link></li>
                    <li class=""><a class="link-light fw-light text-decoration-none" href="#">當月課表</a></li>
                </ul>
            </div>
            <div class="col-md-4 mb-2 mb-md-0 text-md-center text-start">© 2021. All Rights Reserved.</div>
        </div>
    </div>
  </div>
</template>
