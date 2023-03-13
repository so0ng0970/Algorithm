void main(List<String> args) {
  List<String> list = ["1 2", "10 2", "5 5"];

  for (var numbers in list) {
    List<String> lists = numbers.split(" ");

    List<int> num = lists.map((e) => int.parse(e)).toList();
   

    if (num[0] < num[1]) {
      print('<');
    } else if (num[0] == num[1]) {
      print('==');
    } else {
      print('>');
    }
    ;
  }
}
