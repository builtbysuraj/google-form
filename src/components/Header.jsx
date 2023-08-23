import { Divider, Link, Paper, Typography } from "@mui/material"

export default function Header() {
  return (
    <Paper sx={{ p: 2.4 }} elevation={3}>
      <Typography py={1.4} variant="h4">Assignment Task</Typography>
      <Divider variant="fullWidth" />

      <p>
        <strong>example@gmail.com</strong> <Link href="#">Switch account</Link>
      </p>

      <p>
        The name and photo associated with your Google account will be recorded
        when you upload files and submit this form. Your email is not part of
        your response.
      </p>
      <Divider />
      <Typography pt={2} color={"red"}>
        * Indicates required question
      </Typography>
    </Paper>
  )
}
