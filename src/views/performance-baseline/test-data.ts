export const allColumns = () => {
  return columnsData
}

const columnsData = [
  {
    label: '操作系统',
    prop: 'os_release'  // 需要拼接
  },
  {
    label: '测试机',
    prop: 'testbox'
  },
  {
    label: '系统架构',
    prop: 'os_arch'
  },
  {
    label: 'CPU核数',
    prop: 'nr_cpu'
  },
  {
    label: 'CPU内核',
    prop: 'kernel_version'
  },
  {
    label: '内存配置',
    prop: 'memory'
  },
  {
    label: '操作系统页表大小',
    prop: 'nr_node'
  },
  {
    label: '提交时间',
    prop: 'submit_time'
  },
  {
    label: '创建人',
    prop: 'created_by'
  },
  {
    label: '测试人',
    prop: 'tested_by'
  },
  {
    label: '任务类型',
    prop: 'task_belongs_type'
  },
  {
    label: '任务编号',
    prop: 'task_belongs_id'
  },
  {
    label: '产品编号',
    prop: 'product_product_id'
  },
  {
    label: '产品模式',
    prop: 'product_model'
  },
  {
    label: '产品CPU简介',
    prop: 'product_cpu_brief'
  },
  {
    label: '产品mhz',
    prop: 'product_frequency_mhz'
  },
  {
    label: '产品cpu数量',
    prop: 'product_cpus'
  },
  {
    label: '产品线',
    prop: 'product_threads'
  },
  {
    label: '产品系列',
    prop: 'product_series'
  },
  {
    label: '产品内存简介',
    prop: 'product_memory_brief'
  },
  {
    label: '产品内存模式',
    prop: 'product_memory_model'
  },
  {
    label: '产品磁盘简介',
    prop: 'product_disk_brief'
  },
  {
    label: '产品磁盘模式',
    prop: 'product_disk_model'
  },
  {
    label: '产品磁盘冗余阵列',
    prop: 'product_raid_brief'
  },
  {
    label: '产品网络接口',
    prop: 'product_nic_brief'
  },
  {
    label: '产品压力单位',
    prop: 'product_psu_brief'
  },
  {
    label: '产品板',
    prop: 'product_board_brief'
  },
  {
    label: '产品bios版本',
    prop: 'product_bios_version'
  },
  {
    label: '产品bmc版本',
    prop: 'product_bmc_version'
  },
  {
    label: '产品bios版本',
    prop: 'product_bios_version'
  },
  {
    label: '产品',
    prop: 'product_bios_detail_NUMA'
  },
  {
    label: '产品',
    prop: 'product_bios_detail_Power'
  },
  {
    label: '产品',
    prop: 'product_bios_Custom Refresh'
  },
  {
    label: '产品',
    prop: 'product_bios_Hardware Prefetcher'
  },
  {
    label: '产品',
    prop: 'product_bios_Adjacent Cache Prefetch'
  },
  {
    label: 'os发行版',
    prop: 'os_os_release'
  },
  {
    label: 'os核心',
    prop: 'os_os_kernel'
  },
  {
    label: 'os编译器版本',
    prop: 'os_compiler_version'
  },
  {
    label: 'os glibc版本',
    prop: 'os_glibc_version'
  },
  {
    label: 'os jdk版本',
    prop: 'os_jdk_version'
  },
  {
    label: 'os核心参数',
    prop: 'os_kernel_parameters'
  },
  {
    label: 'os numa',
    prop: 'os_numa'
  },
  {
    label: 'os命令行',
    prop: 'os_cmdline'
  },
  {
    label: 'os文件系统',
    prop: 'os_file_system'
  },
  {
    label: '测试用例编号',
    prop: 'case_result_case_result_id'
  },
  {
    label: '测试用例selinux',
    prop: 'case_result_selinux'
  },
  {
    label: '测试用例出版类型',
    prop: 'case_result_result_publish_type'
  },
  {
    label: '测试用例资源',
    prop: 'case_result_source'
  },
  {
    label: '测试用例组编号',
    prop: 'case_result_batch_uid'
  },
  {
    label: '测试用例os页大小',
    prop: 'case_result_os_pagesize'
  },
  {
    label: '测试用例工具版本',
    prop: 'case_result_tool_version'
  },
  {
    label: '测试用例cmc版本',
    prop: 'case_result_cmc_version'
  },
  {
    label: '测试用例配置文件',
    prop: 'case_result_config_files'
  },
  {
    label: '测试用例名',
    prop: 'case_result_testcase_name'
  },
  {
    label: '测试用例工作量数据',
    prop: 'case_result_workload_data'
  },
  {
    label: '测试用例性能数据',
    prop: 'case_result_performance_data'
  },
  {
    label: '测试用例单位',
    prop: 'case_result_unit'
  },
  {
    label: '测试用例指标',
    prop: 'case_result_metrics'
  },
  {
    label: '测试用例工作流',
    prop: 'case_result_flow'
  },
  {
    label: '测试用例爸爸特征',
    prop: 'case_result_version_feature'
  },
  {
    label: '出版类型',
    prop: 'publish_type'
  },
  {
    label: '公共状态',
    prop: 'public_state'
  },
  {
    label: '创建数据',
    prop: 'create_date'
  },
  {
    label: '保密水平',
    prop: 'secret_level'
  },
  {
    label: '系统信息',
    prop: 'system_info'
  },
  {
    label: '微型文件',
    prop: 'micro_file'
  },
  {
    label: '宏文件',
    prop: 'macro_file'
  },
  {
    label: '驱动文件',
    prop: 'power_file'
  },
  {
    label: '容器文件',
    prop: 'container_file'
  }
]