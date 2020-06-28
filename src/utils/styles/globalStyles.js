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

export const onHoverImageAlbuns = {
  position: 'absolute',
  display: 'none',
  alignItems: 'center',
  justifyContent: 'center',
  width: 24,
  height: 24,
  borderRadius: '50%',
  backgroundColor: theme.palette.primary.main,
  opacity: 0.9,
  right: 5,
  top: 5,
};
