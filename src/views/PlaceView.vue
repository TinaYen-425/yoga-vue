<template>
  <div>
    <div class="container pb-lg-16 pt-md-16 pb-10 pt-12">
      <h2 class="fs-3 text-center fw-500 text-primary mb-md-8 mb-6">
        瑜珈空間
      </h2>
      <div class="row gy-8 gy-md-0">
        <div class="col-md-8">
          <div class="row flex-md-row flex-column gy-4 gy-lg-6">
            <div class="col-md-12 col">
              <div class="overflow-hidden rounded-4 position-relative">
                <img
                  class="object-fit-cover pic-place-height rounded-4 scale-pic"
                  :src="
                    require('../assets/Images/' + 'blue-swimming-pool.jpeg')
                  "
                  alt="pic"
                />
                <div
                  class="card-img-overlay fw-500 top-auto p-6 p-md-3 p-lg-6 text-light bg-dark-gradient"
                >
                  <div class="fs-3 fs-md-4 fs-lg-3">A、B 團體課教室</div>
                  <p class="mb-0">
                    教授課程：A-基礎、艾揚格、哈達、寰宇；B-雙人飛行、阿斯坦加、陰陽、香氛
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-6 col">
              <div class="overflow-hidden rounded-4 position-relative">
                <img
                  class="object-fit-cover pic-place-height rounded-4 scale-pic"
                  :src="require('../assets/Images/' + 'woman-doing-yoga.jpg')"
                  alt="pic"
                />
                <div
                  class="card-img-overlay fw-500 top-auto p-6 p-md-3 p-lg-6 text-light bg-dark-gradient"
                >
                  <div class="fs-3 fs-md-4 fs-lg-3">C、D 個人訓練室</div>
                  <p class="mb-0">開放時間：每週一至週五 09:00~17:00</p>
                </div>
              </div>
            </div>
            <div class="col-md-6 col">
              <div class="overflow-hidden rounded-4 position-relative">
                <img
                  class="object-fit-cover pic-place-height rounded-4 scale-pic"
                  :src="require('../assets/Images/' + 'white-sink.jpeg')"
                  alt="pic"
                />
                <div
                  class="card-img-overlay fw-500 top-auto p-6 p-md-3 p-lg-6 text-light bg-dark-gradient"
                >
                  <div class="fs-3 fs-md-4 fs-lg-3">淋浴間</div>
                  <p class="mb-0">開放時間：每週一至週日 09:00~21:30</p>
                </div>
              </div>
            </div>
            <div class="col-md-6 col">
              <div class="overflow-hidden rounded-4 position-relative">
                <img
                  class="object-fit-cover pic-place-height rounded-4 scale-pic"
                  :src="
                    require('../assets/Images/' +
                      'woman-in-black-sports-bra.jpg')
                  "
                  alt="pic"
                />
                <div
                  class="card-img-overlay fw-500 top-auto p-6 p-md-3 p-lg-6 text-light bg-dark-gradient"
                >
                  <div class="fs-3 fs-md-4 fs-lg-3">器材出租</div>
                  <p class="mb-0">有租借需求請至櫃檯登記</p>
                </div>
              </div>
            </div>
            <div class="col-md-6 col">
              <div class="overflow-hidden rounded-4 position-relative">
                <img
                  class="object-fit-cover pic-place-height rounded-4 scale-pic"
                  :src="require('../assets/Images/' + 'sittin-people.jpeg')"
                  alt="pic"
                />
                <div
                  class="card-img-overlay fw-500 top-auto p-6 p-md-3 p-lg-6 text-light bg-dark-gradient"
                >
                  <div class="fs-3 fs-md-4 fs-lg-3">交誼廳</div>
                  <p class="mb-0">開放時間：每週一至週五 09:00~21:30</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="bg-third rounded-4 p-lg-8 p-md-4 p-8 text-primary">
            <h4 class="fs-5 mb-4">DOYOGA 提供：</h4>
            <p class="mb-1">四間教室：A、B 團體課教室、C、D 個人訓練室。</p>
            <p class="mb-1">
              瑜珈墊、輔具：每次課後會進行殺菌清潔，乾淨免擔心。
            </p>
            <p class="mb-1">男女置物櫃、淋浴間：分別設置在館內 A、B 區。</p>
            <p class="mb-3">
              舒適交誼廳，咖啡茶水無限供應，假日提供午間蔬食餐點。
            </p>
            <a
              href="#"
              class="text-decoration-none inline-block d-flex align-items-center"
            >
              <span class="inline-block me-2">立即預約</span>
              <i class="bi bi-arrow-right fs-5 inline-block"></i
            ></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
