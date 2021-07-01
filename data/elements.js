const elements = {
  null: {
    name: "",
    shortname: "",
    type: "",
    engine: "",
    presence: [""],
    evolution: [],
    patterns: [],
    positioning: false,
  },

  covidpanel: {
    name: "Covid-19 Left Panel",
    shortname: "covidpanel",
    type: "feature",
    engine: "G",
    presence: ["2020"],
    evolution: ["202003.png", "202010.png"],
    patterns: ["categ"],
    positioning: true,
  },

  directanswer: {
    name: "Direct Answer",
    shortname: "directanswer",
    type: "feature",
    engine: "G",
    presence: ["2018", "2019", "2020"],
    evolution: ["2018.png", "2020.png"],
    patterns: ["bread", "thumb"],
    positioning: true,
  },

  categoryhierarchy: {
    name: "Category Hierarchy",
    shortname: "categoryhierarchy",
    type: "feature",
    engine: "G",
    presence: ["2003", "2004"],
    evolution: ["2003.png"],
    patterns: ["bread", "categ"],
    positioning: false,
  },

  textualads: {
    name: "Textual Ads",
    shortname: "textualads",
    type: "sponsored",
    engine: "G",
    presence: [
      "2000",
      "2002",
      "2003",
      "2004",
      "2008",
      "2010",
      "2012",
      "2013",
      "2014",
      "2015",
      "2016",
      "2017",
      "2018",
      "2019",
      "2020",
    ],
    evolution: [
      "2000.png",
      "2002.png",
      "2003.png",
      "2004.png",
      "2010.png",
      "2012.png",
      "2014.png",
      "2016.png",
      "2017.png",
      "2018.png",
      "2020.png",
    ],
    patterns: [],
    positioning: true,
  },

  topstories: {
    name: "Top Stories",
    shortname: "topstories",
    type: "feature",
    engine: "G",
    presence: [
      "2004",
      "2006",
      "2011",
      "2012",
      "2013",
      "2014",
      "2015",
      "2016",
      "2017",
      "2019",
      "2020",
    ],
    evolution: ["2004.png", "2006.png", "2012.png", "2014.png", "2020.png"],
    patterns: ["carousel", "cards", "news", "thumb"],
    positioning: true,
  },

  fsnippets: {
    name: "Featured Snippets",
    shortname: "fsnippets",
    type: "feature",
    engine: "G",
    presence: ["2016", "2017", "2018", "2020"],
    evolution: ["2016.png", "201705.png", "201707.png", "2018.png", "2020.png"],
    patterns: ["carousel", "thumb"],
    positioning: true,
  },

  carouselgrid: {
    name: "Carousel Grid",
    shortname: "carouselgrid",
    type: "feature",
    engine: "G",
    presence: ["2016", "2018"],
    evolution: ["2016.png", "201808.png", "201812.png"],
    patterns: ["bread", "carousel", "cards", "thumb", "grid"],
    positioning: true,
  },

  shoppingads: {
    name: "Shopping Ads",
    shortname: "shoppingads",
    type: "sponsored",
    engine: "G",
    presence: ["2013", "2015", "2016", "2017", "2018", "2019", "2020"],
    evolution: ["2013.png", "2018.png", "2019.png", "2020.png"],
    patterns: ["carousel", "cards", "thumb"],
    positioning: true,
  },

  carousel: {
    name: "Carousel",
    shortname: "carousel",
    type: "feature",
    engine: "G",
    presence: ["2015", "2016", "2017"],
    evolution: ["2015.png", "2016.png", "2017.png"],
    patterns: ["bread", "carousel", "cards", "thumb"],
    positioning: true,
  },

  localpack: {
    name: "Local Pacj",
    shortname: "localpack",
    type: "feature",
    engine: "G",
    presence: ["2009", "2013", "2019"],
    evolution: ["2009.png", "2013.png", "2019.png"],
    patterns: [],
    positioning: true,
  },

  relatedsearches: {
    name: "Related Searches",
    shortname: "relatedsearches",
    type: "feature",
    engine: "G",
    presence: [
      "2008",
      "2009",
      "2014",
      "2015",
      "2016",
      "2017",
      "2018",
      "2019",
      "2020",
    ],
    evolution: [
      "2008.png",
      "2009.png",
      "2014.png",
      "2015.png",
      "2017.png",
      "20200805.png",
      "20200814.png",
      "202011.png",
    ],
    patterns: [],
    positioning: true,
  },

  videopack: {
    name: "Video Pack",
    shortname: "videopack",
    type: "feature",
    engine: "G",
    presence: ["2010", "2011", "2015", "2019", "2020"],
    evolution: [
      "2010.png",
      "2011.png",
      "2015.png",
      "2019.png",
      "202007.png",
      "202010.png",
    ],
    patterns: ["carousel", "cards", "thumb"],
    positioning: true,
  },

  kpanel: {
    name: "Knowledge Panel",
    shortname: "kpanel",
    type: "feature",
    engine: "G",
    presence: ["2014", "2015", "2016", "2017", "2018", "2019", "2020"],
    evolution: ["2014.png", "2015.png", "2017.png", "2019.png", "2020.png"],
    patterns: ["mtabs", "carousel", "cards", "thumb", "grid"],
    positioning: true,
  },

  twitterpack: {
    name: "Twitter Pack",
    shortname: "twitterpack",
    type: "feature",
    engine: "G",
    presence: ["2015", "2016", "2017", "2018", "2019", "2020"],
    evolution: ["2015.png", "2017.png", "2019.png", "202007.png", "202012.png"],
    patterns: ["carousel", "cards", "thumb"],
    positioning: true,
  },

  enriched: {
    name: "Enriched Results",
    shortname: "enriched",
    type: "organic",
    engine: "G",
    presence: [
      "2008",
      "2009",
      "2012",
      "2013",
      "2014",
      "2015",
      "2016",
      "2017",
      "2018",
      "2019",
      "2020",
    ],
    evolution: ["2008.png", "2013.png", "2015.png", "2020.png"],
    patterns: ["bread", "thumb"],
    positioning: true,
  },

  pplalsoask: {
    name: "People Also Ask",
    shortname: "pplalsoask",
    type: "feature",
    engine: "G",
    presence: ["2014", "2016", "2017", "2018", "2019", "2020"],
    evolution: ["2014.png", "2019.png", "202006.png", "202007.png"],
    patterns: ["accord"],
    positioning: true,
  },

  recipes: {
    name: "Recipe Cards",
    shortname: "recipes",
    type: "feature",
    engine: "G",
    presence: ["2020"],
    evolution: ["2020.png"],
    patterns: ["cards", "disclose", "thumb"],
    positioning: true,
  },

  imagepack: {
    name: "Image Pack",
    shortname: "imagepack",
    type: "feature",
    engine: "G",
    presence: [
      "2006",
      "2010",
      "2011",
      "2014",
      "2015",
      "2016",
      "2017",
      "2018",
      "2019",
      "2020",
    ],
    evolution: [
      "2010.png",
      "2014.png",
      "2017.png",
      "2018.png",
      "2019.png",
      "2020.png",
    ],
    patterns: ["carousel", "thumb", "grid"],
    positioning: true,
  },

  regular: {
    name: "Regular Results",
    shortname: "regular",
    type: "organic",
    engine: "G",
    presence: [
      "2000",
      "2001",
      "2002",
      "2003",
      "2004",
      "2006",
      "2008",
      "2009",
      "2010",
      "2011",
      "2012",
      "2013",
      "2014",
      "2015",
      "2016",
      "2017",
      "2018",
      "2019",
      "2020",
    ],
    evolution: [
      "2000.png",
      "2003.png",
      "2010.png",
      "2013.png",
      "2015.png",
      "2018.png",
      "2020.png",
    ],
    patterns: ["bread"],
    positioning: true,
  },
};

