# 滑动窗口算法

https://www.zhihu.com/topic/20746237/intro

**滑动窗口算法可以用以解决数组/字符串的子元素问题，它可以将嵌套的循环问题，转换为单循环问题，降低时间复杂度。**

窗口可以是固定大小，起始和终止位置同时变化。

<img src="leetCode%E5%88%B7%E9%A2%98%E7%AC%94%E8%AE%B0.assets/v2-98bc2f4a5ea853dd8cff43f252cbf519_b.jpg" alt="img" style="zoom: 67%;" />

也可以是可变大小，起始和终止位置不同时变化。

<img src="leetCode%E5%88%B7%E9%A2%98%E7%AC%94%E8%AE%B0.assets/v2-22e02b405c9c6787cd8bfbe8b3f657d0_b.jpg" alt="img" style="zoom:50%;" /> <img src="leetCode%E5%88%B7%E9%A2%98%E7%AC%94%E8%AE%B0.assets/v2-7fba9cef9da1e5652bd8f12c695fab26_b-1581518477288.jpg" alt="img" style="zoom:50%;" />

## 例题

### 3.无重复字符的最长字串

给定一个字符串，请你找出其中不含有重复字符的最长子串的长度。

示例 1:

> 输入: "abcabcbb"
> 输出: 3 
> 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
> 示例 2:

示例 2：

> 输入: "bbbbb"
> 输出: 1
> 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
> 示例 3:

示例 3：

> 输入: "pwwkew"
> 输出: 3
> 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
>      请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。

[题目链接](https://leetcode-cn.com/problems/longest-substring-without-repeating-characters)

思路：利用滑动窗口，从第一个字符开始向后查看，当找到重复字符k时，将字串k（包括k）之前的字符全部舍去，然后更新maxlen的大小，直至移动到结尾。

python3实现：

```python
def lengthOfLongestSubstring(s: str) -> int:
    i=1 #当前字符的位置
    begin=0
    maxlen=0
    dropedlen=0#记录舍去的字符串的长度
    if len(s)==0:
        return 0
    if len(s)==1:
        return 1
    for i in range(len(s)):
        if s[i] in s[begin:i]:
            # 先更新maxlen
            templ=len(s[begin:i])
            print("s[i]="+s[i])
            print("字串="+s[begin:i])
            print("templ = "+str(templ))
            maxlen=templ if(templ>maxlen) else maxlen
            # 舍去字串s[begin:i]中s[i]字符及前面的字符
            # 直接用s[begin:i].index(s[i])获得的是相对位置，不是在s中的位置，应该加上dropedlen
            relativelen=s[begin:i].index(s[i])#重复的字符串的相对位置
            begin=relativelen+dropedlen+1
            dropedlen=begin#更新删除的长度
    # 到字符串末再更新一次maxlen
    templ=len(s[begin:i])+1
    maxlen=templ if(templ>maxlen) else maxlen
    return maxlen


s = "au"
print("答案："+str(lengthOfLongestSubstring(s)))
```

### 76.最小覆盖字串

给定一个字符串 S、一个字符串 T，请在字符串 S 里面找出：包含 T 所有字母的最小子串。

示例：

> 输入: S = "ADOBECODEBANC", T = "ABC"
> 输出: "BANC"

说明：

- 如果 S 中不存这样的子串，则返回空字符串 ""。
- 如果 S 中存在这样的子串，我们保证它是唯一的答案。

[题目来源](https://leetcode-cn.com/problems/minimum-window-substring)

提示：根据LeetCode的官方解答，字符串T中可能有重复的字符，所以我们的答案需要保证字符类型和数量都一致。例如：T=“aabc”，则最小字串可能为“baac”，而不是“bac”

所以可以从字符串T中字母的出现的类型和频率入手，两者都要统计。可以通过python的字典类型来记录。

思路：

1. 利用滑动窗口，从第一个字符开始，逐渐向右查找，当字符出现的类型和频率均满足要求，则找到了一个符合条件的字串。但这个字串可能不是最小字串。
2. 接着保持滑动窗口右边界不变，收缩左边界，观察长度减小后字串是否依然满足条件，如果满足，则继续收缩左边界，直到不能收缩为止。
3. 如果这个字串长度小于之前找到的字串长度，则更新结果。
4. 保持滑动窗口左边界不动（实际上左边界应该往右挪一个），扩张右边界，继续找符合条件的字串。然后通过步骤2，3找到满足条件的最小字串，直到遍历整个字符串S。

python3实现：

```python
def minWindow(s: str, t: str) -> str:
    left = 0
    minlen = len(s)+1
    i = 1  # 指针
    result = ""
    char_t = dict()  # 字典，用于统计t中不同字符出现的个数
    char_win = dict()  # 字典，用于统计滑动窗口中不同字符的个数
    count = 0  # 用于统计滑动窗口中有多少字符满足数量需求
    FORM = 0  # 记录t中不同字符的格个数，count与form相等时满足条件
    if not s or not t:  # 空串
        return result
    for i in t:
        #遇到新的字符则加入
        if not (i in char_t):
            char_t[i]=1
            char_win[i]=0
            FORM+=1
        else:
            char_t[i]+=1

    for i in range(len(s)):
        letter=s[i]
        if letter in char_t:
            char_win[letter]+=1
            if char_win[letter]==char_t[letter]:
                count+=1
        if count==FORM:#找到满足条件的字串
            # 收缩左边框
            if i!=len(s):#滑动窗口未扩张到最后一个字符
                while(True):
                    #字符不在t中出现
                    if(s[left] not in t):
                        left += 1
                    #字符在t中出现
                    else:
                        temp_len=len(s[left:i+1])
                        if (char_win[s[left]]>char_t[s[left]])and(temp_len>len(t)):
                            char_win[s[left]]-=1
                            left+=1
                        else:
                            break
                #更新minlen和result
                temp=s[left:i+1]
                if len(temp)<minlen:
                    minlen=len(temp)
                    result=temp
            else:
                while(True):
                    #字符不在t中出现
                    if(s[left] not in t):
                        left += 1
                    #字符在t中出现
                    else:
                        temp_len=len(s[left:])
                        if (char_win[s[left]]>char_t[s[left]])and(temp_len>len(t)):
                            char_win[s[left]]-=1
                            left+=1
                        else:
                            break
                #更新minlen和result
                temp=s[left:]
                if len(temp)<minlen:
                    minlen=len(temp)
                    result=temp
        
            char_win[s[left]]-=1
            count-=1
            left+=1
    return result


S = "ADOBECODEBANC"
T = "ABC"
print("答案:"+minWindow(S, T))

S2 = "abbbbbbbbabc"
T2 = "abc"
print("答案2:"+minWindow(S2, T2))
```

做题心得：

这个题的困难之处在于如何判断字串满足条件。一开始注意力都集中在字符的类型相同上，数量只是附带检验。但实际上可以巧妙利用字符出现的频率（数量）来作为判断条件。

其次滑动窗口扩张到最后一个字符的时候要单独判断，因为python的字符串切片[begin:end]截取的字符串下标是从begin到end-1，如果i移动到字符串末尾，i+1会越界