export const error = (message) => {
  return {
    type: 'ISERROR',
    message
  }
}

export const noterror = (message) => {
  return {
    type: 'NOTERROR',
    message
  }
}
