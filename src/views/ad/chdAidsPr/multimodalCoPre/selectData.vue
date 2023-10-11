<template>
  <div class="patient-info">
    <!-- 患者信息栏 -->
    <el-row class="info-row">
      <el-col :span="12">
        <div class="info-label">姓名：</div>
        <div class="info-value">{{ patientInfo.name }}</div>
      </el-col>
      <el-col :span="4">
        <div class="info-label">年龄：</div>
        <div class="info-value">{{ patientInfo.age }}</div>
      </el-col>
      <el-col :span="8">
        <div class="info-label">性别：</div>
        <div class="info-value">{{ patientInfo.gender }}</div>
      </el-col>
      <el-col :span="24" class="back-button">
        <!-- 返回按钮 -->
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
        <div class="image-option" v-for="(image, index) in ultrasoundImages" :key="index">
          <el-radio v-model="selectedImageIndex" :label="index">{{ '图像 ' + (index + 1) }}</el-radio>
          <img :src="image" alt="ultrasound image">
        </div>
      </el-col>
    </el-row>

    <!-- 结果展示区域 -->
    <el-row class="result-display">
      <el-col :span="12">
        <!-- 左侧展示选中的图像 -->
        <div v-if="selectedImageIndex !== null" class="selected-image">
          <img :src="ultrasoundImages[selectedImageIndex]" alt="selected ultrasound image">
        </div>
      </el-col>
      <el-col :span="12">
        <!-- 右侧表格区域 -->
        <el-table :data="tableData" style="width: 100%" border>
          <el-table-column label="列1" prop="column1"></el-table-column>
          <el-table-column label="列2" prop="column2"></el-table-column>
          <!-- Add more columns as needed -->
        </el-table>
        <!-- 结果图像区域 -->
        <div class="result-image">
          <!-- Placeholder for result image -->
          Result Image
        </div>
        <!-- 表格导出和结果图片下载按钮 -->
        <el-button type="success" class="export-button" @click="exportTable">表格导出</el-button>
        <el-button type="primary" class="download-button" @click="downloadResultImage">下载结果图像</el-button>
      </el-col>
    </el-row>
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
      ultrasoundImages: ['image1.jpg', 'image2.jpg', 'image3.jpg'], // Replace with actual image URLs
      selectedImageIndex: null,
      tableData: [
        { column1: 'Data 1', column2: 'Value 1' },
        { column1: 'Data 2', column2: 'Value 2' },
        // Add more rows as needed
      ]
    };
  },
  methods: {
    goBack() {
      this.$router.push({
        name:'multimodalCoPre_selectP'
      })
      // Handle go back action
    },
    exportTable() {
      // Handle table export action
    },
    downloadResultImage() {
      // Handle result image download action
    }
  }
};
</script>

<style scoped>
.patient-info {
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
