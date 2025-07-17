import React, { useState } from "react";
import { ContactWrapper, Email } from "./ContactElements";
import { MdContentCopy } from "react-icons/md";
import { IconButton, Tooltip } from "@mui/material";
import Zoom from '@mui/material/Zoom';

import ScrollAnimation from "react-animate-on-scroll";
function Contact() {
  const [showTooltip, setShowTooltip] = useState(false);
  const copyToClipboard = () => {
    navigator.clipboard.writeText("saadathar55@gmail.com");
    setShowTooltip(true);
    setTimeout(() => {
      setShowTooltip(false);
    }, 700);
  };

  return (
    <ContactWrapper id="contact">

      <div className="Container">
        <div className="SectionTitle">Get In Touch</div>
        <ScrollAnimation animateIn="fadeIn" >
          <div className="BigCard">
            <Email>
              <div style={{ display: 'flex', alignItems: 'center', columnGap: '20px', rowGap: '10px', flexWrap: 'wrap', justifyContent: 'center' }} >
                <span>saadathar55@gmail.com</span>
                <Tooltip
                  PopperProps={{
                    disablePortal: true,
                  }}
                  open={showTooltip}
                  onClose={() => setShowTooltip(false)}
                  title="Copied!"
                  TransitionComponent={Zoom}
                  disableFocusListener
                  disableHoverListener
                  disableTouchListener
                  placement="bottom"
                >
                  <IconButton onClick={copyToClipboard} >
                    <MdContentCopy size={25} style={{ cursor: 'pointer', color: "#151418" }} />
                  </IconButton>
                </Tooltip>
              </div>
              <a
                className="btn PrimaryBtn btn-shadow"
                href="https://mail.google.com/mail/?view=cm&fs=1&to=saadathar55@gmail.com&su=Let%27s%20Connect&body=Hi%20Saad%2C%0AI%20would%20like%20to%20get%20in%20touch%20with%20you..."
                target="_blank"
                rel="noopener noreferrer"
              >
                Send Email via Gmail
              </a>

            </Email>
          </div>
        </ScrollAnimation>

      </div>
    </ContactWrapper>
  );
}

export default Contact;
