import { getCurrentDate } from '../helpers/date.js';
import { capitalize } from '../helpers/str.js';
import { findVideosByQuery } from '../helpers/video.js';

export default class GetVideoHomiliaDiariaUseCase {
  constructor(getVideoHomiliaDiaria) {
    this.getVideoHomiliaDiaria = getVideoHomiliaDiaria;
  }

  async execute() {
    let dayName = capitalize(
      getCurrentDate().toLocaleDateString('pt-br', {
        weekday: `long`
      })
    );
    const value = await this.getVideoHomiliaDiaria();
    const videos = findVideosByQuery(
      value,
      'Padre Mario Sartori',
      `Homilia Diária`,
      `${dayName}`
    );

    return videos?.[0]?.id;
  }
}
