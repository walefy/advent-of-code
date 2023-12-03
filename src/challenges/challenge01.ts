import fs from 'fs';

export function challenge01() {
  const input = fs.readFileSync('src/inputs/input01/part1.txt');
  
  console.log('PART 01:', parseStringPart01(input.toString()));
  console.log('PART 02:', parseStringPart02(input.toString()));
}

function sumArr(array: number[]) {
  return array.reduce((acc, curr) => acc + curr, 0);
}

function parseStringToNumber(str: string) {
  const replacedString = str
    .replace(/one/g, 'o1e')
    .replace(/two/g, 't2o')
    .replace(/three/g, 't3e')
    .replace(/four/g, 'f4r')
    .replace(/five/g, 'f5e')
    .replace(/six/g, 's6x')
    .replace(/seven/g, 's7n')
    .replace(/eight/g, 'e8t')
    .replace(/nine/g, 'n9e');

  const numbers = replacedString.trim().split('').filter((char) => !Number.isNaN(Number(char)));

  if (numbers.length === 0) return 0;
  if (numbers.length === 1 ) return Number(numbers[0]);
  
  const first = numbers[0];
  const second = numbers[numbers.length - 1];

  return Number(first + second);
}

export function parseStringPart01(str: string) {
  const lines = str.trim().split('\n');
  const numbers: number[] = lines.map((line) => {
    const digits = line.trim().split('').filter((char) => !Number.isNaN(Number(char)));
    
    return Number(`${digits[0]}${digits[digits.length - 1]}`);
  });
  
  return sumArr(numbers);
}

export function parseStringPart02(str: string) {
  const lines = str.trim().split('\n');
  const numbers: number[] = lines.map(parseStringToNumber)
  
  return sumArr(numbers);
}
