<template>
  <div>
    <!-- Modal -->
    <div
      class="modal fade"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="false"
      ref="modal"
      data-bs-backdrop="true"
      data-bs-scroll="true"
    >
      <div class="modal-dialog modal-dialog-cs modal-fullscreen-sm-down">
        <div class="modal-content bg-secondary rounded-4">
          <div class="modal-header border-0 pb-0">
            <button
              type="button"
              class="btn-close d-block d-md-none"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body container pt-md-12 pt-0 pb-md-16 pb-8 px-lg-14 ps-md-6 pe-md-8">
            <div class="row flex-md-row flex-column justify-content-center align-items-center gx-lg-10 gx-md-5">
              <div class="col mb-2 mb-md-0 d-flex justify-content-center">
                <div
                    class="rounded-4 bg-cover pic-height-modal"
                    :style="{
                      backgroundImage: `url(${require('@/assets/Images/conscious-design-4.jpg')})`,
                    }"
                  ></div>
              </div>
              <div class="col pe-0">
                <h4 class="text-light fw-500 fs-3 mb-1">
                 基礎 Basic
                </h4>
                <div class="d-flex mb-4 align-items-center">
                  <p class="text-light me-2 mb-0">授課老師：Carol Tang</p>
                  <span class="badge rounded-pill bg-primary fs-14 fw-light"
                    >60 min</span
                  >
                </div>
                <p class="mb-4 text-light">
                  使用掛布懸掛在半空，進行哈達瑜珈體位法練習<br />藉由地心引力的重力原理<br />鍛鍊核心肌群，舒緩脊椎壓力<br />
                  訓練身體協調性，深層放鬆身體<br />課堂裡老師會視同學狀況安排教導倒立動作<br />對於不敢嘗試倒立的同學來說<br />藉由掛布的支持與保護<br />加上老師細心指導，讓同學能更快掌握
                </p>
                <a href="#" class="btn btn-third-modal fs-5"
                  >立即預約</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal'
export default {
  data () {
    return {
      modal: {}
    }
  },
  methods: {
    showModal () {
      this.modal.show()
    },
    hideModal () {
      this.modal.hide()
    }
  },
  mounted () {
    this.modal = new Modal(this.$refs.modal)
  }
}
</script>
