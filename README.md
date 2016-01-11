# Reax Request

Request module for React

[![npm version](https://badge.fury.io/js/%40hnordt%2Freax-request.svg)](https://badge.fury.io/js/%40hnordt%2Freax-request)

## Usage

```sh
npm install --save @hnordt/reax-request
```

```jsx
import request from '@hnordt/reax-request';

request('GET', 'http://foo.com', { bar: true })
  .then(data => console.info(data))
  .catch(error => console.error(error));
```
