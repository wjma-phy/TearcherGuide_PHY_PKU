// 物理学院教职工Wiki系统数据
// 从事务视角重新组织内容

export interface PolicyLink {
  title: string;
  url: string;
  description?: string;
}

export interface ContactRef {
  name: string;
  office?: string;
  phone?: string;
  email?: string;
}

export interface WikiSection {
  id: string;
  title: string;
  description?: string;
  steps?: string[];
  links?: { text: string; url: string }[];
  downloads?: { text: string; url: string }[];
  tables?: { headers: string[]; rows: string[][] }[];
  contacts?: ContactRef[];
  notes?: string[];
  policies?: PolicyLink[];
}

export interface WikiCategory {
  id: string;
  title: string;
  icon: string;
  description?: string;
  sections: WikiSection[];
}

// 规章制度汇编数据
export const regulationsData = [
  {
    category: "师德师风与学术道德",
    items: [
      { title: "北京大学师德教育实施办法", url: "https://hr.pku.edu.cn/zczd/xxjbmgz/rygl/index.htm", date: "2017-07-12" },
      { title: "北京大学教师行为规范", url: "https://hr.pku.edu.cn/zczd/xxjbmgz/rygl/index.htm", date: "2017-01-05" },
      { title: "北京大学师德一票否决实施细则", url: "https://hr.pku.edu.cn/zczd/xxjbmgz/rygl/index.htm", date: "2016-07-12" },
      { title: "事业单位工作人员处分规定", url: "https://hr.pku.edu.cn/zczd/xxjbmgz/rygl/index.htm", date: "2024-12-18" },
      { title: "北京大学教师违规违纪调查处理试行办法", url: "https://hr.pku.edu.cn/zczd/xxjbmgz/rygl/index.htm", date: "2020-06-29" },
      { title: "北京大学学术道德委员会工作办法", url: "https://hr.pku.edu.cn/zczd/xxjbmgz/xfjsyxsgf/index.htm", date: "2017-06-01" },
      { title: "北京大学教师学术道德规范", url: "https://hr.pku.edu.cn/zczd/xxjbmgz/xfjsyxsgf/index.htm", date: "2017-06-01" },
      { title: "北京大学学术道德规范建设方案", url: "https://hr.pku.edu.cn/zczd/xxjbmgz/xfjsyxsgf/index.htm", date: "2017-06-01" },
      { title: "北京大学教职工处分暂行规定", url: "https://hr.pku.edu.cn/zczd/xxjbmgz/xfjsyxsgf/index.htm", date: "2017-06-01" },
    ]
  },
  {
    category: "人事人才",
    items: [
      { title: "北京大学教学科研职位分系列管理规定", url: "https://hr.pku.edu.cn/zczd/xxjbmgz/jspr/index.htm", date: "2025-03-13" },
      { title: "关于教学科研人员申请聘任教研系列、教学系列和研究技术系列职位的管理办法", url: "https://hr.pku.edu.cn/docs/2021-05/c777410862c4490cb3dc6d40a7b86e49.pdf", date: "2025-03-13" },
      { title: "物理学院副教授聘任研究技术系列职位管理办法", url: "https://portal.phy.pku.edu.cn", date: "" },
      { title: "北京大学教研系列教师实行学术假的规定", url: "https://hr.pku.edu.cn/docs/2022-08/2de92f24089f4bfca11737e9e366c7bd.pdf", date: "2017-01-05" },
      { title: "北京大学关于教师长期离岗的规定", url: "https://hr.pku.edu.cn/docs/2021-05/dcc57cf963c94b51ba486f841de2c1c7.pdf", date: "2017-02-22" },
      { title: "北京大学教师校外兼职管理办法", url: "https://hr.pku.edu.cn/docs/2022-09/0c97ddca548547a8917b09a01793d7d6.pdf", date: "2022-09-23" },
      { title: "物理学院教师校外兼职管理实施细则(试行)", url: "https://portal.phy.pku.edu.cn/content.jsp?urltype=news.NewsContentUrl&wbtreeid=1319&wbnewsid=3941", date: "2025-01-08" },
      { title: "北京大学教职工出国（境）管理规定", url: "https://hr.pku.edu.cn/docs/2021-05/a99e6fbe1321439aa7fdc12dab0440cc.pdf", date: "2015-11-27" },
      { title: "北京大学非全职教师聘任管理办法（试行）", url: "http://162.105.209.180:9220/bdzdk/fb51f35c56006190a7646031e089574597558c3012d7722aa683b3d8627b5b914c6e6fd3b920bdf5bdfb.html", date: "2021-08-25" },
      { title: "关于发布北京大学非教师各系列专业技术职务评审规定的通知", url: "https://hr.pku.edu.cn/docs/2024-04/049d17e6efb34c8d94cddd390c10a590.pdf", date: "2024-04-09" },
      { title: "关于印发《北京大学职称（职位）评审复查规定（试行）》的通知", url: "https://hr.pku.edu.cn/tzgg/2cfb8060391848ab99a858de4d8fd713.htm", date: "2022-11-01" },
      { title: "物理学院关于离退休人员返聘的规定", url: "https://portal.phy.pku.edu.cn/content.jsp?urltype=news.NewsContentUrl&wbtreeid=1319&wbnewsid=2696", date: "2021-06-08" },
      { title: "教职工考勤说明", url: "https://portal.phy.pku.edu.cn", date: "2025-11" },
      { title: "北京大学博士后研究人员管理服务办法", url: "http://162.105.209.180:9220/bdzdk/891454a334086bc47aab5d984b34bfd51a387592ad0c6f246f5826263c769b0aa0ba9a35e919ddb8bdfb.html", date: "校发【2019】272号" },
      { title: "北京大学物理学院博士后管理办法", url: "https://portal.phy.pku.edu.cn", date: "" },
    ]
  },
  {
    category: "教学培养",
    items: [
      { title: "北京大学本科考试工作与学习纪律管理规定", url: "https://dean.pku.edu.cn/web/rules_info.php?id=8", date: "" },
      { title: "北京大学本科生成绩评定和记载办法", url: "https://dean.pku.edu.cn/web/rules_info.php?id=12", date: "" },
      { title: "物理学院研本课设置和管理细则", url: "https://portal.phy.pku.edu.cn", date: "2021-05-13" },
      { title: "北京大学物理学院导师招生资格及超龄博导延长招生年限审核实施细则", url: "https://portal.phy.pku.edu.cn/content.jsp?urltype=news.NewsContentUrl&wbtreeid=1319&wbnewsid=3563", date: "" },
      { title: "北京大学物理学院本科班主任、学生辅导员管理办法（试行）", url: "https://portal.phy.pku.edu.cn", date: "2022-10-24" },
      { title: "北京大学物理学院研究生班主任管理办法（试行）", url: "https://portal.phy.pku.edu.cn", date: "2024-02-26" },
    ]
  },
  {
    category: "科研与外事",
    items: [
      { title: "北京大学因公出国审批与管理规定", url: "https://www.oir.pku.edu.cn/info/1231/3687.htm", date: "" },
      { title: "北京大学教职工出国（境）管理规定", url: "https://www.oir.pku.edu.cn/info/1231/4598.htm", date: "" },
      { title: "北京大学教学科研人员因公临时出国经费管理暂行办法", url: "https://www.oir.pku.edu.cn/info/1231/4600.htm", date: "" },
    ]
  },
  {
    category: "实验室与安全",
    items: [
      { title: "北京大学实验室安全管理办法", url: "http://www.lab.pku.edu.cn/info/1161/32681.htm", date: "校发（2011）69号" },
      { title: "物理学院安全管理章程（试行）", url: "https://portal.phy.pku.edu.cn", date: "" },
    ]
  },
  {
    category: "资产与财务",
    items: [
      { title: "北京大学仪器设备管理办法", url: "http://www.lab.pku.edu.cn/info/1131/32941.htm", date: "校发（2006）262号" },
      { title: "北京大学仪器设备采购管理办法", url: "http://www.lab.pku.edu.cn/info/1151/32861.htm", date: "校发（2022）47号" },
      { title: "北京大学大型仪器设备管理办法", url: "http://www.lab.pku.edu.cn/info/1131/32931.htm", date: "校发（2023）68号" },
      { title: "北京大学物理学院大型仪器设备管理实施细则", url: "http://portal.phy.pku.edu.cn/content.jsp?urltype=news.NewsContentUrl&wbtreeid=1319&wbnewsid=3564", date: "院发（2023）09号" },
      { title: "北京大学进口科教用品管理办法", url: "http://www.lab.pku.edu.cn/info/2911/38231.htm", date: "校发（2022）49号" },
      { title: "北京大学仪器设备资产损坏丢失赔偿暂行办法", url: "http://www.lab.pku.edu.cn/info/1131/32921.htm", date: "校发（2023）167号" },
    ]
  },
  {
    category: "综合行政",
    items: [
      { title: "北京大学物理学院印章管理办法（试行）", url: "https://portal.phy.pku.edu.cn/content.jsp?urltype=news.NewsContentUrl&wbtreeid=1319&wbnewsid=4071", date: "" },
      { title: "物理学院公共空间及公用房使用和改造规则", url: "https://portal.phy.pku.edu.cn/content.jsp?urltype=news.NewsContentUrl&wbtreeid=1347&wbnewsid=2515", date: "2019-09-16" },
      { title: "物理学院机动车管理办法（试行）", url: "https://portal.phy.pku.edu.cn", date: "2020-08-25" },
    ]
  },
  {
    category: "工会工作",
    items: [
      { title: "北京大学教职工加入工会及会籍管理工作指南", url: "https://gh.pku.edu.cn/info/1162/9439.htm", date: "" },
      { title: "北京大学工会女教职工工作委员会工作条例（试行）", url: "https://gh.pku.edu.cn/info/1115/8846.htm", date: "" },
      { title: "北京大学工会爱心基金章程", url: "https://gh.pku.edu.cn/axjj/axjjzc.htm", date: "" },
      { title: "北京大学教职工代表大会和工会会员代表大会代表资格调整办法", url: "https://gh.pku.edu.cn/info/1115/8843.htm", date: "" },
      { title: "北京大学教职工代表大会实施办法", url: "https://gh.pku.edu.cn/info/1115/8847.htm", date: "" },
      { title: "北京大学教职工代表大会提案工作规程", url: "https://gh.pku.edu.cn/info/1115/8844.htm", date: "" },
    ]
  },
];

