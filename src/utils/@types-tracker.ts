export namespace Battlefield {
    export type Platform = 'xbox' | 'psn' | 'origin';
    export type StatsPartKey = StatsKey | StatsFirestormKey | ClassKey | WeaponKey | VehicleKey;
    export interface StatsPart<T = StatsPartKey> {
        value: number;
        key: T;
        rank?: any;
        percentile: number;
        displayName: string;
        displayType: string;
        description?: any;
        category: string;
        icon?: any;
        columnName: string;
        displayValue: string;
        displayRank?: any;
        displayPercentile: string;
    }
    export type StatsKey =
        | 'ScorePerMinute'
        | 'KdRatio'
        | 'Kills'
        | 'Deaths'
        | 'Damage'
        | 'Assists'
        | 'KillsAggregated'
        | 'AssistsAsKills'
        | 'ShotsTaken'
        | 'ShotsHit'
        | 'ShotsAccuracy'
        | 'KillStreak'
        | 'DogtagsTaken'
        | 'AvengerKills'
        | 'SaviorKills'
        | 'Headshots'
        | 'SuppressionAssists'
        | 'LongestHeadshot'
        | 'KillsPerMinute'
        | 'DamagePerMinute'
        | 'Heals'
        | 'Revives'
        | 'RevivesRecieved'
        | 'Resupplies'
        | 'Repairs'
        | 'AceSquad'
        | 'SquadSpawns'
        | 'SquadWipes'
        | 'OrdersCompleted'
        | 'WlPercentage'
        | 'Wins'
        | 'Losses'
        | 'Draws'
        | 'Rounds'
        | 'RoundsPlayed'
        | 'Rank'
        | 'RankScore'
        | 'TimePlayed'
        | 'ScoreRound'
        | 'ScoreGeneral'
        | 'ScoreCombat'
        | 'ScoreDefensive'
        | 'ScoreObjective'
        | 'ScoreBonus'
        | 'ScoreSquad'
        | 'ScoreAward'
        | 'ScoreAssault'
        | 'ScoreMedic'
        | 'ScoreSupport'
        | 'ScoreRecon'
        | 'ScoreAir'
        | 'ScoreLand'
        | 'ScoreTanks'
        | 'ScoreTransports';

    export interface Stats {
        id: number;
        lastUpdated: Date;
        platformId: PlatformId;
        scorePerMinute: StatsPart<'ScorePerMinute'>;
        kdRatio: StatsPart<'KdRatio'>;
        kills: StatsPart<'Kills'>;
        deaths: StatsPart<'Deaths'>;
        damage: StatsPart<'Damage'>;
        assists: StatsPart<'Assists'>;
        killsAggregated: StatsPart<'KillsAggregated'>;
        assistsAsKills: StatsPart<'AssistsAsKills'>;
        shotsTaken: StatsPart<'ShotsTaken'>;
        shotsHit: StatsPart<'ShotsHit'>;
        shotsAccuracy: StatsPart<'ShotsAccuracy'>;
        killStreak: StatsPart<'KillStreak'>;
        dogtagsTaken: StatsPart<'DogtagsTaken'>;
        avengerKills: StatsPart<'AvengerKills'>;
        saviorKills: StatsPart<'SaviorKills'>;
        headshots: StatsPart<'Headshots'>;
        suppressionAssists: StatsPart<'SuppressionAssists'>;
        longestHeadshot: StatsPart<'LongestHeadshot'>;
        killsPerMinute: StatsPart<'KillsPerMinute'>;
        damagePerMinute: StatsPart<'DamagePerMinute'>;
        heals: StatsPart<'Heals'>;
        revives: StatsPart<'Revives'>;
        revivesRecieved: StatsPart<'RevivesRecieved'>;
        resupplies: StatsPart<'Resupplies'>;
        repairs: StatsPart<'Repairs'>;
        aceSquad: StatsPart<'AceSquad'>;
        squadSpawns: StatsPart<'SquadSpawns'>;
        squadWipes: StatsPart<'SquadWipes'>;
        ordersCompleted: StatsPart<'OrdersCompleted'>;
        wlPercentage: StatsPart<'WlPercentage'>;
        wins: StatsPart<'Wins'>;
        losses: StatsPart<'Losses'>;
        draws: StatsPart<'Draws'>;
        rounds: StatsPart<'Rounds'>;
        roundsPlayed: StatsPart<'RoundsPlayed'>;
        rank: StatsPart<'Rank'>;
        rankScore: StatsPart<'RankScore'>;
        timePlayed: StatsPart<'TimePlayed'>;
        scoreRound: StatsPart<'ScoreRound'>;
        scoreGeneral: StatsPart<'ScoreGeneral'>;
        scoreCombat: StatsPart<'ScoreCombat'>;
        scoreDefensive: StatsPart<'ScoreDefensive'>;
        scoreObjective: StatsPart<'ScoreObjective'>;
        scoreBonus: StatsPart<'ScoreBonus'>;
        scoreSquad: StatsPart<'ScoreSquad'>;
        scoreAward: StatsPart<'ScoreAward'>;
        scoreAssault: StatsPart<'ScoreAssault'>;
        scoreMedic: StatsPart<'ScoreMedic'>;
        scoreSupport: StatsPart<'ScoreSupport'>;
        scoreRecon: StatsPart<'ScoreRecon'>;
        scoreAir: StatsPart<'ScoreAir'>;
        scoreLand: StatsPart<'ScoreLand'>;
        scoreTanks: StatsPart<'ScoreTanks'>;
        scoreTransports: StatsPart<'ScoreTransports'>;
    }

    export interface Account {
        id: number;
        platformId: number;
        playerName: string;
        playerNameNormalized: string;
        userId?: any;
        isBanned: boolean;
        countryCode?: any;
        state?: any;
        city?: any;
        avatarUrl: string;
        twitter?: any;
        twitch?: any;
        supporterEndDate?: any;
        collections?: any;
        influencer?: any;
        apiLastChecked: Date;
    }
    export type StatsFirestormKey =
        | 'SoloWins'
        | 'SoloLosses'
        | 'SoloWinPercentage'
        | 'SquadWins'
        | 'SquadLosses'
        | 'SquadWinPercentage'
        | 'TimePlayed'
        | 'MatchesPlayed'
        | 'KdRatio'
        | 'Kills'
        | 'Deaths'
        | 'Downs'
        | 'Headshots'
        | 'KillsMelee'
        | 'TeamKills'
        | 'KillsPerMinute'
        | 'KillsPerMatch'
        | 'Revives'
        | 'CapturePoints'
        | 'SupplyDrops'
        | 'Healing'
        | 'Tanks'
        | 'Safes'
        | 'VehicleBreakouts'
        | 'VehicleWeaponKills'
        | 'VehiclesDestroyed'
        | 'RoadKills';
    export interface StatsFirestorm {
        id: number;
        lastUpdated: Date;
        platformId: number;
        soloWins: StatsPart<'SoloWins'>;
        soloLosses: StatsPart<'SoloLosses'>;
        soloWinPercentage: StatsPart<'SoloWinPercentage'>;
        squadWins: StatsPart<'SquadWins'>;
        squadLosses: StatsPart<'SquadLosses'>;
        squadWinPercentage: StatsPart<'SquadWinPercentage'>;
        timePlayed: StatsPart<'TimePlayed'>;
        matchesPlayed: StatsPart<'MatchesPlayed'>;
        kdRatio: StatsPart<'KdRatio'>;
        kills: StatsPart<'Kills'>;
        deaths: StatsPart<'Deaths'>;
        downs: StatsPart<'Downs'>;
        headshots: StatsPart<'Headshots'>;
        killsMelee: StatsPart<'KillsMelee'>;
        teamKills: StatsPart<'TeamKills'>;
        killsPerMinute: StatsPart<'KillsPerMinute'>;
        killsPerMatch: StatsPart<'KillsPerMatch'>;
        revives: StatsPart<'Revives2'>;
        capturePoints: StatsPart<'CapturePoints'>;
        supplyDrops: StatsPart<'SupplyDrops'>;
        healing: StatsPart<'Healing'>;
        tanks: StatsPart<'Tanks'>;
        safes: StatsPart<'Safes'>;
        vehicleBreakouts: StatsPart<'VehicleBreakouts'>;
        vehicleWeaponKills: StatsPart<'VehicleWeaponKills'>;
        vehiclesDestroyed: StatsPart<'VehiclesDestroyed'>;
        roadKills: StatsPart<'RoadKills'>;
    }
    export type ClassKey = 'Rank' | 'Kills' | 'Deaths' | 'KillsPerMinute' | 'KdRatio' | 'TimePlayed' | 'ShotsFired' | 'ShotsHit' | 'ShotsAccuracy' | 'Score' | 'ScorePerMinute';
    export type ClassType = 'assault' | 'medic' | 'pilot' | 'recon' | 'support' | 'tanker';
    export type GameModeKey =
        | 'Wins'
        | 'Losses'
        | 'WlPercentage'
        | 'Score'
        | 'FlagDefends'
        | 'FlagCaptures'
        | 'ArtilleryDefenseKills'
        | 'BombsPlaced'
        | 'BombsDefused'
        | 'MessagesDelivered'
        | 'CarriersKills'
        | 'CarriersReleased'
        | 'MessagesWritten';
    export interface Class {
        id: number;
        class: ClassType;
        platformId: number;
        rank: StatsPart<'Rank'>;
        kills: StatsPart<'Kills'>;
        deaths: StatsPart<'Deaths'>;
        killsPerMinute: StatsPart<'KillsPerMinute'>;
        kdRatio: StatsPart<'KdRatio'>;
        timePlayed: StatsPart<'TimePlayed'>;
        shotsFired: StatsPart<'ShotsFired'>;
        shotsHit: StatsPart<'ShotsHit'>;
        shotsAccuracy: StatsPart<'ShotsAccuracy'>;
        score: StatsPart<'Score'>;
        scorePerMinute: StatsPart<'ScorePerMinute'>;
    }
    export type GameModeType = 'conquest';
    export interface Gamemode {
        id: number;
        gameMode: GameModeType;
        wins: StatsPart<'Wins'>;
        losses: StatsPart<'Losses'>;
        wlPercentage: StatsPart<'WlPercentage'>;
        score: StatsPart<'Score'>;
        flagDefends: StatsPart<'FlagDefends'>;
        flagCaptures: StatsPart<'FlagCaptures'>;
        artilleryDefenseKills: StatsPart<'ArtilleryDefenseKills'>;
        bombsPlaced: StatsPart<'BombsPlaced'>;
        bombsDefused: StatsPart<'BombsDefused'>;
        messagesDelivered: StatsPart<'MessagesDelivered'>;
        carriersKills: StatsPart<'CarriersKills'>;
        carriersReleased: StatsPart<'CarriersReleased'>;
        messagesWritten: StatsPart<'MessagesWritten'>;
    }
    export type WeaponKey = 'Kills' | 'KillsPerMinute' | 'TimePlayed' | 'ShotsFired' | 'ShotsHit' | 'ShotsAccuracy' | 'Headshots';
    export interface Weapon {
        id: number;
        code: string;
        kills: StatsPart<'Kills'>;
        killsPerMinute: StatsPart<'KillsPerMinute'>;
        timePlayed: StatsPart<'TimePlayed'>;
        shotsFired: StatsPart<'ShotsFired'>;
        shotsHit: StatsPart<'ShotsHit'>;
        shotsAccuracy: StatsPart<'ShotsAccuracy'>;
        headshots: StatsPart<'Headshots'>;
    }
    export type VehicleKey = 'Kills' | 'KillsPerMinute' | 'TimePlayed' | 'Destroyed';
    export interface Vehicle {
        id: number;
        code: string;
        kills: StatsPart<'Kills'>;
        killsPerMinute: StatsPart<'KillsPerMinute'>;
        timePlayed: StatsPart<'TimePlayed'>;
        destroyed: StatsPart<'Destroyed'>;
    }

    export interface Data {
        stats: Stats;
        account: Account;
        statsFirestorm: StatsFirestorm;
        classes: Class[];
        gamemodes: Gamemode[];
        weapons: Weapon[];
        vehicles: Vehicle[];
    }

    export interface AdditionalData {}
    export type PlatformId = 1 | 2 | 5;
    export interface Profile {
        status: string;
        staleReason: string;
        cacheExpiresAt: Date;
        lastUpdated: Date;
        data: Data;
        platformId: PlatformId;
        platformUserId?: any;
        platformUserIdentifier: string;
        platformUserHandle: string;
        externalId: number;
        userId?: any;
        countryCode?: any;
        avatarUrl: string;
        additionalData: AdditionalData;
    }
}
