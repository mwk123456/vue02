<template>
  <div>
    <!-- 面包屑区 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/welcome' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>权限管理</el-breadcrumb-item>
      <el-breadcrumb-item>权限列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 表格区域 -->
    <el-table :data="rightsList" width="100%" stripe border>
      <el-table-column type="index" label="#"></el-table-column>
      <el-table-column label="权限名称" prop="authName"></el-table-column>
      <el-table-column label="路径" prop="path"></el-table-column>
      <el-table-column label="权限等级">
        <template slot-scope="scope">
          <el-tag v-if="scope.row.level==0">一级</el-tag>
          <el-tag type="success" v-else-if="scope.row.level==1">二级</el-tag>
          <el-tag type="warning" v-else>三级</el-tag>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return { rightsList: [] }
  },
  created() {
    this.getRightsList()
  },
  methods: {
    async getRightsList() {
      const { data: res } = await this.$http.get('rights/list')
      if (res.meta.status !== 200) {
        return this.$message.error('获取权限管理列表失败')
      }
      this.rightsList = res.data
      console.log(res)
    }
  }
}
</script>
<style lang="less" scoped>
.box-card {
  margin-top: 20px;
}
.el-table {
  margin-top: 20px;
  text-align: center;
}
.el-pagination {
  margin-top: 20px;
}
</style>
