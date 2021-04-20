/** @jsx jsx */
import type { DetailedHTMLProps, ButtonHTMLAttributes } from "react"

import { jsx, css } from "@emotion/react"

export function ButtonArea(
  props: DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
) {
  return (
    <button
      {...props}
      css={css`
        display: block;
        padding: 0;
        border: 0;
        outline: 0;
        background: none;
        cursor: pointer;
        &::-moz-focus-inner {
          border: 0;
        }
        &:focus:not(:focus-visible) {
          outline: 0;
        }
        &:focus-visible {
          outline: 2px solid red;
        }
      `}
    ></button>
  )
}