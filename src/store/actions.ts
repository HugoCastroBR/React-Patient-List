import { PageActions } from 'store/index';

export const SetLoading = (value: boolean) => {
  return PageActions.SET_LOADING(value)
}

export const SetTheme = (value: "dark" | "light") => {
  return PageActions.SET_THEME(value)
}