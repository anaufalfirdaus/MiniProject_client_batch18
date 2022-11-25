import axios from "axios"
import config from "../config/config"

const story = async()=>{
  try {
    const result = await axios.get(`${config.domain}/api/alumni/story`)
    return result.data
  } catch (error) {
    return await error.message
  }
}

const testi = async()=>{
  try {
    const result = await axios.get(`${config.domain}/api/alumni/testi`)
    return result.data
  } catch (error) {
    return await error.message
  }
}

export default {story, testi}