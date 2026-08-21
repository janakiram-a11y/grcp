import { createContext, useContext } from 'react';

export const ThemeVersionContext = createContext({
  version: 'v1',
  setVersion: () => {},
});

export function useThemeVersion() {
  return useContext(ThemeVersionContext);
}
