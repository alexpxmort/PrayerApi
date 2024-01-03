export default class GetVideosQuaresmaSaoMiguelUseCase {
  constructor(getVideos) {
    this.getVideos = getVideos;
  }

  async execute() {
    return await this.getVideos();
  }
}
