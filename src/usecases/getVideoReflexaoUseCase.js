
export default class GetVideoReflexaoUseCase{
  constructor(getVideoReflexao){
    this.getVideoReflexao = getVideoReflexao;
  }
  
  async execute(){
    return await this.getVideoReflexao()
  }
}