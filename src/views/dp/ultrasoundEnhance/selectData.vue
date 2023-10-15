<template>
  <div class="patient-info">
    <!-- 患者信息栏 -->
    <div class="info-row">
      <div class="bold">当前患者信息</div>
      <div>姓名：{{ patientInfo.name + '/id:' + patientInfo.patientId }}</div>
      <div>年龄：{{ patientInfo.age }}</div>
      <div>性别：{{ patientInfo.gender }}</div>
      <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
      <el-button icon="el-icon-arrow-left" @click="goBack">重选病人</el-button>

    </div>

    <!-- 当前算法模型信息 -->
    <div class="algorithm-info">
      <div>请选择增强的数据类型：
        <el-select v-model="type" placeholder="请选择">
          <el-option
            v-for="item in typeOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div>请选择要进行的增强类型：
        <el-checkbox-group v-model="enhanceList" style="display:inline-block">
          <el-checkbox label="超分辨率"></el-checkbox>
          <el-checkbox label="去噪去模糊"></el-checkbox>
        </el-checkbox-group>

      </div>
    </div>
    <!-- 病人超声图像展示 -->
    <el-row class="ultrasound-images">
      <el-col :span="24">
        <el-checkbox-group v-model="selectedImageIndex" @change="handleCheckedCitiesChange">
          <div class="image-option" v-for="(image, index) in ultrasoundImages" :key="index">
            <el-checkbox :label="image.id" border style="height: max-content">
              <span>{{ '图像 ' + (index + 1) }}</span>
              <img :src="image.url" alt="ultrasound image">
            </el-checkbox>
          </div>
        </el-checkbox-group>
      </el-col>
    </el-row>
    <div class="center">
      <el-button icon="el-icon-check" @click="enhanceConfirm">确认选择</el-button>
      <div class="center">提示：单次操作请在列表中选择同一类型数据用于增强</div>
      <el-button @click="resultDialogVisible = true" :disabled="resultDisabled">查看结果</el-button>
    </div>
    <!-- 结果展示弹窗 -->
    <el-dialog title="图像增强操作历史记录" :visible.sync="resultDialogVisible">
      <div class="reslut-row">
        <div>原始图像</div>
        <div>增强图像</div>
      </div>
      <div class="reslut-row" v-for="(item,index) in resultData" :key="index">
        <img :src="item.beforeImg"/>
        <img :src="item.afterImg"/>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="resultDialogVisible = false">返 回</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      patientInfo: {
        name: 'John Doe',
        age: 35,
        gender: 'Male'
      },
      checkAll: false,
      isIndeterminate: true,
      ultrasoundImages: [
        {
          id: 1,
          url: require('@/assets/images/1.jpg')
        },
        {
          id: 2,
          url: require('@/assets/images/1.jpg')
        },
        {
          id: 3,
          url: require('@/assets/images/1.jpg')
        },
        {
          id: 4,
          url: require('@/assets/images/1.jpg')
        },
        {
          id: 5,
          url: require('@/assets/images/1.jpg')
        },
        {
          id: 6,
          url: require('@/assets/images/1.jpg')
        },
        {
          id: 7,
          url: require('@/assets/images/1.jpg')
        },
        {
          id: 8,
          url: require('@/assets/images/1.jpg')
        },
        {
          id: 9,
          url: require('@/assets/images/1.jpg')
        }
      ], // Replace with actual image URLs
      selectedImageIndex: [],
      tableData: [
        {column1: 'Data 1', column2: 'Value 1'},
        {column1: 'Data 2', column2: 'Value 2'},
        // Add more rows as needed
      ],
      typeOptions: [
        {
          label: '超声',
          value: '超声'
        },
        {
          label: 'CT',
          value: 'CT'
        },
        {
          label: 'MRI',
          value: 'MRI'
        },
        {
          label: '胃镜图像',
          value: '胃镜图像'
        }
      ],
      type: '',
      enhanceList: [], //增强类型
      resultDisabled: true,
      resultDialogVisible: false, // 处理结果弹窗
      resultData: [
        {
          beforeImg: require('@/assets/images/1.jpg'),
          afterImg: require('@/assets/images/1.jpg')
        },
        {
          beforeImg: require('@/assets/images/1.jpg'),
          afterImg: require('@/assets/images/1.jpg')
        }, {
          beforeImg: require('@/assets/images/1.jpg'),
          afterImg: require('@/assets/images/1.jpg')
        }
      ] //处理结果数据
    };
  },
  methods: {
    // 全选
    handleCheckAllChange(val) {
      this.selectedImageIndex = []
      if (val) {
        for (let item of this.ultrasoundImages) {
          this.selectedImageIndex.push(item.id)
        }
      }
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.ultrasoundImages.length;
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.ultrasoundImages.length;
    },
    goBack() {
      // const currentModule = sessionStorage.getItem("currentModule")
      this.$router.push({
        name: 'selectPatient'
      })
      // Handle go back action
    },
    exportTable() {
      // Handle table export action
    },
    downloadResultImage() {
      // Handle result image download action
    },
    // 确认增强选择
    enhanceConfirm() {
      this.resultDisabled = true
      if (this.selectedImageIndex.length <= 0) {
        this.$message.info("请选择至少一张图片")
        return
      }
      this.resultDisabled = false


    }
  },
  mounted() {
    this.patientInfo = this.$route.params.singleSelection
  }
};
</script>

<style scoped>
.patient-info {
  height: 100%;
  padding: 20px;
}


.info-row {
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.algorithm-info {
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
}

.ultrasound-images {
  max-height: 80%;
  overflow-y: scroll;
}

.ultrasound-images .image-option {
  display: inline-block;
  margin-right: 10px;
}

.ultrasound-images img {
  max-width: 100%;
  border: 1px solid #ccc;
}

.reslut-row {
  display: flex;
  justify-content: space-around;
  margin-bottom: 10px;
}

.selected-image img {
  max-width: 100%;
  border: 1px solid #ccc;
}

.bold {
  font-weight: bolder;
}

.center {
  text-align: center;
  margin-bottom: 10px;
}
</style>
