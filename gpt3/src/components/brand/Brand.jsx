import React from "react";
import brand from "./brand.css";

import { google, slack, Atlassian, Dropbox, Shopify } from "./import";
const Brand = () => {
  return (
    <div className="gp3__brand section__padding">
      <div>
        <img src={google} alt="google" />
      </div>
      <div>
        <img src={slack} alt="slack" />
      </div>
      <div>
        <img src={Atlassian} alt="Atlassian" />
      </div>
      <div>
        <img src={Dropbox} alt="Dropbox" />
      </div>
      <div>
        <img src={Shopify} alt="Shopify" />
      </div>
    </div>
  );
};

export default Brand;
