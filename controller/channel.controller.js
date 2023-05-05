const getAllData = async () => {
  try {
    const response = await fetch("./data/channels.json")
    const data = await response.json()
    return data
  } catch (error) {
    console.error(error)
  }
}

export { getAllData }