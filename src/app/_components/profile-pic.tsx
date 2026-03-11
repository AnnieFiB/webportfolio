import { getLatestSettings } from "@/lib/getSettings";
import cn from "classnames";

type Props = Readonly<{
  className?: string;
}>;

const baseClasses =
  "w-16 h-16 md:w-36 md:h-36 rounded-full object-cover";

export function ProfilePic({ className }: Props) {
  const { metaImage, userName } = getLatestSettings();
  const src = (process.env.BASE_PATH || "") + metaImage;

  return (
    <img
      src={src}
      alt={userName}
      className={cn(baseClasses, className)}
    />
  );
}
