import React, { useState } from 'react';
import { Table, Tag, Space } from 'antd';
import { connect } from 'umi';
import UserModal from './commponents/UserModal';

const Home: React.FC = (props: any) => {
  const [isShowModal, setIsShowModal] = useState<Boolean>(false);
  const [data, setData] = useState();
  const showModal = (data: any) => {
    setIsShowModal(true);
    setData(data);
  };
  const closeModal = () => {
    setIsShowModal(false);
  };
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text: any) => <a>{text}</a>,
    },
    {
      title: 'Age123',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: (tags: any) => (
        <>
          {tags.map((tag: any) => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (text: any, record: any) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a
            onClick={() => {
              showModal(record);
            }}
          >
            Delete
          </a>
        </Space>
      ),
    },
  ];
  return (
    <div className="list-table">
      <Table columns={columns} dataSource={props.users.list} />
      <UserModal
        isShow={isShowModal}
        closeModal={closeModal}
        data={data}
      ></UserModal>
    </div>
  );
};
const mapStateToProps = (state: any) => {
  return {
    users: state.users,
  };
};

export default connect(mapStateToProps)(Home);
