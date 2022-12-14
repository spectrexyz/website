/** @jsx jsx */
import type { ComponentPropsWithoutRef, ReactNode } from "react"

import { createContext, forwardRef, useContext } from "react"
import { jsx, css } from "@emotion/react"
import { ButtonArea } from "../ButtonArea"
import { gu } from "../styles"

export const ICON_SIZE_DEFAULT = 2.5 * gu

const ButtonTextContext = createContext(false)

type ButtonTextProps = ComponentPropsWithoutRef<"button"> &
  ComponentPropsWithoutRef<"a"> & {
    icon?: ReactNode
    label: ReactNode
    onClick?: () => void
  }

export const ButtonText = forwardRef<
  HTMLButtonElement & HTMLAnchorElement,
  ButtonTextProps
>(function ButtonText({ icon, label, ...props }, ref) {
  return (
    <ButtonArea
      ref={ref}
      {...props}
      css={({ colors }) => css`
        display: inline-flex;
        align-items: center;
        text-transform: uppercase;
        font-size: 14px;
        color: ${colors.content};
        &:active {
          transform: translate(1px, 1px);
        }
      `}
    >
      <ButtonTextContext.Provider value={true}>
        {icon}
        <span
          css={css`
            padding-left: ${icon ? css`1gu` : "0"};
          `}
        >
          {label}
        </span>
      </ButtonTextContext.Provider>
    </ButtonArea>
  )
})

export function useInsideButtonText() {
  return useContext(ButtonTextContext)
}
