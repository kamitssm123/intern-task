import React, { useState } from "react";
import "./style.css";

interface DynamicTableProps {
  data: Record<string, any> | Record<string, any>[];
}

const Table: React.FC<DynamicTableProps> = ({ data }) => {
  const [expandedRow, setExpandedRow] = useState<number | null>(null);
  const [newData, setNewData] = useState<
    Record<string, any> | Record<string, any>[]
  >(data);

  const handleRowClick = (
    index: number,
    rowData: Record<string, any> | null
  ) => {
    if (expandedRow === index) {
      setExpandedRow(null);
      setNewData(data); // Reset newData to the original data when collapsing
    } else {
      setExpandedRow(index);
      setNewData(rowData || data);
    }
  };

  return (
    <div className="main-container">
      <div className="sub-container">
        {Object.entries(data).map(([key, value], index) => (
          <div className="heading-element">
            <div className="cell">{key}</div>
            <div className="cell">
              {typeof value === "object" ? (
                <button
                  className="button"
                  onClick={() => handleRowClick(index, value)}
                >
                  {key}
                </button>
              ) : (
                value
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="table-row">
        {expandedRow !== null && (
          <div className="table-cell">
            <Table data={newData} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Table;
