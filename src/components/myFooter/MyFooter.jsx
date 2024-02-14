import React from "react";
import Logo from "../logo/Logo";
import { myNavLinks } from "../../data/myNavLinks";
import { nanoid } from "nanoid";

const MyFooter = () => {
  return (
    <footer className="bg-dark mt-5 pt-3 pb-3">
      <div className="container d-flex flex-column align-items-center">
        <div className="d-flex align-items-center justify-content-between gap-5">
        <div>
          <a href="#">
          <Logo />
          </a>
        </div>
        <ul className="list-group list-group-horizontal ps-5">
          {myNavLinks.map((links) => (
            <li
             key={nanoid()} className="list-group-item border-0 bg-transparent p-3">
              <a href={links.href} className="text-secondary">{links.label}</a>
            </li>
          ))}
        </ul>
        </div>
      <div className="text-secondary">© 2024 logo ipsum™. All Rights Reserved.</div>
      </div>
    </footer>
  );
};

export default MyFooter;