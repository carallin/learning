var patentsOuter = [
  {
    "id":1,
    "name": "Tunable semiconductor laser based on reconstruction-equivalent-chirp and series mode or series and parallel hybrid integration and preparation thereof",
    "src": "../files/p-us-2.pdf",
    "author": "陈向飞",
    "number": "US20160134082A1"
  },
  {
    "id":2,
    "name": "Distributed feedback semiconductor laser based on reconstruction-equivalent-chirp technology and the manufacture method of the same",
    "src": "../files/p-us-1.pdf",
    "author": "陈向飞",
    "number": "US007873089B2"
  }
];
var patents = [
  {
    "id":1,
    "name": "相移电控制取样光栅半导体激光器及其设置方法",
    "src": "../files/p-2012-2.pdf",
    "author": "周亚亭;陈向飞",
    "number": 201210370711.9
  },
  {
    "id":1,
    "name": "一种非对称取样光栅半导体激光器及其制作方法",
    "src": "../files/p-2012-1.pdf",
    "author": "周亚亭;陈向飞",
    "number": 201210047346.8
  },
  {
    "id":1,
    "name": "基于特殊等效相移的 DFB 半导体激光器",
    "src": "../files/p-2010-1.pdf",
    "author": "周亚亭;施跃春;李思敏;贾凌慧;刘盛春;陈向飞",
    "number": 201010280999.1
  },
  {
    "id":1,
    "name": "基于重构-等效啁啾和等效切趾的平面波导布拉格光栅及其激光器",
    "src": "../files/p-2009-1.pdf",
    "author": "施跃春;陈向飞;李思敏;李静思;贾凌慧;刘盛春",
    "number": 200910264486.9
  },
  {
    "id":1,
    "name": "两次及多次曝光采样布拉格光栅及制作方法",
    "src": "../files/p-2008-2.pdf",
    "author": "李静思;陈向飞;殷作为;程赟;贾凌慧;张亮;陆延青",
    "number": 200810234184.2
  },
  {
    "id":1,
    "name": "单片集成半导体激光器阵列的制造方法及装置",
    "src": "../files/p-2008-1.pdf",
    "author": "李静思;贾凌慧;陈向飞",
    "number": 200810156592.0
  },
  {
    "id":1,
    "name": "基于重构-等效啁啾技术制备半导体激光器的方法及装置",
    "src": "../files/p-2006-1.pdf",
    "author": "陈向飞",
    "number": 200610038728.9
  },
  // {
  //   "id":1,
  //   "name": "一种光栅制作方法",
  //   "src": "../files/p-2016-3.pdf",
  //   "author": "刘胜平;陈向飞;葛海雄;施越春;钱明成;陆骏;张云山",
  //   "number": 201610141342.4
  // },
  // {
  //   "id":2,
  //   "name": "一种基于准二维光栅的混合模式激光器、阵列及制作方法",
  //   "src": "../files/p-2016-2.pdf",
  //   "author": "施跃春;肖如磊;陈向飞;张云山;郑吉林;陆骏",
  //   "number": 201610082345.5
  // },
  // {
  //   "id":3,
  //   "name": "分布反馈半导体激光器、激光器中布拉格光栅及制备方法",
  //   "src": "../files/p-2016-1.pdf",
  //   "author": "肖如磊;陈向飞;张云山;施跃春;郑吉林;陆骏;谢荣华",
  //   "number": 201610022368.7
  // },
  // {
  //   "id":3,
  //   "name": "基于重构-等效啁啾和纳米压印制备 DFB 激光器及阵列的方法",
  //   "src": "../files/p-2015-8.pdf",
  //   "author": "王文轩;陈向飞;刘胜平;施跃春",
  //   "number": 201510763227.6
  // },
  // {
  //   "id":3,
  //   "name": "基于 REC 技术的集成高速数字调制 WDM-PON 光模块",
  //   "src": "../files/p-2015-7.pdf",
  //   "author": "陆骏;陈向飞;仇伯仓",
  //   "number": 201510649306.4
  // },
  // {
  //   "id":3,
  //   "name": "非对称相移和切趾取样光栅及 DFB 激光器 ",
  //   "src": "../files/p-2015-6.pdf",
  //   "author": "刘胜平;陈向飞;陆骏",
  //   "number": 201510644999.8
  // },
  // {
  //   "id":3,
  //   "name": "基于重构-等效啁啾的半边切趾取样光栅及 DFB 激光器",
  //   "src": "../files/p-2015-5.pdf",
  //   "author": "刘胜平;陈向飞;陆骏",
  //   "number": 201510644601.0
  // },
  // {
  //   "id":3,
  //   "name": "基于重构-等效啁啾技术的备份型半导体激光器",
  //   "src": "../files/p-2015-4.pdf",
  //   "author": "肖如磊;陈向飞;陆骏;施跃春",
  //   "number": 201510564147.8
  // },
  // {
  //   "id":3,
  //   "name": "一种阶梯相位布拉格光栅及其分布反馈半导体激光器的制备方法",
  //   "src": "../files/p-2015-3.pdf",
  //   "author": "肖如磊;施跃春;陈向飞",
  //   "number": 201510332551.2
  // },
  // {
  //   "id":3,
  //   "name": "基于重构-等效啁啾技术的分布耦合系数 DFB 激光器及其阵列",
  //   "src": "../files/p-2015-2.pdf",
  //   "author": "陈向飞;肖如磊;郑俊守;栾佳;陆骏",
  //   "number": 201510290182.5
  // },
  // {
  //   "id":3,
  //   "name": "基于重构—等效啁啾的快速可调谐半导体激光器及制备方法",
  //   "src": "../files/p-2015-1.pdf",
  //   "author": "刘胜平;陈向飞;郑俊守;陆骏;郑吉林;张云山;施跃春",
  //   "number": 201510134181.1
  // },
  // {
  //   "id":3,
  //   "name": "集成调制器的低成本可调谐 DFB 半导体激光器及制备方法",
  //   "src": "../files/p-2014-1.pdf",
  //   "author": "唐松;李连艳;陈向飞",
  //   "number": 201410173909.7
  // },
  // {
  //   "id":3,
  //   "name": "可调谐激光器",
  //   "src": "../files/p-2013-2.pdf",
  //   "author": "齐加胜;栾佳;陈向飞;郑光辉;孔轩;章宜云;陈婷",
  //   "number": "201310434383.9"
  // },
  // {
  //   "id":3,
  //   "name": "基于重构—等效啁啾的非对称结构的 DFB 半导体激光器及制备",
  //   "src": "../files/p-2013-1.pdf",
  //   "author": "施跃春;陈向飞;郭仁甲;刘瑞;李思敏",
  //   "number": "201310146938.X"
  // },

];
