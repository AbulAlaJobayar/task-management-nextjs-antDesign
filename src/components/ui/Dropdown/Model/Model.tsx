import React, { useState } from "react";
import { Button, DatePicker, Form, Input, Modal, Select } from "antd";

const ModelPage = ({
  handleOk,
  setIsModalOpen,
  showModal,
  isModalOpen,
}: {
  handleOk: any;
  setIsModalOpen: any;
  showModal: any;
  isModalOpen: boolean;
}) => {
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Add Task
      </Button>
      <Modal
        okButtonProps={{
          style: {
            display: "none",
          },
        }}
        cancelButtonProps={{
          style: {
            display: "none",
          },
        }}
        // title="Add Task"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form onFinish={handleOk} layout="vertical">
          <Form.Item label="Task Name" name="task">
            <Input />
          </Form.Item>
          <Form.Item label="Members Name" name="name">
            <Input />
          </Form.Item>
          <Form.Item label="Description" name="description">
            <Input />
          </Form.Item>
          <Form.Item label="Priority" name="priority">
            <Select>
              <Select.Option value="high">High</Select.Option>
              <Select.Option value="medium"> Medium</Select.Option>
              <Select.Option value="low"> Low</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Date"
            name="date"
            style={{ display: "inline-block", width: "50%" }}
          >
            <DatePicker />
          </Form.Item>
          <Form.Item
            label="Status"
            name="status"
            style={{ display: "inline-block", width: "50%" }}
          >
            <Select>
              <Select.Option value="todo">To Do</Select.Option>
              <Select.Option value="inprogress"> In Progress</Select.Option>
              <Select.Option value="done"> Done</Select.Option>
            </Select>
          </Form.Item>

          <Button type="primary" htmlType="submit" className="w-full">
            Submit
          </Button>
        </Form>
      </Modal>
    </>
  );
};

export default ModelPage;
