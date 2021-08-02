import React, { FC } from 'react'

interface ReplyControlProps {}

const ReplyControl: FC<ReplyControlProps> = () => {
    return (
        // <div className='reply-controls is-open'>
        <div className="reply-controls">
            <div className="reply-area">
                <div className="reply-to">
                    Reply To: <span className="text ml-2">User1</span>
                </div>
                <div className="fj-editor-input">
                    <input name="title" placeholder="Topic title" type="text" />
                </div>
                <div className="fj-editor">
                    <div className="fj-editor-textarea-wrapper">
                        <textarea name="content" placeholder="Type here" />
                    </div>
                    <div className="fj-editor-preview-wrapper">
                        <div className="preview">
                            <p>....</p>
                        </div>
                    </div>
                </div>
                <div className="submit-area">
                    <div className="send mr-auto">
                        <button className="btn btn-main bg-blue py-2 ttu">Reply</button>
                        <a className="btn py-2 ttu gray-10">Cancel</a>
                    </div>
                    <div>
                        <a className="btn py-2 ttu gray-10">hide preview</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReplyControl
