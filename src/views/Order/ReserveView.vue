<template>
  <div>
    <Loading :active="isLoading"></Loading>
  </div>
  <div class="container">
    <div class="fs-3 text-center text-primary pt-md-16 pb-md-4 pt-12 pb-6">
      立即預約
    </div>
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="d-flex justify-content-between mb-8">
          <div class="btn btn-third-order bg-progress disabled">選擇方案</div>
          <div class="btn btn-third-order disabled">填寫資料</div>
          <div class="btn btn-third-order disabled">完成預約</div>
        </div>
      </div>
    </div>
    <div class="row row-cols-lg-3 row-cols-1 justify-content-lg-center">
      <div class="col" v-for="(item, key) in products" :key="item.id">
        <div class="product-card" :class="{ 'border-4': isShow }">
          <div
            class="product-card-img"
            :style="{
              backgroundImage: `url('${item.imageUrl}')`,
            }"
          ></div>
          <div class="position-relative p-6">
            <h4
              class="fs-5 text-primary text-lg-center text-center text-md-start mb-1"
            >
              {{ item.title }}
            </h4>
            <p
              class="fs-5 text-secondary text-lg-center text-center text-md-start mb-2"
            >
              NT$ {{ item.price }} / {{ item.unit }}
            </p>
            <div class="text-center text-primary mb-lg-10 mb-md-6 mb-10">
              <p class="text-center mb-0">
                <span class="text-start d-inline-block" v-html="item.category">
                </span>
              </p>
            </div>
            <a
              href="#"
              class="btn btn-secondary fs-5 block w-100 link-light stretched-link"
              :disabled="this.status.loadingItem === item.id"
              @click.prevent="addCard(item.id)"
              ><div
                class="spinner-grow spinner-grow-sm text-white me-2"
                role="status"
                v-if="this.status.loadingItem === item.id"
              >
                <span class="visually-hidden">Loading...</span>
              </div>
              選擇課程</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container position-relative" style="width: 100%; height: 72px">
    <div class="triangle position-absolute"></div>
  </div>

  <div class="pb-md-13 pb-14 mb-lg-13 mb-md-7 mb-8">
    <div
      class="container-xl bg-primary pt-lg-10 pb-lg-16 pt-8 pb-12 px-lg-10 mb-lg-8 mb-md-12 mb-10"
    >
      <div class="fs-3 text-center text-white mb-lg-8 mb-6">選擇課程階級</div>
      <div class="container-md overflow-auto">
        <div
          class="row justify-content-between flex-column flex-md-row course-level-width gy-6"
        >
          <div class="col gx-0 gx-md-7">
            <div href="#" class="course-level-card border-4 border-white">
              <div class="d-flex justify-content-between">
                <div class="fs-3 fw-500">基礎 Basic</div>
                <i class="bi bi-check-circle-fill text-white fs-2"></i>
              </div>
              <div class="d-flex mb-lg-4 mb-3">
                <p class="mb-0 text-white me-2">基礎課程</p>
                <span class="badge rounded-pill bg-primary fs-14 fw-light"
                  >60 min</span
                >
              </div>
              <div class="mb-0 text-white">
                <p class="mb-1">・入體位法動作解說</p>
                <p class="mb-1">・瑜珈基礎動作、順位</p>
                <p class="mb-0">・適合任何階段練習者</p>
              </div>
              <a href="#" class="stretched-link"></a>
            </div>
          </div>
          <div class="col gx-0 gx-md-7">
            <div href="#" class="course-level-card">
              <div class="d-flex justify-content-between">
                <div class="fs-3 fw-500">基礎 Basic</div>
                <i
                  class="bi bi-check-circle-fill text-white fs-2 opacity-50"
                ></i>
              </div>
              <div class="d-flex mb-lg-4 mb-3">
                <p class="mb-0 text-white me-2">基礎課程</p>
                <span class="badge rounded-pill bg-primary fs-14 fw-light"
                  >60 min</span
                >
              </div>
              <div class="mb-0 text-white">
                <p class="mb-1">・入體位法動作解說</p>
                <p class="mb-1">・瑜珈基礎動作、順位</p>
                <p class="mb-0">・適合任何階段練習者</p>
              </div>
              <a href="#" class="stretched-link"></a>
            </div>
          </div>
          <div class="col gx-0 gx-md-7">
            <div href="#" class="course-level-card">
              <div class="d-flex justify-content-between">
                <div class="fs-3 fw-500">基礎 Basic</div>
                <i
                  class="bi bi-check-circle-fill text-white fs-2 opacity-50"
                ></i>
              </div>
              <div class="d-flex mb-lg-4 mb-3">
                <p class="mb-0 text-white me-2">基礎課程</p>
                <span class="badge rounded-pill bg-primary fs-14 fw-light"
                  >60 min</span
                >
              </div>
              <div class="mb-0 text-white">
                <p class="mb-1">・入體位法動作解說</p>
                <p class="mb-1">・瑜珈基礎動作、順位</p>
                <p class="mb-0">・適合任何階段練習者</p>
              </div>
              <a href="#" class="stretched-link"></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 購物車 -->
    <template v-if="cartsLength !== 0">
      <div class="text-center text-primary pt-2 mb-10">
        <p class="mb-1">您選擇的是</p>
        <a
          class="mb-0 fs-5 border-bottom border-secondary border-2 text-decoration-none pointer"
          data-bs-toggle="collapse"
          data-bs-target="#cart-collapse"
          aria-expanded="false"
          aria-controls="collapseExample"
          >{{ cartsTitle }}課程-基礎</a
        >
        <div class="collapse container mt-1" id="cart-collapse">
          <div class="row justify-content-center">
            <div class="col-md-6 border">
              <div class="sticky-top">
                <table class="table align-middle">
                  <thead>
                    <tr>
                      <th style="width: 60px"></th>
                      <th>品名</th>
                      <th style="width: 110px">數量</th>
                      <th>單價</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, key) in carts.carts" :key="item.id">
                      <td>
                        <button
                          type="button"
                          class="btn btn-outline-danger btn-sm"
                          @click="removeCart(item)"
                        >
                          <i class="bi bi-x"></i>
                        </button>
                      </td>
                      <td>
                        {{ item.product.title }}
                        <!-- <div class="text-success">已套用優惠券</div> -->
                      </td>
                      <td>
                        <div class="input-group input-group-sm">
                          <input
                            type="number"
                            class="form-control"
                            min="1"
                            v-model.number="item.qty"
                            @change="updateCart(item)"
                            :disabled="this.status.loadingItem == item.id"
                          />
                          <div class="input-group-text">
                            / {{ item.product.unit }}
                          </div>
                        </div>
                      </td>
                      <td class="text-end">
                        {{ $filters.currency(item.total) }}
                        <!-- <small class="text-success">折扣價：</small> -->
                      </td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colspan="3" class="text-end">總計</td>
                      <td class="text-end">
                        {{ $filters.currency(finalTotal) }}
                      </td>
                    </tr>
                    <!-- <tr>
                        <td colspan="3" class="text-end text-success">折扣價</td>
                        <td class="text-end text-success">199</td>
                      </tr> -->
                  </tfoot>
                </table>
                <div class="input-group mb-3 input-group-sm">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="請輸入優惠碼"
                  />
                  <div class="input-group-append">
                    <button class="btn btn-outline-secondary" type="button">
                      套用優惠碼
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
    <div class="container">
      <div>
        <div class="fs-3 text-primary mb-4 text-center">預約須知</div>
        <div class="d-flex justify-content-center">
          <div class="mb-0 text-start text-primary">
            <p class="mb-1">1. 如果有特殊體質、特殊狀況，請主動告知。</p>
            <p class="mb-1">
              2. 取消預約或時間異動請於預約日前一天晚間 21:00 前告知，<br
                class="d-md-block d-none"
              />預約當日請勿異動或取消，以免影響您日後再預約的個人信用<br
                class="d-md-block d-none"
              />及難度。
            </p>
            <p class="mb-1">
              3. 為維護上課品質，請遵守 DOYOGA 各項參觀規定，未遵守規<br
                class="d-md-block d-none"
              />定者，本公司保留謝絕入館之權利。
            </p>
            <p>
              4. DOYOGA 保留修改預約須知之權利，修改後的條款將公佈於<br
                class="d-md-block d-none"
              />本網站上，不另外個別通知。如果您繼續在本網站進行參觀預<br
                class="d-md-block d-none"
              />約，就表示您已經了解、並同意遵守修改後的約定條款。
            </p>
          </div>
        </div>
      </div>

      <div class="d-flex justify-content-center">
        <a
          href="#"
          class="btn btn-secondary fs-5 block link-light subscribe-btn"
        >
          繼續預約
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
      isLoading: false,
      isShow: false,
      status: {
        loadingItem: "", //對應ID
      },
      carts: {},
      finalTotal: "",
      cartsTitle: [],
      cartsLength: "",
    };
  },
  methods: {
    getProducts() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products`;
      this.isLoading = true;
      this.$http.get(api).then((res) => {
        if (res.data.success) {
          this.products = res.data.products;
          this.isLoading = false;
        }
      });
    },
    addCard(id) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      const cart = {
        product_id: id,
        qty: 1,
      };
      this.status.loadingItem = id;
      this.$http.post(api, { data: cart }).then((res) => {
        this.status.loadingItem = "";
        this.getCart();
      });
    },
    getCart() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.$http.get(api).then((res) => {
        // console.log(res.data.data)
        this.carts = res.data.data;
        this.finalTotal = res.data.data.final_total;
        this.cartsLength = res.data.data.carts.length;

        //撰寫cartsTitle
        var cartsTitle = [];
        this.carts.carts.forEach((item) => {
          cartsTitle.push(item.product.title);
        });
        this.cartsTitle = cartsTitle.join(",");
      });
    },
    updateCart(item) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`;
      const cart = {
        product_id: item.product_id,
        qty: item.qty,
      };
      this.status.loadingItem = item.id;
      this.$http.put(api, { data: cart }).then((res) => {
        this.status.loadingItem = "";
        this.getCart();
      });
    },
    removeCart(item) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`;
      this.isLoading = true;
      this.$http.delete(api).then((res) => {
        this.isLoading = false;
        this.getCart();
      });
    },
  },
  created() {
    this.getProducts();
    this.getCart();
  },
};
</script>

<style leng="scss">
.pointer {
  cursor: pointer;
}
</style>
