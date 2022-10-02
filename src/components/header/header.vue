<template>
  <div class="header">
    <div class="container">
      <div class="d-flex align-items-center">
        <div class="logo">
          <img src="https://laptop88.vn/media/banner/logo_logo882022.png" alt="">
        </div>
        <div class="header-mid d-flex align-items-center">
          <div class="form-input">
            <form action="">
              <div class="d-flex input-search">
                <input type="text" placeholder="search..." class="text-search">
                <button class="submit-search">
                  <i class="bi bi-search"></i>
                </button>
              </div>
            </form>
          </div>
          <div class="list-header d-flex align-items-center">
            <a href="" class="item d-flex align-items-center">
              <i class="icon feedback"></i>
              <p class="text">Góp ý <br> khiếu nại</p>
            </a>
            <a href="" class="item d-flex align-items-center">
              <i class="icon insurance"></i>
              <p class="text">Tra cứu <br> bảo hành </p>
            </a>
            <a href="" class="item d-flex align-items-center">
              <i class="icon contact"></i>
              <p class="text">Liên hệ <br> trực tiếp </p>
            </a>
            <a href="" class="item d-flex align-items-center">
              <i class="icon support"></i>
              <p class="text">Tư vấn <br> mua hàng </p>
            </a>
          </div>
        </div>
        <div class="header-right">
          <a href="" class="item">Chính sách</a>
          <a href="" class="item">Tuyển dụng</a>
        </div>
      </div>


    </div>
  </div>
</template>
<style scoped>
a {
  text-decoration: none !important;
  color: #000;
}

.header {
  padding: 10px 0;
  background-color: #000;
}

.header .logo {
  width: 20%;
  margin-right: 12px;
}

.header .logo img {
  width: 100%;
  height: 100%;
}

.header-mid {
  width: 70%;
  margin-right: 12px;
}

.form-input {
  border-radius: 20px;
  overflow: hidden;
  padding: 3px;
  background: #fff;
  width: 350px;
  position: relative;
}

.input-search {
  float: left;
  width: calc(100% - 60px);
  height: 35px;
}

.input-search .text-search {
  border: 0;
  padding: 0 5px 0 10px;
  width: calc(100% - 40px);
  height: 100%;
  outline: none;
  color: #999;
  font-size: 14px;
  font-style: italic;
}

.submit-search {
  position: absolute;
  right: 0;
  bottom: 0;
  border: 0;
  width: 48px;
  height: 41px;
  font-weight: 300;
  background: #ff9300;
}

.submit-search i {
  width: 30px;
  height: 30px;
}

.header-mid .list-header {
  width: calc(100% - 350px);
  color: #fff;
  margin-left: 12px;
}

 .list-header .item {
   width: calc(100% / 4);
   cursor: pointer;
 }

 .list-header .feedback {
   background-position: -90px -20px;
 }

 .list-header .insurance {
   background-position: -162px -20px;
 }

 .list-header .contact {
   background-position: -235px -20px;
 }

 .list-header .support {
   background-position: -308px -20px;
 }

 .list-header .icon {
   width: 35px;
   height: 32px;
   display: block;
 }

.icon {
  background: url("@/assets/icon.png") no-repeat;
}

.item .text {
  font-size: 12px;
  color: #ff9300;
  width: calc(100% - 35px);
  margin-left: 5px;
  margin-bottom: 0;
}

.header-right {
  width: 10%;
}

.header-right .item {
  background: #ff9300;
  border-radius: 15px;
  height: 28px;
  display: block;
  line-height: 28px;
  text-align: center;
  font-weight: 700;
}

.header-right .item:first-child {
  margin-bottom: 6px;
}


</style>