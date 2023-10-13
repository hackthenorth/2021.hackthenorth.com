import React from "react";
import { MailingListSignup } from "src/components";
import { Link, Icon } from "src/components/base";
import { SOCIALS, SocialPlatforms } from "src/constants/social";
import { TWText, TWShared } from "src/styles";
import { useDeviceSize } from "src/utils";
import tw from "twin.macro";

const DidWeMissAnything: React.FC = () => {
  const isLargeMobileOrSmaller = useDeviceSize("largeMobile");

  return (
    <div>
      <h1 css={[TWText.h1]} tw="mb-32">
        Did we miss anything?
      </h1>
      <div tw="mb-24" css={[TWText.body]}>
        Reach out to us at{" "}
        <Link css={[TWText.bodyBold]} href="mailto:hello@hackthenorth.com">
          hello@hackthenorth.com
        </Link>{" "}
        <span role="img" aria-label="heart emoji">
          😊
        </span>
      </div>
      <div tw="flex mb-32">
        {Object.values(SocialPlatforms).map((platform, id) => (
          <Link
            key={id}
            css={[TWShared.hover]}
            href={SOCIALS[platform].link}
            underlineOnHover={false}
            newTab
            aria-label={`${platform} Icon`}
            tw="mr-24"
          >
            <Icon name={SOCIALS[platform].icon} width={24} height={24} />
          </Link>
        ))}
      </div>
      <MailingListSignup placeholder="Enter your email address to stay connected">
        {isLargeMobileOrSmaller !== undefined && (
          <Icon
            name="send"
            color="white"
            width={isLargeMobileOrSmaller ? 18 : 24}
            height={isLargeMobileOrSmaller ? 18 : 24}
          />
        )}
      </MailingListSignup>
    </div>
  );
};

export default DidWeMissAnything;
