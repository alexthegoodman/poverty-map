import * as React from "react";

import { TestTableProps } from "./TestTable.d";

import { useTable } from "react-table";

const TestTable: React.FC<TestTableProps> = ({
  ref = null,
  className = "",
  onClick = (e) => console.info("Click TestTable"),
  data = null,
}) => {
  const columns = React.useMemo(
    () => [
      {
        Header: "Date",
        accessor: "date", // accessor is the "key" in the data
        // Cell: (date) => <>{date}</>,
      },
      {
        Header: "Issue",
        accessor: "issue",
      },
      {
        Header: "Metric A",
        accessor: "metricA",
      },
      {
        Header: "Metric B",
        accessor: "metricB",
      },
    ],
    []
  ) as any;

  // const tableData = React.useMemo(
  //   () => [
  //     {
  //       col1: "Hello",
  //       col2: "World",
  //     },
  //     {
  //       col1: "react-table",
  //       col2: "rocks",
  //     },
  //     {
  //       col1: "whatever",
  //       col2: "you want",
  //     },
  //   ],
  //   []
  // );

  const tableInstance = useTable({ columns, data });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    // apply the table props
    <table {...getTableProps()}>
      <thead>
        {
          // Loop over the header rows
          headerGroups.map((headerGroup) => (
            // Apply the header row props
            <tr {...headerGroup.getHeaderGroupProps()}>
              {
                // Loop over the headers in each row
                headerGroup.headers.map((column) => (
                  // Apply the header cell props
                  <th {...column.getHeaderProps()}>
                    {
                      // Render the header
                      column.render("Header")
                    }
                  </th>
                ))
              }
            </tr>
          ))
        }
      </thead>
      {/* Apply the table body props */}
      <tbody {...getTableBodyProps()}>
        {
          // Loop over the table rows
          rows.map((row) => {
            // Prepare the row for display
            prepareRow(row);
            return (
              // Apply the row props
              <tr {...row.getRowProps()}>
                {
                  // Loop over the rows cells
                  row.cells.map((cell) => {
                    // Apply the cell props
                    return (
                      <td {...cell.getCellProps()}>
                        {
                          // Render the cell contents
                          cell.render("Cell")
                        }
                      </td>
                    );
                  })
                }
              </tr>
            );
          })
        }
      </tbody>
    </table>
  );
};

export default TestTable;
