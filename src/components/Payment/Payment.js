import { useContext, useRef } from 'react';
import { ModalContext } from '../../context/ModalContext/ModalContext';
import { Input } from '../Input/Input';
import { Select } from '../Select/Select';
import './payment.scss';

export const Payment = () => {
	const { setModal } = useContext(ModalContext);
	const overlayRef = useRef();
	const cardHolderRef = useRef();
	const cardNumberRef = useRef();
	const dataRef = useRef();
	const cvvRef = useRef();
	const selectRef = useRef();
	const tableRef = useRef();

	const handleCloseModal = (evt) => {
		if (evt.target === overlayRef.current) {
			setModal(false);
		}
	};

	const handleFormSubmit = (evt) => {
		evt.preventDefault();
		console.log(cardHolderRef.current.value);
		console.log(cardNumberRef.current.value);
		console.log(dataRef.current.value);
		console.log(cvvRef.current.value);
		console.log(selectRef.current.value);
		console.log(tableRef.current.value);
	};

	return (
		<div ref={overlayRef} onClick={handleCloseModal} className='overlay'>
			<div className='payment-modal'>
				<div className='payment-modal__header'>
					<h3 className='payment-modal__header-title'>Payment</h3>
					<p className='payment-modal__header-text'>
						3 payment method available
					</p>
				</div>
				<div className='payment-modal__body'>
					<h3 className='payment-modal__body-title'>Payment Method</h3>
					<ul className='payment-modal__body-list'>
						<li className='payment-modal__body-item'>
							<svg
								className='payment-modal__body-itemimg'
								width='25'
								height='24'
								viewBox='0 0 25 24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									fill-rule='evenodd'
									clip-rule='evenodd'
									d='M1.75 9C1.75 6.37665 3.87665 4.25 6.5 4.25H18.5C21.1234 4.25 23.25 6.37665 23.25 9V15C23.25 17.6234 21.1234 19.75 18.5 19.75H6.5C3.87665 19.75 1.75 17.6234 1.75 15V9ZM3.33697 8.25H21.663C21.3245 6.81665 20.0368 5.75 18.5 5.75H6.5C4.96321 5.75 3.67555 6.81665 3.33697 8.25ZM21.75 9.75H3.25V15C3.25 16.7949 4.70507 18.25 6.5 18.25H18.5C20.2949 18.25 21.75 16.7949 21.75 15V9.75ZM13.75 15C13.75 14.5858 14.0858 14.25 14.5 14.25H18.5C18.9142 14.25 19.25 14.5858 19.25 15C19.25 15.4142 18.9142 15.75 18.5 15.75H14.5C14.0858 15.75 13.75 15.4142 13.75 15Z'
									fill='white'
								/>
							</svg>
							<h4 className='payment-modal__body-itemtitle'>Credit Card</h4>
						</li>
						<li className='payment-modal__body-item'>
							<svg
								className='payment-modal__body-itemimg'
								width='25'
								height='24'
								viewBox='0 0 25 24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M18 7.2C19.7 8.2 20.5 10 20.5 12C20.5 14.5 18 16.5 15.5 16.5H12.9L12.3 20.1C12.2532 20.3293 12.1276 20.5349 11.9449 20.6811C11.7621 20.8272 11.5339 20.9047 11.3 20.9H8.6C8.52501 20.9015 8.45064 20.8861 8.38239 20.855C8.31415 20.8239 8.25378 20.7778 8.20577 20.7202C8.15775 20.6626 8.12331 20.5949 8.105 20.5222C8.08669 20.4494 8.08498 20.3735 8.1 20.3L8.3 18.9M10.5 13H13C15.5 13 18 10.5 18 8C18 5 16.1 3 13 3H7.5C7 3 6.5 3.5 6.5 4L4.5 18C4.5 18.5 5 19 5.5 19H8.3L9.5 14C9.6 13.4 9.9 13 10.5 13Z'
									stroke='#ABBBC2'
									stroke-width='1.5'
									stroke-linecap='round'
									stroke-linejoin='round'
								/>
							</svg>
							<h4 className='payment-modal__body-itemtitle'>Paypal</h4>
						</li>
						<li className='payment-modal__body-item'>
							<svg
								className='payment-modal__body-itemimg'
								width='21'
								height='20'
								viewBox='0 0 21 20'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M14.688 0.5C17.8978 0.5 20.5 3.16116 20.5 6.44374V13.5563C20.5 16.8388 17.8978 19.5 14.688 19.5H6.31204C3.10219 19.5 0.5 16.8388 0.5 13.5563V6.44374C0.5 3.16116 3.10219 0.5 6.31204 0.5H14.688ZM14.688 1.98651H6.31204C3.90498 1.98651 1.95358 3.98213 1.95358 6.44374V13.5563C1.95358 16.0179 3.90498 18.0135 6.31204 18.0135H14.688C17.095 18.0135 19.0464 16.0179 19.0464 13.5563L19.046 13.279L15.8499 13.2798C14.0084 13.2787 12.5159 11.7531 12.5147 9.86949C12.5147 8.04914 13.9101 6.56244 15.6673 6.46431L15.8504 6.45916L19.046 6.459L19.0464 6.44374C19.0464 4.05454 17.2081 2.10431 14.8991 1.99165L14.688 1.98651ZM19.046 7.945L15.8508 7.94567C14.8109 7.94632 13.9683 8.80743 13.9683 9.86904C13.9689 10.8811 14.7329 11.7102 15.7033 11.7874L15.8504 11.7933L19.046 11.793V7.945ZM16.2942 9.06518C16.6956 9.06518 17.021 9.39795 17.021 9.80844C17.021 10.1847 16.7475 10.4957 16.3928 10.5449L16.2942 10.5517H15.9921C15.5907 10.5517 15.2653 10.2189 15.2653 9.80844C15.2653 9.43215 15.5388 9.12118 15.8935 9.07196L15.9921 9.06518H16.2942ZM10.8539 4.99736C11.2553 4.99736 11.5807 5.33013 11.5807 5.74062C11.5807 6.1169 11.3073 6.42788 10.9525 6.47709L10.8539 6.48388H5.62203C5.22063 6.48388 4.89524 6.15111 4.89524 5.74062C4.89524 5.36434 5.16866 5.05337 5.5234 5.00415L5.62203 4.99736H10.8539Z'
									fill='#ABBBC2'
								/>
							</svg>
							<h4 className='payment-modal__body-itemtitle'>Cash</h4>
						</li>
					</ul>
					<form
						onSubmit={handleFormSubmit}
						className='payment-modal__body-form'>
						<div className='inp-top-wrapper'>
							<h4 className='inp-top-title'>Cardholder Name</h4>
							<Input
								ref={cardHolderRef}
								className='inp-top'
								type='text'
								placeholder='Levi Ackerman'
							/>
						</div>
						<div className='inp-center-wrapper'>
							<h4 className='inp-center-title'>Card Number</h4>
							<Input
								ref={cardNumberRef}
								className='inp-center'
								type='number'
								placeholder='2564 1421 0897 1244'
							/>
						</div>
						<div className='inp-bottom-wrapper'>
							<div className='inp-bottom-wrap'>
								<h4 className='inp-bottom-title'>Expiration Date</h4>
								<Input
									ref={dataRef}
									className='inp-bottom'
									type='text'
									placeholder='02/2022'
								/>
							</div>
							<div className='inp-bottom-wrap'>
								<h4 className='inp-bottom-title'>CVV</h4>
								<Input ref={cvvRef} className='inp-bottom' type='number' />
							</div>
						</div>
						<div className='inp-footer-wrapper'>
							<div className='inp-footer-wrap '>
								<h4 className='inp-footer-title'>Order Type</h4>
								<div className='filter__select-wrapper sel-warpper'>
									<Select
										ref={selectRef}
										className='select-footer filter__select'
										type='text'
										placeholder='02/2022'>
										<option value={'Dine In'}>Dine In</option>
									</Select>
								</div>
							</div>
							<div className='inp-footer-wrap'>
								<h4 className='inp-footer-title'>Table no.</h4>
								<Input
									ref={tableRef}
									className='inp-footer'
									type='number'
									placeholder='140'
								/>
							</div>
						</div>
						<div className='payment-modal__footer'>
							<button
								onClick={() => setModal(false)}
								className='payment-modal__footer-btn'>
								Cancel
							</button>
							<button className='payment-modal__footer-btn' type='submit'>
								Confirm Payment
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};
