import normalizeNumber from '.'

describe('Normalize Number', () => {
  it('should generate right number', () => {
    // number two
    expect(normalizeNumber(2, 0)).toBe(-1)

    expect(normalizeNumber(2, 1)).toBe(1)

    // number three
    expect(normalizeNumber(3, 0)).toBe(-1)

    expect(normalizeNumber(3, 1)).toBe(0)

    expect(normalizeNumber(3, 2)).toBe(1)

    // number four
    expect(normalizeNumber(4, 0)).toBe(-2)

    expect(normalizeNumber(4, 1)).toBe(-1)

    expect(normalizeNumber(4, 2)).toBe(1)

    expect(normalizeNumber(4, 3)).toBe(2)

    // number five
    expect(normalizeNumber(5, 0)).toBe(-2)

    expect(normalizeNumber(5, 1)).toBe(-1)

    expect(normalizeNumber(5, 2)).toBe(0)

    expect(normalizeNumber(5, 3)).toBe(1)

    expect(normalizeNumber(5, 4)).toBe(2)

    // number six
    expect(normalizeNumber(6, 0)).toBe(-3)

    expect(normalizeNumber(6, 1)).toBe(-2)

    expect(normalizeNumber(6, 2)).toBe(-1)

    expect(normalizeNumber(6, 3)).toBe(1)

    expect(normalizeNumber(6, 4)).toBe(2)

    expect(normalizeNumber(6, 5)).toBe(3)
  })
})
