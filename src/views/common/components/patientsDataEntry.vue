<template>
  <div>
    <el-card class="upload-block" v-for="item in cardList" :key="item.title">
      <div slot="header" class="clearfix">
        <span>{{ item.title }}</span>
        <el-upload
          :action="item.action"
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
  </div>
</template>


<script>
export default {
  name: "patientsDataEntry",
  props:['patientId'],
  data() {
    return {
      cardList: [
        {
          title: '心音',
          action: ''
        },
        {
          title: '心电',
          action: ''
        },
        {
          title: '心动',
          action: ''
        },
        {
          title: '心脏MR',
          action: ''
        },
        {
          title: '心脏CT',
          action: ''
        },
        {
          title: '心脏超声',
          action: ''
        },
        {
          title: '肺部CT',
          action: ''
        },
        {
          title: '神经',
          action: ''
        },
        {
          title: '脑部CT',
          action: ''
        },
        {
          title: '胃肠',
          action: ''
        },
        {
          title: '脑部病理切片',
          action: ''
        }
      ]

    }
  },
  mounted() {
    console.log(this.patientId)
  },
  methods: {
    // confirmUpload() {
    //   // 处理确认上传逻辑
    //   const currentModule = sessionStorage.getItem("currentModule")
    //   if (currentModule) {
    //     this.$router.push({
    //       name: `${currentModule}-selectData`,//selectData页面全部以：‘文件夹-selectData’命名
    //       params: {id: this.patientId}
    //     })
    //   }
    // },
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
.upload-block:nth-child(odd) {
  margin: 5px 5% 5px 100px;
}

.upload-block:nth-child(even) {
  margin: 5px 100px 5px 0;
}

.el-card {
  height: 80px;
  width: calc((95% - 200px) / 2);
  display: inline-block;
}

</style>
