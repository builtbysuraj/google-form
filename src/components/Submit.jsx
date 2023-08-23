import { Button } from "@mui/material"

export default function Submit({ onClick }) {
  return (
    <Button variant="contained" color="primary" type="submit" onClick={onClick}>
      Submit
    </Button>
  )
}
