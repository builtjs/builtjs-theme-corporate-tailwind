import React from "react";
import TemplateMenuBtn from "../../components/_external/template-menu-btn";
import ModeToggleBtn from "../../components/_external/mode-toggle-btn";

export default function ThemeBtns({router}) {
  return (
    <div className="relative">
      <TemplateMenuBtn router={router} />
      <ModeToggleBtn />
    </div>
  );
}
