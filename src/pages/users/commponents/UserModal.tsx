import React, { useState } from 'react';
import { Modal } from 'antd';
const UserModal = (props: any) => {
  const [isModalVisible, setIsModalVisible] = useState(props.isShow);
  console.log(isModalVisible, 'isModalVisible++++');

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    props.closeModal();
  };

  const handleCancel = () => {
    props.closeModal();
  };

  return (
    <>
      <Modal
        title="Basic Modal"
        visible={props.isShow}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>{props.data.age}</p>
        <p>{props.data.name}</p>
      </Modal>
    </>
  );
};

export default UserModal;
