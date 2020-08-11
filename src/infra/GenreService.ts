import { Genres } from '../types/Genre'
import { GenreModel } from './DataAccess'

export const excludeGenre = 'radio'

class GenreService {
  constructor(private genresModel: GenreModel) {}

  genresToLinks = (): Genres => this.genresModel.findAll().filter((genre) => !genre.includes(excludeGenre))
}

const service = new GenreService(new GenreModel())

export default service
