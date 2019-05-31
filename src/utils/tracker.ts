import { instance } from './axios';
import { Battlefield } from './@types-tracker';

export type TrackerPlatform = 'origin' | 'xbl' | 'psn';
export const getStats = async (ign: string, platform: TrackerPlatform = 'origin'): Promise<[Battlefield.Profile, boolean]> => {
    try {
        const { data } = await instance.get(`/profile/${platform}/${ign}`);
        const profile = data as Battlefield.Profile;
        if (profile.status !== 'Success') {
            return [null, false];
        }
        return [profile, true];
    } catch (e) {
        console.log('Could not get profile', e.message);
        return [null, false];
    }
};
