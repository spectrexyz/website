/** @jsx jsx */
import { jsx, css } from "@emotion/react"
import { gu } from "../styles"

export function IconArrowUp({
  size = 6 * gu,
  color = "currentColor",
}: {
  size: number
  color: string
}): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      css={css`
        display: block;
      `}
    >
      <path
        d="M24.9712 35.0305L24.9712 12.9695C24.9712 12.4341 24.5371 12 24.0017 12C23.4663 12 23.0323 12.4341 23.0323 12.9695L23.0323 35.0305C23.0323 35.566 23.4663 36 24.0017 36C24.5371 36 24.9712 35.566 24.9712 35.0305Z"
        fill={color}
        stroke={color}
      />
      <path
        d="M23.9998 14.3415L31.5872 21.9289C31.9658 22.3075 32.5797 22.3075 32.9583 21.9289C33.3368 21.5502 33.3368 20.9364 32.9583 20.5578L24.6854 12.2849C24.3068 11.9063 23.693 11.9063 23.3143 12.2849L15.0415 20.5578C14.8521 20.7471 14.7575 20.9952 14.7575 21.2434C14.7575 21.4915 14.8521 21.7396 15.0415 21.9289C15.4201 22.3075 16.0339 22.3075 16.4125 21.9289L23.9998 14.3415Z"
        fill={color}
        stroke={color}
      />
    </svg>
  )
}
