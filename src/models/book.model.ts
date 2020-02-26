import {BookChapter} from "./bookChapter.model";

export interface Book {
  id?: string,
  authorId?: string,
  author?: string
  background?: string
  chapters?: BookChapter[],
  commentsAmount?: number,
  cover?: string,
  date?: any,
  genres?: string[],
  language?: string,
  lenght?: number,
  likes?: number
  likedBy?: string[],
  rrating?: string,
  score?: number,
  status?: string,
  summary?: string,
  title?: string,
  views?: number
}
