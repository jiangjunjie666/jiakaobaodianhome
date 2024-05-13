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
  <!-- 标题 -->
  <div class="container">
    <div class="title-nav w">
      <hr class="hr">
      <div class="title-text">{{ props.title }}</div>
    </div>
    <p class="content">
      <slot />
    </p>

  </div>

</template>

<style lang="scss" scoped>
.container {
  .title-nav {
    margin-top: 30px;
    margin-bottom: 30px;
    text-align: center;
    padding-top: 20px;

    .hr {
      height: 1px;
      border: none;
      border-top: 1px dotted #ddd;
      background-color: #fffcfc;
    }

    .title-text {
      display: inline-block;
      margin-top: -20px;
      line-height: 40px;
      padding: 0 45px;
      background-color: #fff;
      font-size: 30px;
    }
  }

  .content {
    font-size: 16px;
    color: #666;
    text-align: center;
  }
}
</style>