export interface volumeInfo {
    authors:any[] ,
    publisher: string,
    publishedDate:string,
    title:string
  }
  export interface book {
    title?:string
    authors ?:string
    publisher ?: string
    publishedDate ?: string
    volumeInfo: volumeInfo
  }