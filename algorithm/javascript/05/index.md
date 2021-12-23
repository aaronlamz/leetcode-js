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
缺点：效率太低，超出时间限制
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
对于一个子串而言，如果它是回文串，并且长度大于 2，那么将它首尾的两个字母去除之后，它仍然是个回文串。例如对于字符串`ababa`，如果我们已经知道 `bab` 是回文串，那么`ababa`一定是回文串，这是因为它的首尾两个字母都是 `a`。

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
    const dp = []
    // dp[i][j] 表示 s[i..j] 是否是回文串
    for(let i = 0; i < len; i++){
        dp[i] = []
        for(let j = 0; j < len; j++){
            // 初始化所有长度为 1 的子串都是回文串
            if(i === j){
                dp[i][j] = true
            } else{
                dp[i][j] = ''
            }
        }
    }
    const strArray = s.split('')
    // 枚举子串长度L,从长度2开始,回文串至少长度2
    for(let L=2; L <= len; L++){
        // i左边界 j右边界
        for(let i=0; i < len; i++){
            // 由 L 和 i 可以确定右边界，即 j - i + 1 = L 得
            let j = i + L - 1;
            // 超出边界则跳出循环
            if(j > len){
                break
            }
            if(strArray[i] !== strArray[j]){
                dp[i][j] = false
            } else {
                // 首尾相等时，有2种情况
                // 情况1：s[i...j]长度不超过3，不用检查必为回文串，如a ,aa ,aba 都已处理
                // 情况2：s[i...j]长度大于3，由s[i+1...j-1]来判断
                if(j-i < 3) {
                    dp[i][j] = true
                } else {
                    // 状态转移方程  p(i,j) = p(i+1,j-1) && str[i] === str[j]
                    dp[i][j] = dp[i+1][j-1]
                }
            }
            if(dp[i][j] && j-i+1 > maxLen){
              maxLen = j-i+1
              begin = i
            }
        }
    }
    return s.slice(begin, begin + maxLen);
}
```
