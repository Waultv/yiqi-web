<template>
  <div>
    <h1>病人id:{{patientId}}</h1>
    <el-row>
      <!-- 左侧六个数据上传分块 -->
      <el-col :span="12">
        <el-card class="upload-block">
          <div slot="header" class="clearfix">
            <span>心音</span>
            <el-upload
              :action="uploadEndpoint"
              :on-success="handleUploadSuccess"
              :on-error="handleUploadError"
              :before-upload="beforeUpload"
              :show-file-list="false"
              style="float: right; padding: 3px 0"
            >
              <i class="el-icon-upload"></i>
              <div class="el-upload__text">点击上传</div>
            </el-upload>
          </div>
        </el-card>
        <el-card class="upload-block">
          <div slot="header" class="clearfix">
            <span>心动</span>
            <el-upload
              :action="uploadEndpoint"
              :on-success="handleUploadSuccess"
              :on-error="handleUploadError"
              :before-upload="beforeUpload"
              :show-file-list="false"
              style="float: right; padding: 3px 0"
            >
              <i class="el-icon-upload"></i>
              <div class="el-upload__text">点击上传</div>
            </el-upload>
          </div>
        </el-card>
        <el-card class="upload-block">
          <div slot="header" class="clearfix">
            <span>心脏CT</span>
            <el-upload
              :action="uploadEndpoint"
              :on-success="handleUploadSuccess"
              :on-error="handleUploadError"
              :before-upload="beforeUpload"
              :show-file-list="false"
              style="float: right; padding: 3px 0"
            >
              <i class="el-icon-upload"></i>
              <div class="el-upload__text">点击上传</div>
            </el-upload>
          </div>
        </el-card>
        <el-card class="upload-block">
          <div slot="header" class="clearfix">
            <span>肺部CT</span>
            <el-upload
              :action="uploadEndpoint"
              :on-success="handleUploadSuccess"
              :on-error="handleUploadError"
              :before-upload="beforeUpload"
              :show-file-list="false"
              style="float: right; padding: 3px 0"
            >
              <i class="el-icon-upload"></i>
              <div class="el-upload__text">点击上传</div>
            </el-upload>
          </div>
        </el-card>
        <el-card class="upload-block">
          <div slot="header" class="clearfix">
            <span>脑部CT</span>
            <el-upload
              :action="uploadEndpoint"
              :on-success="handleUploadSuccess"
              :on-error="handleUploadError"
              :before-upload="beforeUpload"
              :show-file-list="false"
              style="float: right; padding: 3px 0"
            >
              <i class="el-icon-upload"></i>
              <div class="el-upload__text">点击上传</div>
            </el-upload>
          </div>
        </el-card>
        <el-card class="upload-block">
          <div slot="header" class="clearfix">
            <span>脑部病理切片</span>
            <el-upload
              :action="uploadEndpoint"
              :on-success="handleUploadSuccess"
              :on-error="handleUploadError"
              :before-upload="beforeUpload"
              :show-file-list="false"
              style="float: right; padding: 3px 0"
            >
              <i class="el-icon-upload"></i>
              <div class="el-upload__text">点击上传</div>
            </el-upload>
          </div>
        </el-card>
      </el-col>
      <!-- 右侧五个数据上传分块 -->
      <el-col :span="12">
        <el-card class="upload-block">
          <div slot="header" class="clearfix">
            <span>心电</span>
            <el-upload
              :action="uploadEndpoint"
              :on-success="handleUploadSuccess"
              :on-error="handleUploadError"
              :before-upload="beforeUpload"
              :show-file-list="false"
              style="float: right; padding: 3px 0"
            >
              <i class="el-icon-upload"></i>
              <div class="el-upload__text">点击上传</div>
            </el-upload>
          </div>
        </el-card>
        <el-card class="upload-block">
          <div slot="header" class="clearfix">
            <span>心脏MR</span>
            <el-upload
              :action="uploadEndpoint"
              :on-success="handleUploadSuccess"
              :on-error="handleUploadError"
              :before-upload="beforeUpload"
              :show-file-list="false"
              style="float: right; padding: 3px 0"
            >
              <i class="el-icon-upload"></i>
              <div class="el-upload__text">点击上传</div>
            </el-upload>
          </div>
        </el-card>
        <el-card class="upload-block">
          <div slot="header" class="clearfix">
            <span>心脏超声</span>
            <el-upload
              :action="uploadEndpoint"
              :on-success="handleUploadSuccess"
              :on-error="handleUploadError"
              :before-upload="beforeUpload"
              :show-file-list="false"
              style="float: right; padding: 3px 0"
            >
              <i class="el-icon-upload"></i>
              <div class="el-upload__text">点击上传</div>
            </el-upload>
          </div>
        </el-card>
        <el-card class="upload-block">
          <div slot="header" class="clearfix">
            <span>神经</span>
            <el-upload
              :action="uploadEndpoint"
              :on-success="handleUploadSuccess"
              :on-error="handleUploadError"
              :before-upload="beforeUpload"
              :show-file-list="false"
              style="float: right; padding: 3px 0"
            >
              <i class="el-icon-upload"></i>
              <div class="el-upload__text">点击上传</div>
            </el-upload>
          </div>
        </el-card>
        <el-card class="upload-block">
          <div slot="header" class="clearfix">
            <span>胃肠</span>
            <el-upload
              :action="uploadEndpoint"
              :on-success="handleUploadSuccess"
              :on-error="handleUploadError"
              :before-upload="beforeUpload"
              :show-file-list="false"
              style="float: right; padding: 3px 0"
            >
              <i class="el-icon-upload"></i>
              <div class="el-upload__text">点击上传</div>
            </el-upload>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <!-- 确认按钮 -->
    <el-row class="confirm-button">
      <el-col :span="24">
        <el-button type="primary" @click="confirmUpload">确认</el-button>
      </el-col>
    </el-row>
  </div>
</template>


<script>
export default {
  name: "patientsDataEntry",
  data(){
    return {
      patientId:''

    }
  },
  mounted() {
    this.patientId = this.$route.params.id
  },
  methods:{
    confirmUpload() {
      // 处理确认上传逻辑
      this.$router.push({
        name:'selectData',
        params :{id:this.patientId}
      })
    },
    handleUploadSuccess(response) {
      // 上传成功后的处理逻辑
      this.uploadedFiles.push(response.data); // 假设API返回的数据中包含文件信息，这里简化处理
    },
    handleUploadError(error) {
      // 上传失败后的处理逻辑
      console.error('File upload failed:', error);
    },
    beforeUpload(file) {
      // 可以在这里添加上传前的验证逻辑
      console.log('Before upload:', file);
      return true; // 返回true表示允许上传
    },
  }
}
</script>

<style scoped>
.upload-block {
  margin: 15px;
}

.confirm-button {
  margin-top: 20px;
  text-align: center;
}
.el-card{
  height: 80px;
}
.el-row{
  margin-left: 10%;
  width: 80%;
}
</style>
