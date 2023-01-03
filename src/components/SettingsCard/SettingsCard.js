import { useState } from 'react';
import { EditModal } from '../EditModal/EditModal';
import { Loader } from '../Loader/Loader';
import './settingsCard.scss';

export const SettingsCard = ({ obj }) => {
	const [editModal, setEditModal] = useState(false);
	const [editedDish, setEditedDish] = useState([]);

	const handleEditItem = (id) => {
		setEditModal(true);
		setEditedDish(obj.filter((el) => el.id === id));
	};

	return (
		<>
			{obj.length ? (
				<>
					{obj.map((el) => (
						<div className='settings-card__item' key={el.id}>
							<img
								className='settings-card__item-img'
								src={`http://localhost:5000/${el.image}`}
								alt={el.name}
								width={132}
								height={132}
							/>
							<h4 className='settings-card__item-title'>{el.name}</h4>
							<div className='settings-card__item-wrapper'>
								<span className='settings-card__item-price'>$ {el.price}</span>
								<span className='settings-card__item-bowls'>
									{el.bowls} Bowls
								</span>
							</div>
							<div
								onClick={() => handleEditItem(el.id)}
								className='settings-card__item-btnwra'>
								<button className='settings-card__item-btn'>Edit dish</button>
							</div>
						</div>
					))}

					{editModal && (
						<EditModal setEditModal={setEditModal} editedDish={editedDish} />
					)}
				</>
			) : (
				<Loader />
			)}
		</>
	);
};
