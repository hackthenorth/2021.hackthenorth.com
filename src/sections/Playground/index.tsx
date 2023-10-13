import React from "react";

import "twin.macro";
import Colors from "./Colors";
import Components from "./Components";
import IconLibrary from "./IconLibrary";
import Typography from "./Typography";

const Playground: React.FC = () => (
  <div>
    <div tw="flex justify-between">
      <Typography tw="mb-48" />
      <IconLibrary tw="mb-48" />
    </div>
    <Colors tw="mb-48" />
    <Components tw="mb-48" />
  </div>
);

export default Playground;
