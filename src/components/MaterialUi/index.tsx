import TextField from "@mui/material/TextField"
import { styled } from "@mui/material/styles"
import { Button as Buttonbala, CircularProgress, Select } from "@mui/material"

const CustomInput = styled(TextField)({
  width: "100%",
  "& label.Mui-focused": {
    color: "#ff427f",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "green",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#FF577F",
    },
    "&:hover fieldset": {
      borderColor: "#ff427f",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#ff427f",
    },
  },
  "& input": {
    color: "#fff",
  },
  "& label ": {
    color: "#fff",
  },
})

const CustomButton = styled(Buttonbala)({
  "&.MuiButton-contained": {
    backgroundColor: "var(--color-primary)",
    height: 48,
    width: "100%",
    "&:hover": {
      backgroundColor: "var(--color-primary-focus)",
    },
  },
  "&.MuiButton-outlined": {
    color: "#fff",
    borderColor: "var(--grey-2)",
    height: 48,
    width: "100%",
    "&:hover": {
      backgroundColor: "var(--grey-2)",
    },
  },
})

const CustomLoader = styled(CircularProgress)({
  size: "5px",
  thickness: 1,
  color: "#FF577F",
})

const CustomSelect = styled(Select)({
  color: "#fff",

  "& fieldset": {
    borderColor: "#FF577F",
  },
  "&:hover.MuiInputBase-root fieldset": {
    borderColor: "#ff427f",
  },
  "&.MuiInputBase-root.Mui-focused fieldset": {
    borderColor: "#ff427f",
  },

  "& .MuiSvgIcon-root": {
    color: "#fff",
  },
})

export { CustomButton, CustomInput, CustomLoader, CustomSelect }
