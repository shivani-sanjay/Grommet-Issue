import './App.css';
import React, { useState, useCallback, useMemo } from 'react';
import { Box, Data, DataTable, DataTableColumns } from 'grommet';
import {
  employeeData,
  columns,
  DEFAULT_EMPLOYEE_TABLE_COLUMNS_VIEW,
  EMPLOYEE_TABLE_COLUMNS_STORAGE_KEY,
} from './data';
function App() {
  const getDefaultEmployeeTableColumnsView = () => {
    const defaultView = { ...DEFAULT_EMPLOYEE_TABLE_COLUMNS_VIEW };
    defaultView.columns = [...defaultView.columns];
    return defaultView;
  };

  const storeEmployeeTableColumnsView = (view) => {
    const storedView = { ...view };
    localStorage.setItem(
      EMPLOYEE_TABLE_COLUMNS_STORAGE_KEY,
      JSON.stringify(storedView)
    );
  };

  const parseEmployeeTableColumnsView = (jsonString) => {
    try {
      const result = JSON.parse(jsonString);

      return {
        columns: result.columns,
        properties: result.properties,
      };
    } catch (error) {
      return getDefaultEmployeeTableColumnsView();
    }
  };

  const getEmployeeTableColumnsView = () => {
    let view;
    const storedView = localStorage.getItem(EMPLOYEE_TABLE_COLUMNS_STORAGE_KEY);
    if (storedView) {
      view = parseEmployeeTableColumnsView(storedView);
      storeEmployeeTableColumnsView(view);
    } else {
      view = getDefaultEmployeeTableColumnsView();
    }
    return {
      columns: view.columns,
      properties: view.properties,
    };
  };

  const [tableColumnsView, setTableColumnsView] = useState(
    getEmployeeTableColumnsView()
  );

  const canStringifyTableColumnsView = (view) => {
    try {
      JSON.stringify(view);
      return true;
    } catch (error) {
      return false;
    }
  };

  const onDataView = useCallback((view) => {
    if (canStringifyTableColumnsView(view)) {
      setTableColumnsView(view);
      storeEmployeeTableColumnsView(view);
    }
  }, []);

  const dataTableColumnsOptions = useMemo(
    () =>
      columns.map((col) => ({
        label: col.header,
        disabled: ['id', 'name', 'age'].includes(col.property),
        pinned: ['id', 'name', 'age'].includes(col.property),
        ...col,
      })),
    []
  );

  return (
    <Box direction="row" width="900px" pad="medium">
      <Data flex gap="medium" view={tableColumnsView} onView={onDataView}>
        <DataTableColumns drop options={dataTableColumnsOptions} />
        <Box
          direction="row-responsive"
          fill="horizontal"
          justify="between"
          align="start"
          overflow="auto"
        >
          <DataTable pin="header" columns={columns} data={employeeData} />
        </Box>
      </Data>
    </Box>
  );
}
export default App;
