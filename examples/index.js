import ParaPicker from '@';
// import ParaPicker from '../dist/hg-parapicker.js';
import '../picker.css';

const picker = new ParaPicker({
  data: [
    ['平民', '狼人', '预言家', '女巫', '猎人', '白痴'],
    ['存活', '死亡', '吃刀', '票出', '吃毒', '中枪'],
  ],
  title: '玩家属性',
  // tabTitle: ['身份', '状态'],
  onCancel() {
    console.log('取消选择');
  },
  onOk(arr) {
    console.log(arr);
    document.getElementById(`para-input${this.get('playerNumber')}`).innerHTML = arr;
  },
});

window.select = number => {
  picker.set({
    playerNumber: number,
    title: `${number}号玩家`
  });
  picker.show();
};
