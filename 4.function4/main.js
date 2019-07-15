function countWords(message){
var replacedStr = message.replace(/ /g,".");//将所有空格替换成.
var substrArray = replacedStr.split(".");//原字符串被分割为多个单词
count=substrArray.length-1//数组长度-1即为单词个数
alert(count);
}
