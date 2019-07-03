import { createActions, createReducer } from 'reduxsauce'

const { Types, Creators } = createActions({
    userRequest: ['data'],
    userSuccess: ['data'],
    userFailure: null
})

export const UserTypes = Types
export default Creators

INITIAL_STATE = {
    data: [],
    loading: false,
    error: false,
}

export const reducer = createReducer({
    [Types.USER_REQUEST]: (state) => ({ ...state, loading: true }),
    [Types.USER_SUCCESS]: (state, action) => ({ ...state, data: [...state.data, action.data], loading: false }),
    [Types.USER_FAILURE]: (state, action) => ({ ...state, loading: false, error: true }),
})