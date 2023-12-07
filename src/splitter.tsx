import React, { PropsWithChildren, useEffect, useRef } from 'react';
import './splitter.css';
import { clamp } from './utils';

type SplitterDirection = 'horizontal' | 'vertical';

interface SplitterProps {
  direction: SplitterDirection;
  side?: number;
  min?: number;
  max?: number;
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

    const maxX = containerRect.width - resizerRect.width;
    const maxY = containerRect.height - resizerRect.height;
    const halfResizerWidth = Math.floor(resizerRect.width / 2);
    const halfResizerHeight = Math.floor(resizerRect.height / 2);

    const vertical = props.direction === 'vertical';

    let min = 0;
    let max = vertical ? maxY : maxX;

    if (props.min) min = clamp(props.min, 0, vertical ? maxY : maxX);
    if (props.max) max = clamp(props.max, 0, vertical ? maxY : maxX);

    function verticalMouseMove(event: MouseEvent) {
      let newY = event.clientY - containerRect.y - halfResizerHeight;

      if (newY < min) {
        newY = min;
      }

      if (newY > max) {
        newY = max;
      }

      first.style.height = `${newY}px`;
    }

    function horizontalMouseMove(event: MouseEvent) {
      let newX = event.clientX - containerRect.x - halfResizerWidth;

      if (newX < min) {
        newX = min;
      }

      if (newX > max) {
        newX = max;
      }

      first.style.width = `${newX}px`;
    }

    const mouseMove = vertical ? verticalMouseMove : horizontalMouseMove;

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
    resizer.addEventListener('ondragstart', dragStart);

    if (props.side) {
      if (vertical) {
        first.style.height = `${props.side}px`;
      } else {
        first.style.width = `${props.side}px`;
      }
    }

    return () => {
      resizer.removeEventListener('mousedown', mouseDown);
      resizer.removeEventListener('ondragstart', dragStart);
    };
  }, []);

  const [firstChildren, resizerChildren, secondChildren] = React.Children.toArray(props.children);

  return (
    <div className={`split-container__${props.direction}`} ref={containerRef}>
      <div className="first">{firstChildren}</div>
      <div className="resizer">{resizerChildren}</div>
      <div className="second">{secondChildren}</div>
    </div>
  );
}
