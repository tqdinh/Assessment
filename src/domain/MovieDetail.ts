export default class MovieDetail {

    public title: string
    public poster: string
    public actors: string[] = []
    public description: string
    public genre: string[] = []

    public ratingCount: number
    public ratingValue: number
    public datePublished: string
    public duration: string

    constructor(_title: string, _poster: string, _actors: string[], _description: string, _genre: string[], _ratingCount: number, _ratingValue: number, _datePublished: string, _duration: string) {
        this.title = _title
        this.poster = _poster
        this.actors = _actors
        this.description = _description
        this.genre = _genre
        this.ratingCount = _ratingCount
        this.ratingValue = _ratingValue
        this.datePublished = _datePublished
        this.duration = _duration

    }


}