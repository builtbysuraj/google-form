import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Paper,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material"

export default function LinearRadio({ value, onChange }) {
  const handleChange = (event) => {
    onChange(event.target.value)
  }

  return (
    <Paper sx={{ my: 4, p: 2 }} elevation={3}>
      <FormControl>
        <FormLabel sx={{ color: "red" }} required>
          <Typography fontSize={17} color={"black"} variant="span">
            Linear Scale
          </Typography>
        </FormLabel>
        <br />
        <RadioGroup
          row
          style={{
            marginLeft: "6rem",
          }}
          value={value}
          onChange={handleChange}
        >
          <span style={{ marginTop: "35px" }}>Worst</span>
          <>
            <FormControlLabel
              value="1"
              control={<Radio />}
              label="1"
              labelPlacement="top"
            />
            <FormControlLabel
              value="2"
              control={<Radio />}
              label="2"
              labelPlacement="top"
            />
            <FormControlLabel
              value="3"
              control={<Radio />}
              label="3"
              labelPlacement="top"
            />
            <FormControlLabel
              value="4"
              control={<Radio />}
              label="4"
              labelPlacement="top"
            />
            <FormControlLabel
              value="5"
              control={<Radio />}
              label="5"
              labelPlacement="top"
            />
          </>
          <span style={{ marginTop: "35px" }}>Best</span>
        </RadioGroup>
      </FormControl>
    </Paper>
  )
}
