<template>
  <div>
    <div class="container">
      <h2 class="fs-3 text-primary text-center pt-md-16 pb-md-8 pt-12 pb-6">
        本月課表
      </h2>
      <div
        class="d-flex justify-content-lg-center overflow-auto mb-lg-8 mb-md-10 mb-8"
      >
        <div style="max-width: 920px">
          <div class="bg-secondary px-12 py-10 rounded-4">
            <p class="mb-2 fs-5 text-light">2021 07 月</p>
            <table class="table bg-white text-primary border-secondary mb-0">
              <tr class="text-nowrap">
                <td
                  scope="col"
                  class="border-secondary border-end px-1 py-2"
                  width="85px"
                >
                  時間
                </td>
                <td scope="col" width="123px" class="text-center">星期一</td>
                <td scope="col" width="123px" class="bg-third text-center">
                  星期二
                </td>
                <td scope="col" width="123px" class="text-center">星期三</td>
                <td scope="col" width="123px" class="bg-third text-center">
                  星期四
                </td>
                <td scope="col" width="123px" class="text-center">星期五</td>
                <td scope="col" width="123px" class="bg-third text-center">
                  星期六
                </td>
              </tr>
              <tr class="text-nowrap">
                <td scope="row" class="border-secondary border-end px-1 py-2">
                  0900-1000
                </td>
                <td>基礎 Basic</td>
                <td class="bg-third">基礎 Basic</td>
                <td></td>
                <td class="bg-third"></td>
                <td>基礎 Basic</td>
                <td class="bg-third">基礎 Basic</td>
              </tr>
              <tr class="text-nowrap">
                <td scope="row" class="border-secondary border-end px-1 py-2">
                  1000-1100
                </td>
                <td>艾揚格 Iyengar</td>
                <td class="bg-third">哈達 Hatha</td>
                <td>寰宇 Universal</td>
                <td class="bg-third">哈達 Hatha</td>
                <td>艾揚格 Iyengar</td>
                <td class="bg-third">雙人飛行</td>
              </tr>
              <tr class="text-nowrap">
                <td scope="row" class="border-secondary border-end px-1 py-2">
                  1100-1200
                </td>
                <td>寰宇 Universal</td>
                <td class="bg-third">陰陽 Yin Yang</td>
                <td>艾揚格 Iyengar</td>
                <td class="bg-third">寰宇 Universal</td>
                <td></td>
                <td class="bg-third">艾揚格 Iyengar</td>
              </tr>
              <tr>
                <td scope="row" class="border-secondary border-end px-1 py-2">
                  1200-1400
                </td>
                <td colspan="6" class="text-center">休息</td>
              </tr>
              <tr>
                <td scope="row" class="border-secondary border-end px-1 py-2">
                  1400-1500
                </td>
                <td>雙人飛行</td>
                <td class="bg-third">基礎 Basic</td>
                <td>雙人飛行</td>
                <td class="bg-third">陰陽 Yin Yang</td>
                <td>雙人飛行</td>
                <td class="bg-third">基礎 Basic</td>
              </tr>
              <tr>
                <td scope="row" class="border-secondary border-end px-1 py-2">
                  1500-1600
                </td>
                <td>陰陽 Yin Yang</td>
                <td class="bg-third">陰陽 Yin Yang</td>
                <td>基礎 Basic</td>
                <td class="bg-third">基礎 Basic</td>
                <td>哈達 Hatha</td>
                <td class="bg-third">香氛瑜珈</td>
              </tr>
              <tr>
                <td scope="row" class="border-secondary border-end px-1 py-2">
                  1600-1700
                </td>
                <td>哈達 Hatha</td>
                <td class="bg-third">雙人飛行</td>
                <td>陰陽 Yin Yang</td>
                <td class="bg-third">香氛瑜珈</td>
                <td>艾揚格 Iyengar</td>
                <td class="bg-third">陰陽 Yin Yang</td>
              </tr>
              <tr class="text-nowrap">
                <td scope="row" class="border-secondary border-end px-1 py-2">
                  1700-1800
                </td>
                <td>艾揚格 Iyengar</td>
                <td class="bg-third"></td>
                <td>哈達 Hatha</td>
                <td class="bg-third">艾揚格 Iyengar</td>
                <td>寰宇 Universal</td>
                <td class="bg-third">哈達 Hatha</td>
              </tr>
              <tr>
                <td scope="row" class="border-secondary border-end px-1 py-2">
                  1800-2000
                </td>
                <td colspan="6" class="text-center">休息</td>
              </tr>
              <tr>
                <td scope="row" class="border-secondary border-end px-1 py-2">
                  2000-2100
                </td>
                <td></td>
                <td class="bg-third"></td>
                <td>香氛瑜珈</td>
                <td class="bg-third">艾揚格 Iyengar</td>
                <td>香氛瑜珈</td>
                <td class="bg-third">雙人飛行</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <div class="pb-20 mb-2 pb-md-20 pb-lg-6 mb-lg-20">
        <h2 class="text-gray fs-3 text-center mb-lg-8 mb-6">上課須知</h2>
        <div class="row justify-content-md-center">
          <div class="col-md-8 d-flex mb-md-6 mb-4 align-items-center">
            <span class="fw-bold text-primary block fs-2 me-md-6 me-2">1.</span>
            <div
              class="rounded-4 border-secondary border px-md-6 px-4 py-4 text-primary w-notice"
            >
              空中瑜珈、香氛開放 2 天前電話預約上課。
            </div>
          </div>
          <div class="col-md-8 d-flex justify-content-lg-end mb-md-6 mb-4 align-items-center">
            <span class="fw-bold text-primary block fs-2 me-md-6 me-2">2.</span>
            <div
              class="rounded-4 border-secondary border px-md-6 px-4 py-4 text-white bg-secondary w-notice"
            >
              空中瑜珈、香氛開放 2 天前電話預約上課。
            </div>
          </div>
          <div class="col-md-8 d-flex mb-md-6 mb-4 align-items-center">
            <span class="fw-bold text-primary block fs-2 me-md-6 me-2">3.</span>
            <div
              class="rounded-4 border-secondary border px-md-6 px-4 py-4 text-primary w-notice"
            >
              取消預約或時間異動請於預約日前一天晚間 21:00 前告知。
            </div>
          </div>
          <div class="col-md-8 d-flex justify-content-lg-end align-items-center">
            <span class="fw-bold text-primary block fs-2 me-md-6 me-2">4.</span>
            <div
              class="rounded-4 border-secondary border px-md-6 px-4 py-4 text-white bg-secondary w-notice"
            >
              運動過程中若感到任何不適，請馬上停止且與老師商量討論。
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
