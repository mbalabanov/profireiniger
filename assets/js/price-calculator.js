function calculatePrice(squareM, type) {
  let squareMeters = parseInt(squareM)
  let pricePerSqM = 1.6

  if (type === "BR") {
    pricePerSqM = 1.7
  }

  let totalResult = squareMeters * pricePerSqM
  let stringifiedResultWithComma = totalResult.toFixed(2).toString()
  stringifiedResultWithComma = stringifiedResultWithComma.replace(".", ",")
  return stringifiedResultWithComma
}
