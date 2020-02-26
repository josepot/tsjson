export interface JsonString<T> extends String {
  __: never;
}

export const parse: <T>(
  input: JsonString<T>,
  reviver?: (this: any, key: string, value: any) => any
) => T = JSON.parse as any;

interface Stringify {
  <T>(
    input: T,
    replacer?: (this: any, key: string, value: any) => any,
    space?: string | number
  ): JsonString<T>;
  <T>(
    input: T,
    replacer?: (number | string)[] | null,
    space?: string | number
  ): JsonString<T>;
}

export const stringify: Stringify = JSON.stringify as any;

