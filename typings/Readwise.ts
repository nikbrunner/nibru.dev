export interface IReadwiseAuthorizationHeader {
  Authorization: string;
}

export interface IReadwiseBooks {
  count: number;
  next: null;
  previous: null;
  results: IReadwiseBook[];
}

export interface IReadwiseBook {
  id: number;
  title: string;
  author: string;
  category: EReadwiseBookCategory;
  num_highlights: number;
  last_highlight_at: Date | null;
  updated: Date;
  cover_image_url: string;
  highlights_url: string;
  source_url: string;
  asin: string | null;
  tags: {
    id: number;
    user_book: number;
    name: string;
  }[];
}

export enum EReadwiseBookCategory {
  Books = "books"
}

export interface IReadwiseHighlights {
  count: number;
  next: string;
  previous: null;
  results: IReadwiseHighlight[];
}

export interface IReadwiseHighlight {
  id: number;
  text: string;
  note: string;
  location: number;
  location_type: IReadwiseHighlightLocationType;
  highlighted_at: Date | null;
  url: null;
  color: IReadwiseHighlightColor;
  updated: Date;
  book_id: number;
  tags: IReadwiseHighlightTag[];
}

export enum IReadwiseHighlightColor {
  Empty = "",
  Yellow = "yellow"
}

export enum IReadwiseHighlightLocationType {
  Location = "location",
  Order = "order"
}

export interface IReadwiseHighlightTag {
  id: number;
  name: IReadwiseHighlightTagName;
}

export enum IReadwiseHighlightTagName {
  Discard = "discard",
  H1 = "h1",
  H2 = "h2"
}
