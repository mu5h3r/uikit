import React from 'react';
import '@mu5h3r/uikit/core/table.scss';

export default function Table(props) {
  return <div className="column table">{props.children}</div>;
}

export function TableHead(props) {
  return <div className="row table__head">{props.children}</div>;
}

export function TableFoot(props) {
  return <div className="row table__foot">{props.children}</div>;
}