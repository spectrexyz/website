import { useState } from "react"
import { css } from "@emotion/react"
import { a, useSpring, useTransition } from "react-spring"
import { useLocation } from "wouter"
import { gu, springs, ButtonArea, FocusTrap, IconList, IconX } from "kit"
import { Menu } from "../Menu/Menu.jsx"
import { useAppReady } from "../App/AppReady.jsx"
import { useAppScroll } from "../App/AppScroll.jsx"

import logo from "./logo.png"

export function TopBar() {
  const [_, setLocation] = useLocation()
  const { appReadyTransition } = useAppReady()

  const [hide, setHide] = useState(false)
  useAppScroll((scroll) => {
    setHide(scroll > 2 * gu)
  })

  const { innerTransform } = useSpring({
    config: springs.appear,
    innerTransform: hide ? "translate3d(0, -100%, 0)" : "translate3d(0, 0%, 0)",
  })

  const [menuOpened, setMenuOpened] = useState(false)
  const menuIconTransition = useTransition(menuOpened, {
    config: springs.appear,
    from: {
      opacity: 0,
      transform: menuOpened ? "rotate(-90deg)" : "rotate(90deg)",
    },
    enter: { opacity: 1, transform: "rotate(0deg)" },
    leave: {
      opacity: 0,
      transform: menuOpened ? "rotate(90deg)" : "rotate(-90deg)",
    },
  })

  return (
    <FocusTrap
      active={menuOpened}
      focusTrapOptions={{
        onDeactivate() {
          setMenuOpened(false)
        },
      }}
    >
      <div
        css={css`
          position: relative;
          height: 8gu;
        `}
      >
        {appReadyTransition(
          ({ progress, topBarTransform }, ready) =>
            ready && (
              <a.div
                style={{ opacity: progress, transform: topBarTransform }}
                css={css`
                  position: absolute;
                  inset: auto 0 0;
                  height: 100%;
                `}
              >
                <a.div
                  style={{ transform: innerTransform }}
                  css={({ colors }) => css`
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    height: 100%;
                    border-bottom: 1px solid ${colors.outline2};
                  `}
                >
                  <ButtonArea
                    title="Home"
                    onClick={() => setLocation("/")}
                    css={css`
                      align-items: center;
                      height: 100%;
                      padding: 0 10px;
                      outline-offset: -2px;
                    `}
                  >
                    <img src={logo} alt="" width="40.5" height="48" />
                  </ButtonArea>
                  <ButtonArea
                    title="Menu"
                    onClick={() => setMenuOpened((v) => !v)}
                    css={css`
                      position: relative;
                      align-items: center;
                      width: calc(4gu + 10px * 2);
                      height: 100%;
                      padding: 0 10px;
                      outline-offset: -2px;
                      &:active {
                        transform: translate(1px, 1px);
                      }
                    `}
                  >
                    {menuIconTransition((style, menuOpened) =>
                      menuOpened ? (
                        <MenuIcon style={style} icon={<IconX />} />
                      ) : (
                        <MenuIcon style={style} icon={<IconList />} />
                      )
                    )}
                  </ButtonArea>
                </a.div>
              </a.div>
            )
        )}
        <Menu opened={menuOpened} />
      </div>
    </FocusTrap>
  )
}

function MenuIcon({ icon, style }) {
  return (
    <a.div
      style={style}
      css={css`
        position: absolute;
        inset: 0;
        display: grid;
        place-items: center;
        width: 100%;
        height: 100%;
      `}
    >
      {icon}
    </a.div>
  )
}
