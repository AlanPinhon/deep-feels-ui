export const mainColors = {
  purple_primary: "#534588",
  yellow_primary: "#FFCE02",
  success: "#88DA62",
  danger: "#F04C4C",
  dark_purple: "#2E1A46",
  light_purple: "#888BB4",
  white: "#FFF",
  black: "#000"
}

export const lightTheme = {
  button: {
    primary: {
      background: mainColors.purple_primary,
      hover: "#322951",
      text_color: mainColors.white 
    },
    danger: {
      background: "rgba(255, 255, 255, 0)",
      hover: mainColors.danger,
      border_color: mainColors.danger,
      text_color: mainColors.danger,
      text_color_hover: mainColors.white, 
    },
    disabled: {
      background: "#D0D1E1",
      text_color: mainColors.white 
    },
    feelings: {
      background: mainColors.yellow_primary,
      hover: "#FFE066",
      text_color: "#000"
    }
  }
};

export const darkTheme = {
  button: {
    primary: {
      background: "#63669C",
      hover: "#A1A3C4",
      border_color: "none",
      text_color: mainColors.white
    }, 
    danger: {
      background: "rgba(255, 255, 255, 0)",
      hover: "#F69393",
      border_color: "#F69393",
      text_color: "#F69393",
      text_color_hover: mainColors.white,
    },
    disabled: {
      background: "#322951",
      text_color: mainColors.purple_primary,
    },
    feelings: {
      background: mainColors.yellow_primary,
      hover: "#FFE066",
      text_color: "#000"
    } 
  },
};
