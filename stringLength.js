const stringLength = string => {
  if (string === "") throw new Error("No empty string");
  const length = string.split(" ").join("").length;
  if (length > 10) throw new Error("String exceeds 10 characters");
  
  return length;
} 

module.exports = stringLength;