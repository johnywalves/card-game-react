const normalizeNumber = (size: number, index: number) => {
  const min = Math.trunc(size / -2),
    max = Math.trunc(size / 2),
    list = []

  for (let i = min; i < 0; i++) {
    list.push(i)
  }

  if (size % 2 !== 0) {
    list.push(0)
  }

  for (let i = 1; i <= max; i++) {
    list.push(i)
  }

  return list[index]
}

export default normalizeNumber
