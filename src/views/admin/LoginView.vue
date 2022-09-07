<template>
  <div>
    <div class="container">
      <form class="row justify-content-center align-items-center" style="height: 100vh"
      @submit.prevent="signIn">
        <div class="col-md-6">
        <div class="d-flex align-items-end mb-3">
          <h1 class="h3 font-weight-normal text-primary">管理者</h1>
          <span class="h3 d-block font-weight-normal ms-4 text-secondary">|</span>
          <h1 class="h5 font-weight-normal ms-4 text-secondary">請先登入喔...</h1>
        </div>
          <div class="mb-2">
            <label for="inputEmail" class="form-label">Email address</label>
            <input
              type="email"
              id="inputEmail"
              class="form-control"
              placeholder="Email address"
              required
              autofocus
              v-model="user.username"
            />
          </div>
          <div class="mb-2">
            <label for="inputPassword" class="form-label">Password</label>
            <input
              type="password"
              id="inputPassword"
              class="form-control"
              placeholder="Password"
              required
              v-model="user.password"
            />
          </div>

          <div class="text-end mt-4">
            <button class="btn btn-outline-primary btn-block w-25" type="submit">
              登入
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    signIn () {
      const api = `${process.env.VUE_APP_API}admin/signin`
      this.$http.post(api, this.user)
        .then((res) => {
          if (res.data.success) {
            const { token, expired } = res.data
            document.cookie = `TinaToken=${token}; expires=${new Date(expired)};`
            this.$router.push('/admin/products')
          }
        })
    }
  }
}
</script>
