import dynamic from "next/dynamic";
import React from "react";
import { content, title } from "src/copy/codeOfConduct";
const InfoPage = dynamic(() => import("src/components/base/InfoPage"), {
  ssr: false,
});

const sections = [
  { id: "introduction", title: "Introduction" },
  {
    id: "core-values",
    title: "Core Values",
  },
  {
    id: "expected-behaviour",
    title: "Expected Behaviour",
  },
  {
    id: "protected-grounds",
    title: "Protected Grounds",
  },
  {
    id: "prohibited-behaviour",
    title: "Prohibited Behaviour",
  },
  {
    id: "roles-and-responsibilities",
    title: "Roles and Responsibilities",
  },
  {
    id: "major-league-hacking-(mlh)",
    title: "Major League Hacking (MLH)",
  },
];

const CodeOfConduct: React.FC = () => (
  <InfoPage sections={sections} content={content} title={title} />
);

export default CodeOfConduct;
