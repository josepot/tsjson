# typed-json

`JSON.stringify` and `JSON.parse` with better support for TS.

```ts
import { stringify, parse } from '@josepot/typed-json';


interface Data {
  foo: string;
  bar: number;
}

const data: Data = { foo: 'foo', bar: 10 };

const dataStr = stringify(data); // const dataStr: JsonString<Data>
const dataClone = parse(dataStr); // const dataClone: Data
```
