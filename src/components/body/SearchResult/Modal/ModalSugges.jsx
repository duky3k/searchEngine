import React, { useState } from 'react';
import { Button, Modal, List, Typography, Space } from 'antd';
import { DownOutlined, UpOutlined } from '@ant-design/icons';

const ModalSugges = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedList, setSelectedList] = useState(null);
  const [isListOpen, setIsListOpen] = useState({
    'Did You Mean ?': false,
    'Body Proximity Terms': false,
    'Related Medical Terms': false,
  });

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleListClick = (listName) => {
    setSelectedList(listName);
    setIsListOpen((prevState) => ({
      ...prevState,
      [listName]: !prevState[listName],
    }));
  };

  const renderListItems = () => {
    if (selectedList === 'Did You Mean ?') {
      return (
        <>
          <List.Item>1. Item 1</List.Item>
          <List.Item>2. Item 2</List.Item>
          <List.Item>3. Item 3</List.Item>
        </>
      );
    } else if (selectedList === 'Body Proximity Terms') {
      return (
        <>
          <List.Item>1. Item 1</List.Item>
          <List.Item>2. Item 2</List.Item>
          <List.Item>3. Item 3</List.Item>
        </>
      );
    } else if (selectedList === 'Related Medical Terms') {
      return (
        <>
          <List.Item>1. Item 1</List.Item>
          <List.Item>2. Item 2</List.Item>
          <List.Item>3. Item 3</List.Item>
        </>
      );
    }
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        title="Search Suggestions"
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div>
          <Space direction="vertical">
            <Button
              type="text"
              onClick={() => handleListClick('Did You Mean ?')}
              style={{ width: '100%', textAlign: 'left' }}
            >
              {isListOpen['Did You Mean ?'] ? (
                <UpOutlined />
              ) : (
                <DownOutlined />
              )}{' '}
              Did You Mean ?
            </Button>
            {isListOpen['Did You Mean ?'] && (
              <List>{renderListItems()}</List>
            )}

            <Button
              type="text"
              onClick={() => handleListClick('Body Proximity Terms')}
              style={{ width: '100%', textAlign: 'left' }}
            >
              {isListOpen['Body Proximity Terms'] ? (
                <UpOutlined />
              ) : (
                <DownOutlined />
              )}{' '}
              Body Proximity Terms
            </Button>
            {isListOpen['Body Proximity Terms'] && (
              <List>{renderListItems()}</List>
            )}

            <Button
              type="text"
              onClick={() => handleListClick('Related Medical Terms')}
              style={{ width: '100%', textAlign: 'left' }}
            >
              {isListOpen['Related Medical Terms'] ? (
                <UpOutlined />
              ) : (
                <DownOutlined />
              )}{' '}
              Related Medical Terms
            </Button>
            {isListOpen['Related Medical Terms'] && (
              <List>{renderListItems()}</List>
            )}
          </Space>
        </div>
      </Modal>
    </>
  );
};

export default ModalSugges;
