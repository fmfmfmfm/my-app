import React from "react";
import { Box, Avatar } from "grommet";
import {Link} from "react-router-dom";
import './index.css'
const index = () => {
  const shoupai = [
    {
      touxiang: "//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80",
      list: "首页",
    },
    {
      touxiang: "//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80",
      list: "首页",
    },
    {
      touxiang: "//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80",
      list: "首页",
    },
    {
      touxiang: "//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80",
      list: "首页",
    },
  ];
  const biaoqian = [
      {biaoqians:"电影",link:"#"},
      {biaoqians:"电视剧",link:"#"},
      {biaoqians:"电视剧",link:"#"},
      {biaoqians:"电视剧",link:"#"},
      {biaoqians:"电视剧",link:"#"},
      {biaoqians:"电视剧",link:"#"},
      {biaoqians:"电视剧",link:"#"},
      {biaoqians:"电视剧",link:"#"},
      {biaoqians:"电视剧",link:"#"},
      {biaoqians:"电视剧",link:"#"},
      {biaoqians:"电视剧",link:"#"},
      {biaoqians:"电视剧",link:"#"},
      {biaoqians:"电视剧",link:"#"},
      {biaoqians:"电视剧",link:"#"},
      {biaoqians:"电视剧",link:"#"},
      {biaoqians:"电视剧",link:"#"},
  ]
  return (
    <div className="css-001">
        <div className="cssindex-000">
        <nav className="cssindex-001">
      {shoupai.map((data, _key) => {
        return (
            <div className="cssindex-002">
          <Box direction="row" gap="small" >
            <Avatar src={data.touxiang} style={{width:"30px",height:"30px"}}/>
          </Box>
          </div>
        );
      })}
      </nav>
      <span className="cssindex-004"></span>
      <div className="cssindex-003">
          {biaoqian.map((data,_key)=>{
return(
    <Link to={data.link}>{data.biaoqians}</Link>
)
          })}
      </div>
      </div>
    </div>
  );
};

export default index;
