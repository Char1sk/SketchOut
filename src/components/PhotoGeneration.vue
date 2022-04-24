<template>
    <div class="all">
        <div class="top">人脸素描照片生成</div>
        <div class="content">
            <!-- Upload Part, Title, Uploader, Button -->
            <div class="uploadPart">
                <!-- Upload Title -->
                <div class="uploadTitle">
                    上传人脸素描图片
                </div>
                <!-- Upload Image -->
                <el-upload class="uploadImage"
                        action="#"
                        ref="upload"
                        :auto-upload="false"
                        :file-list="fileList"
                        :show-file-list="false"
                        :on-change="handleChange">
                    <!-- <img v-if="uploadImageUrl" :src="uploadImageUrl" class="uploadedImage"> -->
                    <el-image
                            :class="{'uploadedImage': true, 'uploadedImageCorrect': uploadImageUrl}"
                            v-if="uploadImageUrl"
                            :src="uploadImageUrl"
                            fit="fit">
                        <div slot="placeholder">
                            加载中...
                        </div>
                    </el-image>
                    <i v-else class="el-icon-plus uploadIcon"></i>
                </el-upload>
                <!-- confirm button -->
                <el-button class="confirmButton" size="middle" type="success"
                        @click="handleSubmitUpload">
                    上传到服务器
                </el-button>
            </div>
            <!-- Middle Part, Arrow, Clear, TEST -->
            <div class="middlePart">
                <!-- Arrow Image -->
                <el-image class="arrowImage"
                        fit="contain"
                        src="/Arrow.png">
                    <div slot="placeholder" class="arrowLoading"></div>
                </el-image>
                <!-- Clear Button -->
                <el-popconfirm title="确定清空本页面？" @confirm="clearAll">
                    <el-button slot="reference" type="danger" icon="el-icon-delete" circle>
                    </el-button>
                </el-popconfirm>
                <!-- TEST -->
                <!-- <el-button @click="handleDownloadIamge(resultImageUrl, 'name')">
                    CLICK ME
                </el-button> -->
            </div>
            <!-- Result Part, Title, Image, Button -->
            <div class="resultPart">
                <!-- Result Title -->
                <div class="resultTitle">
                    人脸照片生成结果
                </div>
                <!-- Waiting Fake Image -->
                <el-image v-if="waitingResult"
                        class="fakeResultImage"
                        src="NOTEXISIT"
                        fit="fit">
                    <div slot="error" class="placeholderText">
                        <span>上传中...</span>
                    </div>
                </el-image>
                <!-- Error or Real Image -->
                <el-image v-else
                        :class="{'realResultImage': true, 'realResultImageCorrect': resultImageUrl}"
                        :src="resultImageUrl"
                        :preview-src-list="[resultImageUrl]"
                        fit="fit">
                    <div slot="placeholder" class="placeholderText">
                        <span>加载中...</span>
                    </div>
                    <div slot="error" class="placeholderText">
                        <i class="el-icon-picture-outline"></i>
                        <span>预测结果</span>
                    </div>
                </el-image>
                <!-- Download Button -->
                <el-button class="downloadButton" size="middle" type="primary"
                        @click="handleDownloadIamge(resultImageUrl, 'name')">
                    下载结果图片
                </el-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            server: 'http://ali.hughnash.top:5001/',
            api: 'sketch',
            // server: 'http://ali.hughnash.top:5000/',
            // server: 'http://47.99.131.112:5000/',
            uploadImageUrl: '',
            resultImageUrl: '',
            fileToUpload: undefined,
            waitingResult: false,
            fileList: [],
            // hideUpload: false,
            // dialogImageUrl: '',
            // dialogVisible: false,
        };
    },
    methods: {
        handleChange(file, fileList) {
            console.log('Change', file, fileList, this.fileList);
            
            console.log(this.$refs.upload.uploadFiles)
            if (this.$refs.upload.uploadFiles.length > 1) {
                this.$refs.upload.uploadFiles.shift();
            }
            
            let type = file.raw.type;
            let isImage = (type.substring(0,type.indexOf('/')) === 'image');
            if (isImage) {
                this.uploadImageUrl = URL.createObjectURL(file.raw);
                this.fileToUpload = file.raw;
            } else {
                this.$message.error('只能上传图片！');
            }
        },
        handleSubmitUpload() {
            console.log("Submit:", this.uploadImageUrl);
            if (this.uploadImageUrl) {
                this.waitingResult = true;
                let reader = new FileReader();
                reader.readAsDataURL(this.fileToUpload);
                // Post after loaded
                let that = this;
                reader.onload = function(event) {
                    console.log("Loaded:", event)
                    console.log('data:', this.result);
                    let data = this.result
                    let config = {
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    };
                    that.axios.post(that.server + that.api, data, config)
                        .then(response => {
                            console.log('success', response, response.data);
                            that.resultImageUrl = that.server + response.data;
                            console.log(that.resultImageUrl)
                            that.waitingResult = false;
                        })
                        .catch(error => {
                            alert(error);
                            that.waitingResult = false;
                        });
                }
            } else {
                this.$message.error('请先选择上传文件');
            }
        },
        handleDownloadIamge(imgsrc, name) {
            var image = new Image();
            // 解决跨域 Canvas 污染问题
            image.setAttribute("crossOrigin", "anonymous");
            image.onload = function() {
                var canvas = document.createElement("canvas");
                canvas.width = image.width;
                canvas.height = image.height;
                var context = canvas.getContext("2d");
                context.drawImage(image, 0, 0, image.width, image.height);
                var url = canvas.toDataURL("image/png"); //得到图片的base64编码数据
                var a = document.createElement("a"); // 生成一个a元素
                var event = new MouseEvent("click"); // 创建一个单击事件
                a.download = name || "photo"; // 设置图片名称
                a.href = url; // 将生成的URL设置为a.href属性
                a.dispatchEvent(event); // 触发a的单击事件
            };
            image.src = imgsrc;

        },
        clearAll() {
            // this.dialogImageUrl = '';
            // this.dialogVisible = false;
            this.waitingResult = false;
            this.resultImageUrl = '';
            this.uploadImageUrl = '';
            // this.hideUpload = false
            this.$refs.upload.uploadFiles = [];
            // setTimeout(()=>{this.setHideUpload(false)}, 1000);
        },
        
    }
}
</script>

