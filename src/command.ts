interface BuiltinCommand {
  category: string;
  name: string;
  priority: number;
}

const commands: { [key: number]: BuiltinCommand } = {
  // ファイル
  5097: { category: "ファイル", name: "[開く]", priority: 1001 },
  5157: { category: "ファイル", name: "[閉じる]", priority: 1002 },
  5100: { category: "ファイル", name: "[追加読み込み]", priority: 1003 },
  5168: { category: "ファイル", name: "[音声読み込み]", priority: 1004 },
  5118: {
    category: "ファイル",
    name: "[編集プロジェクトを開く]",
    priority: 1005,
  },
  1023: {
    category: "ファイル",
    name: "[編集プロジェクトの保存]",
    priority: 1006,
  },
  1024: {
    category: "ファイル",
    name: "[編集プロジェクトの上書き]",
    priority: 1007,
  },
  1003: { category: "ファイル", name: "[AVI出力]", priority: 1008 },
  1062: { category: "ファイル", name: "[WAV出力]", priority: 1009 },
  1025: { category: "ファイル", name: "[バッチ出力]", priority: 1201 },
  1009: { category: "ファイル", name: "[出力の中断]", priority: 1202 },
  5167: {
    category: "ファイル",
    name: "[インポート][キーフレームリスト]",
    priority: 1301,
  },
  1054: {
    category: "ファイル",
    name: "[エクスポート][キーフレームリスト]",
    priority: 1401,
  },
  1057: {
    category: "ファイル",
    name: "[AVIファイル操作][AVIファイルの連結]",
    priority: 1501,
  },
  1058: {
    category: "ファイル",
    name: "[AVIファイル操作][AVIファイルの合成]",
    priority: 1502,
  },
  1041: { category: "ファイル", name: "[優先度][Highest]", priority: 1503 },
  1040: { category: "ファイル", name: "[優先度][High]", priority: 1504 },
  1039: { category: "ファイル", name: "[優先度][Normal]", priority: 1505 },
  1038: { category: "ファイル", name: "[優先度][Low]", priority: 1506 },
  1037: { category: "ファイル", name: "[優先度][Lowest]", priority: 1507 },
  1042: { category: "ファイル", name: "[優先度][Realtime]", priority: 1508 },
  108: {
    category: "ファイル",
    name: "[環境設定][システムの設定]",
    priority: 1509,
  },
  109: {
    category: "ファイル",
    name: "[環境設定][コーデックの設定]",
    priority: 1510,
  },
  1086: {
    category: "ファイル",
    name: "[環境設定][入力プラグイン優先度の設定]",
    priority: 1701,
  },
  102: {
    category: "ファイル",
    name: "[環境設定][ショートカットキーの設定]",
    priority: 1702,
  },
  106: {
    category: "ファイル",
    name: "[環境設定][言語の設定 (Language)]",
    priority: 1703,
  },
  111: {
    category: "ファイル",
    name: "[環境設定][ウィンドウの位置を初期化]",
    priority: 1704,
  },
  1002: { category: "ファイル", name: "[終了]", priority: 1705 },
  // フィルタ
  5183: {
    category: "フィルタ",
    name: "[すべてのフィルタをOFFにする]",
    priority: 2401,
  },
  // 設定
  5127: {
    category: "設定",
    name: "[圧縮の設定][ビデオ圧縮の設定]",
    priority: 3601,
  },
  5128: {
    category: "設定",
    name: "[圧縮の設定][オーディオ圧縮の設定]",
    priority: 3602,
  },
  5399: {
    category: "設定",
    name: "[圧縮の設定][プラグイン出力の設定]",
    priority: 3603,
  },
  5139: {
    category: "設定",
    name: "[フィルタ順序の設定][ビデオフィルタ順序の設定]",
    priority: 3604,
  },
  5181: {
    category: "設定",
    name: "[フィルタ順序の設定][オーディオフィルタ順序の設定]",
    priority: 3605,
  },
  // 編集
  1020: {
    category: "編集",
    name: "[現在のフレームの画像をコピー]",
    priority: 4001,
  },
  5117: {
    category: "編集",
    name: "[現在のフレームに画像を貼り付け]",
    priority: 4002,
  },
  1026: {
    category: "編集",
    name: "[現在のフレームをクリップボードにコピー]",
    priority: 4003,
  },
  5123: {
    category: "編集",
    name: "[現在のフレームにクリップボードから貼り付け]",
    priority: 4004,
  },
  1070: {
    category: "編集",
    name: "[現在のフレームの出力イメージをクリップボードにコピー]",
    priority: 4005,
  },
  5131: { category: "編集", name: "[指定のフレームに移動]", priority: 4006 },
  5115: { category: "編集", name: "[選択範囲の指定]", priority: 4007 },
  5184: {
    category: "編集",
    name: "[選択範囲のフレームに画像を貼り付け]",
    priority: 4008,
  },
  5143: {
    category: "編集",
    name: "[選択範囲のフレーム切り出し]",
    priority: 4009,
  },
  5101: { category: "編集", name: "[選択範囲のフレーム削除]", priority: 4010 },
  5147: { category: "編集", name: "[元に戻す]", priority: 4011 },
  5112: { category: "編集", name: "[すべてのフレームを選択]", priority: 4012 },
  5109: {
    category: "編集",
    name: "[選択範囲を新しいプロファイルにする]",
    priority: 4013,
  },
  5126: {
    category: "編集",
    name: "[選択範囲を新しい圧縮の設定にする]",
    priority: 4014,
  },
  5125: {
    category: "編集",
    name: "[選択範囲のインターレース解除を指定]",
    priority: 4015,
  },
  5196: {
    category: "編集",
    name: "[現在のフレームのインターレース解除][標準]",
    priority: 4016,
  },
  5197: {
    category: "編集",
    name: "[現在のフレームのインターレース解除][反転]",
    priority: 4017,
  },
  5198: {
    category: "編集",
    name: "[現在のフレームのインターレース解除][奇数]",
    priority: 4018,
  },
  5199: {
    category: "編集",
    name: "[現在のフレームのインターレース解除][偶数]",
    priority: 4019,
  },
  5200: {
    category: "編集",
    name: "[現在のフレームのインターレース解除][二重化]",
    priority: 4020,
  },
  5201: {
    category: "編集",
    name: "[現在のフレームのインターレース解除][自動]",
    priority: 4021,
  },
  5206: {
    category: "編集",
    name: "[現在のフレームのプロファイル][標準プロファイル]",
    priority: 4022,
  },
  5207: {
    category: "編集",
    name: "[現在のフレームのプロファイル][プロファイル[1]]",
    priority: 4023,
  },
  5208: {
    category: "編集",
    name: "[現在のフレームのプロファイル][プロファイル[2]]",
    priority: 4024,
  },
  5209: {
    category: "編集",
    name: "[現在のフレームのプロファイル][プロファイル[3]]",
    priority: 4025,
  },
  5210: {
    category: "編集",
    name: "[現在のフレームのプロファイル][プロファイル[4]]",
    priority: 4026,
  },
  5211: {
    category: "編集",
    name: "[現在のフレームのプロファイル][プロファイル[5]]",
    priority: 4027,
  },
  5212: {
    category: "編集",
    name: "[現在のフレームのプロファイル][プロファイル[6]]",
    priority: 4028,
  },
  5213: {
    category: "編集",
    name: "[現在のフレームのプロファイル][プロファイル[7]]",
    priority: 4029,
  },
  5214: {
    category: "編集",
    name: "[現在のフレームのプロファイル][プロファイル[8]]",
    priority: 4030,
  },
  5215: {
    category: "編集",
    name: "[現在のフレームのプロファイル][プロファイル[9]]",
    priority: 4031,
  },
  5129: {
    category: "編集",
    name: "[現在のフレームをキーフレームにする]",
    priority: 4032,
  },
  5132: {
    category: "編集",
    name: "[現在のフレームを優先間引きフレームにする]",
    priority: 4033,
  },
  5130: {
    category: "編集",
    name: "[現在のフレームをマークする]",
    priority: 4034,
  },
  5156: {
    category: "編集",
    name: "[現在のフレームをコピーフレームにする]",
    priority: 4035,
  },
  5398: { category: "編集", name: "[再生速度の情報を変更]", priority: 4036 },
  9002: {
    category: "編集",
    name: "[基本機能][次のフレームに移動 (→)]",
    priority: 4037,
  },
  9001: {
    category: "編集",
    name: "[基本機能][前のフレームに移動 (←)]",
    priority: 4038,
  },
  5142: {
    category: "編集",
    name: "[基本機能][削除フレームを飛ばして次のフレームに移動 (↓)]",
    priority: 4039,
  },
  5141: {
    category: "編集",
    name: "[基本機能][削除フレームを飛ばして前のフレームに移動 (↑)]",
    priority: 4040,
  },
  5396: {
    category: "編集",
    name: "[基本機能][先頭のフレームに移動(Home)]",
    priority: 4041,
  },
  5397: {
    category: "編集",
    name: "[基本機能][先頭のフレームに移動(End)]",
    priority: 4042,
  },
  5110: {
    category: "編集",
    name: "[基本機能][現在のフレームを選択開始フレームにする ([)]",
    priority: 4043,
  },
  5111: {
    category: "編集",
    name: "[基本機能][現在のフレームを選択終了フレームにする (])]",
    priority: 4044,
  },
  5103: {
    category: "編集",
    name: "[基本機能][選択開始フレームに移動]",
    priority: 4045,
  },
  5104: {
    category: "編集",
    name: "[基本機能][選択終了フレームに移動]",
    priority: 4046,
  },
  5174: {
    category: "編集",
    name: "[基本機能][次のキーフレームに移動]",
    priority: 4047,
  },
  5175: {
    category: "編集",
    name: "[基本機能][前のキーフレームに移動]",
    priority: 4048,
  },
  5178: {
    category: "編集",
    name: "[基本機能][次のマークフレームに移動]",
    priority: 4049,
  },
  5179: {
    category: "編集",
    name: "[基本機能][前のマークフレームに移動]",
    priority: 4050,
  },
  5176: {
    category: "編集",
    name: "[基本機能][次のプロファイルの変更フレームに移動]",
    priority: 4051,
  },
  5177: {
    category: "編集",
    name: "[基本機能][前のプロファイルの変更フレームに移動]",
    priority: 4052,
  },
  5170: {
    category: "編集",
    name: "[基本機能][次のフレーム不連続点に移動]",
    priority: 4053,
  },
  5171: {
    category: "編集",
    name: "[基本機能][前のフレーム不連続点に移動]",
    priority: 4054,
  },
  5187: {
    category: "編集",
    name: "[基本機能][任意フレーム数次移動A (PageDown)]",
    priority: 4055,
  },
  5188: {
    category: "編集",
    name: "[基本機能][任意フレーム数前移動A (PageUp)]",
    priority: 4056,
  },
  5189: {
    category: "編集",
    name: "[基本機能][任意フレーム数次移動B]",
    priority: 4057,
  },
  5190: {
    category: "編集",
    name: "[基本機能][任意フレーム数前移動B]",
    priority: 4058,
  },
  5191: {
    category: "編集",
    name: "[基本機能][任意フレーム数次移動C]",
    priority: 4059,
  },
  5192: {
    category: "編集",
    name: "[基本機能][任意フレーム数前移動C]",
    priority: 4060,
  },
  5193: {
    category: "編集",
    name: "[基本機能][任意フレーム数次移動D]",
    priority: 4061,
  },
  5194: {
    category: "編集",
    name: "[基本機能][任意フレーム数前移動D]",
    priority: 4062,
  },
  1099: {
    category: "編集",
    name: "[基本機能][現在のフレームから再生ウィンドウで再生/停止]",
    priority: 4063,
  },
  1090: {
    category: "編集",
    name: "[基本機能][現在のフレーム番号をクリップボードにコピー]",
    priority: 4064,
  },
  // プロファイル
  8001: {
    category: "プロファイル",
    name: "[新しいプロファイルを作る]",
    priority: 5201,
  },
  8002: {
    category: "プロファイル",
    name: "[現在のプロファイルを削除する]",
    priority: 5202,
  },
  8000: {
    category: "プロファイル",
    name: "[現在のプロファイルを初期値に戻す]",
    priority: 5203,
  },
  // 表示
  9200: { category: "表示", name: "[拡大表示][25%]", priority: 6001 },
  9201: { category: "表示", name: "[拡大表示][50%]", priority: 6002 },
  9202: { category: "表示", name: "[拡大表示][100%]", priority: 6003 },
  9203: { category: "表示", name: "[拡大表示][200%]", priority: 6004 },
  9204: { category: "表示", name: "[拡大表示][300%]", priority: 6005 },
  9205: { category: "表示", name: "[拡大表示][400%]", priority: 6006 },
  9206: { category: "表示", name: "[拡大表示][WindowSize]", priority: 6007 },
  9107: { category: "表示", name: "[拡大表示][ズームイン]", priority: 6008 },
  9108: {
    category: "表示",
    name: "[拡大表示][ズームズームアウト]",
    priority: 6009,
  },
  9116: {
    category: "表示",
    name: "[拡大表示][ウィンドウサイズを自動変更]",
    priority: 6010,
  },
  9104: { category: "表示", name: "[オーディオ波形の表示]", priority: 6101 },
  9114: { category: "表示", name: "[時間の表示]", priority: 6102 },
  9105: {
    category: "表示",
    name: "[セーブ中もプレビュー表示]",
    priority: 6103,
  },
  9115: {
    category: "表示",
    name: "[セーブ中にデータレートを表示]",
    priority: 6104,
  },
  9106: {
    category: "表示",
    name: "[間引き予定フレームの表示]",
    priority: 6105,
  },
  9110: {
    category: "表示",
    name: "[再圧縮が必要なフレームの表示]",
    priority: 6106,
  },
  9109: {
    category: "表示",
    name: "[ソースファイルのキーフレーム表示]",
    priority: 6107,
  },
  9113: { category: "表示", name: "[常に手前に表示]", priority: 6401 },
  9111: { category: "表示", name: "[オーバーレイ表示]", priority: 6402 },
  5144: {
    category: "表示",
    name: "[セーブ中のみフィルタリングして表示]",
    priority: 6403,
  },
  // その他
  1006: { category: "その他", name: "[ファイルの情報]", priority: 7001 },
  104: { category: "その他", name: "[オーバーレイ情報]", priority: 7002 },
  101: { category: "その他", name: "[プラグインフィルタ情報]", priority: 7003 },
  103: { category: "その他", name: "[入力プラグイン情報]", priority: 7004 },
  105: { category: "その他", name: "[出力プラグイン情報]", priority: 7005 },
  110: { category: "その他", name: "[色変換プラグイン情報]", priority: 7006 },
  107: { category: "その他", name: "[言語拡張リソース情報]", priority: 7007 },
  100: { category: "その他", name: "[バージョン情報]", priority: 7101 },
  20001: { category: "その他", name: "[patch.aul]", priority: 7102 },
};

