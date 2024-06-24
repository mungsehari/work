import { EditOutlined } from "@ant-design/icons";
import { Button, Checkbox, Radio, Select, Table } from "antd";
import React, { useState } from "react";

const dataSource = [
  {
    key: "1",
    name: "Impediments",
  },
  {
    key: "2",
    name: "Events",
  },

  {
    key: "3",
    name: "Reminders",
  },
  {
    key: "4",
    name: "Comments",
  },

  {
    key: "5",
    name: "Groups",
  },
  {
    key: "6",
    name: "Status Updates",
  },
];

const columns = [
  {
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Email",
    key: "email",
    render: (text, record) => (
      <Radio.Group
        onChange={(e) => {
          console.log(`selected ${record.key}`);
        }}
      >
        <Checkbox value={record.key} className="ml-2" />
      </Radio.Group>
    ),
  },
  {
    title: "Mobile",
    key: "mobile",
    render: (text, record) => (
      <Radio.Group
        onChange={(e) => {
          console.log(`selected ${record.key}`);
        }}
      >
        <Checkbox value={record.key} className="ml-2" />
      </Radio.Group>
    ),
  },
  {
    title: "WhatsApp",
    key: "whatsApp",
    render: (text, record) => (
      <Radio.Group
        onChange={(e) => {
          console.log(`selected ${record.key}`);
        }}
      >
        <Checkbox value={record.key} className="ml-2" />
      </Radio.Group>
    ),
  },
  {
    title: "IVR",
    key: "ivr",
    render: (text, record) => (
      <Radio.Group
        onChange={(e) => {
          console.log(`selected ${record.key}`);
        }}
      >
        <Checkbox value={record.key} className="ml-2" />
      </Radio.Group>
    ),
  },
  {
    title: "Effillx",
    key: "effillx",
    render: (text, record) => (
      <Radio.Group
        onChange={(e) => {
          console.log(`selected ${record.key}`);
        }}
      >
        <Checkbox value={record.key} className="ml-2" />
      </Radio.Group>
    ),
  },

  {
    title: "Frequency",
    key: "select",
    render: (text, record) => (
      <Radio.Group
        onChange={(e) => {
          console.log(`selected ${record.key}`);
        }}
      >
        <Button size="small" value={record.key} className="ml-2">
          <a href="">
            <EditOutlined /> Edit{" "}
          </a>
        </Button>
      </Radio.Group>
    ),
  },
];

const Notifications = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-4xl p-6 bg-white rounded shadow-md">
        <div className="pt-3">
          <Table bordered dataSource={dataSource} columns={columns} />
        </div>
      </div>
    </div>
  );
};

export default Notifications;
