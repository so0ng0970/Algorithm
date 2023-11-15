class Solution {
  bool isPalindrome(int x) {
    final n = x.toString();
    for (int i = 0; i < n.length / 2; i++) {
      if (n[i] != n[n.length - 1 - i]) {
        return false;
      }
    }
    return true;
  }
}
