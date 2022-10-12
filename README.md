# typing-ind

> Typing Animation Component for React

[![NPM](https://img.shields.io/npm/v/typing-ind.svg)](https://www.npmjs.com/package/typing-ind) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save typing-ind
```

## Intro

This is simple typing animation library for React. Only 1 tag component ``` <Typed /> ``` & 5 properties ``` type, backspace, delay, duration, cursor ```. Tag component doesn't need value/closing tag and will return an empty tag containing an object value and a span element (if there is a cursor property).

## Usage

```jsx
import Typed from 'typing-ind' // import component from library

const App = () => {
  return (
    <h1>
      <Typed 
      type={['Test ', 'One', 'Two', 'Three']} // if no backspace animation just write 1 string only (no need to use array)
      backspace={[1, 2]} // contains the index value of the type property, if only 1 index no need to use array (will execute from the smallest index)
      delay={1000} // delay backspace animation (in milliseconds)
      duration={50} // duration of typing animation per character (in milliseconds). Default 100
      cursor={'blinking-text-cursor'} // style for blinking text cursor animation. can be filled directly with css properties or class names in your css file
      />
    </h1>
  );
}
```

## License

MIT © [madanadra](https://github.com/madanadra)
