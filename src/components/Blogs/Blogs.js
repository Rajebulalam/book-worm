import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='blog-container'>
            <div>
                <h2>What is Context api?</h2>
                <p>The React Context api is a way for a react app to effectively produce global variables that can be passed around. Context provides a way to pass data through the component tree without having to pass props down manually at every level. This is the alternative to prop drilling or moving props from grand parents to child parent and so context is also touted as an easier, lighter approach to state management using redux. It could be reduce duplication of our code and its very effective for us. It can in crease our site performance and its very useful for user attention.</p>
            </div>
            <div>
                <h2>What is Semantic tag?</h2>
                <p>A semantic element clearly describes its meaning to both the browser and the developer. We can easily understand for this using purpose. Elements such as 'header', 'footer', 'article', 'nav', 'aside' and 'section' etc are all considered semantic because they accurately describe the purpose of the element and the type of content that is inside them. it is much easier to read. This is probably the first thing you will notice when looking at the first block of code using semantic elements. This is a small example, but as a programmer you can be reading through hundreds or thousands of lines of code. The easier it is to read and understand that code, the easier it makes your job.</p>
            </div>
            <div>
                <h2>What is the difference between inline-block and inline-block element?</h2>
                <p>The inline and block elements of HTML are one of the important areas where web developers often get confused. Block elements consume the entire width available irrespective of their sufficiency. They always start in a new line and have top and bottom margins. It does not contain any other elements next to it. Inline elements occupy only enough width that is sufficient to it and allows other elements next to it which are inline. Inline elements don't start from a new line and don't have top and bottom margins as block elements have.</p>
            </div>
        </div>
    );
};

export default Blogs;