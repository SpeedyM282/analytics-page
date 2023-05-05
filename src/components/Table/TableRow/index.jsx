import React from "react";
import Input from '../../Input';
import burger from '../../../assets/icons/burger.svg';
import options from '../../../assets/icons/options.svg';

const TableRow = ({order, inputs}) => {
  const inputsGenerator = () => {
    const arr = [];
    for(let [key, value] of Object.entries(inputs)) {
      arr.push(
        <td key={key} className="table-row__input" >
            <Input 
              val={value} 
              withLink={key === 'unitName' || key === 'productName'} 
            />
        </td>
      );
    }
    return arr;
  }

  return (
      <tr>
        <td className="table-row__number" >
          <img src={burger} alt="Not Found" />
          {`${order}`}
        </td>

        <td className="table-row__options" >
          <img src={options} alt="Not Found" />
        </td>
          {
            inputsGenerator()
          }
      </tr>
  );
};

export default TableRow;




// import React from "react";
// import Input from '../../Input';
// import burger from '../../../assets/icons/burger.svg';
// import options from '../../../assets/icons/options.svg';
// import './style.scss';

// const TableRow = ({order, inputs}) => {
//   const inputsGenerator = () => {
//     const arr = [];
//     for(let [key, value] of Object.entries(inputs)) {
//       arr.push(
//         <div key={key} className="table-row__inputs-input" >
//             <Input 
//               val={value} 
//               // width='fit-content' 
//               withLink={key === 'unitName' || key === 'productName'} 
//             />
//         </div>
//       );
//     }
//     return arr;
//   }

//   return (
//     <div className="table-row" >
//       <div className="table-row__number" >
//         <img src={burger} alt="Not Found" />
//         {`${order}`}
//       </div>

//       <div className="table-row__options" >
//         <img src={options} alt="Not Found" />
//       </div>

//       <div className="table-row__inputs" >
//         {
//           inputsGenerator()
//         }
//       </div>
//     </div>
//   )
// }

// export default TableRow;