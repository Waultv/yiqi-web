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


    <div class="image-processing-app">
      <!-- 左侧：图片列表 -->
      <div class="left-panel">
        <h2>图片列表</h2>
        <ul>
          <li v-for="(image, index) in ultrasoundImages" :key="index">
            <label>
              <input type="checkbox" v-model="selectedImages" :value="image">
              <img :src="image" alt="Image" class="thumbnail">
            </label>
          </li>
        </ul>
        <button @click="processImages">开始处理</button>
      </div>

      <!-- 右侧：处理后的图片 -->
      <div class="right-panel">
        <h2>处理后的图片</h2>
        <div v-for="(image, index) in processedImages" :key="index">
          <img :src="image" alt="Processed Image" class="thumbnail">
          <div class="image-actions">
            <button @click="zoomIn(index)">放大</button>
            <button @click="downloadImage(image)">下载</button>
          </div>
        </div>
      </div>
    </div>


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
      ultrasoundImages: [image1, image2], // Replace with actual image URLs
      // selectedImageIndex: null,
      selectedImages: [], // 存放用户选择的图片
      processedImages: [], // 存放处理后的图片
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
        name:'selectP'
      })
      // Handle go back action
    },
    exportTable() {
      // Handle table export action
    },
    downloadResultImage() {
      // Handle result image download action
    },
    processImages() {
      // 清空已处理的图片
      this.processedImages = [];

      // 获取用户选择的图片数量
      const selectedCount = this.selectedImages.length;

      // 将选中的图片添加到已处理的图片中
      for (let i = 0; i < selectedCount; i++) {
        this.processedImages.push(this.selectedImages[i]);
      }
    },
  }
};
</script>

<style scoped>
.patient-info {
  padding: 20px;
  //justify-content: space-between;
  //display: flex;
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
.image-processing-app {
  display: flex;
  justify-content: space-between; /* 图片容器在两侧对齐 */
  flex-wrap: wrap; /* 换行布局，适应不同屏幕宽度 */
}
.result-display {
  margin-top: 20px;
}

.selected-image img {
  max-width: 100%;
  border: 1px solid #ccc;
}

.thumbnail {
  max-width: 200px; /* 设置最大宽度 */
  max-height: 200px; /* 设置最大高度，保持宽高比例 */
  object-fit: contain; /* 保持图片宽高比例，不拉伸 */
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

.left-panel, .right-panel {
  flex: 1; /* 让左侧和右侧容器平均占据可用空间 */
  padding: 20px; /* 添加内边距以增加空白间距 */
}

.left-panel img {
  cursor: pointer;
}
</style>
