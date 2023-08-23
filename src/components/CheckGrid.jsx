import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  Paper,
  Typography,
} from "@mui/material"

export default function CheckGrid({ value, onChange }) {
  const handleChange = (row) => (event) => {
    const { checked, value: checkboxValue } = event.target
    if (checked) {
      onChange({ ...value, [row]: [...(value[row] || []), checkboxValue] })
    } else {
      onChange({
        ...value,
        [row]: (value[row] || []).filter((v) => v !== checkboxValue),
      })
    }
  }

  return (
    <div>
      <Paper sx={{ my: 4, p: 2 }} elevation={3}>
        <FormControl>
          <FormLabel sx={{ color: "red" }} required>
            <Typography fontSize={17} color={"black"} variant="span">
              Tick box Grid
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
            <div
              style={{
                marginLeft: "4.5rem",
                position: "relative",
              }}
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
                control={
                  <Checkbox
                    checked={(value?.row1 || []).includes("1")}
                    onChange={handleChange("row1")}
                    value="1"
                  />
                }
                label="Column 1"
                labelPlacement="top"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={(value?.row1 || []).includes("2")}
                    onChange={handleChange("row1")}
                    value="2"
                  />
                }
                label="Column 2"
                labelPlacement="top"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={(value?.row1 || []).includes("3")}
                    onChange={handleChange("row1")}
                    value="3"
                  />
                }
                label="Column 3"
                labelPlacement="top"
              />
            </div>

            {/* second */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "1.7rem",
              }}
            >
              <span style={{ marginTop: "5px" }}>Row 2</span>

              <FormControlLabel
                control={
                  <Checkbox
                    checked={(value?.row2 || []).includes("4")}
                    onChange={handleChange("row2")}
                    value="4"
                  />
                }
                labelPlacement="top"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={(value?.row2 || []).includes("5")}
                    onChange={handleChange("row2")}
                    value="5"
                  />
                }
                labelPlacement="top"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={(value?.row2 || []).includes("6")}
                    onChange={handleChange("row2")}
                    value="6"
                  />
                }
                labelPlacement="top"
              />
            </div>

            {/* third */}

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "1.7rem",
              }}
            >
              <span style={{ marginTop: "5px" }}>Row 3</span>

              <FormControlLabel
                control={
                  <Checkbox
                    checked={(value?.row3 || []).includes("7")}
                    onChange={handleChange("row3")}
                    value="7"
                  />
                }
                labelPlacement="top"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={(value?.row3 || []).includes("8")}
                    onChange={handleChange("row3")}
                    value="8"
                  />
                }
                labelPlacement="top"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={(value?.row3 || []).includes("9")}
                    onChange={handleChange("row3")}
                    value="9"
                  />
                }
                labelPlacement="top"
              />
            </div>
          </section>
        </FormControl>
      </Paper>
    </div>
  )
}
