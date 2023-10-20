import { PropsWithChildren, useEffect, useRef } from 'react';
import './splitter.css';


interface SplitterProps {

}

export function Splitter(props: PropsWithChildren<SplitterProps>) {
  const {
    children,
  } = props;

  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ref = containerRef.current;
    if (!ref) {
      return;
    }

    const box = ref.getBoundingClientRect();
    console.log(`${box.width} x ${box.height}`);

    // get children
    // change panel size
  }, []);

  return (
    <div className="split-container" ref={containerRef}>
      {children}
    </div>
  );
}
