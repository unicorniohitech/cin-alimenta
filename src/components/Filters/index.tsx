import React from 'react'

import SearchIcon from '@mui/icons-material/Search'
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined'
import {
  FormControl,
  InputLabel,
  MenuItem,
  // Select,
  // SelectChangeEvent,
} from '@mui/material'
import { Box } from '@mui/system'

import * as S from './styles'

const Filters = () => {
  const ordenation = ['Menor preço', 'Maior Preço']
  console.log(ordenation)

  // const [order, setOrder] = React.useState('')

  // const handleChange = (event: SelectChangeEvent) => {
  //   setOrder(event.target.value)
  // }

  return (
    <S.FiltersContainer>
      <div style={{ display: 'flex', height: '2.2rem', marginTop: '0px' }}>
        <S.Search>
          <S.SearchIconWrapper>
            <SearchIcon />
          </S.SearchIconWrapper>
          <S.StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
        </S.Search>
        <S.FilterButton>
          <FilterAltOutlinedIcon />
          Filtro
        </S.FilterButton>
      </div>
      <Box sx={{ minWidth: '35%', display: 'flex', justifyContent: 'end', alignItems: 'center' }}>
        <FormControl
          sx={{ minWidth: '50%', display: 'flex', flexDirection: 'row', marginTop: '0px' }}
          size="small"
        >
          <InputLabel id="demo-simple-select-autowidth-label">Ordernar por</InputLabel>
          <S.FilterSelect
            sx={{ width: '100%', textAlign: 'start' }}
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            // value={order}
            // onChange={handleChange}
            autoWidth
            // defaultValue="Ordenar por"
            label="Ordernar por"
          >
            {ordenation.map((item, index) => (
              <MenuItem value={index}>{item}</MenuItem>
            ))}
          </S.FilterSelect>
        </FormControl>
      </Box>
    </S.FiltersContainer>
  )
}

export default Filters
