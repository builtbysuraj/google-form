import { Box, Container, Typography } from "@mui/material"
import { useState } from "react"
import Check from "./components/Check"
import CheckGrid from "./components/CheckGrid"
import ClearButton from "./components/ClearButton"
import Drop from "./components/Drop"
import File from "./components/File"
import Header from "./components/Header"
import Inputs from "./components/Inputs"
import LinearRadio from "./components/LinearRadio"
import MCQ from "./components/MCQ"
import RadioGrid from "./components/RadioGrid"
import Submit from "./components/Submit"

export default function App() {
  const [formState, setFormState] = useState({
    mcq: "",
    check: [],
    shortAnswer: "",
    paragraph: "",
    drop: "",
    file: "",
    linearRadio: "",
    radioGrid: { row1: "", row2: "", row3: "" },
    checkGrid: { row1: [], row2: [], row3: [] },
  })
  const [successMessage, setSuccessMessage] = useState("")

  const handleForm = (e) => {
    e.preventDefault()
    if (
      formState.mcq &&
      formState.check.length &&
      formState.shortAnswer &&
      formState.paragraph &&
      formState.drop &&
      formState.file &&
      formState.linearRadio &&
      formState.radioGrid.row1 &&
      formState.radioGrid.row2 &&
      formState.radioGrid.row3 &&
      formState.checkGrid.row1.length &&
      formState.checkGrid.row2.length &&
      formState.checkGrid.row3.length
    ) {
      setSuccessMessage("Submitted Successfully")
    } else {
      setSuccessMessage("Please fill all fields before submitting")
    }
  }

  const handleClear = () => {
    setFormState({
      mcq: "",
      check: [],
      shortAnswer: "",
      paragraph: "",
      drop: "",
      file: "",
      linearRadio: "",
      radioGrid: { row1: "", row2: "", row3: "" },
      checkGrid: { row1: [], row2: [], row3: [] },
    })
    setSuccessMessage("")
  }

  return (
    <Container style={{ width: "45rem" }} sx={{ my: 2 }}>
      <Header />
      <form onSubmit={handleForm}>
        <MCQ
          value={formState.mcq}
          onChange={(value) =>
            setFormState((prevState) => ({ ...prevState, mcq: value }))
          }
        />
        <Check
          value={formState.check}
          onChange={(value) =>
            setFormState((prevState) => ({ ...prevState, check: value }))
          }
        />
        <Inputs
          name="Short Answer"
          value={formState.shortAnswer}
          onChange={(value) =>
            setFormState((prevState) => ({ ...prevState, shortAnswer: value }))
          }
        />
        <Inputs
          name="ParaGraph"
          size="40rem"
          value={formState.paragraph}
          onChange={(value) =>
            setFormState((prevState) => ({ ...prevState, paragraph: value }))
          }
        />
        <Drop
          value={formState.drop}
          onChange={(value) =>
            setFormState((prevState) => ({ ...prevState, drop: value }))
          }
        />
        <File
          value={formState.file}
          onChange={(value) =>
            setFormState((prevState) => ({ ...prevState, file: value }))
          }
        />
        <LinearRadio
          value={formState.linearRadio}
          onChange={(value) =>
            setFormState((prevState) => ({ ...prevState, linearRadio: value }))
          }
        />
        <RadioGrid
          value={formState.radioGrid}
          onChange={(value) =>
            setFormState((prevState) => ({ ...prevState, radioGrid: value }))
          }
        />
        <CheckGrid
          value={formState.checkGrid}
          onChange={(value) =>
            setFormState((prevState) => ({ ...prevState, checkGrid: value }))
          }
        />
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Submit />
          <ClearButton onClick={handleClear} />
        </Box>
        {successMessage && (
          <Box sx={{ my: 2 }}>
            <Typography variant="h6" color="green">
              {successMessage}
            </Typography>
          </Box>
        )}
      </form>
      <Typography py={2} variant="body2">
        Never submit passwords through Google Forms.
      </Typography>
      <Typography variant="body2" textAlign={"center"}>
        This content is neither created nor endorsed by Google. Report Abuse -
        Terms of Service - Privacy Policy
      </Typography>
      <Typography py={2} textAlign={"center"} variant="h4">
        Google Forms
      </Typography>
    </Container>
  )
}
