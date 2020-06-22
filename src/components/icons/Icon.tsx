import React from 'react';
import SVG from 'react-inlinesvg';

export const ICONS = {
  DELETE_ICON: 'delete-icon.svg'
}

interface Props {
  className?: string;
}

const Icon = ({className, icon}: Props & {icon: string}) => <SVG className={className} src={require(`./svgs/${icon}`)} />;

export const DeleteIcon = ({ className }: Props) => <Icon className={className} icon={ICONS.DELETE_ICON} />

export default Icon;