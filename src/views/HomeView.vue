<template>
  <div
    class="bg-image banner bg-attachment-fix"
    :style="{
      backgroundImage: `url(${require('@/assets/Images/banner.jpg')})`,
    }"
  >
    <div class="container">
      <div class="row align-items-center banner">
        <div class="col-lg-1 d-lg-block d-none"></div>
        <div class="col-lg-11 text-gray">
          <div class="">
            <p class="mb-0">健身輕時尚</p>
            <h2 class="fw-500 fs-md-36 fs-3">DOYOGA，做你的瑜珈</h2>
            <p class="mb-4 fs-md-4 fs-5">
              多給自己一點時間享受靜謐，傾聽內心<br
                class="d-block d-md-none"
              />的<br class="d-md-block d-none" />聲音。
            </p>
            <div class="d-flex">
              <button type="button" class="btn btn-third me-2 fs-5">
                立即預約
              </button>
              <button type="button" class="btn btn-secondary fs-5">
                課程介紹
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container pt-lg-10 pb-lg-16 pt-8 pb-12">
    <div class="text-center mb-lg-8 mb-6">
      <h3 class="text-primary mb-1">感受身心，活在當下</h3>
      <p class="mb-0 fs-5 text-secondary">DOYOGA 可以帶給你...</p>
    </div>
    <div class="row row-cols-md-3 row-cols-1 gy-4 gy-md-0">
      <div class="col">
        <div
          class="card bg-dark text-white bg-cover black-pic rounded-4"
          :style="{
            backgroundImage: `url(${require('@/assets/Images/conscious-design-1.jpg')})`,
          }"
        >
          <div
            class="card-img-overlay top-auto bg-dark-gradient rounded-4 p-lg-6 p-md-4 p-6"
          >
            <h5 class="card-title mb-1">整體健身</h5>
            <p class="card-text">
              每一個動作，都融入運動解剖學的的觀點強調以身體的中心線為出發點。
            </p>
          </div>
        </div>
      </div>
      <div class="col">
        <div
          class="card bg-dark text-white bg-cover black-pic rounded-4"
          :style="{
            backgroundImage: `url(${require('@/assets/Images/conscious-design-2.jpg')})`,
          }"
        >
          <div
            class="card-img-overlay top-auto bg-dark-gradient rounded-4 p-lg-6 p-md-4 p-6"
          >
            <h5 class="card-title mb-1">減壓放鬆</h5>
            <p class="card-text">
              調節全身系統、改善血液循環、減壓養心、釋放身心，達到修心養性的目的<span
                class="d-md-none d-lg-inline-block d-inline-block"
                >。</span
              >
            </p>
          </div>
        </div>
      </div>
      <div class="col">
        <div
          class="card bg-dark text-white bg-cover black-pic rounded-4"
          :style="{
            backgroundImage: `url(${require('@/assets/Images/conscious-design-3.jpg')})`,
          }"
        >
          <div
            class="card-img-overlay top-auto bg-dark-gradient rounded-4 p-lg-6 p-md-4 p-6"
          >
            <h5 class="card-title mb-1">局部雕塑</h5>
            <p class="card-text">
              幫助強化背部與腹部的核心肌群，增進我們身體穩定度以及保持良好體態。
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-third">
    <div class="container py-lg-16 pt-8 pb-12">
      <div class="row align-items-center">
        <div class="col d-lg-block d-none">
          <div
            class="rounded-4 bg-cover"
            style="height: 628px"
            :style="{
              backgroundImage: `url(${require('@/assets/Images/conscious-design-4.jpg')})`,
            }"
          ></div>
        </div>
        <div class="col">
          <div class="text-center text-lg-start mb-6">
            <h3 class="text-primary mb-1">頂尖師資、專業教學</h3>
            <p class="mb-0 fs-5 text-secondary">
              <span class="text-start d-inline-block">
                強力師資，經歷豐富，協會認證。運用引導式教<br
                  class="d-lg-none d-md-block d-none"
                />學，針對不<br
                  class="d-lg-block d-none"
                />同需求的人制定專屬課程。
              </span>
            </p>
          </div>
          <div class="position-relative">
            <div class="teacher-card-lg position-absolute">
              <div class="d-flex align-items-center">
                <img
                  class="teacher-pic"
                  :src="require('../assets/Images/' + 'Ellipse 2@2x.png')"
                  alt="pic"
                />
                <div class="d-flex flex-column pe-4">
                  <p class="fs-5 mb-1">Carol Tang 老師</p>
                  <p class="mb-1">教學經歷 10 年</p>
                  <p class="mb-0">
                    瑜珈讓我重新認識自己的身體，也讓我有了不一樣的人生。
                  </p>
                </div>
              </div>
            </div>
            <div class="teacher-card invisible"></div>
            <div class="invisible" style="height: 58px"></div>
            <div class="teacher-card ps-md-8 ps-4">
              <img
                class="teacher-pic"
                :src="require('../assets/Images/' + 'Ellipse 3@2x.png')"
                alt="pic"
              />
              <div class="d-flex flex-column">
                <p class="fs-5 mb-1">Kanae 老師</p>
                <p class="mb-1">教學經歷 10 年</p>
              </div>
            </div>
            <div class="teacher-card ps-md-8 ps-4">
              <img
                class="teacher-pic"
                :src="require('../assets/Images/' + 'Ellipse 4@2x.png')"
                alt="pic"
              />
              <div class="d-flex flex-column">
                <p class="fs-5 mb-1">Asa Ifrit 老師</p>
                <p class="mb-1">教學經歷 10 年</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container py-lg-16 py-md-14 py-12">
    <div
      class="row flex-md-row-reverse align-items-center justify-content-between"
    >
      <div class="col-md-6 position-relative">
        <div class="text-lg-start mb-6">
          <h3 class="text-primary mb-1">舒適空間、靜心放鬆</h3>
          <p class="mb-0 fs-5 text-secondary mb-lg-6 mb-4">
            我們都渴望平靜安穩的生活，擁有一處能夠靜心的<br
              class="d-none d-lg-block"
            />角落，安撫每天繁雜忙碌的心。
          </p>
          <router-link
            to="/place"
            class="stretched-link text-decoration-none inline-block d-flex align-items-center"
          >
            <span class="inline-block me-3">環境介紹</span>
            <i class="bi bi-arrow-right fs-5 inline-block"></i
          ></router-link>
        </div>
      </div>
      <div class="col-md-6">
        <div class="row row-cols-2">
          <div class="col-md-8 col">
            <div
              class="bg-cover rounded-4 picture-place-height"
              :style="{
                backgroundImage: `url(${require('@/assets/Images/woman-doing-yoga.jpg')})`,
              }"
            ></div>
          </div>
          <div class="col-md-4 col d-flex flex-column justify-content-between">
            <div
              class="bg-cover rounded-4 picture-place-height-2"
              :style="{
                backgroundImage: `url(${require('@/assets/Images/white-round-table-with-sun.jpg')})`,
              }"
            ></div>
            <div
              class="bg-cover rounded-4 picture-place-height-2 d-md-block d-none"
              :style="{
                backgroundImage: `url(${require('@/assets/Images/woman-in-black-sports-bra.jpg')})`,
              }"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-third">
    <div class="container py-lg-16 py-md-14 py-12">
      <div class="row flex-lg-nowrap">
        <div
          class="col-md-6 position-relative d-flex justify-content-center align-items-center"
        >
          <div class="text-lg-start mb-6">
            <h3 class="text-primary mb-1">精心設計、課程多元</h3>
            <p class="mb-0 fs-5 text-secondary mb-lg-6 mb-4">
              教師帶領多元課程，釋放壓力，與身心常見的緊繃<br
                class="d-none d-lg-block"
              />
              不適溫柔和解。
            </p>
            <router-link
              to="/products"
              class="stretched-link text-decoration-none inline-block d-flex align-items-center"
            >
              <span class="inline-block me-3">課程介紹</span>
              <i class="bi bi-arrow-right fs-5 inline-block"></i
            ></router-link>
          </div>
        </div>
        <div class="col-md-6 gx-0 w-700">
          <div
            class="d-flex flex-lg-nowrap flex-wrap justify-content-evenly justify-content-md-around justify-content-lg-start overflow-auto"
          >
            <div class="mb-4 mb-md-6">
              <div
                class="bg-cover rounded-4 picture-place-height-3"
                :style="{
                  backgroundImage: `url(${require('@/assets/Images/woman-doing-yoga-beside-wall-1.jpeg')})`,
                }"
              ></div>
            </div>
            <div class="mb-4 mb-md-6 me-0">
              <div
                class="bg-cover rounded-4 picture-place-height-3"
                :style="{
                  backgroundImage: `url(${require('@/assets/Images/woman-doing-yoga-with-black-tank-2.jpeg')})`,
                }"
              ></div>
            </div>
            <div class="">
              <div
                class="bg-cover rounded-4 picture-place-height-3"
                :style="{
                  backgroundImage: `url(${require('@/assets/Images/woman-black-leggings-doing-yoga-3.jpeg')})`,
                }"
              ></div>
            </div>
            <div class="me-0">
              <div
                class="bg-cover rounded-4 picture-place-height-3"
                :style="{
                  backgroundImage: `url(${require('@/assets/Images/woman-in-white-tank-4.jpeg')})`,
                }"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container pt-md-10 pb-lg-16 pb-md-14 pt-8 pb-12">
    <div class="text-center mb-lg-8 mb-6">
      <h3 class="text-primary mb-1">方案選擇</h3>
      <p class="mb-0 fs-5 text-secondary">DOYOGA 可以帶給你...</p>
    </div>
    <div class="row row-cols-lg-3 row-cols-1 justify-content-lg-center">
      <div class="col mb-4 mg-lg-0 mb-md-6">
        <div class="product-card">
          <div
            class="product-card-img"
            :style="{
              backgroundImage: `url(${require('@/assets/Images/woman-in-white-tank-4.jpeg')})`,
            }"
          ></div>
          <div class="position-relative p-6">
            <h4
              class="fs-5 text-primary text-lg-center text-center text-md-start mb-1"
            >
              首次體驗
            </h4>
            <p
              class="fs-5 text-secondary text-lg-center text-center text-md-start mb-2"
            >
              NT $450 / 次
            </p>
            <div class="text-center text-primary mb-lg-10 mb-md-6 mb-10">
              <p class="text-center mb-0">
                <span class="text-start d-inline-block">
                  分基礎、中級、高級可以選擇。初次至<br />
                  DOYOGA 上課建議選擇此方案。
                </span>
              </p>
            </div>
            <a
              href="#"
              class="btn btn-secondary fs-5 block w-100 link-light stretched-link"
              >選擇課程</a
            >
          </div>
        </div>
      </div>
      <div class="col mb-4 mg-lg-0 mb-md-6">
        <div class="product-card">
          <div
            class="product-card-img"
            :style="{
              backgroundImage: `url(${require('@/assets/Images/woman-performing-yoga.jpeg')})`,
            }"
          ></div>
          <div class="position-relative p-6">
            <h4
              class="fs-5 text-primary text-lg-center text-center text-md-start mb-1"
            >
              短期體驗
            </h4>
            <p
              class="fs-5 text-secondary text-lg-center text-center text-md-start mb-2"
            >
              NT $1800 / 月
            </p>
            <div class="text-center text-primary mb-lg-10 mb-md-6 mb-10">
              <p class="text-center mb-0">
                <span class="text-start d-inline-block">
                  分基礎、中級、高級可以選擇。初次至<br />
                  DOYOGA 上課建議選擇此方案。
                </span>
              </p>
            </div>
            <a
              href="#"
              class="btn btn-secondary fs-5 block w-100 link-light stretched-link"
              >選擇課程</a
            >
          </div>
        </div>
      </div>
      <div class="col">
        <div class="product-card">
          <div
            class="product-card-img"
            :style="{
              backgroundImage: `url(${require('@/assets/Images/doing-yoga-white-space.jpg')})`,
            }"
          ></div>
          <div class="position-relative p-6">
            <h4
              class="fs-5 text-primary text-lg-center text-center text-md-start mb-1"
            >
              長期體驗
            </h4>
            <p
              class="fs-5 text-secondary text-lg-center text-center text-md-start mb-2"
            >
              NT $5600 / 季
            </p>
            <div class="text-center text-primary mb-lg-10 mb-md-6 mb-10">
              <p class="text-center mb-0">
                <span class="text-start d-inline-block">
                  分基礎、中級、高級可以選擇。初次至<br />
                  DOYOGA 上課建議選擇此方案。
                </span>
              </p>
            </div>
            <a
              href="#"
              class="btn btn-secondary fs-5 block w-100 link-light stretched-link"
              >選擇課程</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-third">
    <div class="container pt-md-10 pb-md-16 pt-8 pb-14">
      <div class="text-center mb-md-8 mb-6">
        <h3 class="text-primary fs-3">聽聽他們怎麼說</h3>
      </div>
      <div class="d-none d-md-block overflow-auto overflow-lg-hidden w-729">
        <div class="row flex-column">
          <div class="col mb-4">
            <div class="row flex-nowrap">
              <div class="col">
                <div class="comments-card">
                  <img
                    class="comments-pic"
                    :src="require('../assets/Images/' + 'Ellipse 1@2x.png')"
                    alt="pic"
                  />
                  <div class="text-primary text-start">
                    <p class="mb-2">
                      家蓁<span class="fs-14 inline-block ps-2"
                        >Oct 17 2020</span
                      >
                    </p>
                    <div
                      class="text-secondary d-flex justify-content-between mb-2 w-75 fs-5 ps-1"
                    >
                      <i class="bi bi-star-fill me-1"></i>
                      <i class="bi bi-star-fill me-1"></i>
                      <i class="bi bi-star-fill me-1"></i>
                      <i class="bi bi-star-fill me-1"></i>
                      <i class="bi bi-star-fill"></i>
                    </div>
                    <p class="mb-0">服務很好、設備優良！</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="comments-card">
                  <img
                    class="comments-pic"
                    :src="require('../assets/Images/' + 'Ellipse 1-2@2x.png')"
                    alt="pic"
                  />
                  <div class="text-primary text-start">
                    <p class="mb-2">
                      穎旻<span class="fs-14 inline-block ps-2"
                        >Oct 17 2020</span
                      >
                    </p>
                    <div
                      class="text-secondary d-flex justify-content-between mb-2 w-75 fs-5 ps-1"
                    >
                      <i class="bi bi-star-fill me-1"></i>
                      <i class="bi bi-star-fill me-1"></i>
                      <i class="bi bi-star-fill me-1"></i>
                      <i class="bi bi-star-fill me-1"></i>
                      <i class="bi bi-star-fill"></i>
                    </div>
                    <p class="mb-0">上課後身體健康很多</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="comments-card">
                  <img
                    class="comments-pic"
                    :src="require('../assets/Images/' + 'Ellipse 1-4@2x.png')"
                    alt="pic"
                  />
                  <div class="text-primary text-start">
                    <p class="mb-2">
                      子琪<span class="fs-14 inline-block ps-2"
                        >Oct 17 2020</span
                      >
                    </p>
                    <div
                      class="text-secondary d-flex justify-content-between mb-2 w-75 fs-5 ps-1"
                    >
                      <i class="bi bi-star-fill me-1"></i>
                      <i class="bi bi-star-fill me-1"></i>
                      <i class="bi bi-star-fill me-1"></i>
                      <i class="bi bi-star-fill me-1"></i>
                      <i class="bi bi-star-fill"></i>
                    </div>
                    <p class="mb-0">上課很有趣！</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row flex-nowrap">
              <div class="col">
                <div class="comments-card">
                  <img
                    class="comments-pic"
                    :src="require('../assets/Images/' + 'Ellipse 1-1@2x.png')"
                    alt="pic"
                  />
                  <div class="text-primary text-start">
                    <p class="mb-2">
                      葉子<span class="fs-14 inline-block ps-2"
                        >Oct 17 2020</span
                      >
                    </p>
                    <div
                      class="text-secondary d-flex justify-content-between mb-2 w-75 fs-5 ps-1"
                    >
                      <i class="bi bi-star-fill me-1"></i>
                      <i class="bi bi-star-fill me-1"></i>
                      <i class="bi bi-star-fill me-1"></i>
                      <i class="bi bi-star-fill me-1"></i>
                      <i class="bi bi-star-fill"></i>
                    </div>
                    <p class="mb-0">老師的教學很專業</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="comments-card">
                  <img
                    class="comments-pic"
                    :src="require('../assets/Images/' + 'Ellipse 1-3@2x.png')"
                    alt="pic"
                  />
                  <div class="text-primary text-start">
                    <p class="mb-2">
                      Ray<span class="fs-14 inline-block ps-2"
                        >Oct 17 2020</span
                      >
                    </p>
                    <div
                      class="text-secondary d-flex justify-content-between mb-2 w-75 fs-5 ps-1"
                    >
                      <i class="bi bi-star-fill me-1"></i>
                      <i class="bi bi-star-fill me-1"></i>
                      <i class="bi bi-star-fill me-1"></i>
                      <i class="bi bi-star-fill me-1"></i>
                      <i class="bi bi-star-fill"></i>
                    </div>
                    <p class="mb-0">很舒壓</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="comments-card">
                  <img
                    class="comments-pic"
                    :src="require('../assets/Images/' + 'Ellipse 1-5@2x.png')"
                    alt="pic"
                  />
                  <div class="text-primary text-start">
                    <p class="mb-2">
                      俊儀<span class="fs-14 inline-block ps-2"
                        >Oct 17 2020</span
                      >
                    </p>
                    <div
                      class="text-secondary d-flex justify-content-between mb-2 w-75 fs-5 ps-1"
                    >
                      <i class="bi bi-star-fill me-1"></i>
                      <i class="bi bi-star-fill me-1"></i>
                      <i class="bi bi-star-fill me-1"></i>
                      <i class="bi bi-star-fill me-1"></i>
                      <i class="bi bi-star-fill"></i>
                    </div>
                    <p class="mb-0">讚的！</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="d-block d-md-none">
        <div class="d-flex overflow-auto mb-4">
          <div class="row gx-0 me-4">
            <div class="col mb-2">
              <div class="comments-card">
                <img
                  class="comments-pic"
                  :src="require('../assets/Images/' + 'Ellipse 1@2x.png')"
                  alt="pic"
                />
                <div class="text-primary text-start">
                  <p class="mb-2">
                    家蓁<span class="fs-14 inline-block ps-2">Oct 17 2020</span>
                  </p>
                  <div
                    class="text-secondary d-flex justify-content-between mb-2 w-75 fs-5 ps-1"
                  >
                    <i class="bi bi-star-fill me-1"></i>
                    <i class="bi bi-star-fill me-1"></i>
                    <i class="bi bi-star-fill me-1"></i>
                    <i class="bi bi-star-fill me-1"></i>
                    <i class="bi bi-star-fill"></i>
                  </div>
                  <p class="mb-0">服務很好、設備優良！</p>
                </div>
              </div>
            </div>
            <div class="col mb-2">
              <div class="comments-card">
                <img
                  class="comments-pic"
                  :src="require('../assets/Images/' + 'Ellipse 1-2@2x.png')"
                  alt="pic"
                />
                <div class="text-primary text-start">
                  <p class="mb-2">
                    穎旻<span class="fs-14 inline-block ps-2">Oct 17 2020</span>
                  </p>
                  <div
                    class="text-secondary d-flex justify-content-between mb-2 w-75 fs-5 ps-1"
                  >
                    <i class="bi bi-star-fill me-1"></i>
                    <i class="bi bi-star-fill me-1"></i>
                    <i class="bi bi-star-fill me-1"></i>
                    <i class="bi bi-star-fill me-1"></i>
                    <i class="bi bi-star-fill"></i>
                  </div>
                  <p class="mb-0">上課後身體健康很多</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="comments-card">
                <img
                  class="comments-pic"
                  :src="require('../assets/Images/' + 'Ellipse 1-4@2x.png')"
                  alt="pic"
                />
                <div class="text-primary text-start">
                  <p class="mb-2">
                    子琪<span class="fs-14 inline-block ps-2">Oct 17 2020</span>
                  </p>
                  <div
                    class="text-secondary d-flex justify-content-between mb-2 w-75 fs-5 ps-1"
                  >
                    <i class="bi bi-star-fill me-1"></i>
                    <i class="bi bi-star-fill me-1"></i>
                    <i class="bi bi-star-fill me-1"></i>
                    <i class="bi bi-star-fill me-1"></i>
                    <i class="bi bi-star-fill"></i>
                  </div>
                  <p class="mb-0">上課很有趣！</p>
                </div>
              </div>
            </div>
          </div>
          <div class="row gx-0">
            <div class="col mb-2">
              <div class="comments-card">
                <img
                  class="comments-pic"
                  :src="require('../assets/Images/' + 'Ellipse 1-1@2x.png')"
                  alt="pic"
                />
                <div class="text-primary text-start">
                  <p class="mb-2">
                    葉子<span class="fs-14 inline-block ps-2">Oct 17 2020</span>
                  </p>
                  <div
                    class="text-secondary d-flex justify-content-between mb-2 w-75 fs-5 ps-1"
                  >
                    <i class="bi bi-star-fill me-1"></i>
                    <i class="bi bi-star-fill me-1"></i>
                    <i class="bi bi-star-fill me-1"></i>
                    <i class="bi bi-star-fill me-1"></i>
                    <i class="bi bi-star-fill"></i>
                  </div>
                  <p class="mb-0">老師的教學很專業</p>
                </div>
              </div>
            </div>
            <div class="col mb-2">
              <div class="comments-card">
                <img
                  class="comments-pic"
                  :src="require('../assets/Images/' + 'Ellipse 1-3@2x.png')"
                  alt="pic"
                />
                <div class="text-primary text-start">
                  <p class="mb-2">
                    Ray<span class="fs-14 inline-block ps-2">Oct 17 2020</span>
                  </p>
                  <div
                    class="text-secondary d-flex justify-content-between mb-2 w-75 fs-5 ps-1"
                  >
                    <i class="bi bi-star-fill me-1"></i>
                    <i class="bi bi-star-fill me-1"></i>
                    <i class="bi bi-star-fill me-1"></i>
                    <i class="bi bi-star-fill me-1"></i>
                    <i class="bi bi-star-fill"></i>
                  </div>
                  <p class="mb-0">很舒壓</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="comments-card">
                <img
                  class="comments-pic"
                  :src="require('../assets/Images/' + 'Ellipse 1-5@2x.png')"
                  alt="pic"
                />
                <div class="text-primary text-start">
                  <p class="mb-2">
                    俊儀<span class="fs-14 inline-block ps-2">Oct 17 2020</span>
                  </p>
                  <div
                    class="text-secondary d-flex justify-content-between mb-2 w-75 fs-5 ps-1"
                  >
                    <i class="bi bi-star-fill me-1"></i>
                    <i class="bi bi-star-fill me-1"></i>
                    <i class="bi bi-star-fill me-1"></i>
                    <i class="bi bi-star-fill me-1"></i>
                    <i class="bi bi-star-fill"></i>
                  </div>
                  <p class="mb-0">讚的！</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-between" style="height: 23px">
          <a href="#" class="link-primary opacity-25"
            ><i class="bi bi-arrow-left display-3 block fw-bolder"></i
          ></a>
          <a href="#" class="link-primary"
            ><i class="bi bi-arrow-right display-3 block fw-bolder"></i
          ></a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "../assets/stylesheet/all.scss";
.bg-attachment-fix {
  background-attachment: fixed;
}
</style>
