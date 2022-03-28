import {
    GET_FRIENDS_POST_REQUEST,
    GET_FRIENDS_POST_SUCCESS,
    GET_FRIENDS_POST_FAILURE
} from "../../Types";


export const getFriendsPostRequest = () => {
    return {
        type: GET_FRIENDS_POST_REQUEST
    }
}

export const getFriendsPostSuccess = (posts) => {
    return {
        type: GET_FRIENDS_POST_SUCCESS,
        payload: posts
    }
}

export const getFriendsPostFailure = (error) => {
    return {
        type: GET_FRIENDS_POST_FAILURE,
        payload: error
    }
}