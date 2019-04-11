import ParaPicker from '@';

const picker = new ParaPicker({
  data: [
    ['平民', '狼人', '预言家', '女巫', '猎人', '白痴'],
    ['存活', '死亡', '吃刀', '票出', '吃毒', '中枪'],
  ],
  title: '玩家属性',
  // tabTitle: ['身份', '状态'],
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
