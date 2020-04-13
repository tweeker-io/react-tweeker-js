# react-tweeker-js

> Simple a/b and multivariate testing in React.

A simple React library to include the [Tweeker](https://tweeker.io) embed code on your site.

If you're using vanilla js, check out our [ES6 Library](https://github.com/tweeker-io/tweeker-js). This react library uses that under the hood.

## Installation

To use, first sign up for an account on [https://tweeker.io](https://tweeker.io)

Then in your javascript install the module using `npm` or `yarn`.

`npm install react-tweeker-js`
or
`yarn add react-tweeker-js`

## Usage

Import the component into your main `App` component:

```
import React from "react"
import ReactDOM from "react-dom"
import TweekerEmbed from "react-tweeker-js"

const App = () => (
  <TweekerEmbed
    businessId="YOUR_BUSINESS_ID"
    embedVersion="YOUR_EMBED_VERSION"
  />

  {...your other components}
);

ReactDOM.render(<App />, document.body)
```

The `<TweekerEmbed>` component should run on every page of your site.

Also make sure you replace the arguments `YOUR_BUSINESS_ID` and `YOUR_EMBED_VERSION` with your accounts values. You can get these values at [https://app.tweeker.io/embed](https://app.tweeker.io/embed)