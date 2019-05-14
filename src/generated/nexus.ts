/**
 * This file was automatically generated by Nexus 0.11.7
 * Do not make changes to this file directly
 */




declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  UserCreateInput: { // input type
    email: string; // String!
    name: string; // String!
    password?: string | null; // String
  }
  UserSubscriptionWhereInput: { // input type
    AND?: NexusGenInputs['UserSubscriptionWhereInput'][] | null; // [UserSubscriptionWhereInput!]
    mutation_in?: NexusGenEnums['MutationType'][] | null; // [MutationType!]
    node?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
    NOT?: NexusGenInputs['UserSubscriptionWhereInput'][] | null; // [UserSubscriptionWhereInput!]
    OR?: NexusGenInputs['UserSubscriptionWhereInput'][] | null; // [UserSubscriptionWhereInput!]
    updatedFields_contains?: string | null; // String
    updatedFields_contains_every?: string[] | null; // [String!]
    updatedFields_contains_some?: string[] | null; // [String!]
  }
  UserUpdateInput: { // input type
    email?: string | null; // String
    name?: string | null; // String
  }
  UserWhereInput: { // input type
    AND?: NexusGenInputs['UserWhereInput'][] | null; // [UserWhereInput!]
    createdAt?: any | null; // DateTime
    createdAt_gt?: any | null; // DateTime
    createdAt_gte?: any | null; // DateTime
    createdAt_in?: any[] | null; // [DateTime!]
    createdAt_lt?: any | null; // DateTime
    createdAt_lte?: any | null; // DateTime
    createdAt_not?: any | null; // DateTime
    createdAt_not_in?: any[] | null; // [DateTime!]
    email?: string | null; // String
    email_contains?: string | null; // String
    email_ends_with?: string | null; // String
    email_gt?: string | null; // String
    email_gte?: string | null; // String
    email_in?: string[] | null; // [String!]
    email_lt?: string | null; // String
    email_lte?: string | null; // String
    email_not?: string | null; // String
    email_not_contains?: string | null; // String
    email_not_ends_with?: string | null; // String
    email_not_in?: string[] | null; // [String!]
    email_not_starts_with?: string | null; // String
    email_starts_with?: string | null; // String
    id?: string | null; // ID
    id_contains?: string | null; // ID
    id_ends_with?: string | null; // ID
    id_gt?: string | null; // ID
    id_gte?: string | null; // ID
    id_in?: string[] | null; // [ID!]
    id_lt?: string | null; // ID
    id_lte?: string | null; // ID
    id_not?: string | null; // ID
    id_not_contains?: string | null; // ID
    id_not_ends_with?: string | null; // ID
    id_not_in?: string[] | null; // [ID!]
    id_not_starts_with?: string | null; // ID
    id_starts_with?: string | null; // ID
    name?: string | null; // String
    name_contains?: string | null; // String
    name_ends_with?: string | null; // String
    name_gt?: string | null; // String
    name_gte?: string | null; // String
    name_in?: string[] | null; // [String!]
    name_lt?: string | null; // String
    name_lte?: string | null; // String
    name_not?: string | null; // String
    name_not_contains?: string | null; // String
    name_not_ends_with?: string | null; // String
    name_not_in?: string[] | null; // [String!]
    name_not_starts_with?: string | null; // String
    name_starts_with?: string | null; // String
    NOT?: NexusGenInputs['UserWhereInput'][] | null; // [UserWhereInput!]
    OR?: NexusGenInputs['UserWhereInput'][] | null; // [UserWhereInput!]
    password?: string | null; // String
    password_contains?: string | null; // String
    password_ends_with?: string | null; // String
    password_gt?: string | null; // String
    password_gte?: string | null; // String
    password_in?: string[] | null; // [String!]
    password_lt?: string | null; // String
    password_lte?: string | null; // String
    password_not?: string | null; // String
    password_not_contains?: string | null; // String
    password_not_ends_with?: string | null; // String
    password_not_in?: string[] | null; // [String!]
    password_not_starts_with?: string | null; // String
    password_starts_with?: string | null; // String
    updatedAt?: any | null; // DateTime
    updatedAt_gt?: any | null; // DateTime
    updatedAt_gte?: any | null; // DateTime
    updatedAt_in?: any[] | null; // [DateTime!]
    updatedAt_lt?: any | null; // DateTime
    updatedAt_lte?: any | null; // DateTime
    updatedAt_not?: any | null; // DateTime
    updatedAt_not_in?: any[] | null; // [DateTime!]
  }
  UserWhereUniqueInput: { // input type
    email?: string | null; // String
    id?: string | null; // ID
  }
}

export interface NexusGenEnums {
  MutationType: "CREATED" | "DELETED" | "UPDATED"
  UserOrderByInput: "createdAt_ASC" | "createdAt_DESC" | "email_ASC" | "email_DESC" | "id_ASC" | "id_DESC" | "name_ASC" | "name_DESC" | "password_ASC" | "password_DESC" | "updatedAt_ASC" | "updatedAt_DESC"
}

