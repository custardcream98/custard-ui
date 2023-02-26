import {
  ComponentPropsWithoutRef,
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import styled from "@emotion/styled";

import { useForwardRef } from "../../hooks";
import type { ComponentPropsWithoutRefAndChildren } from "../../@types";
import { css } from "@emotion/react";
import { theme } from "../../styles";

const MIN_HEIGHT = 200;

type TextareaProps =
  ComponentPropsWithoutRefAndChildren<"textarea"> & {
    minHeight?: number;
  };

type StyledTextareaProps = {
  textareaHeight: number;
};

type StyledTextareaHandleProps = {
  "aria-label": "입력란 크기 조절 핸들";
};

type StyledTextareaWrapperProps = {
  isFocused: boolean;
};

const Textarea = forwardRef<
  HTMLTextAreaElement,
  TextareaProps
>(
  (
    { minHeight = MIN_HEIGHT, className, ...props },
    ref
  ) => {
    const textareaRef =
      useForwardRef<HTMLTextAreaElement>(ref);
    const handleRef = useRef<HTMLButtonElement>(null);

    const [textareaHeight, setTextareaHeight] =
      useState<number>(minHeight);
    const [isResizing, setIsResizing] =
      useState<boolean>(false);
    const [isFocused, setIsFocused] =
      useState<boolean>(false);

    const handleStartResize = useCallback(() => {
      setIsResizing(true);
    }, []);

    const handleEndResize = useCallback(() => {
      setIsResizing(false);
    }, []);

    const handleFocusIn = useCallback(() => {
      setIsFocused(true);
    }, []);

    const handleFocusOut = useCallback(() => {
      setIsFocused(false);
    }, []);

    const handleResizeWithTextareaElement = useCallback(
      (textareaElement: HTMLTextAreaElement) =>
        (event: MouseEvent | TouchEvent) => {
          if (!isResizing) {
            return;
          }

          const pageY =
            event instanceof MouseEvent
              ? event.pageY
              : event.touches[0].pageY;

          const newHeight =
            pageY - textareaElement.offsetTop - minHeight;
          setTextareaHeight(Math.max(newHeight, minHeight));
          event.preventDefault();
        },
      [textareaRef, isResizing, minHeight]
    );

    useEffect(() => {
      const textareaElement = textareaRef.current;

      if (!textareaElement) {
        return;
      }

      const handleResize =
        handleResizeWithTextareaElement(textareaElement);

      window.addEventListener("mouseup", handleEndResize);
      window.addEventListener("touchend", handleEndResize);
      window.addEventListener("mousemove", handleResize);
      window.addEventListener("touchmove", handleResize, {
        passive: false,
      });
      return () => {
        window.removeEventListener(
          "mouseup",
          handleEndResize
        );
        window.removeEventListener(
          "touchend",
          handleEndResize
        );
        window.removeEventListener(
          "mousemove",
          handleResize
        );
        window.removeEventListener(
          "touchmove",
          handleResize
        );
      };
    }, [
      handleEndResize,
      handleResizeWithTextareaElement,
      textareaRef,
    ]);

    useEffect(() => {
      const textareaElement = textareaRef.current;

      if (!textareaElement) {
        return;
      }

      textareaElement.addEventListener(
        "focusin",
        handleFocusIn
      );
      textareaElement.addEventListener(
        "focusout",
        handleFocusOut
      );

      return () => {
        textareaElement.removeEventListener(
          "focusin",
          handleFocusIn
        );
        textareaElement.removeEventListener(
          "focusout",
          handleFocusOut
        );
      };
    }, [textareaRef, handleFocusIn, handleFocusOut]);

    return (
      <StyledTextareaWrapper
        className={className}
        isFocused={isFocused}
      >
        <StyledTextarea
          ref={textareaRef}
          textareaHeight={textareaHeight}
          {...props}
        />
        <StyledTextareaHandle
          ref={handleRef}
          onMouseDown={handleStartResize}
          onTouchStart={handleStartResize}
          aria-label="입력란 크기 조절 핸들"
        ></StyledTextareaHandle>
      </StyledTextareaWrapper>
    );
  }
);

const StyledTextareaWrapper = styled.div<StyledTextareaWrapperProps>`
  width: 100%;
  border-radius: 5px;
  border: 1px solid #ccc;

  overflow: hidden;

  ${({ isFocused }) =>
    isFocused &&
    css`
      outline: 2px solid ${theme.colors.primary};
      outline-offset: 2px;
    `}
`;
const StyledTextareaHandle = styled.button<StyledTextareaHandleProps>`
  display: block;

  width: 100%;
  height: 10px;
  background-color: #f0f0f0;

  cursor: ns-resize;

  ::before {
    content: "";
    width: 30px;
    height: 3px;
    border-radius: 9999px;
    background-color: #ccc;
    display: block;
    margin: 0 auto;
  }
`;
const StyledTextarea = styled.textarea<StyledTextareaProps>`
  box-sizing: border-box;
  display: block;
  width: 100%;
  height: 100%;
  border: none;

  padding: 0.6rem;

  font-size: 1rem;
  resize: none;

  height: ${({ textareaHeight }) => textareaHeight}px;

  :focus {
    outline: none;
  }

  ::placeholder {
    color: #ccc;
    font-weight: 300;
  }
`;

export default Textarea;
