// @flow

import React from 'react';
import '@mu5h3r/uikit/core/table.scss';

type TableProps = {
  children: any,
  className?: string
}

type TableCellProps = TableProps & {
  header?: bool,
  wrappable?: bool
}

type TableBodyProps = TableProps & {
  onScroll?: (e: Event) => void
}

export default function Table(props: TableProps) {
  let classes = 'table';
  if (props.className) classes += ' ' + props.className;
  return <table className={classes}>{props.children}</table>;
}

export function TableRow(props: TableProps) {
  const classes = props.className || '';
  return <tr className={classes}>{props.children}</tr>;
}

export function TableCell(props: TableCellProps) {
  let classes = props.className || '';
  if (props.wrappable) classes += ' uikit-wrappable';
  return props.header
          ? <th className={classes}>{props.children}</th>
          : <td className={classes}>{props.children}</td>;
}

export function TableHead(props: TableProps) {
  return <thead><tr>{props.children}</tr></thead>;
}

export function TableBody(props: TableBodyProps) {
  const handleScroll = (e) => {
    if (props.onScroll) props.onScroll(e);
  }

  return <tbody onScroll={handleScroll}>{props.children}</tbody>;
}

export function TableFoot(props: TableProps) {
  return <tfoot><tr>{props.children}</tr></tfoot>;
}
