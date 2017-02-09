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

const selectItem = {
    type  : SELECT_ITEM,
    action: function selectItem(slug){
        this.setState({
            currentItem: slug,
        });
    }
};


export default {
    searchList,
    selectItem,
};
