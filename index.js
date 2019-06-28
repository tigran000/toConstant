export default function(string) {
  if (typeof string !== "string") {
    return null
  }
  const splittedString = string.replace(/ /g, "").split("")

  splittedString.map((el, index, splittedString) => {
    const charCode = el.charCodeAt(0)
    if (index !== 0 && (charCode >= 65 && charCode <= 90)) {
      splittedString.splice(index, 0, "_")
      splittedString[index + 1] = el.toLowerCase()
    }
  })

  return splittedString.join("").toUpperCase()
}
