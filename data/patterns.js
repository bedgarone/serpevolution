const patterns = {
  mtabs: {
    name: "Module Tabs",
    shortname: "mtabs",
    css_image: "assets/patterns/mtabs.png",
    images: ["mtabs1.png"],
    description:
      "Used when content is groupable and there is no room for everything. Modules of content are divided in small tabbed areas with only one visible at a time, the user being able to click on tabs to reveal other modules.",
  },
  bread: {
    name: "Breadcrumbs",
    shortname: "bread",
    css_image: "assets/patterns/bread.png",
    images: ["bread1.png"],
    description:
      "They linearly specify hierarchy levels leading to the current page. However, in SERP, Breadcrumbs are associated with content elements, not with the page itself, and may specify different types of hierarchies.",
  },
  accord: {
    name: "Accordion",
    shortname: "accord",
    css_image: "assets/patterns/accord.png",
    images: ["accord1.png"],
    description:
      "Used to stack modules of similar content, permitting the user to open and close each module independently, freeing up space and allowing the user to access the content only if interested.",
  },
  carousel: {
    name: "Carousel",
    shortname: "carousel",
    css_image: "assets/patterns/carousel.png",
    images: ["carousel1.png"],
    description:
      "Consists of a horizontal strip of simple cards, letting the user to scroll horizontally to view them and encouraging the inspection of the items that are to come.",
  },
  cards: {
    name: "Cards",
    shortname: "cards",
    css_image: "assets/patterns/cards.png",
    images: ["cards1.png"],
    description:
      "Used to display content composed of distinct elements, normally about a single subject, to form one coherent piece of content. Thus, it is usual for cards to be closer to other cards.",
  },
  disclose: {
    name: "Progressive Disclosure",
    shortname: "disclose",
    css_image: "assets/patterns/disclose.png",
    images: ["disclose1.png"],
    description:
      "Used when the user is exploring information or proceeding with different actions. The interface is being revealed (disclosured) as the user proceeds.",
  },
  categ: {
    name: "Categorization",
    shortname: "categ",
    css_image: "assets/patterns/categ.png",
    images: ["categ1.png"],
    description:
      "Provides the user with categories different from each other, helping suggest what content is to be found.",
  },
  news: {
    name: "News Stream",
    shortname: "news",
    css_image: "assets/patterns/news.png",
    images: ["news1.png"],
    description:
      "Used to list time-sensitive items chronologically, combining the sources in one place.",
  },
  thumb: {
    name: "Thumbnail",
    shortname: "thumb",
    css_image: "assets/patterns/thumb.png",
    images: ["thumb1.png"],
    description:
      "Used when the user is provided with an overview of pictures without downloading each in full size.",
  },
  grid: {
    name: "Grid of Equals",
    shortname: "grid",
    css_image: "assets/patterns/grid.png",
    images: ["grid1.png"],
    description:
      "Used to display items in a grid or matrix, each following a common template, linking to respective pages.",
  },
};

export default patterns;
