import { useId } from "react";

export function GuideDataTable({ caption, columns, rows, rowHeaders = true, note }: { caption: string; columns: string[]; rows: string[][]; rowHeaders?: boolean; note?: string }) {
  const id = useId();
  return (
    <figure className="guide-figure">
      <div className="table-scroll" role="region" aria-labelledby={id} tabIndex={0}>
        <table className="guide-table">
          <caption id={id}>{caption}</caption>
          <thead>
            <tr>{columns.map(column => <th key={column} scope="col">{column}</th>)}</tr>
          </thead>
          <tbody>
            {rows.map((row, r) => (
              <tr key={r}>
                {row.map((cell, c) => (rowHeaders && c === 0 ? <th key={c} scope="row">{cell}</th> : <td key={c}>{cell}</td>))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {note && <figcaption className="guide-note">{note}</figcaption>}
    </figure>
  );
}
