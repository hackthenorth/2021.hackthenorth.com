import React from "react";
import tw from "twin.macro";

/**
 * A component to wrap pages
 */
const PageWrapper = tw.div`relative z-0 w-full flex flex-col align-items[center] overflow-hidden`;

/**
 * A HOC to wrap a page with PageWrapper
 * @param Page the page to be wrapped
 */
export const withPageWrapper =
  (Page: React.FC): React.FC =>
  () =>
    (
      <PageWrapper>
        <Page />
      </PageWrapper>
    );

export default PageWrapper;