export const wikiData: WikiCategory[] = [
  {
    id: "onboarding",
    title: "入职与离职",
    icon: "UserPlus",
    description: "新教职工入职及相关手续办理",
    sections: [
      {
        id: "new-faculty",
        title: "新教职工入职",
        description: "新入职教职工需要办理的各项手续。",
        steps: [
          "到人事办公室报到，提交入职材料",
          "办理校园卡、工作证",
          "办理工资卡、社保相关手续",
          "到系所中心报到，了解工作安排",
          "办理党组织关系转接（党员）",
          "加入工会（自愿）",
          "完成实验室准入培训"
        ],
        links: [
          { text: "新教职工入职指南", url: "https://portal.phy.pku.edu.cn" }
        ],
        contacts: [
          { name: "宣梦雨", office: "人事办公室", phone: "62758139", email: "myxuan@pku.edu.cn" },
          { name: "李佳益", office: "党委办公室", phone: "62755496", email: "ljysess@pku.edu.cn" }
        ],
        notes: [
          "具体入职材料清单请咨询人事办公室",
          "校园卡办理需携带身份证，现场拍照或使用系统照片"
        ]
      },
      {
        id: "party-relation",
        title: "党组织关系转接",
        description: "教职工党员入职、离职、退休时的党组织关系转接流程。原则上均应通过党员E先锋系统进行线上转接。",
        steps: [
          "转入（入职）：在党员E先锋输入党组织全称（京外）/党组织编码（京内）发起转入",
          "转出（离职）：询问去往单位党组织全称/编码，由党支部或党委在党员E先锋发起转出",
          "退休：通过党员E先锋系统直接在支部间调转，由在职党支部转入离退休党支部"
        ],
        tables: [
          {
            headers: ["系所中心", "党组织编码", "党组织全称"],
            rows: [
              ["重离子物理研究所", "011100104811", "中国共产党北京大学物理学院委员会 重离子物理研究所党支部"],
              ["凝聚态物理与材料物理研究所（一）", "011100104792", "中国共产党北京大学物理学院委员会 凝聚态物理与材料物理研究所第一党支部"],
              ["凝聚态物理与材料物理研究所（二）、电镜室", "011100104727", "中国共产党北京大学物理学院委员会 凝聚态物理与材料物理研究所第二党支部"],
              ["量子材料科学中心", "011100136705", "中国共产党北京大学物理学院委员会 量子材料科学中心党支部"],
              ["理论物理研究所", "011100103822", "中国共产党北京大学物理学院委员会 理论物理研究所党支部"],
              ["天文学系、科维理天文与天体物理研究所", "011100104056", "中国共产党北京大学物理学院委员会 天文学系党支部"],
              ["技术物理系、北京现代物理研究中心", "011100104089", "中国共产党北京大学物理学院委员会 技术物理系党支部"],
              ["现代光学研究所、纳光电子前沿科学中心、量子科技学院", "011100104018", "中国共产党北京大学物理学院委员会 现代光学研究所党支部"],
              ["大气与海洋科学系", "011100104117", "中国共产党北京大学物理学院委员会 大气与海洋科学系党支部"],
              ["普通物理教学中心、基础物理实验教学中心", "011100104760", "中国共产党北京大学物理学院委员会 基础教学党支部"],
              ["院行政", "011100104787", "中国共产党北京大学物理学院委员会 行政后勤党支部"]
            ]
          }
        ],
        contacts: [
          { name: "李佳益", office: "党委办公室", phone: "62755496", email: "ljysess@pku.edu.cn" }
        ],
        notes: [
          "中科院系统和个别BM单位无法通过党员E先锋线上转接的，可以通过开具纸质介绍信",
          "转入介绍信抬头：中共北京大学物理学院委员会"
        ]
      },
      {
        id: "union-join",
        title: "加入工会",
        description: "北京大学物理学院教职工加入工会的流程。",
        steps: [
          "每年三月初和九月初集体办理",
          "在编教职工可先在网上查询自己的工资单，若有会费扣除一项，表明已自动加入工会",
          "填写《中国籍入会申请表》或者《港澳台与外籍入会申请表》",
          "填写《工会会员缴纳会费明细表》",
          "可选：填写《互助服务卡办理登记表》（可办理北京市市属公园半价年票）"
        ],
        contacts: [
          { name: "田老师", phone: "62751744", email: "gtian@pku.edu.cn" }
        ],
        notes: [
          "现合同制会员会费5元/月",
          "中国大陆和港澳台籍教职工（含博士后）、外籍教职工（含博士后）均可自愿加入"
        ]
      },
      {
        id: "lab-access",
        title: "实验室准入",
        description: "进入物理学院实验室的准入流程。",
        steps: [
          "学习实验室安全基础知识并通过相关考核",
          "参加本课题组组织的安全专业培训",
          "熟悉各项操作流程和注意事项",
          "知晓实验工作可能存在的危险因素及相应防范措施",
          "与课题组负责人签订实验室安全责任书"
        ],
        links: [
          { text: "实验室安全教育与考试系统", url: "https://lab-safety.pku.edu.cn/login/" }
        ],
        contacts: [
          { name: "张志科", office: "资产与安全管理办公室", phone: "62751123", email: "zhangzhike@pku.edu.cn" }
        ]
      },
      {
        id: "resignation",
        title: "离职手续",
        description: "教职工离职时需要办理的各项手续。",
        steps: [
          "提前2个月以上向所在系所提出申请",
          "系所审批同意，至少提前2个月提交材料至学院审批",
          "学院审批同意，提交材料至人事部审批",
          "人事部审批同意，学院人事发送离职转单",
          "按转单办理各项交接手续"
        ],
        downloads: [
          { text: "北京大学教师离职申请表", url: "#" },
          { text: "物理学院离职人员转单", url: "#" }
        ],
        contacts: [
          { name: "宣梦雨", office: "人事办公室", phone: "62758139", email: "myxuan@pku.edu.cn" },
          { name: "张志科", office: "资产与安全管理办公室", phone: "62751123", email: "zhangzhike@pku.edu.cn" }
        ],
      }
    ]
  },
  {
    id: "teaching",
    title: "教学相关",
    icon: "BookOpen",
    description: "本科生、研究生教学事务办理",
    sections: [
      {
        id: "new-course",
        title: "新开课程",
        description: "每学期期中启动下一学期的课程计划安排，新开课程须经专业内部同意，并上报学院教学委员会审议批准后，方可从随后一学期起纳入排课。",
        steps: [
          "登录校内门户 → 我的课程 → 新开课程申请",
          "在线填写并提交新开课申请表（无需提交纸质版，填写中途可保存）",
          "在学院教学委员会就拟新开课程作简要介绍（包括课程开设背景和必要性、与现有课程关系、课程大纲、讲授和考核方式、教材等）",
          "经学院教学委员会和党政联席会议审核通过",
          "报教务部审核通过后方可生效"
        ],
        links: [
          { text: "校内门户", url: "https://portal.pku.edu.cn/portal2017/#/index" }
        ],
        notes: [
          "申报时间：春季学期为4月中旬左右，秋季学期为10月中旬左右"
        ]
      },
      {
        id: "course-schedule",
        title: "课程排课",
        description: "每学期校历第7-10周左右进行下一学期的排课工作。",
        steps: [
          "学院教务办公室向各系所（中心）征集下一学期开课计划",
          "各系所（中心）汇总后统一上报至学院",
          "学院教务办公室协调整体课表，向任课老师通知、确认上课和考试时间",
          "初排结束后，初步课表报学校教务部统一安排公共教室",
          "教师应及时核对课表，如有问题及时向学院教务办公室提出调整申请"
        ],
        notes: [
          "学生开始选课后，原则上不得修改上课时间",
          "若因特殊情况确需调整，须征得该课程所有选课学生同意后提出书面申请"
        ]
      },
      {
        id: "course-change",
        title: "课程异动（调课/停课）",
        description: "课程异动指排定教室之后，因故发生的停开课程、他人代课、调换地点（时间不变）、暂停一次课程、补课等情况。",
        steps: [
          "登录校内门户 → 我的课程 → 本科生课程异动申请（或研究生课程异动申请）",
          "提交异动申请并联系学院教务办审核",
          "涉及更换教室的异动申请，必须至少提前一周提交并完成审核"
        ],
        links: [
          { text: "校内门户", url: "https://portal.pku.edu.cn/portal2017/#/index" }
        ]
      },
      {
        id: "exam-cheating",
        title: "考试违纪处理",
        description: "发现学生考试违纪作弊时的处理流程。",
        steps: [
          "监考老师取证（可拍照记录现场情形）",
          "没收夹带材料，让学生当场简单写情况说明",
          "监考老师向开课院系教务办公室报送：考场记录、证据材料、试卷和答题纸",
          "开课院系将材料报送至教务部",
          "学生所在院系进行查证、与学生谈话、召开党政联席会议讨论并提出处理意见",
          "教务部审核后报教务长办公会研究决定",
          "学校出正式校发文后，院系领取并送达学生本人"
        ],
        notes: [
          "《考场记录》须如实记载考试情况",
          "学生所在院系提出处理意见前，须告知学生享有陈述和申辩的权利"
        ]
      },
      {
        id: "exam-management",
        title: "成绩录入与修改",
        description: "考试周结束后两周内完成成绩录入工作。",
        steps: [
          "考试后1周内完成成绩评定工作",
          "将成绩单签名后交开课院系教务办公室",
          "任课教师录入成绩确认无误后，全部成绩提交、打印成绩单并签字",
          "将考试成绩单、空白试卷、标准答案、试卷分析、考场记录和所有考试学生的试卷交到教务办公室登记封存（存期5年）"
        ],
        links: [
          { text: "北京大学本科生成绩评定和记载办法", url: "https://dean.pku.edu.cn/web/rules_info.php?id=12" }
        ],
        notes: [
          "所有本科考试课程原则上以百分制记载",
          "研本课一般以等级制记载",
          "考查类课程一般以合格制记载"
        ]
      },
      {
        id: "supervisor-qualification",
        title: "研究生导师招生资格审核",
        description: "研究生指导教师招生资格年度审核。",
        steps: [
          "学院每年上半年根据学校统一部署组织开展",
          "主要从师风师德、研究生培养质量、培养条件、科研成果与经费等方面进行综合审核",
          "包括超龄导师续聘等具体事项"
        ],
        policies: [
          { title: "《北京大学物理学院导师招生资格及超龄博导延长招生年限审核实施细则》", url: "https://portal.phy.pku.edu.cn/content.jsp?urltype=news.NewsContentUrl&wbtreeid=1319&wbnewsid=3563" }
        ],
        notes: [
          "相关工作安排与具体要求，请以学院当年发布的通知为准"
        ]
      },
      {
        id: "student-quota",
        title: "学生指导名额",
        description: "研究生招生名额分配及相关规定。",
        steps: [
          "每年6月研究生院下达招生名额",
          "学院将名额分配至各系所（中心）",
          "各系所（中心）根据学科发展需要进行统一调配",
          "导师根据资格审核结果获得相应招生名额"
        ],
        notes: [
          "研究生导师招生资格实行年度审核制度",
          "招生名额与导师培养质量、科研成果与经费等相关"
        ],
      },
      {
        id: "doctoral-supervisor",
        title: "申请博导资格",
        description: "博士研究生指导教师资格申请相关事项。",
        steps: [
          "关注学校及学院发布的博导资格申请通知",
          "按要求准备申请材料",
          "经系所中心推荐，提交学院审核",
          "学院组织评审后报学校审批"
        ],
        notes: [
          "具体申请条件及时间安排以当年通知为准"
        ],
      }
    ]
  },
  {
    id: "research",
    title: "科研相关",
    icon: "FlaskConical",
    description: "科研项目申报、经费管理、知识产权等",
    sections: [
      {
        id: "nsfc-project",
        title: "国家自然科学基金申请",
        description: "国家自然科学基金项目相关申报工作。",
        steps: [
          "登录国家自然科学基金网络信息系统（ISIS系统）",
          "集中受理期项目申请书需根据学校及学院工作安排进行填报",
          "非集中受理期项目需参照相应项目指南撰写、提交与报送",
          "资助项目计划书填报需参照邮件通知撰写、提交与报送（须附《报送公函》）"
        ],
        links: [
          { text: "国家自然科学基金网络信息系统", url: "https://grants.nsfc.gov.cn/pmpweb/login" }
        ],
        notes: [
          "纸质资料报送地址：北京市海淀区双清路83号国家自然科学基金委员会项目材料接收工作组（行政楼101房间）",
          "电话：62328591"
        ]
      },
      {
        id: "horizontal-project",
        title: "横向项目合同签署",
        description: "技术开发、技术转让、技术咨询、技术服务等横向项目。",
        steps: [
          "登录智慧合同管理系统（校内门户→办事大厅→横向科研合同用印）",
          "合同管理 → 合同起草",
          "完成填写后提交学院、科技开发部两级审核"
        ],
        links: [
          { text: "科技开发部办理流程", url: "https://kjkfb.pku.edu.cn/fwzn.jsp?urltype=tree.TreeTempUrl&wbtreeid=1016" }
        ]
      },
      {
        id: "research-funding",
        title: "科研经费入账",
        description: "到账经费查询、划拨及预借票据办理。",
        steps: [
          "登录北京大学科研管理信息系统",
          "查询：我的项目 → 选择项目 → 查看",
          "立项：我的项目 → 填报新项目",
          "拨款：拨款申请",
          "预借票据：科研预借票据"
        ],
        links: [
          { text: "北京大学科研管理信息系统", url: "http://resinfo.pku.edu.cn" }
        ]
      },
      {
        id: "intellectual-property",
        title: "专利/软著申请",
        description: "专利/软著申请流程。",
        steps: [
          "登录知识产权管理系统（校内门户→办事大厅→知识产权管理）",
          "发起成果披露与专利/软著提案流程",
          "提交学院、科技开发部（知识产权办公室）审批"
        ],
        notes: [
          "新申请专利时，应主动提供财政资助科研项目专利声明信息至所委托的专利代理机构",
          "未进行声明的财政科研项目专利不得作为项目结项验收的成果"
        ]
      },
      {
        id: "budget-adjustment",
        title: "科研经费预算调整",
        description: "科研项目经费预算调整流程。",
        steps: [
          "预算制项目预算调整：业务费/劳务费预算调剂、设备费/间接费用预算调减、绩效额度调减均属于自主调整，无需报批",
          "设备费预算调增、设备明细调整、绩效额度调增需经项目负责人提出申请，提交学院、科研部/实验室与设备管理部两级审核",
          "预算总额调剂、课题之间预算分配调剂、参与单位之间预算调剂需经项目负责人提出申请、学院和科研部两级审核后，报送项目主管部门备案或审批"
        ],
        links: [
          { text: "预算调整办理流程", url: "http://www.research.pku.edu.cn/kstd/ywzn/1304644.htm" }
        ]
      },
      {
        id: "publicity",
        title: "论文投稿宣传",
        description: "学校新闻网、物理学院官网和【北大物理人】公众号文章发布流程。",
        steps: [
          "稿件需经各单位主管宣传领导实名审批后投稿",
          "由各单位宣传秘书投稿至北大物理宣传公邮(gwlxc@pku.edu.cn)",
          "并抄送单位主管宣传领导和文章相关老师，请注明拟发布平台、投稿单位、审核人等",
          "稿件将由学院宣传平台管理小组审定后发布"
        ],
        links: [
          { text: "学校新闻网", url: "https://news.pku.edu.cn" },
          { text: "物理学院官网", url: "https://www.phy.pku.edu.cn" }
        ],
        contacts: [
          { name: "吕文娜", office: "党委办公室", phone: "62751872", email: "wennalv@pku.edu.cn" }
        ],
        notes: [
          "研究成果类新闻报道满足特定条件的可直接投递新闻稿件",
          "科普文章全文字数控制在1200字以内"
        ]
      },
      {
        id: "instrument-sharing",
        title: "学校仪器共享",
        description: "北京大学大型仪器设备共享管理。",
        steps: [
          "登录北京大学大型仪器设备共享管理平台",
          "查询可使用的仪器设备",
          "预约使用时段",
          "按预约时间使用设备"
        ],
        links: [
          { text: "北京大学大型仪器设备共享管理平台", url: "http://www.lab.pku.edu.cn" }
        ],
        policies: [
          { title: "北京大学大型仪器设备管理办法", url: "http://www.lab.pku.edu.cn/info/1131/32931.htm" },
          { title: "北京大学物理学院大型仪器设备管理实施细则", url: "http://portal.phy.pku.edu.cn/content.jsp?urltype=news.NewsContentUrl&wbtreeid=1319&wbnewsid=3564" }
        ],
      }
    ]
  },
  {
    id: "hr",
    title: "人事相关",
    icon: "Users",
    description: "学术假、兼职、职称评审等人事事务",
    sections: [
      {
        id: "academic-leave",
        title: "申请学术假",
        description: "教研系列教师学术假申请流程。学术假的开始时间只有2月1日/8月1日，结束时间只有1月31日/7月31日。",
        steps: [
          "在开始时间前一学期的9月1日或3月1日提交申请材料",
          "学院审批同意后报学校",
          "学校审批/备案成功后，按规定休学术假"
        ],
        links: [
          { text: "北京大学教研系列教师学术假申请表", url: "https://hr.pku.edu.cn/docs/2022-08/2de92f24089f4bfca11737e9e366c7bd.pdf" }
        ],
        policies: [
          { title: "北京大学教研系列教师实行学术假的规定", url: "https://hr.pku.edu.cn/docs/2022-08/2de92f24089f4bfca11737e9e366c7bd.pdf" }
        ],
        notes: [
          "例如：拟申请2026年春季学期（2026年2月1日-2026年7月31日）的学术假，须在2025年9月1日前提交相关材料"
        ]
      },
      {
        id: "part-time-job",
        title: "申请校外兼职",
        description: "教师校外兼职申请流程。",
        steps: [
          "登录校内门户 → 办事大厅 → 教师兼职申请",
          "填写并提交《北京大学教师校外兼职申报表》",
          "学院人事干部对申报材料进行初审",
          "向教师所在院内教学科研单位征询意见",
          "单位同意后，提请学院党政联席会议审批",
          "审批通过后报学校人事部备案（不领取报酬的）或批准（领取报酬的）"
        ],
        links: [
          { text: "校内门户", url: "https://portal.pku.edu.cn/portal2017/#/index" }
        ],
        policies: [
          { title: "《北京大学教师校外兼职管理办法》", url: "https://hr.pku.edu.cn/docs/2022-09/0c97ddca548547a8917b09a01793d7d6.pdf" },
          { title: "物理学院教师校外兼职管理实施细则(试行)", url: "https://portal.phy.pku.edu.cn/content.jsp?urltype=news.NewsContentUrl&wbtreeid=1319&wbnewsid=3941" }
        ],
        notes: [
          "中层领导人员需在校内门户→办事大厅→中层干部企业兼职申请或中层干部社团兼职申请"
        ]
      },
      {
        id: "title-evaluation",
        title: "职称评审",
        description: "教师职称评审相关流程。",
        steps: [
          "关注学校人事部发布的职称评审通知",
          "准备评审材料，包括教学、科研、社会服务等",
          "经系所中心推荐，提交学院",
          "学院组织评审，报学校审批"
        ],
        links: [
          { text: "职称评审相关规定", url: "https://hr.pku.edu.cn/zczd/xxjbmgz/zcps/index.htm" }
        ],
        contacts: [
          { name: "宣梦雨", office: "人事办公室", phone: "62758139", email: "myxuan@pku.edu.cn" }
        ],
      },
      {
        id: "tenure-evaluation",
        title: "Tenure评估标准",
        description: "教研系列教师Tenure评估相关标准和流程。",
        steps: [
          "关注学校人事部发布的Tenure评估通知",
          "准备评估材料，包括教学、科研、学术影响力等",
          "经系所中心推荐，提交学院评审",
          "学院组织外部评审",
          "报学校审批"
        ],
        policies: [
          { title: "北京大学教学科研职位分系列管理规定", url: "https://hr.pku.edu.cn/zczd/xxjbmgz/jspr/index.htm" }
        ],
        contacts: [
          { name: "宣梦雨", office: "人事办公室", phone: "62758139", email: "myxuan@pku.edu.cn" }
        ],
      },
      {
        id: "attendance",
        title: "请销假",
        description: "教职工考勤说明及请假制度。",
        steps: [
          "教职工考勤按月进行，上个月21日至本月20日为一个考勤月",
          "请假需本人填写《北京大学教职工请假审批表》",
          "单位负责人审批同意后，方可离岗",
          "请假结束后应及时办理销假手续"
        ],
        policies: [
          { title: "教职工考勤说明", url: "https://portal.phy.pku.edu.cn" }
        ],
        notes: [
          "一年内事假累计不得超过20个工作日",
          "女职工生育享有产假158天",
          "婚假共10个工作日，应连续使用",
          "丧假不得超过5个工作日",
          "配偶陪产假15天"
        ]
      },
      {
        id: "teacher-evaluation",
        title: "教师思想政治和师德师风评估",
        description: "学校在招聘引进、职称评审、岗位聘用、导师遴选、评优奖励、聘期考核、项目申报等教职工管理的全过程，开展全方位的思想政治素质和师德师风考核评估把关。",
        steps: [
          "如在以上过程中需出具思想政治和师德师风评估报告",
          "可向本系所中心党支部书记咨询具体流程",
          "也可以直接联系学院党委办公室"
        ],
        contacts: [
          { name: "肖庆", office: "党委办公室", phone: "62751733", email: "qingxiao@pku.edu.cn" }
        ]
      },
      {
        id: "team-building",
        title: "组建队伍",
        description: "课题组人员招聘、团队建设相关事务。",
        steps: [
          "根据科研需要确定招聘岗位和人数",
          "发布招聘启事",
          "组织面试和考核",
          "办理入职手续"
        ],
        contacts: [
          { name: "焦振威", office: "人事办公室", phone: "62766282", email: "jzw@pku.edu.cn" }
        ],
      }
    ]
  },
  {
    id: "postdoc",
    title: "博士后事务",
    icon: "UserCog",
    description: "博士后招聘、进站、出站等事务",
    sections: [
      {
        id: "postdoc-recruitment",
        title: "博士后招聘",
        description: "博士后研究人员招聘流程。",
        steps: [
          "填写招聘启事模板",
          "发送至人事办审核",
          "审核无误后投递至北京大学博士后官网招聘信息栏目、北京大学物理学院官网招聘信息栏目"
        ],
        links: [
          { text: "北京大学博士后官网招聘信息", url: "https://postdocs.pku.edu.cn/zpxx/index.htm" }
        ],
        contacts: [
          { name: "宣梦雨", office: "人事办公室", phone: "62758139", email: "myxuan@pku.edu.cn" }
        ]
      },
      {
        id: "postdoc-enrollment",
        title: "博士后进站",
        description: "博士后研究人员进站申请流程。",
        steps: [
          "申请人提供相关申请材料及学历（位）证明",
          "所申请的学科单位负责对其博士论文、博士学位及学术能力与研究计划进行审查考核",
          "合作导师填写学术部门考核意见表",
          "学院博士后管理小组予以审核",
          "自筹经费博士后合作导师需交12万/年培养费"
        ],
        notes: [
          "具有在国内外大学获得的博士学位，品学兼优、身心健康、年龄不超过35岁",
          "获得博士学位不超过3年",
          "能够保证在站期间全职从事博士后研究工作"
        ]
      },
      {
        id: "postdoc-certificate",
        title: "博士后证明办理",
        description: "博士后办理各类人事及公证证明程序。",
        steps: [
          "在职证明、在职和薪酬证明：登录北京大学校内门户→信息服务→人事业务理模块，选择需要申请的证明类型",
          "等待相关部门审核后，审核结果将通过短信和邮件通知",
          "携带校园卡，至第二教学楼一层的自助打印终端打印证明",
          "其他证明：先至物理学院人事办公室审核，出具相关证明后加盖学院公章，然后至人事部博士后管理办公室办理"
        ]
      },
      {
        id: "postdoc-project",
        title: "博士后项目申报",
        description: "博士后各类项目申报。",
        links: [
          { text: "中国博士后科学基金资助指南", url: "https://postdocs.pku.edu.cn/tzgg/ef0f61821d1c4331abbe5f288bf060c2.htm" },
          { text: "国家资助博士后研究人员计划", url: "https://postdocs.pku.edu.cn/tzgg/0abb99297923466bac1b5ca6e9b49f28.htm" },
          { text: "博士后国（境）外交流项目", url: "https://postdocs.pku.edu.cn/tzgg/460861bb068f42b39124cdc338934737.htm" }
        ]
      },
      {
        id: "postdoc-assessment",
        title: "博士后副研究员资格评审",
        description: "正常在站四年且在站期间年度考核结果达到'合格'及以上档次的全职博士后可申请由学校评定副研究员资格。",
        steps: [
          "坚持把思想政治和师德师风表现作为参评的首要要求",
          "校外评审专家应不少于3人，校外评审应获得不少于2位评审专家的实质性反馈意见",
          "各单位应在申请人材料外送评审前公示申请人材料，公示时间不得少于5个工作日",
          "申报程序为个人申请、合作导师审核推荐、单位评审上报、学校评审"
        ],
        notes: [
          "申请人的研究生导师或博士后合作导师可以提供推荐信件，但该信件不计入校外评审反馈意见",
          "业绩成果截止时间见学校具体通知"
        ]
      }
    ]
  },
  {
    id: "finance",
    title: "财务相关",
    icon: "Wallet",
    description: "报销、大额审批等财务事务",
    sections: [
      {
        id: "reimbursement",
        title: "日常报销",
        description: "日常费用报销流程。",
        steps: [
          "准备报销单据（发票、合同等）",
          "登录财务系统填写报销单",
          "项目负责人签字",
          "交至财务办公室审核"
        ],
        links: [
          { text: "智能报销系统", url: "https://cwb.pku.edu.cn" }
        ],
        notes: [
          "报销时限一般为费用发生后3个月内",
          "大额报销需提前进行大额审批"
        ],
      },
      {
        id: "large-amount",
        title: "大额资金使用审批",
        description: "大额资金使用申请流程。",
        steps: [
          "登录院内门户 → 办公服务 → 大额审批",
          "用本人校园卡号登入进入主界面",
          "点击左上角填写大额登记按钮，输入相关信息",
          "点击提交按钮",
          "点击左上角上传大额附件",
          "点击打印，打印出带有唯一编号的审批表",
          "将打印的纸质审批表签字后连同附件材料，在党政联席会议前至少提前一个工作日交到综合办"
        ],
        links: [
          { text: "院内门户", url: "https://portal.phy.pku.edu.cn" }
        ],
        notes: [
          "单笔不超10万元的，不需要经过大额资金使用审批",
          "单笔≥10万元，<50万元的，须经学院党政联席会议审批",
          "单笔≥50万元的，须经学院和学校两级审批"
        ]
      },
      {
        id: "import-tax-free",
        title: "进口免税采购",
        description: "进口仪器设备免税采购流程。",
        steps: [
          "所有进口仪器设备采购必须经过学院审核",
          "对经费来源及仪器用途等信息进行判断",
          "确定是否进行免税申报",
          "办理免税申报手续"
        ],
        links: [
          { text: "实验室与设备管理部采购流程", url: "http://www.lab.pku.edu.cn/fwzn/jkgl/yqsbjkcg.htm" }
        ],
        policies: [
          { title: "北京大学进口科教用品管理办法", url: "http://www.lab.pku.edu.cn/info/2911/38231.htm" }
        ],
        contacts: [
          { name: "张志科", office: "资产与安全管理办公室", phone: "62751123", email: "zhangzhike@pku.edu.cn" }
        ],
        notes: [
          "免税物品在监管期（3年）内要随时接受海关检查"
        ]
      },
      {
        id: "furniture-purchase",
        title: "家具采购",
        description: "家具购买、建账、报废流程。",
        steps: [
          "购买前向学院家具管理员咨询本季度是否还有额度（每季度额度为20万元）",
          "成交金额总价达到1万元（含）以上的必须签订合同",
          "成交金额10万元以上的合同需经设备部审核并加盖北京大学合同专用章",
          "购买完成后，带购货合同和发票至学院家具管理员办理建档手续",
          "再去设备部家具办确认并打印家具标签"
        ],
        contacts: [
          { name: "张志科", office: "资产与安全管理办公室", phone: "62751123", email: "zhangzhike@pku.edu.cn" }
        ],
        notes: [
          "单价200元（含）以上且使用期限超过一年的家具需要建档管理",
          "家具使用年限为15年，达到使用年限后才可办理报废"
        ]
      },
      {
        id: "software-purchase",
        title: "软件采购",
        description: "软件购置与审批流程。",
        steps: [
          "单价500元（含）以上且使用期限一年以上的软件需在北京大学软件资产建账管理系统中登记建账"
        ],
        links: [
          { text: "北京大学软件资产建账管理系统", url: "http://162.105.180.243/softwareAccount/" }
        ]
      },
      {
        id: "consumable-purchase",
        title: "耗材购买管理",
        description: "耗材的购买和管理流程。",
        steps: [
          "单价在500（含）－1000（不含）元的耗材，需要在学院资产与安全管理办公室登记、盖章",
          "单价在1000（含）元以上的耗材，需要到学校设备部审核、盖章、备案",
          "液体、气体、粉末、颗粒等试剂，必须通过学校试剂平台购买"
        ],
        links: [
          { text: "学校试剂平台", url: "https://reagent.pku.edu.cn" }
        ],
        contacts: [
          { name: "张志科", office: "资产与安全管理办公室", phone: "62751123", email: "zhangzhike@pku.edu.cn" }
        ]
      },
      {
        id: "contract-signing",
        title: "合同签订",
        description: "各类合同签订流程。",
        steps: [
          "确定合同类型和金额",
          "登录校内门户-智能合同管理系统起草合同",
          "提交学院审核",
          "根据金额大小提交学校相关部门审核",
          "完成签署"
        ],
        links: [
          { text: "校内门户", url: "https://portal.pku.edu.cn/portal2017/#/index" }
        ],
      }
    ]
  },
  {
    id: "equipment",
    title: "设备管理",
    icon: "Cpu",
    description: "仪器设备采购、报废、移交调拨等资产事务",
    sections: [
      {
        id: "equipment-purchase",
        title: "设备采购",
        description: "仪器设备购买、建卡流程。",
        steps: [
          "单价1000元（含）以上的仪器设备需在北京大学实验室与设备管理系统中登记建账",
          "建账完成后至学院资产与安全管理办公室打印设备标签并粘贴",
          "单价1万元（含）以上的需签订购货合同并加盖学院公章",
          "单价10万元（含）以上的合同需经设备部审核并加盖北京大学合同专用章",
          "单价50万元（含）以上的在购买前还需要先进行论证和招标"
        ],
        links: [
          { text: "北京大学实验室与设备管理系统", url: "http://lab-equip.pku.edu.cn" },
          { text: "竞价采购系统", url: "https://ebuy.pku.edu.cn" }
        ],
        contacts: [
          { name: "张志科", office: "资产与安全管理办公室", phone: "62751123", email: "zhangzhike@pku.edu.cn" }
        ],
        notes: [
          "通用设备（计算机、打印机等）需通过竞价采购系统采购",
          "进口仪器设备需判断是否免税申报，免税物品在监管期要随时接受海关检查（3年内）"
        ]
      },
      {
        id: "equipment-scrap",
        title: "设备报废",
        description: "仪器设备报废流程。",
        steps: [
          "由仪器负责人提出申请",
          "将需要报废的仪器设备交至学院资产与安全管理办公室",
          "配合完成后续报废流程"
        ],
        contacts: [
          { name: "张志科", office: "资产与安全管理办公室", phone: "62751123", email: "zhangzhike@pku.edu.cn" }
        ],
        notes: [
          "报废的仪器设备需达到使用年限",
          "非通用设备5年，通用设备6年，大型仪器设备10年",
          "未达使用年限的仪器设备原则上不能报废"
        ]
      },
      {
        id: "equipment-transfer",
        title: "设备移交调拨",
        description: "仪器设备移交和调拨流程。",
        steps: [
          "离（退）休、调出、博士后出站以及长期（一年以上）出国人员，应在离岗前一个月办理仪器设备移交手续",
          "经学院仪器设备管理人员办理仪器设备移交手续后，方可办理离退休、调离及出站、出国手续",
          "不得以任何理由拒绝移交或私自处理（带走、转送或卖出等）仪器设备"
        ],
        contacts: [
          { name: "张志科", office: "资产与安全管理办公室", phone: "62751123", email: "zhangzhike@pku.edu.cn" }
        ]
      }
    ]
  },
  {
    id: "communication",
    title: "出国出境",
    icon: "Globe",
    description: "因公出国、护照办理、外籍教师聘请等",
    sections: [
      {
        id: "abroad-short",
        title: "短期因公出国（90天以内）",
        description: "教职工因公临时出国（境）手续办理。",
        steps: [
          "准备有效邀请材料",
          "登录校内门户 → 教职工因公临时出国（境）申报，提交申报",
          "在线提交因公临时出国申请并获得学校批准",
          "本人持身份证原件到南阁103采集生物信息",
          "办理因公签证签注"
        ],
        links: [
          { text: "北京大学教职工因公临时出国手续办理说明", url: "https://www.oir.pku.edu.cn/info/1044/3724.htm" },
          { text: "北京大学师生因公赴港澳手续办理说明", url: "https://hmt.pku.edu.cn/cfsb/ygfga.htm" },
          { text: "教职工办理因公临时赴台手续", url: "https://hmt.pku.edu.cn/cfsb/ygft/jzgblsx.htm" }
        ],
        policies: [
          { title: "《北京大学因公出国审批与管理规定》", url: "https://www.oir.pku.edu.cn/info/1231/3687.htm" }
        ],
        notes: [
          "有效期离出访时间不足六个月的旧护照，需交回注销后才能办理新护照",
          "外交部规定着装深色上衣的护照专用照片"
        ]
      },
      {
        id: "abroad-long",
        title: "长期因公出国（90天以上）",
        description: "教职工因公长期出国（境）申报。",
        steps: [
          "登录校内门户 → 教职工因公长期出国（境）申报，提交申报"
        ],
        links: [
          { text: "校内门户", url: "https://portal.pku.edu.cn/portal2017/#/index" }
        ],
        policies: [
          { title: "《北京大学教职工出国（境）管理规定》", url: "https://www.oir.pku.edu.cn/info/1231/4598.htm" }
        ]
      },
      {
        id: "passport",
        title: "办理因公护照",
        description: "教职工公务普通护照办理流程。",
        steps: [
          "在线提交因公临时出国申请并获得学校批准",
          "准备外交部规定着装深色上衣的护照专用照片",
          "本人持身份证原件到南阁103采集生物信息",
          "有效期离出访时间不足六个月的旧护照，需交回注销后才能办理新护照"
        ],
        links: [
          { text: "因公签证签注办理流程", url: "https://www.oir.pku.edu.cn/ygcj/cgbl/ygqz_jzg_.htm" }
        ]
      },
      {
        id: "foreign-teacher",
        title: "聘请外籍教师",
        description: "外籍教师聘请流程。",
        steps: [
          "主请系所中心登录北京大学校内门户→出入境业务，创建新申请填写外国专家信息",
          "在线提交并打印《北京大学聘请外国人来华申报表》纸质材料",
          "经学院党委书记、主管外事副院长签章后，提交至科研交流办（西110）备案",
          "然后提交至国际合作部专家办（南阁105）",
          "外籍教师通过学校聘任审批后，主请院系与外专签订合同或协议（工作3个月以上的必须签订书面合同）"
        ],
        links: [
          { text: "外籍专家聘请指南", url: "https://www.oir.pku.edu.cn/info/1068/3831.htm" },
          { text: "签证办理", url: "https://www.oir.pku.edu.cn/gjxzzxfwpt/pqzn/qzbl1.htm" },
          { text: "来华体检", url: "https://www.oir.pku.edu.cn/gjxzzxfwpt/pqzn/lhtj.htm" }
        ],
        contacts: [
          { name: "李晓敏", office: "科研交流办公室", phone: "62752933", email: "lixiaomin@pku.edu.cn" }
        ],
        notes: [
          "外国人在旅馆以外的其他住所居住或住宿的，应当在入住后24小时内申报住宿登记",
          "北京境外人员网上住宿登记系统：https://zwfw.gaj.beijing.gov.cn/zsdj/zsdj-w/#/Announcement"
        ]
      },
      {
        id: "international-cooperation",
        title: "国际合作协议签署",
        description: "北京大学国际合作/港澳台合作申报流程。",
        steps: [
          "准备合作协议草拟文件和《合作申请书》word版",
          "提交材料到科研交流办外事秘书李晓敏处",
          "经物理学院党政联席会审议",
          "外事秘书在国际和港澳台合同管理系统中提交材料",
          "学校法律办审核、国际合作部批复",
          "签署合作协议",
          "协议签署后两周内将签章版PDF发送至物理学院科研交流办备案"
        ],
        links: [
          { text: "北京大学国际合作/港澳台合作申请书", url: "https://www.oir.pku.edu.cn/info/1107/4299.htm" },
          { text: "《北京大学涉港澳台合作申报》", url: "https://hmt.pku.edu.cn/fwzn/sgathz.htm" }
        ],
        contacts: [
          { name: "李晓敏", office: "科研交流办公室", phone: "62752933", email: "lixiaomin@pku.edu.cn" }
        ],
        notes: [
          "学校法律办业务量比较大，需要提前10个工作日提交材料并排队"
        ]
      },
      {
        id: "talent-program",
        title: "引智项目申报",
        description: "教育部、外专局、学校重点项目申报。",
        steps: [
          "每年年初发布申报通知，要求在截止日期前完成申报",
          "重点项目经费额度较高，但申报项目需符合一定要求"
        ],
        links: [
          { text: "引智项目详情", url: "http://www.oir.pku.edu.cn/info/1069/2878.htm" }
        ],
        notes: [
          "项目包括：高等学校学科创新引智计划（111计划）、科技部国家外国专家项目、与大师对话——诺贝尔奖获得者校园行项目、海外名师项目等"
        ]
      }
    ]
  },
  {
    id: "welfare",
    title: "生活福利",
    icon: "Heart",
    description: "医疗报销、体检、爱心基金等福利事务",
    sections: [
      {
        id: "medical-reimbursement",
        title: "公费医疗报销",
        description: "公费医疗报销相关事项。",
        steps: [
          "急诊报销：携带校园卡到综合办领取并填写相关证明，盖好学院公章后到校医院报销",
          "住院费借款：持校医院开具的当月转诊单、医院开具的住院通知单到综合办开具《北京大学住院借款专用请款单》",
          "到校财务部审核办公室办理住院费借款"
        ],
        links: [
          { text: "校医院报销指南", url: "https://hospital.pku.edu.cn/info/1004/1164.htm" },
          { text: "北医三院门诊便捷报销", url: "https://portal.pku.edu.cn/portal2017/#/index" }
        ],
        contacts: [
          { name: "周梦荃", office: "综合办公室", phone: "62751732", email: "mqzhou@pku.edu.cn" }
        ],
        notes: [
          "财务部住院借款电话：62755350，地址：化学南楼101室12号窗口",
          "公费医疗报销电话：62751085，地址：校医院门诊楼北A区一层大厅"
        ]
      },
      {
        id: "hospital-loan",
        title: "住院费借款",
        description: "住院费借款办理流程。",
        steps: [
          "持校医院开具的当月转诊单（盖章有效）",
          "持医院开具的住院通知单（与转诊单医院一致）",
          "到综合办开具《北京大学住院借款专用请款单》",
          "到校财务部审核办公室办理住院费借款"
        ],
        contacts: [
          { name: "周梦荃", office: "综合办公室", phone: "62751732", email: "mqzhou@pku.edu.cn" }
        ],
        notes: [
          "金额超过80000元（含），须同时提供《北京大学大额资金使用审批表》",
          "患者预借住院费支票总次数不得超过三次"
        ]
      },
      {
        id: "physical-exam",
        title: "教职工体检",
        description: "物理学院教职工体检相关事项。",
        steps: [
          "学院每年一般安排在4至5月进行集中体检",
          "需要体检的教职工可在微信公众号北京大学医院服务平台上自行预约体检时间",
          "体检项目全部完成15个工作日后可领取体检报告"
        ],
        notes: [
          "网上门户自行下载：校内门户网站 → 搜索健康档案（有胸片及彩超图片）",
          "到校医院领取：携带身份证到校医院B区3层326室打印领取（无胸片及彩超图片）",
          "领取时间：工作日下午13:30-16:30",
          "校医院体检中心电话：62767037；体检预约电话：62754213"
        ]
      },
      {
        id: "love-fund",
        title: "申请爱心基金",
        description: "工会爱心基金由基层工会帮助申请人填报，原则上应在确诊后一年内申请。",
        steps: [
          "基层工会确定申请人的情况是否符合爱心基金资助范围（患严重疾病、遭遇严重意外伤害、身故的在职教职工）",
          "基层工会福利委员通过工会管理与服务信息系统'爱心基金→申请资助'模块填报申请表",
          "待初审过后，基层工会将纸质申请表签字盖章后交至校工会生活福利部"
        ],
        contacts: [
          { name: "赵冬青", office: "党委办公室", phone: "62757542", email: "zhao_dong_qing@pku.edu.cn" }
        ],
        notes: [
          "校工会咨询电话：62752467"
        ]
      },
      {
        id: "only-child-reward",
        title: "独生子女奖励",
        description: "独生子女父母年老时一次性奖励。",
        steps: [
          "每年10月份左右办理",
          "持所需材料复印件至综合办计生宣传员处办理"
        ],
        notes: [
          "奖励金额：每人1500元，一般于当年12月随工资发放",
          "办理条件：本单位女教职工年满55周岁，男教职工年满60周岁",
          "只能领取一次，不能重复领取"
        ]
      },
      {
        id: "child-care",
        title: "幼儿托补费申领",
        description: "幼儿托补费申领流程。",
        steps: [
          "持相应证件至学院综合办公室计生宣传员处开具证明",
          "持全部材料原件前往学校计生办完成登记"
        ],
        notes: [
          "申领条件：北京大学事业编教职工，已入北京市户口的合法生育子女",
          "自出生第7个月起可申领，发至幼儿上小学前（最大不超过七周岁）",
          "待遇额度：每月40元"
        ]
      },
      {
        id: "vehicle-pass",
        title: "机动车通行证办理",
        description: "学校机动车通行证和学院停车证办理流程。",
        steps: [
          "学校机动车通行证：登录校内门户 → 信息服务 → 申办车证，按照要求填写内容、提交文件",
          "学院停车证：准备校园卡、驾驶证、行驶证复印件，到物理学院南门传达室递交相关材料",
          "3个工作日审核通过后通知领取新车证"
        ],
        links: [
          { text: "校内门户", url: "https://portal.pku.edu.cn/portal2017/#/index" }
        ],
        policies: [
          { title: "物理学院机动车管理办法（试行）", url: "https://portal.phy.pku.edu.cn" }
        ],
        notes: [
          "学校实行两车一位，可申请增加一辆限行期间的备案车",
          "地下停车证申请人须为在物理楼或金工实验楼有固定办公室或实验室的物理学院事业编制在职教职工、合同制员工、在站博士后",
          "车辆须为京牌",
          "校园内行驶时速不得超过20公里、禁止鸣笛"
        ]
      }
    ]
  },
  {
    id: "admin",
    title: "日常行政",
    icon: "Building",
    description: "用印、会议室预约、访客预约等日常事务",
    sections: [
      {
        id: "seal-application",
        title: "用印申请",
        description: "物理学院印章申请流程。",
        steps: [
          "非涉密、非人事类的对外合同、协议：登录校内门户→智能合同系统，提交审批",
          "使用学院印章的各类非涉密材料：登录校内门户→单位办事大厅→物理学院用印申请，提交审批",
          "经授权的校内制式表格：在签字齐全的前提下可直接到相应办公室用印",
          "涉密材料：通过线下《北京大学物理学院用印审批表》审批"
        ],
        links: [
          { text: "校内门户", url: "https://portal.pku.edu.cn/portal2017/#/index" }
        ],
        policies: [
          { title: "《北京大学物理学院印章管理办法（试行）》", url: "https://portal.phy.pku.edu.cn/content.jsp?urltype=news.NewsContentUrl&wbtreeid=1319&wbnewsid=4071" }
        ]
      },
      {
        id: "meeting-room",
        title: "预约会议室",
        description: "物理学院公共会议室预约流程。",
        steps: [
          "登录院内门户 → 办公服务 → 会议室预定",
          "点击所要预约的会议室，根据日期点击我要预约",
          "核对预约时间、会议室信息，选择申请单位",
          "输入手机号、用途、选择预约时间，点击预约",
          "预约成功后，点击我的预约信息，查看凭证",
          "会议室使用前，到中控室（西106室）用凭证截图开门"
        ],
        links: [
          { text: "院内门户", url: "https://portal.phy.pku.edu.cn" }
        ],
        contacts: [
          { name: "商庆军", office: "综合办公室", phone: "62751374", email: "shangqj@pku.edu.cn" }
        ],
        notes: [
          "可预约两周之内的会议室",
          "超出两周请致电综合办62751732进行预约",
          "思源多功能厅预约需要下载表格填写后交至综合办"
        ]
      },
      {
        id: "space-renovation",
        title: "公共空间改造",
        description: "物理学院公共空间及公用房使用和改造规则。",
        steps: [
          "申请人向综合办提交书面申请，对使用公共空间的具体方案、必要性、以及噪音、辐射等安全问题作详细论证说明",
          "院实验室及公共安全负责人审批并给出具体审批意见",
          "院安全负责人审议通过后，综合办把材料交给主管院长，提交学院党政联席会议初审",
          "学院党政联席会议初审通过后，综合办把申请材料发给物理学院各系所领导征求意见",
          "学院党政联席会议根据系所反馈意见做最终决议",
          "涉及学校相关部门审批的，由申请人报学校相关部门审核",
          "学校批准后，申请人到综合办签署物理学院公共空间定期租赁合同"
        ],
        links: [
          { text: "物理学院公共空间及公用房使用和改造审批表", url: "https://portal.phy.pku.edu.cn/content.jsp?urltype=news.NewsContentUrl&wbtreeid=1347&wbnewsid=2515" }
        ],
        contacts: [
          { name: "商庆军", office: "综合办公室", phone: "62751374", email: "shangqj@pku.edu.cn" }
        ],
        notes: [
          "凡涉及楼宇内结构、水电等基础设施的改造改建，必须向学院及学校相关部门申报，经批准后方可执行",
          "施工改造需办理院级施工手续，与物业签订安全协议"
        ]
      },
      {
        id: "visitor-appointment",
        title: "访客预约进校",
        description: "访客单次预约业务流程。",
        steps: [
          "单次预约入主校区、燕东新园、新燕园：校内门户 → 教工预约访客",
          "单次预约入加速器楼、技物楼：院内门户 → 办公服务 → 访客预约",
          "批量或车辆预约：填写预约申请表，签字后交到综合办"
        ],
        links: [
          { text: "校内门户", url: "https://portal.pku.edu.cn/portal2017/#/index" },
          { text: "院内门户", url: "https://portal.phy.pku.edu.cn" }
        ],
        contacts: [
          { name: "周梦荃", office: "综合办公室", phone: "62751732", email: "mqzhou@pku.edu.cn" }
        ],
        notes: [
          "主校区每日每校区限6人（新燕园为3人），每月每校区限20人（新燕园为10人）",
          "加速器楼、技物楼每日限5人",
          "教职工、博士后均可开通预约进加速器楼/技物楼权限"
        ]
      },
      {
        id: "family-card",
        title: "办理家属证",
        description: "教职工家属证办理流程，用于家属刷脸进校。",
        steps: [
          "登录校内门户 → 家属证中提交相关信息及证明材料",
          "联系学院专职联络人周梦荃在系统完成审核流程",
          "保卫部备案，发送短信",
          "家属根据短信点击链接，进行人脸授权方可刷脸进校",
          "如需更换照片等信息，请联系综合办周梦荃"
        ],
        links: [
          { text: "校内门户", url: "https://portal.pku.edu.cn/portal2017/#/index" }
        ],
        contacts: [
          { name: "周梦荃", office: "综合办公室", phone: "62751732", email: "mqzhou@pku.edu.cn" }
        ],
        notes: [
          "证明材料包括：户口本、结婚证、独生子女证、院系提供的亲属证明（盖院章，领导签字）等",
          "只要能明确显示出申请人和被申请人的亲属关系即可"
        ]
      },
      {
        id: "repair",
        title: "设施设备报修",
        description: "物理学院报修业务流程。",
        steps: [
          "公共区域设备设施、室内照明灯更换维修：联系物业24小时值班电话",
          "室内除灯管以外的维修：产生费用需自行承担",
          "暖气、水管：联系动力中心",
          "网络：联系计算中心",
          "电话座机移机：联系中国联通"
        ],
        contacts: [
          { name: "物业24小时值班", phone: "62758291" },
          { name: "物业办公室", phone: "62751735" },
          { name: "商庆军", office: "综合办公室", phone: "62751374", email: "shangqj@pku.edu.cn" },
          { name: "动力中心（暖气、水管）", phone: "62753319" },
          { name: "计算中心（网络）", phone: "62751023" },
          { name: "中国联通（电话）", phone: "62752222" }
        ]
      },
      {
        id: "monitor-request",
        title: "申请调取监控",
        description: "申请调取物理学院监控记录流程。",
        steps: [
          "到综合办领取并填写《调取监控记录申请书》",
          "申请人及系所负责人签字",
          "到中控室调取监控"
        ],
        links: [
          { text: "调取监控记录申请表", url: "https://portal.phy.pku.edu.cn/content.jsp?urltype=news.NewsContentUrl&wbtreeid=1347&wbnewsid=3361" }
        ],
        contacts: [
          { name: "商庆军", office: "综合办公室", phone: "62751374", email: "shangqj@pku.edu.cn" }
        ]
      },
      {
        id: "screen",
        title: "西楼大屏幕使用",
        description: "物理学院西楼1层大屏幕管理使用流程。",
        steps: [
          "将屏幕内容（图片尺寸为6:1，推荐1800*300像素或以上，jpg和png格式）准备妥当",
          "将使用日期、使用时间以及其他需求以邮件形式发送至邮箱",
          "等待综合办确认并安排播放"
        ],
        contacts: [
          { name: "周梦荃", office: "综合办公室", phone: "62751732", email: "mqzhou@pku.edu.cn" }
        ],
        notes: [
          "屏幕内容图片尺寸为6:1，推荐1800*300像素(或以上)"
        ]
      },
      {
        id: "vehicle-rental",
        title: "车队用车",
        description: "在职教职工（含博士后、合同制）因公用车，可预订学校车队车辆。",
        steps: [
          "提前1天进行预约：校内门户→服务用车预约",
          "紧急用车可拨打车队电话62752182",
          "乘车当天仔细核对乘车单内容，当场签名",
          "综合办按系所或项目负责人整理划分车队费用",
          "确认无误后领取结算单，填写预约报销单并交综合办"
        ],
        notes: [
          "如上下车点含机场、车站等地点，请备注用车原因",
          "如为出差用车，请勿与差补重复报销",
          "车费通常每季度结算"
        ]
      },
      {
        id: "temp-card",
        title: "临时餐卡办理",
        description: "临时餐卡分为可充值餐卡、固定面值临时餐卡两种。",
        steps: [
          "和各系所负责临时餐卡办理的经办人确定餐卡种类、是否有空余名额",
          "提交《可充值餐卡申请表》/《定额临时餐卡申请》纸质版（需系所负责人签字）",
          "提交《物理学院临时人员信息登记表》（需经学院审批通过）",
          "综合办在收到纸质申请之后，将申请人材料提交至学校餐饮中心系统",
          "餐卡审核通过后，申请人持本人有效身份证件前往28楼后勤大厅餐饮中心办理开通"
        ],
        notes: [
          "可充值餐卡有效期最长365天，适用于长期来访人员，各系所有名额限制",
          "固定面值临时餐卡，有效期不超过30天，仅适用于来访不超过1个月人员"
        ]
      },
      {
        id: "long-term-access",
        title: "校外人员长期进出权限",
        description: "校外人员长期进出物理学院办理流程。",
        steps: [
          "填写在线表单",
          "填写《人员出入——物理学院临时人员信息登记表》",
          "填写《人员出入——临时出入证申请表》",
          "签署《实验室安全责任书》（系所/课题组安全员处领取）",
          "《实验室安全教育结业证书》（注册审核后，完成在线考核）",
          "材料2-4纸质签字版送至综合办"
        ],
        links: [
          { text: "在线表单", url: "https://f.wps.cn/g/4xvIsSuC/" },
          { text: "实验室安全教育", url: "https://lab-safety.pku.edu.cn/login/" }
        ],
        contacts: [
          { name: "周梦荃", office: "综合办公室", phone: "62751732", email: "mqzhou@pku.edu.cn" }
        ]
      }
    ]
  },
  {
    id: "safety",
    title: "实验室安全",
    icon: "Shield",
    description: "实验室安全、门禁权限等",
    sections: [
      {
        id: "lab-safety",
        title: "实验室安全管理",
        description: "物理学院实验室安全相关事宜。",
        steps: [
          "认真学习物理学院《实验室安全教育》课程",
          "或通过学校实验室与设备管理部'实验室安全教育与考试系统'自学",
          "参加本课题组组织的相关实验室安全专业培训",
          "与课题组负责人签订实验室安全责任书",
          "方可进入物理学院实验室"
        ],
        links: [
          { text: "实验室安全教育与考试系统", url: "https://lab-safety.pku.edu.cn/login/" }
        ],
        policies: [
          { title: "北京大学实验室安全管理办法", url: "http://www.lab.pku.edu.cn/info/1161/32681.htm" },
          { title: "物理学院安全管理章程（试行）", url: "https://portal.phy.pku.edu.cn" }
        ],
        contacts: [
          { name: "张志科", office: "资产与安全管理办公室", phone: "62751123", email: "zhangzhike@pku.edu.cn" },
          { name: "周路群", office: "资产与安全管理办公室", phone: "13717760675", email: "zhoulq@pku.edu.cn" }
        ]
      },
      {
        id: "roof-access",
        title: "楼顶门禁权限",
        description: "物理学院楼顶门禁权限开启办法。",
        steps: [
          "本人手写申请书，写明用途、使用时间、申请人个人信息",
          "由导师或系所负责人签字",
          "将申请书交至资产与安全管理办公室"
        ],
        contacts: [
          { name: "张志科", office: "资产与安全管理办公室", phone: "62751123", email: "zhangzhike@pku.edu.cn" }
        ],
        notes: [
          "只可申请西楼、北楼、东楼及金工楼四处门禁权限",
          "仅供北京大学物理学院师生申请，外院校外院系不得申请",
          "仅供科研使用，不接受其他理由申请",
          "开通后仅限本人进入顶楼，不得帮助他人开启门禁"
        ]
      }
    ]
  }
];

