import React from 'react';
import { Button } from '../form';

import './style/tab.scss';

type Props = {
  children: any
}

export default function Tab(props: Props) {
  return <Button type="tab" {...props} />
}