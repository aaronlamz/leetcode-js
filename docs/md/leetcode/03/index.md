# Longest Substring Without Repeating Characters
Given a string s, find the length of the longest substring without repeating characters.

### Example 1:
```
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
```

### Example 2:
```
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
```

### Example 3:
```
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
```

### Example 4:
```
Input: s = ""
Output: 0
```

### Solutions
```javascript
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(!s) return 0
    if(s && !s.trim()) return 1
    if(s.length === 1) return 1
    const obj = {}
    for(let i = 0; i < s.length; i++){
        let charI = s.charAt(i)
        let keys = charI
        for(let j=i+1; j<s.length; j++){
            let charJ = s.charAt(j)
            if(keys.indexOf(charJ)!==-1) {
                obj[keys] = j-i
                break
            }else{
                keys += charJ
            }
        }
        console.log(keys)
        obj[keys] = keys.length
    }
    return Math.max(...Object.values(obj))
};
```
