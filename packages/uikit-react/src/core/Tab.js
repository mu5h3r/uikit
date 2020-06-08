import React from 'react';
import { Button } from '../form';

import '@mu5h3r/uikit/core/tab.scss';

type Props = {
  children: any
}

export default function Tab(props: Props) {
  return <Button variant="tab" {...props} />
}