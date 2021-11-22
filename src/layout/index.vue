<template>
  <el-container>
    <el-aside class="mune-left" width="200px">
      <img alt="logo" src="@/assets/logo.png" style="width: 100%">
      <menus />
    </el-aside>
    <el-container>
      <el-header class="mune-top">Header</el-header>
      <el-main class="mune-right">
        {{ $route.path }}
        <router-view :key="$route.path" />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import menus from '@/layout/components/menu'

export default {
  name: 'Index',
  components: {menus},
  data() {
    return {
      fileList: []
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.mune-left,
.mune-top {
  moz-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>
