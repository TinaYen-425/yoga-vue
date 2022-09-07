<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination justify-content-center">
      <li class="page-item" v-if="pages.has_pre == true">
        <a class="page-link" href="#" aria-label="Previous" @click.prevent="updatePage(pages.current_page - 1)">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li
        class="page-item"
        v-for="page in pages.total_pages" 
        :key="page"
        :class="{ active: page === pages.current_page }"
        @click.prevent="updatePage(page)"
      >
        <a class="page-link" href="#">{{ page }}</a>
      </li>
      <li class="page-item" v-if="pages.has_next == true">
        <a class="page-link" href="#" aria-label="Next" @click.prevent="updatePage(pages.current_page + 1)">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: ["pages"],
  methods: {
    updatePage(page) {
      this.$emit("push-page", page);
    },
  },
};
// :pages="{ 頁碼資訊 }"
// @emitPages="更新頁面事件"
</script>
