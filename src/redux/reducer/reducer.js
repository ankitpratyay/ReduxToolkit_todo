import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = {
    lists: []
}

const listSlice = createSlice({
    name: 'list',
    initialState,
    reducers: {
        addList: (state, action) => {
            const list = {
                id: nanoid(),
                text: action.payload,
            }
            state.lists.push(list)
        },
        removeList: (state, action) => {
            state.lists = state.lists.filter((list) => list.id !== action.payload)
        }
    }

})

export const { addList, removeList } = listSlice.actions;
export default listSlice.reducer;