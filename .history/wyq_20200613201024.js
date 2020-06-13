function isjson(str) {
  if (typeof str == "string") {
    try {
      var obj = JSON.parse(str);
      if (obj instanceof Object && obj) {
        return true;
      } else {
        return false;
      }
    } catch (e) {
      console.log("error:" + str + "!!!" + e);
      return false;
    }
  } else {
    console.log("error:" + str + "不是一个字符串");

    return false;
  }
}

function formatjson(jsonStr) {
  var input;
  try {
    if (jsonStr.length == 0) {
    //   return false;
        return alert("输入内容不能为空");

    } else if (isJSON(jsonStr)) {
      return alert("您输入的内容非正规json格式，请检查后重试！");
    }
    input = eval("(" + jsonStr + ")");
  } catch (error) {
    console.log(error);
    return alert("JSON 格式化错误！");
  }

  return JSON.stringify(input, null, 4);
}
