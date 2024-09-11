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
        <h2 className="font-bold text-3xl">خوش اومدید!</h2>
        <div className="modal-content">
          <p>راهنمایی میخوای یا چی؟</p>
        </div>
        <div className="w-full justify-end flex gap-3 mt-8">
          <button className='button-active bg-white text-gray-500 shadow-lg shadow-white hover:shadow-sm'>بزن بریم!</button>
          <button
            onClick={() => setIsModalShow(false)}
            className='button-active bg-purple-600 shadow-lg shadow-purple-600 hover:shadow-md'>نه خودم بلدم</button>
        </div>
      </div>
    </Modal>
  )
}

export default GuideModal