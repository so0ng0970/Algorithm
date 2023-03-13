import 'dart:math';

void main(List<String> args) {
  String input = "0 4 2 5 6";
  List<String> numbers = input.split(" ");
  List<int> nums = numbers.map((e) => int.parse(e)).toList();
  List<num> arr = nums.map((num) => pow(num, 2)).toList();
  num result = arr.reduce((a, b) => (a + b));
  print(result % 10);
}
