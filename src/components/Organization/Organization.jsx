import { Button, DatePicker, Form, Input } from "antd";
import Title from "antd/es/typography/Title";
import React from "react";

const Organization = () => {
  const [form] = Form.useForm();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-6xl p-6">
        <Title level={3} className="mb-4 text-center">
          Organization Form
        </Title>

        <Form
          layout="vertical"
          form={form}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 bg-white p-6 rounded shadow-md"
        >
          <Form.Item
            label="Organization Name"
            name="organizationName"
            rules={[
              { required: true, message: "Organization Name is required!" },
            ]}
            className="col-span-1 lg:col-span-1"
          >
            <Input placeholder="Example Corp" />
          </Form.Item>

          <Form.Item
            label="Tax Info (IIN/GSTin/PAN)"
            name="taxInfo"
            rules={[{ required: true, message: "Tax Info is required!" }]}
            className="col-span-1 lg:col-span-1"
          >
            <Input placeholder="ABC123" />
          </Form.Item>

          <Form.Item
            label="Primary Contact Info"
            name="contactInfo"
            rules={[
              { required: true, message: "Primary Contact Info is required!" },
              { type: "email", message: "The input is not valid E-mail!" },
            ]}
            className="col-span-1 lg:col-span-1"
          >
            <Input placeholder="john@example.com" />
          </Form.Item>

          <Form.Item
            label="Billing Currency"
            name="billingCurrency"
            rules={[
              { required: true, message: "Billing Currency is required!" },
            ]}
            className="col-span-1 lg:col-span-1"
          >
            <Input placeholder="USD" />
          </Form.Item>

          <Form.Item
            label="Organization ID"
            name="organizationid"
            rules={[
              { required: true, message: "Organization ID is required!" },
            ]}
            className="col-span-1 lg:col-span-1"
          >
            <Input placeholder="92287216" />
          </Form.Item>

          <Form.Item
            label="Org Address"
            name="orgaddress"
            rules={[
              { required: true, message: "Organization Address is required!" },
            ]}
            className="col-span-1 lg:col-span-1"
          >
            <Input placeholder="132 Main St, City" />
          </Form.Item>

          <Form.Item
            label="Country and Time Zone"
            name="countrytimezone"
            rules={[
              { required: true, message: "Country and Time Zone is required!" },
            ]}
            className="col-span-1 lg:col-span-1"
          >
            <Input placeholder="United States" />
          </Form.Item>

          <Form.Item
            label="Primary Domain"
            name="primarydomain"
            rules={[{ required: true, message: "Primary Domain is required!" }]}
            className="col-span-1 lg:col-span-1"
          >
            <Input placeholder="example.com" />
          </Form.Item>

          <Form.Item
            label="Registration Date"
            name="registrationDate"
            rules={[
              { required: true, message: "Registration Date is required!" },
            ]}
            className="col-span-1 lg:col-span-1"
          >
            <DatePicker className="w-full" placeholder="Select Date" />
          </Form.Item>

          <Form.Item className="col-span-1 lg:col-span-2 flex justify-center">
            <Button
              type="primary"
              htmlType="submit"
              className="bg-blue-500 text-white w-full lg:w-auto"
            >
              Save Changes
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Organization;
