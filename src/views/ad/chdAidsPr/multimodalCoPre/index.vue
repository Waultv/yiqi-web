<template>
  <div>
    <SearchForm :searchForm = "searchForm" :searchHandle="searchHandle" :searchData="searchData"/>
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column v-for="item in columns"
                       fixed
                       :prop="item.prop"
                       :key="item.prop"
                       :label="item.label">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看详情</el-button>
          <el-button type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import SearchForm from '@/components/SearchForm/index'

export default {
  components: {  SearchForm },
  name: 'home',
  data() {
    return {
      // 表单数据
      searchData: {
        roomNo:1,
        residentName:2,
        mobilePhone:3
      },
      // 表单搜索项配置
      searchForm:[
        { type: 'Input', label: '患者id', prop: 'patientId', width: '100px'},
        { type: 'Input', label: '患者姓名', prop: 'patientName', width: '100px'},
        { type: 'DateTime', label: '操作时间', prop: 'operationTime', width: '100px'}],
      // 表单操作
      searchHandle: [
        { label: '搜索', type: 'primary', handle: this.getList },
        { label: '新建操作', type: 'primary', handle: this.addOperation }
      ],
      // 表格列
      columns:[
        {
          prop:'patientId',
          label: '患者ID'
        },
        {
          prop:'patientName',
          label: '患者姓名'
        },
        {
          prop:'gender',
          label: '性别'
        },
        {
          prop:'age',
          label: '年龄'
        },
        {
          prop:'usedAlgorithmg',
          label: '用到的算法'
        },
        {
          prop:'usedModel',
          label: '用到的模型'
        },
        {
          prop:'operationTime',
          label: '操作时间'
        }
      ],
      // 表格数据
      tableData: [
      ],
    }
  },
  created(){
  },
  methods:{
    getList(){
      console.log(this.searchData)
      // 异步查询
      this.tableData = [
        {
          patientId: 1,
          patientName:'xzc',
          gender:'male',
          age:25,
          usedAlgorithmg:'matrixArg',
          usedModel:'foolModel',
          operationTime:'2023-09-27 10:10:10'
        }
      ]
    },
    addOperation(){
      this.$router.push({
        name:'multimodalCoPre_selectP'
      })

    },
    handleClick(row) {
      console.log(row);
    }
  }
}
</script>

<style scoped>
</style>
