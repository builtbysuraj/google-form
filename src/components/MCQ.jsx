import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Paper,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material"

export default function MCQ({ value, onChange }) {
  const handleChange = (e) => {
    onChange(e.target.value)
  }
  return (
    <Paper sx={{ my: 4, p: 2 }} elevation={3}>
      <FormControl>
        <FormLabel sx={{ color: "red" }} id="mcq-radio" required>
          <Typography fontSize={17} color={"black"} variant="span">
            MCQ
          </Typography>
        </FormLabel>
        <br />
        <RadioGroup
          aria-labelledby="mcq-radio"
          name="radio-buttons-group"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel
            value="Option 1"
            control={<Radio />}
            label="Option 1"
          />
          <FormControlLabel
            value="Option 2"
            control={<Radio />}
            label="Option 2"
          />
          <FormControlLabel
            value="Option 3"
            control={<Radio />}
            label="Option 3"
          />
        </RadioGroup>
      </FormControl>
    </Paper>
  )
}
