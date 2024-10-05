export default class ProjectCardDetails {
  img: string | undefined;
  title: string;
  blurb: string;
  year: number;
  largeDesc: string;
  links?: { name: string; url: string; icon?: string }[];

  constructor(
    imgURL: string | undefined,
    title: string,
    blurb: string,
    year: number,
    largeDesc: string,
    links?: { name: string; url: string; icon?: string }[]
  ) {
    this.img = imgURL;
    this.title = title;
    this.blurb = blurb;
    this.year = year;
    this.largeDesc = largeDesc;
    this.links = links;
  }
}
