import * as ReactIcons from 'react-icons/go';

export interface MenuListType {
    name: string;
    link: string;
    icon?: keyof typeof ReactIcons;
    subMenu?: [subMenuType];
}
export interface subMenuType {
    name: string;
    link: string;
    icon?: keyof typeof ReactIcons;
    subMenu?: [MenuListType];
}
// export declare type IconType = (props: IconBaseProps) => JSX.Element;
