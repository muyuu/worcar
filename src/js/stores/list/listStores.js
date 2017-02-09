import {SEARCH_LIST, SELECT_ITEM} from "../../actions/actionTypes";

// getter setter
export const listProps = [];

const searchList = {
    type  : SEARCH_LIST,
    action: function searchList(query){
        this.setState({
            searchQuery: query,
        });
    }
};

export default {
    searchList,
};
