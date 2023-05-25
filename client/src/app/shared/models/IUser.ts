export interface IPersonalData {
  telegram?: string;
  vk?: string;
  telephone?: string;
}

export interface IUser {
  mail?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  age?: number;
  admissionYear?: number;
  statusUserId?: number;
  educationLevelId?: number;
  studyProgramId?: number;
  schoolId?: number;
  interests?: number[];
  isAdmin?: boolean;
  avatarPath?: string;
  personalData?: IPersonalData;
}
