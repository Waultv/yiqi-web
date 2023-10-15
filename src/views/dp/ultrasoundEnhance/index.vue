<template>
  <div>
    <SearchForm :searchForm="searchForm" :searchHandle="searchHandle" :searchData="searchData"/>
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
        width="120">
        <template slot-scope="scope">
          <el-button @click="showHistory(scope.row)" type="text" size="small">查看详情</el-button>
          <el-button type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="图像增强操作历史记录" :visible.sync="detailDialogVisible">
      <el-table
        :data="detailTableData"
        border
        style="width: 100%">
        <el-table-column label="编号" align="center">
          <template slot-scope="scope">
            <span>操作编号_{{ scope.row.id }}</span>
            <span @click="showDetail(scope.$index)">查看</span>
            <div v-show="scope.$index==currentDetailIndex">
              <div>详情</div>
              <div>操作时间{{ scope.row.time }}</div>
              <div>数据类型{{ scope.row.type }}</div>
              <div>
                <el-button icon="el-icon-success" circle></el-button>
                <el-button icon="el-icon-delete" circle></el-button>
                <el-button icon="el-icon-error" circle @click="currentDetailIndex = -1"></el-button>
              </div>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="处理前" align="center">
          <template slot-scope="scope">
            <div>{{ scope.row.before }}</div>
            <img v-show="scope.$index==currentDetailIndex" :src="scope.row.beforeImg"/>
          </template>
        </el-table-column>
        <el-table-column label="处理后" align="center">
          <template slot-scope="scope">
            <div>{{ scope.row.after }}</div>
            <img v-show="scope.$index==currentDetailIndex" :src="scope.row.afterImg"/>
          </template>
        </el-table-column>
      </el-table>
      <div slot="footer" class="dialog-footer">
        <el-button @click="detailDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="detailDialogVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import SearchForm from '@/components/SearchForm/index'

export default {
  components: {SearchForm},
  name: 'home',
  data() {
    return {
      // 表单数据
      searchData: {
        roomNo: 1,
        residentName: 2,
        mobilePhone: 3
      },
      // 表单搜索项配置
      searchForm: [
        {type: 'Input', label: '患者id', prop: 'patientId', width: '100px'},
        {type: 'Input', label: '患者姓名', prop: 'patientName', width: '100px'},
        {type: 'DateTime', label: '操作时间', prop: 'operationTime', width: '100px'}],
      // 表单操作
      searchHandle: [
        {label: '搜索', type: 'primary', handle: this.getList},
        {label: '新建操作', type: 'primary', handle: this.addOperation}
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
        },
        {
          prop: 'usedAlgorithmg',
          label: '用到的算法'
        },
        {
          prop: 'usedModel',
          label: '用到的模型'
        },
        {
          prop: 'operationTime',
          label: '操作时间'
        }
      ],
      // 表格数据
      tableData: [
        {
          patientId: 12,
          patientName: '毛毛',
          gender: 'man',
          age: 2,
          usedAlgorithmg: 'dps',
          usedModel: '??',
          operationTime: '2023-45-33'
        },
        {
          patientId: 19,
          patientName: 'kiki',
          gender: 'man',
          age: 2,
          usedAlgorithmg: 'dps',
          usedModel: '??',
          operationTime: '2023-45-33'
        },
      ],
      //详情弹窗
      detailDialogVisible: false,
      detailTableData: [
        {
          id: '230745-8',
          before: 'US-ID82932',
          after: 'US-ID3748',
          beforeImg: require('@/assets/images/1.jpg'),
          afterImg: require('@/assets/images/1.jpg'),
          time: '2023-5-4',
          type: '超声'
        },
        {
          id: '230745-9',
          before: 'US-ID82932',
          after: 'US-ID3748',
          beforeImg: require('@/assets/images/1.jpg'),
          afterImg: require('@/assets/images/1.jpg'),
          time: '2023-5-4',
          type: '超声'
        }
      ],
      currentDetailIndex: -1 //当前展示详情的下标
    }
  },
  created() {
  },
  methods: {
    // 打开详情弹窗
    showHistory() {
      this.detailDialogVisible = true
    },
    showDetail(index) {
      this.currentDetailIndex = index
    },
    getList() {
      console.log(this.searchData)
      // 异步查询
      this.tableData = [
        {
          patientId: 1,
          patientName: 'x',
          gender: 'male',
          age: 25,
          usedAlgorithmg: 'matrixArg',
          usedModel: 'foolModel',
          operationTime: '2023-09-27 10:10:10'
        }
      ]
    },
    addOperation() {
      //往session暂存模块名
      //注意模块名修改
      sessionStorage.setItem('currentModule', 'ultrasoundEnhance')
      this.$router.push({
        name: 'selectPatient',
        params: {
          //示例数据，非真实数据，向选择病人页面传值
          role: '当前的权限',
          doctorInfo: {
            id: 1,
            name: 'xu',
            department: '内科'
          }
        }
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
