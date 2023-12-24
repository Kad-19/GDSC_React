import React from "react";
import Tag from "./Tag";
import "./TaskCard.css";
import deleteIcon from "../assets/delete.png";
import Status from "./Status";

const TaskCard = ({ title, tags, status, handleDelete, changeStatus, index }) => {
  const statusList = ["todo", "doing", "done"];
  const filteredStatusList = statusList.filter((item) => item != status);
  return (
    <article className="task_card">
      <p className="task_text">{title}</p>
      <div className="change_status">
        {filteredStatusList.map((item, i) => (
          <Status key={i} statusName={item} index={index} changeStatus={changeStatus}/>
        ))}
      </div>

      <div className="task_card_bottom_line">
        <div className="task_card_tags">
          {tags.map((tag, index) => (
            <Tag tagName={tag} key={index} selected />
          ))}
        </div>
        <div className="task_delete" onClick={() => handleDelete(index)}>
          <img src={deleteIcon} className="delete_icon" />
        </div>
      </div>
    </article>
  );
};

export default TaskCard;
