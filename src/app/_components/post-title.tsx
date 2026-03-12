import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export function PostTitle({ children }: Props) {
  return (
    <h1 className="text-2xl md:text-3xl font-bold text-[var(--color-mm-dark)] mb-4">
      {children}
    </h1>
  );
}
