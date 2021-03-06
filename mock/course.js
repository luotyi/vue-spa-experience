/**
 * Created by an.han on 16/10/15.
 * 基于 express 的接口处理定义
 * See http://expressjs.com/zh-cn/4x/api.html
 */

module.exports = {
    api: '/api/course',
    response: function (req, res) {
      res.send(
        {
            success: true,
            message: "获取成功",
            code: "",
            data: [
                {   id:1,
                    title:'五星酒店频曝卫生状况差 媒体拷问酒店为何默许？',
                  
                    img:'http://inews.gtimg.com/newsapp_ls/0/2581393390_150120/0',
                    teacher:'Lily',
                    intro:'五星酒店频曝卫生状况差 媒体拷问酒店为何默许五星酒店频曝卫生状况差 媒体拷问酒店为何默许五星酒店频曝卫生状况差 媒体拷问酒店为何默许'
                },
                {   id:2,
                    title:'骗领信用卡盗刷千万元 11人团伙被端',
                  
                    img:'http://inews.gtimg.com/newsapp_ls/0/2582040041_150120/0',
                    teacher:'Lily',
                    intro:'　通过网络非法获取他人身份信息，编造申请材料，冒充他人进行贷款套现，半年间在多家银行骗领信用卡783张。近日，丰台分局经侦大队一举打掉了一特大信用卡诈骗团伙，抓获嫌疑人11名，起获了35部POS机、百余张身份证、银行卡等涉案工具。初步核查，涉案金额1000余万元。'
                },
                {   id:2,
                    title:'媒体：人工智能时代教育，家长不必做“虎妈”',
                  
                    img:'http://inews.gtimg.com/newsapp_ls/0/2582147629_150120/0',
                    teacher:'Lily',
                    intro:'　媒体：人工智能时代教育，家长不必做“虎妈”媒体：人工智能时代教育，家长不必做“虎妈”媒体：人工智能时代教育，家长不必做“虎妈”'
                },
                {   id:2,
                    title:'长沙一单位“面向干部子弟家属招聘”续：4名涉事干部被处分',
                  
                    img:'http://inews.gtimg.com/newsapp_ls/0/2582147629_150120/0',
                    teacher:'Lily',
                    intro:'　新京报昨日报道，12月25日，湖南长沙市天心区市容环境卫生管理局公开招聘8名管理员，招聘范围却注明面向“干部职工子弟、家属和亲戚朋友”。这一招聘公告引发众多网友质疑。昨日，上述单位人事劳资科回应称，招聘公告部分措辞用词不当，没有慎重考虑，将会进行修改'
                },
                {   id:1,
                    title:'五星酒店频曝卫生状况差 媒体拷问酒店为何默许？',
                  
                    img:'http://inews.gtimg.com/newsapp_ls/0/2581393390_150120/0',
                    teacher:'Lily',
                    intro:'五星酒店频曝卫生状况差 媒体拷问酒店为何默许五星酒店频曝卫生状况差 媒体拷问酒店为何默许五星酒店频曝卫生状况差 媒体拷问酒店为何默许'
                },
                {   id:2,
                    title:'骗领信用卡盗刷千万元 11人团伙被端',
                  
                    img:'http://inews.gtimg.com/newsapp_ls/0/2582040041_150120/0',
                    teacher:'Lily',
                    intro:'　通过网络非法获取他人身份信息，编造申请材料，冒充他人进行贷款套现，半年间在多家银行骗领信用卡783张。近日，丰台分局经侦大队一举打掉了一特大信用卡诈骗团伙，抓获嫌疑人11名，起获了35部POS机、百余张身份证、银行卡等涉案工具。初步核查，涉案金额1000余万元。'
                },
                {   id:2,
                    title:'媒体：人工智能时代教育，家长不必做“虎妈”',
                  
                    img:'http://inews.gtimg.com/newsapp_ls/0/2582147629_150120/0',
                    teacher:'Lily',
                    intro:'　媒体：人工智能时代教育，家长不必做“虎妈”媒体：人工智能时代教育，家长不必做“虎妈”媒体：人工智能时代教育，家长不必做“虎妈”'
                },
                {   id:2,
                    title:'长沙一单位“面向干部子弟家属招聘”续：4名涉事干部被处分',
                  
                    img:'http://inews.gtimg.com/newsapp_ls/0/2582147629_150120/0',
                    teacher:'Lily',
                    intro:'　新京报昨日报道，12月25日，湖南长沙市天心区市容环境卫生管理局公开招聘8名管理员，招聘范围却注明面向“干部职工子弟、家属和亲戚朋友”。这一招聘公告引发众多网友质疑。昨日，上述单位人事劳资科回应称，招聘公告部分措辞用词不当，没有慎重考虑，将会进行修改'
                },
            ],
           
        });
    }
  }