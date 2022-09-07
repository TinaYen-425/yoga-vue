<template>
    <HeaderView />
    <div class="container-fluid">
     <router-view />
     <ToastMessages class="mt-13"></ToastMessages>
    </div>
</template>

<script>
import HeaderView from '@/components/admin/HeaderView.vue'
import ToastMessages from '@/components/admin/Toast/ToastMessages.vue'
import emitter from '@/methods/emitter'
import pushMsgStatus from '@/methods/pushMsgStauts'

export default {
  components: {
    HeaderView,
    ToastMessages
  },
  provide () {
    return {
      emitter,
      pushMsgStatus
    }
  },
  created () {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)TinaToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
    this.$http.defaults.headers.common.Authorization = token
    const api = `${process.env.VUE_APP_API}api/user/check`
    this.$http.post(api, this.user)
      .then((res) => {
        if (!res.data.success) {
          this.$router.push('/login')
        }
      })
  }
}
</script>
