<template>
  <div class="patient-info">
    <!-- 患者信息栏 -->
    <el-row class="info-row">
      <el-col :span="12">
        <div class="info-label">姓名：</div>
        <div class="info-value">{{ patientInfo.patientName + '/id:' + patientInfo.patientId }}</div>
      </el-col>
      <el-col :span="4">
        <div class="info-label">年龄：</div>
        <div class="info-value">{{ patientInfo.patientAge }}</div>
      </el-col>
      <el-col :span="8">
        <div class="info-label">性别：</div>
        <div class="info-value">{{ patientInfo.patientGender }}</div>
      </el-col>
      <el-col :span="24" class="back-button">
        <!-- 返回按钮 -->
        <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
        <el-button type="primary" @click="goBack">返回</el-button>
      </el-col>
    </el-row>

    <!-- 当前算法模型信息 -->
    <div class="algorithm-info">
      当前使用的算法模型：{{ currentAlgorithm }}
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

    <!-- 结果展示区域 -->
<!--    <el-row class="result-display">-->
<!--      <el-col :span="12">-->
<!--        &lt;!&ndash; 左侧展示选中的图像 &ndash;&gt;-->
<!--        <div v-if="selectedImageIndex !== null" class="selected-image">-->
<!--          <img :src="ultrasoundImages[selectedImageIndex]" alt="selected ultrasound image">-->
<!--        </div>-->
<!--      </el-col>-->
<!--      <el-col :span="12">-->
<!--        &lt;!&ndash; 右侧表格区域 &ndash;&gt;-->
<!--        <el-table :data="tableData" style="width: 100%" border>-->
<!--          <el-table-column label="列1" prop="column1"></el-table-column>-->
<!--          <el-table-column label="列2" prop="column2"></el-table-column>-->
<!--          &lt;!&ndash; Add more columns as needed &ndash;&gt;-->
<!--        </el-table>-->
<!--        &lt;!&ndash; 结果图像区域 &ndash;&gt;-->
<!--        <div class="result-image">-->
<!--          &lt;!&ndash; Placeholder for result image &ndash;&gt;-->
<!--          Result Image-->
<!--        </div>-->
<!--        &lt;!&ndash; 表格导出和结果图片下载按钮 &ndash;&gt;-->
<!--        <el-button type="success" class="export-button" @click="exportTable">表格导出</el-button>-->
<!--        <el-button type="primary" class="download-button" @click="downloadResultImage">下载结果图像</el-button>-->
<!--      </el-col>-->
<!--    </el-row>-->
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
      currentAlgorithm: 'Algorithm X', // Replace with actual algorithm name
      checkAll: false,
      isIndeterminate: true,
      ultrasoundImages: [
        {
          id:1,
          url:require('@/assets/images/1.jpg')
        },
        {
          id:2,
          url:require('@/assets/images/1.jpg')
        },
        {
          id:3,
          url:require('@/assets/images/1.jpg')
        },
        {
          id:4,
          url:require('@/assets/images/1.jpg')
        },
        {
          id:5,
          url:require('@/assets/images/1.jpg')
        },
        {
          id:6,
          url:require('@/assets/images/1.jpg')
        },
        {
          id:7,
          url:require('@/assets/images/1.jpg')
        },
        {
          id:8,
          url:require('@/assets/images/1.jpg')
        },
        {
          id:9,
          url:require('@/assets/images/1.jpg')
        }
       ], // Replace with actual image URLs
      selectedImageIndex: [],
      tableData: [
        { column1: 'Data 1', column2: 'Value 1' },
        { column1: 'Data 2', column2: 'Value 2' },
        // Add more rows as needed
      ]
    };
  },
  methods: {
    // 全选
    handleCheckAllChange(val){
      this.selectedImageIndex = []
      if(val){
        for(let item of this.ultrasoundImages){
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
        name:'selectPatient'
      })
      // Handle go back action
    },
    exportTable() {
      // Handle table export action
    },
    downloadResultImage() {
      // Handle result image download action
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
}

.info-label {
  font-weight: bold;
}

.info-value {
  margin-bottom: 5px;
}

.back-button {
  text-align: right;
}

.algorithm-info {
  margin-bottom: 20px;
}
.ultrasound-images{
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

.result-display {
  margin-top: 20px;
}

.selected-image img {
  max-width: 100%;
  border: 1px solid #ccc;
}

.result-image {
  margin-top: 20px;
  border: 1px solid #ccc;
  padding: 20px;
  text-align: center;
  background-color: #f0f0f0;
}

.export-button {
  margin-top: 10px;
  margin-right: 10px;
}

.download-button {
  margin-top: 10px;
}
</style>
