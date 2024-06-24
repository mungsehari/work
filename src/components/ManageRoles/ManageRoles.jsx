import {
  CopyOutlined,
  DeleteOutlined,
  EditOutlined,
  PlusOutlined,
} from "@ant-design/icons";

import {
  Button,
  DatePicker,
  Drawer,
  Form,
  Input,
  Select,
  Space,
  Table,
} from "antd";

import { useState } from "react";
import Notifications from "../Notifications/Notifications";

const provinceData = ["Zhejiang", "Jiangsu"];
const dataSource = [
  {
    key: "1",
    name: "CXO",
  },
  {
    key: "2",
    name: "Agile Coach",
  },

  {
    key: "3",
    name: "Business Stakeholders",
  },
  {
    key: "4",
    name: "Scum Master",
  },

  {
    key: "5",
    name: "Team Members",
  },
  {
    key: "6",
    name: "Same Role",
  },
];

const columns = [
  {
    title: "Role",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Created on",
    key: "created_on",
    render: (text, record) => (
      <DatePicker
        onChange={(e) => {
          console.log(`selected ${record.key}`);
        }}
      ></DatePicker>
    ),
  },
  {
    title: "Access Level",
    key: "access_level",
    render: (text, record) => (
      <Select
        defaultValue={"Full"}
        onChange={(e) => {
          console.log(`selected ${record.key}`);
        }}
        style={{
          width: 120,
        }}
        options={provinceData.map((province) => ({
          label: province,
          value: province,
        }))}
      />
    ),
  },

  {
    title: "Actions",
    key: "actions",
    render: (text, record) => (
      <div
        onChange={(e) => {
          console.log(`selected ${record.key}`);
        }}
      >
        <Button
          size="small"
          type="link"
          value={record.key}
          className="ml-2"
          icon={<EditOutlined />}
        >
          Edit
        </Button>
        <Button
          size="small"
          type="link"
          value={record.key}
          className="ml-2"
          icon={<CopyOutlined />}
        >
          Duplicate{" "}
        </Button>
        <Button
          size="small"
          type="link"
          value={record.key}
          className="ml-2"
          icon={<DeleteOutlined />}
        >
          Delete{" "}
        </Button>
      </div>
    ),
  },
];

const ManageRoles = () => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState("right");
  const showDrawer = () => {
    setOpen(true);
  };
  const onChange = (e) => {
    setPlacement(e.target.value);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <div className="min-h-screen flex items-center justify-center  bg-gray-100">
      <div className="w-full max-w-4xl p-6 bg-white rounded shadow-md justify-between">
        <div className="flex items-center justify-between">
          <div>
            <Select
              showSearch
              style={{
                width: 500,
              }}
              placeholder="Serach for Role "
              optionFilterProp="children"
              filterOption={(input, option) =>
                (option?.label ?? "").includes(input)
              }
              filterSort={(optionA, optionB) =>
                (optionA?.label ?? "")
                  .toLowerCase()
                  .localeCompare((optionB?.label ?? "").toLowerCase())
              }
              options={[
                {
                  value: "1",
                  label: "Not Identified",
                },
                {
                  value: "2",
                  label: "Closed",
                },
                {
                  value: "3",
                  label: "Communicated",
                },
                {
                  value: "4",
                  label: "Identified",
                },
                {
                  value: "5",
                  label: "Resolved",
                },
                {
                  value: "6",
                  label: "Cancelled",
                },
              ]}
            />
          </div>

          <Button
            icon={<PlusOutlined />}
            type="primary"
            className=" w-fit"
            onClick={showDrawer}
          >
            Create Role
          </Button>
          <Drawer
            title="Create Role"
            placement={placement}
            width={700}
            onClose={onClose}
            open={open}
            extra={
              <Space>
                <Button onClick={onClose}>Delete</Button>
                <Button type="primary" onClick={onClose}>
                  Save
                </Button>
              </Space>
            }
          >
            <Form layout="vertical">
              <Form.Item
                label="Full name"
                name="Full Name"
                rules={[{ required: true, message: "Tax Info is required!" }]}
                className="col-span-1 lg:col-span-1"
              >
                <Input placeholder="full name" showCount maxLength={120} />
              </Form.Item>
              <Form.Item
                label="Description"
                name="description"
                rules={[
                  { required: true, message: "Description Info is required!" },
                ]}
              >
                <Input.TextArea
                  placeholder="What's this role about?"
                  style={{
                    height: 120,
                    resize: "none",
                  }}
                />
              </Form.Item>
              <Select
                defaultValue="Full"
                style={{
                  width: 120,
                }}
                options={[
                  {
                    value: "Full",
                    label: "Full",
                  },
                ]}
              />
              <Notifications />
            </Form>
          </Drawer>
        </div>

        <div className="pt-3">
          <Table bordered dataSource={dataSource} columns={columns} />
        </div>
      </div>
    </div>
  );
};

export default ManageRoles;
