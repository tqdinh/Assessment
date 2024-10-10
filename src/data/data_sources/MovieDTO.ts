export default class MovieDto {

    public tilte: string
    public year: number
    public imdbId: string
    public rank: number
    public actors: string[] = []
    public imdbUrl: string
    public imgPoster: string
    public photoWidth: number
    public photoHeight: number

    constructor(_title: string, _year: number, _imdbId: string, _rank: number, _actors: string[], _imdbUrl: string, _imgPoster: string, _photoW: number, _photoH: number) {
        this.tilte = _title
        this.year = _year
        this.imdbId = _imdbId
        this.rank = _rank
        this.actors = _actors
        this.imdbUrl = _imdbUrl
        this.imgPoster = _imgPoster
        this.photoWidth = _photoW
        this.photoHeight = _photoW
    }
}