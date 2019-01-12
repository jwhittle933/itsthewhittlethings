import React from 'react'

const SubNav = ({ article1, article2, article3 }) =>
    <div id="subNav" className="subNav">
            <a href="/blog/34">{article1}</a>
            <a href="/blog/29">{article2}</a>
            <a href="/blog/20">{article3}</a>
    </div>

export default SubNav