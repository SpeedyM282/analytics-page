import React from "react";
import Table from '../Table';
import Button from '../Button';
import TableRow from "../Table/TableRow";
import { TABLE_HEADERS, PRODUCTS_DATA } from "../../data";
import './style.scss';

const Box = ({isButton, isTable, isTableRow}) => {
  const style = {
    padding: isButton ? '20px 25px' : 
              isTableRow ? '15px' : '0'
  };

  return (
    <div style={style} className="box">
      {
        isButton &&
        <Button />
      }
      {
        isTable &&
        <Table />
        // <Table 
        //   headers={TABLE_HEADERS}
        //   minCellWidth={40}
        //   tableContent={
        //       PRODUCTS_DATA.map(e => {
        //       return <TableRow key={e.id} order={e.order} inputs={e.inputs} />
        //     })
        //   }
        // />
      }
    </div>
  );
}

export default Box;