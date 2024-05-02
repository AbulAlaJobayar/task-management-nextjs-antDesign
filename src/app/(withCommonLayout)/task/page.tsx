"use client";
import DropdownButton from "@/components/ui/Dropdown/Dropdown";
import ModelPage from "@/components/ui/Dropdown/Model/Model";
import {
  useAddTaskMutation,
  useGetTaskQuery,
} from "@/redux/fetcurs/tasks/tasks";
import { Form, Table } from "antd";
import moment from "moment";

import { useState } from "react";
import { toast } from "sonner";

const TaskPage = () => {
  const [form] = Form.useForm();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [addTask, { error }] = useAddTaskMutation();
  const { data } = useGetTaskQuery("");
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = async (values: any) => {
    console.log(values);
    const toastId = toast.loading("Task Adding", {
      position: "top-center",
      duration: 2000,
    });

    try {
      // Call the mutation function
      const result = (await addTask(values)) as any;

      if (result?.error || error) {
        toast.error("Something went wrong!", {
          id: toastId,
          duration: 2000,
          style: { color: "red" },
        });
      } else {
        toast.success("Task Added", {
          id: toastId,
          duration: 2000,
          position: "top-center",
          style: { color: "green" },
        });
      }
    } catch (error) {
      console.log(error);
      toast.error("An error occurred!", {
        id: toastId,
        duration: 2000,
        style: { color: "red" },
      });
    }

    setIsModalOpen(false);
    form.resetFields();
  };

  const columns = [
    {
      title: "Task Name",
      dataIndex: "task",
    },
    {
      title: "Members Name",
      dataIndex: "name",
    },
    {
      title: "Description",
      dataIndex: "description",
    },
    {
      title: "Priority",
      dataIndex: "priority",
    },
    {
      render: (date: any) => moment(date).format("YYYY-MM-DD"),
    },
  ];
  const onChange: TableProps<DataType>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    console.log("params", pagination, filters, sorter, extra);
  };
  return (
    <div>
      <h1 className=" mx-auto text-center font-semibold text-2xl my-4 ">
        Task
      </h1>
      <div className="flex justify-between">
        <ModelPage
          handleOk={handleOk}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          showModal={showModal}
        />
        <DropdownButton />
      </div>
      <div>
        <Table columns={columns} dataSource={data} onChange={onChange} />
      </div>
    </div>
  );
};

export default TaskPage;
