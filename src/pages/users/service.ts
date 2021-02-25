import { request } from 'umi';
import axios from 'axios';

export const getListData = async (a: any, s: any) => {
  console.log(a, 'aaa你是哪里传进来的参数呢？', s);

  const res = await request('/api/api/blog/list');
  console.log(res.data, 'qiqngqiu');

  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
    {
      key: '4',
      name: res.data[0].con,
      age: 32,
      address: res.data[0].title,
      tags: ['cool', 'teacher'],
    },
  ];
  return data;
};
