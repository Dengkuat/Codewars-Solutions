function sortString(string, ordering) {
  let result = "";

  ordering = [...new Set(ordering)];

  for (let i = 0; i < ordering.length; i++) {
    let char = ordering[i];

    for (let j = 0; j < string.length; j++) {
      if (string[j] === char) {
        result += string[j];
      }
    }
  }

  for (let i = 0; i < string.length; i++) {
    if (!ordering.includes(string[i])) {
      result += string[i];
    }
  }

  return result;
}

console.log(sortString("foos", "of"));