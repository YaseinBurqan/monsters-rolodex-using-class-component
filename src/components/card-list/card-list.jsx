import React, { Component } from "react";
import "./card-list.css";

class CardList extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    const { monsters } = this.props;

    return (
      <>
        <div className="card-list">
          {monsters.map((monster) => {
            const { name, email, id } = monster;
            return (
              <div className="card-container" key={id}>
                <img src={`https://robohash.org/${id}/?set=set2&size=180x180`} alt="monster" />
                <h2>{name}</h2>
                <p>{email}</p>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default CardList;
