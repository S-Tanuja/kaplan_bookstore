export interface volumeInfo {
    authors:any[] ,
    publisher: string,
    publishedDate:string,
    title:string
  }
  export interface book {
    volumeInfo: volumeInfo
  }