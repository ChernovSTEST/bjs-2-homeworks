function cachingDecoratorNew(func) {
  const maxCacheSize = 5;
  const cache = new Map();

  function cachedFunction(...args) {
    const key = JSON.stringify(args);

    if (cache.has(key)) {
      console.log("Из кеша: " + cache.get(key).value);
      return "Из кеша: " + cache.get(key).value;
    }

    const result = func(...args);
    cache.set(key, { value: result });

    if (cache.size > maxCacheSize) {
      const firstKey = cache.keys().next().value;
      cache.delete(firstKey);
    }

    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;
  }

  return cachedFunction;
}

const addAndMultiply = (a, b, c) => (a + b) * c;
const upgradedAddAndMultiply = cachingDecoratorNew(addAndMultiply);
console.log(upgradedAddAndMultiply(1, 2, 3));
console.log(upgradedAddAndMultiply(1, 2, 3));
console.log(upgradedAddAndMultiply(2, 2, 3));
console.log(upgradedAddAndMultiply(3, 2, 3));
console.log(upgradedAddAndMultiply(4, 2, 3));
console.log(upgradedAddAndMultiply(5, 2, 3));
console.log(upgradedAddAndMultiply(6, 2, 3));
console.log(upgradedAddAndMultiply(1, 2, 3));

function debounceDecoratorNew(func, timeout) {
  let timeoutId;
  let count = 0;
  let allCount = 0;

  function wrapper(...args) {
    clearTimeout(timeoutId);

    const shouldCallImmediately = !timeoutId;

    timeoutId = setTimeout(() => {
      timeoutId = null;
      if (!shouldCallImmediately) {
        func(...args);
      }
    }, timeout);

    if (shouldCallImmediately) {
      count++;
      func(...args);
    }

    allCount++;
  }

  Object.defineProperty(wrapper, 'count', {
    get() {
      return count;
    }
  });

  Object.defineProperty(wrapper, 'allCount', {
    get() {
      return allCount;
    }
  });

  return wrapper;
}

const sendSignal = (signalOrder, delay) => console.log("Сигнал отправлен", signalOrder, delay);
const upgradedSendSignal = debounceDecoratorNew(sendSignal, 2000);

setTimeout(() => upgradedSendSignal(1, 0));
setTimeout(() => upgradedSendSignal(2, 300));
setTimeout(() => upgradedSendSignal(3, 900));
setTimeout(() => upgradedSendSignal(4, 1200));
setTimeout(() => upgradedSendSignal(5, 2300));
setTimeout(() => upgradedSendSignal(6, 4400));
setTimeout(() => upgradedSendSignal(7, 4500));

setTimeout(() => {
  console.log(upgradedSendSignal.count);
  console.log(upgradedSendSignal.allCount);
}, 7000);