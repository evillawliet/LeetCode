/**
 * 
 * 451. Sort Characters By Frequency
 * Given a string s, sort it in decreasing order based on the frequency of characters, and return the sorted string.
*/

function frequencySort(s: string): string {
  const countObj: Record<string, number> = {}
  for (let i = 0, len = s.length; i < len; i++) {
      if (countObj[s[i]]) {
          countObj[s[i]]++
      } else {
          countObj[s[i]] = 1
      }
  }
  const keys = Object.keys(countObj)
  keys.sort((a, b) => countObj[b] - countObj[a])
  let result = ''
  keys.forEach(k => {
      result += k.repeat(countObj[k])
  })
  return result
};