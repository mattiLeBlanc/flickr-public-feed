export interface Image {
  title: string;
  img: string;
  published: Date;
  author: {
    name: string;
    uri: string;
    'flickr:nsid': number;
    'flickr:buddyicon': string;
  };
  category: string[];
}
