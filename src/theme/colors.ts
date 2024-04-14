const mainColors = {
  purplePrimary: "#534588",
  yellowPrimary: "#FFCE02",
  lightPurple: "#888BB4",
  darkPurple: "#2E1A46",
  white: "#FFF",
  black: "#000",
  transparent: "rgba(255, 255, 255, 0)",
}

const backgroundElements = {
  light: mainColors.white,
  dark: "#494C74"
}

export const stateColors = {
  danger: {
    light: "#F04C4C",
    dark: "#F69393",
  },
  success: {
    light: "#88DA62",
    dark: "#B7E9A0",
  }
}

export const interfaceColors = {
  backgroundTheme: {
    light: "#F2F3F7",
    dark: "#31334E"
  },
  text: {
    primary: {
      light: mainColors.purplePrimary,
      dark: mainColors.white
    },
    title: {
      light: mainColors.darkPurple,
      dark: mainColors.white
    }
  },
  border: {
    main: {
      light:  mainColors.lightPurple,
      dark: "#D0D1E1"
    },
    error: {
      light: stateColors.danger.light,
      dark: stateColors.danger.dark
    },
    success: {
      light: stateColors.success.light,
      dark: stateColors.success.dark
    },
    none: "none"
  },
  button: {
    primary: {
      background: {
        light: mainColors.purplePrimary,
        dark: "#63669C"
      },
      hoverBackground: {
        light: "#322951",
        dark: "#A1A3C4"
      },
      textColor: {
        light: mainColors.white,
        dark: mainColors.white
      },
    },
    danger: {
      background: {
        light: mainColors.transparent,
        dark: mainColors.transparent
      },
      hoverBackground: {
        light: stateColors.danger.light,
        dark: stateColors.danger.dark
      },
      textColor: {
        light: stateColors.danger.light,
        dark: stateColors.danger.dark
      },
      textColorHover: {
        light: mainColors.white,
        dark: mainColors.white
      }
    },
    disabled: {
      background: {
        light: "#D0D1E1",
        dark: "#322951"
      },
      textColor: {
        light: mainColors.white,
        dark: mainColors.purplePrimary
      }
    },
  },
  input: {
    background: {
      light: backgroundElements.light,
      dark: backgroundElements.dark
    },
    textColor: {
      light: mainColors.purplePrimary,
      dark: mainColors.white
    },
    placeholder: {
      light:  "#B7B9D2",
      dark: "#D0D1E1"
    },
    label: {
      light: mainColors.darkPurple,
      dark: mainColors.white
    }
  }
}