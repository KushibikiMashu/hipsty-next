// リソース名にしたいので、genre名を英語の複数形に変換する
// 「リンク生成ロジック」の一種なので、本来はViewやControllerに対するロジック
export const genreToSlug = (genre: string) => `${genre}s`
