import React, { useState } from "react";
import { dbService, storageService } from "fbase"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPencilAlt } from "@fortawesome/free-solid-svg-icons";


const Nweet = ({ nweetObj, isOwner }) => {
    const [editing, setEditing] = useState(false);
    const [newNweet, setNewNweet] = useState(nweetObj.text);    // newNweet은 text이다.

    const onDeleteClick = async () => {
        const ok = window.confirm("Are you sure you wnat to delete this nweet?");
        if (ok) {
            console.info(nweetObj);
            await dbService.doc(`nweets/${nweetObj.id}`).delete();

            /* injun */
            if (nweetObj.attachmentUrl != "") {
                //const attachmentRef = storageService.ref().child(`${nweetObj.creatorId}/${nweetObj.}`);
                const attachmentRef = storageService.refFromURL(nweetObj.attachmentUrl);
                // Delete the file
                attachmentRef.delete().then(function () {
                    // File deleted successfully
                    console.log("success delete!!!");
                }).catch(function (error) {
                    // Uh-oh, an error occurred!
                    console.log("..? what happend?");
                });
            }
        }
    }

    const toggleEditing = () => setEditing((prev) => !prev);

    const onSubmit = async (event) => {
        event.preventDefault();
        await dbService.doc(`nweets/${nweetObj.id}`).update({
            text: newNweet,
        });
        setEditing(false);
    }

    const onChange = (event) => {
        const { target: { value }, } = event;
        setNewNweet(value);
    }

    return (
        <div className="nweet">
            {editing ? (
                <>
                    <form onSubmit={onSubmit} className="container nweetEdit">
                        <input
                            type="text"
                            placeholder="Edit your nweet"
                            value={newNweet}
                            required
                            autoFocus
                            onChange={onChange}
                            className="formInput"
                        />
                        <input type="submit" value="Update Nweet" className="formBtn" />
                    </form>
                    <span onClick={toggleEditing} className="formBtn cancelBtn">
                        Cancel
              </span>
                </>
            ) : (
                    <>
                        <h4>{nweetObj.text}</h4>
                        {nweetObj.attachmentUrl && <img src={nweetObj.attachmentUrl} />}
                        {isOwner && (
                            <div class="nweet__actions">
                                <span onClick={onDeleteClick}>
                                    <FontAwesomeIcon icon={faTrash} />
                                </span>
                                <span onClick={toggleEditing}>
                                    <FontAwesomeIcon icon={faPencilAlt} />
                                </span>
                            </div>
                        )}
                    </>
                )}
        </div>
    );
};

export default Nweet;