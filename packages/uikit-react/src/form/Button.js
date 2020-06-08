import React from 'react';

import '@mu5h3r/uikit/form/button.scss';

type Props = {
  className ?: string,
  type ?: 'button' | 'reset' | 'submit',
  variant ?: 'text' | 'outlined' | 'contained',
  children : string,
  disabled ?: boolean,
  active ?: boolean,
  onClic ?: () => void
}

export default function Button(props: Props) {
  const {className, type, variant, children, disabled, active, onClick} = props;

  const classes = [`uikit-button-${variant || 'contained'}`, 'uikit-button'];
  if (className) classes.push(className);
  if (active) classes.push('active');

  return <button disabled={disabled} type={type || 'submit'} className={classes.join(' ')} onClick={onClick}>{children}</button>;
}