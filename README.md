# parcel-plugin-raw-mst

[Parcel](https://parceljs.org/) plugin for loading Mustache templates as strings in your JS

## Installation

```sh
npm i -D parcel-plugin-raw-mst
```

## Usage

Now, you can simply `require` files with an `.mst` extension, which will be parsed as strings:

```js
const peopleTemplate = require('./people.mst');
```

## Example

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
const Mustache = require('mustache');
const template = require('./people.mst');

const view = { people: [{ name: 'Jane' }, { name: 'John' }] };

console.log(Mustache.render(template, view));
// <ul>
//   <li>Jane</li>
//   <li>John</li>
// </ul>
```