export interface NexusGenRootTypes {
  AuthPayload: { // root type
    token: string; // String!
    user: NexusGenRootTypes['User']; // User!
  }
  BatchPayload: { // root type
    count: any; // Long!
  }
  Mutation: {};
  Query: {};
  Subscription: {};
  User: { // root type
    createdAt: any; // DateTime!
    email: string; // String!
    id: string; // ID!
    name: string; // String!
    updatedAt: any; // DateTime!
  }
  UserPreviousValues: { // root type
    createdAt: any; // DateTime!
    email: string; // String!
    id: string; // ID!
    name: string; // String!
    password?: string | null; // String
    updatedAt: any; // DateTime!
  }
  UserSubscriptionPayload: { // root type
    mutation: NexusGenEnums['MutationType']; // MutationType!
    node?: NexusGenRootTypes['User'] | null; // User
    previousValues?: NexusGenRootTypes['UserPreviousValues'] | null; // UserPreviousValues
    updatedFields?: string[] | null; // [String!]
  }
  String: string;
  Int: number;
  Float: number;
  Boolean: boolean;
  ID: string;
  DateTime: any;
  Long: any;
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
  UserCreateInput: NexusGenInputs['UserCreateInput'];
  UserSubscriptionWhereInput: NexusGenInputs['UserSubscriptionWhereInput'];
  UserUpdateInput: NexusGenInputs['UserUpdateInput'];
  UserWhereInput: NexusGenInputs['UserWhereInput'];
  UserWhereUniqueInput: NexusGenInputs['UserWhereUniqueInput'];
  MutationType: NexusGenEnums['MutationType'];
  UserOrderByInput: NexusGenEnums['UserOrderByInput'];
}

export interface NexusGenFieldTypes {
  AuthPayload: { // field return type
    token: string; // String!
    user: NexusGenRootTypes['User']; // User!
  }
  BatchPayload: { // field return type
    count: any; // Long!
  }
  Mutation: { // field return type
    createUser: NexusGenRootTypes['User']; // User!
    deleteManyUsers: NexusGenRootTypes['BatchPayload']; // BatchPayload!
    deleteUser: NexusGenRootTypes['User'] | null; // User
    login: NexusGenRootTypes['AuthPayload']; // AuthPayload!
    signup: NexusGenRootTypes['AuthPayload']; // AuthPayload!
    updateUser: NexusGenRootTypes['User'] | null; // User
  }
  Query: { // field return type
    user: NexusGenRootTypes['User'] | null; // User
    users: NexusGenRootTypes['User'][]; // [User!]!
  }
  Subscription: { // field return type
    user: NexusGenRootTypes['UserSubscriptionPayload']; // UserSubscriptionPayload!
  }
  User: { // field return type
    createdAt: any; // DateTime!
    email: string; // String!
    id: string; // ID!
    name: string; // String!
    updatedAt: any; // DateTime!
  }
  UserPreviousValues: { // field return type
    createdAt: any; // DateTime!
    email: string; // String!
    id: string; // ID!
    name: string; // String!
    password: string | null; // String
    updatedAt: any; // DateTime!
  }
  UserSubscriptionPayload: { // field return type
    mutation: NexusGenEnums['MutationType']; // MutationType!
    node: NexusGenRootTypes['User'] | null; // User
    previousValues: NexusGenRootTypes['UserPreviousValues'] | null; // UserPreviousValues
    updatedFields: string[] | null; // [String!]
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createUser: { // args
      data: NexusGenInputs['UserCreateInput']; // UserCreateInput!
    }
    deleteManyUsers: { // args
      where?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
    }
    deleteUser: { // args
      where: NexusGenInputs['UserWhereUniqueInput']; // UserWhereUniqueInput!
    }
    login: { // args
      email?: string | null; // String
      password?: string | null; // String
    }
    signup: { // args
      email?: string | null; // String
      name?: string | null; // String
      password?: string | null; // String
    }
    updateUser: { // args
      data: NexusGenInputs['UserUpdateInput']; // UserUpdateInput!
      where: NexusGenInputs['UserWhereUniqueInput']; // UserWhereUniqueInput!
    }
  }
  Query: {
    user: { // args
      where: NexusGenInputs['UserWhereUniqueInput']; // UserWhereUniqueInput!
    }
    users: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenEnums['UserOrderByInput'] | null; // UserOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
    }
  }
  Subscription: {
    user: { // args
      where?: NexusGenInputs['UserSubscriptionWhereInput'] | null; // UserSubscriptionWhereInput
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "AuthPayload" | "BatchPayload" | "Mutation" | "Query" | "Subscription" | "User" | "UserPreviousValues" | "UserSubscriptionPayload";

export type NexusGenInputNames = "UserCreateInput" | "UserSubscriptionWhereInput" | "UserUpdateInput" | "UserWhereInput" | "UserWhereUniqueInput";

export type NexusGenEnumNames = "MutationType" | "UserOrderByInput";

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = "Boolean" | "DateTime" | "Float" | "ID" | "Int" | "Long" | "String";

export type NexusGenUnionNames = never;

export interface NexusGenTypes {
  context: any;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  allTypes: NexusGenAllTypes;
  inheritedFields: NexusGenInheritedFields;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes;
}