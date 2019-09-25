import { GET_TODOS } from '../actions/types'

const itemsReducer = (state = [], action) => {
    switch (action.type) {
        case GET_TODOS:
            return action.payload
        // case (ADD):
        //     newState = Object.assign({}, state)
        //     newState.items.push({
        //         content: { summary: action.item.content.summary, description: action.item.content.description },
        //         time: {
        //             years: action.item.time.years, months: action.item.time.months, days: action.item.time.days,
        //             hours: action.item.time.hours, minutes: action.item.time.minutes
        //         },
        //         features: { index: newState.taskIndex, isStarred: false, category: "items" }
        //     })
        //     newState.taskIndex++;
        //     return newState
        // case UPDATEITEM:
        //     updateItem(action.item)
        //     let index = state.items.findIndex((element) => action.item.id == element.id)
        //     let newState = { ...state };
        //     newState.items[index] = action.item
        //     return newState
        // case (SETDONE):
        //     newState = Object.assign({}, state)
        //     let indexToSetDone = newState.items.indexOf(newState.items.find(element => element.features.index === action.index))
        //     newState.items[indexToSetDone].features.category = newState.items[indexToSetDone].features.category === "items" ? "done" : "items";
        //     return newState
        // case (SETSTARRED):
        //     newState = Object.assign({}, state)
        //     let indexToSetStarred = newState.items.indexOf(newState.items.find(element => element.features.index === action.index))
        //     newState.items = [...newState.items]
        //     newState.items[indexToSetStarred].features.isStarred = !newState.items[indexToSetStarred].features.isStarred;
        //     return newState

        default:
            return state;
    }

}
export default itemsReducer