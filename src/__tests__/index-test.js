/* eslint-env jest */
import ParaPicker from '../index';

const data = [
  [
    { value: '预言家', description: '每晚可查验一名玩家' },
    { value: '狼人', description: '每晚可击杀一名玩家' },
    { value: '平民', description: 'xx' },
    { value: '女巫', description: 'xx' },
    { value: '猎人', description: 'xx' },
    { value: '白痴', description: 'xx' },
  ],
  ['存活', '死亡', '吃刀', '票出', '吃毒', '中枪'],
];

const picker = new ParaPicker({
  data,
  title: '玩家属性',
  style: {
    liHeight: 42,
    btnHeight: 50,
    btnLocation: 'bottom',
    btnOffset: '22px',
    titleColor: 'red',
    okColor: 'red',
    cancelColor: 'red',
    btnBgColor: 'red',
    contentColor: 'red',
    contentBgColor: 'red',
    upShadowColor: 'red',
    downShadowColor: 'red',
    lineColor: 'red',
  },
  onCancel() {
    console.log('取消选择');
  },
  onOk(arr) {
    console.log(arr);
  },
});
const picker2 = new ParaPicker({
  data,
  onOk(arr) {
    console.log(arr);
  },
});

describe('picker test', () => {
  beforeAll(() => {
    console.error = error => {
      throw new Error(error);
    };
  });

  it('picker', () => {
    picker.show();
    picker.hide();
    picker.set({
      playerNumber: 1,
      title: '1号玩家',
      cancelText: 'cancel',
      okText: 'ok',
    });
    expect(picker.get('title')).toBe('1号玩家');
    expect(picker.get('playerNumber')).toBe(1);
    expect(picker.playerNumber).toBe(undefined);
  });
  it('picker2', () => {
    expect(picker2.getResult()).toEqual([
      { value: '预言家', description: '每晚可查验一名玩家' },
      '存活',
    ]);
  });
});
