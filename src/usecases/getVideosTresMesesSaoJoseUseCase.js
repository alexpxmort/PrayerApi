export default class GetVideosTresMesesSaoJoseUseCase{
  constructor(getVideos){
    this.getVideos = getVideos;
  }
  
  async execute(){
    return await  this.getVideos()
  }
}