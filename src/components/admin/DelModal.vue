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
          <div class="modal-header bg-gray text-light">
              <h5 name="" class="modal-title" id="exampleModalLabel">
                <span>刪除產品</span>
              </h5>
            <button
              type="button"
              class="btn-close bg-white"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            確認是否刪除 <span class="text-danger">{{ item.title }}</span> 課程!
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
              @click="this.$emit('del-item')"
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
import modalMixin from '@/mixins/modalMixin'

export default {
  props: {
    item: {}
  },
  data() {
    return {
      modal: {}
    };
  },
  emits: ['del-item'],
  mixins:[modalMixin]
};
</script>
