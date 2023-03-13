void main(List<String> args) {
  int num = 5;
  List<dynamic> arr = [];
  for (int i = 1; i <= num; i++) {
    arr.add(i);
  }
  print(arr.join('\n'));
}
