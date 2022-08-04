<template>
    <HeaderView />
    <router-view />
    <SideBarView />
</template>

<script>
import HeaderView from '@/components/admin/HeaderView.vue'
import SideBarView from '@/components/admin/SideBarView.vue'

export default {
  components: {
    HeaderView,
    SideBarView
  }
}
</script>
