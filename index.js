const Notification = (props) => {
  //  Write your code here.
  const { color, imageUrl, content } = props;
  const color2 = color + " " + "box";
  return (
    <div className={color2}>
      <img className="image" src={imageUrl} />
      <p className="content">{content}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="main">
    <h1 className="h1">Notifications</h1>
    <Notification
      color="blue"
      imageUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      content="Information Message"
    />

    <Notification
      color="green"
      imageUrl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
      content="Success Message"
    />

    <Notification
      color="yellow"
      imageUrl="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
      content="Warning Message"
    />

    <Notification
      color="red"
      imageUrl="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
      content="Error Message"
    />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
