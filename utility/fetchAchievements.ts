import { Achievements } from "../typing";

export const fetchAchievements = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getAchievements`);
    const data = await res.json();
    const Achievements: Achievements[] = data.Achievements;
    return Achievements;

};