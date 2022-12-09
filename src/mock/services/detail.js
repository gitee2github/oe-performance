import Mock from 'mock2js';
import { createResponseBody } from '../util.js';
import { detailObj, submitId } from './mockData/detail'

const tableData = {
  data: [
    {
      requestCode: 'TEST406483493',
      type: '上传数据',
      date: '2016-05-03',
      submitter: 'Tm',
      describe: '测试描述',
      secretLevel: '公开1级',
      approver: 'lib',
      progress: '待审批'
    },
    {
      requestCode: 'TEST4064893',
      type: '上传数据',
      date: '2016-05-08',
      submitter: 'Tm',
      describe: '测试描述',
      secretLevel: '绝密4级',
      approver: 'bic',
      progress: '待审批'
    },
    {
      requestCode: 'TEST4064892',
      type: '上传数据',
      date: '2016-05-08',
      submitter: 'Tm',
      describe: '测试描述',
      secretLevel: '秘密2级',
      approver: 'bic',
      progress: '已驳回'
    },
    {
      requestCode: 'TEST4064891',
      type: '上传数据',
      date: '2016-05-08',
      submitter: 'Tm',
      describe: '测试描述',
      secretLevel: '机密3级',
      approver: 'bic',
      progress: '已发布'
    }
  ]
}
const getDetail = () => {
  return createResponseBody(
    detailObj,
    '获取详情数据成功',
    200,
    { 'Custom-Header': Mock.mock('@guid') }
  );
};

const getWorkLoadDetail = () => {
  return createResponseBody(
    detailObj,
    '获取workload详情数据成功',
    200,
    { 'Custom-Header': Mock.mock('@guid') }
  );
};

const queryBySystemParam = () => {
  return createResponseBody(
    submitId,
    '获取主机id组成功',
    200,
    { 'Custom-Header': Mock.mock('@guid') }
  );
}

const queryCriteria = () => {
  return createResponseBody(
    detailObj,
    '获取详情数据成功',
    200,
    { 'Custom-Header': Mock.mock('@guid') }
  )
}
const getApplicationList = () => {
  return createResponseBody(
    tableData,
    '获取详情数据成功',
    200,
    {'Custom-Header': Mock.mock('@guid')}
  );
}

Mock.mock(/\/performance_result\/unixbench/, 'get', getDetail);
Mock.mock(/\/performance_result\/unixbench\/workload/, 'get', getWorkLoadDetail);

Mock.mock(/\/performance_result\/unixbench\/queryBySystemParam/, 'get', queryBySystemParam);
Mock.mock(/\/performance_result\/unixbench\/queryCriteria/, 'get', queryCriteria);
Mock.mock(/\/usercenter\/application\/getapplicationlist/, 'get', getApplicationList);
