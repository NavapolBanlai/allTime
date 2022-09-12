import React from "react";
import { ListGroup } from "react-bootstrap";
import { MenuListType } from "../../interface/menuInterface";
import Icon from "./Icon";
import SubMenuGroup from "./subMenuGroup";
interface PropsType {
      menuList: [MenuListType]
}
const MenuGroup = ((props: PropsType) => {
      const { menuList } = props
      return (
            <>
                  <ListGroup>
                        {menuList.map((menuList: MenuListType) => {
                              return !menuList.subMenu ?
                                    <ListGroup.Item action href={menuList.link} >
                                          <div className="row">
                                                {
                                                      menuList.icon && <div className="col-1">
                                                            <Icon iconName={menuList.icon} size={22} />
                                                      </div>
                                                }
                                                <div className="col">
                                                      {menuList.name}
                                                </div>
                                          </div>
                                    </ListGroup.Item>
                                    :
                                    <>
                                          <SubMenuGroup menuList={menuList} />
                                    </>


                        })}
                  </ListGroup>

            </>
      );
});
export default MenuGroup;