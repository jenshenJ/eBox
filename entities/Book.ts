export default class Book {
  constructor(
    public id: number,
    public title: string, 
    public authorName: string,
    public coverPath: string,
    public filePath: string,
    public lastOpened: Date = new Date(),
    public currentPage: number = 0,
    public percentage: number = 0,
    
  ) {}

}
