import { Battlefield } from '@/utils/@types-tracker';

export namespace Database {
    export interface User {
        id?: string;
        ign: string;
        platform: Battlefield.Platform;
        avatar: string;
        last_updated: Date;
        created_at?: Date;
        updated_at?: Date;
    }
    export interface Stats {
        user_id?: string;
        score_per_minute: number;
        kd_ratio: number;
        deaths: number;
        kills: number;
        kills_aggregated: number;
        shots_accuracy: number;
        kill_streak: number;
        dogtags_taken: number;
        headshots: number;
        longest_headshot: number;
        kills_per_minute: number;
        ace_squad: number;
        wl_percentage: number;
        wins: number;
        losses: number;
        rounds: number;
        time_played: number;
        created_at?: Date;
        updated_at?: Date;
    }
    export interface Score {
        user_id?: string;
        general: number;
        round: number;
        combat: number;
        defensive: number;
        objective: number;
        bonus: number;
        squad: number;
        award: number;
        assault: number;
        medic: number;
        support: number;
        recon: number;
        air: number;
        land: number;
        tanks: number;
        transports: number;
        created_at?: Date;
        updated_at?: Date;
    }
    export interface Firestorm {
        user_id?: string;
        solo_wins: number;
        solo_losses: number;
        solo_win_percentage: number;
        squad_wins: number;
        squad_losses: number;
        squad_win_percentage: number;
        time_played: number;
        matches_played: number;
        kd_ratio: number;
        kills: number;
        deaths: number;
        downs: number;
        headshots: number;
        revives: number;
        safes: number;
        created_at?: Date;
        updated_at?: Date;
    }
    export interface Class {
        user_id?: string;
        name: Battlefield.ClassType;
        rank: number;
        deaths: number;
        kills: number;
        kills_per_minute: number;
        kd_ratio: number;
        time_played: number;
        shots_accuracy: number;
        score: number;
        score_per_minute: number;
        created_at?: Date;
        updated_at?: Date;
    }
    export interface Weapon {
        user_id?: string;
        code: string;
        kills: number;
        kills_per_minute: number;
        time_played: number;
        shots_fired: number;
        shots_hit: number;
        shots_accuracy: number;
        headshots: number;
        created_at?: Date;
        updated_at?: Date;
    }
    export interface Vehicle {
        user_id?: string;
        code: number;
        kills: number;
        kills_per_minute: number;
        time_played: number;
        destroyed: number;
        created_at?: Date;
        updated_at?: Date;
    }
}
