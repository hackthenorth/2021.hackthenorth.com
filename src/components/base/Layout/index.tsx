import "twin.macro";
import React, { ComponentPropsWithoutRef } from "react";

import PageWrapper from "./PageWrapper";

type Props = ComponentPropsWithoutRef<"div">;

const Layout: React.FC<Props> = ({ children }) => (
  <div>
    <PageWrapper tw="overflow-hidden">{children}</PageWrapper>
  </div>
);

export default Layout;
