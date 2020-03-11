import React from 'react';
import '@mu5h3r/uikit/core/table.scss';

export default function Table(props) {
  return <table className="table">{props.children}</table>;
}

export function TableRow(props) {
  return <tr>{props.children}</tr>;
}

export function TableCell(props) {
  return <td>{props.children}</td>;
}

export function TableHead(props) {
  return <thead className="table__head"><tr>{props.children}</tr></thead>;
}

export function TableBody(props) {
  return <tbody className="table__body">{props.children}</tbody>;
}

export function TableFoot(props) {
  return <tfoot className="table__foot"><tr>{props.children}</tr></tfoot>;
}
