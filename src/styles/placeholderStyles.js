// general styles (the same for both types of placeholders) are to be changed in the general object
// in order to avoid the necessity to change them in more than one place
const general = {
  textAlign: "center",
  margin: "20px",
  borderRadius: "0.4rem",
}

const placeholderStyles = {
  username: {
    // general styles
    textAlign: general.textAlign,
    margin: general.margin,
    borderRadius: general.borderRadius,
    // specific styles
    width: "15vw",
    height: "30px",
  },

  repo: {
    // general styles
    textAlign: general.textAlign,
    margin: general.margin,
    borderRadius: general.borderRadius,
    // specific styles
    width: "93vw",
    height: "80px",
  }
}

export default placeholderStyles;