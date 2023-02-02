export const columnConfig = [
  {
    label: '性能数据',
    prop: 'performance_data',
    show: true,
    width: 130
  },
  {
    label: '服务器型号',
    prop: 'testbox',
    show: true,
    width: 260,
  },
  {
    label: 'CPU频率',
    prop: 'device.cpu.cpu_max_mhz',
    show: true,
    width: 100
  },
  {
    label: 'CPU总核数',
    prop: 'nr_cpu',
    show: true,
    width: 120
  },
  {
    label: 'CPU型号',
    prop: 'model_name',
    show: true,
    width: 300
  },
  {
    label: '操作系统',
    prop: 'osv',  // 需要拼接
    show: true,
    width: 260
  },
  {
    label: '系统内核',
    prop: 'kernel_version',
    show: true,
    width: 300
  },
  {
    label: '测试人',
    prop: 'my_account',
    show: true,
    width: 150
  }
]

export const columnConfig2 = [
  {
    label: '性能数据',
    prop: 'performance_data',
    show: true,
    width: 130
  },
  {
    label: '服务器型号',
    prop: 'testbox',
    show: true,
    width: 260,
  },
  {
    label: 'CPU频率',
    prop: 'device.cpu.cpu_max_mhz',
    show: true,
    width: 100
  },
  {
    label: 'CPU总核数',
    prop: 'nr_cpu',
    show: true,
    width: 120
  },
  {
    label: 'CPU型号',
    prop: 'model_name',
    show: true,
    width: 300
  },
  {
    label: '操作系统',
    prop: 'osv',  // 需要拼接
    show: true,
    width: 260
  },
  {
    label: '系统内核',
    prop: 'kernel_version',
    show: true,
    width: 300
  },
  {
    label: '测试人',
    prop: 'my_account',
    show: true,
    width: 300
  }
]

export const sceneConfig = {
  solution: [
    {
      label: '大数据',
      prop: 'bigData'
    },
    {
      label: '数据库',
      prop: 'dataBase'
    },
    {
      label: '分布式存储',
      prop: 'distributedStorage'
    }
  ],
  basic: [
    {
      label: 'CPU',
      prop: 'cpu'
    },
    {
      label: '内存',
      prop: 'memory'
    },
    {
      label: '存储',
      prop: 'storage'
    },
    {
      label: '网络',
      prop: 'network'
    },
    {
      label: '基础库',
      prop: 'basic'
    }
  ]
}

export interface configObject {
  [key: string]: any
}

export const config: configObject = {
  bigData: {
    column: columnConfig
  },
  dataBase: {
    column: columnConfig
  },
  distributedStorage: {
    column: columnConfig
  },
  cpu: {
    column: columnConfig
  },
  memory: {
    column: columnConfig
  },
  storage: {
    column: columnConfig
  },
  network: {
    column: columnConfig
  },
  basic: {
    column: columnConfig
  },
  basicPerformance: {
    column: columnConfig
  },
  solution: {
    column: columnConfig
  }
}
