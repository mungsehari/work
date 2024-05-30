import {
  CopyOutlined,
  DeleteOutlined,
  EditOutlined,
  PlusOutlined,
} from "@ant-design/icons";

import { Button, DatePicker, Radio, Select, Table } from "antd";

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
  return (
    <div className="min-h-screen flex items-center justify-center  bg-gray-100">
      <div className="w-full max-w-4xl p-6 bg-white rounded shadow-md justify-between">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4  ">
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
          <Button icon={<PlusOutlined />} type="primary" className=" w-fit">
            Create Role
          </Button>
        </div>
        <div className="pt-3">
          <Table bordered dataSource={dataSource} columns={columns} />
        </div>
      </div>
    </div>
  );
};

export default ManageRoles;
