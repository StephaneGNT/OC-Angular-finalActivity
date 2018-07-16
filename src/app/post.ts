export class Post {
    constructor(
        public title:string,
        public content:string,
        public loveIts:number,
        public index:number
    ){
        this.loveIts=loveIts;
        this.index=index;
    }
    
}
