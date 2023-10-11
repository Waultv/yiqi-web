<template>
  <div>
    <SearchForm :searchForm = "searchForm" :searchHandle="searchHandle" :searchData="searchData"/>
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column v-for="item in columns" fixed :prop="item.prop" :key="item.prop" :label="item.label">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="100">
        <template slot-scope="scope">
          <el-button @click="selectConfig(scope.row)" type="text" size="small">选择</el-button>
          <el-button @click="uploadData(scope.row)" type="text" size="small">上传数据</el-button>
        </template>
      </el-table-column>
    </el-table>
<!--    选择配置弹窗-->
    <el-dialog title="选择配置" :visible.sync="configDialogVisible">
      <el-form :model="configFormData">
        <el-form-item label="当前算法" >
          <el-select v-model="configFormData.algorithmg" placeholder="请选择算法">
            <el-option label="算法一" value="shanghai"></el-option>
            <el-option label="算法二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="当前模型" >
          <el-select v-model="configFormData.model" placeholder="请选择模型">
            <el-option label="模型一" value="shanghai"></el-option>
            <el-option label="模型二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="configDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="configDialogVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import SearchForm from '@/components/SearchForm/index'

export default {
  components: {  SearchForm },
  name: 'home',
  data() {
    return {
      searchData: {
        roomNo:1,
        residentName:2,
        mobilePhone:3
      },
      searchForm:[
        { type: 'Input', label: '患者id', prop: 'patientId', width: '100px'},
        { type: 'Input', label: '患者姓名', prop: 'patientName', width: '100px'}
      ],
      searchHandle: [
        { label: '搜索', type: 'primary', handle: this.search }
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
        }
      ],
      // 表格数据
      tableData: [
        {
          patientId:1

        }
      ],
      // 配置弹窗
      row:{},
      configDialogVisible:false,
      configFormData:{
        algorithmg:'',
        model:''

      }
    }
  },
  created(){
  },
  methods:{
    getList(){
      console.log(this.searchData)
    },
    search(){

    },
    handleClick(row) {
      console.log(row);
    },
    selectConfig(row){
      this.row = row
      this.configDialogVisible = true
    },
    uploadData(row){

      this.$router.push({
        name:'multimodalCoPre_patientsDataEntry',
        params :{id:row.patientId}
      })
    }
  }
}
</script>

<style scoped>
</style>
