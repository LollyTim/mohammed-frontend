import React from "react";

const ViewAllData = ({ data, onEdit, onDelete }) => {
  return (
    <div
      style={{ padding: "20px", backgroundColor: "white", borderRadius: "8px" }}
    >
      {data.map((item) => (
        <div
          key={item._id}
          style={{
            marginBottom: "16px",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        >
          <div style={{ marginBottom: "8px" }}>
            <strong>{item.title || item.name}</strong>
          </div>
          <div style={{ marginBottom: "8px" }}>
            {item.description || item.content || item.shortDescription}
          </div>
          <div>
            <button
              onClick={() => onEdit(item)}
              style={{
                marginRight: "8px",
                padding: "6px 12px",
                backgroundColor: "#4CAF50",
                color: "white",
                borderRadius: "4px",
              }}
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(item._id)}
              style={{
                padding: "6px 12px",
                backgroundColor: "#F44336",
                color: "white",
                borderRadius: "4px",
              }}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ViewAllData;
