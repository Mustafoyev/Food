import axios from 'axios';
import { useRef } from 'react';
import { Input } from '../Input/Input';
import { Select } from '../Select/Select';
import FormData from 'form-data';
import './addModal.scss';
import { useState } from 'react';

export const AddModal = ({ setAddModal }) => {
	const nameRef = useRef();
	const bowlsRef = useRef();
	const priceRef = useRef();
	const selRef = useRef();
	const [image, setImage] = useState('');

	async function handleFormSubmit() {
		const data = new FormData();

		data.append('name', nameRef.current.value);
		data.append('price', priceRef.current.value);
		data.append('bowls', bowlsRef.current.value);
		data.append('category_id', selRef.current.value);
		data.append('food_img', image, image.name);

		return await axios({
			method: 'post',
			url: 'http://localhost:5000/food',
			data: data,
			headers: { 'Content-Type': 'multipart/form-data' },
		})
			.then((res) => {
				console.log(res);
				if (res.status === 200) {
					return setAddModal(false);
				}
			})
			.catch((err) => console.log(err));
	}

	return (
		<div className='add-modal'>
			<div className='add-modal__modal'>
				<div className='add-modal__modal-header'>
					<h3 className='add-modal__modal-title'>
						Add new product item to list
					</h3>
					<button
						className='add-modal__modal-close'
						onClick={() => setAddModal(false)}>
						X
					</button>
				</div>
				<div className='add-modal__modal-content'>
					<div className='add-modal__modal-inputs'>
						<Input
							ref={nameRef}
							className='add-modal__modal-inp'
							type='text'
							placeholder='Product name'
						/>
						<Input
							ref={bowlsRef}
							className='add-modal__modal-inp'
							type='number'
							placeholder='Product bowls'
						/>
						<Input
							ref={priceRef}
							className='add-modal__modal-inp'
							type='number'
							placeholder='Product price'
						/>
						<div className='add-modal__modal-selwrapper'>
							<Select ref={selRef} className='add-modal__modal-select'>
								<option selected disabled>
									Product category
								</option>
								<option value={'1'}>Hot Dishes</option>
								<option value={'2'}>Cool Dishes</option>
								<option value={'3'}>Soup</option>
								<option value={'4'}>Grill</option>
								<option value={'5'}>Appetizer</option>
								<option value={'6'}>Dessert</option>
							</Select>
						</div>
						<label htmlFor='download' className='add-modal__modal-inpwrapper'>
							<p className='modal-text'>
								Click or drag file to this area to upload
							</p>
							<p className='modal-text__bottom'>
								Support for a single or bulk upload.
							</p>
							<Input
								onChange={(evt) => setImage(evt.target.files[0])}
								className='add-modal__modal-input'
								id='download'
								type='file'
								name='file'
							/>
						</label>
					</div>
					<div className='add-modal__modal-buttons'>
						<button
							className='add-modal__modal-btn'
							onClick={() => setAddModal(false)}>
							Cancel
						</button>
						<button onClick={handleFormSubmit} className='add-modal__modal-btn'>
							Add{' '}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
