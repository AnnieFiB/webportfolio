import { getLatestSettings } from "@/lib/getSettings";
import cn from "classnames";

type Props = Readonly<{
  className?: string;
}>;

const baseClasses =
  "w-14 h-20 md:w-28 md:h-40 rounded-[50%] object-cover";

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
