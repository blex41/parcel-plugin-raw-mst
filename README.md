# parcel-plugin-raw-mst

[Parcel](https://parceljs.org/) plugin for loading Mustache templates as strings in your JS

## Installation

```sh
npm i -D parcel-plugin-raw-mst
```

## Usage

Whenever you `require` files with an `.mst` extension, they will be parsed as strings. For example:

**people.mst**

```html
<ul>
  {{#people}}
  <li>{{name}}</li>
  {{/people}}
</ul>
```

**index.js**

```js
const Mustache = require("mustache");
const template = require("./people.mst");

const view = { people: [{ name: "Jane" }, { name: "John" }] };

console.log(Mustache.render(template, view));
// <ul>
//   <li>Jane</li>
//   <li>John</li>
// </ul>
```

## Options

To override the default options, create a `.rawMst.js` file at the root of your project, which exports an object. For example:

```js
module.exports = {
  minify: process.env.NODE_ENV === "production",
};
```

### minify

> type: Boolean  
> default: false

Replaces line-breaks and consecutive spaces with a single space.
