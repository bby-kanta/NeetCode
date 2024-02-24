<?php
/**
 * @link https://leetcode.com/problems/contains-duplicate/
 * Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
 */
class Solution {

    /**
     * @param array $nums
     * @return bool
     */
    function containsDuplicate($nums) {
        $sorted = $nums;
        sort($sorted);

        for ($i = 0; $i < count($sorted) - 1; $i++) {
            if ($sorted[$i] == $sorted[$i + 1]) {
                return true;
            }
        }

        return false;
    }

    /**
     * @param array $nums
     * @return bool
     */
    function modelAnswer($nums) {
        $countValues = array_count_values($nums);
        foreach ($countValues as $quantity) {
            if ($quantity >= 2) return true;
        }
        return false;
    }
}

$solution = new Solution();
var_dump($solution->containsDuplicate([1, 2, 3, 1]));
var_dump($solution->containsDuplicate([1, 2, 3, 4]));

var_dump($solution->modelAnswer([1, 2, 3, 1]));
var_dump($solution->modelAnswer([1, 2, 3, 4]));
