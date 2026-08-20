function generateRandomId() {
  return Math.floor(Math.random() * 0xffffffff)
    .toString(16)
    .padStart(8, '0');
}

const withIds = quotes.map((quote) => ({
  id: generateRandomId(),
  ...quote,
}));

console.log(quotesWithIds);
