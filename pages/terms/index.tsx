import dynamic from "next/dynamic";
import React from "react";
import { content, title } from "src/copy/terms";
const InfoPage = dynamic(() => import("src/components/base/InfoPage"), {
  ssr: false,
});

const sections = [
  { id: "ownership", title: "Ownership" },
  { id: "media-release", title: "Media Release" },
  { id: "confidential-information", title: "Confidential Information" },
  { id: "information-sharing", title: "Information Sharing" },
  { id: "submissions", title: "Submissions" },
  { id: "general", title: "General" },
];

const Terms: React.FC = () => (
  <InfoPage sections={sections} content={content} title={title} />
);

export default Terms;