<style>
.all .content .uploadPart .uploadImage .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    background-color: rgb(251,253,255);
    cursor: pointer;
    position: relative;
    overflow: hidden;
}

.all .content .uploadPart .uploadImage .el-upload:hover {
    border-color: #409EFF;
}

/* Useless for now */
.hide .el-upload--picture-card{
    display: none;
}
</style>

<style scoped>
.confirmButton {
    background-color: rgb(75, 181, 196);
    border-color: rgb(75, 181, 196);
}

.confirmButton:hover {
    background-color: rgb(85, 204, 219);
    border-color: rgb(85, 204, 219);
}

.downloadButton {
    background-color: rgb(161, 132, 219);
    border-color: rgb(154, 127, 209);
}

.downloadButton:hover {
    background-color: rgb(176, 146, 236);
    border-color: rgb(85, 204, 219);
}

.all {
    position: relative;
    height: 100%;
    background-image: linear-gradient(to right, rgb(99,135,200), rgb(194,111,209));
}

.all .top {
    height: 1.5%;
    font-size: 28px;
    color: rgb(245, 245, 214);
    /* margin-top: 11px; */
    padding-top: 10px;
}

.all .content {
    /* Margin */
    /* margin-left: 200px;
    margin-top: 50px; */
    /* Geometry */
    height: 100%;
    /* Use Flex */
    display: flex;
    display: -webkit-flex;
    /* Main Axis Direction */
    flex-direction: row;
    /* Main Axis Wrap */
    flex-wrap: nowrap;
    /* Main Axis Alignment */
    justify-content: space-evenly;
    /* Cross Axis Alignment */
    align-items: center;
    /* background-color: red; */
}

.all .content .uploadPart {
    /* item percentage */
    flex-basis: 30%;
    /* Use Flex */
    display: flex;
    display: -webkit-flex;
    /* Main Axis Direction */
    flex-direction: column;
    /* Main Axis Wrap */
    flex-wrap: nowrap;
    /* Main Axis Alignment */
    justify-content: space-around;
    /* Cross Axis Alignment */
    align-items: center;
    /* Background */
    border-radius: 2%;
    background-color: rgb(205, 184, 248);
    box-shadow: -2px 2px 10px 0 rgba(0, 0, 0, 0.5),
            2px -2px 10px 0 rgba(255, 255, 255, 0.5);
    /* TEST */
    height: 70%;
    /* background-color: blue; */
}

.all .content .uploadPart .uploadTitle {
    font-size: 22px;
}

.all .content .uploadPart .uploadImage .uploadedImage {
    width: 200px;
    height: 200px;
    display: block;
}

.all .content .uploadPart .uploadImage .uploadedImageCorrect {
    width: 200px;
    height: 250px;
    display: block;
}

.all .content .uploadPart .uploadIcon {
    font-size: 28px;
    color: #8c939d;
    width: 200px;
    height: 200px;
    line-height: 200px;
    text-align: center;
}

.all .content .middlePart {
    flex-basis: 10%;
    /* TEST */
    /* background-color: orange; */
}

.all .content .middlePart .arrowImage {
    width: 150px;
    height: 80px;
}

.all .content .middlePart .arrowLoading {
    background-image: linear-gradient(to right, rgb(141,124,204), rgb(152,122,205));
}

.all .content .resultPart {
    /* item percentage */
    flex-basis: 30%;
    /* Use Flex */
    display: flex;
    display: -webkit-flex;
    /* Main Axis Direction */
    flex-direction: column;
    /* Main Axis Wrap */
    flex-wrap: nowrap;
    /* Main Axis Alignment */
    justify-content: space-around;
    /* Cross Axis Alignment */
    align-items: center;
    /* Background */
    border-radius: 2%;
    background-color: rgb(126,199,209);
    box-shadow: -2px 2px 10px 0 rgba(0, 0, 0, 0.5),
            2px -2px 10px 0 rgba(255, 255, 255, 0.5);
    /* Geometry */
    height: 70%;
}

.all .content .resultPart .resultTitle {
    font-size: 22px;
}

.all .content .resultPart .fakeResultImage {
    width: 200px;
    height: 200px;
}

.all .content .resultPart .realResultImage {
    width: 200px;
    height: 200px;
}

.all .content .resultPart .realResultImageCorrect {
    width: 200px;
    height: 250px;
}

.all .content .resultPart .placeholderText {
    width: 196px;
    height: 196px;
    border-style: dashed;
    border-radius: 5%;
    border-width: 1px;
    border-color: rgb(192,204,218);
    background-color: rgb(251,253,255);
    /* Use Flex */
    display: flex;
    display: -webkit-flex;
    /* Main Axis Direction */
    flex-direction: row;
    /* Main Axis Wrap */
    flex-wrap: nowrap;
    /* Main Axis Alignment */
    justify-content: center;
    /* Cross Axis Alignment */
    align-items: center;
}
</style>