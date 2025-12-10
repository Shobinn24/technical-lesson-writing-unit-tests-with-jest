export function pointsForWord(word) {
  return [...word].reduce((points, char) => {
    if (/[a-z]/i.test(char)) { 
        return points + (/[aeiou]/i.test(char) ? 1 :2);
    }
    return points;
  }, 0);
}