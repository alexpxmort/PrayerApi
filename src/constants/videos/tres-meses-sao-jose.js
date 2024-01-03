const date = new Date();

const getValue = (n1, n2, year) => {
  return bissexto(year) ? n1 : n2;
};

const bissexto = (ano = new Date().getFullYear()) => {
  return !(ano % 4 || (!(ano % 100) && ano % 400));
};

export const dayVideosTresMesesSaoJose = [
  {
    day: 19,
    month: 12,
    number: 1,
    code: 'JSVpgMO2Aik'
  },
  {
    day: 20,
    month: 12,
    number: 2,
    code: 'd6dhed4xqa0'
  },
  {
    day: 21,
    month: 12,
    number: 3,
    code: 'Zqc0kgy2NrE'
  },
  {
    day: 22,
    month: 12,
    number: 4,
    code: 'HL9UqA3rY3w'
  },
  {
    day: 23,
    month: 12,
    number: 5,
    code: 't8VJLDV_OEM'
  },
  {
    day: 24,
    month: 12,
    number: 6,
    code: 'Byw-K4T3MJ8'
  },
  {
    day: 25,
    month: 12,
    number: 7,
    code: '_K5fz0X2cx0'
  },
  {
    day: 26,
    month: 12,
    number: 8,
    code: 'tyzBW9PVYAM'
  },
  {
    day: 27,
    month: 12,
    number: 9,
    code: 'xMrBzvTUl94'
  },
  {
    day: 28,
    month: 12,
    number: 10,
    code: 'fpqZN2m-AJQ'
  },
  {
    day: 29,
    month: 12,
    number: 11,
    code: '9UVIm4oDFZI'
  },
  {
    day: 30,
    month: 12,
    number: 12,
    code: 'yIW60bxMxco'
  },
  {
    day: 31,
    month: 12,
    number: 13,
    code: 'qAik4xChZyE'
  },
  {
    day: 1,
    month: 1,
    number: 14,
    code: 'Qairi87hm28'
  },
  {
    day: 2,
    month: 1,
    number: 15,
    code: 'wlGeRgRXdcg'
  },
  {
    day: 3,
    month: 1,
    number: 16,
    code: '90Q_okTEuCs'
  },
  {
    day: 4,
    month: 1,
    number: 17,
    code: 'YMOH9PZBDi4'
  },
  {
    day: 5,
    month: 1,
    number: 18,
    code: 'AOonTK5G1FM'
  },
  {
    day: 6,
    month: 1,
    number: 19,
    code: 'XlZm8RhSj_c'
  },
  {
    day: 7,
    month: 1,
    number: 20,
    code: 'PNS09khtcyA'
  },
  {
    day: 8,
    month: 1,
    number: 21,
    code: 'p_we44Q88EY'
  },
  {
    day: 9,
    month: 1,
    number: 22,
    code: 'KXCffki8ZvY'
  },
  {
    day: 10,
    month: 1,
    number: 23,
    code: 's0gDgEbJNKE'
  },
  {
    day: 11,
    month: 1,
    number: 24,
    code: 'nA_xIhGncTk'
  },
  {
    day: 12,
    month: 1,
    number: 25,
    code: 'kp8Qp171HG8'
  },
  {
    day: 13,
    month: 1,
    number: 26,
    code: '2Pb_NSYzK_4'
  },
  {
    day: 14,
    month: 1,
    number: 27,
    code: 'p_RAHg_bJkw'
  },
  {
    day: 15,
    month: 1,
    number: 28,
    code: 'H11vZO4olws'
  },
  {
    day: 16,
    month: 1,
    number: 29,
    code: '72qOj5fUh4c'
  },
  {
    day: 17,
    month: 1,
    number: 30,
    code: 'rhy95gEvIsA'
  },
  {
    day: 18,
    month: 1,
    number: 31,
    code: 'J0qRFCQ_r00'
  },
  {
    day: 19,
    month: 1,
    number: 32,
    code: '6YgykA_iKBg'
  },
  {
    day: 20,
    month: 1,
    number: 33,
    code: 'TevQqQUtVbo'
  },
  {
    day: 21,
    month: 1,
    number: 34,
    code: 'KHEa-BLBsXM'
  },
  {
    day: 22,
    month: 1,
    number: 35,
    code: 'avaHiTsM4fc'
  },
  {
    day: 23,
    month: 1,
    number: 36,
    code: 'BCDDfA4s9Ng'
  },
  {
    day: 24,
    month: 1,
    number: 37,
    code: 'jA-23oakkAE'
  },
  {
    day: 25,
    month: 1,
    number: 38,
    code: '1jhvNh_ehE8'
  },
  {
    day: 26,
    month: 1,
    number: 39,
    code: 'Mzov7lHFJnA'
  },
  {
    day: 27,
    month: 1,
    number: 40,
    code: 'm8_oeF-spsc'
  },
  {
    day: 28,
    month: 1,
    number: 41,
    code: '0eZyIyjZA8g'
  },
  {
    day: 29,
    month: 1,
    number: 42,
    code: '3K71ubkScuw'
  },
  {
    day: 30,
    month: 1,
    number: 43,
    code: 'AaRMq8kbMxU'
  },
  {
    day: 31,
    month: 1,
    number: 44,
    code: 'U1HTcEhY5u4'
  },
  {
    day: 1,
    month: 2,
    number: 45,
    code: 'H-WXkLlzKn4'
  },
  {
    day: 2,
    month: 2,
    number: 46,
    code: '5V48sSWi6Hw'
  },
  {
    day: 3,
    month: 2,
    number: 47,
    code: 'POUAtFvaDCI'
  },
  {
    day: 4,
    month: 2,
    number: 48,
    code: '6Mk-aaHENOI'
  },
  {
    day: 5,
    month: 2,
    number: 49,
    code: '7ak31erq0No'
  },
  {
    day: 6,
    month: 2,
    number: 50,
    code: 'jklmkRiCYXM'
  },
  {
    day: 7,
    month: 2,
    number: 51,
    code: '0ehSJHTj17E'
  },
  {
    day: 8,
    month: 2,
    number: 52,
    code: 'u6pPV3n_WOk'
  },
  {
    day: 9,
    month: 2,
    number: 53,
    code: 'iw1LIP2Gv-I'
  },
  {
    day: 10,
    month: 2,
    number: 54,
    code: 'iT4PTX8pvXw'
  },
  {
    day: 11,
    month: 2,
    number: 55,
    code: 'TS5uh_3uJ0w'
  },
  {
    day: 12,
    month: 2,
    number: 56,
    code: 'M8H3LDSB7mA'
  },
  {
    day: 13,
    month: 2,
    number: 57,
    code: 'Y0BOrQlZXWM'
  },
  {
    day: 14,
    month: 2,
    number: 58,
    code: 'KruhwWL4WEI'
  },
  {
    day: 15,
    month: 2,
    number: 59,
    code: '2v76hbIEACw'
  },
  {
    day: 16,
    month: 2,
    number: 60,
    code: 'BKBxX1SkR2A'
  },
  {
    day: 17,
    month: 2,
    number: 61,
    code: 'ioQ3FSwNNys'
  },
  {
    day: 18,
    month: 2,
    number: 62,
    code: 'azVwJoSarv0'
  },
  {
    day: 19,
    month: 2,
    number: 63,
    code: '0Vslp3qM3zg'
  },
  {
    day: 20,
    month: 2,
    number: 64,
    code: '9PCoijsCKRE'
  },
  {
    day: 21,
    month: 2,
    number: 65,
    code: '3wNH242R6jA'
  },
  {
    day: 22,
    month: 2,
    number: 66,
    code: 'j1OMtvPrNWE'
  },
  {
    day: 23,
    month: 2,
    number: 67,
    code: 'a1KsCS01QfQ'
  },
  {
    day: 24,
    month: 2,
    number: 68,
    code: 'x4qf3vWxX0Y'
  },
  {
    day: 25,
    month: 2,
    number: 69,
    code: 'clPS2mV-jOs'
  },
  {
    day: 26,
    month: 2,
    number: 70,
    code: '9ZbhfCXl5QY'
  },
  {
    day: 27,
    month: 2,
    number: 71,
    code: 'UPyLRNp-35k'
  },
  {
    day: 28,
    month: 2,
    number: 72,
    code: 'yzRaKww17pw'
  },
  {
    day: getValue(29, 1, date.getFullYear()),
    month: getValue(2, 3, date.getFullYear()),
    number: 73,
    code: 'vK-AGs_-e7c'
  },
  {
    day: getValue(1, 2, date.getFullYear()),
    month: getValue(3, 3, date.getFullYear()),
    number: 74,
    code: 'IdyagRkHsZE'
  },
  {
    day: getValue(2, 3, date.getFullYear()),
    month: getValue(3, 3, date.getFullYear()),
    number: 75,
    code: 'NizL3mHKE2U'
  },
  {
    day: getValue(3, 4, date.getFullYear()),
    month: getValue(3, 3, date.getFullYear()),
    number: 76,
    code: 'rkIdeWwCdp4'
  },
  {
    day: getValue(4, 5, date.getFullYear()),
    month: getValue(3, 3, date.getFullYear()),
    number: 77,
    code: '_DtJxuuFLSg'
  },
  {
    day: getValue(5, 6, date.getFullYear()),
    month: getValue(3, 3, date.getFullYear()),
    number: 78,
    code: '88gTLaQ8cks'
  },
  {
    day: getValue(6, 7, date.getFullYear()),
    month: getValue(3, 3, date.getFullYear()),
    number: 79,
    code: 'Ksz4Qq87Mdc'
  },
  {
    day: getValue(7, 8, date.getFullYear()),
    month: getValue(3, 3, date.getFullYear()),
    number: 80,
    code: '2QIoGFwaHek'
  },
  {
    day: getValue(8, 9, date.getFullYear()),
    month: getValue(3, 3, date.getFullYear()),
    number: 81,
    code: 'UODIS0U95sI'
  },
  {
    day: getValue(9, 10, date.getFullYear()),
    month: getValue(3, 3, date.getFullYear()),
    number: 82,
    code: 'n40E0SezNCU'
  },
  {
    day: getValue(10, 11, date.getFullYear()),
    month: getValue(3, 3, date.getFullYear()),
    number: 83,
    code: '0R84RaRFYsQ'
  },
  {
    day: getValue(11, 12, date.getFullYear()),
    month: getValue(3, 3, date.getFullYear()),
    number: 84,
    code: '3c5_u4hqV_g'
  },
  {
    day: getValue(12, 13, date.getFullYear()),
    month: getValue(3, 3, date.getFullYear()),
    number: 85,
    code: 'uNLtN1YhJRs'
  },
  {
    day: getValue(13, 14, date.getFullYear()),
    month: getValue(3, 3, date.getFullYear()),
    number: 86,
    code: 'EXWPcyUR174'
  },
  {
    day: getValue(14, 15, date.getFullYear()),
    month: getValue(3, 3, date.getFullYear()),
    number: 87,
    code: '0-rChWoPLEk'
  },
  {
    day: getValue(15, 16, date.getFullYear()),
    month: getValue(3, 3, date.getFullYear()),
    number: 88,
    code: 'JelNDGINGfk'
  },
  {
    day: getValue(16, 17, date.getFullYear()),
    month: getValue(3, 3, date.getFullYear()),
    number: 89,
    code: 'awWVtf2_EUg'
  },
  {
    day: getValue(17, 18, date.getFullYear()),
    month: getValue(3, 3, date.getFullYear()),
    number: 90,
    code: 'EbO8tXvragI'
  },
  {
    day: getValue(18, 19, date.getFullYear()),
    month: getValue(3, 3, date.getFullYear()),
    number: 91,
    code: 'guviVH4XaHU'
  }
];
