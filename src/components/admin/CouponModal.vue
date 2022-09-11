<template>
  <div>
    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      ref="modal"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-dark text-white">
            <h5 class="modal-title" id="exampleModalLabel">
              <span>新增優惠卷</span>
            </h5>
            <button
              type="button"
              class="btn-close bg-white"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="row justify-content-center">
              <div class="col-9 d-flex flex-column justify-content-center">
                <div class="form-group mb-4">
                  <label for="title" class="form-label">優惠卷名稱</label>
                  <input
                    type="text"
                    class="form-control"
                    id="title"
                    placeholder="請輸入優惠名稱"
                    v-model="tempCoupon.title"
                  />
                </div>
                <div class="form-row">
                  <div class="form-group mb-4">
                    <label for="code" class="form-label">優惠碼</label>
                    <input
                      type="text"
                      class="form-control"
                      id="code"
                      placeholder="折扣"
                      v-model="tempCoupon.code"
                    />
                  </div>
                  <div class="form-group mb-4">
                    <label for="due" class="form-label">到期日</label>
                    <input
                      type="date"
                      class="form-control"
                      id="due"
                      placeholder="期限"
                      v-model="due_date"
                    />
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group mb-4">
                    <label for="discount" class="form-label">折扣百分比</label>
                    <input
                      type="number"
                      class="form-control"
                      id="discount"
                      placeholder="折扣"
                      v-model="tempCoupon.percent"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="tempCoupon.is_enabled"
                      :true-value="1"
                      :false-value="0"
                      v-model="tempCoupon.is_enabled"
                    />
                    <label
                      class="form-check-label pointer"
                      for="tempCoupon.is_enabled"
                    >
                      是否啟用
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-outline-secondary"
              @click="hideModal"
            >
              取消
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click="this.$emit('update-coupon', tempCoupon)"
            >
              確認
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modalMixin from "@/mixins/modalMixin";

export default {
  props: {
    coupon: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  watch: {
    coupon() {
      this.tempCoupon = this.coupon;
    },
    due_date() {
      this.tempCoupon.due_date = Math.floor(new Date(this.due_date) / 1000);
    },
  },
  data() {
    return {
      modal: {},
      tempCoupon: {},
      due_date: "",
    };
  },
  methods: {
  },
  mixins: [modalMixin],
};
</script>
