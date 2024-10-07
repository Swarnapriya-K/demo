import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

function TriggerExample2() {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      To contact
    </Tooltip>
  );

  return (
    <OverlayTrigger
      placement="bottom"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip}
    >
      <button class="contact_btn px-4 py-2 mx-2" type="button">CONTACT US</button>
    </OverlayTrigger>
  );
}

export default TriggerExample2;
