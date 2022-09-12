
import LanguageMD from "../../data/language.json"
import { useState } from 'react';
import Button from "../../components/global/button";
import Icon from "../../components/global/Icon";
import FormLabel from "../../components/global/FormLabel";
import Input from "../../components/global/input";
import { Table } from "antd";
import type { ColumnsType, TableProps } from "antd/es/table";
import React from "react";
import 'antd/dist/antd.css';

const Language = () => {
      const header = ["Description", "Language code", "Status"]
      const [searchFrom, setSearchFrom] = useState(false)

      interface DataType {
            // key: React.Key;
            description: string;
            languageCode: string;
            status: string;
      }

      const columns: ColumnsType<DataType> = [
            {
                  title: "Description",
                  dataIndex: "description",
                  sorter: (a, b) => a.description.localeCompare(b.description),
                  defaultSortOrder: "descend",

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
                  <div className="card language-card">
                        <div>
                              {
                                    searchFrom &&
                                    <>
                                          <FormLabel required={true}>{1}</FormLabel>
                                          <Input className='input-from-search-table'></Input>
                                          <FormLabel required={true}>{1}</FormLabel>
                                          <Input className='input-from-search-table'></Input>
                                    </>
                              }
                        </div>
                        <div>
                              <Button className="btn-primary" onClick={() => setSearchFrom(!searchFrom)}>
                                    <Icon iconName='GoSearch' />
                              </Button>
                        </div>
                        <div className="mt-3">
                              <Table columns={columns} dataSource={data} onChange={onChange} />

                        </div>
                  </div>

            </>
      )
}

Language.getHeader = function getHeader() {
      return "Language";
}
export default Language;      