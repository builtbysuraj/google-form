import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Paper,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material"

export default function RadioGrid({ value, onChange }) {
  const handleChange = (row) => (event) => {
    onChange({ ...value, [row]: event.target.value })
  }

  return (
    <div>
      <Paper sx={{ my: 4, p: 2 }} elevation={3}>
        <FormControl>
          <FormLabel sx={{ color: "red" }} required>
            <Typography fontSize={17} color={"black"} variant="span">
              Multi choice Grid
            </Typography>
          </FormLabel>
          <br />
          <section
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "2rem",
              justifyContent: "space-between",
              marginLeft: "8rem",
            }}
          >
            {/* first */}
            <RadioGroup
              row
              sx={{
                marginLeft: "4.5rem",
                position: "relative",
              }}
              value={value.row1}
              onChange={handleChange("row1")}
            >
              <span
                style={{
                  marginTop: "35px",
                  marginRight: "1rem",
                  position: "absolute",
                  top: 0,
                  left: -58,
                }}
              >
                Row 1
              </span>
              <FormControlLabel
                value="1"
                control={<Radio />}
                label="Column 1"
                labelPlacement="top"
              />
              <FormControlLabel
                value="2"
                control={<Radio />}
                label="Column 2"
                labelPlacement="top"
              />
              <FormControlLabel
                value="3"
                control={<Radio />}
                label="Column 3"
                labelPlacement="top"
              />
            </RadioGroup>

            {/* second */}
            <RadioGroup
              row
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "1.7rem",
              }}
              value={value.row2}
              onChange={handleChange("row2")}
            >
              <span style={{ marginTop: "5px" }}>Row 2</span>

              <FormControlLabel
                value="4"
                control={<Radio />}
                labelPlacement="top"
              />
              <FormControlLabel
                value="5"
                control={<Radio />}
                labelPlacement="top"
              />
              <FormControlLabel
                value="6"
                control={<Radio />}
                labelPlacement="top"
              />
            </RadioGroup>

            {/* third */}

            <RadioGroup
              row
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "1.7rem",
              }}
              value={value.row3}
              onChange={handleChange("row3")}
            >
              <span style={{ marginTop: "5px" }}>Row 3</span>

              <FormControlLabel
                value="7"
                control={<Radio />}
                labelPlacement="top"
              />
              <FormControlLabel
                value="8"
                control={<Radio />}
                labelPlacement="top"
              />
              <FormControlLabel
                value="9"
                control={<Radio />}
                labelPlacement="top"
              />
            </RadioGroup>
          </section>
        </FormControl>
      </Paper>
    </div>
  )
}
