import React, { Component } from "react";
import "./carousel-item.styles.scss";
export default class CarouselItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { bannerImageUrl, bannerImageAlt } = this.props.banner;
    return (
      <div className={this.props.classappend}>
        <img
          src={process.env.PUBLIC_URL + bannerImageUrl}
          alt={bannerImageAlt}
        />
        ;
      </div>
    );
  }
}
