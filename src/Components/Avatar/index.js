import React from "react";

export default function Index({ name, image, email }) {
  return (
    <div>
      <span className="mx-3">{!name ? email : name}</span>
      <img
        src={!image ? "/assets/img/avatar.svg" : image}
        className="rounded-circle"
        alt="User profile visual"
        width={35}
      />
    </div>
  );
}
