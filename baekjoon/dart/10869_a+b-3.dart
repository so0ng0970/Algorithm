void main(List<String> args) {
  List<String> input = ["1 1", "2 3", "3 4", "9 8", "5 2"];

  for (String str in input) {
    List<String> split = str.split(" ");
    List<int> num = split.map((e) => int.parse(e)).toList();
    print(num[0] + num[1]);
  }
}