export const bing = {
  textualads: {
    name: "Textual Ads",
    shortname: "textualads",
    type: "sponsored",
    engine: "B",
    presence: [
      "2010",
      "2011",
      "2013",
      "2014",
      "2015",
      "2017",
      "2018",
      "2019",
      "2020",
    ],
    evolution: [
      "2010.png",
      "2013.png",
      "2015.png",
      "2018.png",
      "2019.png",
      "2020.png",
    ],
    patterns: [],
    positioning: true,
  },

  topstories: {
    name: "Top Stories",
    shortname: "topstories",
    type: "feature",
    engine: "B",
    presence: ["2010", "2014", "2017", "2020"],
    evolution: [
      "2010.png",
      "2014.png",
      "2017.png",
      "2020041.png",
      "2020042.png",
      "202005.png",
    ],
    patterns: ["cards", "news", "thumb"],
    positioning: true,
  },

  fsnippets: {
    name: "Featured Snippets",
    shortname: "fsnippets",
    type: "feature",
    engine: "B",
    presence: ["2017", "2018", "2020"],
    evolution: ["2017.png", "202004.png", "202010.png"],
    patterns: ["carousel", "thumb"],
    positioning: true,
  },

  carousel: {
    name: "Carousel",
    shortname: "carousel",
    type: "feature",
    engine: "B",
    presence: [2017, 2020],
    evolution: ["2017.png", "2020.png"],
    patterns: ["carousel", "cards", "thumb"],
    positioning: false,
  },

  localpack: {
    name: "Local Pack",
    shortname: "localpack",
    type: "feature",
    engine: "B",
    presence: ["2014", "2020"],
    evolution: ["2014.png", "2020.png"],
    patterns: ["thumb"],
    positioning: true,
  },

  relatedsearches: {
    name: "Related Searches",
    shortname: "relatedsearches",
    type: "feature",
    engine: "B",
    presence: [
      "2010",
      "2012",
      "2013",
      "2014",
      "2015",
      "2016",
      "2017",
      "2018",
      "2019",
      "2020",
    ],
    evolution: [
      "2010.png",
      "2013.png",
      "2014.png",
      "2016.png",
      "2017.png",
      "2019.png",
      "2020.png",
    ],
    patterns: [],
    positioning: true,
  },

  videopack: {
    name: "Video Pack",
    shortname: "videopack",
    type: "feature",
    engine: "B",
    presence: ["2014", "2015", "2016", "2017", "2019", "2020"],
    evolution: ["2015.png", "2019.png", "2020.png"],
    patterns: ["carousel", "cards", "thumb"],
    positioning: true,
  },

  kpanel: {
    name: "Knowledge Panel",
    shortname: "kpanel",
    type: "feature",
    engine: "B",
    presence: ["2015", "2016", "2017", "2018", "2019", "2020"],
    evolution: [
      "2015.png",
      "2016.png",
      "2017.png",
      "2019.png",
      "202004.png",
      "202005.png",
      "202011.png",
    ],
    patterns: ["thumb", "grid"],
    positioning: true,
  },

  twitterpack: {
    name: "Twitter Pack",
    shortname: "twitterpack",
    type: "feature",
    engine: "B",
    presence: ["2019"],
    evolution: ["2019.png"],
    patterns: ["cards"],
    positioning: false,
  },

  searchrefinement: {
    name: "Search Refinement",
    shortname: "searchrefinement",
    type: "",
    engine: "B",
    presence: ["2018", "2020"],
    evolution: ["2018.png", "2020.png"],
    patterns: [],
    positioning: true,
  },

  enriched: {
    name: "Enriched Results",
    shortname: "enriched",
    type: "organic",
    engine: "B",
    presence: ["2010", "2014", "2015", "2017", "2018", "2019", "2020"],
    evolution: [
      "2010.png",
      "2014.png",
      "2015.png",
      "2017.png",
      "2019.png",
      "202003.png",
      "202006.png",
    ],
    patterns: ["mtabs", "cards", "thumb"],
    positioning: true,
  },

  pplalsoask: {
    name: "People Also Ask",
    shortname: "pplalsoask",
    type: "feature",
    engine: "B",
    presence: ["2020"],
    evolution: ["2020.png"],
    patterns: ["accord"],
    positioning: true,
  },

  imagepack: {
    name: "Image Pack",
    shortname: "imagepack",
    type: "feature",
    engine: "B",
    presence: ["2015", "2016", "2017", "2018", "2019", "2020"],
    evolution: ["2015.png", "2017.png", "2019.png", "202002.png", "202006.png"],
    patterns: ["carousel", "thumb", "grid"],
    positioning: true,
  },

  regular: {
    name: "Regular Results",
    shortname: "regular",
    type: "organic",
    engine: "B",
    presence: [
      "2010",
      "2011",
      "2012",
      "2013",
      "2014",
      "2015",
      "2016",
      "2017",
      "2018",
      "2019",
      "2020",
    ],
    evolution: [
      "2011.png",
      "2013.png",
      "2015.png",
      "2016.png",
      "2018.png",
      "2020.png",
    ],
    patterns: [],
    positioning: true,
  },

  traveldestinations: {
    name: "Travel Destinations",
    shortname: "traveldestinations",
    type: "feature",
    engine: "B",
    presence: ["2020"],
    evolution: ["202004.png", "202005.png"],
    patterns: ["cards", "thumb"],
    positioning: true,
  },

  categoriesbar: {
    name: "Categories Bar",
    shortname: "categoriesbar",
    type: "feature",
    engine: "B",
    presence: ["2020"],
    evolution: ["2020051.png", "2020052.png", "202011.png"],
    patterns: ["categ"],
    positioning: true,
  },
};

export default elements;