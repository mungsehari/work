import {
  EditOutlined,
  PlusOutlined,
  RightCircleOutlined,
} from "@ant-design/icons";
import { Button, Card, Drawer, Form, Input, Select, Space } from "antd";
import React, { useState } from "react";

const MyOk = () => {
  const [open, setOpen] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
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
          <p>Hi, based on the data, hare some suggested transformation OKRs.</p>
          <Button
            icon={<PlusOutlined />}
            type="primary"
            className=" w-fit"
            onClick={showDrawer}
          >
            Create OKR
          </Button>
          <Drawer
            placement={placement}
            width={700}
            onClose={onClose}
            open={open}
            extra={
              <Space>
                <Button type="primary" onClick={onClose}>
                  Save
                </Button>
              </Space>
            }
          >
            <Form layout="vertical">{/* edit form  */}</Form>
          </Drawer>
        </div>

        <div className="grid grid-cols-3 gap-5">
          {[1, 1, 1, 1, 1, 1].map((item) => (
            <Card className="font-bold" bordered={false}>
              <p>Icrease efficiency by something some suggested objective</p>
              <div className="flex items-center justify-end">
                <EditOutlined className="cursor-pointer" onClick={showDrawer} />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyOk;
