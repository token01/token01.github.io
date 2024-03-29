# 让小白3个月从零养成Machine Learning / AI 达人


本文的目的单纯想加速从零开始转换AI领域的时间. 希望按表操课的人可以以最高效率， 在三个月内具备以下AI技能.  
- 了解Machine Learning 基本算法  
- 会用Matlab / Octave / python建构Machine Learning  
- 熟悉Anaconda、jupyter等功能及环境介面  
- 了解Deep Learning Framework（ 如Tensorflow、keras、PyTorch 等）

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/aac6bbcf8dd44139a6bd835c39b7ece2~tplv-k3u1fbpfcp-zoom-1.image)

##  建议菜单序  
1. 网络课程（视频课程）
	* 1-a. [Coursera的Machine Learning](https://www.coursera.org/learn/machine-learning)（=CS229a， less math， run @ matlab/octave）
	* 1-b. [Coursera的Deep Learning specialization](https://www.coursera.org/specializations/deep-learning)（=CS230， less math， run @ python/tensorflow）
	* 1-c. [Stanford的CS229](https://www.youtube.com/playlist?list=PLoROMvodv4rMiGQp3WXShtMGgzqpfVfbU) （Machine Learning， more math， run @ matlab/octave）
	* 1-d. [Stanford的CS231n](https://www.youtube.com/playlist?list=PLC1qU-LWwrF64f4QKQT-Vg5Wr4qEE1Zxk) (Convolutional Neural Networks for Visual Recognition)
2. 开发工具（工具/环境）
3. 应用实战（Kaggle）ermaid

## 网络课程课程菜单 
###  1.a Coursera的Machine Learning （大约需要3周左右完成）  
其实这就是Stanford的229a， 建议直接到Coursera参加课程， 作为0基础者的入门是非常浅显易懂的， Coding部分只用了matlat/octave， 对没有python经验的新人来说， 真的是进入Machine Learning的方便之门， 这也是最花时间的部分，完成这个阶段算是对Machine Learning有基本的了解， 从Linear、Non-linear、Logistic 一直到 Nueral Network、Recommend system等等， 也有能力自己写一些小程序练习， 完成此课程后对这个[playground](https://playground.tensorflow.org/)的小接口大概可以有些感觉

### 1.b Coursera 的Deep Learning Specialization （Course 1 ~ 5）  
Course.1 [Neural Networks and Deep Learning](https://www.coursera.org/learn/neural-networks-deep-learning?specialization=deep-learning) （大约可以4天左右完成）  
- 内容都是跟cs229a基本一样， 相当于用jupyter python复习一次  
Course.2 [Improving Deep Neural Networks](https://www.coursera.org/learn/deep-neural-network?specialization=deep-learning) （大约可以7天左右完成）  
- 主要介绍各种提高准确度或提高效率的求解优化技巧  
Course.3 [Structuring Machine Learning Projects](https://www.coursera.org/learn/machine-learning-projects?specialization=deep-learning) （大约可以1–2天左右完成）  
Course.4 [Convolutional Neural Networks](https://www.coursera.org/learn/convolutional-neural-networks?specialization=deep-learning) （大约可以6-7天左右完成）  
Course.5 [Recurrent Neural Network](https://www.coursera.org/learn/nlp-sequence-models) （大约可以6– 7天左右完成）  
以上课程在Coursera上都只有7天免费， 但是网络上还是其他地方可以找到完整视频， 所以建议先到这些地方看完再决定要不要花钱买证书啰， 如Andrew说明， 虽然有些内容是重叠的， 但是说明的方式不太一样， 另外CS3230主要是走jupyter ipython的， 个人觉得这个考量不错， 根据课程设计及需求， 并搭配业界主流工具来选择课程上的coding环境.  
的作法是在免费平台看完， 然后登入Coursera全力做quiz & assignment，这样你可以在7天内完成课程喔， 已经把空白的assignment整理好， 只要下载（[下载链接](https://github.com/doing-great-events/Coursera-Deep-Learning-Specialization.git) ）后放到jupyter文件夹即可， 所以完全可以依课程进度在单机作业， 完成每个课程后再去coursera冲assignment/quize提交， 这样可以确保每一门课的完成时间（[jupyter安装看这边](https://medium.com/@patient_shadows_eagle_388/%E6%88%91%E6%8A%8Aai%E8%AA%AA%E7%99%BD%E4%BA%86-%E5%BE%9E%E9%9B%B6%E9%96%8B%E5%A7%8B%E6%90%9E%E5%AE%9Aanoconda-jupyter-76c81a4687b?source=friends_link&sk=6bf6dedbc4e3248c0e1bb18dadf39a4d)）.  
完成这个阶段算是对Deep Learning有一定了解了， 可以说出ML/DL差异的个人看法、熟悉jupyter能写点python、知道tensor flow/keras等等frameworks.

### 1.c Stanford的CS229  
Youtube可以找到完整课程， 229 & 229a的差别在于CS229 比较着重数学推导说明， CS229a着重在实用知识， 就手应用技巧， 数学说明较少  
Andrew Ng个人建议是， 因为229是挑战性较高的课程， 如果你担心你还没准备好， 可以先考虑229a， 个人建议是看229a就好， 因为Andrew会提醒你这部分的数学推导跳过啰， 如果你有兴趣的话你会尝试自己推导验证. 所以看完229a你会知道你对229有没有兴趣， 如果你对数学有特殊爱好当然也可以直接看229， 看完就真的不用看229a了.  
个人认为最大的帮助是， 最短时间内你确实踏实的修了一门algorithm的概念课程， 这类帮助在平常几乎是看不出来（或者说需要有点能力，才能辨别出来）， 但是在很多小细节的思维逻辑及讨论过程就能看出水平的差异， 在很多领域都有类似的状况， 就像很多机构工程师连应力都不会算一样， 但还是可以混得下去的.

### 1.d Stanford的CS231n  
一般来说是因为算法特性的关系，  
CNN特别适合用在影像AI （2D/3D data）， RNN特别适合用在音频AI（1D sequence data）， 231n是专门讲CNN的课程， 尤其因为飞飞的关系， 在强国被奉为大陆影像AI第一人， 所以她的课程光是大陆人的流量就爆冲了.

上述课程的难易度一般来说是  
coursera Machine Learning < cousera Deep Learning < CS231 < CS229  
ps. 虽然很多课程是重复的， 不过有些东西还是可以花点时间看一下， 例如YouTube上的cs230 autumn 2018 L8， Andrew分享了一些他怎么读 paper的方式， 以及他个人看过这么多Stanford学生的求学/求职模式后， 他觉得各种模式的优缺比较. 听听看Standford名师课堂上对Stanford学生的建议与分享， 觉得也是不错的.  
另外1.25x播放是非常不错的方式， 可以很大程度帮助各位提高效率并节省很多时间， 到第二个月才发现这个方式， 个人建议是如果能快的时候可以尽量快， 该慢的时候要步步踏实， 例如在做assignment的时候， 除了完成作业， 会把他们的code看懂（因为很久没有写程序啦）， 卡关的时候切忌不要上网找答案， 像在第一次assignment的时候， 卡在simutaneously update就卡了1个小时多才发现问题， 再回头对比程序及教材或数学式时， 会对数学式或Andrew再三强调的simutaneously update很有感觉.

## 2. 开发工具（工具/环境）  
如果依上述菜单进行的话， 你会依以下流程习惯这些工作环境 ：  
Octave/Matlab（cs229a） -> [jupyter python](https://medium.com/@patient_shadows_eagle_388/%E6%88%91%E6%8A%8Aai%E8%AA%AA%E7%99%BD%E4%BA%86-%E5%BE%9E%E9%9B%B6%E9%96%8B%E5%A7%8B%E6%90%9E%E5%AE%9Aanoconda-jupyter-76c81a4687b?source=friends_link&sk=6bf6dedbc4e3248c0e1bb18dadf39a4d)（cs230 / cs231n） -> [tensor flow](https://medium.com/@patient_shadows_eagle_388/%E6%88%91%E6%8A%8Aai%E8%AA%AA%E7%99%BD%E4%BA%86-tensorflow%E6%98%AF%E4%BB%80%E9%BA%BC-%E6%88%91%E8%A9%B2%E6%80%8E%E9%BA%BC%E8%A3%9D%E6%9C%80%E5%A5%BD-68e30826e975?source=friends_link&sk=f065a2311b6839ba2a4d19b606e40f86)（cs230） -> Google Colab  
使用python时， 千万不要单独安装python以及各种package， 建议要务必利用[Anaconda](https://medium.com/@patient_shadows_eagle_388/%E6%88%91%E6%8A%8Aai%E8%AA%AA%E7%99%BD%E4%BA%86-%E5%BE%9E%E9%9B%B6%E9%96%8B%E5%A7%8B%E6%90%9E%E5%AE%9Aanoconda-jupyter-76c81a4687b?source=friends_link&sk=6bf6dedbc4e3248c0e1bb18dadf39a4d)作为python版本及众多package的管理界面. 可以节省大量时间而且省心省力好上手.  
另外建议要熟悉一下github界面， 因为cs230的assignment， 当时是在GitHub上东拼西凑整理出来， 未来要做项目免不了team work模式， 所以GitHub的界面使用还是有必要了解一下的， 只是为了协助各位最短时间吃完以上菜单， 所以直接把[cs230 assignment的空白卷](https://github.com/doing-great-events/Coursera-Deep-Learning-Specialization.git) 也一并整理出来让大家效率更高.  
完成这个阶段， 原则上你已经是具备AI的一切技能了， 差的只是提升实战经验了.

## 3. 应用实战（[Kaggle](https://www.kaggle.com/)）  
大概在完成1b. Course 2开始接触Kaggle， 觉得这个切入的时机点不错， 因为这个阶段已经算对ML/DL有一定认识， 只是coding技能尚未纯熟， 问题思考角度与经验尚待补强， 这时候进到Kaggle最大的好处是， 它有很多很多很多的题目， 所以绝对足够练习. 另外Kaggle也有一些免费课程， 这边的课程觉得就不用上了， 直接透过Competetion题目实作学习比较快. 一般来说Knowledge类的题目都是不错的练习题， Kaggle也会告诉你Titanic是它们建议的第一题， 再来House Prices、Digital Recognition等等， 第一次感受完后， 可以看看其他人的思考过程分享文（[的结果Top 2.5%， code在GitHub这边](https://github.com/doing-great-events/Kaggle/blob/main/Titanic_competition/Titanic_Top2.5%25.ipynb)）.  
Titanic的分享文很多， 英文不错的话建议看这两篇  
- [Titanic Survive Prediction Tutorial for Beginners](https://www.kaggle.com/themlphdstudent/titanic-survive-prediction-tutorial-for-beginners)  
- [Titanic Data Science EDA with meme+Solution](https://www.kaggle.com/soham1024/titanic-data-science-eda-with-meme-solution)  
中文建议这篇  
-[泰坦尼克号生存预测（Top 3%）](https://medium.com/@yulongtsai/https-medium-com-yulongtsai-titanic-top3-8e64741cc11f)

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/377a184940d74b8f83de4371c8bd9ce8~tplv-k3u1fbpfcp-zoom-1.image)

搞了3天 总算达成自定义目标 （rank TOP 3% up & score 0.8 up）， 非常适合新手练习的题目

Deep CNN Task ： 上完Coursera Deep Learning专项课程后， 应该有能力作一些稍微复杂的模型， 个人练习了重现facenet模型（Facenet = MTCNN + ResNET embedding+ Triplet classifier）， 下图为在[jupyter重现MTCNN的结果](https://l.facebook.com/l.php?u=https%3A%2F%2Fgithub.com%2Fdoing-great-events%2FMTCNN_inside_jupyter%2Fblob%2Fmain%2FMTCNN_inside_jupyter%2Fjypyter_MTCNN_upload.ipynb%3Ffbclid%3DIwAR1QcipPXUyOLj4nmu5RSMI46uB5Jqtd3PP-tS_SK12w4MYdWxB_n5EUkg0&h=AT0B5vxVeWJriwH-cm4RZRPdNZaVEFDNRbUgh1-Tzv4nYL4tcCZXeI3UcREaIvMC5y9e8TMZvhtolG6sM_pCBSVJErXzV9LYXf03couIiQ5gimzmLbKJYi6NCN8b_zJu3BJB&__tn__=R]-R&c[0]=AT2vjRjltRa9vUA4v8RiH0joNP2WJMb_TmN4nvK_2gXwHypDosibS3fSSsYlob06isUq9rjW_P9PvBIeDaU0ZJUjAxtQb9_U8kEiyim4fyp3cT4GFfbVKyMVA6KldkfDB19RdcxDNVwSKJFdTDiMkjrPCg).

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/992f3feb024540d388dc5dc8d2285491~tplv-k3u1fbpfcp-zoom-1.image)

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/48fd9878fc164c59b886c2db1245d706~tplv-k3u1fbpfcp-zoom-1.image)

左边为MTCNN 3阶段产出， 右边为即时影像脸部侦测

Deep CNN Task ： 重现[Facenet 即时人脸辨识](https://github.com/doing-great-events/FACENET_inside_jupyter)

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0a2c0b80a1844f8e8877a761d67f3359~tplv-k3u1fbpfcp-zoom-1.image)

Other Resources  
[Machine Learning Crash Course](https://developers.google.com/machine-learning/) ： Google 提供的ML在线教育资源  
[https://leetcode.com/](https://leetcode.com/) ： 写程序必须谨记“高效”， 彻底改变你对写程序的认知