#
# @lc app=leetcode.cn id=49 lang=python3
#
# [49] 字母异位词分组
#

# @lc code=start
class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        result=[]
        # key为排序后单词，value为result的分组下标
        group={}
        for i in range(len(strs)):
            temp_list=list(strs[i])
            temp_list.sort()
            sorted_string="".join(temp_list)
            if sorted_string in group:
                result[group[sorted_string]].append(strs[i])
            else:
                group[sorted_string]=len(group)
                result.append([strs[i]])
        return result
        # @lc code=end

