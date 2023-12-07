# Splitter

## Usage example
```jsx
import '...css';
import { Splitter } from '...';

function App() {
  return (
    <Splitter direction="vertical">
      <Top />
      <Separator />
      <Bottom />
    </Splitter>
  );
}
```

## Props

| Property  | Description        |           Type           |   Default   |
|-----------|--------------------|:------------------------:|:-----------:|
| direction | Determine layout   | 'vertical', 'horizontal' |      -      |
| side      | Initial split size |          number          |      -      |
| min       | Min split size     |          number          |      0      |
| max       | Max split size     |          number          | Max content |
