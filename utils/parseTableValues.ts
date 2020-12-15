export function parseTableValues<T>(data: T[], keys: string[]): string[][] {
  return data.reduce((acc: string[][], obj: T) => {
    const currentValues: string[] = []

    for (const key of keys) {
      currentValues.push(obj[key] || "")
    }

    return [...acc, currentValues]
  }, [])
}
