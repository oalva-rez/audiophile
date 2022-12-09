export default interface Data {
  id: Number;
  slug: String;
  image: {
    mobile: String;
    tablet: String;
    desktop: String;
  };
  category: String;
  categoryImage: {
    mobile: String;
    tablet: String;
    desktop: String;
  };
  new: Boolean;
  price: Number;
  description: String;
  features: String;
  includes: {
    quantity: Number;
    item: String;
  }[];
  gallery: {
    first: {
      mobile: String;
      tablet: String;
      desktop: String;
    };
    second: {
      mobile: String;
      tablet: String;
      desktop: String;
    };
    third: {
      mobile: String;
      tablet: String;
      desktop: String;
    };
  };
  others: {
    slug: String;
    name: String;
    image: {
      mobile: String;
      tablet: String;
      desktop: String;
    };
  }[];
}
