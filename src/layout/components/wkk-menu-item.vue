<template>
  <div>
    <el-menu-item-group>
      <el-menu-item :index="item.path">{{ item.title }}</el-menu-item>
    </el-menu-item-group>
  </div>
</template>

<script>
export default {
  name: 'WkkMenuItem',
  props: {
    item: {
      type: Object,
      default: () => {
        return {}
      }
    },
    penparUrl: {
      type: String,
      default: () => {
        return ''
      }
    }
  },
  created() {
    // console.log(this.item, this.penparUrl, this.$route)
  }
}
</script>

<style scoped>

</style>
