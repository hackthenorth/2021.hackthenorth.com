import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  ComponentPropsWithoutRef,
} from "react";
import { useInView } from "react-intersection-observer";
import { PlayIcon } from "src/assets/icons";
import { CloseIcon, ProjectGearImg } from "src/assets/img";
import { Button, Icon, Link } from "src/components/base";
import { UnstyledModal } from "src/components/base/Modal";
import { useWindowSize } from "src/utils";
import { deviceBreakpoints, mediaQueries } from "src/utils/responsive";
import { css } from "styled-components";
import tw, { styled } from "twin.macro";

const RECAP_VIDEO_ID = "ETBfBrcr4d4";

const AUTOPLAY_URL = `https://www.youtube.com/embed/${RECAP_VIDEO_ID}?start=456&autoplay=1&color=white&loop=1&enablejsapi=1&controls=0&modestbranding=1&showinfo=0&mute=1&playlist=${RECAP_VIDEO_ID}`;
const MODAL_URL = `https://www.youtube.com/embed/${RECAP_VIDEO_ID}?start=456&loop=1&color=white&modestbranding=1&showinfo=0`;

const autoplaySize = css`
  border-radius: 14px;
  max-width: 100%;
  width: 502px;
  max-height: 100%;
  height: 282px;

  ${mediaQueries.largeMobile} {
    width: 336px;
    height: 188px;
  }
`;

const ModalVideoContainer = tw.div`
  text-right w-full h-full my-0 mx-auto
`;

const RecapVideoContainer = tw.div`
relative text-center
`;

const ProjectGearWrapper = styled.div`
  z-index: -1;
  position: absolute;
  bottom: 75%;
  right: 85%;
  width: 250px;

  ${mediaQueries.tablet} {
    top: 75%;
    left: 45%;
  }

  ${mediaQueries.largeMobile} {
    left: 30%;
  }
`;

const VideoModal = styled(UnstyledModal)`
  background-color: transparent;
  outline: none;
  z-index: 99;
  text-align: center;
`;

const VideoOverlay = styled.div`
  ${autoplaySize}
  position: absolute;
  top: 0;
  left: 0;
  background: #0a446d;
  mix-blend-mode: screen;
  opacity: 0.4;
  border-radius: 14px;
`;

const PlayButton = styled(Icon).attrs({ name: "play" })`
  > * {
    fill: white;
    width: 100px;
    height: 100px;
  }
  margin: 0 auto;
  fill: white;
  height: 84px;
  width: auto;
  position: relative;
  top: 50%;
  margin-top: -42px;
  opacity: 1;
`;

export const animatedUnderlineStyles = css`
  position: relative;

  &:after {
    content: "";
    position: absolute;
    z-index: -1;
    transition: width 250ms;
  }
`;

const PlayButtonContainer = styled.div`
  ${autoplaySize}
  position: absolute;
  top: 0;
  left: 0;
  opacity: 1;
  text-align: center;
  cursor: pointer;
  z-index: 2;

  > :first-child {
    visibility: hidden;
    opacity: 0;
    transition: opacity 250ms;
  }

  &:hover {
    > :first-child {
      visibility: visible;
      opacity: 1;
    }
  }
`;

const AutoplayVideoContainer = styled.div`
  ${autoplaySize}
  overflow: hidden;
`;

const RecapVideo: React.FC = () => {
  const autoplayIframe = useRef<HTMLIFrameElement | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { windowWidth = 0, windowHeight = 0 } = useWindowSize();

  const [ref, isInView] = useInView();
  const autoplayVideoWidth =
    windowWidth > deviceBreakpoints.largeMobile ? 505 : 340;
  const autoplayVideoHeight = autoplayVideoWidth * (9 / 16);

  const updateAutoplayState = useCallback(() => {
    const { current } = autoplayIframe;

    if (current) {
      if (isInView && !isModalOpen) {
        // also runs if playing == undefined
        if (current.dataset.playing !== "true") {
          current.dataset.playing = "true";
          // https://stackoverflow.com/questions/15164942/stop-embedded-youtube-iframe
          current.contentWindow?.postMessage(
            '{"event":"command","func":"playVideo","args":""}',
            "*"
          );
        }
      } else {
        if (current.dataset.playing !== "false") {
          current.dataset.playing = "false";
          current.contentWindow?.postMessage(
            '{"event":"command","func":"pauseVideo","args":""}',
            "*"
          );
        }
      }
    }
  }, [isInView, isModalOpen, autoplayIframe]);
  useEffect(updateAutoplayState, [updateAutoplayState, isModalOpen, isInView]);
  const setAutoplay = useCallback(
    (ref) => {
      autoplayIframe.current = ref;
      // pause the video after 3 seconds or so
      setTimeout(updateAutoplayState, 3000);
    },
    [updateAutoplayState]
  );

  // get video modal width based on window width, but if it's too high, resize
  let modalVideoWidth = windowWidth * 0.8;
  let modalVideoHeight = modalVideoWidth * (9 / 16);
  if (modalVideoHeight > windowHeight * 0.8) {
    modalVideoHeight = windowHeight * 0.8;
    modalVideoWidth = modalVideoHeight * (16 / 9);
  }

  // disable scrolling when modal open
  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "visible";

    return () => {
      document.body.style.overflow = "visible";
    };
  }, [isModalOpen]);

  return (
    <RecapVideoContainer>
      <AutoplayVideoContainer ref={ref}>
        <iframe
          title="htn recap video autoplay"
          ref={setAutoplay}
          id="ytplayer"
          width={autoplayVideoWidth}
          height={autoplayVideoHeight}
          src={AUTOPLAY_URL}
          frameBorder="0"
          allow="autoplay"
          sandbox="allow-scripts allow-same-origin allow-presentation"
        ></iframe>
        <ProjectGearWrapper>
          <ProjectGearImg />
        </ProjectGearWrapper>
      </AutoplayVideoContainer>
      <VideoOverlay />
      {!isModalOpen && (
        <PlayButtonContainer onClick={() => setIsModalOpen(true)}>
          <PlayButton />
        </PlayButtonContainer>
      )}
      <VideoModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
        }}
        overlayStyle={{
          zIndex: 100,
        }}
      >
        <ModalVideoContainer>
          <div tw="flex flex-row justify-end">
            <Button
              variant="none"
              tw="p-0 mb-24"
              onClick={() => setIsModalOpen(false)}
            >
              <CloseIcon />
            </Button>
          </div>
          <iframe
            title="htn recap video autoplay"
            id="ytplayer"
            width={modalVideoWidth}
            height={modalVideoHeight}
            src={MODAL_URL}
            frameBorder="0"
            allow="fullscreen"
          ></iframe>
        </ModalVideoContainer>
      </VideoModal>
    </RecapVideoContainer>
  );
};

export default RecapVideo;
