import { describe, it  } from 'node:test';
import assert from 'node:assert';
import { parseStringPart01, parseStringPart02 } from '../challenges/challenge01';

describe('Test Challenge 01', () => {
  it('tests whether given input has the correct return (part 01)', () => {
    const input = `
    1abc3
    pqr3stu8vwx
    a1b2c3d4e5f
    treb7uchet
    `;

    const expected = 143;

    assert.strictEqual(parseStringPart01(input), expected);
  });

  it('tests whether given input has the correct return (part 02)', () => {
    const input = `
    two1nine
    eightwothree
    abcone2threexyz
    xtwone3four
    4nineeightseven2
    zoneight234
    7pqrstsixteen
    e2
    teste
    2e
    >1^
    `;

    const expected = 336;

    assert.strictEqual(parseStringPart02(input), expected);
  });
});
