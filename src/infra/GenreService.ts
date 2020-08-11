import { Genres } from '../types/Genre'
import { GenreModel } from './DataAccess'

class GenreService {
  private exclude = 'radio'

  constructor(private genresModel: GenreModel) {}

  genresToLinks = (): Genres => this.genresModel.findAll().filter((genre) => !genre.includes(this.exclude))
}

const service = new GenreService(new GenreModel())

export default service
