export function bToMb(b: number): string {
  const mb = b / 1024 / 1024

  return `${mb.toFixed(2)} MB`
}

export function getFileType(fileName: string): string {
  const type = fileName.split('.').pop()

  return type || ''
}
