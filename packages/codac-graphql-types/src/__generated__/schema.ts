export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  DateTime: any;
  I18NLocaleCode: any;
  JSON: any;
  PageContentSectionsDynamicZoneInput: any;
  Time: any;
  Upload: any;
};

export type Achievement = {
  __typename?: 'Achievement';
  badge?: Maybe<UploadFileEntityResponse>;
  course?: Maybe<CourseEntityResponse>;
  course_date?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  points?: Maybe<Scalars['Int']>;
  type?: Maybe<Enum_Achievement_Type>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type AchievementEntity = {
  __typename?: 'AchievementEntity';
attributes: Achievement;
  id: string;
};

export type AchievementEntityResponse = {
  __typename?: 'AchievementEntityResponse';
data: AchievementEntity;
};

export type AchievementEntityResponseCollection = {
  __typename?: 'AchievementEntityResponseCollection';
  data: Array<AchievementEntity>;
  meta: ResponseCollectionMeta;
};

export type AchievementFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<AchievementFiltersInput>>>;
  course?: InputMaybe<CourseFiltersInput>;
  course_date?: InputMaybe<IntFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<AchievementFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<AchievementFiltersInput>>>;
  points?: InputMaybe<IntFilterInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type AchievementInput = {
  badge?: InputMaybe<Scalars['ID']>;
  course?: InputMaybe<Scalars['ID']>;
  course_date?: InputMaybe<Scalars['Int']>;
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  points?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<Enum_Achievement_Type>;
};

export type Attendance = {
  __typename?: 'Attendance';
  checkedOn?: Maybe<Scalars['DateTime']>;
  cohort?: Maybe<CohortEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  day?: Maybe<Scalars['Date']>;
  done?: Maybe<Scalars['Boolean']>;
  excuse?: Maybe<Scalars['String']>;
  hours?: Maybe<Array<Maybe<ComponentHoursHours>>>;
  present?: Maybe<Scalars['Boolean']>;
  project?: Maybe<Scalars['String']>;
  student?: Maybe<StudentEntityResponse>;
  time_off?: Maybe<ComponentStudentTimeOff>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type AttendanceHoursArgs = {
  filters?: InputMaybe<ComponentHoursHoursFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type AttendanceEntity = {
  __typename?: 'AttendanceEntity';
attributes: Attendance;
  id: string;
};

export type AttendanceEntityResponse = {
  __typename?: 'AttendanceEntityResponse';
data: AttendanceEntity;
};

export type AttendanceEntityResponseCollection = {
  __typename?: 'AttendanceEntityResponseCollection';
  data: Array<AttendanceEntity>;
  meta: ResponseCollectionMeta;
};

export type AttendanceFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<AttendanceFiltersInput>>>;
  checkedOn?: InputMaybe<DateTimeFilterInput>;
  cohort?: InputMaybe<CohortFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  day?: InputMaybe<DateFilterInput>;
  done?: InputMaybe<BooleanFilterInput>;
  excuse?: InputMaybe<StringFilterInput>;
  hours?: InputMaybe<ComponentHoursHoursFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<AttendanceFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<AttendanceFiltersInput>>>;
  present?: InputMaybe<BooleanFilterInput>;
  project?: InputMaybe<StringFilterInput>;
  student?: InputMaybe<StudentFiltersInput>;
  time_off?: InputMaybe<ComponentStudentTimeOffFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type AttendanceInput = {
  checkedOn?: InputMaybe<Scalars['DateTime']>;
  cohort?: InputMaybe<Scalars['ID']>;
  day?: InputMaybe<Scalars['Date']>;
  done?: InputMaybe<Scalars['Boolean']>;
  excuse?: InputMaybe<Scalars['String']>;
  hours?: InputMaybe<Array<InputMaybe<ComponentHoursHoursInput>>>;
  present?: InputMaybe<Scalars['Boolean']>;
  project?: InputMaybe<Scalars['String']>;
  student?: InputMaybe<Scalars['ID']>;
  time_off?: InputMaybe<ComponentStudentTimeOffInput>;
};

export type AttendanceRelationResponseCollection = {
  __typename?: 'AttendanceRelationResponseCollection';
  data: Array<AttendanceEntity>;
};

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  contains?: InputMaybe<Scalars['Boolean']>;
  containsi?: InputMaybe<Scalars['Boolean']>;
  endsWith?: InputMaybe<Scalars['Boolean']>;
  eq?: InputMaybe<Scalars['Boolean']>;
  eqi?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Boolean']>;
  gte?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  lt?: InputMaybe<Scalars['Boolean']>;
  lte?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']>;
  notContainsi?: InputMaybe<Scalars['Boolean']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  startsWith?: InputMaybe<Scalars['Boolean']>;
};

export type Chat = {
  __typename?: 'Chat';
  createdAt?: Maybe<Scalars['DateTime']>;
  messages?: Maybe<Array<Maybe<ComponentChatMessage>>>;
  name?: Maybe<Scalars['String']>;
  pinned?: Maybe<Scalars['Boolean']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type ChatMessagesArgs = {
  filters?: InputMaybe<ComponentChatMessageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ChatUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ChatEntity = {
  __typename?: 'ChatEntity';
attributes: Chat;
  id: string;
};

export type ChatEntityResponse = {
  __typename?: 'ChatEntityResponse';
data: ChatEntity;
};

export type ChatEntityResponseCollection = {
  __typename?: 'ChatEntityResponseCollection';
  data: Array<ChatEntity>;
  meta: ResponseCollectionMeta;
};

export type ChatFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ChatFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  messages?: InputMaybe<ComponentChatMessageFiltersInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ChatFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ChatFiltersInput>>>;
  pinned?: InputMaybe<BooleanFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type ChatInput = {
  messages?: InputMaybe<Array<InputMaybe<ComponentChatMessageInput>>>;
  name?: InputMaybe<Scalars['String']>;
  pinned?: InputMaybe<Scalars['Boolean']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type Chatroom = {
  __typename?: 'Chatroom';
  conversations?: Maybe<ConversationRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  users_permissions_users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type ChatroomConversationsArgs = {
  filters?: InputMaybe<ConversationFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ChatroomUsers_Permissions_UsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ChatroomEntity = {
  __typename?: 'ChatroomEntity';
attributes: Chatroom;
  id: string;
};

export type ChatroomEntityResponse = {
  __typename?: 'ChatroomEntityResponse';
data: ChatroomEntity;
};

export type ChatroomEntityResponseCollection = {
  __typename?: 'ChatroomEntityResponseCollection';
  data: Array<ChatroomEntity>;
  meta: ResponseCollectionMeta;
};

export type ChatroomFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ChatroomFiltersInput>>>;
  conversations?: InputMaybe<ConversationFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ChatroomFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ChatroomFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users_permissions_users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type ChatroomInput = {
  conversations?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  name?: InputMaybe<Scalars['String']>;
  users_permissions_users?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type ChatroomRelationResponseCollection = {
  __typename?: 'ChatroomRelationResponseCollection';
  data: Array<ChatroomEntity>;
};

export type CodacOverflow = {
  __typename?: 'CodacOverflow';
  author?: Maybe<UsersPermissionsUserEntityResponse>;
  comments?: Maybe<Array<Maybe<ComponentCommentsComments>>>;
  course?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  date?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type CodacOverflowCommentsArgs = {
  filters?: InputMaybe<ComponentCommentsCommentsFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CodacOverflowEntity = {
  __typename?: 'CodacOverflowEntity';
attributes: CodacOverflow;
  id: string;
};

export type CodacOverflowEntityResponse = {
  __typename?: 'CodacOverflowEntityResponse';
data: CodacOverflowEntity;
};

export type CodacOverflowEntityResponseCollection = {
  __typename?: 'CodacOverflowEntityResponseCollection';
  data: Array<CodacOverflowEntity>;
  meta: ResponseCollectionMeta;
};

export type CodacOverflowFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<CodacOverflowFiltersInput>>>;
  author?: InputMaybe<UsersPermissionsUserFiltersInput>;
  comments?: InputMaybe<ComponentCommentsCommentsFiltersInput>;
  course?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  date?: InputMaybe<DateFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<CodacOverflowFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CodacOverflowFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type CodacOverflowInput = {
  author?: InputMaybe<Scalars['ID']>;
  comments?: InputMaybe<Array<InputMaybe<ComponentCommentsCommentsInput>>>;
  course?: InputMaybe<Scalars['String']>;
  date?: InputMaybe<Scalars['Date']>;
  description?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type CodingChallenge = {
  __typename?: 'CodingChallenge';
  author?: Maybe<UsersPermissionsUserEntityResponse>;
  challenge?: Maybe<Scalars['String']>;
  comments?: Maybe<Array<Maybe<ComponentCommentsComments>>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  difficulty?: Maybe<Scalars['Int']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  tags?: Maybe<Enum_Codingchallenge_Tags>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type CodingChallengeCommentsArgs = {
  filters?: InputMaybe<ComponentCommentsCommentsFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CodingChallengeEntity = {
  __typename?: 'CodingChallengeEntity';
attributes: CodingChallenge;
  id: string;
};

export type CodingChallengeEntityResponse = {
  __typename?: 'CodingChallengeEntityResponse';
data: CodingChallengeEntity;
};

export type CodingChallengeEntityResponseCollection = {
  __typename?: 'CodingChallengeEntityResponseCollection';
  data: Array<CodingChallengeEntity>;
  meta: ResponseCollectionMeta;
};

export type CodingChallengeFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<CodingChallengeFiltersInput>>>;
  author?: InputMaybe<UsersPermissionsUserFiltersInput>;
  challenge?: InputMaybe<StringFilterInput>;
  comments?: InputMaybe<ComponentCommentsCommentsFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  difficulty?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<CodingChallengeFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CodingChallengeFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  tags?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type CodingChallengeInput = {
  author?: InputMaybe<Scalars['ID']>;
  challenge?: InputMaybe<Scalars['String']>;
  comments?: InputMaybe<Array<InputMaybe<ComponentCommentsCommentsInput>>>;
  difficulty?: InputMaybe<Scalars['Int']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  tags?: InputMaybe<Enum_Codingchallenge_Tags>;
  title?: InputMaybe<Scalars['String']>;
};

export type Cohort = {
  __typename?: 'Cohort';
  createdAt?: Maybe<Scalars['DateTime']>;
  logo?: Maybe<UploadFileEntityResponse>;
  name?: Maybe<Scalars['String']>;
  start_date?: Maybe<Scalars['Date']>;
  students?: Maybe<StudentRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type CohortStudentsArgs = {
  filters?: InputMaybe<StudentFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CohortEntity = {
  __typename?: 'CohortEntity';
attributes: Cohort;
  id: string;
};

export type CohortEntityResponse = {
  __typename?: 'CohortEntityResponse';
data: CohortEntity;
};

export type CohortEntityResponseCollection = {
  __typename?: 'CohortEntityResponseCollection';
  data: Array<CohortEntity>;
  meta: ResponseCollectionMeta;
};

export type CohortFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<CohortFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<CohortFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CohortFiltersInput>>>;
  start_date?: InputMaybe<DateFilterInput>;
  students?: InputMaybe<StudentFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type CohortInput = {
  logo?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  start_date?: InputMaybe<Scalars['Date']>;
  students?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type ComponentAchievementAchievement = {
  __typename?: 'ComponentAchievementAchievement';
  achievement?: Maybe<AchievementEntityResponse>;
  id: Scalars['ID'];
  unlocked?: Maybe<Scalars['Boolean']>;
  unlockedOn?: Maybe<Scalars['DateTime']>;
};

export type ComponentCardsBlogCard = {
  __typename?: 'ComponentCardsBlogCard';
  dateTime?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: Maybe<UploadFileEntityResponse>;
  title?: Maybe<Scalars['String']>;
};

export type ComponentChatMessage = {
  __typename?: 'ComponentChatMessage';
  author?: Maybe<UsersPermissionsUserEntityResponse>;
  body?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  timestamp?: Maybe<Scalars['DateTime']>;
  updated?: Maybe<Scalars['DateTime']>;
};

export type ComponentChatMessageFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentChatMessageFiltersInput>>>;
  author?: InputMaybe<UsersPermissionsUserFiltersInput>;
  body?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentChatMessageFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentChatMessageFiltersInput>>>;
  timestamp?: InputMaybe<DateTimeFilterInput>;
  updated?: InputMaybe<DateTimeFilterInput>;
};

export type ComponentChatMessageInput = {
  author?: InputMaybe<Scalars['ID']>;
  body?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  timestamp?: InputMaybe<Scalars['DateTime']>;
  updated?: InputMaybe<Scalars['DateTime']>;
};

export type ComponentCommentsComments = {
  __typename?: 'ComponentCommentsComments';
  author?: Maybe<UsersPermissionsUserEntityResponse>;
  id: Scalars['ID'];
  message?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['DateTime']>;
};

export type ComponentCommentsCommentsFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentCommentsCommentsFiltersInput>>>;
  author?: InputMaybe<UsersPermissionsUserFiltersInput>;
  message?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentCommentsCommentsFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentCommentsCommentsFiltersInput>>>;
  timestamp?: InputMaybe<DateTimeFilterInput>;
};

export type ComponentCommentsCommentsInput = {
  author?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
  message?: InputMaybe<Scalars['String']>;
  timestamp?: InputMaybe<Scalars['DateTime']>;
};

export type ComponentFeedbackFeedback = {
  __typename?: 'ComponentFeedbackFeedback';
  author?: Maybe<UsersPermissionsUserEntityResponse>;
  id: Scalars['ID'];
  message?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Int']>;
  timestamp?: Maybe<Scalars['DateTime']>;
};

export type ComponentFeedbackFeedbackFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentFeedbackFeedbackFiltersInput>>>;
  author?: InputMaybe<UsersPermissionsUserFiltersInput>;
  message?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentFeedbackFeedbackFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentFeedbackFeedbackFiltersInput>>>;
  rating?: InputMaybe<IntFilterInput>;
  timestamp?: InputMaybe<DateTimeFilterInput>;
};

export type ComponentFeedbackFeedbackInput = {
  author?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
  message?: InputMaybe<Scalars['String']>;
  rating?: InputMaybe<Scalars['Int']>;
  timestamp?: InputMaybe<Scalars['DateTime']>;
};

export type ComponentHolidaysHoliday = {
  __typename?: 'ComponentHolidaysHoliday';
  date?: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};

export type ComponentHolidaysHolidayFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentHolidaysHolidayFiltersInput>>>;
  date?: InputMaybe<DateFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentHolidaysHolidayFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentHolidaysHolidayFiltersInput>>>;
};

export type ComponentHolidaysHolidayInput = {
  date?: InputMaybe<Scalars['Date']>;
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
};

export type ComponentHoursHours = {
  __typename?: 'ComponentHoursHours';
  hour?: Maybe<Scalars['Time']>;
  id: Scalars['ID'];
  present?: Maybe<Scalars['Boolean']>;
};

export type ComponentHoursHoursFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentHoursHoursFiltersInput>>>;
  hour?: InputMaybe<TimeFilterInput>;
  not?: InputMaybe<ComponentHoursHoursFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentHoursHoursFiltersInput>>>;
  present?: InputMaybe<BooleanFilterInput>;
};

export type ComponentHoursHoursInput = {
  hour?: InputMaybe<Scalars['Time']>;
  id?: InputMaybe<Scalars['ID']>;
  present?: InputMaybe<Scalars['Boolean']>;
};

export type ComponentKanbanBoard = {
  __typename?: 'ComponentKanbanBoard';
  columns?: Maybe<Array<Maybe<ComponentKanbanColumn>>>;
  id: Scalars['ID'];
};


export type ComponentKanbanBoardColumnsArgs = {
  filters?: InputMaybe<ComponentKanbanColumnFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentKanbanBoardFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentKanbanBoardFiltersInput>>>;
  columns?: InputMaybe<ComponentKanbanColumnFiltersInput>;
  not?: InputMaybe<ComponentKanbanBoardFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentKanbanBoardFiltersInput>>>;
};

export type ComponentKanbanBoardInput = {
  columns?: InputMaybe<Array<InputMaybe<ComponentKanbanColumnInput>>>;
  id?: InputMaybe<Scalars['ID']>;
};

export type ComponentKanbanCard = {
  __typename?: 'ComponentKanbanCard';
  category?: Maybe<Enum_Componentkanbancard_Category>;
  deadline?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  done?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  task?: Maybe<Scalars['String']>;
};

export type ComponentKanbanCardFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentKanbanCardFiltersInput>>>;
  category?: InputMaybe<StringFilterInput>;
  deadline?: InputMaybe<DateFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  done?: InputMaybe<BooleanFilterInput>;
  not?: InputMaybe<ComponentKanbanCardFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentKanbanCardFiltersInput>>>;
  task?: InputMaybe<StringFilterInput>;
};

export type ComponentKanbanCardInput = {
  category?: InputMaybe<Enum_Componentkanbancard_Category>;
  deadline?: InputMaybe<Scalars['Date']>;
  description?: InputMaybe<Scalars['String']>;
  done?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['ID']>;
  task?: InputMaybe<Scalars['String']>;
};

export type ComponentKanbanColumn = {
  __typename?: 'ComponentKanbanColumn';
  cards?: Maybe<Array<Maybe<ComponentKanbanCard>>>;
  done?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  order?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};


export type ComponentKanbanColumnCardsArgs = {
  filters?: InputMaybe<ComponentKanbanCardFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentKanbanColumnFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentKanbanColumnFiltersInput>>>;
  cards?: InputMaybe<ComponentKanbanCardFiltersInput>;
  done?: InputMaybe<BooleanFilterInput>;
  not?: InputMaybe<ComponentKanbanColumnFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentKanbanColumnFiltersInput>>>;
  order?: InputMaybe<IntFilterInput>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentKanbanColumnInput = {
  cards?: InputMaybe<Array<InputMaybe<ComponentKanbanCardInput>>>;
  done?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['ID']>;
  order?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentLeadLifecycle = {
  __typename?: 'ComponentLeadLifecycle';
  changedOn?: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
  state?: Maybe<Enum_Componentleadlifecycle_State>;
};

export type ComponentLeadLifecycleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentLeadLifecycleFiltersInput>>>;
  changedOn?: InputMaybe<DateFilterInput>;
  not?: InputMaybe<ComponentLeadLifecycleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentLeadLifecycleFiltersInput>>>;
  state?: InputMaybe<StringFilterInput>;
};

export type ComponentLeadLifecycleInput = {
  changedOn?: InputMaybe<Scalars['Date']>;
  id?: InputMaybe<Scalars['ID']>;
  state?: InputMaybe<Enum_Componentleadlifecycle_State>;
};

export type ComponentLmsObjectives = {
  __typename?: 'ComponentLmsObjectives';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};

export type ComponentLmsObjectivesFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentLmsObjectivesFiltersInput>>>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentLmsObjectivesFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentLmsObjectivesFiltersInput>>>;
};

export type ComponentLmsObjectivesInput = {
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
};

export type ComponentLmsSprints = {
  __typename?: 'ComponentLmsSprints';
  id: Scalars['ID'];
  length: Scalars['Int'];
  lessons?: Maybe<PageRelationResponseCollection>;
  name?: Maybe<Scalars['String']>;
  objectives?: Maybe<Array<Maybe<ComponentLmsObjectives>>>;
  spikes?: Maybe<PageRelationResponseCollection>;
};


export type ComponentLmsSprintsLessonsArgs = {
  filters?: InputMaybe<PageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ComponentLmsSprintsObjectivesArgs = {
  filters?: InputMaybe<ComponentLmsObjectivesFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ComponentLmsSprintsSpikesArgs = {
  filters?: InputMaybe<PageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentLmsSprintsFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentLmsSprintsFiltersInput>>>;
  length?: InputMaybe<IntFilterInput>;
  lessons?: InputMaybe<PageFiltersInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentLmsSprintsFiltersInput>;
  objectives?: InputMaybe<ComponentLmsObjectivesFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentLmsSprintsFiltersInput>>>;
  spikes?: InputMaybe<PageFiltersInput>;
};

export type ComponentLmsSprintsInput = {
  id?: InputMaybe<Scalars['ID']>;
  length?: InputMaybe<Scalars['Int']>;
  lessons?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  name?: InputMaybe<Scalars['String']>;
  objectives?: InputMaybe<Array<InputMaybe<ComponentLmsObjectivesInput>>>;
  spikes?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type ComponentLmsTags = {
  __typename?: 'ComponentLmsTags';
  id: Scalars['ID'];
  tag?: Maybe<Scalars['String']>;
};

export type ComponentLmsTagsFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentLmsTagsFiltersInput>>>;
  not?: InputMaybe<ComponentLmsTagsFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentLmsTagsFiltersInput>>>;
  tag?: InputMaybe<StringFilterInput>;
};

export type ComponentLmsTagsInput = {
  id?: InputMaybe<Scalars['ID']>;
  tag?: InputMaybe<Scalars['String']>;
};

export type ComponentMetaMetadata = {
  __typename?: 'ComponentMetaMetadata';
  id: Scalars['ID'];
  metaDescription?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
};

export type ComponentMetaMetadataFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentMetaMetadataFiltersInput>>>;
  metaDescription?: InputMaybe<StringFilterInput>;
  metaTitle?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentMetaMetadataFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentMetaMetadataFiltersInput>>>;
};

export type ComponentMetaMetadataInput = {
  id?: InputMaybe<Scalars['ID']>;
  metaDescription?: InputMaybe<Scalars['String']>;
  metaTitle?: InputMaybe<Scalars['String']>;
};

export type ComponentMetaTags = {
  __typename?: 'ComponentMetaTags';
  id: Scalars['ID'];
  tag?: Maybe<Enum_Componentmetatags_Tag>;
};

export type ComponentNotificationNotifications = {
  __typename?: 'ComponentNotificationNotifications';
  delivered?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  timestamp?: Maybe<Scalars['DateTime']>;
  type?: Maybe<Enum_Componentnotificationnotifications_Type>;
};

export type ComponentNotificationNotificationsFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentNotificationNotificationsFiltersInput>>>;
  delivered?: InputMaybe<BooleanFilterInput>;
  not?: InputMaybe<ComponentNotificationNotificationsFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentNotificationNotificationsFiltersInput>>>;
  timestamp?: InputMaybe<DateTimeFilterInput>;
  type?: InputMaybe<StringFilterInput>;
};

export type ComponentNotificationNotificationsInput = {
  delivered?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['ID']>;
  timestamp?: InputMaybe<Scalars['DateTime']>;
  type?: InputMaybe<Enum_Componentnotificationnotifications_Type>;
};

export type ComponentRatingRatings = {
  __typename?: 'ComponentRatingRatings';
  author?: Maybe<UsersPermissionsUserEntityResponse>;
  id: Scalars['ID'];
  rating?: Maybe<Scalars['Int']>;
};

export type ComponentSectionsBottomActions = {
  __typename?: 'ComponentSectionsBottomActions';
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
};

export type ComponentSectionsCodeblock = {
  __typename?: 'ComponentSectionsCodeblock';
  code: Scalars['String'];
  id: Scalars['ID'];
  language?: Maybe<Enum_Componentsectionscodeblock_Language>;
};

export type ComponentSectionsFile = {
  __typename?: 'ComponentSectionsFile';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  media?: Maybe<UploadFileEntityResponse>;
};

export type ComponentSectionsGoogleSlide = {
  __typename?: 'ComponentSectionsGoogleSlide';
  id: Scalars['ID'];
  link: Scalars['String'];
};

export type ComponentSectionsHeader = {
  __typename?: 'ComponentSectionsHeader';
  id: Scalars['ID'];
  subtitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type ComponentSectionsHero = {
  __typename?: 'ComponentSectionsHero';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  label?: Maybe<Scalars['String']>;
  picture?: Maybe<UploadFileEntityResponse>;
  smallTextWithLink?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type ComponentSectionsLargeVideo = {
  __typename?: 'ComponentSectionsLargeVideo';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  video: UploadFileEntityResponse;
};

export type ComponentSectionsLeadForm = {
  __typename?: 'ComponentSectionsLeadForm';
  emailPlaceholder?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  location?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type ComponentSectionsRichText = {
  __typename?: 'ComponentSectionsRichText';
  content?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
};

export type ComponentSectionsTestimonialsGroup = {
  __typename?: 'ComponentSectionsTestimonialsGroup';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
};

export type ComponentStudentAchievement = {
  __typename?: 'ComponentStudentAchievement';
  achievement?: Maybe<AchievementEntityResponse>;
  id: Scalars['ID'];
  unlocked?: Maybe<Scalars['Boolean']>;
  unlockedOn?: Maybe<Scalars['DateTime']>;
};

export type ComponentStudentProject = {
  __typename?: 'ComponentStudentProject';
  course?: Maybe<CourseEntityResponse>;
  generate_attendance: Scalars['Boolean'];
  id: Scalars['ID'];
  main_course?: Maybe<Scalars['Boolean']>;
  start_date?: Maybe<Scalars['Date']>;
};

export type ComponentStudentTimeOff = {
  __typename?: 'ComponentStudentTimeOff';
  Time?: Maybe<Scalars['Time']>;
  id: Scalars['ID'];
  period?: Maybe<Enum_Componentstudenttimeoff_Period>;
  reason?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['DateTime']>;
  type?: Maybe<Enum_Componentstudenttimeoff_Type>;
};

export type ComponentStudentTimeOffFiltersInput = {
  Time?: InputMaybe<TimeFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ComponentStudentTimeOffFiltersInput>>>;
  not?: InputMaybe<ComponentStudentTimeOffFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentStudentTimeOffFiltersInput>>>;
  period?: InputMaybe<StringFilterInput>;
  reason?: InputMaybe<StringFilterInput>;
  timestamp?: InputMaybe<DateTimeFilterInput>;
  type?: InputMaybe<StringFilterInput>;
};

export type ComponentStudentTimeOffInput = {
  Time?: InputMaybe<Scalars['Time']>;
  id?: InputMaybe<Scalars['ID']>;
  period?: InputMaybe<Enum_Componentstudenttimeoff_Period>;
  reason?: InputMaybe<Scalars['String']>;
  timestamp?: InputMaybe<Scalars['DateTime']>;
  type?: InputMaybe<Enum_Componentstudenttimeoff_Type>;
};

export type ComponentUserProgress = {
  __typename?: 'ComponentUserProgress';
  id: Scalars['ID'];
  projects?: Maybe<Array<Maybe<ComponentUserProjects>>>;
};


export type ComponentUserProgressProjectsArgs = {
  filters?: InputMaybe<ComponentUserProjectsFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentUserProjects = {
  __typename?: 'ComponentUserProjects';
  end_date?: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
  progress?: Maybe<Scalars['Float']>;
  project?: Maybe<ProjectEntityResponse>;
  start_date?: Maybe<Scalars['Date']>;
};

export type ComponentUserProjectsFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentUserProjectsFiltersInput>>>;
  end_date?: InputMaybe<DateFilterInput>;
  not?: InputMaybe<ComponentUserProjectsFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentUserProjectsFiltersInput>>>;
  progress?: InputMaybe<FloatFilterInput>;
  project?: InputMaybe<ProjectFiltersInput>;
  start_date?: InputMaybe<DateFilterInput>;
};

export type Conversation = {
  __typename?: 'Conversation';
  chatroom?: Maybe<ChatroomEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  messages?: Maybe<MessageRelationResponseCollection>;
  pinned?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type ConversationMessagesArgs = {
  filters?: InputMaybe<MessageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ConversationEntity = {
  __typename?: 'ConversationEntity';
attributes: Conversation;
  id: string;
};

export type ConversationEntityResponse = {
  __typename?: 'ConversationEntityResponse';
data: ConversationEntity;
};

export type ConversationEntityResponseCollection = {
  __typename?: 'ConversationEntityResponseCollection';
  data: Array<ConversationEntity>;
  meta: ResponseCollectionMeta;
};

export type ConversationFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ConversationFiltersInput>>>;
  chatroom?: InputMaybe<ChatroomFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  messages?: InputMaybe<MessageFiltersInput>;
  not?: InputMaybe<ConversationFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ConversationFiltersInput>>>;
  pinned?: InputMaybe<BooleanFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ConversationInput = {
  chatroom?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  messages?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  pinned?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ConversationRelationResponseCollection = {
  __typename?: 'ConversationRelationResponseCollection';
  data: Array<ConversationEntity>;
};

export type Course = {
  __typename?: 'Course';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<UploadFileEntityResponse>;
  mentors?: Maybe<MentorRelationResponseCollection>;
  months?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  objectives?: Maybe<Array<Maybe<ComponentLmsObjectives>>>;
  projects?: Maybe<ProjectRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  slug?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type CourseMentorsArgs = {
  filters?: InputMaybe<MentorFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type CourseObjectivesArgs = {
  filters?: InputMaybe<ComponentLmsObjectivesFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type CourseProjectsArgs = {
  filters?: InputMaybe<ProjectFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CourseEntity = {
  __typename?: 'CourseEntity';
attributes: Course;
  id: string;
};

export type CourseEntityResponse = {
  __typename?: 'CourseEntityResponse';
data: CourseEntity;
};

export type CourseEntityResponseCollection = {
  __typename?: 'CourseEntityResponseCollection';
  data: Array<CourseEntity>;
  meta: ResponseCollectionMeta;
};

export type CourseFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<CourseFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mentors?: InputMaybe<MentorFiltersInput>;
  months?: InputMaybe<IntFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<CourseFiltersInput>;
  objectives?: InputMaybe<ComponentLmsObjectivesFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CourseFiltersInput>>>;
  projects?: InputMaybe<ProjectFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type CourseInput = {
  description?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['ID']>;
  mentors?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  months?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  objectives?: InputMaybe<Array<InputMaybe<ComponentLmsObjectivesInput>>>;
  projects?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  slug?: InputMaybe<Scalars['String']>;
};

export type CourseRelationResponseCollection = {
  __typename?: 'CourseRelationResponseCollection';
  data: Array<CourseEntity>;
};

export type DateFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  contains?: InputMaybe<Scalars['Date']>;
  containsi?: InputMaybe<Scalars['Date']>;
  endsWith?: InputMaybe<Scalars['Date']>;
  eq?: InputMaybe<Scalars['Date']>;
  eqi?: InputMaybe<Scalars['Date']>;
  gt?: InputMaybe<Scalars['Date']>;
  gte?: InputMaybe<Scalars['Date']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  lt?: InputMaybe<Scalars['Date']>;
  lte?: InputMaybe<Scalars['Date']>;
  ne?: InputMaybe<Scalars['Date']>;
  not?: InputMaybe<DateFilterInput>;
  notContains?: InputMaybe<Scalars['Date']>;
  notContainsi?: InputMaybe<Scalars['Date']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  startsWith?: InputMaybe<Scalars['Date']>;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  contains?: InputMaybe<Scalars['DateTime']>;
  containsi?: InputMaybe<Scalars['DateTime']>;
  endsWith?: InputMaybe<Scalars['DateTime']>;
  eq?: InputMaybe<Scalars['DateTime']>;
  eqi?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  ne?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']>;
  notContainsi?: InputMaybe<Scalars['DateTime']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']>;
};

export enum Enum_Achievement_Type {
  CourseDate = 'course_date',
  Date = 'date',
  Other = 'other',
  Quest = 'quest'
}

export enum Enum_Codingchallenge_Tags {
  Data = 'data',
  Web = 'web'
}

export enum Enum_Componentkanbancard_Category {
  Javascript = 'Javascript',
  Mern = 'MERN',
  React = 'React',
  Html = 'html'
}

export enum Enum_Componentleadlifecycle_State {
  Confirmed = 'Confirmed',
  Lead = 'Lead',
  Out = 'Out',
  Student = 'Student'
}

export enum Enum_Componentmetatags_Tag {
  Css = 'css',
  Data = 'data',
  Web = 'web'
}

export enum Enum_Componentnotificationnotifications_Type {
  Achievement = 'achievement',
  Announcement = 'announcement'
}

export enum Enum_Componentsectionscodeblock_Language {
  Css = 'css',
  Html = 'html',
  Javascript = 'javascript',
  Other = 'other',
  Python = 'python',
  Typescript = 'typescript'
}

export enum Enum_Componentstudenttimeoff_Period {
  Am = 'AM',
  Pm = 'PM',
  Day = 'day'
}

export enum Enum_Componentstudenttimeoff_Type {
  BereavementLeaveImmediateFamily = 'Bereavement_leave_Immediate_Family',
  BereavementLeaveOther = 'Bereavement_leave_Other',
  DoctorsAppointment = 'Doctors_appointment',
  EmergencyLeave = 'Emergency_leave',
  JuryDutyOrLegalLeave = 'Jury_duty_or_legal_leave',
  SickLeaveIllnessOrInjury = 'Sick_leave_Illness_or_Injury',
  TemporaryLeave = 'Temporary_leave'
}

export enum Enum_Jobpost_Field {
  DataScience = 'Data_Science',
  Other = 'Other',
  WebDevelopment = 'Web_Development'
}

export enum Enum_Lead_Cablifecycle {
  Confirmed = 'Confirmed',
  Lead = 'Lead',
  Out = 'Out',
  Student = 'Student'
}

export enum Enum_Lead_Marketingfunnel {
  Coursereport = 'coursereport',
  Facebook = 'facebook',
  Google = 'google',
  Instagram = 'instagram',
  Kursenet = 'kursenet',
  Linkedin = 'linkedin',
  Other = 'other',
  Switchup = 'switchup',
  Undefined = 'undefined',
  Wdb = 'wdb'
}

export enum Enum_Mentor_Specialization {
  Admission = 'admission',
  All = 'all',
  Data = 'data',
  Web = 'web'
}

export enum Enum_Page_Category {
  Academy = 'academy',
  Career = 'career',
  Data = 'data',
  Other = 'other',
  Web = 'web'
}

export enum Enum_Page_Type {
  Forum = 'forum',
  Lesson = 'lesson',
  Spike = 'spike'
}

export type EmailDesignerEmailTemplate = {
  __typename?: 'EmailDesignerEmailTemplate';
  bodyHtml?: Maybe<Scalars['String']>;
  bodyText?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  design?: Maybe<Scalars['JSON']>;
  enabled?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  subject?: Maybe<Scalars['String']>;
  tags?: Maybe<Scalars['JSON']>;
  templateReferenceId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type EmailDesignerEmailTemplateEntity = {
  __typename?: 'EmailDesignerEmailTemplateEntity';
attributes: EmailDesignerEmailTemplate;
  id: string;
};

export type EmailDesignerEmailTemplateEntityResponse = {
  __typename?: 'EmailDesignerEmailTemplateEntityResponse';
data: EmailDesignerEmailTemplateEntity;
};

export type EmailDesignerEmailTemplateEntityResponseCollection = {
  __typename?: 'EmailDesignerEmailTemplateEntityResponseCollection';
  data: Array<EmailDesignerEmailTemplateEntity>;
  meta: ResponseCollectionMeta;
};

export type EmailDesignerEmailTemplateFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<EmailDesignerEmailTemplateFiltersInput>>>;
  bodyHtml?: InputMaybe<StringFilterInput>;
  bodyText?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  design?: InputMaybe<JsonFilterInput>;
  enabled?: InputMaybe<BooleanFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<EmailDesignerEmailTemplateFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<EmailDesignerEmailTemplateFiltersInput>>>;
  subject?: InputMaybe<StringFilterInput>;
  tags?: InputMaybe<JsonFilterInput>;
  templateReferenceId?: InputMaybe<IntFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type EmailDesignerEmailTemplateInput = {
  bodyHtml?: InputMaybe<Scalars['String']>;
  bodyText?: InputMaybe<Scalars['String']>;
  design?: InputMaybe<Scalars['JSON']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  subject?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Scalars['JSON']>;
  templateReferenceId?: InputMaybe<Scalars['Int']>;
};

export type Error = {
  __typename?: 'Error';
  code: Scalars['String'];
  message?: Maybe<Scalars['String']>;
};

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  contains?: InputMaybe<Scalars['Float']>;
  containsi?: InputMaybe<Scalars['Float']>;
  endsWith?: InputMaybe<Scalars['Float']>;
  eq?: InputMaybe<Scalars['Float']>;
  eqi?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']>;
  notContainsi?: InputMaybe<Scalars['Float']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  startsWith?: InputMaybe<Scalars['Float']>;
};

export type GenericMorph = Achievement | Attendance | Chat | Chatroom | CodacOverflow | CodingChallenge | Cohort | ComponentAchievementAchievement | ComponentCardsBlogCard | ComponentChatMessage | ComponentCommentsComments | ComponentFeedbackFeedback | ComponentHolidaysHoliday | ComponentHoursHours | ComponentKanbanBoard | ComponentKanbanCard | ComponentKanbanColumn | ComponentLeadLifecycle | ComponentLmsObjectives | ComponentLmsSprints | ComponentLmsTags | ComponentMetaMetadata | ComponentMetaTags | ComponentNotificationNotifications | ComponentRatingRatings | ComponentSectionsBottomActions | ComponentSectionsCodeblock | ComponentSectionsFile | ComponentSectionsGoogleSlide | ComponentSectionsHeader | ComponentSectionsHero | ComponentSectionsLargeVideo | ComponentSectionsLeadForm | ComponentSectionsRichText | ComponentSectionsTestimonialsGroup | ComponentStudentAchievement | ComponentStudentProject | ComponentStudentTimeOff | ComponentUserProgress | ComponentUserProjects | Conversation | Course | EmailDesignerEmailTemplate | Holiday | I18NLocale | JobPost | Lead | LmsFeedback | Mentor | Message | Page | Project | Spike | Student | UploadFile | UploadFolder | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser | VsBattle;

export type GenericServerResponse = {
  __typename?: 'GenericServerResponse';
  /** Message of the operation */
  message?: Maybe<Scalars['String']>;
  /** Success state of the operation */
  success?: Maybe<Scalars['Boolean']>;
};

export type Holiday = {
  __typename?: 'Holiday';
  createdAt?: Maybe<Scalars['DateTime']>;
  holidays?: Maybe<Array<Maybe<ComponentHolidaysHoliday>>>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type HolidayHolidaysArgs = {
  filters?: InputMaybe<ComponentHolidaysHolidayFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type HolidayEntity = {
  __typename?: 'HolidayEntity';
attributes: Holiday;
  id: string;
};

export type HolidayEntityResponse = {
  __typename?: 'HolidayEntityResponse';
data: HolidayEntity;
};

export type HolidayInput = {
  holidays?: InputMaybe<Array<InputMaybe<ComponentHolidaysHolidayInput>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type I18NLocaleEntity = {
  __typename?: 'I18NLocaleEntity';
attributes: I18NLocale;
  id: string;
};

export type I18NLocaleEntityResponse = {
  __typename?: 'I18NLocaleEntityResponse';
data: I18NLocaleEntity;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection';
  data: Array<I18NLocaleEntity>;
  meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  contains?: InputMaybe<Scalars['ID']>;
  containsi?: InputMaybe<Scalars['ID']>;
  endsWith?: InputMaybe<Scalars['ID']>;
  eq?: InputMaybe<Scalars['ID']>;
  eqi?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  gte?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  lt?: InputMaybe<Scalars['ID']>;
  lte?: InputMaybe<Scalars['ID']>;
  ne?: InputMaybe<Scalars['ID']>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']>;
  notContainsi?: InputMaybe<Scalars['ID']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  startsWith?: InputMaybe<Scalars['ID']>;
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  contains?: InputMaybe<Scalars['Int']>;
  containsi?: InputMaybe<Scalars['Int']>;
  endsWith?: InputMaybe<Scalars['Int']>;
  eq?: InputMaybe<Scalars['Int']>;
  eqi?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars['Int']>;
  notContainsi?: InputMaybe<Scalars['Int']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  startsWith?: InputMaybe<Scalars['Int']>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  contains?: InputMaybe<Scalars['JSON']>;
  containsi?: InputMaybe<Scalars['JSON']>;
  endsWith?: InputMaybe<Scalars['JSON']>;
  eq?: InputMaybe<Scalars['JSON']>;
  eqi?: InputMaybe<Scalars['JSON']>;
  gt?: InputMaybe<Scalars['JSON']>;
  gte?: InputMaybe<Scalars['JSON']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  lt?: InputMaybe<Scalars['JSON']>;
  lte?: InputMaybe<Scalars['JSON']>;
  ne?: InputMaybe<Scalars['JSON']>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']>;
  notContainsi?: InputMaybe<Scalars['JSON']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  startsWith?: InputMaybe<Scalars['JSON']>;
};

export type JobPost = {
  __typename?: 'JobPost';
  company?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  field?: Maybe<Enum_Jobpost_Field>;
  position?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  url?: Maybe<Scalars['String']>;
};

export type JobPostEntity = {
  __typename?: 'JobPostEntity';
attributes: JobPost;
  id: string;
};

export type JobPostEntityResponse = {
  __typename?: 'JobPostEntityResponse';
data: JobPostEntity;
};

export type JobPostEntityResponseCollection = {
  __typename?: 'JobPostEntityResponseCollection';
  data: Array<JobPostEntity>;
  meta: ResponseCollectionMeta;
};

export type JobPostFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<JobPostFiltersInput>>>;
  company?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  field?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<JobPostFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<JobPostFiltersInput>>>;
  position?: InputMaybe<StringFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
};

export type JobPostInput = {
  company?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  field?: InputMaybe<Enum_Jobpost_Field>;
  position?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  url?: InputMaybe<Scalars['String']>;
};

export type Lead = {
  __typename?: 'Lead';
  bildungsgutschein?: Maybe<Scalars['String']>;
  cablifecycle?: Maybe<Enum_Lead_Cablifecycle>;
  country?: Maybe<Scalars['String']>;
  course?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  date?: Maybe<Scalars['Date']>;
  email?: Maybe<Scalars['String']>;
  firstname?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  lifecycle?: Maybe<Array<Maybe<ComponentLeadLifecycle>>>;
  main_course?: Maybe<CourseEntityResponse>;
  marketingfunnel?: Maybe<Enum_Lead_Marketingfunnel>;
  msg?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type LeadLifecycleArgs = {
  filters?: InputMaybe<ComponentLeadLifecycleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type LeadEntity = {
  __typename?: 'LeadEntity';
attributes: Lead;
  id: string;
};

export type LeadEntityResponse = {
  __typename?: 'LeadEntityResponse';
data: LeadEntity;
};

export type LeadEntityResponseCollection = {
  __typename?: 'LeadEntityResponseCollection';
  data: Array<LeadEntity>;
  meta: ResponseCollectionMeta;
};

export type LeadFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<LeadFiltersInput>>>;
  bildungsgutschein?: InputMaybe<StringFilterInput>;
  cablifecycle?: InputMaybe<StringFilterInput>;
  country?: InputMaybe<StringFilterInput>;
  course?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  date?: InputMaybe<DateFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  firstname?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  lastname?: InputMaybe<StringFilterInput>;
  lifecycle?: InputMaybe<ComponentLeadLifecycleFiltersInput>;
  main_course?: InputMaybe<CourseFiltersInput>;
  marketingfunnel?: InputMaybe<StringFilterInput>;
  msg?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<LeadFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<LeadFiltersInput>>>;
  phone?: InputMaybe<StringFilterInput>;
  status?: InputMaybe<StringFilterInput>;
  unsubscribed?: InputMaybe<BooleanFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type LeadInput = {
  bildungsgutschein?: InputMaybe<Scalars['String']>;
  cablifecycle?: InputMaybe<Enum_Lead_Cablifecycle>;
  country?: InputMaybe<Scalars['String']>;
  course?: InputMaybe<Scalars['String']>;
  date?: InputMaybe<Scalars['Date']>;
  email?: InputMaybe<Scalars['String']>;
  firstname?: InputMaybe<Scalars['String']>;
  lastname?: InputMaybe<Scalars['String']>;
  lifecycle?: InputMaybe<Array<InputMaybe<ComponentLeadLifecycleInput>>>;
  main_course?: InputMaybe<Scalars['ID']>;
  marketingfunnel?: InputMaybe<Enum_Lead_Marketingfunnel>;
  msg?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  unsubscribed?: InputMaybe<Scalars['Boolean']>;
};

export type LmsFeedback = {
  __typename?: 'LmsFeedback';
  comments?: Maybe<Array<Maybe<ComponentCommentsComments>>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  feedbacks?: Maybe<Array<Maybe<ComponentFeedbackFeedback>>>;
  slug: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type LmsFeedbackCommentsArgs = {
  filters?: InputMaybe<ComponentCommentsCommentsFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type LmsFeedbackFeedbacksArgs = {
  filters?: InputMaybe<ComponentFeedbackFeedbackFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type LmsFeedbackEntity = {
  __typename?: 'LmsFeedbackEntity';
attributes: LmsFeedback;
  id: string;
};

export type LmsFeedbackEntityResponse = {
  __typename?: 'LmsFeedbackEntityResponse';
data: LmsFeedbackEntity;
};

export type LmsFeedbackEntityResponseCollection = {
  __typename?: 'LmsFeedbackEntityResponseCollection';
  data: Array<LmsFeedbackEntity>;
  meta: ResponseCollectionMeta;
};

export type LmsFeedbackFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<LmsFeedbackFiltersInput>>>;
  comments?: InputMaybe<ComponentCommentsCommentsFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  feedbacks?: InputMaybe<ComponentFeedbackFeedbackFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<LmsFeedbackFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<LmsFeedbackFiltersInput>>>;
  slug?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type LmsFeedbackInput = {
  comments?: InputMaybe<Array<InputMaybe<ComponentCommentsCommentsInput>>>;
  feedbacks?: InputMaybe<Array<InputMaybe<ComponentFeedbackFeedbackInput>>>;
  slug?: InputMaybe<Scalars['String']>;
};

export type Mentor = {
  __typename?: 'Mentor';
  appointment?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  github?: Maybe<Scalars['String']>;
  linkedin?: Maybe<Scalars['String']>;
  specialization?: Maybe<Enum_Mentor_Specialization>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<UsersPermissionsUserEntityResponse>;
};

export type MentorEntity = {
  __typename?: 'MentorEntity';
attributes: Mentor;
  id: string;
};

export type MentorEntityResponse = {
  __typename?: 'MentorEntityResponse';
data: MentorEntity;
};

export type MentorEntityResponseCollection = {
  __typename?: 'MentorEntityResponseCollection';
  data: Array<MentorEntity>;
  meta: ResponseCollectionMeta;
};

export type MentorFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<MentorFiltersInput>>>;
  appointment?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  github?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  linkedin?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<MentorFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<MentorFiltersInput>>>;
  specialization?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  user?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type MentorInput = {
  appointment?: InputMaybe<Scalars['String']>;
  github?: InputMaybe<Scalars['String']>;
  linkedin?: InputMaybe<Scalars['String']>;
  specialization?: InputMaybe<Enum_Mentor_Specialization>;
  user?: InputMaybe<Scalars['ID']>;
};

export type MentorRelationResponseCollection = {
  __typename?: 'MentorRelationResponseCollection';
  data: Array<MentorEntity>;
};

export type Message = {
  __typename?: 'Message';
  author?: Maybe<UsersPermissionsUserEntityResponse>;
  body?: Maybe<Scalars['String']>;
  conversation?: Maybe<ConversationEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  pinned?: Maybe<Scalars['Boolean']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type MessageEntity = {
  __typename?: 'MessageEntity';
attributes: Message;
  id: string;
};

export type MessageEntityResponse = {
  __typename?: 'MessageEntityResponse';
data: MessageEntity;
};

export type MessageEntityResponseCollection = {
  __typename?: 'MessageEntityResponseCollection';
  data: Array<MessageEntity>;
  meta: ResponseCollectionMeta;
};

export type MessageFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<MessageFiltersInput>>>;
  author?: InputMaybe<UsersPermissionsUserFiltersInput>;
  body?: InputMaybe<StringFilterInput>;
  conversation?: InputMaybe<ConversationFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<MessageFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<MessageFiltersInput>>>;
  pinned?: InputMaybe<BooleanFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type MessageInput = {
  author?: InputMaybe<Scalars['ID']>;
  body?: InputMaybe<Scalars['String']>;
  conversation?: InputMaybe<Scalars['ID']>;
  pinned?: InputMaybe<Scalars['Boolean']>;
};

export type MessageRelationResponseCollection = {
  __typename?: 'MessageRelationResponseCollection';
  data: Array<MessageEntity>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Add achievement on a student */
  addAchievement?: Maybe<GenericServerResponse>;
  /** Add comment on a codac overflow item */
  addCODACOverflowComment?: Maybe<GenericServerResponse>;
  /** Add message on a chat item */
  addChatMessage?: Maybe<GenericServerResponse>;
  /** Add comment on a coding challenge item */
  addCodingChallengeComment?: Maybe<GenericServerResponse>;
  /** Add feedback on a lms item */
  addLMSfeedback?: Maybe<GenericServerResponse>;
  /** Add comment on a lms feedback item */
  addLMSfeedbackComment?: Maybe<GenericServerResponse>;
  /** Change user password. Confirm with the current password. */
  changePassword?: Maybe<UsersPermissionsLoginPayload>;
  createAchievement?: Maybe<AchievementEntityResponse>;
  createAttendance?: Maybe<AttendanceEntityResponse>;
  createChat?: Maybe<ChatEntityResponse>;
  createChatroom?: Maybe<ChatroomEntityResponse>;
  createCodacOverflow?: Maybe<CodacOverflowEntityResponse>;
  createCodingChallenge?: Maybe<CodingChallengeEntityResponse>;
  createCohort?: Maybe<CohortEntityResponse>;
  createConversation?: Maybe<ConversationEntityResponse>;
  /** Add message on a conversation item */
  createConversationMessage?: Maybe<GenericServerResponse>;
  createCourse?: Maybe<CourseEntityResponse>;
  createEmailDesignerEmailTemplate?: Maybe<EmailDesignerEmailTemplateEntityResponse>;
  createJobPost?: Maybe<JobPostEntityResponse>;
  createLead?: Maybe<LeadEntityResponse>;
  createLmsFeedback?: Maybe<LmsFeedbackEntityResponse>;
  createMentor?: Maybe<MentorEntityResponse>;
  createMessage?: Maybe<MessageEntityResponse>;
  createPage?: Maybe<PageEntityResponse>;
  createPageLocalization?: Maybe<PageEntityResponse>;
  createProject?: Maybe<ProjectEntityResponse>;
  createSpike?: Maybe<SpikeEntityResponse>;
  createStudent?: Maybe<StudentEntityResponse>;
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  createUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  createVsBattle?: Maybe<VsBattleEntityResponse>;
  deleteAchievement?: Maybe<AchievementEntityResponse>;
  deleteAttendance?: Maybe<AttendanceEntityResponse>;
  /** Add comment on a codac overflow item */
  deleteCODACOverflowComment?: Maybe<GenericServerResponse>;
  deleteChat?: Maybe<ChatEntityResponse>;
  /** Add message on a chat item */
  deleteChatMessage?: Maybe<GenericServerResponse>;
  deleteChatroom?: Maybe<ChatroomEntityResponse>;
  deleteCodacOverflow?: Maybe<CodacOverflowEntityResponse>;
  deleteCodingChallenge?: Maybe<CodingChallengeEntityResponse>;
  /** Add comment on a coding challenge item */
  deleteCodingChallengeComment?: Maybe<GenericServerResponse>;
  deleteCohort?: Maybe<CohortEntityResponse>;
  deleteConversation?: Maybe<ConversationEntityResponse>;
  /** Add message on a conversation item */
  deleteConversationMessage?: Maybe<GenericServerResponse>;
  deleteCourse?: Maybe<CourseEntityResponse>;
  deleteEmailDesignerEmailTemplate?: Maybe<EmailDesignerEmailTemplateEntityResponse>;
  deleteHoliday?: Maybe<HolidayEntityResponse>;
  deleteJobPost?: Maybe<JobPostEntityResponse>;
  /** Delete feedback on a lms feedback item */
  deleteLMSfeedback?: Maybe<GenericServerResponse>;
  /** Delete comment on a lms feedback item */
  deleteLMSfeedbackComment?: Maybe<GenericServerResponse>;
  deleteLead?: Maybe<LeadEntityResponse>;
  deleteLmsFeedback?: Maybe<LmsFeedbackEntityResponse>;
  deleteMentor?: Maybe<MentorEntityResponse>;
  deleteMessage?: Maybe<MessageEntityResponse>;
  deletePage?: Maybe<PageEntityResponse>;
  deleteProject?: Maybe<ProjectEntityResponse>;
  deleteSpike?: Maybe<SpikeEntityResponse>;
  deleteStudent?: Maybe<StudentEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  deleteUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteVsBattle?: Maybe<VsBattleEntityResponse>;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  removeFile?: Maybe<UploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  /** Add achievement on a student */
  unlockAchievement?: Maybe<GenericServerResponse>;
  /** Add achievement on a student */
  unlockAchievements?: Maybe<GenericServerResponse>;
  updateAchievement?: Maybe<AchievementEntityResponse>;
  updateAttendance?: Maybe<AttendanceEntityResponse>;
  /** Update comment on a codac overflow item */
  updateCODACOverflowComment?: Maybe<GenericServerResponse>;
  updateChat?: Maybe<ChatEntityResponse>;
  /** Update message on a chat item */
  updateChatMessage?: Maybe<GenericServerResponse>;
  updateChatroom?: Maybe<ChatroomEntityResponse>;
  updateCodacOverflow?: Maybe<CodacOverflowEntityResponse>;
  updateCodingChallenge?: Maybe<CodingChallengeEntityResponse>;
  /** Update comment on a coding challenge item */
  updateCodingChallengeComment?: Maybe<GenericServerResponse>;
  updateCohort?: Maybe<CohortEntityResponse>;
  updateConversation?: Maybe<ConversationEntityResponse>;
  /** Update message on a conversation item */
  updateConversationMessage?: Maybe<GenericServerResponse>;
  updateCourse?: Maybe<CourseEntityResponse>;
  updateEmailDesignerEmailTemplate?: Maybe<EmailDesignerEmailTemplateEntityResponse>;
  updateFileInfo: UploadFileEntityResponse;
  updateHoliday?: Maybe<HolidayEntityResponse>;
  updateJobPost?: Maybe<JobPostEntityResponse>;
  /** Update feedback on a lms feedback item */
  updateLMSfeedback?: Maybe<GenericServerResponse>;
  /** Update comment on a lms feedback item */
  updateLMSfeedbackComment?: Maybe<GenericServerResponse>;
  updateLead?: Maybe<LeadEntityResponse>;
  updateLmsFeedback?: Maybe<LmsFeedbackEntityResponse>;
  updateMentor?: Maybe<MentorEntityResponse>;
  updateMessage?: Maybe<MessageEntityResponse>;
  updatePage?: Maybe<PageEntityResponse>;
  updateProject?: Maybe<ProjectEntityResponse>;
  updateSpike?: Maybe<SpikeEntityResponse>;
  updateStudent?: Maybe<StudentEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  updateUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  updateVsBattle?: Maybe<VsBattleEntityResponse>;
  upload: UploadFileEntityResponse;
  /**
   * This Mutation updates the corresponding battle with user voting option
   * and removes the vote on the other option if present. It will remove the vote if voting the same option is voted again
   */
  voteVsBattle?: Maybe<VsBattle>;
};


export type MutationAddAchievementArgs = {
  achievementId: Scalars['ID'];
  studentId: Scalars['ID'];
};


export type MutationAddCodacOverflowCommentArgs = {
  codacOverflowId: Scalars['ID'];
  comment: Scalars['String'];
};


export type MutationAddChatMessageArgs = {
  body: Scalars['String'];
  chatId: Scalars['ID'];
};


export type MutationAddCodingChallengeCommentArgs = {
  codingChallengeId: Scalars['ID'];
  comment: Scalars['String'];
};


export type MutationAddLmSfeedbackArgs = {
  comment: Scalars['String'];
  lmsFeedbackId: Scalars['ID'];
  rating: Scalars['Int'];
};


export type MutationAddLmSfeedbackCommentArgs = {
  comment: Scalars['String'];
  lmsFeedbackId: Scalars['ID'];
};


export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};


export type MutationCreateAchievementArgs = {
  data: AchievementInput;
};


export type MutationCreateAttendanceArgs = {
  data: AttendanceInput;
};


export type MutationCreateChatArgs = {
  data: ChatInput;
};


export type MutationCreateChatroomArgs = {
  data: ChatroomInput;
};


export type MutationCreateCodacOverflowArgs = {
  data: CodacOverflowInput;
};


export type MutationCreateCodingChallengeArgs = {
  data: CodingChallengeInput;
};


export type MutationCreateCohortArgs = {
  data: CohortInput;
};


export type MutationCreateConversationArgs = {
  data: ConversationInput;
};


export type MutationCreateConversationMessageArgs = {
  body: Scalars['String'];
  conversationId: Scalars['ID'];
};


export type MutationCreateCourseArgs = {
  data: CourseInput;
};


export type MutationCreateEmailDesignerEmailTemplateArgs = {
  data: EmailDesignerEmailTemplateInput;
};


export type MutationCreateJobPostArgs = {
  data: JobPostInput;
};


export type MutationCreateLeadArgs = {
  data: LeadInput;
};


export type MutationCreateLmsFeedbackArgs = {
  data: LmsFeedbackInput;
};


export type MutationCreateMentorArgs = {
  data: MentorInput;
};


export type MutationCreateMessageArgs = {
  data: MessageInput;
};


export type MutationCreatePageArgs = {
  data: PageInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreatePageLocalizationArgs = {
  data?: InputMaybe<PageInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateProjectArgs = {
  data: ProjectInput;
};


export type MutationCreateSpikeArgs = {
  data: SpikeInput;
};


export type MutationCreateStudentArgs = {
  data: StudentInput;
};


export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};


export type MutationCreateUploadFolderArgs = {
  data: UploadFolderInput;
};


export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


export type MutationCreateVsBattleArgs = {
  data: VsBattleInput;
};


export type MutationDeleteAchievementArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteAttendanceArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteCodacOverflowCommentArgs = {
  codacOverflowId: Scalars['ID'];
  commentId: Scalars['ID'];
};


export type MutationDeleteChatArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteChatMessageArgs = {
  chatId: Scalars['ID'];
  messageId: Scalars['ID'];
};


export type MutationDeleteChatroomArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteCodacOverflowArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteCodingChallengeArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteCodingChallengeCommentArgs = {
  codingChallengeId: Scalars['ID'];
  commentId: Scalars['ID'];
};


export type MutationDeleteCohortArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteConversationArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteConversationMessageArgs = {
  messageId: Scalars['ID'];
};


export type MutationDeleteCourseArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteEmailDesignerEmailTemplateArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteJobPostArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteLmSfeedbackArgs = {
  feedbackId: Scalars['ID'];
  lmsFeedbackId: Scalars['ID'];
};


export type MutationDeleteLmSfeedbackCommentArgs = {
  commentId: Scalars['ID'];
  lmsFeedbackId: Scalars['ID'];
};


export type MutationDeleteLeadArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteLmsFeedbackArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteMentorArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteMessageArgs = {
  id: Scalars['ID'];
};


export type MutationDeletePageArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteProjectArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteSpikeArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteStudentArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUploadFolderArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteVsBattleArgs = {
  id: Scalars['ID'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  files: Array<InputMaybe<Scalars['Upload']>>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationRemoveFileArgs = {
  id: Scalars['ID'];
};


export type MutationResetPasswordArgs = {
  code: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};


export type MutationUnlockAchievementArgs = {
  achievementId: Scalars['ID'];
  studentId: Scalars['ID'];
};


export type MutationUnlockAchievementsArgs = {
  achievementIds?: InputMaybe<Array<Scalars['ID']>>;
  studentId: Scalars['ID'];
};


export type MutationUpdateAchievementArgs = {
  data: AchievementInput;
  id: Scalars['ID'];
};


export type MutationUpdateAttendanceArgs = {
  data: AttendanceInput;
  id: Scalars['ID'];
};


export type MutationUpdateCodacOverflowCommentArgs = {
  codacOverflowId: Scalars['ID'];
  comment: Scalars['String'];
  commentId: Scalars['ID'];
};


export type MutationUpdateChatArgs = {
  data: ChatInput;
  id: Scalars['ID'];
};


export type MutationUpdateChatMessageArgs = {
  body: Scalars['String'];
  chatId: Scalars['ID'];
  messageId: Scalars['ID'];
};


export type MutationUpdateChatroomArgs = {
  data: ChatroomInput;
  id: Scalars['ID'];
};


export type MutationUpdateCodacOverflowArgs = {
  data: CodacOverflowInput;
  id: Scalars['ID'];
};


export type MutationUpdateCodingChallengeArgs = {
  data: CodingChallengeInput;
  id: Scalars['ID'];
};


export type MutationUpdateCodingChallengeCommentArgs = {
  codingChallengeId: Scalars['ID'];
  comment: Scalars['String'];
  commentId: Scalars['ID'];
};


export type MutationUpdateCohortArgs = {
  data: CohortInput;
  id: Scalars['ID'];
};


export type MutationUpdateConversationArgs = {
  data: ConversationInput;
  id: Scalars['ID'];
};


export type MutationUpdateConversationMessageArgs = {
  body: Scalars['String'];
  messageId: Scalars['ID'];
};


export type MutationUpdateCourseArgs = {
  data: CourseInput;
  id: Scalars['ID'];
};


export type MutationUpdateEmailDesignerEmailTemplateArgs = {
  data: EmailDesignerEmailTemplateInput;
  id: Scalars['ID'];
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info?: InputMaybe<FileInfoInput>;
};


export type MutationUpdateHolidayArgs = {
  data: HolidayInput;
};


export type MutationUpdateJobPostArgs = {
  data: JobPostInput;
  id: Scalars['ID'];
};


export type MutationUpdateLmSfeedbackArgs = {
  comment: Scalars['String'];
  feedbackId: Scalars['ID'];
  lmsFeedbackId: Scalars['ID'];
  rating: Scalars['Int'];
};


export type MutationUpdateLmSfeedbackCommentArgs = {
  comment: Scalars['String'];
  commentId: Scalars['ID'];
  lmsFeedbackId: Scalars['ID'];
};


export type MutationUpdateLeadArgs = {
  data: LeadInput;
  id: Scalars['ID'];
};


export type MutationUpdateLmsFeedbackArgs = {
  data: LmsFeedbackInput;
  id: Scalars['ID'];
};


export type MutationUpdateMentorArgs = {
  data: MentorInput;
  id: Scalars['ID'];
};


export type MutationUpdateMessageArgs = {
  data: MessageInput;
  id: Scalars['ID'];
};


export type MutationUpdatePageArgs = {
  data: PageInput;
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateProjectArgs = {
  data: ProjectInput;
  id: Scalars['ID'];
};


export type MutationUpdateSpikeArgs = {
  data: SpikeInput;
  id: Scalars['ID'];
};


export type MutationUpdateStudentArgs = {
  data: StudentInput;
  id: Scalars['ID'];
};


export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars['ID'];
};


export type MutationUpdateUploadFolderArgs = {
  data: UploadFolderInput;
  id: Scalars['ID'];
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID'];
};


export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID'];
};


export type MutationUpdateVsBattleArgs = {
  data: VsBattleInput;
  id: Scalars['ID'];
};


export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  file: Scalars['Upload'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
};


export type MutationVoteVsBattleArgs = {
  id: Scalars['ID'];
  option: Scalars['Int'];
};

export type Page = {
  __typename?: 'Page';
  category?: Maybe<Enum_Page_Category>;
  contentSections: Array<Maybe<PageContentSectionsDynamicZone>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<PageRelationResponseCollection>;
data: ComponentMetaMetadata;
  publishedAt?: Maybe<Scalars['DateTime']>;
  slug?: Maybe<Scalars['String']>;
  sprint_day?: Maybe<Scalars['Int']>;
  tags?: Maybe<Array<Maybe<ComponentLmsTags>>>;
  title: Scalars['String'];
  type: Enum_Page_Type;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type PageLocalizationsArgs = {
  filters?: InputMaybe<PageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type PageTagsArgs = {
  filters?: InputMaybe<ComponentLmsTagsFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type PageContentSectionsDynamicZone = ComponentSectionsCodeblock | ComponentSectionsGoogleSlide | ComponentSectionsHeader | ComponentSectionsLargeVideo | ComponentSectionsRichText | Error;

export type PageEntity = {
  __typename?: 'PageEntity';
attributes: Page;
  id: string;
};

export type PageEntityResponse = {
  __typename?: 'PageEntityResponse';
data: PageEntity;
};

export type PageEntityResponseCollection = {
  __typename?: 'PageEntityResponseCollection';
  data: Array<PageEntity>;
  meta: ResponseCollectionMeta;
};

export type PageFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<PageFiltersInput>>>;
  category?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<PageFiltersInput>;
  metadata?: InputMaybe<ComponentMetaMetadataFiltersInput>;
  not?: InputMaybe<PageFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<PageFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  sprint_day?: InputMaybe<IntFilterInput>;
  tags?: InputMaybe<ComponentLmsTagsFiltersInput>;
  title?: InputMaybe<StringFilterInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type PageInput = {
  category?: InputMaybe<Enum_Page_Category>;
  contentSections?: InputMaybe<Array<Scalars['PageContentSectionsDynamicZoneInput']>>;
  metadata?: InputMaybe<ComponentMetaMetadataInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  slug?: InputMaybe<Scalars['String']>;
  sprint_day?: InputMaybe<Scalars['Int']>;
  tags?: InputMaybe<Array<InputMaybe<ComponentLmsTagsInput>>>;
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Enum_Page_Type>;
};

export type PageRelationResponseCollection = {
  __typename?: 'PageRelationResponseCollection';
  data: Array<PageEntity>;
};

export type Pagination = {
  __typename?: 'Pagination';
  page: Scalars['Int'];
  pageCount: Scalars['Int'];
  pageSize: Scalars['Int'];
  total: Scalars['Int'];
};

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  start?: InputMaybe<Scalars['Int']>;
};

export type Project = {
  __typename?: 'Project';
  calc_length: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  slug?: Maybe<Scalars['String']>;
  sprints?: Maybe<Array<Maybe<ComponentLmsSprints>>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type ProjectSprintsArgs = {
  filters?: InputMaybe<ComponentLmsSprintsFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ProjectEntity = {
  __typename?: 'ProjectEntity';
attributes: Project;
  id: string;
};

export type ProjectEntityResponse = {
  __typename?: 'ProjectEntityResponse';
data: ProjectEntity;
};

export type ProjectEntityResponseCollection = {
  __typename?: 'ProjectEntityResponseCollection';
  data: Array<ProjectEntity>;
  meta: ResponseCollectionMeta;
};

export type ProjectFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ProjectFiltersInput>>>;
  calc_length?: InputMaybe<IntFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ProjectFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ProjectFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  sprints?: InputMaybe<ComponentLmsSprintsFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ProjectInput = {
  calc_length?: InputMaybe<Scalars['Int']>;
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  slug?: InputMaybe<Scalars['String']>;
  sprints?: InputMaybe<Array<InputMaybe<ComponentLmsSprintsInput>>>;
};

export type ProjectRelationResponseCollection = {
  __typename?: 'ProjectRelationResponseCollection';
  data: Array<ProjectEntity>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  __typename?: 'Query';
  achievement?: Maybe<AchievementEntityResponse>;
  achievements?: Maybe<AchievementEntityResponseCollection>;
  attendance?: Maybe<AttendanceEntityResponse>;
  attendances?: Maybe<AttendanceEntityResponseCollection>;
  chat?: Maybe<ChatEntityResponse>;
  chatroom?: Maybe<ChatroomEntityResponse>;
  chatrooms?: Maybe<ChatroomEntityResponseCollection>;
  chats?: Maybe<ChatEntityResponseCollection>;
  codacOverflow?: Maybe<CodacOverflowEntityResponse>;
  codacOverflows?: Maybe<CodacOverflowEntityResponseCollection>;
  codingChallenge?: Maybe<CodingChallengeEntityResponse>;
  codingChallenges?: Maybe<CodingChallengeEntityResponseCollection>;
  cohort?: Maybe<CohortEntityResponse>;
  cohorts?: Maybe<CohortEntityResponseCollection>;
  conversation?: Maybe<ConversationEntityResponse>;
  conversations?: Maybe<ConversationEntityResponseCollection>;
  course?: Maybe<CourseEntityResponse>;
  courses?: Maybe<CourseEntityResponseCollection>;
  emailDesignerEmailTemplate?: Maybe<EmailDesignerEmailTemplateEntityResponse>;
  emailDesignerEmailTemplates?: Maybe<EmailDesignerEmailTemplateEntityResponseCollection>;
  holiday?: Maybe<HolidayEntityResponse>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  jobPost?: Maybe<JobPostEntityResponse>;
  jobPosts?: Maybe<JobPostEntityResponseCollection>;
  lead?: Maybe<LeadEntityResponse>;
  leads?: Maybe<LeadEntityResponseCollection>;
  lmsFeedback?: Maybe<LmsFeedbackEntityResponse>;
  lmsFeedbacks?: Maybe<LmsFeedbackEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
  mentor?: Maybe<MentorEntityResponse>;
  mentors?: Maybe<MentorEntityResponseCollection>;
  message?: Maybe<MessageEntityResponse>;
  messages?: Maybe<MessageEntityResponseCollection>;
  page?: Maybe<PageEntityResponse>;
  pages?: Maybe<PageEntityResponseCollection>;
  project?: Maybe<ProjectEntityResponse>;
  projects?: Maybe<ProjectEntityResponseCollection>;
  search?: Maybe<SearchResponse>;
  spike?: Maybe<SpikeEntityResponse>;
  spikes?: Maybe<SpikeEntityResponseCollection>;
  student?: Maybe<StudentEntityResponse>;
  students?: Maybe<StudentEntityResponseCollection>;
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  uploadFolder?: Maybe<UploadFolderEntityResponse>;
  uploadFolders?: Maybe<UploadFolderEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
  vsBattle?: Maybe<VsBattleEntityResponse>;
  vsBattles?: Maybe<VsBattleEntityResponseCollection>;
};


export type QueryAchievementArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryAchievementsArgs = {
  filters?: InputMaybe<AchievementFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryAttendanceArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryAttendancesArgs = {
  filters?: InputMaybe<AttendanceFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryChatArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryChatroomArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryChatroomsArgs = {
  filters?: InputMaybe<ChatroomFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryChatsArgs = {
  filters?: InputMaybe<ChatFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryCodacOverflowArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryCodacOverflowsArgs = {
  filters?: InputMaybe<CodacOverflowFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryCodingChallengeArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryCodingChallengesArgs = {
  filters?: InputMaybe<CodingChallengeFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryCohortArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryCohortsArgs = {
  filters?: InputMaybe<CohortFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryConversationArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryConversationsArgs = {
  filters?: InputMaybe<ConversationFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryCourseArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryCoursesArgs = {
  filters?: InputMaybe<CourseFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryEmailDesignerEmailTemplateArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryEmailDesignerEmailTemplatesArgs = {
  filters?: InputMaybe<EmailDesignerEmailTemplateFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryHolidayArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryJobPostArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryJobPostsArgs = {
  filters?: InputMaybe<JobPostFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryLeadArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryLeadsArgs = {
  filters?: InputMaybe<LeadFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryLmsFeedbackArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryLmsFeedbacksArgs = {
  filters?: InputMaybe<LmsFeedbackFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryMentorArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryMentorsArgs = {
  filters?: InputMaybe<MentorFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryMessageArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryMessagesArgs = {
  filters?: InputMaybe<MessageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryPageArgs = {
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryPagesArgs = {
  filters?: InputMaybe<PageFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryProjectArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryProjectsArgs = {
  filters?: InputMaybe<ProjectFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QuerySearchArgs = {
  locale?: InputMaybe<Scalars['String']>;
  query: Scalars['String'];
};


export type QuerySpikeArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QuerySpikesArgs = {
  filters?: InputMaybe<SpikeFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryStudentArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryStudentsArgs = {
  filters?: InputMaybe<StudentFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUploadFolderArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUploadFoldersArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryVsBattleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryVsBattlesArgs = {
  filters?: InputMaybe<VsBattleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta';
  pagination: Pagination;
};

export type SearchResponse = {
  __typename?: 'SearchResponse';
  courses?: Maybe<CourseEntityResponseCollection>;
  pages?: Maybe<PageEntityResponseCollection>;
  projects?: Maybe<ProjectEntityResponseCollection>;
};


export type SearchResponseCoursesArgs = {
  filters?: InputMaybe<CourseFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  pagination?: InputMaybe<PaginationArg>;
};


export type SearchResponsePagesArgs = {
  filters?: InputMaybe<PageFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  pagination?: InputMaybe<PaginationArg>;
};


export type SearchResponseProjectsArgs = {
  filters?: InputMaybe<ProjectFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  pagination?: InputMaybe<PaginationArg>;
};

export type Spike = {
  __typename?: 'Spike';
  content?: Maybe<PageEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  recording?: Maybe<UploadFileEntityResponse>;
  sprint_day?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SpikeEntity = {
  __typename?: 'SpikeEntity';
attributes: Spike;
  id: string;
};

export type SpikeEntityResponse = {
  __typename?: 'SpikeEntityResponse';
data: SpikeEntity;
};

export type SpikeEntityResponseCollection = {
  __typename?: 'SpikeEntityResponseCollection';
  data: Array<SpikeEntity>;
  meta: ResponseCollectionMeta;
};

export type SpikeFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<SpikeFiltersInput>>>;
  content?: InputMaybe<PageFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<SpikeFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<SpikeFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  sprint_day?: InputMaybe<IntFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type SpikeInput = {
  content?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  recording?: InputMaybe<Scalars['ID']>;
  sprint_day?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
};

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  containsi?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  eqi?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']>;
  notContainsi?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type Student = {
  __typename?: 'Student';
  alumni?: Maybe<Scalars['Boolean']>;
  attendances?: Maybe<AttendanceRelationResponseCollection>;
  calc_missed_days?: Maybe<Scalars['Int']>;
  cohort?: Maybe<CohortEntityResponse>;
  course?: Maybe<CourseEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  firstname?: Maybe<Scalars['String']>;
  github?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  linkedin?: Maybe<Scalars['String']>;
  start_date?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<UsersPermissionsUserEntityResponse>;
};


export type StudentAttendancesArgs = {
  filters?: InputMaybe<AttendanceFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type StudentEntity = {
  __typename?: 'StudentEntity';
attributes: Student;
  id: string;
};

export type StudentEntityResponse = {
  __typename?: 'StudentEntityResponse';
data: StudentEntity;
};

export type StudentEntityResponseCollection = {
  __typename?: 'StudentEntityResponseCollection';
  data: Array<StudentEntity>;
  meta: ResponseCollectionMeta;
};

export type StudentFiltersInput = {
  alumni?: InputMaybe<BooleanFilterInput>;
  and?: InputMaybe<Array<InputMaybe<StudentFiltersInput>>>;
  attendances?: InputMaybe<AttendanceFiltersInput>;
  calc_missed_days?: InputMaybe<IntFilterInput>;
  cohort?: InputMaybe<CohortFiltersInput>;
  course?: InputMaybe<CourseFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  firstname?: InputMaybe<StringFilterInput>;
  github?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  job_center_id?: InputMaybe<StringFilterInput>;
  lastname?: InputMaybe<StringFilterInput>;
  linkedin?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<StudentFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<StudentFiltersInput>>>;
  start_date?: InputMaybe<DateFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  user?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type StudentInput = {
  alumni?: InputMaybe<Scalars['Boolean']>;
  attendances?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  calc_missed_days?: InputMaybe<Scalars['Int']>;
  cohort?: InputMaybe<Scalars['ID']>;
  course?: InputMaybe<Scalars['ID']>;
  firstname?: InputMaybe<Scalars['String']>;
  github?: InputMaybe<Scalars['String']>;
  job_center_id?: InputMaybe<Scalars['String']>;
  lastname?: InputMaybe<Scalars['String']>;
  linkedin?: InputMaybe<Scalars['String']>;
  start_date?: InputMaybe<Scalars['Date']>;
  user?: InputMaybe<Scalars['ID']>;
};

export type StudentRelationResponseCollection = {
  __typename?: 'StudentRelationResponseCollection';
  data: Array<StudentEntity>;
};

export type TimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Time']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Time']>>>;
  contains?: InputMaybe<Scalars['Time']>;
  containsi?: InputMaybe<Scalars['Time']>;
  endsWith?: InputMaybe<Scalars['Time']>;
  eq?: InputMaybe<Scalars['Time']>;
  eqi?: InputMaybe<Scalars['Time']>;
  gt?: InputMaybe<Scalars['Time']>;
  gte?: InputMaybe<Scalars['Time']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Time']>>>;
  lt?: InputMaybe<Scalars['Time']>;
  lte?: InputMaybe<Scalars['Time']>;
  ne?: InputMaybe<Scalars['Time']>;
  not?: InputMaybe<TimeFilterInput>;
  notContains?: InputMaybe<Scalars['Time']>;
  notContainsi?: InputMaybe<Scalars['Time']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Time']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Time']>>>;
  startsWith?: InputMaybe<Scalars['Time']>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  ext?: Maybe<Scalars['String']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  height?: Maybe<Scalars['Int']>;
  mime: Scalars['String'];
  name: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
data: Scalars['JSON'];
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  url: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
};

export type UploadFileEntity = {
  __typename?: 'UploadFileEntity';
attributes: UploadFile;
  id: string;
};

export type UploadFileEntityResponse = {
  __typename?: 'UploadFileEntityResponse';
data: UploadFileEntity;
};

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection';
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  folder?: InputMaybe<UploadFolderFiltersInput>;
  folderPath?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  ext?: InputMaybe<Scalars['String']>;
  folder?: InputMaybe<Scalars['ID']>;
  folderPath?: InputMaybe<Scalars['String']>;
  formats?: InputMaybe<Scalars['JSON']>;
  hash?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  mime?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  previewUrl?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  provider_metadata?: InputMaybe<Scalars['JSON']>;
  size?: InputMaybe<Scalars['Float']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type UploadFileRelationResponseCollection = {
  __typename?: 'UploadFileRelationResponseCollection';
  data: Array<UploadFileEntity>;
};

export type UploadFolder = {
  __typename?: 'UploadFolder';
  children?: Maybe<UploadFolderRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']>;
  files?: Maybe<UploadFileRelationResponseCollection>;
  name: Scalars['String'];
  parent?: Maybe<UploadFolderEntityResponse>;
  path: Scalars['String'];
  pathId: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type UploadFolderChildrenArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type UploadFolderFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UploadFolderEntity = {
  __typename?: 'UploadFolderEntity';
attributes: UploadFolder;
  id: string;
};

export type UploadFolderEntityResponse = {
  __typename?: 'UploadFolderEntityResponse';
data: UploadFolderEntity;
};

export type UploadFolderEntityResponseCollection = {
  __typename?: 'UploadFolderEntityResponseCollection';
  data: Array<UploadFolderEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFolderFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  children?: InputMaybe<UploadFolderFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  files?: InputMaybe<UploadFileFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFolderFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  parent?: InputMaybe<UploadFolderFiltersInput>;
  path?: InputMaybe<StringFilterInput>;
  pathId?: InputMaybe<IntFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UploadFolderInput = {
  children?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  files?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  name?: InputMaybe<Scalars['String']>;
  parent?: InputMaybe<Scalars['ID']>;
  path?: InputMaybe<Scalars['String']>;
  pathId?: InputMaybe<Scalars['Int']>;
};

export type UploadFolderRelationResponseCollection = {
  __typename?: 'UploadFolderRelationResponseCollection';
  data: Array<UploadFolderEntity>;
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: Scalars['String'];
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  avatar?: Maybe<UploadFile>;
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  firstname?: Maybe<Scalars['String']>;
  id: string;
  lastname?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UsersPermissionsPermissionEntity = {
  __typename?: 'UsersPermissionsPermissionEntity';
attributes: UsersPermissionsPermission;
  id: string;
};

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UsersPermissionsRoleEntity = {
  __typename?: 'UsersPermissionsRoleEntity';
attributes: UsersPermissionsRole;
  id: string;
};

export type UsersPermissionsRoleEntityResponse = {
  __typename?: 'UsersPermissionsRoleEntityResponse';
data: UsersPermissionsRoleEntity;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  type?: InputMaybe<Scalars['String']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  avatar?: Maybe<UploadFileEntityResponse>;
  blocked?: Maybe<Scalars['Boolean']>;
  chatrooms?: Maybe<ChatroomRelationResponseCollection>;
  confirmed?: Maybe<Scalars['Boolean']>;
  courses?: Maybe<CourseRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  firstname?: Maybe<Scalars['String']>;
  kanban?: Maybe<ComponentKanbanBoard>;
  lastname?: Maybe<Scalars['String']>;
  mentor?: Maybe<MentorEntityResponse>;
  notifications?: Maybe<Array<Maybe<ComponentNotificationNotifications>>>;
  provider?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  student?: Maybe<StudentEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  username: Scalars['String'];
};


export type UsersPermissionsUserChatroomsArgs = {
  filters?: InputMaybe<ChatroomFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type UsersPermissionsUserCoursesArgs = {
  filters?: InputMaybe<CourseFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type UsersPermissionsUserNotificationsArgs = {
  filters?: InputMaybe<ComponentNotificationNotificationsFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UsersPermissionsUserEntity = {
  __typename?: 'UsersPermissionsUserEntity';
attributes: UsersPermissionsUser;
  id: string;
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse';
data: UsersPermissionsUserEntity;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  blocked?: InputMaybe<BooleanFilterInput>;
  chatrooms?: InputMaybe<ChatroomFiltersInput>;
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  courses?: InputMaybe<CourseFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  firstname?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  kanban?: InputMaybe<ComponentKanbanBoardFiltersInput>;
  lastname?: InputMaybe<StringFilterInput>;
  mentor?: InputMaybe<MentorFiltersInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  notifications?: InputMaybe<ComponentNotificationNotificationsFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  password?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  student?: InputMaybe<StudentFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  avatar?: InputMaybe<Scalars['ID']>;
  blocked?: InputMaybe<Scalars['Boolean']>;
  chatrooms?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  confirmationToken?: InputMaybe<Scalars['String']>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  courses?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  email?: InputMaybe<Scalars['String']>;
  firstname?: InputMaybe<Scalars['String']>;
  kanban?: InputMaybe<ComponentKanbanBoardInput>;
  lastname?: InputMaybe<Scalars['String']>;
  mentor?: InputMaybe<Scalars['ID']>;
  notifications?: InputMaybe<Array<InputMaybe<ComponentNotificationNotificationsInput>>>;
  password?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  resetPasswordToken?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['ID']>;
  student?: InputMaybe<Scalars['ID']>;
  username?: InputMaybe<Scalars['String']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
};

export type VsBattle = {
  __typename?: 'VsBattle';
  archived: Scalars['Boolean'];
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  option1?: Maybe<Scalars['String']>;
  option2?: Maybe<Scalars['String']>;
  option_1_voters?: Maybe<UsersPermissionsUserRelationResponseCollection>;
  option_2_voters?: Maybe<UsersPermissionsUserRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type VsBattleOption_1_VotersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type VsBattleOption_2_VotersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type VsBattleEntity = {
  __typename?: 'VsBattleEntity';
attributes: VsBattle;
  id: string;
};

export type VsBattleEntityResponse = {
  __typename?: 'VsBattleEntityResponse';
data: VsBattleEntity;
};

export type VsBattleEntityResponseCollection = {
  __typename?: 'VsBattleEntityResponseCollection';
  data: Array<VsBattleEntity>;
  meta: ResponseCollectionMeta;
};

export type VsBattleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<VsBattleFiltersInput>>>;
  archived?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<VsBattleFiltersInput>;
  option1?: InputMaybe<StringFilterInput>;
  option2?: InputMaybe<StringFilterInput>;
  option_1_voters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  option_2_voters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<VsBattleFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type VsBattleInput = {
  archived?: InputMaybe<Scalars['Boolean']>;
  description?: InputMaybe<Scalars['String']>;
  option1?: InputMaybe<Scalars['String']>;
  option2?: InputMaybe<Scalars['String']>;
  option_1_voters?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  option_2_voters?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
};

export type AddChatMessageMutationVariables = Exact<{
  chatId: Scalars['ID'];
  body: Scalars['String'];
}>;


export type AddChatMessageMutation = { __typename?: 'Mutation', addChatMessage?: { __typename?: 'GenericServerResponse', success?: boolean | null, message?: string | null } | null };

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'UsersPermissionsLoginPayload', jwt?: string | null, user: { __typename?: 'UsersPermissionsMe', username: string, id?: string | null, email?: string | null, role?: { __typename?: 'UsersPermissionsMeRole', type?: string | null, name: string, description?: string | null, id: string } | null } } };

export type GetChallengesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetChallengesQuery = { __typename?: 'Query', codingChallenges?: { __typename?: 'CodingChallengeEntityResponseCollection', data: Array<{ __typename?: 'CodingChallengeEntity', attributes?: { __typename?: 'CodingChallenge', challenge?: string | null, difficulty?: number | null } | null }> } | null };

export type GetChatsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetChatsQuery = { __typename?: 'Query', chats?: { __typename?: 'ChatEntityResponseCollection', data: Array<{ __typename?: 'ChatEntity', id?: string | null, attributes?: { __typename?: 'Chat', name?: string | null, messages?: Array<{ __typename?: 'ComponentChatMessage', body?: string | null, timestamp?: any | null, author?: { __typename?: 'UsersPermissionsUserEntityResponse', data?: { __typename?: 'UsersPermissionsUserEntity', attributes?: { __typename?: 'UsersPermissionsUser', username: string } | null } | null } | null } | null> | null } | null }> } | null };

export type GetChatQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetChatQuery = { __typename?: 'Query', chat?: { __typename?: 'ChatEntityResponse', data?: { __typename?: 'ChatEntity', id?: string | null, attributes?: { __typename?: 'Chat', name?: string | null, messages?: Array<{ __typename?: 'ComponentChatMessage', id: string, body?: string | null, timestamp?: any | null, author?: { __typename?: 'UsersPermissionsUserEntityResponse', data?: { __typename?: 'UsersPermissionsUserEntity', attributes?: { __typename?: 'UsersPermissionsUser', username: string, email: string } | null } | null } | null } | null> | null } | null } | null } | null };

export type GetCohortsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCohortsQuery = { __typename?: 'Query', cohorts?: { __typename?: 'CohortEntityResponseCollection', data: Array<{ __typename?: 'CohortEntity', attributes?: { __typename?: 'Cohort', name?: string | null, start_date?: any | null, logo?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, caption?: string | null, previewUrl?: string | null } | null } | null } | null, students?: { __typename?: 'StudentRelationResponseCollection', data: Array<{ __typename?: 'StudentEntity', id?: string | null, attributes?: { __typename?: 'Student', start_date?: any | null, user?: { __typename?: 'UsersPermissionsUserEntityResponse', data?: { __typename?: 'UsersPermissionsUserEntity', id?: string | null, attributes?: { __typename?: 'UsersPermissionsUser', firstname?: string | null, lastname?: string | null, avatar?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, name: string, caption?: string | null } | null } | null } | null } | null } | null } | null } | null }> } | null } | null }> } | null };

export type StudentCohortQueryVariables = Exact<{
  userId?: InputMaybe<Scalars['ID']>;
}>;


export type StudentCohortQuery = { __typename?: 'Query', students?: { __typename?: 'StudentEntityResponseCollection', data: Array<{ __typename?: 'StudentEntity', id?: string | null, attributes?: { __typename?: 'Student', cohort?: { __typename?: 'CohortEntityResponse', data?: { __typename?: 'CohortEntity', attributes?: { __typename?: 'Cohort', name?: string | null, start_date?: any | null } | null } | null } | null } | null }> } | null };

export type GetAllCoursesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllCoursesQuery = { __typename?: 'Query', courses?: { __typename?: 'CourseEntityResponseCollection', data: Array<{ __typename?: 'CourseEntity', id?: string | null, attributes?: { __typename?: 'Course', name: string, description?: string | null, objectives?: Array<{ __typename?: 'ComponentLmsObjectives', name?: string | null } | null> | null, mentors?: { __typename?: 'MentorRelationResponseCollection', data: Array<{ __typename?: 'MentorEntity', attributes?: { __typename?: 'Mentor', user?: { __typename?: 'UsersPermissionsUserEntityResponse', data?: { __typename?: 'UsersPermissionsUserEntity', attributes?: { __typename?: 'UsersPermissionsUser', firstname?: string | null, lastname?: string | null, email: string } | null } | null } | null } | null }> } | null } | null }> } | null };

export type GetCourseProjectQueryVariables = Exact<{
  name?: InputMaybe<Scalars['String']>;
  projectIds?: InputMaybe<Scalars['ID']>;
}>;


export type GetCourseProjectQuery = { __typename?: 'Query', courses?: { __typename?: 'CourseEntityResponseCollection', data: Array<{ __typename?: 'CourseEntity', attributes?: { __typename?: 'Course', name: string, projects?: { __typename?: 'ProjectRelationResponseCollection', data: Array<{ __typename?: 'ProjectEntity', id?: string | null, attributes?: { __typename?: 'Project', name: string, description?: string | null, sprints?: Array<{ __typename?: 'ComponentLmsSprints', lessons?: { __typename?: 'PageRelationResponseCollection', data: Array<{ __typename?: 'PageEntity', attributes?: { __typename?: 'Page', title: string, slug?: string | null, locale?: string | null } | null }> } | null, spikes?: { __typename?: 'PageRelationResponseCollection', data: Array<{ __typename?: 'PageEntity', attributes?: { __typename?: 'Page', title: string, slug?: string | null, locale?: string | null } | null }> } | null } | null> | null } | null }> } | null } | null }> } | null };

export type GetCourseProjectsQueryVariables = Exact<{
  name?: InputMaybe<Scalars['String']>;
}>;


export type GetCourseProjectsQuery = { __typename?: 'Query', courses?: { __typename?: 'CourseEntityResponseCollection', data: Array<{ __typename?: 'CourseEntity', attributes?: { __typename?: 'Course', projects?: { __typename?: 'ProjectRelationResponseCollection', data: Array<{ __typename?: 'ProjectEntity', id?: string | null }> } | null } | null }> } | null };

export type GetCourseByNameQueryVariables = Exact<{
  name: Scalars['String'];
}>;


export type GetCourseByNameQuery = { __typename?: 'Query', courses?: { __typename?: 'CourseEntityResponseCollection', data: Array<{ __typename?: 'CourseEntity', attributes?: { __typename?: 'Course', name: string, description?: string | null, createdAt?: any | null, projects?: { __typename?: 'ProjectRelationResponseCollection', data: Array<{ __typename?: 'ProjectEntity', id?: string | null, attributes?: { __typename?: 'Project', name: string, description?: string | null, sprints?: Array<{ __typename?: 'ComponentLmsSprints', name?: string | null, length: number, objectives?: Array<{ __typename?: 'ComponentLmsObjectives', name?: string | null } | null> | null, lessons?: { __typename?: 'PageRelationResponseCollection', data: Array<{ __typename?: 'PageEntity', attributes?: { __typename?: 'Page', title: string, slug?: string | null, locale?: string | null } | null }> } | null, spikes?: { __typename?: 'PageRelationResponseCollection', data: Array<{ __typename?: 'PageEntity', attributes?: { __typename?: 'Page', title: string, slug?: string | null, locale?: string | null } | null }> } | null } | null> | null } | null }> } | null } | null }> } | null };

export type GetPageQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']>;
}>;


export type GetPageQuery = { __typename?: 'Query', pages?: { __typename?: 'PageEntityResponseCollection', data: Array<{ __typename?: 'PageEntity', id?: string | null, attributes?: { __typename?: 'Page', locale?: string | null, slug?: string | null, title: string, contentSections: Array<{ __typename?: 'ComponentSectionsCodeblock' } | { __typename?: 'ComponentSectionsGoogleSlide' } | { __typename: 'ComponentSectionsHeader', id: string, title?: string | null, subtitle?: string | null } | { __typename?: 'ComponentSectionsLargeVideo' } | { __typename: 'ComponentSectionsRichText', id: string, content?: string | null } | { __typename?: 'Error' } | null> } | null }> } | null };

export type GetPagesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPagesQuery = { __typename?: 'Query', pages?: { __typename?: 'PageEntityResponseCollection', data: Array<{ __typename?: 'PageEntity', id?: string | null, attributes?: { __typename?: 'Page', locale?: string | null, slug?: string | null, contentSections: Array<{ __typename?: 'ComponentSectionsCodeblock' } | { __typename?: 'ComponentSectionsGoogleSlide' } | { __typename: 'ComponentSectionsHeader', id: string, title?: string | null, subtitle?: string | null } | { __typename?: 'ComponentSectionsLargeVideo' } | { __typename: 'ComponentSectionsRichText', id: string, content?: string | null } | { __typename?: 'Error' } | null> } | null }> } | null };

export type GetProjectsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProjectsQuery = { __typename?: 'Query', projects?: { __typename?: 'ProjectEntityResponseCollection', data: Array<{ __typename?: 'ProjectEntity', id?: string | null, attributes?: { __typename?: 'Project', name: string, description?: string | null, sprints?: Array<{ __typename?: 'ComponentLmsSprints', name?: string | null, length: number, objectives?: Array<{ __typename?: 'ComponentLmsObjectives', name?: string | null } | null> | null, lessons?: { __typename?: 'PageRelationResponseCollection', data: Array<{ __typename?: 'PageEntity', attributes?: { __typename?: 'Page', title: string, slug?: string | null, locale?: string | null } | null }> } | null, spikes?: { __typename?: 'PageRelationResponseCollection', data: Array<{ __typename?: 'PageEntity', attributes?: { __typename?: 'Page', title: string, slug?: string | null, locale?: string | null } | null }> } | null } | null> | null } | null }> } | null };

export type GetProjectQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetProjectQuery = { __typename?: 'Query', project?: { __typename?: 'ProjectEntityResponse', data?: { __typename?: 'ProjectEntity', attributes?: { __typename?: 'Project', name: string, description?: string | null, calc_length: number, sprints?: Array<{ __typename?: 'ComponentLmsSprints', name?: string | null, length: number, objectives?: Array<{ __typename?: 'ComponentLmsObjectives', name?: string | null } | null> | null, lessons?: { __typename?: 'PageRelationResponseCollection', data: Array<{ __typename?: 'PageEntity', attributes?: { __typename?: 'Page', title: string, slug?: string | null, locale?: string | null } | null }> } | null, spikes?: { __typename?: 'PageRelationResponseCollection', data: Array<{ __typename?: 'PageEntity', attributes?: { __typename?: 'Page', title: string, slug?: string | null, locale?: string | null } | null }> } | null } | null> | null } | null } | null } | null };

export type GetSpikesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSpikesQuery = { __typename?: 'Query', spikes?: { __typename?: 'SpikeEntityResponseCollection', data: Array<{ __typename?: 'SpikeEntity', id?: string | null, attributes?: { __typename?: 'Spike', title?: string | null, sprint_day?: number | null, recording?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename: 'UploadFile', url: string } | null } | null } | null, content?: { __typename?: 'PageEntityResponse', data?: { __typename?: 'PageEntity', attributes?: { __typename: 'Page' } | null } | null } | null } | null }> } | null };

export type GetSpikeQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetSpikeQuery = { __typename?: 'Query', spike?: { __typename?: 'SpikeEntityResponse', data?: { __typename?: 'SpikeEntity', attributes?: { __typename?: 'Spike', title?: string | null, sprint_day?: number | null, recording?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null } | null } | null } | null };

export type FilterStudentByUserIdQueryVariables = Exact<{
  userId?: InputMaybe<Scalars['ID']>;
}>;


export type FilterStudentByUserIdQuery = { __typename?: 'Query', students?: { __typename?: 'StudentEntityResponseCollection', data: Array<{ __typename?: 'StudentEntity', attributes?: { __typename?: 'Student', github?: string | null, linkedin?: string | null, start_date?: any | null, user?: { __typename?: 'UsersPermissionsUserEntityResponse', data?: { __typename?: 'UsersPermissionsUserEntity', id?: string | null, attributes?: { __typename?: 'UsersPermissionsUser', firstname?: string | null, lastname?: string | null, email: string, avatar?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null } | null } | null } | null, cohort?: { __typename?: 'CohortEntityResponse', data?: { __typename?: 'CohortEntity', attributes?: { __typename?: 'Cohort', name?: string | null, start_date?: any | null } | null } | null } | null } | null }> } | null };

export type GetAllStudentsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllStudentsQuery = { __typename?: 'Query', students?: { __typename?: 'StudentEntityResponseCollection', data: Array<{ __typename?: 'StudentEntity', attributes?: { __typename?: 'Student', github?: string | null, linkedin?: string | null, start_date?: any | null, user?: { __typename?: 'UsersPermissionsUserEntityResponse', data?: { __typename?: 'UsersPermissionsUserEntity', id?: string | null, attributes?: { __typename?: 'UsersPermissionsUser', firstname?: string | null, lastname?: string | null, email: string, avatar?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null } | null } | null } | null, cohort?: { __typename?: 'CohortEntityResponse', data?: { __typename?: 'CohortEntity', attributes?: { __typename?: 'Cohort', name?: string | null, start_date?: any | null } | null } | null } | null } | null }> } | null };

export type GetMeQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMeQuery = { __typename?: 'Query', me?: { __typename?: 'UsersPermissionsMe', id?: string | null, email?: string | null, username: string, firstname?: string | null, lastname?: string | null, role?: { __typename?: 'UsersPermissionsMeRole', id: string, name: string } | null, avatar?: { __typename?: 'UploadFile', url: string } | null } | null, chatrooms?: { __typename?: 'ChatroomEntityResponseCollection', data: Array<{ __typename?: 'ChatroomEntity', id?: string | null, attributes?: { __typename?: 'Chatroom', name?: string | null } | null }> } | null };
