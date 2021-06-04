import React from 'react';

import '@mu5h3r/uikit/form/button.scss';

type Props = {
  className ?: string,
  type ?: 'button' | 'reset' | 'submit',
  variant ?: 'text' | 'outlined' | 'contained',
  title ?: string,
  children : string,
  disabled ?: boolean,
  active ?: boolean,
  onClic ?: () => void
}

export default function Button(props: Props) {
  const {className, type, variant, children, disabled, active, title, onClick} = props;

  const classes = [`uikit-button-${variant || 'contained'}`, 'uikit-button'];
  if (className) classes.push(className);
  if (active) classes.push('uikit-active');

  return <button title={title} disabled={disabled} type={type || 'submit'} className={classes.join(' ')} onClick={onClick}>{children}</button>;
}