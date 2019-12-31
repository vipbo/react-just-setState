import React from 'react';


/**
 *  被包裹--组件，title是解构的写法
*/
export default function inner({ title }) {
    return (
        <div>inner--{title}</div>
    )
}