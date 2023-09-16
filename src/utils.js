const fs = require('fs');

const generateTitle = (product, link) => {
  // Get the product title
  const title = product.find(".a-size-medium.a-color-base.a-text-normal").text();

  // if title is empty
  if (title === "") {
    const urlSegment = link;
    if (typeof urlSegment === "string") {
      const urlSegmentStripped = urlSegment.split("/")[1];
      const title = urlSegmentStripped.replace(/-/g, " ");
      return title;
    }
  }
  return title;
};