void main(List<String> args) {
   List<String> input = ["1 1", "2 3", "3 4", "9 8", "5 2"];

  for (String str in input) {
    List<String> splitStr = str.split(' ');
    List<int> numList = splitStr.map((str) => int.parse(str)).toList();
    print(numList[0]+numList[1]);
  }
}