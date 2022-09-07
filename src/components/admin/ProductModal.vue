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
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-dark text-white">
            <slot name="header">
              <h5 name="" class="modal-title" id="exampleModalLabel">
                <span>新增產品</span>
              </h5>
            </slot>
            <button
              type="button"
              class="btn-close bg-white"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-sm-4">
                <div class="mb-3">
                  <label for="image" class="form-label">輸入圖片網址</label>
                  <input
                    type="text"
                    class="form-control"
                    id="image"
                    placeholder="請輸入圖片連結"
                    v-model="tempProduct.imageUrl"
                  />
                </div>
                <div class="mb-3">
                  <label for="customFile" class="form-label"
                    >或 上傳圖片
                    <i class="fas fa-spinner fa-spin"></i>
                  </label>
                  <input
                    type="file"
                    id="customFile"
                    class="form-control"
                    ref="fileInput"
                    @change="uploadFile"
                  />
                </div>
                <img class="img-fluid" alt="" />
              </div>
              <div class="col-sm-8">
                <div class="mb-3">
                  <label for="title" class="form-label">課程名稱</label>
                  <select
                    class="form-select"
                    name=""
                    id="title"
                    v-model="tempProduct.title"
                  >
                    <option value="" disabled>選擇名稱</option>
                    <option value="首次體驗">首次體驗</option>
                    <option value="短期體驗">短期體驗</option>
                    <option value="長期體驗">長期體驗</option>
                    <option value="測試">測試</option>
                    <option value=""> 測試value 空白</option>
                  </select>
                </div>

                <div class="row gx-2">
                  <div class="mb-3">
                    <label for="type" class="form-label">類別</label>
                    <select
                      class="form-select"
                      name=""
                      id="type"
                      v-model="tempProduct.type"
                    >
                      <option value="" disabled>選擇類別</option>
                      <option value="基礎 Basic">基礎 Basic</option>
                      <option value="中階 Intermediate">
                        中階 Intermediate
                      </option>
                      <option value="高階 Advanced">高階 Advanced</option>
                    </select>
                  </div>
                  <div class="mb-3">
                    <p class="mb-2">課程選擇</p>
                    <div class="mb-2">
                      <div v-for="(item, key) in class" :key="item.id" class="ms-4">
                        <template v-if="item.id">
                          <input
                            type="checkbox"
                            :true-value="item.name"
                            :false-value="''"
                            :id="item.name"
                            v-model="tempProduct.classes"
                            class="me-1"
                          />
                          <label :for="item.name" class="form-label"
                            >{{ item.name }}</label
                          >
                        </template>
                      </div>
                    </div>
                    <p class="mb-0">點選課程有: {{ tempProduct.classes }}</p>
                  </div>
                  <div class="mb-3">
                    <label for="price" class="form-label">單位</label>
                    <select
                      class="form-select"
                      name=""
                      id="price"
                      v-model="tempProduct.unit"
                    >
                      <option value="" disabled>選擇單位</option>
                      <option value="次">次</option>
                      <option value="月">月</option>
                      <option value="季">季</option>
                    </select>
                  </div>
                </div>
                <div class="row gx-2">
                  <div class="mb-3 col-md-6">
                    <label for="origin_price" class="form-label">原價</label>
                    <input
                      type="number"
                      class="form-control"
                      id="origin_price"
                      placeholder="請輸入原價"
                      v-model="tempProduct.origin_price"
                    />
                  </div>
                  <div class="mb-3 col-md-6">
                    <label for="price" class="form-label">售價</label>
                    <input
                      type="number"
                      class="form-control"
                      id="price"
                      placeholder="請輸入售價"
                      v-model="tempProduct.price"
                    />
                  </div>
                </div>
                <hr />
                <div class="mb-3">
                  <label for="description" class="form-label">產品描述</label>
                  <textarea
                    type="text"
                    class="form-control"
                    id="description"
                    v-model="tempProduct.category"
                    placeholder="請輸入產品描述"
                  ></textarea>
                </div>
                <div class="mb-3">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      :true-value="1"
                      :false-value="0"
                      :id="tempProduct.is_enabled"
                      v-model="tempProduct.is_enabled"
                    />
                    <label
                      class="form-check-label"
                      :for="tempProduct.is_enabled"
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
              @click="this.$emit('update-product', tempProduct)"
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
    product: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  watch: {
    product() {
      this.tempProduct = this.product; // 必須要監控每次觸發後的內容
    },
  },
  data() {
    return {
      modal: {},
      tempProduct: {
        type: {},
        classes: [],
      },
      class: [
        {
          id: 1,
          name: "基礎課程",
          content: [
            "入體位法動作解說",
            "瑜珈基礎動作、順位",
            "適合任何階段練習者",
          ],
        },
        {
          id: 2,
          name: "艾揚格、哈達、寰宇",
          content: [
            "刺激身體七個層次為核心",
            "結合流暢體位法練習、呼吸、觀想",
            "適合半年以上練習者者",
          ],
        },
        {
          id: 3,
          name: "阿斯坦加、陰陽",
          content: [
            "充分打開身體每個部位",
            "顯著提升力量與柔軟度",
            "適合一年以上練習者",
          ],
        },
      ],
    };
  },
  methods: {
    uploadFile () {
      const uploadFile = this.$refs.fileInput.files[0]; //取得檔案
      //轉成form-data格式才能上傳資訊withAPI
      const formData = new FormData(); //將formData轉換格式，格式再加上file-to-upload的名稱，以及要轉換的File
      formData.append('file-to-upload', uploadFile)
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/upload`;
      this.$http.post(api, formData).then((res) => {
        if (res.data.success) {
          this.tempProduct.imageUrl = res.data.imageUrl
        }
      });
    },
  },
  mixins:[modalMixin]
};
</script>
