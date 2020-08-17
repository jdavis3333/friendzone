import axios from "axios";
export default {
  postChat: (chat)=>{
    return axios.post("api/chat", chat);
  },
  getChats: (chat)=>{
    return axios.get("api/chat", chat);
  }
}
