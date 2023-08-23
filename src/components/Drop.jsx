import {
  FormControl,
  FormLabel,
  MenuItem,
  Paper,
  Select,
  Typography,
} from "@mui/material"

export default function Drop({ value, onChange }) {
  const handleSelectChange = (event) => {
    onChange(event.target.value)
  }

  return (
    <Paper sx={{ my: 4, p: 2.4 }} elevation={3}>
      <FormControl sx={{ minWidth: 120 }}>
        <FormLabel sx={{ color: "red" }} required>
          <Typography color={"black"} variant="span">
            Drop down
          </Typography>
        </FormLabel>
        <br />
        <Select
          value={value}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          onChange={handleSelectChange}
        >
          <MenuItem value="">Choose</MenuItem>
          <MenuItem value={"option1"}>Option 1</MenuItem>
          <MenuItem value={"option2"}>Option 2</MenuItem>
          <MenuItem value={"option3"}>Option 3</MenuItem>
        </Select>
      </FormControl>
    </Paper>
  )
}
