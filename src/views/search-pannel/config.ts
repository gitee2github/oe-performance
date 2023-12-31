import { jobModel } from '@/model/data-model'

export interface configObject {
  [key: string]: any
}

export const fieldsConfiguration = Object.assign({}, jobModel.fields) as configObject

// 根据场景，可选择不同的套件进行查询
// 只在性能基线页面中使用
export const suiteConfig: configObject = {
  bigData: {
    suiteList: [{ suiteName: 'Spark'}, { suiteName: 'Hive'}, { suiteName: 'Hbase'}],
  },
  dataBase: {
    suiteList: [{ suiteName: 'MySQL-OLTP'}],
  },
  distributedStorage: {
    suiteList: [{ suiteName: 'block'}],
  },
  cpu: {
    suiteList: [{ suiteName: 'unixbench'}, { suiteName: 'speccpu2006'}, { suiteName: 'speccpu2017'}],
  },
  memory: {
    suiteList: [{ suiteName: 'stream'}, { suiteName: 'lmbench'}],
  },
  storage: {
    suiteList: [{ suiteName: 'fio-basic'}, { suiteName: 'iozone', unavailable: true }],
  },
  network: {
    suiteList: [{ suiteName: 'netperf'}],
  },
  basic: {
    suiteList: [{ suiteName: 'libmicro'}, { suiteName: 'specjvm2008', unavailable: true}],
  }
}