import React from 'react'
import styles from '@/styles/ServiceItem.module.css'

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";

function ServiceItem({ title, desc, image, icon }) {
  return (
    <div class="col-lg-6 mb-5">
      <div class="row align-items-center">
        <div class="col-sm-5">
          <img class="img-fluid mb-3 mb-sm-0" src={image} alt="" />
        </div>
        <div class="col-sm-7">
          <h4 style={{
            display :'flex',
            alignItems : 'baseline'
          }}>
            <div className={styles.service_icon}>
              <FontAwesomeIcon icon={Icons[icon]} style={{fontSize  : '18px'}} />
            </div>
            <p>
              {title}
            </p>

          </h4>
          <p class="m-0">{desc}</p>
        </div>
      </div>
    </div>
  )
}

export default ServiceItem