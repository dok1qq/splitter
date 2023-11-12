import React, { PropsWithChildren, useEffect, useRef } from 'react';
import './splitter.css';

type SplitterDirection = 'horizontal' | 'vertical';

interface SplitterBase {
  direction: SplitterDirection;
  renderResizer(): React.JSX.Element;
}

interface HorizontalSplitter extends SplitterBase {
  direction: 'horizontal';
  renderLeft(): React.JSX.Element;
  renderRight(): React.JSX.Element;
}

interface VerticalSplitter extends SplitterBase {
  direction: 'vertical';
  renderTop(): React.JSX.Element;
  renderBottom(): React.JSX.Element;
}

type SplitterProps = HorizontalSplitter | VerticalSplitter;

function isVerticalSplitter(props: SplitterProps): props is VerticalSplitter {
  return props.direction === 'vertical';
}

function isHorizontalSplitter(props: SplitterProps): props is HorizontalSplitter {
  return props.direction === 'horizontal';
}


export function Splitter(props: PropsWithChildren<SplitterProps>) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ref = containerRef.current;
    if (!ref) {
      return;
    }

    const first = ref.querySelector('.first') as HTMLDivElement;
    const resizer = ref.querySelector('.resizer') as HTMLDivElement;

    if (!resizer || !first) {
      return;
    }

    const containerRect = ref.getBoundingClientRect();
    const resizerRect = resizer.getBoundingClientRect();

    const maxY = containerRect.height - resizerRect.height;
    const halfResizerHeight = Math.floor(resizerRect.height / 2);

    function mouseMove(event: MouseEvent) {
      let newY = event.clientY - containerRect.y - halfResizerHeight;

      if (newY < 0) {
        newY = 0;
      }

      if (newY > maxY) {
        newY = maxY;
      }

      first.style.height = `${newY}px`;
    }

    function mouseUp() {
      document.removeEventListener('mousemove', mouseMove);
      document.removeEventListener('mouseup', mouseUp);
    }

    function mouseDown(event: MouseEvent) {
      event.preventDefault();

      document.addEventListener('mousemove', mouseMove);
      document.addEventListener('mouseup', mouseUp);
    }

    function dragStart() {
      return false;
    }

    resizer.addEventListener('mousedown', mouseDown);
    resizer.addEventListener('ondragstart', dragStart)

    return () => {
      resizer.removeEventListener('mousedown', mouseDown);
      resizer.removeEventListener('ondragstart', dragStart)
    };
  }, []);

  if (isVerticalSplitter(props)) {
    return (
      <div className={`split-container__${props.direction}`} ref={containerRef}>
        <div className="first">{props.renderTop()}</div>
        <div className="resizer">{props.renderResizer()}</div>
        <div className="second">{props.renderBottom()}</div>
      </div>
    );
  }

  if (isHorizontalSplitter(props)) {
    return (
      <div className={`split-container__${props.direction}`} ref={containerRef}>
        <div className="first">{props.renderLeft()}</div>
        <div className="resizer">{props.renderResizer()}</div>
        <div className="second">{props.renderRight()}</div>
      </div>
    );
  }

  return null;
}
