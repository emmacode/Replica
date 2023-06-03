import { useMutation, useQuery } from "react-query";

import { request } from "../utils/axiosUtils";

// For registering new users
const addNewUser = (newUser) => {
    return request({ url: `/users`, method: 'post', data: newUser })
}

export const useAddNewUser = () => {
    return useMutation(addNewUser)
}



// For getting existing users
const getUserInfo = () => {
    return request({ url: `/users` })
}

export const useUserInfo = () => {
    return useQuery('registered-users', getUserInfo)
}



// For login
const loginUser = (checkUser) => {
    return request({ url: `/users`, method: 'post', data: checkUser })
}

export const useLoginUser = () => {
    return useMutation(loginUser);
}