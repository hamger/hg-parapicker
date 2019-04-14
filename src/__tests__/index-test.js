/* eslint-env jest */
import ParaPicker from '../index';

const picker = new ParaPicker({
  data: [
    ['平民', '狼人', '预言家', '女巫', '猎人', '白痴'],
    ['存活', '死亡', '吃刀', '票出', '吃毒', '中枪'],
  ],
  title: '玩家属性',
  cancel() {
    console.log('取消选择');
  },
  success(arr) {
    console.log(arr);
    document.getElementById(`para-input${this.playerNumber}`).innerHTML = arr;
  },
});

window.select = number => {
  picker.playerNumber = number;
  picker.setTitle(`${number}号玩家`);
  picker.show();
};


describe('picker test', () => {
  beforeAll(() => {
    // eslint-disable-next-line no-console
    console.error = error => {
      throw new Error(error);
    };
  });

  it('title', () => {
    expect(
      picker.title
    ).toBe('玩家属性');
  });
});
