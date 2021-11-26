import React from 'react';

export interface ICall {
  id?: number;
  user?: number;
  created_at: string;
  callType: string;
  callStatus: string;
}
const Card = (props: ICall) => {
  return (
    <>
      <div className="card">
        <div className="content">
          <div className="header">{props.created_at}</div>
          <div className="meta">2 Days Ago</div>
          <div className="description">
            <p>
              <b>Call type:</b> {props.callType}
              <br />
              <b>Call status:</b> {props.callStatus}
              <br />
              <i>created by admin</i>
            </p>
          </div>
        </div>
        <div className="extra content">
          <button type="button" className="ui button tiny primary">
            Edit
          </button>
          <button type="button" className="ui button tiny red">
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
