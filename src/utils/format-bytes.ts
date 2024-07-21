export function formatBytes(bytes: number) {
  const units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB']

  let index = 0

  for (; bytes >= 1024 && index < units.length - 1; index++) {
    bytes /= 1024
  }

  return `${bytes.toFixed(1)} ${units[index]}`
}
