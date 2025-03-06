import React, { useState } from "react";
import clsx from 'clsx';
import Badge, { colorsType } from "../utilities/Badge.tsx";

type ProfileProps = {
	avatar: string,
	name: string;
	profession: string;
	badges: {
		text: string;
		color: keyof colorsType;
	}[];
};

const Profile: React.FC<ProfileProps>  = ({ avatar, name, profession, badges }) => {
	const [avatarLoaded, setAvatarLoaded] = useState(false)
	
	return (
		<div className="profile flex flex-col items-center">
			<div className={"avatar-container " +
				"w-[114px] h-[114px] bg-white rounded-full border-5 border-solid border-[#F3F4F6] " +
				"drop-shadow-md mt-[20px] relative"
			}>
				<img
					src={avatar}
					height={114}
					width={114}
					alt={"avatar"}
					onLoad={() => setAvatarLoaded(true)}
					className={clsx("avatar " +
						"rounded-full ",
						avatarLoaded ? 'visible' : 'invisible')}
				/>
				<div className={clsx("loading-avatar-head " +
					"absolute rounded-full overflow-hidden inset-0 after:content-[''] after:absolute " +
					"after:rounded-full after:bg-[#F3F4F6] after:w-[60px] after:h-[60px] after:top-[calc(50%-45px)] after:left-[calc(50%-30px)]",
					`after:animate-loading ${avatarLoaded ? 'invisible' : 'visible'}`)}
				/>
				<div className={clsx("loading-avatar-body " +
					"absolute rounded-full overflow-hidden inset-0 after:content-[''] after:absolute " +
					"after:rounded-full after:bg-[#F3F4F6] after:w-[104px] after:h-[104px] after:-bottom-[70%]",
					`after:animate-loading ${avatarLoaded ? 'invisible' : 'visible'}`)}
				/>
			</div>
			<h1 className={"text " +
				"text-[20px] font-bold my-[14px] text-[#1F2937]"}>
				{name}
			</h1>
			<p className={"profession " +
				"text-[16px] font-semibold -mt-[5px] mb-[7px] text-(--primary-text)"}>
				{profession}
			</p>
			<div className={"badges " +
				"container gap-[5px] flex flex-row justify-center flex-wrap px-[50px]"}>
				{ badges.map(({ color, text }, index) => (
					<Badge
						key={index}
						text={text}
						color={color}
						style={{fontSize: "0.75rem"}}
					/>
				)) }
			</div>
		</div>
	);
};

export default Profile;

