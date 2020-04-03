// @flow
import React from 'react';

import '@mu5h3r/uikit/core/icon.scss';

type Props = {
  children: any
}

export default function Icon(props: Props) {
  return <i className="icon material-icons">{props.children}</i>
}