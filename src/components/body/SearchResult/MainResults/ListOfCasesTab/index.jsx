import React from 'react';
import './ListOfCases.css';
import { Typography, Select } from 'antd';
import { displayOptions, sortingOptions } from '../../../../../constant/constants';

// const fakeDataListOfCases = [
//   {
//     id: 0,
//     title: 'Lim Jun Kai (Lin Jun Kai) v Orientus Contry Clubs & Resort Pte Ltd DC Suit No 1010 of 2011',
//     options: [
//       {
//         label: 'Awards Summary',
//         text: 'Lorem ipsum dolor sit amet, consectetur adip',
//       },
//       {
//         label: 'Keywords Summary',
//         text: 'Lorem ipsum dolor sit amet, consectet mutated',
//       }
//     ]
//   },
//   {
//     id: 1,
//     title: 'Muhammad Rahmatullah Bin Sudarman v ITW Contruction Products (Singapore) Pte Ltd and another DC Suit No 1664 of 2017',
//     options: [
//       {
//         label: 'Awards Summary',
//         text: 'Lorem ipsum dolor sit amet, consectetur adip',
//       },
//       {
//         label: 'Keywords Summary',
//         text: 'Lorem ipsum dolor sit amet, consectet mutated',
//       }
//     ]
//   },
//   {
//     id: 2,
//     title: 'Panchatcharam Gunaseelan v Lee Zhi Li, Alan DC Suit No 1934 of 2018',
//     options: [
//       {
//         label: 'Awards Summary',
//         text: 'Lorem ipsum dolor sit amet, consectetur adip',
//       },
//       {
//         label: 'Keywords Summary',
//         text: 'Lorem ipsum dolor sit amet, consectet mutated',
//       }
//     ]
//   },
//   {
//     id: 3,
//     title: 'John Doe v ABC Corporation DC Suit No 1234 of 2022',
//     options: [
//       {
//         label: 'Awards Summary',
//         text: 'Lorem ipsum dolor sit amet, consectetur adip',
//       },
//       {
//         label: 'Keywords Summary',
//         text: 'Lorem ipsum dolor sit amet, consectet mutated',
//       }
//     ]
//   },
//   {
//     id: 4,
//     title: 'Jane Smith v XYZ Corporation DC Suit No 5678 of 2023',
//     options: [
//       {
//         label: 'Awards Summary',
//         text: 'Lorem ipsum dolor sit amet, consectetur adip',
//       },
//       {
//         label: 'Keywords Summary',
//         text: 'Lorem ipsum dolor sit amet, consectet mutated',
//       }
//     ]
//   },
//   {
//     id: 5,
//     title: 'Michael Brown v QRS Corporation DC Suit No 9876 of 2024',
//     options: [
//       {
//         label: 'Awards Summary',
//         text: 'Lorem ipsum dolor sit amet, consectetur adip',
//       },
//       {
//         label: 'Keywords Summary',
//         text: 'Lorem ipsum dolor sit amet, consectet mutated',
//       }
//     ]
//   },
//   {
//     id: 6,
//     title: 'Emily Johnson v UVW Corporation DC Suit No 3456 of 2025',
//     options: [
//       {
//         label: 'Awards Summary',
//         text: 'Lorem ipsum dolor sit amet, consectetur adip',
//       },
//       {
//         label: 'Keywords Summary',
//         text: 'Lorem ipsum dolor sit amet, consectet mutated',
//       }
//     ]
//   },
//   {
//     id: 7,
//     title: 'David Lee v XYZ Corporation DC Suit No 6789 of 2026',
//     options: [
//       {
//         label: 'Awards Summary',
//         text: 'Lorem ipsum dolor sit amet, consectetur adip',
//       },
//       {
//         label: 'Keywords Summary',
//         text: 'Lorem ipsum dolor sit amet, consectet mutated',
//       }
//     ]
//   },
//   {
//     id: 8,
//     title: 'Sarah Wilson v UVW Corporation DC Suit No 2345 of 2027',
//     options: [
//       {
//         label: 'Awards Summary',
//         text: 'Lorem ipsum dolor sit amet, consectetur adip',
//       },
//       {
//         label: 'Keywords Summary',
//         text: 'Lorem ipsum dolor sit amet, consectet mutated',
//       }
//     ]
//   },
//   {
//     id: 9,
//     title: 'Matthew Davis v QRS Corporation DC Suit No 7890 of 2028',
//     options: [
//       {
//         label: 'Awards Summary',
//         text: 'Lorem ipsum dolor sit amet, consectetur adip',
//       },
//       {
//         label: 'Keywords Summary',
//         text: 'Lorem ipsum dolor sit amet, consectet mutated',
//       }
//     ]
//   }
// ];

const ListOfCases = () => {

  const handleChangeDisplay = (value) => {
    console.log(`selected ${value}`);
  };

  const handleChangeSort = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <div
      className='list-of-cases-container'
    >
      <div className='list-of-cases-sort-box'>
        <div className='list-of-cases-box-result'>
          <Typography>
            <b>10</b> cases found
          </Typography>
          <Typography>
            (includes 0 with globel awards)
          </Typography>
        </div>
        <div className='list-of-case-box-control'>
          <div
            className='list-of-case-display-control'
          >
            <Typography>
              Display Summary Options:
            </Typography>
            <Select
              defaultValue="hideAll"
              style={{
                width: '100%',
                marginRight: '12px'
              }}
              onChange={handleChangeDisplay}
              options={displayOptions}
            />
          </div>
          <div
            className='list-of-case-sort-control'
          >
            <Typography>
              Results Sorting Options:
            </Typography>
            <Select
              defaultValue="relevance"
              style={{
                width: '100%',
                marginRight: '12px',
              }}
              onChange={handleChangeSort}
              options={sortingOptions}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ListOfCases