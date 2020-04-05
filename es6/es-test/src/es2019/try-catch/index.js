try {
    // some code
    throw new Error(1)
}
catch (err) {
    // error handling code
    console.log(err)
}

  // 新语法省略了catch后面的err参数
  try  {
    // some code
    throw new Error(1)
  }
  catch {
    // error handling code
    console.log('出错')
  }