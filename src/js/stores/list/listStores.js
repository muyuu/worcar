import {SEARCH_LIST, BACK_LIST, MOVE_NEW_POST} from "../../actions/actionTypes";
import {browserHistory} from 'react-router';

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

const moveNewPost = {
    type  : MOVE_NEW_POST,
    action: function moveNewPost(){
        this.setState({
            isDetail: true,
        });
        browserHistory.push('/new');
    }
};

const backList = {
    type  : BACK_LIST,
    action: function backList(){
        this.setState({
            isDetail: false,
        });
    }
};

export default {
    searchList,
    backList,
    moveNewPost,
};
