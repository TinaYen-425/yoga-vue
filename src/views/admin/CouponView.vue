<template>
  <div>
    <Loading :active="isLoading"></Loading>
    <div class="text-end mt-4">
      <button
        class="btn btn-primary text-light"
        type="button"
        @click="openCoupon(true)"
      >
        建立優惠卷
      </button>
    </div>
    <table class="table mt-4 mb-">
      <thead>
        <tr>
          <th width="150">名稱</th>
          <th width="150">折扣碼</th>
          <th width="180">折扣百分比</th>
          <th width="180">到期日</th>
          <th width="120">是否啟用</th>
          <th width="123">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in coupons" :key="item.id">
          <td>{{ item.title }}</td>
          <td>{{ item.code }}</td>
          <td>{{ item.percent }} %</td>
          <td>{{ $filters.date(item.due_date) }}</td>
          <td>
            <div class="form-check form-switch">
              <input
                class="form-check-input"
                type="checkbox"
                role="switch"
                :id="item.id"
                :true-value="1"
                :false-value="0"
                v-model="item.is_enabled"
              />
              <label
                class="form-check-label text-primary"
                v-if="item.is_enabled == 1"
                :id="item.id"
                >啟用</label
              >
              <label class="form-check-label text-gray" :id="item.id" v-else
                >不啟用</label
              >
            </div>
          </td>
          <td>
            <div class="btn-group">
              <button
                class="btn btn-outline-primary btn-sm"
                @click="openCoupon(false, item)"
              >
                編輯
              </button>
              <button
                class="btn btn-outline-danger btn-sm"
                @click="openDelCoupon(item)"
              >
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <Pagination :pages="pagination" @push-page="getCoupons"></Pagination>
  </div>
  <CouponModal
    ref="couponModal"
    :coupon="tempCoupon"
    @update-coupon="updateCoupon"
  ></CouponModal>
  <DelModal ref="delModal" :item="tempCoupon" @del-item="delCoupon">
    <span>優惠卷</span>
  </DelModal>
</template>

<script>
import CouponModal from "@/components/admin/CouponModal.vue";
import DelModal from "@/components/admin/DelModal.vue";
import Pagination from "@/components/admin/Pagination.vue";

export default {
  data() {
    return {
      coupons: [],
      tempCoupon: {},
      pagination: {},
      isNew: false,
      isLoading: false
    };
  },
  components: { CouponModal, DelModal, Pagination },
  inject: ["pushMsgStatus"],
  methods: {
    getCoupons(page = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupons?page=${page}`;
      this.isLoading = true;
      this.$http.get(api).then((res) => {
        if (res.data.success) {
          this.coupons = res.data.coupons;
          this.pagination = res.data.pagination
          this.isLoading = false
        }
      });
    },
    updateCoupon(item) {
      this.tempCoupon = item;
      //新增
      let api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon`;
      let httpMethod = "post";
      //編輯
      if (!this.isNew) {
        api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${item.id}`;
        httpMethod = "put";
      }
      const couponModalCom = this.$refs.couponModal;
      this.$http[httpMethod](api, { data: this.tempCoupon }).then((res) => {
        this.pushMsgStatus.msgNotice(res);
        couponModalCom.hideModal();
        this.getCoupons();
      });
    },
    openCoupon(isNew, item) {
      if (isNew == true) {
        this.tempCoupon = {};
      } else {
        this.tempCoupon = { ...item };
      }
      this.isNew = isNew;
      const couponModalCom = this.$refs.couponModal;
      couponModalCom.showModal();
    },
    delCoupon() {
      console.log(this.tempCoupon.id);
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${this.tempCoupon.id}`;
      const delModalCom = this.$refs.delModal;
      this.$http.delete(api).then((res) => {
        if (res.data.success) {
          delModalCom.hideModal();
          this.getCoupons();
        }
      });
    },
    openDelCoupon(item) {
      this.tempCoupon = item;
      const delModalCom = this.$refs.delModal;
      delModalCom.showModal();
    },
  },
  created() {
    this.getCoupons();
  },
};
</script>
