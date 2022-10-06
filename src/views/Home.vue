<template>
  <Header/>
  <div>
    <main>
      <div class="homepage">
        <div class="container">
          <div class="banner d-flex">
            <div class="banner-left">
              <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel-vertical">
                <div class="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                </div>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src="https://laptop88.vn/media/banner/30_Aug6dd884036dd7995327265a1235d2ba26.jpg" class="w-100 h-100 opacity-100" alt="...">
                  </div>
                  <div class="carousel-item">
                    <img src="https://laptop88.vn/media/banner/17_Auga810929ba41c71971f6809121a9d1c85.jpg" class="w-100 h-100 opacity-100" alt="...">
                  </div>
                  <div class="carousel-item">
                    <img src="https://laptop88.vn/media/banner/01_Oct66e7bbe76886a0509b0596e39a9d6dd4.jpg" class="w-100 h-100 opacity-100" alt="...">
                  </div>
                  <div class="carousel-item">
                    <img src="https://laptop88.vn/media/banner/20_Aug6a288c920639f66f37ee06e382786736.jpg" class="w-100 h-100 opacity-100" alt="...">
                  </div>
                  <div class="carousel-item">
                    <img src="https://laptop88.vn/media/banner/01_Octe44718f8ec60f64ac2b5f1aeaaa00bac.jpg" class="w-100 h-100 opacity-100" alt="...">
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                  <i class="bi bi-caret-left-fill icon-prev" aria-hidden="true"></i>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                  <i class="bi bi-caret-right-fill icon-next" aria-hidden="true"></i>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div class="right-address">
              <div class="js-address-showroom">
                <div class="cv-carousel cv-drag cv-loaded">
                  <div class="cv-nav">
                    <div class="cv-prev">
                      <i class="bi bi-caret-up-fill icon-up" aria-hidden="true"></i>
                    </div>
                    <div class="cv-next">
                      <i class="bi bi-caret-down-fill icon-down" aria-hidden="true"></i>
                    </div>
                  </div>
                  <div class="cv-stage-outer">
                    <div class="cv-stage">
                      <div class="cv-item">
                        <div class="item">
                          <b>Hà Nội - 125 Trần Đại Nghĩa</b>
                          <a href="https://zalo.me/0904583588" class="phone">Zalo: 0904.583.588</a>
                        </div>
                      </div>
                      <div class="cv-item">
                        <div class="item">
                          <b>Hà Nội - 125 Trần Đại Nghĩa</b>
                          <a href="https://zalo.me/0904583588" class="phone">Zalo: 0904.583.588</a>
                        </div>
                      </div>
                      <div class="cv-item">
                        <div class="item">
                          <b>Hà Nội - 125 Trần Đại Nghĩa</b>
                          <a href="https://zalo.me/0904583588" class="phone">Zalo: 0904.583.588</a>
                        </div>
                      </div>
                      <div class="cv-item">
                        <div class="item">
                          <b>Hà Nội - 125 Trần Đại Nghĩa</b>
                          <a href="https://zalo.me/0904583588" class="phone">Zalo: 0904.583.588</a>
                        </div>
                      </div>
                      <div class="cv-item">
                        <div class="item">
                          <b>Hà Nội - 125 Trần Đại Nghĩa</b>
                          <a href="https://zalo.me/0904583588" class="phone">Zalo: 0904.583.588</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div class="banner-sale d-flex">
            <a href="" class="item">
              <img src="https://laptop88.vn/media/banner/30_Sep41a5ed76c8b372fa66bccefa6396233e.png" alt="">
            </a>
            <a href="" class="item">
              <img src="https://laptop88.vn/media/banner/04_Aug4a47a0db6e60853dedfcfdf08a5ca249.png" alt="">
            </a>
            <a href="" class="item">
              <img src="https://laptop88.vn/media/banner/22_Augf00e444b2224c0103be1aed83629aff9.jpg" alt="">
            </a>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
import Header from "@/components/header/header.vue";
import * as Bootstrap from 'bootstrap';
import "@/assets/css/home.css";

export default {
  mounted(){
    var myCarousel = document.querySelector('#myCarousel')
    new Bootstrap.Carousel(myCarousel)
  },

  components: { Header },
}
</script>
