<template>
  <div>
    <Loading :active="isLoading"></Loading>
    <div class="text-end mt-6 me-4">
      <button
        type="button"
        class="btn btn-primary text-end text-light"
        @click="openModal(true)"
      >
        新增產品
      </button>
    </div>
    <div class="row justify-content-center">
      <div class="col-11">
        <table class="table mt-4">
          <thead>
            <tr>
              <th width="">產品名稱</th>
              <th width="">課程類別</th>
              <th width="120">原價</th>
              <th width="120">售價</th>
              <th width="120">是否啟用</th>
              <th width="150">編輯</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in products" :key="item.id">
              <td>{{ item.title }}</td>
              <td>{{ item.type }}</td>
              <td class="text-right">{{ $filters.currency(item.origin_price) }}</td>
              <td class="text-right">{{ $filters.currency(item.price) }}</td>
              <td>
                <span class="text-success" v-if="item.is_enabled">啟用</span>
                <span class="text-muted" v-else>未啟用</span>
              </td>
              <td>
                <div class="btn-group">
                  <button
                    class="btn btn-outline-primary btn-sm"
                    @click="openModal(false, item)"
                  >
                    編輯
                  </button>
                  <button
                    class="btn btn-outline-danger btn-sm"
                    @click="openDelModal(item)"
                  >
                    刪除
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <Pagination :pages="pagination" @push-page="getProducts"></Pagination>

    <ProductModal
      :product="tempProduct"
      @update-product="updateProduct"
      ref="productModal"
    >
    </ProductModal>
    <DelModal
      ref="delModal"
      :item="tempProduct"
      @del-item="delProduct"
    ></DelModal>
  </div>
</template>

<script>
import ProductModal from "@/components/admin/ProductModal.vue";
import DelModal from "@/components/admin/DelModal.vue";
import LoginView from "./LoginView.vue";
import Pagination from "@/components/admin/Pagination.vue";

export default {
  data() {
    return {
      pagination: {},
      products: [],
      tempProduct: {},
      isNew: false,
      isLoading: false,
    };
  },
  components: { ProductModal, DelModal, LoginView, Pagination },
  inject: ["pushMsgStatus"],
  methods: {
    getProducts(page = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products?page=${page}`;
      this.isLoading = true;
      this.$http.get(api).then((res) => {
        if (res.data.success) {
          this.pagination = res.data.pagination;
          this.products = res.data.products;
          this.isLoading = false;
        }
      });
    },
    updateProduct(item) {
      this.tempProduct = item;
      //新增
      let api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product`;
      let httpMethod = "post";
      //編輯
      if (!this.isNew) {
        api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${item.id}`;
        httpMethod = "put";
      }
      if (this.tempProduct.classes == "") {
        alert("「課程選擇」為必選項目");
        return;
      }
      const productModalCom = this.$refs.productModal;
      this.$http[httpMethod](api, { data: this.tempProduct }).then((res) => {
        this.pushMsgStatus.msgNotice(res);
        productModalCom.hideModal();
        this.getProducts();
      });
    },
    openModal(isNew, item) {
      if (isNew) {
        this.tempProduct = {};
      } else {
        this.tempProduct = { ...item }; //把資料最展開，傳回modal
      }
      this.isNew = isNew; // 把狀態存下來
      const productModalCom = this.$refs.productModal;
      productModalCom.showModal();
    },
    openDelModal(item) {
      this.tempProduct = item;
      const delModalCom = this.$refs.delModal;
      delModalCom.showModal();
    },
    delProduct() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${this.tempProduct.id}`;
      const delModalCom = this.$refs.delModal;
      this.$http.delete(api).then((res) => {
        if (res.data.success) {
          delModalCom.hideModal();
          this.getProducts();
        }
      });
    },
  },
  created() {
    this.getProducts();
  },
};
</script>
