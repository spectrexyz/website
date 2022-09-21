export function cssUnitPlugin(
  unitInPx: number,
  unit: string,
): (element: { type: string; value: string }) => void {
  const re = new RegExp("([+-]?(?:[0-9]*[.])?[0-9]+)" + unit, "g")
  const convert = (value: string) => value.replace(re, replacer)
  const replacer = (_: unknown, value: string) =>
    `${Number(value) * unitInPx}px`

  return (element: { type: string; value: string }) => {
    if (element.type === "decl" && element.value.includes("gu")) {
      console.log(
        "???",
        element.type,
        element.value,
        "=>",
        convert(element.value),
      )
      element.value = convert(element.value)
    }
  }
}
