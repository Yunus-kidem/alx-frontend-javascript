export default function appendToEachArrayValue(array, appendString) {
  const result = [];
  for (const el of array) {
    result.push(appendString + el);
  }

  return result;
}
