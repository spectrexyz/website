import type { ReactNode } from "react"

import { Global } from "@emotion/react"
import { useBaseUrl } from "../BaseUrl"
import { fonts, theme } from "../styles"

type MainProps = {
  children: ReactNode
}

const FONT_NAME_MONO = "IBM Plex Mono"
const FONT_NAME_SANS = "Inter"

const FONT_FILE_MONO_REGULAR = "IBMPlexMono-Regular-Latin1.woff2"
const FONT_FILE_MONO_MEDIUM = "IBMPlexMono-Medium-Latin1.woff2"
const FONT_FILE_SANS = "Inter-Regular.woff2"

const UNICODE_RANGE_LATIN1 =
  "U+0000, U+000D, U+0020-007E, U+00A0-00A3, U+00A4-00FF, U+0131, "
  + "U+0152-0153, U+02C6, U+02DA, U+02DC, U+2013-2014, U+2018-201A, "
  + "U+201C-201E, U+2020-2022, U+2026, U+2030, U+2039-203A, U+2044, "
  + "U+2074, U+20AC, U+2122, U+2212, U+FB01-FB02"

export function Main({ children }: MainProps) {
  const assets = useBaseUrl("Main")
  return (
    <>
      <Global
        styles={[
          {
            "@font-face": {
              fontFamily: `"${FONT_NAME_MONO}"`,
              fontWeight: "400",
              fontStyle: "normal",
              src: `url("${assets}/${FONT_FILE_MONO_REGULAR}") format("woff2")`,
              unicodeRange: UNICODE_RANGE_LATIN1,
            },
          },
          {
            "@font-face": {
              fontFamily: `"${FONT_NAME_MONO}"`,
              fontWeight: "600",
              fontStyle: "normal",
              src: `url("${assets}/${FONT_FILE_MONO_MEDIUM}") format("woff2")`,
              unicodeRange: UNICODE_RANGE_LATIN1,
            },
          },
          {
            "@font-face": {
              fontFamily: `"${FONT_NAME_SANS}"`,
              fontWeight: "400",
              fontStyle: "normal",
              src: `url("${assets}/${FONT_FILE_SANS}") format("woff2")`,
              unicodeRange: UNICODE_RANGE_LATIN1,
            },
          },
        ]}
      />
      <Global
        styles={{
          "*, *:before, *:after": {
            boxSizing: "border-box",
          },
          "body, html, h1, h2, pre, p, ul": {
            margin: "0",
          },
          "html": {
            scrollBehavior: "smooth",
          },
          "body, h1, h2, pre, button, svg, input": {
            font:
              `${fonts.sizes.normalMono} / ${fonts.line} ${fonts.families.mono}`,
          },
          "strong, b": {
            fontWeight: "600",
          },
          "body": {
            color: theme.primary,
            background: theme.background,
          },
          "button": {
            color: "inherit",
          },
          "button, [rel=\"button\"]": {
            cursor: "pointer",
          },
          "ul": {
            padding: "0",
          },
          "a": {
            color: theme.link,
            textDecoration: "none",
            "&:focus:not(:focus-visible)": {
              outline: "none",
            },
            "&:focus-visible": {
              outline: `2px solid ${theme.link}`,
            },
          },
        }}
      />
      {children}
    </>
  )
}
