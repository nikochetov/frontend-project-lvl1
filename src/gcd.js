const gcd = (m, n) => {
  if (m === n) {
    return m;
  }

  if (m > n) {
    return gcd(m - n, n);
  }

  return gcd(m, n - m);
};

export default gcd;
