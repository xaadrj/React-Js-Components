import React from "react";
import ReactDOM from "react-dom";
import CommentDetails from "./CommentDetails";
import faker from "faker";
import ApprovalCard from "./ApprovalCard";
const App = () => {
  return (
    <div className="ui container comments">
    <ApprovalCard>
        <h4>Warning!</h4>
        Are you sure?
    </ApprovalCard>
      <ApprovalCard>
        <CommentDetails
          name="Saad"
          comment="Nice blog post!"
          time="Today at 6:00PM"
          avatar={faker.image.image()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetails
          name="Fahad"
          comment="Fair enough"
          time="Today at 10:00PM"
          avatar={faker.image.image()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetails
          name="Ahad"
          comment="Great!"
          time="Yesterday at 7:00AM"
          avatar={faker.image.image()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
