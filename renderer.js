const list = {
  normal: [
    {
      html: '문구1',
      fontSize: '35px',
    },
    {
      html: '문구2',
    },
    {
      html: '문구3',
    },
  ],

  hour: [
    {
      // 0h
      html: '0시',
    },
    {
      // 1h
      html: '1시',
    },
    {
      // 2h
      html: '2시',
    },
    {
      // 3h
      html: '3시',
    },
    {
      // 4h
      html: '4시',
    },
    {
      // 5h
      html: '5시',
    },
    {
      // 6h
      html: '6시',
    },
    {
      // 7h
      html: '7시',
    },
    {
      // 8h
      html: '8시',
    },
    {
      // 9h
      html: '9시',
    },
    {
      // 10h
      html: '10시',
    },
    {
      // 11h
      html: '11시',
    },
    {
      // 12h
      html: '12시',
    },
    {
      // 13h
      html: '13시',
    },
    {
      // 14h
      html: '14시',
    },
    {
      // 15h
      html: '15시',
    },
    {
      // 16h
      html: '16시',
    },
    {
      // 17h
      html: '17시',
    },
    {
      // 18h
      html: '18시',
    },
    {
      // 19h
      html: '19시',
    },
    {
      // 20h
      html: '20시',
    },
    {
      // 21h
      html: '21시',
    },
    {
      // 22h
      html: '22시',
    },
    {
      // 23h
      html: '23시',
    },
  ],

  date: {
    '01-01': {
      html: '1월 1일 문구',
      weight: 95, // 나올 확률 %
    },
    '12-24': {
      html: '크리스마스 이브',
      weight: 90,
    },
    '12-25': {
      html: '메리 크리스마스 🎄',
      weight: 95,
    },
  },
};

const contentContainerNode = document.getElementById('content-container');

// get current time
const now = new Date();
const nowMonth = `0${now.getMonth() + 1}`.slice(-2);
const nowDate = `0${now.getDate()}`.slice(-2);
const nowHour = now.getHours();

// try to get today's event
const todayEvent = list.date[`${nowMonth}-${nowDate}`];

// 아래 확률이 가중치보다 높아야 선택된다.
const normalOrDateRand = Math.floor(Math.random() * 100) + 1; // 일반문구와 지정한 날짜. 1 ~ 100
const normalOrHourRand = Math.floor(Math.random() * 100) + 1; // 일반문구와 시간 문구. 1 ~ 100
const normalRand = Math.floor(Math.random() * list.normal.length); // 일반문구중에 랜덤으로 하나 선택
const hourWeight = 30; // 일반 문구와 시간 문구에서 시간이 뽑일 확률%

// determine today's event
let selected = null;
if (todayEvent && normalOrDateRand <= todayEvent.weight) {
  selected = todayEvent;
} else if (normalOrHourRand <= hourWeight) {
  selected = list.hour[nowHour];
} else {
  selected = list.normal[normalRand];
}

// set innerHtml and style
contentContainerNode.innerHTML = selected.html;
contentContainerNode.style = `font-family:${selected.fontFamily || 'Nanum BarunPen'}; font-size:${
  selected.fontSize || '30px'
};`;
