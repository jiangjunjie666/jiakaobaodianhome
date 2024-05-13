<script setup>
const props = defineProps({
  title: {
    type: String,
    default: '',
    required: true
  }
})
</script>

<template>
  <div class="container">
    <div class="title">
      <img src="@/assets/theory-icons/clock.png">
      <div class="text">
        <span>{{ props.title }}</span>
      </div>
    </div>
    <div class="study">
      <div class="study-list">
        <img src="@/assets/theory-icons/shunxu.png" alt="">
        <div class="text">
          <p class="p1">顺序练习</p>
          <p class="p2">按照顺序练习做题</p>
        </div>
      </div>
      <div class="study-list">
        <img src="@/assets/theory-icons/suiji.png" alt="">
        <div class="text">
          <p class="p1">顺序练习</p>
          <p class="p2">按随机顺序做题</p>
        </div>
      </div>
      <div class="study-list">
        <img src="@/assets/theory-icons/clock.png" alt="">
        <div class="text">
          <p class="p1">顺序练习</p>
          <p class="p2">分门别类重点突破</p>
        </div>
      </div>
      <div class="study-list">
        <img src="@/assets/theory-icons/bazi.png" alt="">
        <div class="text">
          <p class="p1">顺序练习</p>
          <p class="p2">准确把握考试难点</p>
        </div>
      </div>
    </div>
    <button class="btn">模拟考试</button>
  </div>
</template>


<style lang="scss" scoped>
.container {
  width: 580px;
  height: 370px;
  border: 1px solid #ddd;

  .title {
    display: flex;
    margin-top: 40px;
    justify-content: center;

    img {
      width: 30px;
      height: 30px;
    }

    .text {
      font-size: 20px;
      margin-left: 10px;

      span {
        &:hover {
          color: #37B5F8;
          cursor: pointer;
        }
      }
    }
  }

  .study {
    width: 95%;
    margin: 0 auto;
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .study-list {
      width: 260px;
      background-color: #FAFAFA;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 15px 0;
      margin-top: 15px;

      img {
        width: 30px;
        height: 30px;
      }

      .text {
        margin-left: 10px;

        .p1 {
          font-size: 16px;
        }

        .p2 {
          font-size: 12px;
          color: #999;
        }
      }
    }
  }

  .btn {
    background-color: #37B5F8;
    color: #fff;
    font-size: 20px;
    padding: 10px 100px;
    border-radius: 5px;
    display: block;
    margin: 40px auto;

  }
}
</style>