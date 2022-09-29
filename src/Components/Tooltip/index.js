import React, { useState, useRef } from 'react';
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';

export default function Index({ password }) {
    const [show, setShow] = useState(false);
  const target = useRef(null);
  return (
  
    <> 
     <i
     ref={target} onClick={() => setShow(!show)}
      className="bi bi-eye mx-2 fw-bold"
      data-bs-toggle="popover"
      data-bs-placement="right"
      title="Popover title"
    />
    <Overlay target={target.current} show={show} placement="top">
      {(props) => (
        <Tooltip id="overlay-example" {...props}>
          {password}
        </Tooltip>
      )}
    </Overlay>
  </>
  );
}

