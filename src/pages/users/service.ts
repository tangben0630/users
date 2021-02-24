import { request } from 'umi'
import axios from 'axios'

export const getListData = async () => {
  const res = await axios.get('/api/api/blog/list')
  console.log(res, 'qiqngqiu');

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
      name: res.data.data[0].con,
      age: 32,
      address: res.data.data[0].title,
      tags: ['cool', 'teacher'],
    },
  ];
  return data
}