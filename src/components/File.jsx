import {
  Button,
  FormControl,
  FormLabel,
  Paper,
  Typography,
} from "@mui/material"

export default function File({ value, onChange }) {
  const handleFileChange = (event) => {
    onChange(event.target.files[0])
  }

  return (
    <Paper elevation={3} sx={{ p: 2.4 }}>
      <FormControl>
        <FormLabel sx={{ color: "red" }} required>
          <Typography fontSize={17} color={"black"} variant="span">
            File Upload
          </Typography>
        </FormLabel>
        <br />
        <Button variant="outlined" component="label">
          Upload File
          <input type="file" hidden onChange={handleFileChange} />
        </Button>
      </FormControl>
    </Paper>
  )
}
