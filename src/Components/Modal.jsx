import { formatMoney } from "../utils/formatMoney";

export default function Modal(props) {
  return (
    <div
      id="modal"
      data-testid="modal"
      className={`fixed z-30 inset-0 overflow-y-auto ${
        !props.isOpen && "hidden"
      }`}
    >
      <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div
          onClick={() => props.setIsOpen(false)}
          className="fixed inset-0 transition-opacity"
        >
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
        &#8203;
        <div
          className="inline-block p-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="font-bold text-center rounded-md">Carrinho</div>

          <div className="flex justify-between p-2 mt-1 bg-gray-200 rounded-md">
            <p className="font-bold">Produto Exemplo</p>
            <p>{formatMoney(0)}</p>
          </div>

          <div className="w-full h-1 my-2 bg-gray-700"></div>
          <div className="flex justify-between p-2">
            <p>Total</p>
            <p>{formatMoney(props.data.totalValue)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
