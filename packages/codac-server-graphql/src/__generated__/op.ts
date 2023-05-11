import * as Types from './schema';

export type GetChallengesQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetChallengesQuery = { __typename?: 'Query', codingChallenges?: { __typename?: 'CodingChallengeEntityResponseCollection', data: Array<{ __typename?: 'CodingChallengeEntity', attributes?: { __typename?: 'CodingChallenge', challenge?: string | null, difficulty?: number | null } | null }> } | null };

export type GetAllCoursesQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetAllCoursesQuery = { __typename?: 'Query', courses?: { __typename?: 'CourseEntityResponseCollection', data: Array<{ __typename?: 'CourseEntity', id?: string | null, attributes?: { __typename?: 'Course', name?: string | null, description?: string | null, length?: number | null, mentors?: { __typename?: 'MentorRelationResponseCollection', data: Array<{ __typename?: 'MentorEntity', attributes?: { __typename?: 'Mentor', user?: { __typename?: 'UsersPermissionsUserEntityResponse', data?: { __typename?: 'UsersPermissionsUserEntity', attributes?: { __typename?: 'UsersPermissionsUser', firstname?: string | null, lastname?: string | null, email: string } | null } | null } | null } | null }> } | null, projects?: { __typename?: 'ProjectRelationResponseCollection', data: Array<{ __typename?: 'ProjectEntity', attributes?: { __typename?: 'Project', name?: string | null, description?: string | null, publishedAt?: any | null, spikes?: { __typename?: 'SpikeRelationResponseCollection', data: Array<{ __typename?: 'SpikeEntity', attributes?: { __typename?: 'Spike', title?: string | null, day?: number | null, content?: { __typename?: 'PageEntityResponse', data?: { __typename?: 'PageEntity', attributes?: { __typename?: 'Page', shortName?: string | null } | null } | null } | null } | null }> } | null } | null }> } | null } | null }> } | null };

export type GetPageQueryVariables = Types.Exact<{
  slug?: Types.InputMaybe<Types.Scalars['String']>;
}>;


export type GetPageQuery = { __typename?: 'Query', pages?: { __typename?: 'PageEntityResponseCollection', data: Array<{ __typename?: 'PageEntity', id?: string | null, attributes?: { __typename?: 'Page', locale?: string | null, slug: string, shortName?: string | null, contentSections?: Array<{ __typename?: 'ComponentSectionsFile' } | { __typename?: 'ComponentSectionsGoogleSlide' } | { __typename: 'ComponentSectionsHeader', id: string, title?: string | null, subtitle?: string | null } | { __typename?: 'ComponentSectionsHero' } | { __typename?: 'ComponentSectionsLargeVideo' } | { __typename: 'ComponentSectionsRichText', id: string, content?: string | null } | { __typename?: 'Error' } | null> | null } | null }> } | null };

export type GetPagesQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetPagesQuery = { __typename?: 'Query', pages?: { __typename?: 'PageEntityResponseCollection', data: Array<{ __typename?: 'PageEntity', id?: string | null, attributes?: { __typename?: 'Page', locale?: string | null, slug: string, contentSections?: Array<{ __typename?: 'ComponentSectionsFile' } | { __typename?: 'ComponentSectionsGoogleSlide' } | { __typename: 'ComponentSectionsHeader', id: string, title?: string | null, subtitle?: string | null } | { __typename?: 'ComponentSectionsHero' } | { __typename?: 'ComponentSectionsLargeVideo' } | { __typename: 'ComponentSectionsRichText', id: string, content?: string | null } | { __typename?: 'Error' } | null> | null } | null }> } | null };

export type GetProjectsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetProjectsQuery = { __typename?: 'Query', projects?: { __typename?: 'ProjectEntityResponseCollection', data: Array<{ __typename?: 'ProjectEntity', id?: string | null, attributes?: { __typename?: 'Project', name?: string | null, description?: string | null, spikes?: { __typename?: 'SpikeRelationResponseCollection', data: Array<{ __typename?: 'SpikeEntity', id?: string | null, attributes?: { __typename?: 'Spike', title?: string | null, day?: number | null } | null }> } | null } | null }> } | null };

export type GetSpikeQueryVariables = Types.Exact<{
  id: Types.Scalars['ID'];
}>;


export type GetSpikeQuery = { __typename?: 'Query', spike?: { __typename?: 'SpikeEntityResponse', data?: { __typename?: 'SpikeEntity', id?: string | null, attributes?: { __typename?: 'Spike', title?: string | null, day?: number | null } | null } | null } | null };

export type GetSpikesQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetSpikesQuery = { __typename?: 'Query', spikes?: { __typename?: 'SpikeEntityResponseCollection', data: Array<{ __typename?: 'SpikeEntity', id?: string | null, attributes?: { __typename?: 'Spike', title?: string | null, day?: number | null, recording?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename: 'UploadFile', url: string } | null } | null } | null, content?: { __typename?: 'PageEntityResponse', data?: { __typename?: 'PageEntity', attributes?: { __typename: 'Page' } | null } | null } | null } | null }> } | null };

export type GetMeQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetMeQuery = { __typename?: 'Query', me?: { __typename?: 'UsersPermissionsMe', id?: string | null, email?: string | null, username: string, firstname?: string | null, lastname?: string | null, role?: { __typename?: 'UsersPermissionsMeRole', id: string, name: string } | null, avatar?: { __typename?: 'UploadFile', url: string } | null } | null };
