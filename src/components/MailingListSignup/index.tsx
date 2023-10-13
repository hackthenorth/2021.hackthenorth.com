import React, { useState, useMemo, useCallback, FormEvent } from "react";
import { Icon, Button } from "src/components/base";
import Spinner from "src/components/Spinner";
import { TWText, TWShared } from "src/styles";
import { useDeviceSize } from "src/utils";
import { mediaQueries } from "src/utils/responsive";
import styled from "styled-components";
import tw, { theme } from "twin.macro";

import {
  validateEmailAddress,
  getResultMessage,
  signupRequest,
  SignUpState,
} from "./utils";

interface MailingListSignupProps
  extends React.ComponentPropsWithoutRef<"form"> {
  placeholder: string;
  mobilePlaceholder?: string;
}

interface CheckErrorsProps {
  hasErrors: boolean;
}

const MailingListSignup: React.FC<MailingListSignupProps> = ({
  mobilePlaceholder,
  placeholder,
  children,
  ...rest
}) => {
  const [email, setEmail] = useState("");
  const [signUpState, updateSignUpState] = useState(SignUpState.INITIAL);
  const isLargeMobileOrSmaller = useDeviceSize("largeMobile");

  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (email === "") {
        updateSignUpState(SignUpState.EMPTY);
        return;
      }

      if (validateEmailAddress(email)) {
        updateSignUpState(SignUpState.SUBMITTING);
        signupRequest(email)
          .then(({ alreadySignup }) => {
            if (alreadySignup) {
              updateSignUpState(SignUpState.DUPLICATE);
            } else {
              updateSignUpState(SignUpState.SUBMITTED);
            }
          })
          .catch(() => updateSignUpState(SignUpState.ERROR));
      } else {
        updateSignUpState(SignUpState.INVALID);
      }
    },
    [email]
  );

  const hasErrors =
    signUpState === SignUpState.EMPTY ||
    signUpState === SignUpState.INVALID ||
    signUpState === SignUpState.DUPLICATE ||
    signUpState === SignUpState.ERROR;

  const refinedPlaceholder =
    mobilePlaceholder && isLargeMobileOrSmaller
      ? mobilePlaceholder
      : placeholder;

  const resultMessage = useMemo(
    () => getResultMessage(signUpState),
    [signUpState]
  );

  return (
    <form
      tw="flex w-full"
      onSubmit={onSubmit}
      onBlur={() => updateSignUpState(SignUpState.INITIAL)}
      {...rest}
    >
      <InputWrapper>
        <div tw="flex w-full">
          <StyledInput
            tw="rounded-br-0! rounded-tr-0! w-full"
            value={email}
            hasErrors={hasErrors}
            onChange={(e: any) => setEmail(e.target.value)}
            placeholder={refinedPlaceholder}
            aria-label="Signup for Hack The North's mailing list"
            aria-required
          />

          <StyledButton
            tw="flex justify-center rounded-bl-0! rounded-tl-0! py-12! px-24!"
            variant="primary"
            isSubmitted={signUpState === SignUpState.SUBMITTED}
            disabled={signUpState === SignUpState.SUBMITTING}
            onClick={(e: any) => {
              if (
                signUpState !== SignUpState.SUBMITTED &&
                signUpState !== SignUpState.SUBMITTING
              )
                onSubmit(e);
            }}
            aria-label="Submit email"
          >
            {signUpState === SignUpState.SUBMITTED ? (
              <Icon
                tw="lm:(mb-4)"
                width={isLargeMobileOrSmaller ? 22 : 28}
                height={isLargeMobileOrSmaller ? 22 : 28}
                name="checkmark"
              />
            ) : signUpState === SignUpState.SUBMITTING ? (
              <Spinner color="white" size={isLargeMobileOrSmaller ? 18 : 24} />
            ) : (
              children
            )}
          </StyledButton>
        </div>
        {(hasErrors || signUpState === SignUpState.SUBMITTED) && (
          <ResultText tw="flex mt-8 ml-32 tb:(ml-16)" hasErrors={hasErrors}>
            {resultMessage}
          </ResultText>
        )}
      </InputWrapper>
    </form>
  );
};

const StyledInput = styled.input<CheckErrorsProps>`
  ${tw`py-12 px-16 rounded-16 outline-none`}
  border: 1px solid ${theme`colors.primary.blue2`};

  ${TWText.body}
  ${TWShared.focus}
  ${TWShared.disabled}

  ::placeholder {
    color: ${theme`colors.secondary.grey`};
  }

  border: 1px solid
    ${({ hasErrors }) =>
      hasErrors ? theme`colors.secondary.red` : theme`colors.primary.blue2`};

  ${mediaQueries.tablet} {
    padding: 12px 16px;
  }

  ${mediaQueries.smallMobile} {
    padding: 8px 16px;
  }
`;

const InputWrapper = styled.div`
  ${tw`flex flex-col relative`}
  width: 50%;

  ${mediaQueries.medium} {
    width: 60%;
  }

  ${mediaQueries.tablet} {
    width: 80%;
  }

  ${mediaQueries.largeMobile} {
    width: 100%;
  }
`;

const StyledButton = styled(Button)<{ isSubmitted: boolean }>`
  background: ${({ isSubmitted }) =>
    isSubmitted ? theme`colors.secondary.green` : theme`colors.primary.blue1`};

  /* Align the spinner in the center */
  > div {
    margin: auto;
  }
`;

const ResultText = styled.span<CheckErrorsProps>`
  ${TWText.body}
  color: ${({ hasErrors }) =>
    hasErrors ? theme`colors.secondary.red` : theme`colors.primary.blue2`};
`;

export default MailingListSignup;
