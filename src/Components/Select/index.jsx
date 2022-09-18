import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectComponent() {
  const [course, setCourse] = React.useState('all');

  const handleChange = (event) => {
    setCourse(event.target.value);
  };
  console.log(course);

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Курсы</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={course}
          onChange={handleChange}
          autoWidth
          label="Курсы"
        >
          <MenuItem value="all">
            <em>Все курсы</em>
          </MenuItem>
          <MenuItem value={'Foundation'}>Foundation</MenuItem>
          <MenuItem value={'Developing'}>Программирование</MenuItem>
          <MenuItem value={'Design'}>Дизайн</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
