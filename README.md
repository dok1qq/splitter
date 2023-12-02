# Splitter

## Expample
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

| Property  |    Description   |           Type           | Default |
|-----------| ---------------- |:------------------------:|:-------:|
| direction | Determine layout | 'vertical', 'horizontal' |    -    |
