import { User } from "../types/user-type";
import { GlobeIcon, MailIcon, MapIcon, PhoneIcon,  } from "@heroicons/react/solid"

export const getFormatedProfile = (user: User) => {
    return [
        { Icon: <MailIcon width={20} className="text-primary-900"/>, title: 'email', value: user?.email },
        { Icon: <PhoneIcon width={20} className="text-primary-900"/>, title: 'Telephone', value: user?.phoneNumber},
        { Icon: <MapIcon width={20} className="text-primary-900"/>, title: 'Address', value: user?.address},
        { Icon: <GlobeIcon width={20} className="text-primary-900"/>, title: 'City & state', value: `${user?.city}, ${user?.state}`},
        { Icon: <GlobeIcon width={20} className="text-primary-900"/>, title: 'Country', value: user?.countryName},
    ]
}