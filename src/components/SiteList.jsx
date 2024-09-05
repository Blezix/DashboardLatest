import React from "react";
import { List } from "@mui/material";
import SiteListItem from "./SiteListItem";

const SiteList = ({ sites, activeSite, handleSiteClick, theme }) => (
  <List>
    {sites.map((site) => (
      <SiteListItem
        key={site}
        site={site}
        activeSite={activeSite}
        handleSiteClick={handleSiteClick}
        theme={theme}
      />
    ))}
  </List>
);

export default SiteList;
