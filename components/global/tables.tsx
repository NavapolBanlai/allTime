import React from "react";
import Table from 'react-bootstrap/Table';
interface PropsTyep {
      header: string[]
      data: any[]
}

export default function Tables(props: PropsTyep) {
      const { header, data } = props;
      return (
            <>
                  <Table>
                        <thead>
                              {header.map((header: string) => {
                                    return <th>{header}</th>
                              })}

                        </thead>
                        <tbody>
                              {
                                    data.map((jsonData: any) => {
                                          return (
                                                <>
                                                      <tr>
                                                            {
                                                                  Object.values(jsonData).map((subData: any) => {
                                                                        return <td>{subData}</td>
                                                                  })
                                                            }
                                                      </tr>
                                                </>
                                          )
                                    })
                              }
                        </tbody>
                  </Table>
                  {/* <table className="table">
                        <thead>
                              {
                                    header.map((header: string) => {
                                          return 
                                    })}
                        </thead>
                        <tbody className="table-group-divider">
                              {
                                    data.map((jsonData: any) => {
                                          return (
                                                <>
                                                      <tr>
                                                            {
                                                                  Object.values(jsonData).map((subData: any) => {
                                                                        return <td>{subData}</td>
                                                                  })
                                                            }
                                                      </tr>
                                                </>
                                          )
                                    })
                              }

                        </tbody>
                  </table> */}
            </>
      )
}