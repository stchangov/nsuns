export type Lift = {
    id: number;
    name: string;
    trainingMax: number;
};

export type Program = {
    id: number;
    name: string;
};

export type Day = {
    id: number;
    programId: number;
    name: string;
    order: number;
};

export type Exercise = {
    id: number;
    dayId: number;
    name: string;
    type: 't1' | 't2' | 't3';
    blockId: number | null;
    order: number;
};

export type Set = {
    id: number;
    exerciseId: number;
    percent: number | null;
    reps: number
    isAmrap: boolean;
};

export type Week = {
    id: number;
    programId: number;
    createdAt: string;
};

export type LoggedSet = {
    id: number;
    weekId: number;
    setId: number;
    weight: number;
    repsCompleted: number;
};

