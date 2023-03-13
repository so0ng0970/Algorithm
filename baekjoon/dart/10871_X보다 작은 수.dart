void main(List<String> args) {
  List<String> input = ["10 5", "1 10 4 9 2 3 8 5 7 6"];
  List<String> one = input[0].split(" ");
  List<String> two = input[1].split(" ");

  List<int> a = one.map((e) => int.parse(e)).toList();
  List<int> b = two.map((e) => int.parse(e)).toList();

  List<int> arr = [];
  for (int i = 0; i < a[0]; i++) {
    if (b[i] < a[1]) {
      arr.add(b[i]);
    }
  }
  print(arr.join(" "));
}
