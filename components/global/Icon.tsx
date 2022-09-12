import * as ReactIcons from 'react-icons/go';

type GetIconProps = {
      iconName: keyof typeof ReactIcons;
      size?: string | number
      color?: string
}

const Icon = (props: GetIconProps) => {
      const { iconName, size, color } = props
      const TagName = ReactIcons[iconName];
      return <TagName size={size} color={color} />;
};
export default Icon