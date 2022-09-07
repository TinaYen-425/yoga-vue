<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <router-link class="navbar-brand disabled" to="/admin/products">Yoga管理台</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav w-100">
          <div class="d-flex justify-content-center">
            <router-link class="nav-link" to="/admin/products">產品列表</router-link>
            <router-link class="nav-link" to="/admin/coupon">優惠卷</router-link>
            <router-link class="nav-link" to="/admin/orders">訂單管理</router-link>
          </div>
          <a class="ms-auto btn btn-outline-secondary" @click.prevent="logout">登出</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    logout () {
      const api = `${process.env.VUE_APP_API}logout`
      this.$http.post(api, this.user)
        .then((res) => {
          if (res.data.success) {
            this.$router.push('/login')
          }
        })
    }
  }
}
</script>

<style>
.cursor-pointer{
    cursor: pointer;
}
</style>
