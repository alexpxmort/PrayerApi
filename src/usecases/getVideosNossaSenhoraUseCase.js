export default class GetVideosNossaSenhoraUseCase{
  constructor(getVideos){
    this.getVideos = getVideos;
  }
  
  async execute(){
    return await  this.getVideos()
  }
}