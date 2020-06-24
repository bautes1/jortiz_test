import React from 'react';
import SVG from 'react-inlinesvg';

export const ICONS = {
  DELETE_ICON: 'delete-icon.svg'
}

interface Props {
  className?: string;
  onClick?: () => void;
}

const Icon = ({icon, ...props}: Props & {icon: string}) => <SVG src={require(`./svgs/${icon}`)} {...props} />;

export const DeleteIcon = (props: Props) => <Icon icon={ICONS.DELETE_ICON} {...props} />

export default Icon;