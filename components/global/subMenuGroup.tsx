import { useRouter } from "next/router";
import React, { useState } from "react";
import { Collapse, ListGroup } from "react-bootstrap";
import { MenuListType } from "../../interface/menuInterface";
import Icon from "./Icon";

interface PropsType {
      menuList: MenuListType
}
const SubMenuGroup = ((props: PropsType) => {
      const { menuList } = props
      const [open, setOpen] = useState(false)
      const router = useRouter()
      return (
            <>
                  <ListGroup.Item action onClick={() => setOpen(!open)}>
                        <div className="row">
                              {
                                    menuList.icon && <div className="col-1">
                                          <Icon iconName={menuList.icon} size={22} />
                                    </div>
                              }
                              <div className="col-9">
                                    {menuList.name}
                              </div>
                              <div className="col-2">
                                    {!open && <Icon iconName={"GoArrowRight"} size={24} />}
                                    {open && <Icon iconName={"GoArrowDown"} size={24} />}
                              </div>
                        </div>
                        <Collapse in={open} className='childrenCollapse'>
                              <ListGroup>
                                    {menuList.subMenu?.map((menuList: MenuListType) => {
                                          return !menuList.subMenu ?
                                                <ListGroup.Item action onClick={() => router.push(menuList.link)}>
                                                      {menuList.icon && <Icon iconName={menuList.icon} />}
                                                      {menuList.name}
                                                </ListGroup.Item>
                                                :
                                                <SubMenuGroup menuList={menuList} />
                                    })}
                              </ListGroup>
                        </Collapse>
                  </ListGroup.Item>
            </>
      );
});
export default SubMenuGroup;