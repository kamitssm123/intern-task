import React from "react";

interface DynamicTableProps {
  data: Record<string, any>;
}

const Temp: React.FC<DynamicTableProps> = ({ data }) => {
  const keys = Object.keys(data);
  return (
    <div>
      <table>
        <thead>
          <tr>
            {keys.map((key) => (
                <th key={key}>{key}</th>
            ))}
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default Temp;