import { useState, useRef } from 'react';

// Stopwatchコンポーネントを定義
export default function Stopwatch() {
  const [time, setTime] = useState<number>(0); // 経過時間をミリ秒で管理
  const [isRunning, setIsRunning] = useState<boolean>(false); // ストップウォッチが動作中かどうか
  const timerRef = useRef<NodeJS.Timeout | null>(null); // タイマーを保持

  // ストップウォッチを開始する関数
  const start = () => {
    if (!isRunning) {
      setIsRunning(true);
      timerRef.current = setInterval(() => {
        setTime(prevTime => prevTime + 10);
      }, 10);
    }
  };

  // ストップウォッチを停止する関数
  const stop = () => {
    if (isRunning) {
      setIsRunning(false);
      if (timerRef.current) clearInterval(timerRef.current);
    }
  };

  // ストップウォッチをリセットする関数
  const reset = () => {
    stop();
    setTime(0);
  };

  // 経過時間をフォーマットする関数
  const formatTime = (time: number): string => {
    const getMilliseconds = `0${(time % 1000) / 10}`.slice(-2);
    const getSeconds = `0${Math.floor((time / 1000) % 60)}`.slice(-2);
    const getMinutes = `0${Math.floor((time / 60000) % 60)}`.slice(-2);
    const getHours = `0${Math.floor((time / 3600000) % 24)}`.slice(-2);
    return `${getHours}:${getMinutes}:${getSeconds}.${getMilliseconds}`;
  };

  return (
    <div className="flex flex-col items-center mt-8">
      {/* 経過時間の表示 */}
      <div className="text-4xl mb-4">{formatTime(time)}</div>
      <div className="flex space-x-4">
        {/* スタートボタン */}
        <button
          className="px-4 py-2 bg-green-500 text-white rounded"
          onClick={start}
          disabled={isRunning}
        >
          Start
        </button>
        {/* ストップボタン */}
        <button
          className="px-4 py-2 bg-red-500 text-white rounded"
          onClick={stop}
          disabled={!isRunning}
        >
          Stop
        </button>
        {/* リセットボタン */}
        <button
          className="px-4 py-2 bg-gray-500 text-white rounded"
          onClick={reset}
        >
          Reset
        </button>
      </div>
    </div>
  );
}