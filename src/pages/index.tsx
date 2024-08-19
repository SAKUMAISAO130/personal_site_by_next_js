import { useState, useEffect } from 'react';
// ストップウォッチコンポーネントをインポート
import Stopwatch from '../components/Stopwatch';

// Homeコンポーネントを定義
export default function Home() {
  // 時間と日付の状態を定義
  const [time, setTime] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [is24Hour, setIs24Hour] = useState<boolean>(false); // 24時間制かどうかの状態

  // コンポーネントがマウントされたときに時刻を更新する
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setTime(formatTime(now));
      setDate(formatDate(now));
    }, 1000);

    return () => clearInterval(interval); // クリーンアップ
  }, [is24Hour]);

  // 時刻をフォーマットする関数
  const formatTime = (date: Date): string => {
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    // 12時間制にする
    if (!is24Hour) {
      hours = hours % 12 || 12;
    }

    // 時刻を適切な形式で返す
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}${!is24Hour ? ` ${ampm}` : ''}`;
  };

  // 日付をフォーマットする関数
  const formatDate = (date: Date): string => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}/${month}/${day}`;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-500">
      {/* 時刻と日付表示 */}
      <h1 className="text-5xl font-bold mb-4">{time}</h1>
      <h2 className="text-3xl mb-8">{date}</h2>
      {/* 12時間制/24時間制の切り替えボタン */}
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => setIs24Hour(!is24Hour)}
      >
        {is24Hour ? '12時間表示に変更' : '24時間表示に変更'}
      </button>
      {/* ストップウォッチの表示 */}
      <Stopwatch />
    </div>
  );
}