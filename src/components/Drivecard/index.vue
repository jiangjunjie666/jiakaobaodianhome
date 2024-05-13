<script setup>
const props = defineProps({
  name: {
    type: String,
    default: '',
    required: true
  },
  content: {
    type: String,
    default: '',
    required: true
  },
  price: {
    type: Number,
    default: 0,
    required: true
  }
})
</script>

<template>
  <div class="container">
    <div class="head">
      <div class="left">
        <p class="name">{{ props.name }}</p>
        <img class="star" src="@/assets/star.png" alt="">
        <div class="icon">
          <div class="icon-list">
            <img src="@/assets/icons/gou.png" alt="">
            <span>口碑好</span>
          </div>
          <div class="icon-list">
            <img src="@/assets/icons/gou.png" alt="">
            <span>规模大</span>
          </div>
          <div class="icon-list">
            <img src="@/assets/icons/gou.png" alt="">
            <span>拿本快</span>
          </div>
          <div class="icon-list">
            <img src="@/assets/icons/gou.png" alt="">
            <span>包接送</span>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="price">¥{{ props.price }}</div>
        <button class="btn">学车报名</button>
      </div>
    </div>
    <div class="content">
      <img src="@/assets/avatar.png" alt="" class="avatar">
      <p>{{ props.content }}</p>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.container {
  width: 585px;
  height: 255px;
  margin-top: 30px;
  border: 1px solid #ddd;

  .head {
    width: 90%;
    margin: 0 auto;
    margin-top: 40px;
    display: flex;

    .left {
      width: 60%;
      border-right: 1px solid #ddd;

      .name {
        max-width: 180px;
        display: inline-block;
        vertical-align: middle;
        font-size: 22px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }

      .star {
        margin-left: 10px;
      }

      .icon {
        display: flex;
        margin-top: 10px;

        .icon-list {
          margin-right: 10px;

          span {
            font-size: 14px;
            padding-left: 5px;
          }
        }
      }
    }

    .right {
      display: flex;
      align-items: center;

      .price {
        color: #EE4653;
        font-size: 30px;
        margin: 0 20px 0 10px;
      }

      .btn {
        border: 1px solid #ddd;
        padding: 5px 10px;
        font-size: 14px;
      }
    }
  }

  .content {
    margin: 0 auto;
    margin-top: 40px;
    width: 90%;
    height: 80px;
    background-color: #fafafa;
    display: flex;
    align-items: center;

    .avatar {
      width: 40px;
      height: 40px;
    }

    p {
      margin: 0 0 0 10px;
      color: #8d8b8b;
      font-size: 14px;
      width: 80%;
      line-height: 24px;
    }
  }
}
</style>