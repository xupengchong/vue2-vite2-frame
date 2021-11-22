<template>
  <div>
    <el-row class="tac">
      <el-col :span="24">
        <!--          active-text-color="#ffd04b"-->
        <!--          background-color="#545c64"-->
        <!--          text-color="#fff"-->
        <!--          :router="true"-->
        <el-menu
          :unique-opened="true"
          class="el-menu-demo"
          default-active="0"
          @select="handleSelect"
        >
          <template v-for="(item, index) in menuRoutes[0].children">
            <wkkMenu :key="item.name" :menu-route="item" />
          </template>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import wkkMenu from './wkk-menu'
import routerR, {menuRoutes} from '@/router'

export default {
  name: '',
  components: {wkkMenu},
  data() {
    return {
      menuRoutes
    }
  },
  created() {
    console.log(this.$router.matcher.getRoutes())
  },
  methods: {
    handleSelect(key, paths) {
      let path = '/index/' + paths.join('/')
      if (this.$route.path === path) return false
      this.$router.push({path})
    }

  }
}
</script>

<style lang="scss" scoped>

</style>
