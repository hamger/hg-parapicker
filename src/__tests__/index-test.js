/* eslint-env jest */
import ParaPicker from '../index';

const data = [
  ['平民', '狼人', '预言家', '女巫', '猎人', '白痴'],
  ['存活', '死亡', '吃刀', '票出', '吃毒', '中枪'],
];

const picker = new ParaPicker({
  data,
  title: '玩家属性',
  style: {
    liHeight: 42,
    btnLocation: 'bottom',
    btnOffset: '22px',
    titleColor: 'red',
    sureColor: 'red',
    cancelColor: 'red',
    btnBgColor: 'red',
    contentColor: 'red',
    contentBgColor: 'red',
    upShadowColor: 'red',
    downShadowColor: 'red',
    lineColor: 'red',
  },
  cancel() {
    console.log('取消选择');
  },
  success(arr) {
    console.log(arr);
    document.getElementById(`para-input${this.playerNumber}`).innerHTML = arr;
  },
});
const picker2 = new ParaPicker({
  data,
  success(arr) {
    console.log(arr);
    document.getElementById(`para-input${this.playerNumber}`).innerHTML = arr;
  },
});

describe('picker test', () => {
  beforeAll(() => {
    // eslint-disable-next-line no-console
    console.error = error => {
      throw new Error(error);
    };
  });

  it('title', () => {
    expect(picker.title).toBe('玩家属性');
  });
  it('title2', () => {
    expect(picker2.title).toBe('');
  });
});
