import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Paper,
  Typography,
} from "@mui/material"

export default function Check({ value, onChange }) {
  const handleChange = (event) => {
    if (event.target.checked) {
      onChange([...value, event.target.name])
    } else {
      onChange(value.filter((item) => item !== event.target.name))
    }
  }

  return (
    <Paper elevation={3} sx={{ p: 2.4 }}>
      <FormControl>
        <FormLabel sx={{ color: "red" }} required>
          <Typography fontSize={17} color={"black"} variant="span">
            Checkbox
          </Typography>
        </FormLabel>
        <br />
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={value.includes("option1")}
                onChange={handleChange}
                name="option1"
              />
            }
            label="Option 1"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={value.includes("option2")}
                onChange={handleChange}
                name="option2"
              />
            }
            label="Option 2"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={value.includes("option3")}
                onChange={handleChange}
                name="option3"
              />
            }
            label="Option 3"
          />
        </FormGroup>
      </FormControl>
    </Paper>
  )
}
