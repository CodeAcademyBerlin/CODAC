import React, { useState } from "react";
import "./bubble.css";
import Image from "next/image";
import deleteIconBlack from "../assets/delete-icon-black.svg";
import deleteIconWhite from "../assets/delete-icon-white.svg";
import editIconBlack from "../assets/edit-icon-black.svg";
import editIconWhite from "../assets/edit-icon-white.svg";
import pinIconBlack from "../assets/pin-icon-black.svg";
import pinIconWhite from "../assets/pin-icon-white.svg";
import pinnedIconBlack from "../assets/pinned-icon-black.svg";
import pinnedIconWhite from "../assets/pinned-icon-white.svg";

interface BubbleProps {
  /**
   * Is it for dark mode?
   */
  darkmode?: boolean;
  /**
   * Is it my message?
   */
  editable?: boolean;
  /**
   * Function to handle the edit button click
   */
  onEdit?: () => void;
  /**
   * Function to handle the delete button click
   */
  onDelete?: () => void;
  /**
   * Function to handle the pin button click
   */
  onPin?: () => void;
  /**
   * Content of the message
   */
  content: string;
  /**
   * Who is the author?
   */
  author?: string;
  /**
   * Timestamp
   */
  timestamp: string; // Changed the type to string
}

/**
 * Primary UI component for user interaction
 */
export const Bubble = ({
  darkmode = false,
  editable = true,
  content,
  author,
  timestamp,
  onEdit,
  onDelete,
  onPin,
  ...props
}: BubbleProps) => {
  const isDarkmode = darkmode ? "darkmode" : "lightmode";
  const deleteIcon = darkmode ? deleteIconWhite : deleteIconBlack;
  const editIcon = darkmode ? editIconWhite : editIconBlack;
  const pinIcon = darkmode ? pinIconWhite : pinIconBlack;
  const pinnedIcon = darkmode ? pinnedIconWhite : pinnedIconBlack;
  const [pinned, setPinned] = useState(false);

  const handleEditClick = () => {
    if (onEdit) {
      onEdit();
    }
  };

  const handleDeleteClick = () => {
    if (onDelete) {
      onDelete();
    }
  };

  const handlePinClick = () => {
    if (onPin) {
      onPin();
    }
    setPinned((prevPinned) => !prevPinned);
  };

  const formatDate = (timestamp: string) => {
    const date = new Date(timestamp);
    const today = new Date();
    const yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);
    let formattedDate = "";
    if (date.toDateString() === today.toDateString()) {
      formattedDate = "Today";
    } else if (date.toDateString() === yesterday.toDateString()) {
      formattedDate = "Yesterday";
    } else {
      formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    }
    formattedDate += ` @ ${date.getHours().toString().padStart(2, "0")}:${date
      .getMinutes()
      .toString()
      .padStart(2, "0")}`;

    return formattedDate;
  };

  const messageDate = formatDate(timestamp);

  return (
    <div
      className={`bubble-container ${isDarkmode} ${editable ? "my-message" : "your-message"}`}
      {...props}
    >
      <div>
        <div className="bubble-dashboard">
          {editable ? (
            <>
              <p className="legend">
                <span className="author">me</span> ·{" "}
                <span className="timestamp"> {messageDate}</span>
              </p>
              <button onClick={handleEditClick}>
                <Image className="icon" src={editIcon} alt="edit" width={30} height={30} />
              </button>
              <button onClick={handleDeleteClick}>
                <Image className="icon" src={deleteIcon} alt="delete" width={30} height={30} />
              </button>
              <button onClick={handlePinClick}>
                <Image
                  className="icon"
                  src={pinned ? pinnedIcon : pinIcon}
                  alt="pin"
                  width={30}
                  height={30}
                />
              </button>
            </>
          ) : (
            <>
              <p className="legend">
                <span className="author">{author}</span> ·{" "}
                <span className="timestamp">{messageDate}</span>
              </p>
              <button onClick={handlePinClick}>
                <Image
                  className="icon"
                  src={pinned ? pinnedIcon : pinIcon}
                  alt="pin"
                  width={30}
                  height={30}
                />
              </button>
            </>
          )}
        </div>
        <div className="bubble-message">{content}</div>
      </div>
    </div>
  );
};
