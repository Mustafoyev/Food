import { NavLink } from 'react-router-dom';

import './settingsMenu.scss';

export const SettingsMenu = () => {
	const menu = [
		{
			icon: (
				<svg
					className='setting-icon'
					width='14'
					height='14'
					viewBox='0 0 14 14'
					xmlns='http://www.w3.org/2000/svg'>
					<path
						d='M3.32223 0.87682C4.49376 0.49998 5.76145 0.635586 6.82216 1.23745L6.99776 1.34282L7.17651 1.23686C8.18215 0.667493 9.37509 0.515351 10.4977 0.824114L10.6748 0.876859C13.1233 1.66516 14.2196 4.33863 13.3959 6.89673C12.983 8.0867 12.3057 9.1656 11.4118 10.0549C10.1953 11.2363 8.85429 12.2796 7.41471 13.1648L7.26188 13.2598C7.1067 13.3562 6.91057 13.3579 6.75379 13.264L6.59008 13.166C5.14852 12.2796 3.80751 11.2363 2.58686 10.0508C1.69706 9.1656 1.01981 8.0867 0.603376 6.8863C-0.217261 4.33708 0.874507 1.66488 3.32223 0.87682ZM6.58326 2.23614C5.71387 1.64189 4.62237 1.48222 3.62119 1.80426C1.72514 2.4147 0.865548 4.51863 1.52821 6.57753C1.89267 7.62779 2.4902 8.57968 3.27071 9.35619C4.436 10.4879 5.72049 11.4872 7.09619 12.3332L7.00101 12.2732L7.31291 12.077C8.40187 11.3739 9.4275 10.5761 10.3759 9.6947L10.7279 9.36029C11.5126 8.57968 12.1101 7.62779 12.4711 6.58795C13.1366 4.5206 12.2733 2.41519 10.3762 1.80442C9.325 1.46717 8.1775 1.66034 7.29082 2.32413C7.12059 2.45157 6.88731 2.45404 6.71441 2.33021L6.58326 2.23614ZM9.58033 3.32245C10.4613 3.60363 11.086 4.39235 11.164 5.31898C11.1865 5.58709 10.9873 5.82271 10.719 5.84525C10.4506 5.86779 10.2148 5.66871 10.1922 5.4006C10.1472 4.86531 9.78777 4.41153 9.2836 4.25061C9.02709 4.16873 8.88557 3.89459 8.96751 3.63829C9.04945 3.38198 9.32382 3.24058 9.58033 3.32245Z'
						fill='currentColor'
					/>
				</svg>
			),
			title: 'Appereance',
			text: 'Dark and Light mode, Font size',
			path: 'appereance',
		},
		{
			icon: (
				<svg
					className='setting-icon'
					width='14'
					height='14'
					viewBox='0 0 14 14'
					xmlns='http://www.w3.org/2000/svg'>
					<path
						d='M13.6425 3.51624L12.6902 0.659099C12.6254 0.46454 12.4433 0.333318 12.2383 0.333374H1.76207C1.55702 0.333318 1.37496 0.46454 1.31018 0.659099L0.357778 3.51624C0.343101 3.56072 0.334898 3.60706 0.333503 3.65385C0.333503 3.65862 0.333503 3.66194 0.333503 3.66671V4.14291C0.335233 4.88901 0.688051 5.59079 1.28587 6.03719C1.28587 6.04101 1.28587 6.04386 1.28587 6.04766V12.2381C1.28587 13.0271 1.92547 13.6667 2.71444 13.6667H11.2859C12.0748 13.6667 12.7144 13.0271 12.7144 12.2381V6.04766C12.7144 6.04383 12.7144 6.04099 12.7144 6.03719C13.3123 5.59079 13.6651 4.88901 13.6668 4.14291V3.66671C13.6668 3.66194 13.6668 3.65862 13.6668 3.65385C13.6654 3.60703 13.6572 3.56069 13.6425 3.51624ZM2.1335 1.28574H11.8949L12.5302 3.19051H1.46683L2.1335 1.28574ZM7.95255 12.7143H6.04778V8.9048H7.95255V12.7143ZM11.7621 12.2381C11.7621 12.5011 11.5489 12.7143 11.2859 12.7143H8.90493V8.42862C8.90493 8.16562 8.69173 7.95242 8.42873 7.95242H5.57159C5.30858 7.95242 5.09539 8.16562 5.09539 8.42862V12.7143H2.71444C2.45144 12.7143 2.23825 12.5011 2.23825 12.2381V6.47623C2.90652 6.61342 3.60144 6.45393 4.14301 6.03909C4.99307 6.66342 6.1501 6.66342 7.00016 6.03909C7.85021 6.66342 9.00724 6.66342 9.8573 6.03909C10.3989 6.45396 11.0938 6.61342 11.7621 6.47623V12.2381ZM11.2859 5.57146C10.8741 5.5712 10.483 5.39057 10.2159 5.07718C10.0428 4.87916 9.74198 4.8589 9.54396 5.03195C9.52789 5.04598 9.51277 5.06111 9.49873 5.07718C8.96924 5.66814 8.06098 5.71794 7.47002 5.18848C7.43093 5.15343 7.39377 5.11629 7.35872 5.07718C7.17237 4.87916 6.86076 4.86967 6.66271 5.05605C6.65546 5.06289 6.6484 5.06992 6.64159 5.07718C6.11213 5.66814 5.20384 5.71794 4.61288 5.18848C4.57376 5.15343 4.53663 5.11629 4.50158 5.07718C4.31522 4.87916 4.00359 4.86967 3.80557 5.05605C3.79832 5.06289 3.79126 5.06992 3.78445 5.07718C3.51729 5.39057 3.12627 5.5712 2.71444 5.57146C1.92547 5.57146 1.28587 4.93186 1.28587 4.14289H12.7144C12.7144 4.93186 12.0748 5.57146 11.2859 5.57146Z'
						fill='currentColor'
					/>
				</svg>
			),
			title: 'Your Restaurant',
			text: 'Dark and Light mode, Font size',
			path: 'your-restaurant',
		},
		{
			icon: (
				<svg
					className='setting-icon'
					width='14'
					height='14'
					viewBox='0 0 14 14'
					xmlns='http://www.w3.org/2000/svg'>
					<path
						d='M8.30082 0.811045L8.42237 0.924383L8.90153 1.40355C9.06612 1.56736 9.28201 1.66836 9.51166 1.69105L9.61082 1.69594H10.2962C11.3654 1.69594 12.2397 2.53205 12.3007 3.58597L12.3042 3.70394V4.3886C12.3042 4.6218 12.3846 4.84598 12.5296 5.02424L12.5957 5.09772L13.0749 5.57692C13.8292 6.32785 13.863 7.52871 13.1719 8.32009L13.0817 8.41682L12.5961 8.9024C12.4328 9.06611 12.3318 9.28216 12.309 9.51158L12.3042 9.6106V10.2966C12.3042 11.3658 11.4681 12.2395 10.4141 12.3005L10.2962 12.3039H9.61082C9.37846 12.3039 9.15398 12.3847 8.97563 12.5301L8.90212 12.5964L8.42357 13.0743C7.67344 13.8295 6.47171 13.863 5.68003 13.1717L5.57726 13.0755L5.09919 12.5974C4.93359 12.433 4.7173 12.3316 4.4883 12.3088L4.38948 12.3039H3.70348C2.63473 12.3039 1.76063 11.4683 1.69956 10.4145L1.69615 10.2966V9.6106C1.69615 9.37862 1.61529 9.15392 1.4699 8.9759L1.40369 8.90258L0.9256 8.42382C0.17055 7.67303 0.137058 6.47128 0.828404 5.68038L0.918598 5.58372L1.40268 5.09897C1.56731 4.93317 1.66853 4.71729 1.69126 4.48772L1.69615 4.3886V3.70394L1.69956 3.58598C1.75837 2.5712 2.57115 1.75818 3.58557 1.69935L3.70348 1.69594H4.38948C4.6218 1.69594 4.84632 1.61535 5.02435 1.47056L5.09769 1.40463L5.57646 0.925184C6.32737 0.170866 7.52899 0.137657 8.30082 0.811045ZM6.36109 1.56179L6.28462 1.63124L5.80378 2.11274C5.45895 2.45513 5.00287 2.65985 4.52137 2.69159L4.38948 2.69594H3.70348C3.17844 2.69594 2.74663 3.0987 2.70027 3.61222L2.69615 3.70394V4.3886C2.69615 4.87471 2.51974 5.34214 2.20155 5.70752L2.11128 5.80458L1.6265 6.29002C1.25863 6.65957 1.23721 7.24335 1.56231 7.63938L1.63195 7.71596L2.11146 8.19614C2.45439 8.53988 2.65992 8.99677 2.69179 9.47863L2.69615 9.6106V10.2966C2.69615 10.822 3.09862 11.2535 3.61183 11.2998L3.70348 11.3039H4.38948C4.87468 11.3039 5.34251 11.4805 5.70797 11.7988L5.80504 11.889L6.28725 12.3713C6.65939 12.7413 7.24333 12.7629 7.639 12.4378L7.71551 12.3681L8.1961 11.8882C8.54058 11.5454 8.99687 11.3401 9.47881 11.3083L9.61082 11.3039H10.2962C10.8219 11.3039 11.2537 10.9017 11.3 10.3883L11.3042 10.2966V9.6106C11.3042 9.1247 11.4807 8.65604 11.7985 8.29226L11.8886 8.19571L12.3736 7.71072C12.7415 7.34075 12.7628 6.75726 12.4381 6.36138L12.3686 6.28482L11.8873 5.80357C11.5447 5.45852 11.3402 5.0029 11.3085 4.52071L11.3042 4.3886V3.70394C11.3042 3.17833 10.9014 2.74642 10.3879 2.70006L10.2962 2.69594H9.61082C9.1247 2.69594 8.65667 2.51968 8.29207 2.2017L8.19526 2.11149L7.73664 1.65164L7.71007 1.62696C7.34055 1.25911 6.75664 1.23758 6.36109 1.56179ZM9.06442 8.36167C9.11108 8.40834 9.15108 8.46167 9.17775 8.52167C9.19775 8.58167 9.21108 8.64834 9.21108 8.715C9.21108 8.78234 9.19775 8.84167 9.17775 8.90167C9.15108 8.96167 9.11108 9.02167 9.06442 9.06834C8.97108 9.16167 8.84442 9.215 8.71108 9.215C8.57775 9.215 8.45108 9.16167 8.35775 9.06834C8.31108 9.02167 8.27775 8.96167 8.25108 8.90167C8.22442 8.84167 8.21108 8.78234 8.21108 8.715C8.21108 8.64834 8.22442 8.58167 8.25108 8.52167C8.27775 8.46167 8.31108 8.40834 8.35775 8.36167C8.54442 8.175 8.87775 8.175 9.06442 8.36167ZM9.06684 4.93285C9.24435 5.11036 9.26049 5.38814 9.11525 5.58388L9.06684 5.63996L5.64017 9.06662C5.44491 9.26188 5.12833 9.26188 4.93306 9.06662C4.75555 8.88911 4.73942 8.61133 4.88465 8.41559L4.93306 8.35952L8.35973 4.93285C8.55499 4.73759 8.87158 4.73759 9.06684 4.93285ZM5.63768 4.93527C5.73102 5.02794 5.78435 5.15527 5.78435 5.2886C5.78435 5.35527 5.77768 5.4146 5.75102 5.47527C5.72435 5.53527 5.68435 5.5886 5.63768 5.64194C5.59102 5.6886 5.53768 5.72127 5.47768 5.74794C5.41768 5.7746 5.35102 5.7886 5.28435 5.7886C5.21768 5.7886 5.15768 5.7746 5.09768 5.74794C5.03768 5.72127 4.97768 5.6886 4.93102 5.64194C4.88435 5.5886 4.85102 5.53527 4.82435 5.47527C4.79768 5.4146 4.78435 5.35527 4.78435 5.2886C4.78435 5.22127 4.79768 5.15527 4.82435 5.09527C4.85102 5.03527 4.88435 4.97527 4.93102 4.93527C5.12435 4.74794 5.45102 4.74794 5.63768 4.93527Z'
						fill='currentColor'
					/>
				</svg>
			),
			title: 'Products Management',
			text: 'Manage your product, pricing, etc',
			path: 'products-management',
		},
		{
			icon: (
				<svg
					className='setting-icon'
					width='12'
					height='14'
					viewBox='0 0 12 14'
					xmlns='http://www.w3.org/2000/svg'>
					<path
						d='M7.7388 12.1271C7.93652 12.2881 7.96786 12.5809 7.80879 12.7811C7.6912 12.929 7.55532 13.0615 7.41131 13.1701C6.92623 13.5507 6.3095 13.7233 5.69703 13.6503C5.08401 13.5773 4.52483 13.2642 4.14322 12.7793C3.98509 12.5784 4.0178 12.2858 4.21628 12.1257C4.41476 11.9657 4.70384 11.9988 4.86197 12.1997C5.09211 12.4921 5.43129 12.682 5.80443 12.7265C6.1781 12.771 6.55399 12.6658 6.8552 12.4295C6.94402 12.3625 7.02384 12.2847 7.09277 12.198C7.25184 11.9978 7.54108 11.9661 7.7388 12.1271ZM1.43491 4.99987L1.44312 4.60265C1.44899 4.43274 1.45807 4.27503 1.47139 4.12068C1.67119 1.96308 3.73059 0.333374 5.97669 0.333374H6.02424C8.26912 0.333374 10.3291 1.96194 10.5357 4.12362C10.5476 4.26103 10.5527 4.38309 10.5542 4.55475L10.5548 5.07992C10.5553 5.12776 10.5561 5.16983 10.5574 5.20906L10.5635 5.33989L10.5932 5.46463C10.687 5.81206 10.8519 6.13687 11.0777 6.41885L11.1781 6.53701L11.2193 6.58982C11.49 6.9945 11.6447 7.46538 11.6668 7.97253L11.6662 8.2414C11.6473 8.84202 11.4268 9.42211 11.0227 9.90549C10.4876 10.4734 9.76241 10.8263 8.99172 10.8972C7.00149 11.1133 4.99349 11.1133 3.00881 10.8978C2.2328 10.8231 1.50979 10.4713 0.951249 9.88159C0.539375 9.37946 0.320439 8.74723 0.334099 8.10833L0.334663 7.94949C0.358458 7.46372 0.512187 6.99327 0.779738 6.58684L0.824519 6.52923C1.13699 6.18666 1.35062 5.76741 1.44332 5.31541L1.43329 5.35601L1.43491 4.99987ZM6.02424 1.26361H5.97669C4.17784 1.26361 2.53885 2.56062 2.38661 4.20456C2.37882 4.29489 2.3726 4.38809 2.36775 4.48617L2.35704 4.7971L2.35269 5.40995L2.3431 5.50449C2.21645 6.12205 1.92502 6.69399 1.49969 7.16028L1.53254 7.12221L1.47379 7.21943C1.36375 7.41771 1.29276 7.63304 1.26471 7.84553L1.25306 7.97253L1.25296 8.11832C1.24395 8.54287 1.38741 8.95713 1.63596 9.26208C2.01937 9.66569 2.53805 9.91805 3.10128 9.97226C5.02635 10.1813 6.96863 10.1813 8.90107 9.97153C9.45822 9.9202 9.97653 9.66802 10.3391 9.28448C10.6135 8.9554 10.7585 8.53981 10.7479 8.10243L10.7484 7.99347C10.7343 7.67908 10.6342 7.37421 10.4584 7.1115L10.4686 7.12841L10.3766 7.02061C10.0597 6.62944 9.82949 6.17571 9.70129 5.68935L9.65804 5.50549L9.64945 5.44371C9.64296 5.35346 9.63919 5.27325 9.63718 5.1768L9.63537 4.57371C9.63413 4.42034 9.62998 4.3171 9.62065 4.20888C9.46309 2.56054 7.82258 1.26361 6.02424 1.26361Z'
						fill='currentColor'
					/>
				</svg>
			),
			title: 'Notifications',
			text: 'Customize your notifications',
			path: 'notifications',
		},
		{
			icon: (
				<svg
					className='setting-icon'
					width='12'
					height='14'
					viewBox='0 0 12 14'
					xmlns='http://www.w3.org/2000/svg'>
					<path
						d='M6.00674 0.333402C7.54965 0.333402 8.90529 1.29938 9.40214 2.71113C9.49398 2.97207 9.35341 3.25684 9.08817 3.34719C8.82294 3.43754 8.53348 3.29925 8.44164 3.03831C8.08545 2.02623 7.11313 1.3334 6.00472 1.3334C4.62673 1.32803 3.49704 2.38767 3.42213 3.72388L3.4182 3.85403L3.41816 4.75071L8.58904 4.75094C10.2402 4.75094 11.5878 6.03051 11.6635 7.63696L11.6668 7.77953V10.6381C11.6668 12.3108 10.2888 13.6667 8.58904 13.6667H3.41128C1.71152 13.6667 0.333496 12.3108 0.333496 10.6381V7.77953C0.333496 6.45489 1.19775 5.32888 2.40163 4.91767L2.40175 3.85184C2.41044 1.90059 4.02518 0.325698 6.00674 0.333402ZM8.58904 5.75091H3.41128C2.27293 5.75091 1.34994 6.65912 1.34994 7.77953V10.6381C1.34994 11.7585 2.27293 12.6667 3.41128 12.6667H8.58904C9.7274 12.6667 10.6504 11.7585 10.6504 10.6381V7.77953C10.6504 6.65912 9.7274 5.75091 8.58904 5.75091ZM6.0003 7.96832C6.25759 7.96832 6.47023 8.15642 6.50388 8.40047L6.50852 8.46831V9.9496C6.50852 10.2257 6.28098 10.4496 6.0003 10.4496C5.74301 10.4496 5.53037 10.2615 5.49672 10.0175L5.49208 9.9496V8.46831C5.49208 8.19217 5.71962 7.96832 6.0003 7.96832Z'
						fill='currentColor'
					/>
				</svg>
			),
			title: 'Security',
			text: 'Configure Password, PIN, etc',
			path: 'security',
		},
		{
			icon: (
				<svg
					className='setting-icon'
					width='12'
					height='14'
					viewBox='0 0 12 14'
					xmlns='http://www.w3.org/2000/svg'>
					<path
						d='M6.00674 0.333402C7.54965 0.333402 8.90529 1.29938 9.40214 2.71113C9.49398 2.97207 9.35341 3.25684 9.08817 3.34719C8.82294 3.43754 8.53348 3.29925 8.44164 3.03831C8.08545 2.02623 7.11313 1.3334 6.00472 1.3334C4.62673 1.32803 3.49704 2.38767 3.42213 3.72388L3.4182 3.85403L3.41816 4.75071L8.58904 4.75094C10.2402 4.75094 11.5878 6.03051 11.6635 7.63696L11.6668 7.77953V10.6381C11.6668 12.3108 10.2888 13.6667 8.58904 13.6667H3.41128C1.71152 13.6667 0.333496 12.3108 0.333496 10.6381V7.77953C0.333496 6.45489 1.19775 5.32888 2.40163 4.91767L2.40175 3.85184C2.41044 1.90059 4.02518 0.325698 6.00674 0.333402ZM8.58904 5.75091H3.41128C2.27293 5.75091 1.34994 6.65912 1.34994 7.77953V10.6381C1.34994 11.7585 2.27293 12.6667 3.41128 12.6667H8.58904C9.7274 12.6667 10.6504 11.7585 10.6504 10.6381V7.77953C10.6504 6.65912 9.7274 5.75091 8.58904 5.75091ZM6.0003 7.96832C6.25759 7.96832 6.47023 8.15642 6.50388 8.40047L6.50852 8.46831V9.9496C6.50852 10.2257 6.28098 10.4496 6.0003 10.4496C5.74301 10.4496 5.53037 10.2615 5.49672 10.0175L5.49208 9.9496V8.46831C5.49208 8.19217 5.71962 7.96832 6.0003 7.96832Z'
						fill='currentColor'
					/>
				</svg>
			),
			title: 'Security',
			text: 'Configure Password, PIN, etc',
			path: 'security',
		},
		{
			icon: (
				<svg
					className='setting-icon'
					width='14'
					height='14'
					viewBox='0 0 14 14'
					xmlns='http://www.w3.org/2000/svg'>
					<path
						d='M7.00016 0.333496C10.6821 0.333496 13.6668 3.31846 13.6668 7.00016C13.6668 10.6819 10.6821 13.6668 7.00016 13.6668C3.31869 13.6668 0.333496 10.6816 0.333496 7.00016C0.333496 3.31869 3.31869 0.333496 7.00016 0.333496ZM7.00016 1.3335C3.87097 1.3335 1.3335 3.87097 1.3335 7.00016C1.3335 10.1294 3.87097 12.6668 7.00016 12.6668C10.1298 12.6668 12.6668 10.1296 12.6668 7.00016C12.6668 3.87073 10.1298 1.3335 7.00016 1.3335ZM7.00356 9.03076C7.27971 9.03076 7.50356 9.25462 7.50356 9.53076C7.50356 9.78389 7.31546 9.99309 7.07141 10.0262L6.9969 10.0308C6.72075 10.0308 6.4969 9.8069 6.4969 9.53076C6.4969 9.27763 6.685 9.06843 6.92905 9.03533L7.00356 9.03076ZM6.9969 3.96956C7.25003 3.96956 7.45922 4.15767 7.49233 4.40172L7.4969 4.46956V7.41556C7.4969 7.6917 7.27304 7.91556 6.9969 7.91556C6.74377 7.91556 6.53457 7.72746 6.50146 7.48341L6.4969 7.41556V4.46956C6.4969 4.19342 6.72075 3.96956 6.9969 3.96956Z'
						fill='currentColor'
					/>
				</svg>
			),
			title: 'About Us',
			text: 'Find out more about Posly',
			path: 'about-us',
		},
	];

	return (
		<div className='settings-menu'>
			{menu.length ? (
				<ul className='settings-menu__list'>
					{menu.map((el) => (
						<li className='settings-menu__item'>
							<NavLink
								to={`${el.path}`}
								className={({ isActive }) =>
									isActive
										? 'settings-menu__item-active'
										: 'settings-menu__item-link'
								}>
								<div className='settings-menu__item-content'>
									{el.icon}
									<div className='settings-menu__item-wrapper'>
										<h4 className='settings-menu__item-title'>{el.title}</h4>
										<p className='settings-menu__item-text'>{el.text}</p>
									</div>
								</div>
							</NavLink>
						</li>
					))}
				</ul>
			) : (
				''
			)}
		</div>
	);
};
