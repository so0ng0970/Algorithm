function solution(nums) {
    let dedupe = new Set(nums);
    let arrded = [...dedupe].length
    let divide = nums.length / 2;

    if (arrded > divide) {
        return divide;
    } else {
        return arrded;
    }
}