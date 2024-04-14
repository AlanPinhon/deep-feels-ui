import { interfaceColors } from './colors';

export const lightTheme = {
  button: {
    primary: {
      background: interfaceColors.button.primary.background.light,
      hover: interfaceColors.button.primary.hoverBackground.light,
      textColor: interfaceColors.button.primary.textColor.light
    },
    danger: {
      background: interfaceColors.button.danger.background.light,
      hover: interfaceColors.button.danger.hoverBackground.light,
      textColor: interfaceColors.button.danger.textColor.light,
      textColorHover: interfaceColors.button.danger.textColorHover.light,
      border: interfaceColors.border.error.light
    },
    disabled: {
      background: interfaceColors.button.disabled.background.light,
      textColor: interfaceColors.button.disabled.textColor.light
    }
  },
  inputForm: {
    background: interfaceColors.input.background.light ,
    textColor: interfaceColors.input.textColor.light ,
    placeholder: interfaceColors.input.placeholder.light ,
    label: interfaceColors.input.label.light,
    mainBorder: interfaceColors.border.main.light,
    errorBorder: interfaceColors.border.error.light,
    successBorder: interfaceColors.border.success.light,
  },
};

export const darkTheme = {
  button: {
    primary: {
      background: interfaceColors.button.primary.background.dark,
      hover: interfaceColors.button.primary.hoverBackground.dark,
      textColor: interfaceColors.button.primary.textColor.dark
    },
    danger: {
      background: interfaceColors.button.danger.background.dark,
      hover: interfaceColors.button.danger.hoverBackground.dark,
      textColor: interfaceColors.button.danger.textColor.dark,
      textColorHover: interfaceColors.button.danger.textColorHover.dark,
      border: interfaceColors.border.error.dark
    },
    disabled: {
      background: interfaceColors.button.disabled.background.dark,
      textColor: interfaceColors.button.disabled.textColor.dark
    }
  },
  inputForm: {
    background: interfaceColors.input.background.dark ,
    textColor: interfaceColors.input.textColor.dark ,
    placeholder: interfaceColors.input.placeholder.dark ,
    label: interfaceColors.input.label.dark,
    mainBorder: interfaceColors.border.main.dark,
    errorBorder: interfaceColors.border.error.dark,
    successBorder: interfaceColors.border.success.dark,
  },
};
