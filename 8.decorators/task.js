function cachingDecoratorNew(func) {
  const cache = [];

  function wrapper(...args) {
    const hash = JSON.stringify(args);
    const objectInCache = cache.find((item) => item.hash === hash);

    if (objectInCache) {
      console.log("Из кэша: " + objectInCache.value);
      return "Из кэша: " + objectInCache.value;
    }

    const result = func(...args);
    cache.push({ hash, value: result });

    if (cache.length > 5) {
      cache.shift();
    }

    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;
  }

  return wrapper;
}

const addAndMultiply = (a, b, c) => (a + b) * c;
const upgraded = cachingDecoratorNew(addAndMultiply);
console.log(upgraded(1, 2, 3));
console.log(upgraded(1, 2, 3));
console.log(upgraded(2, 2, 3));
console.log(upgraded(3, 2, 3));
console.log(upgraded(4, 2, 3));
console.log(upgraded(5, 2, 3));
console.log(upgraded(6, 2, 3));
console.log(upgraded(1, 2, 3));

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
