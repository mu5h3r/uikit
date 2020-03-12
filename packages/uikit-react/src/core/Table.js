import React from 'react';
import '@mu5h3r/uikit/core/table.scss';

export default function Table(props) {
  let classes = 'table';
  if (props.className) classes += ' ' + props.className;
  return <table className={classes}>{props.children}</table>;
}

export function TableRow(props) {
  const classes = props.className || '';
  return <tr className={classes}>{props.children}</tr>;
}

export function TableCell(props) {
  const classes = props.className || '';
  return <td className={classes}>{props.children}</td>;
}

export function TableHead(props) {
  return <thead><tr>{props.children}</tr></thead>;
}

export function TableBody(props) {
  const handleScroll = (e) => {
    if (props.onScroll) props.onScroll(e);
  }

  return <tbody onScroll={handleScroll}>{props.children}</tbody>;
}

export function TableFoot(props) {
  return <tfoot><tr>{props.children}</tr></tfoot>;
}
