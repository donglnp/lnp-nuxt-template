const palette = (variant) => ({
  DEFAULT: 'var(--color-' + variant + ')',
  50: 'var(--color-' + variant + '-50)',
  100: 'var(--color-' + variant + '-100)',
  200: 'var(--color-' + variant + '-200)',
  300: 'var(--color-' + variant + '-300)',
  400: 'var(--color-' + variant + '-400)',
  500: 'var(--color-' + variant + '-500)',
  600: 'var(--color-' + variant + '-600)',
  700: 'var(--color-' + variant + '-700)',
  800: 'var(--color-' + variant + '-800)',
  900: 'var(--color-' + variant + '-900)',
});

export const colors = {
  primary: palette('primary'),
  secondary: palette('secondary'),
  success: palette('success'),
  danger: palette('danger'),
  warning: palette('warning'),
  info: palette('info'),
  gray: palette('gray'),
  dark: palette('dark'),
  white: 'var(--color-white)',
  black: 'var(--color-black)',
  blue: 'var(--color-blue)',
  indigo: 'var(--color-indigo)',
  purple: 'var(--color-purple)',
  pink: 'var(--color-pink)',
  red: 'var(--color-red)',
  orange: 'var(--color-orange)',
  yellow: 'var(--color-yellow)',
  green: 'var(--color-green)',
  teal: 'var(--color-teal)',
  cyan: 'var(--color-cyan)',
  light: 'var(--color-light)',
};
