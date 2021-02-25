import { Effect, Reducer, Subscription } from 'umi';
import axios from 'axios'
import { getListData } from './service'
export interface IndexModelState {
  name: string;
}

export interface IndexModelType {
  namespace: 'users';
  state: IndexModelState;
  effects: {
    query: Effect;
    getList: Effect;
  };
  reducers: {
    save: Reducer<IndexModelState>;
    aaa: Reducer<IndexModelState>;
    // 启用 immer 之后
    // save: ImmerReducer<IndexModelState>;
  };
  subscriptions: { aaaa: Subscription };
}
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
];

const UserModel: IndexModelType = {
  namespace: 'users',//当前model唯一标识名
  state: {
    name: ""
  },//数据
  reducers: {
    save(state, action) {
      axios.get('/api/api/blog/list').then(res => {
      })
      return {
        ...state,
        ...action.payload,
        list: data
      }
    },
    aaa(state, action) {
      return {
        ...state,
        ...action.payload,
        list: action.payload
      }
    }
  },//reducers
  effects: {
    *query() { },
    *getList({ payload }, { call, put }) {//首先，接口那数据
      const resData = yield call(getListData)
      const res = yield put({ type: 'aaa', payload: resData })
      console.log('yield getList');

    }
  },//副作用
  subscriptions: {
    aaaa({ history, dispatch }) {
      if (history.location.pathname === '/users') {
      }
      return history.listen(({ pathname }) => {
        if (pathname === '/users') {
          dispatch({ type: 'getList' })
        }
      })

    }
  }//订阅
};

export default UserModel;
