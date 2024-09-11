import { Modal } from "@/app/components/modal"
import { FC } from "react";

type GuideModalProps = {
  setIsModalShow: (val: boolean) => void;
  isModalShow: boolean
}

const GuideModal: FC<GuideModalProps> = ({ setIsModalShow, isModalShow }) => {
  return (
    <Modal
      onClose={() => setIsModalShow(false)}
      show={isModalShow}
    >
      <div className='welcome-modal flex flex-col gap-4'>
        <h2 className="font-bold text-3xl">خوش اومدی!</h2>
        <div className="modal-content">
          <p className="underline-offset-8 underline">یه توضیح کوچیک راجع به بازی</p>
          <p className="pt-4">خب بازی به این صورته که باید ترتیب سیاره ها رو با کلیک کردن و کشیدنشون سر جای اصلی‌ خودشون درست کنی. بعد از اینکه فکر کردی کارت تموم شده، روی دکمه دیدن نتیجه کلیک کن تا نتیجه‌ی کار رو ببینی.</p>
          <p className="pt-4">کنار صفحه اسامی سیاره ها رو برات قرار دادیم تا بهتر بتونی از همدیگه تشخیصشون بدی.</p>
          <p className="pt-4">هرموقع نیاز به دیدن دوباره‌ی راهنمای بازی داشتی میتونی با کلیک کردن روی فلان این راهنمایی رو دوباره ببینی</p>
          <p className="pt-4">اگه آماده‌ای شروع کنیم!</p>
        </div>
        <div className="w-full justify-end flex gap-3 mt-8">
          <button
            onClick={() => setIsModalShow(false)}
            className='btn-active bg-white text-gray-500 btn'>بزن بریم!</button>
        </div>
      </div>
    </Modal>
  )
}

export default GuideModal