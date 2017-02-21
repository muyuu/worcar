import React from 'react';
import {Link} from 'react-router';
import {action} from '../../dispatcher/dispatcher';

const PostList = ({list, query, current})=>{

    const showDetail = (e)=>{
        const slug = e.currentTarget.getAttribute('data-slug');
        action.showDetail(slug);
    };

    const items = list.filter(v =>{
        if (query === "") return true;
        return v.title.indexOf(query) !== -1;
    }).map(item =>{
        let selectedClass = "item";
        if (current === item.slug) {
            selectedClass += " item--current";
        }

        return (
            <li key={item.key} className={selectedClass}>
                <Link
                    to={"/post/" + item.slug}
                    onClick={showDetail}
                    data-slug={item.slug}
                    className="item__link"
                >
                    {item.title}
                </Link>
            </li>
        );
    });

    return (
        <ul className="items">
            {items}
        </ul>
    );
};

export default PostList;
