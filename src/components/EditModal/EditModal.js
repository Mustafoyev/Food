import axios from 'axios';
import FormData from 'form-data';
import { useState } from 'react';
import { useRef } from 'react';
import { Input } from '../Input/Input';
import { Select } from '../Select/Select';
import './editModal.scss';

export const EditModal = ({ setEditModal, editedDish }) => {
	const [image, setImage] = useState('');
	const [editDish] = editedDish;

	const nameRef = useRef();
	const bowlsRef = useRef();
	const priceRef = useRef();
	const selRef = useRef();

	async function handleEditDish(id) {
		const data = new FormData();

		data.append('name', nameRef.current.value);
		data.append('price', priceRef.current.value);
		data.append('bowls', bowlsRef.current.value);
		data.append('category_id', selRef.current.value);
		data.append('food_img', image, image.name);

		return await axios({
			method: 'put',
			url: `http://localhost:5000/food/${id}`,
			data: data,
			headers: { 'Content-Type': 'multipart/form-data' },
		})
			.then((res) => {
				console.log(res);
				if (res.status === 200) {
					return setEditModal(false);
				}
			})
			.catch((err) => console.log(err));
	}

	const handleDeleteDish = (id) => {
		axios
			.delete(`http://localhost:5000/food/${id}`)
			.then((res) => {
				console.log(res);
				if (res.status === 200) {
					return setEditModal(false);
				}
			})
			.catch((err) => console.log(err));
	};

	return (
		<div className='edit-modal'>
			<div className='edit-modal__content'>
				<div className='edit-modal__header'>
					<h4 className='edit-modal__header-title'>
						Edit or delete product item{' '}
					</h4>
					<button
						onClick={() => setEditModal(false)}
						className='edit-modal__header-close'>
						X
					</button>
				</div>
				<div className='edit-modal__body'>
					<div className='edit-modal__modal-inputs'>
						<Input
							ref={nameRef}
							defaultValue={editDish.name}
							className='edit-modal__modal-inp'
							type='text'
							placeholder='Product name'
						/>
						<Input
							ref={bowlsRef}
							defaultValue={editDish.bowls}
							className='edit-modal__modal-inp'
							type='number'
							placeholder='Product bowls'
						/>
						<Input
							ref={priceRef}
							defaultValue={editDish.price}
							className='edit-modal__modal-inp'
							type='number'
							placeholder='Product price'
						/>
						<div className='edit-modal__modal-selwrapper'>
							<Select ref={selRef} className='edit-modal__modal-select'>
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
						<label
							defaultValue={editDish.image}
							htmlFor='download'
							className='edit-modal__modal-inpwrapper'>
							<p className='editmodal-text'>
								Click or drag file to this area to upload
							</p>
							<p className='editmodal-text__bottom'>
								Support for a single or bulk upload.
							</p>
							<Input
								onChange={(evt) => setImage(evt.target.files[0])}
								className='edit-modal__modal-input'
								id='download'
								type='file'
								name='file'
							/>
						</label>
					</div>
					<div className='edit-modal__btns'>
						<button
							onClick={() => handleDeleteDish(editDish.id)}
							className='edit-modal__btn'>
							Delete
						</button>
						<button
							onClick={() => handleEditDish(editDish.id)}
							className='edit-modal__btn'>
							Edit
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
