import React from 'react';
import { Table } from 'antd';
import { Resizable } from 'react-resizable';
import './style.css';

const ResizableTitle = (props) => {
  const { onResize, width, ...restProps } = props;

  if (!width) {
    return <th {...restProps} />;
  }

  return (
    <Resizable
      width={width}
      minConstraints={[50, 0]}
      height={0}
      handle={
        <span
          className="react-resizable-handle"
          onClick={(e) => {
            e.stopPropagation();
          }}
        />
      }
      onResize={onResize}
      draggableOpts={{ enableUserSelectHack: false }}
    >
      <th {...restProps} />
    </Resizable>
  );
};

class Demo extends React.Component {
  state = {
    columns: [
      {
        title: 'Date',
        dataIndex: 'date',
        width: 200,
      },
      {
        title: 'Amount',
        dataIndex: 'amount',
        width: 100,
      },
      {
        title: 'Type',
        dataIndex: 'type',
        width: 100,
      },
      {
        title: 'Note',
        dataIndex: 'note',
        width: 100,
      },
    ],
  };

  components = {
    header: {
      cell: ResizableTitle,
    },
  };

  data = [
    {
      key: 0,
      date: '2018-02-11',
      amount: 120,
      type: 'income',
      note: 'transfer',
    },
    {
      key: 1,
      date: '2018-03-11',
      amount: 243,
      type: 'income',
      note: 'transfer',
    },
    {
      key: 2,
      date: '2018-04-11',
      amount: 98,
      type: 'income',
      note: 'transfer',
    },
  ];

  handleResize =
    (index) =>
    (e, { size }) => {
      this.setState(({ columns }) => {
        const nextColumns = [...columns];
        nextColumns[index] = {
          ...nextColumns[index],
          width: size.width,
        };
        return { columns: nextColumns };
      });
    };

  render() {
    const columns = this.state.columns.map((col, index) => ({
      ...col,
      onHeaderCell: (column) => ({
        width: column.width,
        onResize: this.handleResize(index),
      }),
    }));

    return (
      <Table
        bordered
        components={this.components}
        columns={columns}
        dataSource={this.data}
        pagination={false}
        style={{width: '99%'}}
      />
    );
  }
}

 export default Demo




// import React, { useMemo } from 'react';
// import MaterialReactTable from 'material-react-table';
// import { PRODUCTS_DATA } from '../../data';

// const Example = () => {
//   const columns = useMemo(
//     () => [
//       {
//         accessorKey: 'firstName',
//         header: 'First Name', //uses the default width from defaultColumn prop
//       },
//       {
//         accessorKey: 'lastName',
//         header: 'Last Name',
//         enableResizing: false, //disable resizing for this column
//       },
//       {
//         accessorKey: 'email',
//         header: 'Email Address',
//         size: 200, //increase the width of this column
//       },
//       {
//         accessorKey: 'city',
//         header: 'City',
//         size: 120, //decrease the width of this column
//       },
//       {
//         accessorKey: 'country',
//         header: 'Country',
//         size: 100, //decrease the width of this column
//       },
//     ],
//     [],
//   );

//   return (
//     <MaterialReactTable
//       columns={columns}
//       data={PRODUCTS_DATA}
//       //optionally override the default column widths
//       defaultColumn={{
//         maxSize: 400,
//         minSize: 80,
//         size: 150, //default size is usually 180
//       }}
//       enableColumnResizing
//       columnResizeMode="onChange" //default
//     />
//   );
// };

// export default Example;



// import { useState, useCallback, useEffect, useRef } from "react";
// import "./style.css";

// const createHeaders = (headers) => {
//   return headers.map((item) => ({
//     text: item,
//     ref: useRef()
//   }));
// };

// const Table = ({ headers, minCellWidth, tableContent }) => {
//   const [tableHeight, setTableHeight] = useState("auto");
//   const [activeIndex, setActiveIndex] = useState(null);
//   const tableElement = useRef(null);
//   const columns = createHeaders(headers);

//   useEffect(() => {
//     setTableHeight(tableElement.current.offsetHeight);
//   }, []);

//   const mouseDown = (index) => {
//     setActiveIndex(index);
//   };

//   const mouseMove = useCallback(
//     (e) => {
//       const gridColumns = columns.map((col, i) => {
//         if (i === activeIndex) {
//           const width = e.clientX - col.ref.current.offsetLeft;

//           if (width >= minCellWidth) {
//             return `${width}px`;
//           }
//         }
//         return `${col.ref.current.offsetWidth}px`;
//       });

//       tableElement.current.style.gridTemplateColumns = `${gridColumns.join(
//         " "
//       )}`;
//     },
//     [activeIndex, columns, minCellWidth]
//   );

//   const removeListeners = useCallback(() => {
//     window.removeEventListener("mousemove", mouseMove);
//     window.removeEventListener("mouseup", removeListeners);
//   }, [mouseMove]);

//   const mouseUp = useCallback(() => {
//     setActiveIndex(null);
//     removeListeners();
//   }, [setActiveIndex, removeListeners]);

//   useEffect(() => {
//     if (activeIndex !== null) {
//       window.addEventListener("mousemove", mouseMove);
//       window.addEventListener("mouseup", mouseUp);
//     }

//     return () => {
//       removeListeners();
//     };
//   }, [activeIndex, mouseMove, mouseUp, removeListeners]);

//   return (
//       <table className="table" ref={tableElement}>
//         <thead>
//           <tr className="table__tr">
//             {columns.map(({ ref, text }, i) => (
//               <th className="table__tr-th" ref={ref} key={text}>
//                 <span>{text}</span>
//                 <div
//                   style={{ height: tableHeight }}
//                   onMouseDown={() => mouseDown(i)}
//                   className={`resize-handle ${
//                     activeIndex === i ? "active" : "idle"
//                   }`}
//                   />
//               </th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {tableContent}
//         </tbody>
//       </table>
//   );
// };

// export default Table;




// import React from "react";
// import TableRow from './TableRow';
// import { PRODUCTS_DATA } from "../../data";
// import './style.scss';

// const Table = () => {
//   return (
//     <div className="table" >
//       {PRODUCTS_DATA.map(e => {
//         return <TableRow key={e.id} order={e.order} inputs={e.inputs} />
//       })}
//     </div>
//   )
// }

// export default Table;