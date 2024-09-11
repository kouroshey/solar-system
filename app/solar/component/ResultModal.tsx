import { Modal } from "@/app/components/modal";
import { FC } from "react";

type ResultModalProps = {
  setIsModalShow: (val: boolean) => void;
  isModalShow: boolean;
  isCurrectSorted: boolean;
  resetGame: () => void;
}

const ResultModal: FC<ResultModalProps> = ({ resetGame, isModalShow, setIsModalShow, isCurrectSorted }) => {
  return (
    <Modal
      onClose={() => setIsModalShow(false)}
      show={isModalShow}
    >
      <div className={`welcome-modal ${isCurrectSorted ? 'success-result' : 'failed-result'} flex flex-col gap-4`}>
        <h2 className="font-bold text-3xl">{isCurrectSorted ? 'عالی بود!' : 'متاسفانه ترتیب سیاره‌ها درست نبود :('}</h2>
        <div className="modal-content">
          {isCurrectSorted ?
            <p>همه‌ی سیاره‌ها رو سر جاشون نشوندی!</p>
            : <p>اگه نیاز به راهنمایی داری روی آیکن علامت سوال کلیک کن</p>}
        </div>
        <div className="w-full justify-end flex gap-3 mt-8">
          <button
            onClick={() => {
              resetGame()
              setIsModalShow(false)
            }}
            className='btnn-active btn bg-white text-gray-500'>شروع دوباره</button>
        </div>
      </div>
    </Modal>
  )
}

export default ResultModal