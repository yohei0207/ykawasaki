import './App.css';
import React from 'react';

class Top extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className='container-fluid'>
          <p></p>
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">Yohei Kawasaki</h2>
              <h6 className="card-subtitle mb-2 ">慶應義塾大学 大学院理工学研究科 修士課程1年</h6>
              <p className="card-text">HCIの研究をしています．</p>
            </div>
          </div>
        </div>


        <div className='container-fluid'>
          <p></p>
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">発表歴</h4>
              <ul class="list-group list-group-flush">
                <h5><strong>査読あり</strong></h5>
                <li class="list-group-item">Y. Kawasaki and Y. Sugiura, "Personal Identification and Authentication Using Blink with Smart Glasses," 2022 61st Annual Conference of the Society of Instrument and Control Engineers (SICE), 2022, pp. 1251-1256.</li>
              </ul>
              <p></p>
              <ul class="list-group list-group-flush">
                <h5><strong>査読なし</strong></h5>
                <li class="list-group-item">川崎陽平，杉浦裕太，鎖骨の音響特性を利用した個人識別・認証システム，研究報告エンタテイメントコンピューティング (EC)，2022，1-4</li>
                <li class="list-group-item">山本 匠，川﨑 陽平，住田 一眞，木田 勇輝，松岡 慧，小木 哲朗，うなずき検出とアバタの透明度変化によるメタバース会議支援手法の提案，第32回設計工学・システム部門講演会(D&S2022)，2022</li>
                <li class="list-group-item">瑞穂ゆりな，川崎陽平，雨坂宇宙，杉浦裕太，カメラ搭載ヒアラブルデバイスで取得した耳画像を用いた個人識別・認証システムの提案，ヒューマンインタフェースシンポジウム2022，関西大学，大阪</li>
                <li class="list-group-item">川崎陽平，松井良太，杉浦裕太，瞬き時のフォトリフレクタのセンサ値の変化を利用した個人認証システムの提案，第84回全国大会講演論文集，2022，55-56, <strong>学生奨励賞受賞</strong></li>
                <li class="list-group-item">川崎陽平，杉浦裕太，"腹部触覚提示を用いた足圧中心位置の誘導システム"，エンタテインメントコンピューティングシンポジウム論文集 2021, 335-339</li>
              </ul>
            </div>
          </div>
        </div>
        <p></p>
      </div>

    );
  }

}
export default Top;
