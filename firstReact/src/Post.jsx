import React from "react";
import './post.css';



const Post = ({ author, image, content, date }) => {

    return (
        <>
            <div className="post__block">
                <div className="post__about">
                    <div className="post__aboutDescription">
                        <img className="post__photo" src={author.photo} alt="" />
                        <div>
                            <div className="post__description">
                                <h2 className="post__name">{author.name}</h2>
                                <p className="post__nickname">{author.nickname}</p>
                                <p className="post__date">{date}</p>
                            </div>
                            <p className="post__description">{content}</p>
                        </div>
                    </div>
                    <img className="post__me" src={image} alt="" />
                </div>
            </div>

        </>
    )
}

export default Post