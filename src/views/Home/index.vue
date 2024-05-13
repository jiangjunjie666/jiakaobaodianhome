<script setup>
import Title from '@/components/Title/index.vue'
import Examination from '@/components/Examination/index.vue'
import Drivecard from '@/components/Drivecard/index.vue'
import { ref, nextTick, onMounted, onUnmounted } from 'vue'
const search = ref('')
const imgList = ref([
  '/src/assets/banner/banner1.png',
  '/src/assets/banner/banner2.png',
  '/src/assets/banner/banner3.png',
  '/src/assets/banner/banner4.png'
])
const keList = ref([
  {
    name: '科目一',
    text: '2024新题库',
    img: '/src/assets/icons/ke1.png'
  },
  {
    name: '科目二',
    text: '精选视频，详解考点',
    img: '/src/assets/icons/ke2.png'
  },
  {
    name: '科目三',
    text: '全方位讲解，攻克难点',
    img: '/src/assets/icons/ke3.png'
  },
  {
    name: '科目四',
    text: '2024新题库',
    img: '/src/assets/icons/ke4.png'
  }
])

const ke = ref([
  '科目一',
  '科目二',
  '科目三',
  '科目四'
])

const jia = ref([
  '找驾校',
  '找陪练',
  '找教练'
])
const car = ref([
  '买车网',
  '平行之家'
])

const drive = ref([
  {
    name: '明诚驾校',
    content: '只要认真练车…驾驶证🪪可以到手',
    price: '3680'
  },
  {
    name: '鸿运达驾校',
    content: '还行，主要看教练好不好。',
    price: '2880'
  },
  {
    name: '佳信驾校',
    content: '很棒，感谢熊主任，感谢教练的悉心教导 服务态度：👌🏻 学车体验：好 通过率：高 规范收费：价格便宜',
    price: '3680'
  },
  {
    name: '明诚驾校',
    content: '即便在身体不舒服的情况下，也坚持陪学员练车，是难得的好 。感谢驾校 ！按照你教的方法不进都不行',
    price: '2680'
  }
])
const leftVal = ref(0) // 轮播图盒子的偏移值
const flag = ref(true) // 用来节流防止重复点击
const start = ref(null) // 自动执行下一张定的时器
const imgWidth = ref(1920) // 在这里填写你需要的图片宽度
const ition = ref(0.6) // 设置轮播图过度时间
const imgShow = ref(0) // 表示当前显示的图片索引

const keShow = ref(false) // 控制科目的显示
const xiaoShow = ref(false) // 控制驾校的显示
const carShow = ref(false) // 控制车的显示
const NextFun = () => {
  if (leftVal.value == (imgList.value.length - 1) * imgWidth.value) { // 判断显示的图片 是 最后一张时执行
    ition.value = 0.6
    leftVal.value += imgWidth.value
    imgShow.value = 0
    nextTick(() => {
      setTimeout(() => {// 通过延时障眼法,归原过渡时间,执行真正的“上一张”函数
        ition.value = 0
        leftVal.value = 0
      }, ition.value * 1000)
    })
  } else { // 判断显示的图片 不是 最后一张时执行
    ition.value = 0.6
    leftVal.value += imgWidth.value
    imgShow.value++
  }
}
//点击小圆点
const changeImg = (index) => {
  ition.value = 0.6
  leftVal.value = index * imgWidth.value
  imgShow.value = index
}

// 封装的节流函数,以达到防止重复点击小圆点的效果
const throttle = (fun) => {
  if (flag.value) {
    flag.value = false;
    fun();
    setTimeout(() => {
      flag.value = true;
    }, 650); // 设置节流间隔时间,不得小于图片过渡时间
  }
}

const to = () => {
  start.value = setInterval(() => {
    NextFun()
  }, 5000)
}

//返回页面顶部的函数
const toTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth' // 添加平滑滚动行为
  });
}

onMounted(() => {
  to()
})

onUnmounted(() => {
  clearInterval(start.value)
})
</script>


