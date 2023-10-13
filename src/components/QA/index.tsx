import React, { useState, useEffect } from "react";
import { IS_PRODUCTION } from "src/utils/env";

const QA: React.FC = () => {
  const [component, setComponent] = useState<React.ReactElement | null>(null);

  useEffect(() => {
    if (!IS_PRODUCTION) {
      import("@hackthenorth/north").then(({ OrganizerTools }) => {
        setComponent(
          <span>
            <OrganizerTools
              organizerOnly={false}
              bugnub={{
                repoName: "hackthenorth.com",
                token: "9RQYZyziWGRIfGFZEkLNhlpskAt9T24D",
              }}
            />
          </span>
        );
      });
    }
  }, []);

  return component;
};

export default QA;
