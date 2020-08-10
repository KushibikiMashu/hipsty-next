// OOP的実装。もしClass形式にするなら下記のようにする
// 実験（2020/8/10 〜）
// トレードオフで失うものは、Viewでメソッドを使ってしまうこと
// 本当はシンプルさを保つためにviewはprimitiveな値だけ渡したい（例えば、GraphQLに差し替えにくくなる）。
export class Genre {
  constructor(private genre: string) {}

  toSlug = () => `${this.genre}s`
}