// 常见问题数据
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
  link?: string;
}

export const faqData: FAQItem[] = [
  {
    id: "faq-1",
    question: "我是新入职老师，需要办理哪些手续？",
    answer: "新入职老师需要到人事办公室报到，办理校园卡、工资卡、社保手续，到系所中心报到，党员需办理党组织关系转接，可自愿加入工会，并完成实验室准入培训。",
    category: "入职与离职",
    link: "onboarding-new-faculty"
  },
  {
    id: "faq-2",
    question: "如何申请学术假？什么时候申请？",
    answer: "学术假开始时间只有2月1日/8月1日，需在开始时间前一学期的9月1日或3月1日提交申请材料。例如申请2026年春季学期学术假，须在2025年9月1日前提交材料。",
    category: "人事相关",
    link: "hr-academic-leave"
  },
  {
    id: "faq-3",
    question: "想申请国家自然科学基金，流程是什么？",
    answer: "登录国家自然科学基金网络信息系统（ISIS系统）进行填报。集中受理期项目需根据学校及学院工作安排进行；非集中受理期项目需参照相应项目指南撰写。",
    category: "科研相关",
    link: "research-nsfc-project"
  },
  {
    id: "faq-4",
    question: "怎么报销差旅费？需要准备什么材料？",
    answer: "准备报销单据（发票、合同等），登录财务系统填写报销单，项目负责人签字后交至财务办公室审核。报销时限一般为费用发生后3个月内。",
    category: "财务相关",
    link: "finance-reimbursement"
  },
  {
    id: "faq-5",
    question: "要出国参加会议，怎么申请？",
    answer: "准备有效邀请材料，登录校内门户 → 教职工因公临时出国（境）申报，提交申报。获得学校批准后，持身份证原件到南阁103采集生物信息，办理因公签证签注。",
    category: "出国出境",
    link: "communication-abroad-short"
  },
  {
    id: "faq-6",
    question: "如何预约学院会议室？",
    answer: "登录院内门户 → 办公服务 → 会议室预定，选择会议室和日期进行预约。预约成功后凭凭证截图到中控室（西106室）开门。可预约两周之内的会议室。",
    category: "日常行政",
    link: "admin-meeting-room"
  },
  {
    id: "faq-7",
    question: "大额资金审批的流程是什么？",
    answer: "单笔<10万元无需审批；10万元≤金额<50万元需经学院党政联席会议审批；金额≥50万元需经学院和学校两级审批。通过院内门户 → 办公服务 → 大额审批系统提交申请。",
    category: "财务相关",
    link: "finance-large-amount"
  },
  {
    id: "faq-8",
    question: "访客如何预约进校？",
    answer: "主校区、燕东新园、新燕园：校内门户 → 教工预约访客。加速器楼、技物楼：院内门户 → 办公服务 → 访客预约。批量或车辆预约需填写申请表交综合办。",
    category: "日常行政",
    link: "admin-visitor-appointment"
  },
  {
    id: "faq-9",
    question: "党组织关系如何转接？",
    answer: "原则上通过党员E先锋系统进行线上转接。转入时输入党组织全称（京外）或党组织编码（京内）发起转入；转出时询问去往单位党组织全称/编码，由党支部或党委发起转出。",
    category: "入职与离职",
    link: "onboarding-party-relation"
  },
  {
    id: "faq-10",
    question: "博士后如何办理在职证明？",
    answer: "登录校内门户→信息服务→人事业务理模块，选择需要申请的证明类型。审核通过后，携带校园卡至第二教学楼一层自助打印终端打印证明。",
    category: "博士后事务",
    link: "postdoc-postdoc-certificate"
  }
];

