/**
 * https://leetcode.com/problems/group-anagrams/
 * Given an array of strings strs, group the anagrams together. You can return the answer in any order.
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
 * 
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let answer = new Map();

    for (let i = 0; i < strs.length; i++) {
        let str = strs[i]                 // eat
        let strArr = [...str];            // ['e', 'a', 't']
        strArr.sort();                    // ['a', 'e', 't']
        let orderedStr = strArr.join(''); // aet

        if (answer.has(orderedStr)) {
            let answerArr = answer.get(orderedStr);
            answerArr.push(str);
            answer.set(orderedStr, answerArr);
            continue;
        }

        answer.set(orderedStr, [str]);
    }

    let hoge = [];
    for (const value of answer.values()) {
        hoge.push(value);
    }
    return hoge;
};

/**
 * 自分の回答をより短くしたコード
 */
var improveGroupAnagrams = function(strs) {
    let answer = new Map();

    for (let i = 0; i < strs.length; i++) {
        let str = strs[i]; // eat
        let orderedStr = [...str].sort().join(''); // aet

        answer.has(orderedStr) ? answer.get(orderedStr).push(str) : answer.set(orderedStr, [str]);
    }

    return Array.from(answer.values());
};
