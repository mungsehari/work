import { Select } from "antd";
import React from "react";

const RoleUser = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <p className="mb-4 text-sm">Notification settings for:</p>
        <div>
          <p className="mb-2 font-medium">Role</p>
          <Select
            showSearch
            style={{
              width: 200,
            }}
            placeholder="Role "
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
        <div>
          <p className="mb-2 font-medium">User</p>
          <Select
            showSearch
            style={{
              width: 200,
            }}
            placeholder="User Name"
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
                label: "hari@gmail.com",
              },
              {
                value: "2",
                label: "Rushi@gmail.com",
              },
              {
                value: "3",
                label: "Naruto@gmail.com",
              },
              {
                value: "4",
                label: "Narayan@gmail.com",
              },
              {
                value: "5",
                label: "Mungas@gmail.com",
              },
              {
                value: "6",
                label: "Karshina@gamil.com",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default RoleUser;
