<?php
/**
 * @link https://leetcode.com/problems/valid-anagram/
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
 */
class Solution {
    /**
     * @param string $s
     * @param string $t
     * @return bool
     */
    function isAnagram($s, $t) {
        $arrS = str_split($s);
        $arrT = str_split($t);
        sort($arrS);
        sort($arrT);
        return $arrS == $arrT;
    }
}
