
import LanguageMD from "../../data/language.json"
import { useState } from 'react';
import { Table } from "antd";
import type { ColumnsType, TableProps } from "antd/es/table";
import React from 'react';
import 'antd/dist/antd.css';

interface DataType {
      // key: React.Key;
      description: string;
      languageCode: string;
      status: string;
}
const Profile = () => {
      const columns: ColumnsType<DataType> = [
            {
                  title: "Description",
                  dataIndex: "description",

                  sorter: (a, b) => a.description.localeCompare(b.description),
                  sortDirections: ["descend"],
            },
            {
                  title: "Language Code",
                  dataIndex: "languageCode",
                  defaultSortOrder: "descend",
                  sorter: (a, b) => a.languageCode.localeCompare(b.languageCode),
            },
            {
                  title: "Status",
                  dataIndex: "status",
                  sorter: (a, b) => a.status.localeCompare(b.status),
            },
      ];

      const data = LanguageMD;

      const onChange: TableProps<DataType>["onChange"] = (pagination, filters, sorter, extra) => {
            console.log("params", pagination, filters, sorter, extra);
      };


      return (
            <>
                  <Table columns={columns} dataSource={data} onChange={onChange} />
            </>
      )
}

Profile.getHeader = function getHeader() {
      return "Profile";
}
export default Profile;      