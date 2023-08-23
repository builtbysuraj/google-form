import { Button } from "@mui/material"

export default function ClearButton({ onClick }) {
  return (
    <div>
      <Button onClick={onClick}>Clear form</Button>
    </div>
  )
}
