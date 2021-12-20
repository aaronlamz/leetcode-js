# Longest Palindromic Substring
Given a string s, return the longest palindromic substring in s.

### Example 1:
```
Input: s = "babad"
Output: "bab"
Note: "aba" is also a valid answer.
```

### Example 2:
```
Input: s = "cbbd"
Output: "bb"
```

### Example 3:
```
Input: s = "a"
Output: "a"
```

### Example 4:
```
Input: s = "ac"
Output: "a"
```

### Constraints:
```
1 <= s.length <= 1000
s consist of only digits and English letters.
```

### Solutions
#### 方法一：暴力破解
```javascript
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if(!s) return
    if(s < 2) return s
    const arr = []
    for(let i=0; i < s.length; i++){
        let charI = s.charAt(i)
        let strKey = s.charAt(i)
        arr.push(charI)
        for(let j=i+1; j < s.length; j++){
            let charJ = s.charAt(j)
            if(charI === charJ){
                strKey+=charJ
                if(strKey === strKey.split('').reverse().join('')){
                    arr.push(strKey)
                }
            }else{
                strKey+= charJ
            }
        }
    }
    return arr.length===1 ? arr[0]:arr.reduce((previousVal,currentVal)=>{
        return currentVal.length < previousVal.length ? previousVal: currentVal
    })
};
```
#### 方法二：动态规划
思路与算法

```javascript
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let len  = s.length;
  if( len < 2) return s;
  let maxLen = 1;
  let begin = 0;
}
```



