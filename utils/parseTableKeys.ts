export function parseTableKeys<T>(data: T[]) {
  return [
    ...data.reduce((acc, obj) => {
      for (const key of Object.keys(obj)) {
        acc.add(key)
      }

      return acc
    }, new Set<string>([])),
  ]
}
