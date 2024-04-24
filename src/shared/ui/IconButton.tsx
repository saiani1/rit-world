import { FunctionComponent, SVGProps } from "react";
import { IconType } from "react-icons/lib"

export const IconButton = ({
  ariaLabel,
  title,
  buttonStyle,
  Icon,
  iconSize,
  iconStyle,
}:{
  ariaLabel: string,
  title?: string,
  buttonStyle?: string,
  Icon: IconType | FunctionComponent<SVGProps<SVGSVGElement> & { title?: string | undefined; }>,
  iconSize?: number,
  iconStyle?: string,
}) => {
  return (
    <button type="button" aria-label={ariaLabel} title={title} className={buttonStyle}>
      <Icon size={iconSize} className={iconStyle} />
    </button>
  )
}