<template>
  <div>
    <!--    <router-link :to="menuRoute.path">-->
    <el-menu-item v-if="!menuRoute.children" :index="menuRoute.path">
      <i class="el-icon-menu" />
      <span slot="title">{{ menuRoute.title }}</span>
    </el-menu-item>
    <!--    </router-link>-->

    <el-submenu v-else :index="menuRoute.path">
      <template slot="title">
        <i class="el-icon-location" />
        <span>{{ menuRoute.title }}</span>
      </template>
      <wkk-menu-item v-for="item in menuRoute.children" :key="item.name" :item="item" :penpar-url="menuRoute.path" />
    </el-submenu>
  </div>
</template>

<script>

import WkkMenuItem from '@/layout/components/wkk-menu-item'

export default {
  name: 'WkkMenu',
  components: {WkkMenuItem},
  props: {
    menuRoute: {
      type: Object,
      default: function() {
        return {}
      }
    }
  },
  created() {
    // console.log(this.menuRoute.path)
  },
  methods: {}
}
</script>

<style scoped>

</style>
