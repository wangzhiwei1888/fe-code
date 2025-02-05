import { ICrud, ICurdFromItemTypeEnum, ICrudToolbarTypeEnum } from '../CrudTypes';
import { IFormComTypeEnum } from '../Form/constant';

import axios from 'axios';

const apiConfig = {
  add: '/api/json/add',
  edit: '/api/json/edit',
  delete: '/api/json/delete',
  list: '/api/json/list',
};

const TableProps: ICrud = {
  title: '{crud.title}',
  columns: [
    {
      title: '姓名',
      dataIndex: 'name',
      type: IFormComTypeEnum.Input,
      // rules: [{ message: '姓名不能为空', required: true }],
      // isFilter: true,
    },
    {
      title: '年龄',
      dataIndex: 'age',
      type: IFormComTypeEnum.InputNumber,
      // sorter: {
      //   compare: (a: any, b: any) => a.age - b.age,
      //   multiple: 3,
      // },
    },
    {
      title: '职位',
      dataIndex: 'title',
      type: IFormComTypeEnum.Select,
      // isFilter: true,
      // rules: [{ message: '职位不能为空', required: true }],
      // options: [
      //   { label: 'CTO', value: 'cto' },
      //   { label: 'COO', value: 'coo' },
      //   { label: 'CFO', value: 'cfo' },
      // ],
    },
    {
      title: '部门',
      dataIndex: 'department',
      type: IFormComTypeEnum.TreeSelect,
      // fieldProps: {
      //   treeData: [
      //     {
      //       title: '营销',
      //       value: 'light',
      //       children: [{ title: '运营', value: 'bamboo' }],
      //     },
      //     {
      //       title: '企划',
      //       value: 'light2',
      //       children: [{ title: '业务', value: 'bamboo2' }],
      //     },
      //   ],
      // },
    },
    {
      title: '积分',
      dataIndex: 'score',
      type: IFormComTypeEnum.Slider,
    },
    {
      title: '评级',
      dataIndex: 'level',
      type: IFormComTypeEnum.Rate,
    },
    {
      title: '映像',
      dataIndex: 'mapping',
      type: IFormComTypeEnum.RadioGroup,
      // options: [
      //   { label: '优秀', value: '优秀' },
      //   { label: '良好', value: '良好' },
      //   { label: '差', value: '差' },
      // ],
    },
    {
      isHide: true,
      title: '标签',
      dataIndex: 'tags',
      type: IFormComTypeEnum.CheckboxGroup,
      // options: [
      //   { label: '外向', value: '外向' },
      //   { label: '善于沟通', value: '善于沟通' },
      //   { label: '脾气差', value: '脾气差' },
      // ],
    },
    {
      title: '是否上榜',
      dataIndex: 'flag',
      type: IFormComTypeEnum.Switch,
      render: value => (value ? '是' : '否'),
    },
  ],
  // @ts-ignore
  request: async params => {
    return axios.get(apiConfig.list, { params });
  },
  // @ts-ignore
  batchToolbar: '{crud.batchToolbar}',
  searchConfigs: [
    {
      type: ICurdFromItemTypeEnum.Input,
      label: '审批人',
      value: '',
      prop: 'user',
      placeholder: '审批人',
    },
    {
      type: ICurdFromItemTypeEnum.Select,
      label: '活动区域',
      value: '',
      prop: 'region',
      placeholder: '活动区域',
      data: [
        {
          label: '上海',
          value: 'shanghai',
        },
        {
          label: '北京',
          value: 'beijing',
        },
      ],
    },
  ],
};

export default TableProps;
