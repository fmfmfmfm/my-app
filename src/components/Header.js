import React from "react";
import {Link, useLocation} from "react-router-dom"
const Header = () =>{
  const lists = [
    {path:"/movie",listsdata:"电影"},
    {path:"/news",listsdata:"新闻"},
  ]
  const {pathname} = useLocation()
    return (
        <header className="header">
        <div className="css-001">
          <div className="css-002">
            <div className="css-003">
              <Link to="/">首页</Link>
            </div>
            <nav className="css-004">
              {lists.map(
                (data,_key)=>{
                  return (
                  pathname === data.path ? <Link to={data.path} style={{borderBottom:"0.2em solid #61dafb",color:"#61dafb",boxSizing:"border-box"}}>{data.listsdata}</Link> : <Link to={data.path}>{data.listsdata}</Link>
                  )
                }
              )}
            </nav>
          </div>
        </div>
      </header>
    )
}

export default Header;
