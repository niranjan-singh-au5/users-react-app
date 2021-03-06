import axios from "axios";
// export const userLogin = async () => {
//    var data = await axios.get("https://reqres.in/api/login");
//    return (dispatch) => {
//       data.then(res)
//    }
// }

export const userLogin = (username, password) => {
   const data = axios({
      method: "POST",
      url: "https://reqres.in/api/login",
      data: {
         "email": username,
         "password": password
      }
   })
   return data
}

export const userDashboard = (page) => {
   let data = axios.get(`https://reqres.in/api/users?page=${page}`)

   return (dispatch) => {
      data.then(res => {
         dispatch({
            type: "user-dashboard",
            payload: res.data
         })
      }).catch(err => console.log(err))
   }
}

export const specificUser = (id) => {

   let data = axios.get(`https://reqres.in/api/users/${id}`)

   return (dispatch) => {
      data.then(res => {
         dispatch({
            type: "user-details",
            payload: res.data
         })
      }).catch(err => console.log(err))
   }
}