const fileCommands: { [key: string]: number } = {
  プラグイン出力: 1101,
  インポート: 1302,
  エクスポート: 1402,
  入力プラグインの設定: 1601,
};

export class Command {
  _priority: number;
  _id: number;
  _category: string;
  _name: string;

  get priority(): number {
    return this._priority;
  }

  get id(): number {
    return this._id;
  }

  get category(): string {
    return this._category;
  }

  get name(): string {
    return this._name;
  }

  get fullName(): string {
    return `[${this.category}]${this.name}`;
  }

  constructor(id: number, name: string) {
    this._id = id;
    const com = commands[id];
    if (com != undefined) {
      this._priority = com.priority;
      this._category = com.category;
      this._name = com.name;
      return;
    }

    const elems = name.slice(1, -1).split("][");
    if (elems[0].startsWith("ファイル")) {
      this._category = "ファイル";
      this._priority = fileCommands[elems[1]] ?? 1999;
    } else if (elems[0].startsWith("フィルタ")) {
      this._category = "フィルタ";
      this._priority = 2001;
    } else if (elems[0].startsWith("設定")) {
      this._category = "設定";
      this._priority = 3001;
    } else if (elems[0].startsWith("編集")) {
      this._category = "編集";
      this._priority = 4101;
    } else if (elems[0].startsWith("プロファイル")) {
      this._category = "プロファイル";
      this._priority = 5001;
    } else if (elems[0].startsWith("表示")) {
      this._category = "表示";
      this._priority = 6201;
    } else if (elems[0].startsWith("その他")) {
      this._category = "その他";
      this._priority = 7201;
    } else {
      this._category = elems[0];
      this._priority = 9001;
    }
    this._name = elems.slice(1).join("][");
    if (this._name.length > 0) {
      this._name = `[${this._name}]`;
    }
  }
}
