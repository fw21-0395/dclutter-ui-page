// Helper function to render cell content based on type
export const renderCellContent = (column, row, columnId) => {
  const value = row[columnId];

  if (row.id === 2 && row.growth && columnId !== "name") {
    return {
      content: (
        <div className="flex items-center text-green-600">
          <span className="mr-0.5">↑</span>
          <span>{row.growth}%</span>
        </div>
      ),
      isReactNode: true,
    };
  }

  if (column.type === "percentage") {
    return {
      content: `${value}%`,
      isReactNode: false,
    };
  }

  if (column.type === "currency") {
    return {
      content: `₹${value.toLocaleString()}`,
      isReactNode: false,
    };
  }

  if (column.type === "number") {
    return {
      content: value.toLocaleString(),
      isReactNode: false,
    };
  }

  return {
    content: value,
    isReactNode: false,
  };
};
