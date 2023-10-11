<template>
  <div>
    <SearchForm :searchForm="searchForm" :searchHandle="searchHandle" :searchData="searchData"/>
    <el-table
      :data="tableData"
      :row-class-name="tableRowColor"
      border
      highlight-current-row
      @current-change="handleSelectionChange"
      style="width: 100%">
      <!--      多选-->
      <!--      <el-table-column-->
      <!--        type="selection"-->
      <!--        width="55">-->
      <!--      </el-table-column>-->
      <el-table-column v-for="item in columns" fixed :prop="item.prop" :key="item.prop" :label="item.label">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="140">
        <template slot-scope="scope">
          <el-button @click="selectConfig(scope.row)" type="text" size="small">选择模型</el-button>
          <el-button @click="uploadData(scope.row)" type="text" size="small">上传数据</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-button type="primary" class="btn-confirm" @click="confirm">确认选择</el-button>
    <!--    选择配置弹窗-->
    <el-dialog title="选择配置" :visible.sync="configDialogVisible">
      <el-form :model="configFormData">
        <el-form-item label="当前算法">
          <el-select v-model="configFormData.algorithmg" placeholder="请选择算法">
            <el-option label="算法一" value="shanghai"></el-option>
            <el-option label="算法二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="当前模型">
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
    <!--    上传病人数据弹窗-->
    <el-dialog :title="'患者'+row.patientName+'数据上传'" :visible.sync="updateDialogVisible">
      <PatientsDataEntry :patientId="row.patientId"></PatientsDataEntry>
      <div slot="footer" class="dialog-footer">
        <el-button @click="updateDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="updateDialogVisible = false">确 定</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
import SearchForm from '@/components/SearchForm/index'
import PatientsDataEntry from '@/views/common/components/patientsDataEntry'

export default {
  components: {SearchForm, PatientsDataEntry},
  name: 'home',
  data() {
    return {
      searchData: {
        // patientId:1,
        // patientName:2
      },
      searchForm: [
        {type: 'Input', label: '患者id', prop: 'patientId', width: '100px'},
        {type: 'Input', label: '患者姓名', prop: 'patientName', width: '100px'}
      ],
      searchHandle: [
        {label: '搜索', type: 'primary', handle: this.search}
      ],
      // 表格列
      columns: [
        {
          prop: 'patientId',
          label: '患者ID'
        },
        {
          prop: 'patientName',
          label: '患者姓名'
        },
        {
          prop: 'gender',
          label: '性别'
        },
        {
          prop: 'age',
          label: '年龄'
        }
      ],
      // 表格数据
      tableData: [
        {
          patientId: 1,
          patientName: 'x'
        },
        {
          patientId: 2,
          patientName: 'y'
        }
      ],
      // 表格选中数据
      multipleSelection: [],
      singleSelection: {},
      // 配置弹窗
      row: {},
      configDialogVisible: false,
      updateDialogVisible: false,
      configFormData: {
        algorithmg: '',
        model: ''

      }
    }
  },
  created() {
  },
  mounted() {
    console.log(this.$route.params)
  },
  methods: {
    // 获取表格数据
    search() {

    },
    // 选择配置
    selectConfig(row) {
      this.row = row
      this.configDialogVisible = true
    },
    // 上传数据
    uploadData(row) {
      this.row = row
      this.updateDialogVisible = true

    },
    // 表格背景色
    tableRowColor(row, rowIndex) {
      //已有数据病人为绿色

    },
    handleSelectionChange(val) {
      this.singleSelection = val;
    },
    confirm() {
      // 底部确认按钮，拿到多选数据
      console.log(this.singleSelection)
      if (JSON.stringify(this.singleSelection) === '{}') {
        this.$message.info('请选择至少一条数据')
        return
      }
      const currentModule = sessionStorage.getItem("currentModule")
      if (currentModule) {
        this.$router.push({
          name: `${currentModule}-selectData`,//selectData页面全部以：‘文件夹-selectData’命名
          params: {singleSelection: this.singleSelection}
        })
      }
    }
  }
}
</script>

<style scoped>
.btn-confirm {
  position: absolute;
  bottom: 50px;
  left: 50%;
}
</style>
