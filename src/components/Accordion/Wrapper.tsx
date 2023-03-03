import type { ComponentPropsWithoutRef } from "react";

type AccordionWrapperProps = ComponentPropsWithoutRef<"ul">;

const Wrapper = ({
  children,
  ...props
}: AccordionWrapperProps) => {
  return <ul {...props}>{children}</ul>;
};

export default Wrapper;
