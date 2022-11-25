import axios from "axios"
import config from "../config/config"

const bootcamp = async()=>{
  try {
    const result = await axios.get(`${config.domain}/api/program/bootcamp`)
    return result.data
  } catch (error) {
    return await error.message
  }
}

const course = async()=>{
  try {
    const result = await axios.get(`${config.domain}/api/program/course`)
    return result.data
  } catch (error) {
    return await error.message
  }
}

export default {bootcamp, course}