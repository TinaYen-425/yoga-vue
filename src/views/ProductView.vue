<template>
<div>
  <div class="container py-lg-16 pt-md-16 pb-md-18 py-12">
    <h3 class="fs-3 text-primary mb-lg-8 mb-6 text-center">課程介紹</h3>
    <div class="row flex-md-row flex-column justify-content-center">
      <div class="col-lg-6 col-md-6 mb-2 mb-md-0">
        <div class="d-flex justify-content-end">
          <div
            class="rounded-4 bg-cover pic-height"
            :style="{
              backgroundImage: `url(${require('@/assets/Images/conscious-design-4.jpg')})`,
            }"
          ></div>
        </div>
      </div>
      <div class="col-lg-5 col-md-6 pe-0">
        <h4 class="text-primary fw-500 fs-3 mb-1">本月限定課程 - 空中瑜珈</h4>
        <div class="d-flex mb-4 align-items-center">
          <p class="text-secondary me-2 mb-0">授課老師：Carol Tang</p>
          <span class="badge rounded-pill bg-primary fs-14 fw-light"
            >60 min</span
          >
        </div>
        <p class="mb-4 text-primary">
          使用掛布懸掛在半空，進行哈達瑜珈體位法練習<br />藉由地心引力的重力原理<br />鍛鍊核心肌群，舒緩脊椎壓力<br />
          訓練身體協調性，深層放鬆身體<br />課堂裡老師會視同學狀況安排教導倒立動作<br />對於不敢嘗試倒立的同學來說<br />藉由掛布的支持與保護<br />加上老師細心指導，讓同學能更快掌握
        </p>
        <router-link to="/ReserveClass" class="btn btn-secondary fs-5 link-light">立即預約</router-link>
      </div>
    </div>
  </div>
  <div class="bg-secondary">
    <div class="container py-5">
      <div class="d-flex">
        <div class="input-group search-btn me-2">
          <input
            type="text"
            class="form-control placeholder-primary"
            placeholder="請輸入要搜尋的課程"
          />
          <button class="search-text-primary">搜尋</button>
        </div>
        <div class="select-custom position-relative">
          <select class="text-primary border-secondary" name="" id="">
            <option value="全部" selected>全部課程</option>
            <option value="Basic">基礎</option>
            <option value="Iyengar">進階</option>
            <option value="Hatha">哈達</option>
          </select>
          <div class="position-absolute bottom-30 end-8">
            <div class="triangle-up mb-1"></div>
            <div class="triangle-down"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="border-bottom border-primary">
    <div class="container pt-lg-14 pt-md-13 pb-lg-16 py-12">
      <div class="row">
        <div class="col-lg-9 col-12">
          <ul class="list-unstyled">
            <li class="d-md-flex justify-content-between">
              <a
                class="w-lg-54 w-md-48 course-card text-light"
                @click.prevent="$refs.productModal.showModal()"
                :style="{
                  backgroundImage: `url(${require('@/assets/Images/woman-doing-yoga-beside-wall-1.jpeg')})`,
                }"
              >
                <div
                  class="card-img-overlay top-auto bg-dark-gradient p-6 rounded-4"
                >
                  <h5 class="card-title fs-3 fw-500">基礎 Basic</h5>
                  <p class="card-text">授課老師：Carol Tang</p>
                </div>
                <span
                  class="badge rounded-pill bg-secondary fs-14 fw-light position-absolute top-0 start-lg-13 start-16 translate-middle"
                  >60 min</span
                >
              </a>
              <a
                href="#"
                class="w-lg-42 w-md-48 course-card text-light"
                :style="{
                  backgroundImage: `url(${require('@/assets/Images/woman-doing-yoga-with-black-tank-2.jpeg')})`,
                }"
              >
                <div
                  class="card-img-overlay top-auto bg-dark-gradient p-6 rounded-4"
                >
                  <h5 class="card-title fs-3 fw-500">艾揚格 Iyengar</h5>
                  <p class="card-text">授課老師：Kanae</p>
                </div>
                <span
                  class="badge rounded-pill bg-secondary fs-14 fw-light position-absolute top-0 start-16 translate-middle"
                  >60 min</span
                >
              </a>
            </li>
            <li class="d-md-flex justify-content-between">
              <a
                href="#"
                class="w-lg-42 w-md-48 course-card text-light"
                :style="{
                  backgroundImage: `url(${require('@/assets/Images/woman-black-leggings-doing-yoga-3.jpeg')})`,
                }"
              >
                <div
                  class="card-img-overlay top-auto bg-dark-gradient p-6 rounded-4"
                >
                  <h5 class="card-title fs-3 fw-500">哈達 Hatha</h5>
                  <p class="card-text">授課老師：Kuzuha</p>
                </div>
                <span
                  class="badge rounded-pill bg-secondary fs-14 fw-light position-absolute top-0 start-16 translate-middle"
                  >60 min</span
                >
              </a>
              <a
                href="#"
                class="w-lg-54 w-md-48 course-card text-light"
                :style="{
                  backgroundImage: `url(${require('@/assets/Images/woman-in-white-tank-4.jpeg')})`,
                }"
              >
                <div
                  class="card-img-overlay top-auto bg-dark-gradient p-6 rounded-4"
                >
                  <h5 class="card-title fs-3 fw-500">寰宇 Universal</h5>
                  <p class="card-text">授課老師：Kuzuha</p>
                </div>
                <span
                  class="badge rounded-pill bg-secondary fs-14 fw-light position-absolute top-0 start-lg-13 start-16 translate-middle"
                  >60 min</span
                >
              </a>
            </li>
            <li class="d-md-flex justify-content-between">
              <a
                href="#"
                class="w-lg-54 w-md-48 course-card text-light"
                :style="{
                  backgroundImage: `url(${require('@/assets/Images/two-woman-dong-fitness-exercise.jpeg')})`,
                }"
              >
                <div
                  class="card-img-overlay top-auto bg-dark-gradient p-6 rounded-4"
                >
                  <h5 class="card-title fs-3 fw-500">雙人飛行 Arco Yoga</h5>
                  <p class="card-text">授課老師：Kuzuha、Kanae</p>
                </div>
                <span
                  class="badge rounded-pill bg-secondary fs-14 fw-light position-absolute top-0 start-lg-13 start-16 translate-middle"
                  >60 min</span
                >
              </a>
              <a
                href="#"
                class="w-lg-42 w-md-48 course-card text-light"
                :style="{
                  backgroundImage: `url(${require('@/assets/Images/woman-doing-yoga-2.jpeg')})`,
                }"
              >
                <div
                  class="card-img-overlay top-auto bg-dark-gradient p-6 rounded-4"
                >
                  <h5 class="card-title fs-3 fw-500">阿斯坦加 Ashtanga</h5>
                  <p class="card-text">授課老師：Kanae</p>
                </div>
                <span
                  class="badge rounded-pill bg-secondary fs-14 fw-light position-absolute top-0 start-16 translate-middle"
                  >60 min</span
                >
              </a>
            </li>
            <li class="d-md-flex justify-content-between">
              <a
                href="#"
                class="w-lg-42 w-md-48 course-card mb-md-0 text-light"
                :style="{
                  backgroundImage: `url(${require('@/assets/Images/woman-in-white-pants-bending-body.jpeg')})`,
                }"
              >
                <div
                  class="card-img-overlay top-auto bg-dark-gradient p-6 rounded-4"
                >
                  <h5 class="card-title fs-3 fw-500">陰陽 Yin Yang</h5>
                  <p class="card-text">授課老師：Asa Chen</p>
                </div>
                <span
                  class="badge rounded-pill bg-secondary fs-14 fw-light position-absolute top-0 start-16 translate-middle"
                  >60 min</span
                >
              </a>
              <a
                href="#"
                class="w-lg-54 w-md-48 course-card mb-0 text-light"
                :style="{
                  backgroundImage: `url(${require('@/assets/Images/woman-doing-yoga.jpg')})`,
                }"
              >
                <div
                  class="card-img-overlay top-auto bg-dark-gradient p-6 rounded-4"
                >
                  <h5 class="card-title fs-3 fw-500">香氛 Aroma Yoga</h5>
                  <p class="card-text">授課老師：Asa Chen</p>
                </div>
                <span
                  class="badge rounded-pill bg-secondary fs-14 fw-light position-absolute top-0 start-lg-13 start-16 translate-middle"
                  >60 min</span
                >
              </a>
            </li>
          </ul>
        </div>
        <div class="col-lg-3 col-12">
          <h3 class="fs-5 text-primary">DOYOGA 上課須知：</h3>
          <p class="mb-0 text-primary">
            請攜帶適當的瑜珈墊和一條長毛巾配合課程使用。<br />
            運動中請穿著有彈性、吸汗、透氣為原則的衣物，盡量穿著較貼身的運動衣，以便教練指導與自我矯正。<br />
            運動中切記補充適當的水分、保持腹式呼吸，以鼻吸氣，以口呼氣為原則。<br />
            運動中請保持微收小腹的原則，肩膀放鬆、頭頂向上延伸，請跟隨教練指示，配合呼吸一步步的確實練習。<br />
            運動過程中若感到任何不適，請馬上停止且與老師商量討論。
            若懷孕或特殊疾病請先告知。
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="pt-lg-10 pb-lg-16 pt-8 pb-md-20  pb-11 mb-11 mb-md-0 mb-lg-12">
    <h4 class="text-center text-primary fw-500 fs-3 mb-0">師資介紹</h4>
    <div class="container-md overflow-md-auto">
        <div class="d-flex flex-md-row flex-column w-custom">
          <div class="bg-secondary course-teacher-card position-relative">
            <img class="teacher-pic-modal position-absolute top-0 start-50 translate-middle border-primary" :src="require('../assets/Images/' + 'Ellipse 2@2x.png')" alt="pic">
            <h5 class="text-center mb-1">Carol Tang 老師</h5>
            <p class="mb-4 text-center">教學經歷 10 年</p>
            <p class="fw-light mb-4">“因為瑜珈讓我重新認識自己的身體，也讓我有了不一樣的人生。<br> 我希望能跟學生們分享瑜珈的好，讓大<br> 家能藉由瑜珈看見自己的內在與潛能，<br> 並將瑜珈自然的融入自己的生活中。”</p>
            <p class="mb-0">
            ・協會認證艾揚格瑜珈老師 <br>
            ・2010 年完成四年的艾揚格師資培訓 <br>
            ・2020 取得艾揚格瑜珈高階認證
            </p>
          </div>
          <div class="bg-primary course-teacher-card position-relative">
            <img class="teacher-pic-modal position-absolute top-0 start-50 translate-middle border-secondary" :src="require('../assets/Images/' + 'Ellipse 3@2x.png')" alt="pic">
            <h5 class="text-center mb-1">Kanae 老師</h5>
            <p class="mb-4 text-center">教學經歷 3 年</p>
            <p class="fw-light mb-4">“希望每個人透過觀察，感受在在進入動作，連接陰與陽，內和外，呼和吸的方式來更了解瑜伽練習的觀點，每個動作都帶著呼吸和順位，在平衡心理和生理的狀況下以安全和簡化的技巧進入瑜伽姿勢，帶著放鬆的心情，享受瑜伽和生命的喜悅，並樂在其中。”</p>
            <p class="mb-0">
            ・美國瑜珈聯盟 RYT200 小時師資認證<br>
            ・自然呼吸瑜珈會館開授倒立研習<br>
            ・簡善琳瑜珈會館開授倒立研習</p>
          </div>
          <div class="bg-secondary course-teacher-card position-relative">
            <img class="teacher-pic-modal position-absolute top-0 start-50 translate-middle border-0" :src="require('../assets/Images/' + 'Ellipse 38@2x.png')" alt="pic">
            <h5 class="text-center mb-1">Kuzuha 老師</h5>
            <p class="mb-4 text-center">教學經歷 3 年</p>
            <p class="fw-light mb-4">“瑜珈是一種生活態度，<br> 學習平衡不強求，堅持不放棄，<br> 修煉心靈活在當下。”</p>
            <p class="mb-0">
            ・美國瑜珈聯盟 RYT200 小時師資認證<br>
            ・自然呼吸瑜珈會館開授倒立研習<br>
            ・簡善琳瑜珈會館開授倒立研習</p>
          </div>
          <div class="bg-primary course-teacher-card position-relative">
          <img class="teacher-pic-modal position-absolute top-0 start-50 translate-middle border-secondary" :src="require('../assets/Images/' + 'Ellipse 4@2x.png')" alt="pic">
            <h5 class="text-center mb-1">Asa Ifrit 老師</h5>
            <p class="mb-4 text-center">教學經歷 5 年</p>
            <p class="fw-light mb-4">“帶著懞懂和好奇開始了瑜伽的探索。<br>追隨印度瑜伽大師 Atui Shri 學習呼吸控制和冥想以及完成瑜伽大師宋光明師資培訓。”</p>
            <p class="mb-0">
            ・美國瑜珈聯盟 RYT200 小時師資認證<br>
            ・AshtangsTTC50小時認證</p>
          </div>
      </div>
    </div>
  </div>
  <productModal ref="productModal"/>
</div>
</template>

<script>
import productModal from '../components/ProductModal.vue'
export default {
  data () {
    return {
      products: []
    }
  },
  components: { productModal }
}
</script>
