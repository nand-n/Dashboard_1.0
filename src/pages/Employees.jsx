import React, { useRef } from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Search,
  Toolbar,
  Inject,
  PdfExport,
  ExcelExport,
} from "@syncfusion/ej2-react-grids";

import { employeesData, employeesGrid } from "../data/dummy";

import { Header } from "../components";
import { WordExport } from "@syncfusion/ej2/documenteditor";

const Employees = () => {
  // const gridRef = useRef();
  let grid;
  const toolbarClick = (arg) => {
    if (arg.item.id.includes("pdfexport")) {
      grid.pdfExport();
    } else if (arg.item.id.includes("exelexport")) {
      grid.excelExport();
    }
  };

  return (
    <div className="m-2 md:m-10 p-2 md:p-10  bg-white rounded-3xl">
      <Header catagory="page" title="Employees" />
      <GridComponent
        ref={(g) => (grid = g)}
        id="girdcomp"
        dataSource={employeesData}
        allowPaging
        toolbar={["Search", "PdfExport", "ExcelExport"]}
        allowPdfExport
        allowExcelExport
        toolbarClick={toolbarClick}
        width={"auto"}
      >
        <ColumnsDirective>
          {employeesGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Search, Toolbar, PdfExport, ExcelExport]} />
      </GridComponent>
    </div>
  );
};

export default Employees;
