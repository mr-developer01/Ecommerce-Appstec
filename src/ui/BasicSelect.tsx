import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect({
  label = '',
  options = [],
  selected,
  setSelected,
}: any) {
  //   const handleChange = (event:any) => {
  //     setAge(event.target.value);
  //   };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selected}
          label={label}
          onChange={(e) => setSelected(e.target.value)}
        >
          {options.map((data: any, index: number) => (
            <MenuItem key={index} value={data}>
              {data}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
