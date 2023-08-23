import {
  FormControl,
  FormLabel,
  Paper,
  TextField,
  Typography,
} from "@mui/material"

export default function Inputs({ name, size, value, onChange }) {
  const handleChange = (event) => {
    onChange(event.target.value)
  }

  return (
    <Paper sx={{ my: 4, p: 2.4 }} elevation={3}>
      <FormControl>
        <FormLabel sx={{ color: "red" }} required>
          <Typography color={"black"} variant="span">
            {name}
          </Typography>
        </FormLabel>
        <br />
        <TextField
          variant="standard"
          placeholder="Your answer"
          required
          sx={{ width: `${size}` }}
          value={value}
          onChange={handleChange}
        />
      </FormControl>
    </Paper>
  )
}
