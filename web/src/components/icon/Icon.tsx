import { ICONS } from "./registry";
import { TIconName } from "./types";

type TIconProps = {
  name: TIconName;
  className?: string;
};

const Icon = ({ name, className }: TIconProps) => {
  const Svg = ICONS[name].svg;
  return <Svg className={className} name={name} />;
};

export default Icon;
