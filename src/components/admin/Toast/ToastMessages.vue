<template>
  <div class="toast-container position-absolute pe-3 top-0 end-0">
    <Toast v-for="(item, key) in messages" :key="key"
      :msg="item"
    />
  </div>
</template>

<script>
import Toast from '@/components/admin/Toast/Toast.vue';

export default {
  components: { Toast },
  data() {
    return {
      messages: [],
    };
  },
  inject: ['emitter'],
  mounted() {
    this.emitter.on('push-message', message => {
      const { style= 'success', title, content } = message;
      this.messages.push({ style, title, content })
    })
  },
};
</script>