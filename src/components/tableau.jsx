import React, { useState, useEffect, useRef } from 'react';

const EditableTable = () => {
  const [tableData, setTableData] = useState([
    { id: 1, name: "Cy Ganderton", job: "Quality Control Specialist", company: "Littel, Schaden and Vandervort", location: "Canada", lastLogin: "12/16/2020", color: "default" },
    { id: 2, name: "Hart Hagerty", job: "Desktop Support Technician", company: "Zemlak, Daniel and Leannon", location: "United States", lastLogin: "12/5/2020", color: "default" },
  ]);

  const [editCell, setEditCell] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newRow, setNewRow] = useState({
    name: "",
    job: "",
    company: "",
    location: "",
    lastLogin: "",
    color: "default"
  });
  
  const inputRef = useRef(null);

  const handleColorChange = (rowIndex) => {
    setTableData(prev => prev.map((row, idx) => {
      if (idx === rowIndex) {
        const currentColor = row.color;
        let newColor = 'default';
        if (currentColor === 'default') newColor = 'green';
        else if (currentColor === 'green') newColor = 'red';
        else if (currentColor === 'red') newColor = 'default';
        return { ...row, color: newColor };
      }
      return row;
    }));
  };

  const getRowStyle = (color) => {
    switch (color) {
      case 'green':
        return 'bg-green-100 hover:bg-green-200';
      case 'red':
        return 'bg-red-100 hover:bg-red-200';
      default:
        return 'hover:bg-gray-50';
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!editCell) return;

      const { rowIndex, field } = editCell;
      const fields = ['name', 'job', 'company', 'location', 'lastLogin', 'color'];
      const currentFieldIndex = fields.indexOf(field);

      switch (e.key) {
        case 'Tab':
          e.preventDefault();
          if (currentFieldIndex < fields.length - 1) {
            setEditCell({
              rowIndex,
              field: fields[currentFieldIndex + 1]
            });
          } else if (rowIndex < tableData.length - 1) {
            setEditCell({
              rowIndex: rowIndex + 1,
              field: fields[0]
            });
          }
          break;
        case 'Enter':
          e.preventDefault();
          if (rowIndex < tableData.length - 1) {
            setEditCell({
              rowIndex: rowIndex + 1,
              field
            });
          }
          break;
        case 'Escape':
          setEditCell(null);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [editCell, tableData]);

  useEffect(() => {
    if (editCell && inputRef.current) {
      inputRef.current.focus();
    }
  }, [editCell]);

  const handleCellClick = (rowIndex, field) => {
    if (field !== 'color') {
      setEditCell({ rowIndex, field });
    }
  };

  const handleChange = (e, rowIndex, field) => {
    const newValue = e.target.value;
    setTableData(prev =>
      prev.map((row, idx) =>
        idx === rowIndex ? { ...row, [field]: newValue } : row
      )
    );
  };

  const handleBlur = () => {
    setEditCell(null);
  };

  const isEditing = (rowIndex, field) => 
    editCell?.rowIndex === rowIndex && editCell?.field === field;

  const handleNewRowChange = (field, value) => {
    setNewRow(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleAddRow = (e) => {
    e.preventDefault();
    const newId = Math.max(...tableData.map(row => row.id)) + 1;
    setTableData(prev => [...prev, { id: newId, ...newRow }]);
    setNewRow({
      name: "",
      job: "",
      company: "",
      location: "",
      lastLogin: "",
      color: "default"
    });
    setIsModalOpen(false);
  };

  return (
    <div className="space-y-4">
      <button
        onClick={() => setIsModalOpen(true)}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
      >
        + Ajouter une ligne
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-2xl">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Ajouter une nouvelle ligne</h2>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                ×
              </button>
            </div>

            <form onSubmit={handleAddRow} className="space-y-4">
              {Object.keys(newRow).map(field => {
                if (field === 'color') return null;
                return (
                  <div key={field} className="grid grid-cols-4 gap-4 items-center">
                    <label className="font-medium text-gray-700 capitalize">
                      {field}
                    </label>
                    <input
                      type="text"
                      value={newRow[field]}
                      onChange={(e) => handleNewRowChange(field, e.target.value)}
                      className="col-span-3 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                );
              })}

              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 border rounded-lg hover:bg-gray-50"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                  Ajouter
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Table */}
      <div className="w-full border rounded-lg overflow-hidden bg-white">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left font-medium text-gray-500">#</th>
                <th className="px-4 py-3 text-left font-medium text-gray-500">Entreprise</th>
                <th className="px-4 py-3 text-left font-medium text-gray-500">Produit</th>
                <th className="px-4 py-3 text-left font-medium text-gray-500">prix Unitaire</th>
                <th className="px-4 py-3 text-left font-medium text-gray-500">Localisation</th>
                <th className="px-4 py-3 text-left font-medium text-gray-500">Probabilte</th>
                <th className="px-4 py-3 text-left font-medium text-gray-500">Commentaire</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {tableData.map((row, rowIndex) => (
                <tr 
                  key={row.id}
                  className={`transition-colors ${getRowStyle(row.color)}`}
                >
                  <td className="px-4 py-2 font-medium text-gray-900">
                    {row.id}
                  </td>
                  {Object.keys(row).map(field => {
                    if (field === 'id') return null;
                    if (field === 'color') {
                      return (
                        <td key={field} className="p-2">
                          <button
                            onClick={() => handleColorChange(rowIndex)}
                            className="px-4 py-1 rounded border hover:bg-gray-100"
                          >
                            Changer statut
                          </button>
                        </td>
                      );
                    }
                    return (
                      <td 
                        key={field}
                        onClick={() => handleCellClick(rowIndex, field)}
                        className="p-0 cursor-pointer"
                      >
                        {isEditing(rowIndex, field) ? (
                          <input
                            ref={inputRef}
                            className="w-full h-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="text"
                            value={row[field]}
                            onChange={(e) => handleChange(e, rowIndex, field)}
                            onBlur={handleBlur}
                          />
                        ) : (
                          <div className="px-4 py-2">
                            {row[field]}
                          </div>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EditableTable;