import React from 'react'
import "./Widgets.css"

function Widgets() {
    return <div className='widgets'>
            <div className='widgets__one'>
            <iframe  title ="insta" src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Finstagram%2Fposts%2F4811115055640967&show_text=true&width=210" width="210" height="678" style={{border:"none", overflow:"hidden"}} scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
            </div>
            <div className='widgets__two'>
            <iframe title ="meta" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fsquarespace&tabs=timeline&width=210&height=1000&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="210" height="1000" style={{border:"none", overflow:"hidden"}} scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
            </div>
        </div>

}

export default Widgets
