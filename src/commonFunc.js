export const generateRandomNumber = (range) => {
  const randomNumber = (Math.floor(Math.random()*range) + 1);
  return randomNumber;
}

export const gcd = (m, n) => {
  if (m === n) {
    return m;
  }
  if (m > n) {
    return gcd(m - n, n)
  }
  return gcd(m, n - m);
};

export const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  let i = 2;
  while (i <= num / 2) {
    if (num % i === 0) {
      return false;
    }
  i += 1;
  }
  return true;
};
