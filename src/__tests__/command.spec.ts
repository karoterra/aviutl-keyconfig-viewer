import { describe, it, expect } from "vitest";

import { Command } from "@/command";

function e(
  id: number,
  name1: string,
  priority: number,
  category: string,
  name2: string
) {
  const com = new Command(id, name1);
  expect(com.id).toEqual(id);
  expect(com.priority).toEqual(priority);
  expect(com.category).toEqual(category);
  expect(com.name).toEqual(name2);
  expect(com.fullName).toEqual(`[${category}]${name2}`);
}

describe("Command", () => {
  it("Command", () => {
    e(5097, "", 1001, "ファイル", "[開く]");
    e(
      9999,
      "[ファイル][プラグイン出力][ffmpeg 出力]",
      1101,
      "ファイル",
      "[プラグイン出力][ffmpeg 出力]"
    );
    e(9999, "[ファイル(&F)][FFF]", 1999, "ファイル", "[FFF]");
    e(9999, "[ファイル]", 1999, "ファイル", "");
    e(
      9999,
      "[フィルタ(&L)][ぼかしフィルタ]",
      2001,
      "フィルタ",
      "[ぼかしフィルタ]"
    );
    e(
      9999,
      "[設定][ぼかしフィルタの設定]",
      3001,
      "設定",
      "[ぼかしフィルタの設定]"
    );
    e(
      16168,
      "[編集][拡張編集][新規プロジェクトの作成]",
      4101,
      "編集",
      "[拡張編集][新規プロジェクトの作成]"
    );
    e(9999, "[プロファイル][デフォルト]", 5001, "プロファイル", "[デフォルト]");
    e(9999, "[表示][AAA]", 6201, "表示", "[AAA]");
    e(9999, "[その他][ZZZ]", 7201, "その他", "[ZZZ]");
    e(9999, "[Hoge(&H)][Command]", 9001, "Hoge(&H)", "[Command]");
    e(9999, "", 9001, "", "");
  });
});
