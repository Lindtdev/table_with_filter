// MyTableComponent.tsx

"use client";

import React from 'react';

import { DataGrid, GridRowsProp, GridColDef ,GridToolbarContainer ,GridToolbarDensitySelector,GridToolbar,  DEFAULT_GRID_AUTOSIZE_OPTIONS,  useGridApiRef,

} from '@mui/x-data-grid';

import Button from '@mui/material/Button';

import Box from '@mui/material/Box';

import Stack from '@mui/material/Stack';

import { styled } from '@mui/material/styles';




const rows: GridRowsProp = [
    { id: 1, col1: 'ESSONO ELLA', col2: 'Junior',col3:'junior@gmail.com',col4:'674030405' ,col5:'5 ans'},
    { id: 2, col1: 'LIBAWO', col2: 'Dieudonné',col3:'dieudonné@gmail.com',col4:'674018405',col5:'25 ans' },
    { id: 3, col1: 'MBALLA TSILLA', col2: 'Linda' ,col3:'lindajunior@gmail.com',col4:'653289756',col5:'22 ans'},
    { id: 4, col1: 'MBALLA TSILLA', col2: 'Grace',col3:'grace@gmail.com',col4:'',col5:'10 ans' },
    { id: 5, col1: 'NDZIE TSILLA', col2: 'Rose',col3:'rose@gmail.com',col4:'674030405',col5:'40 ans' },
    { id: 6, col1: 'TIKU', col2: 'Vanelie' ,col3:'vanelie@gmail.com',col4:'674030400',col5:'26 ans'},
    { id: 7, col1: 'DJUEGA', col2: 'Vanina' ,col3:'vanelie@gmail.com',col4:'690396158',col5:'22 ans'},
    { id: 8, col1: 'DJEUEGO', col2: 'Tatiana' ,col3:'tatiana@gmail.com',col4:'690909090',col5:'25 ans'},
    { id: 9, col1: 'ESSOBO', col2: 'Audrey' ,col3:'audrey@gmail.com',col4:'',col5:'25 ans'},
    { id: 10, col1: 'TINDA', col2: 'Steves' ,col3:'steves@gmail.com',col4:'690909090',col5:'25 ans'},
];
  

const columns: GridColDef[] = [
    { field: 'col1', headerName: 'Noms', width: 150,hideable: false },
    { field: 'col2', headerName: 'Prenoms', width: 150 },
    { field: 'col3', headerName: 'Email', width: 200 },
    { field: 'col4', headerName: 'Telephone', width: 190 },
    { field: 'col5', headerName: 'Age', width: 150 },



];


const StyledGridOverlay = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '70%',
    '& .ant-empty-img-1': {
      fill: theme.palette.mode === 'light' ? '#aeb8c2' : '#262626',
    },
    '& .ant-empty-img-2': {
      fill: theme.palette.mode === 'light' ? '#f5f5f7' : '#595959',
    },
    '& .ant-empty-img-3': {
      fill: theme.palette.mode === 'light' ? '#dce0e6' : '#434343',
    },
    '& .ant-empty-img-4': {
      fill: theme.palette.mode === 'light' ? '#fff' : '#1c1c1c',
    },
    '& .ant-empty-img-5': {
      fillOpacity: theme.palette.mode === 'light' ? '0.8' : '0.08',
      fill: theme.palette.mode === 'light' ? '#f5f5f5' : '#fff',
    },
}));

  


const TableComponent: React.FC = () => {

    const [nbRows, setNbRows] = React.useState(6);

    const removeRow = () => setNbRows((rows) => Math.max(0, rows - 1));
  
    const addRow = () => setNbRows((rows) => Math.min(100, rows + 1))

    function CustomNoRowsOverlay() {
        return (
          <StyledGridOverlay>
            <svg
              style={{ flexShrink: 0 }}
              width="240"
              height="200"
              viewBox="0 0 184 152"
              aria-hidden
              focusable="false"
            >
              <g fill="none" fillRule="evenodd">
                <g transform="translate(24 31.67)">
                  <ellipse
                    className="ant-empty-img-5"
                    cx="67.797"
                    cy="106.89"
                    rx="67.797"
                    ry="12.668"
                  />
                  <path
                    className="ant-empty-img-1"
                    d="M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z"
                  />
                  <path
                    className="ant-empty-img-2"
                    d="M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"
                  />
                  <path
                    className="ant-empty-img-3"
                    d="M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z"
                  />
                </g>
                <path
                  className="ant-empty-img-3"
                  d="M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z"
                />
                <g className="ant-empty-img-4" transform="translate(149.65 15.383)">
                  <ellipse cx="20.654" cy="3.167" rx="2.849" ry="2.815" />
                  <path d="M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z" />
                </g>
              </g>
            </svg>
            <Box sx={{ mt: 1 }}>No Rows</Box>
          </StyledGridOverlay>
        );
    }
    
    
    function CustomToolbar() {
        return (
          <GridToolbarContainer>
            <GridToolbarDensitySelector />
          </GridToolbarContainer>
        );
      }



    return (
        
        <Box sx={{ width: '100%' }}>
            <Stack direction="row" spacing={1} sx={{ mb: 1 }}>

                <div style={{ height: 470, width: '100%' }} className='mt-2 flex flex-col gap-3'>
                    <div className="flex gap-3 items-center">
                        <Button size="small" onClick={removeRow} className='border border-rounded cursor-pointer text-[white] bg-[brown] hover:bg-[brown]  hover:opacity-[0.4] hover:text-[white]  p-2'>
                            Remove a row
                        </Button> 

                        <Button size="small" onClick={addRow} className='border border-rounded cursor-pointer  hover:bg-[blue] hover:opacity-[0.4]  text-[white] bg-[blue]   p-2'>
                            Add a row
                        </Button>

                        
                    </div>

                    <DataGrid
                     autoHeight 
                     localeText={{
                      toolbarDensity: 'Large',
                      toolbarDensityLabel: 'Large',
                      toolbarDensityCompact: 'Large',
                      toolbarDensityStandard: 'Large',
                      toolbarDensityComfortable: 'Large',
                    }}
                    slots={{toolbar: GridToolbar, noRowsOverlay: CustomNoRowsOverlay ,
                  }}

                     sx={{ '--DataGrid-overlayHeight': '470px' }}
                     rows={rows.slice(0, nbRows)}
                     columns={columns}
                    />

                </div>
            </Stack>

        </Box>

    
   );
};

export default TableComponent;
