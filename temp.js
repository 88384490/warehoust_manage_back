function debounce(func, wait = 50) {
  let timer;
  return (...args) => {
    // 如果之前设置了超时，就清除
    if (timer) {
      clearTimeout(timer);
    }

    // 重新设置超时
    timer = setTimeout(() => {
      // 延迟执行函数
      func(...args)
    }, wait)
  };
}
