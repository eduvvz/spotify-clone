import theme from './theme';

export const customScrollbar = {
  '&::-webkit-scrollbar': {
    width: 10,
  },

  '&::-webkit-scrollbar-thumb': {
    background: theme.palette.primary.light,
    borderRadius: 5,
  },

  '&::-webkit-scrollbar-thumb:HOVER': {
    background: theme.palette.text.secondary,
  },
};