<template>
  <div class="home">
    <!-- 顶格 -->
    <div class="top"></div>
    <!-- 侧边绝对定位 -->
    <div class="fixedBox">
      <img src="@/assets/fixed.png" alt="">
      <div class="yjfk">
        <img src="@/assets/yjfk.png" alt="">
        <p>意见反馈</p>
      </div>
      <div class="top" @click="toTop">
        <img src="@/assets/to-top.png" alt="">
        <p>返回顶部</p>
      </div>
    </div>
    <div class="head w">
      <div class="logo">
        <a href="/"></a>
      </div>
      <div class="search">
        <div class="ipt">
          <input type="text" v-model="search" placeholder="请输入关键字">
          <button class="search-btn">搜索</button>
        </div>
      </div>
    </div>
    <!-- 轮播图部分 -->
    <div class="banner">
      <div class="banner-text">
        <div class="banner-text-heart w">
          <ul class="banner-text-item-list" v-show="keShow" style="left:calc(108px * 1)">
            <li v-for="ke in ke" :key="ke">{{ ke }}</li>
          </ul>
          <ul class="banner-text-item-list" v-show="xiaoShow" style="left:calc(108px * 2)">
            <li v-for="jia in jia" :key="jia">{{ jia }}</li>
          </ul>
          <ul class="banner-text-item-list" v-show="carShow" style="left:calc(108px * 8 + 40px)">
            <li v-for="car in car" :key="car">{{ car }}</li>
          </ul>
          <div class="banner-text-item active">首页</div>
          <div class="banner-text-item tou" @mouseenter="keShow = true" @mouseleave="keShow = false">模拟考试</div>
          <div class="banner-text-item tou" @mouseenter="xiaoShow = true" @mouseleave="xiaoShow = false">找驾校</div>
          <div class="banner-text-item">驾考圈</div>
          <div class="banner-text-item">交通标志</div>
          <div class="banner-text-item">软件下载</div>
          <div class="banner-text-item" style="width: 148px">驾考宝典企业版</div>
          <div class="banner-text-item">智慧驾车</div>
          <div class="banner-text-item tou" @mouseenter="carShow = true" @mouseleave="carShow = false">买新车</div>
          <div class="banner-text-item">二手车</div>
        </div>
      </div>
      <div class="banner-img">
        <div class="imgbox" :style="{ left: `-${leftVal}px`, transition: `${ition}s` }">
          <img :src="img" v-for="(img, index) in imgList" :key="index">
          <img :src="imgList[0]" alt="">
        </div>
        <!-- 学车流程 -->
        <div class="learn-flow">
          <div class="learn-flow-heart">
            <p class="learn-flow-title">学车流程</p>
          </div>
          <div class="learn-ke">
            <div class="learn-ke-list" v-for="ke in keList" :key="ke.name">
              <img class="icon" :src="ke.img"></img>
              <div class="text">
                <p class="ke">{{ ke.name }}</p>
                <p class="zhen">{{ ke.text }}</p>
              </div>
            </div>
          </div>
        </div>
        <!-- 小圆点 -->
        <div class="circle">
          <div class="circle-item" v-for="(i, index) in imgList" :key="i" :class="index === imgShow ? 'active' : ''"
            @click="throttle(() => changeImg(index))">
          </div>
        </div>
      </div>
    </div>
    <!-- 理论考试部分 -->
    <Title title="长沙市2024小车理论考试" />

    <!-- 考试部分 -->
    <div class="examination w">
      <Examination title="科目一交规" />
      <Examination title="科目四安全文明驾驶" />
    </div>

    <!-- 入驻图片 -->
    <div class="enter w">
      <img src="@/assets/ruzhu.png" alt="">
    </div>

    <!-- 驾校推荐 -->
    <Title title="长沙市驾校推荐" />

    <div class="drive w">
      <Drivecard v-for="drive in drive" :key="drive.name" :name="drive.name" :content="drive.content"
        :price="drive.price" />
    </div>


    <!-- 查看更多 -->
    <div class="more">
      <button class="more-btn">查看更多</button>
    </div>

    <!-- 学车流程 -->

    <Title title="学车流程">驾考宝典整合学车全流程，驾考宝典为用户提供全方位学车服务</Title>

    <div class="process w">
      <div class="list" v-for="i in 6">
        <img src="@/assets/icons/car.png" alt="">
        <p class="text">找驾校</p>
        <p class="line">口碑好的驾校</p>
      </div>
    </div>



    <!-- 宝典荣誉 -->
    <Title title="宝典荣誉">强大的驾考功能，优秀的用户体验，我们的愿景是学车无忧，轻松拿本
    </Title>

    <div class="honor w">
      <img src="@/assets/rongyu.png" alt="">
    </div>


    <div class="phone">
      <div class="w">
        <div class="phone1">
          <p>教练宝典APP</p>
          <img src="@/assets/phone1.png" alt="">
          <div class="mask">
            <img src="@/assets/phone1-active.png" alt="">
          </div>
        </div>
        <div class="phone2">
          <p>驾考宝典APP</p>
          <img src="@/assets/phone2.png" alt="">
          <div class="mask">
            <img src="@/assets/erweima1.png" alt="">
          </div>
        </div>
        <div class="phone3">
          <p>买车宝典APP</p>
          <img src="@/assets/phone3.png" alt="">
          <div class="mask">
            <div class="mask">
              <img src="@/assets/phone3-active.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 二维码部分 -->
    <div class="ma w">
      <div class="left hr">
        <div class="le">
          <div class="t">驾考宝典APP下载</div>
          <div class="x">考驾照 用宝典</div>
        </div>
        <div class="re">
          <img src="@/assets/erweima1.png" alt="">
        </div>
      </div>
      <div class="right">
        <div class="le">
          <div class="t">驾考宝典微信小程序</div>
          <div class="x">无需下载，驾考做题更方便！</div>
        </div>
        <div class="re">
          <img src="@/assets/erweima2.jpg" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home {

  .top {
    background-color: #fbfbfb;
    height: 25px;
  }

  .fixedBox {
    position: fixed;
    width: 135px;
    height: 270px;
    right: 0;
    bottom: 10%;
    z-index: 99;

    img {
      width: 100%;
    }

    .yjfk {
      display: flex;
      justify-content: center;
      padding: 5px 0;
      width: 86%;
      margin: 0 auto;
      border-left: 1px solid #ebe8e8;
      border-right: 1px solid #ebe8e8;

      img {
        width: 20px;
        height: 20px;
      }

      p {
        font-size: 14px;
        margin-left: 5px;
        color: #bebcbc;
      }
    }

    .top {
      display: flex;
      justify-content: center;
      padding: 10px 0;
      width: 86%;
      height: 35px;
      margin: 0 auto;
      border: 1px solid #ebe8e8;
      cursor: pointer;

      img {
        width: 20px;
        height: 20px;
      }

      p {
        font-size: 14px;
        margin-left: 5px;
      }
    }
  }

  .head {
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo {
      width: 207px;
      height: 42px;

      a {
        width: 100%;
        height: 100%;
        display: block;
        background: url('@/assets/logo.png') no-repeat;
      }
    }

    .search {
      .ipt {
        input {
          padding: 0 40px 0 10px;
          height: 42px;
          width: 248px;
          font-size: 14px;
          border: 1px solid #e9e9e9;
          line-height: 40px;

          &:focus {
            border-color: #37B5F8;
          }
        }

        .search-btn {
          background-color: #F0F0F0;
          padding: 14px;
          font-size: 14px;
          // 文字间间距
          letter-spacing: 3px;
        }
      }
    }
  }

  .banner {
    .banner-text {
      height: 50px;
      background-color: #37B5F8;
    }

    .banner-text-heart {
      height: 100%;
      display: flex;
      position: relative;

      .banner-text-item {
        width: 108px;
        color: #fff;
        font-size: 16px;
        line-height: 50px;
        text-align: center;
        cursor: pointer;

        &.active {
          background-color: #258FC7;
        }

        &:hover {
          background-color: #5CACE6;
        }

        &.tou::after {
          //加伪元素
          content: '';
          display: inline-block;
          vertical-align: middle;
          width: 10px;
          height: 10px;
          margin: 5px 0 0 6px;
          border: 5px solid transparent;
          border-top: 5px solid #fff;
        }
      }

      .banner-text-item-list {
        z-index: 99;
        position: absolute;
        width: 108px;
        height: 20px;
        top: 50px;
        bottom: 0;

        li {
          width: 100%;
          background-color: #fff;
          text-align: center;
          padding: 10px 0;
          font-size: 14px;
          border-bottom: 1px solid #f0eeee;
          cursor: pointer;

          //最后一个去除下边框
          &:last-child {
            border-bottom: none;
          }
        }
      }
    }

    // img
    .banner-img {
      position: relative;
      width: 1900px;
      height: 380px;
      box-sizing: border-box;
      margin: 0 auto;
      overflow: hidden;

      .imgbox {
        position: absolute;
        top: 0px;
        left: 0px;
        display: flex;
        justify-content: flex-start;

        /* 图片默认样式 */
        img {
          flex-shrink: 0;
          width: 1920px;
          height: 380px;
        }
      }



      .learn-flow {
        position: absolute;
        width: 280px;
        height: 340px;
        background-color: rgba(255, 255, 255, .9);
        top: 20px;
        left: 360px;
        padding: 0 20px;

        .learn-flow-heart {
          .learn-flow-title {
            font-size: 20px;
            text-align: center;
            line-height: 50px;
            border-bottom: 1px dotted #ddd;
          }
        }

        .learn-ke {
          width: 100%;
          margin-top: 10px;

          .learn-ke-list {
            display: flex;
            height: 70px;

            .icon {
              width: 42px;
              height: 42px;
            }

            .text {
              margin-left: 10px;

              .ke {
                color: #37B5F8;
              }

              .zhen {
                font-size: 13px;
                color: #666;
              }
            }
          }
        }
      }


      .circle {
        position: absolute;
        left: 50%;
        bottom: 10px;
        transform: translateX(-50%);
        display: flex;

        .circle-item {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: rgba(0, 0, 0, .3);
          cursor: pointer;
          margin: 0 5px;

          &.active {
            background-color: #007AFF;
          }
        }
      }
    }
  }

  .examination {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
  }

  .enter {
    margin-top: 30px;
  }

  .drive {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .more {
    text-align: center;
    margin-top: 20px;

    .more-btn {
      display: block;
      width: 280px;
      margin: 20px auto 0;
      line-height: 48px;
      border: 1px solid #e9e9e9;
      border-radius: 4px;
      color: #999;
      text-align: center;
      font-size: 16px;
    }
  }

  .process {
    display: flex;
    margin-top: 20px;

    .list {
      flex: 1;
      text-align: center;

      .text {
        margin-top: 30px;
        font-size: 25px;
      }

      .line {
        margin-top: 10px;
        color: #666;
        font-size: 14px;
      }
    }
  }

  .honor {
    margin-top: 20px;
    padding-bottom: 40px;
  }

  .phone {
    height: 560px;
    background-color: #F5F5F5;

    .w {
      display: flex;
      height: 100%;
      justify-content: space-around;
      overflow: hidden;

      .phone1 {
        margin-top: 100px;
        transition: 0.5s all ease;
        position: relative;

        p {
          text-align: center;
          margin-bottom: 20px;
          font-size: 20px;
        }


        &:hover {
          cursor: pointer;
          margin-top: 60px;

          .mask {
            opacity: 1;
            top: 20%;
          }
        }

        .mask {
          width: 100%;
          height: 80%;
          position: absolute;
          top: 30%;
          left: 0;
          background-color: rgba(255, 255, 255, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: 0.5s all ease;
          opacity: 0;

          img {
            z-index: 99;
            position: relative;
          }
        }
      }

      .phone2 {
        margin-top: 50px;
        transition: 0.5s all ease;
        position: relative;

        p {
          text-align: center;
          margin-bottom: 20px;
          font-size: 20px;
        }


        &:hover {
          cursor: pointer;
          margin-top: 20px;

          .mask {
            opacity: 1;
            top: 20%;
          }
        }

        .mask {
          width: 100%;
          height: 80%;
          position: absolute;
          top: 30%;
          left: 0;
          background-color: rgba(255, 255, 255, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: 0.5s all ease;
          opacity: 0;

          img {
            z-index: 99;
            position: relative;
            width: 200px;
          }
        }
      }

      .phone3 {
        margin-top: 170px;
        transition: 0.5s all ease;
        position: relative;

        p {
          text-align: center;
          margin-bottom: 20px;
          font-size: 20px;
        }


        &:hover {
          cursor: pointer;
          margin-top: 130px;

          .mask {
            opacity: 1;
            top: 20%;
          }
        }

        .mask {
          width: 100%;
          height: 80%;
          position: absolute;
          top: 30%;
          left: 0;
          background-color: rgba(255, 255, 255, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: 0.5s all ease;
          opacity: 0;

          img {
            z-index: 99;
            position: relative;
          }
        }
      }
    }
  }

  .ma {
    display: flex;
    height: 360px;
    align-items: center;

    .left {
      @include useMa()
    }

    .right {
      @include useMa()
    }
  }
}
</style>