// 热门问题数据
export const hotTopics = [
  { id: "finance-reimbursement", title: "我要报销", icon: "Wallet" },
  { id: "communication-abroad-short", title: "申请出国", icon: "Globe" },
  { id: "admin-meeting-room", title: "预约会议室", icon: "Building" },
  { id: "research-nsfc-project", title: "申请项目", icon: "FlaskConical" },
  { id: "postdoc-postdoc-enrollment", title: "博士后进站", icon: "UserCog" },
  { id: "finance-large-amount", title: "大额资金使用审批", icon: "FileText" },
];

// 快速链接数据 - 只保留3个
export const quickLinks = [
  { text: "校内门户", url: "https://portal.pku.edu.cn/portal2017/#/index", icon: "ExternalLink" },
  { text: "院内门户", url: "https://portal.phy.pku.edu.cn", icon: "ExternalLink" },
  { text: "学院官网", url: "https://www.phy.pku.edu.cn/", icon: "ExternalLink" },
];

// 联系方式数据 - 严格按照Word文档最后一页
export const contactData = [
  // 党委办公室
  { office: "党委办公室", name: "肖庆", phone: "62751733", email: "qingxiao@pku.edu.cn", room: "西楼138" },
  { office: "党委办公室", name: "李佳益", phone: "62755496", email: "ljysess@pku.edu.cn", room: "西楼138/西楼131" },
  { office: "党委办公室", name: "赵冬青", phone: "62757542", email: "zhao_dong_qing@pku.edu.cn", room: "西楼138" },
  { office: "党委办公室", name: "吕文娜", phone: "62751872", email: "wennalv@pku.edu.cn", room: "西楼138" },
  // 人事办公室
  { office: "人事办公室", name: "宣梦雨", phone: "62758139", email: "myxuan@pku.edu.cn", room: "西楼125" },
  { office: "人事办公室", name: "焦振威", phone: "62766282", email: "jzw@pku.edu.cn", room: "西楼125" },
  // 教务办公室
  { office: "教务办公室", name: "孙嘉琪", phone: "62751142", email: "jqsun@pku.edu.cn", room: "西楼135" },
  { office: "教务办公室", name: "张路遥", phone: "62766289", email: "lyzhang15@pku.edu.cn", room: "西楼135" },
  { office: "教务办公室", name: "肖黎", phone: "62751734", email: "xiaoli613@pku.edu.cn", room: "西楼135" },
  { office: "教务办公室", name: "程嘉颖", phone: "62752491", email: "chengjiaying@pku.edu.cn", room: "西楼135" },
  { office: "教务办公室", name: "刘芳兵", phone: "62757222", email: "fangbing@pku.edu.cn", room: "西楼135" },
  // 科研交流办公室
  { office: "科研交流办公室", name: "吴桃李", phone: "62757393", email: "wutaoli@pku.edu.cn", room: "西楼110" },
  { office: "科研交流办公室", name: "戴倩", phone: "62754232", email: "daiqian_wl@pku.edu.cn", room: "西楼110/西楼B106" },
  { office: "科研交流办公室", name: "李晓敏", phone: "62752933", email: "lixiaomin@pku.edu.cn", room: "西楼110" },
  // 综合办公室
  { office: "综合办公室", name: "商庆军", phone: "62751374", email: "shangqj@pku.edu.cn", room: "西楼114" },
  { office: "综合办公室", name: "高子晴", phone: "62766287", email: "gaoziqing@pku.edu.cn", room: "西楼114" },
  { office: "综合办公室", name: "周梦荃", phone: "62751732", email: "mqzhou@pku.edu.cn", room: "西楼114" },
  // 资产与安全管理办公室
  { office: "资产与安全管理办公室", name: "张志科", phone: "62751123", email: "zhangzhike@pku.edu.cn", room: "西楼114" },
  { office: "资产与安全管理办公室", name: "周路群", phone: "13717760675", email: "zhoulq@pku.edu.cn", room: "金工楼203" },
  { office: "资产与安全管理办公室", name: "刘国超", phone: "62754166", email: "liuguochao@pku.edu.cn", room: "南楼326" },
  // 学生工作办公室
  { office: "学生工作办公室", name: "张帆", phone: "62757171", email: "zhangfanpku@pku.edu.cn", room: "西楼131" },
  { office: "学生工作办公室", name: "王静雪", phone: "62750115", email: "wjx2013060708@pku.edu.cn", room: "西楼131" },
  { office: "学生工作办公室", name: "范若孜", phone: "62768162", email: "fanrz98@pku.edu.cn", room: "西楼131" },
  { office: "学生工作办公室", name: "林子南", phone: "62753044", email: "znlin@pku.edu.cn", room: "西楼131" },
  { office: "学生工作办公室", name: "赵阳依", phone: "62751731", email: "yyzhao@pku.edu.cn", room: "西楼131" },
  { office: "学生工作办公室", name: "孙铭阳", phone: "62766290", email: "smy24@stu.pku.edu.cn", room: "西楼131" },
  { office: "学生工作办公室", name: "陈子谦", phone: "62751124", email: "2501211074@stu.pku.edu.cn", room: "西楼131" }
];

// 根据姓名和办公室查找完整联系方式
export function findContact(name: string, office?: string) {
  const contact = contactData.find(c => {
    if (office) {
      return c.name === name && c.office === office;
    }
    return c.name === name;
  });
  return contact;
}
