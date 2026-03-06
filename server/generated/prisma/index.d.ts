
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model School
 * 
 */
export type School = $Result.DefaultSelection<Prisma.$SchoolPayload>
/**
 * Model Department
 * 
 */
export type Department = $Result.DefaultSelection<Prisma.$DepartmentPayload>
/**
 * Model School_Head
 * 
 */
export type School_Head = $Result.DefaultSelection<Prisma.$School_HeadPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model EmergencyContact
 * 
 */
export type EmergencyContact = $Result.DefaultSelection<Prisma.$EmergencyContactPayload>
/**
 * Model Todo
 * 
 */
export type Todo = $Result.DefaultSelection<Prisma.$TodoPayload>
/**
 * Model Event
 * 
 */
export type Event = $Result.DefaultSelection<Prisma.$EventPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const EmployeeStatus: {
  ACTIVE: 'ACTIVE',
  ON_LEAVE: 'ON_LEAVE',
  TERMINATED: 'TERMINATED',
  RETIRED: 'RETIRED'
};

export type EmployeeStatus = (typeof EmployeeStatus)[keyof typeof EmployeeStatus]


export const UserRole: {
  ADMIN: 'ADMIN',
  EMPLOYEE: 'EMPLOYEE',
  SCHOOL_HEAD: 'SCHOOL_HEAD'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const EmployeeType: {
  ACADEMIC: 'ACADEMIC',
  ADMINISTRATIVE_STAFF: 'ADMINISTRATIVE_STAFF'
};

export type EmployeeType = (typeof EmployeeType)[keyof typeof EmployeeType]


export const AcademicPosition: {
  LECTURER: 'LECTURER',
  ASSISTANT_PROFESSOR: 'ASSISTANT_PROFESSOR',
  ASSOCIATE_PROFESSOR: 'ASSOCIATE_PROFESSOR',
  PROFESSOR: 'PROFESSOR'
};

export type AcademicPosition = (typeof AcademicPosition)[keyof typeof AcademicPosition]


export const AdministrativePosition: {
  TECHNICIAN: 'TECHNICIAN',
  CLEANER: 'CLEANER',
  RECRUITER: 'RECRUITER',
  RECEPTIONIST: 'RECEPTIONIST'
};

export type AdministrativePosition = (typeof AdministrativePosition)[keyof typeof AdministrativePosition]

}

export type EmployeeStatus = $Enums.EmployeeStatus

export const EmployeeStatus: typeof $Enums.EmployeeStatus

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type EmployeeType = $Enums.EmployeeType

export const EmployeeType: typeof $Enums.EmployeeType

export type AcademicPosition = $Enums.AcademicPosition

export const AcademicPosition: typeof $Enums.AcademicPosition

export type AdministrativePosition = $Enums.AdministrativePosition

export const AdministrativePosition: typeof $Enums.AdministrativePosition

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Schools
 * const schools = await prisma.school.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Schools
   * const schools = await prisma.school.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.school`: Exposes CRUD operations for the **School** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Schools
    * const schools = await prisma.school.findMany()
    * ```
    */
  get school(): Prisma.SchoolDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.department`: Exposes CRUD operations for the **Department** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Departments
    * const departments = await prisma.department.findMany()
    * ```
    */
  get department(): Prisma.DepartmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.school_Head`: Exposes CRUD operations for the **School_Head** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more School_Heads
    * const school_Heads = await prisma.school_Head.findMany()
    * ```
    */
  get school_Head(): Prisma.School_HeadDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.emergencyContact`: Exposes CRUD operations for the **EmergencyContact** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EmergencyContacts
    * const emergencyContacts = await prisma.emergencyContact.findMany()
    * ```
    */
  get emergencyContact(): Prisma.EmergencyContactDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.todo`: Exposes CRUD operations for the **Todo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Todos
    * const todos = await prisma.todo.findMany()
    * ```
    */
  get todo(): Prisma.TodoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.event`: Exposes CRUD operations for the **Event** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.event.findMany()
    * ```
    */
  get event(): Prisma.EventDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.2
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    School: 'School',
    Department: 'Department',
    School_Head: 'School_Head',
    User: 'User',
    EmergencyContact: 'EmergencyContact',
    Todo: 'Todo',
    Event: 'Event'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "school" | "department" | "school_Head" | "user" | "emergencyContact" | "todo" | "event"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      School: {
        payload: Prisma.$SchoolPayload<ExtArgs>
        fields: Prisma.SchoolFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SchoolFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SchoolFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          findFirst: {
            args: Prisma.SchoolFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SchoolFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          findMany: {
            args: Prisma.SchoolFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>[]
          }
          create: {
            args: Prisma.SchoolCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          createMany: {
            args: Prisma.SchoolCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SchoolCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>[]
          }
          delete: {
            args: Prisma.SchoolDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          update: {
            args: Prisma.SchoolUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          deleteMany: {
            args: Prisma.SchoolDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SchoolUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SchoolUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>[]
          }
          upsert: {
            args: Prisma.SchoolUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          aggregate: {
            args: Prisma.SchoolAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSchool>
          }
          groupBy: {
            args: Prisma.SchoolGroupByArgs<ExtArgs>
            result: $Utils.Optional<SchoolGroupByOutputType>[]
          }
          count: {
            args: Prisma.SchoolCountArgs<ExtArgs>
            result: $Utils.Optional<SchoolCountAggregateOutputType> | number
          }
        }
      }
      Department: {
        payload: Prisma.$DepartmentPayload<ExtArgs>
        fields: Prisma.DepartmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DepartmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DepartmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          findFirst: {
            args: Prisma.DepartmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DepartmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          findMany: {
            args: Prisma.DepartmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>[]
          }
          create: {
            args: Prisma.DepartmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          createMany: {
            args: Prisma.DepartmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DepartmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>[]
          }
          delete: {
            args: Prisma.DepartmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          update: {
            args: Prisma.DepartmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          deleteMany: {
            args: Prisma.DepartmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DepartmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DepartmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>[]
          }
          upsert: {
            args: Prisma.DepartmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          aggregate: {
            args: Prisma.DepartmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDepartment>
          }
          groupBy: {
            args: Prisma.DepartmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<DepartmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.DepartmentCountArgs<ExtArgs>
            result: $Utils.Optional<DepartmentCountAggregateOutputType> | number
          }
        }
      }
      School_Head: {
        payload: Prisma.$School_HeadPayload<ExtArgs>
        fields: Prisma.School_HeadFieldRefs
        operations: {
          findUnique: {
            args: Prisma.School_HeadFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$School_HeadPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.School_HeadFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$School_HeadPayload>
          }
          findFirst: {
            args: Prisma.School_HeadFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$School_HeadPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.School_HeadFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$School_HeadPayload>
          }
          findMany: {
            args: Prisma.School_HeadFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$School_HeadPayload>[]
          }
          create: {
            args: Prisma.School_HeadCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$School_HeadPayload>
          }
          createMany: {
            args: Prisma.School_HeadCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.School_HeadCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$School_HeadPayload>[]
          }
          delete: {
            args: Prisma.School_HeadDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$School_HeadPayload>
          }
          update: {
            args: Prisma.School_HeadUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$School_HeadPayload>
          }
          deleteMany: {
            args: Prisma.School_HeadDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.School_HeadUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.School_HeadUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$School_HeadPayload>[]
          }
          upsert: {
            args: Prisma.School_HeadUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$School_HeadPayload>
          }
          aggregate: {
            args: Prisma.School_HeadAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSchool_Head>
          }
          groupBy: {
            args: Prisma.School_HeadGroupByArgs<ExtArgs>
            result: $Utils.Optional<School_HeadGroupByOutputType>[]
          }
          count: {
            args: Prisma.School_HeadCountArgs<ExtArgs>
            result: $Utils.Optional<School_HeadCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      EmergencyContact: {
        payload: Prisma.$EmergencyContactPayload<ExtArgs>
        fields: Prisma.EmergencyContactFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmergencyContactFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmergencyContactPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmergencyContactFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmergencyContactPayload>
          }
          findFirst: {
            args: Prisma.EmergencyContactFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmergencyContactPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmergencyContactFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmergencyContactPayload>
          }
          findMany: {
            args: Prisma.EmergencyContactFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmergencyContactPayload>[]
          }
          create: {
            args: Prisma.EmergencyContactCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmergencyContactPayload>
          }
          createMany: {
            args: Prisma.EmergencyContactCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmergencyContactCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmergencyContactPayload>[]
          }
          delete: {
            args: Prisma.EmergencyContactDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmergencyContactPayload>
          }
          update: {
            args: Prisma.EmergencyContactUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmergencyContactPayload>
          }
          deleteMany: {
            args: Prisma.EmergencyContactDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmergencyContactUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmergencyContactUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmergencyContactPayload>[]
          }
          upsert: {
            args: Prisma.EmergencyContactUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmergencyContactPayload>
          }
          aggregate: {
            args: Prisma.EmergencyContactAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmergencyContact>
          }
          groupBy: {
            args: Prisma.EmergencyContactGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmergencyContactGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmergencyContactCountArgs<ExtArgs>
            result: $Utils.Optional<EmergencyContactCountAggregateOutputType> | number
          }
        }
      }
      Todo: {
        payload: Prisma.$TodoPayload<ExtArgs>
        fields: Prisma.TodoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TodoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TodoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodoPayload>
          }
          findFirst: {
            args: Prisma.TodoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TodoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodoPayload>
          }
          findMany: {
            args: Prisma.TodoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodoPayload>[]
          }
          create: {
            args: Prisma.TodoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodoPayload>
          }
          createMany: {
            args: Prisma.TodoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TodoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodoPayload>[]
          }
          delete: {
            args: Prisma.TodoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodoPayload>
          }
          update: {
            args: Prisma.TodoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodoPayload>
          }
          deleteMany: {
            args: Prisma.TodoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TodoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TodoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodoPayload>[]
          }
          upsert: {
            args: Prisma.TodoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodoPayload>
          }
          aggregate: {
            args: Prisma.TodoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTodo>
          }
          groupBy: {
            args: Prisma.TodoGroupByArgs<ExtArgs>
            result: $Utils.Optional<TodoGroupByOutputType>[]
          }
          count: {
            args: Prisma.TodoCountArgs<ExtArgs>
            result: $Utils.Optional<TodoCountAggregateOutputType> | number
          }
        }
      }
      Event: {
        payload: Prisma.$EventPayload<ExtArgs>
        fields: Prisma.EventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findFirst: {
            args: Prisma.EventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findMany: {
            args: Prisma.EventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          create: {
            args: Prisma.EventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          createMany: {
            args: Prisma.EventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          delete: {
            args: Prisma.EventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          update: {
            args: Prisma.EventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          deleteMany: {
            args: Prisma.EventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          upsert: {
            args: Prisma.EventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          aggregate: {
            args: Prisma.EventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvent>
          }
          groupBy: {
            args: Prisma.EventGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventCountArgs<ExtArgs>
            result: $Utils.Optional<EventCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    school?: SchoolOmit
    department?: DepartmentOmit
    school_Head?: School_HeadOmit
    user?: UserOmit
    emergencyContact?: EmergencyContactOmit
    todo?: TodoOmit
    event?: EventOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type SchoolCountOutputType
   */

  export type SchoolCountOutputType = {
    departments: number
    users: number
  }

  export type SchoolCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    departments?: boolean | SchoolCountOutputTypeCountDepartmentsArgs
    users?: boolean | SchoolCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * SchoolCountOutputType without action
   */
  export type SchoolCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolCountOutputType
     */
    select?: SchoolCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SchoolCountOutputType without action
   */
  export type SchoolCountOutputTypeCountDepartmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepartmentWhereInput
  }

  /**
   * SchoolCountOutputType without action
   */
  export type SchoolCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type DepartmentCountOutputType
   */

  export type DepartmentCountOutputType = {
    users: number
  }

  export type DepartmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | DepartmentCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartmentCountOutputType
     */
    select?: DepartmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    emergencyContacts: number
    todos: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    emergencyContacts?: boolean | UserCountOutputTypeCountEmergencyContactsArgs
    todos?: boolean | UserCountOutputTypeCountTodosArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEmergencyContactsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmergencyContactWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTodosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TodoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model School
   */

  export type AggregateSchool = {
    _count: SchoolCountAggregateOutputType | null
    _min: SchoolMinAggregateOutputType | null
    _max: SchoolMaxAggregateOutputType | null
  }

  export type SchoolMinAggregateOutputType = {
    id: string | null
    schoolName: string | null
    description: string | null
    icon: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SchoolMaxAggregateOutputType = {
    id: string | null
    schoolName: string | null
    description: string | null
    icon: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SchoolCountAggregateOutputType = {
    id: number
    schoolName: number
    description: number
    icon: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SchoolMinAggregateInputType = {
    id?: true
    schoolName?: true
    description?: true
    icon?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SchoolMaxAggregateInputType = {
    id?: true
    schoolName?: true
    description?: true
    icon?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SchoolCountAggregateInputType = {
    id?: true
    schoolName?: true
    description?: true
    icon?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SchoolAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which School to aggregate.
     */
    where?: SchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schools to fetch.
     */
    orderBy?: SchoolOrderByWithRelationInput | SchoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Schools
    **/
    _count?: true | SchoolCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SchoolMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SchoolMaxAggregateInputType
  }

  export type GetSchoolAggregateType<T extends SchoolAggregateArgs> = {
        [P in keyof T & keyof AggregateSchool]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSchool[P]>
      : GetScalarType<T[P], AggregateSchool[P]>
  }




  export type SchoolGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SchoolWhereInput
    orderBy?: SchoolOrderByWithAggregationInput | SchoolOrderByWithAggregationInput[]
    by: SchoolScalarFieldEnum[] | SchoolScalarFieldEnum
    having?: SchoolScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SchoolCountAggregateInputType | true
    _min?: SchoolMinAggregateInputType
    _max?: SchoolMaxAggregateInputType
  }

  export type SchoolGroupByOutputType = {
    id: string
    schoolName: string
    description: string | null
    icon: string | null
    createdAt: Date
    updatedAt: Date
    _count: SchoolCountAggregateOutputType | null
    _min: SchoolMinAggregateOutputType | null
    _max: SchoolMaxAggregateOutputType | null
  }

  type GetSchoolGroupByPayload<T extends SchoolGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SchoolGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SchoolGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SchoolGroupByOutputType[P]>
            : GetScalarType<T[P], SchoolGroupByOutputType[P]>
        }
      >
    >


  export type SchoolSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    schoolName?: boolean
    description?: boolean
    icon?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    departments?: boolean | School$departmentsArgs<ExtArgs>
    schoolHead?: boolean | School$schoolHeadArgs<ExtArgs>
    users?: boolean | School$usersArgs<ExtArgs>
    _count?: boolean | SchoolCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["school"]>

  export type SchoolSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    schoolName?: boolean
    description?: boolean
    icon?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["school"]>

  export type SchoolSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    schoolName?: boolean
    description?: boolean
    icon?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["school"]>

  export type SchoolSelectScalar = {
    id?: boolean
    schoolName?: boolean
    description?: boolean
    icon?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SchoolOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "schoolName" | "description" | "icon" | "createdAt" | "updatedAt", ExtArgs["result"]["school"]>
  export type SchoolInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    departments?: boolean | School$departmentsArgs<ExtArgs>
    schoolHead?: boolean | School$schoolHeadArgs<ExtArgs>
    users?: boolean | School$usersArgs<ExtArgs>
    _count?: boolean | SchoolCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SchoolIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SchoolIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SchoolPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "School"
    objects: {
      departments: Prisma.$DepartmentPayload<ExtArgs>[]
      schoolHead: Prisma.$School_HeadPayload<ExtArgs> | null
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      schoolName: string
      description: string | null
      icon: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["school"]>
    composites: {}
  }

  type SchoolGetPayload<S extends boolean | null | undefined | SchoolDefaultArgs> = $Result.GetResult<Prisma.$SchoolPayload, S>

  type SchoolCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SchoolFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SchoolCountAggregateInputType | true
    }

  export interface SchoolDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['School'], meta: { name: 'School' } }
    /**
     * Find zero or one School that matches the filter.
     * @param {SchoolFindUniqueArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SchoolFindUniqueArgs>(args: SelectSubset<T, SchoolFindUniqueArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one School that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SchoolFindUniqueOrThrowArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SchoolFindUniqueOrThrowArgs>(args: SelectSubset<T, SchoolFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first School that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolFindFirstArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SchoolFindFirstArgs>(args?: SelectSubset<T, SchoolFindFirstArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first School that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolFindFirstOrThrowArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SchoolFindFirstOrThrowArgs>(args?: SelectSubset<T, SchoolFindFirstOrThrowArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Schools that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Schools
     * const schools = await prisma.school.findMany()
     * 
     * // Get first 10 Schools
     * const schools = await prisma.school.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const schoolWithIdOnly = await prisma.school.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SchoolFindManyArgs>(args?: SelectSubset<T, SchoolFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a School.
     * @param {SchoolCreateArgs} args - Arguments to create a School.
     * @example
     * // Create one School
     * const School = await prisma.school.create({
     *   data: {
     *     // ... data to create a School
     *   }
     * })
     * 
     */
    create<T extends SchoolCreateArgs>(args: SelectSubset<T, SchoolCreateArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Schools.
     * @param {SchoolCreateManyArgs} args - Arguments to create many Schools.
     * @example
     * // Create many Schools
     * const school = await prisma.school.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SchoolCreateManyArgs>(args?: SelectSubset<T, SchoolCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Schools and returns the data saved in the database.
     * @param {SchoolCreateManyAndReturnArgs} args - Arguments to create many Schools.
     * @example
     * // Create many Schools
     * const school = await prisma.school.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Schools and only return the `id`
     * const schoolWithIdOnly = await prisma.school.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SchoolCreateManyAndReturnArgs>(args?: SelectSubset<T, SchoolCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a School.
     * @param {SchoolDeleteArgs} args - Arguments to delete one School.
     * @example
     * // Delete one School
     * const School = await prisma.school.delete({
     *   where: {
     *     // ... filter to delete one School
     *   }
     * })
     * 
     */
    delete<T extends SchoolDeleteArgs>(args: SelectSubset<T, SchoolDeleteArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one School.
     * @param {SchoolUpdateArgs} args - Arguments to update one School.
     * @example
     * // Update one School
     * const school = await prisma.school.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SchoolUpdateArgs>(args: SelectSubset<T, SchoolUpdateArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Schools.
     * @param {SchoolDeleteManyArgs} args - Arguments to filter Schools to delete.
     * @example
     * // Delete a few Schools
     * const { count } = await prisma.school.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SchoolDeleteManyArgs>(args?: SelectSubset<T, SchoolDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Schools
     * const school = await prisma.school.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SchoolUpdateManyArgs>(args: SelectSubset<T, SchoolUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schools and returns the data updated in the database.
     * @param {SchoolUpdateManyAndReturnArgs} args - Arguments to update many Schools.
     * @example
     * // Update many Schools
     * const school = await prisma.school.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Schools and only return the `id`
     * const schoolWithIdOnly = await prisma.school.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SchoolUpdateManyAndReturnArgs>(args: SelectSubset<T, SchoolUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one School.
     * @param {SchoolUpsertArgs} args - Arguments to update or create a School.
     * @example
     * // Update or create a School
     * const school = await prisma.school.upsert({
     *   create: {
     *     // ... data to create a School
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the School we want to update
     *   }
     * })
     */
    upsert<T extends SchoolUpsertArgs>(args: SelectSubset<T, SchoolUpsertArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Schools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolCountArgs} args - Arguments to filter Schools to count.
     * @example
     * // Count the number of Schools
     * const count = await prisma.school.count({
     *   where: {
     *     // ... the filter for the Schools we want to count
     *   }
     * })
    **/
    count<T extends SchoolCountArgs>(
      args?: Subset<T, SchoolCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SchoolCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a School.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SchoolAggregateArgs>(args: Subset<T, SchoolAggregateArgs>): Prisma.PrismaPromise<GetSchoolAggregateType<T>>

    /**
     * Group by School.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SchoolGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SchoolGroupByArgs['orderBy'] }
        : { orderBy?: SchoolGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SchoolGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSchoolGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the School model
   */
  readonly fields: SchoolFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for School.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SchoolClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    departments<T extends School$departmentsArgs<ExtArgs> = {}>(args?: Subset<T, School$departmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    schoolHead<T extends School$schoolHeadArgs<ExtArgs> = {}>(args?: Subset<T, School$schoolHeadArgs<ExtArgs>>): Prisma__School_HeadClient<$Result.GetResult<Prisma.$School_HeadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    users<T extends School$usersArgs<ExtArgs> = {}>(args?: Subset<T, School$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the School model
   */
  interface SchoolFieldRefs {
    readonly id: FieldRef<"School", 'String'>
    readonly schoolName: FieldRef<"School", 'String'>
    readonly description: FieldRef<"School", 'String'>
    readonly icon: FieldRef<"School", 'String'>
    readonly createdAt: FieldRef<"School", 'DateTime'>
    readonly updatedAt: FieldRef<"School", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * School findUnique
   */
  export type SchoolFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter, which School to fetch.
     */
    where: SchoolWhereUniqueInput
  }

  /**
   * School findUniqueOrThrow
   */
  export type SchoolFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter, which School to fetch.
     */
    where: SchoolWhereUniqueInput
  }

  /**
   * School findFirst
   */
  export type SchoolFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter, which School to fetch.
     */
    where?: SchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schools to fetch.
     */
    orderBy?: SchoolOrderByWithRelationInput | SchoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schools.
     */
    cursor?: SchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schools.
     */
    distinct?: SchoolScalarFieldEnum | SchoolScalarFieldEnum[]
  }

  /**
   * School findFirstOrThrow
   */
  export type SchoolFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter, which School to fetch.
     */
    where?: SchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schools to fetch.
     */
    orderBy?: SchoolOrderByWithRelationInput | SchoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schools.
     */
    cursor?: SchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schools.
     */
    distinct?: SchoolScalarFieldEnum | SchoolScalarFieldEnum[]
  }

  /**
   * School findMany
   */
  export type SchoolFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter, which Schools to fetch.
     */
    where?: SchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schools to fetch.
     */
    orderBy?: SchoolOrderByWithRelationInput | SchoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Schools.
     */
    cursor?: SchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schools.
     */
    skip?: number
    distinct?: SchoolScalarFieldEnum | SchoolScalarFieldEnum[]
  }

  /**
   * School create
   */
  export type SchoolCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * The data needed to create a School.
     */
    data: XOR<SchoolCreateInput, SchoolUncheckedCreateInput>
  }

  /**
   * School createMany
   */
  export type SchoolCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Schools.
     */
    data: SchoolCreateManyInput | SchoolCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * School createManyAndReturn
   */
  export type SchoolCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * The data used to create many Schools.
     */
    data: SchoolCreateManyInput | SchoolCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * School update
   */
  export type SchoolUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * The data needed to update a School.
     */
    data: XOR<SchoolUpdateInput, SchoolUncheckedUpdateInput>
    /**
     * Choose, which School to update.
     */
    where: SchoolWhereUniqueInput
  }

  /**
   * School updateMany
   */
  export type SchoolUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Schools.
     */
    data: XOR<SchoolUpdateManyMutationInput, SchoolUncheckedUpdateManyInput>
    /**
     * Filter which Schools to update
     */
    where?: SchoolWhereInput
    /**
     * Limit how many Schools to update.
     */
    limit?: number
  }

  /**
   * School updateManyAndReturn
   */
  export type SchoolUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * The data used to update Schools.
     */
    data: XOR<SchoolUpdateManyMutationInput, SchoolUncheckedUpdateManyInput>
    /**
     * Filter which Schools to update
     */
    where?: SchoolWhereInput
    /**
     * Limit how many Schools to update.
     */
    limit?: number
  }

  /**
   * School upsert
   */
  export type SchoolUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * The filter to search for the School to update in case it exists.
     */
    where: SchoolWhereUniqueInput
    /**
     * In case the School found by the `where` argument doesn't exist, create a new School with this data.
     */
    create: XOR<SchoolCreateInput, SchoolUncheckedCreateInput>
    /**
     * In case the School was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SchoolUpdateInput, SchoolUncheckedUpdateInput>
  }

  /**
   * School delete
   */
  export type SchoolDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter which School to delete.
     */
    where: SchoolWhereUniqueInput
  }

  /**
   * School deleteMany
   */
  export type SchoolDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Schools to delete
     */
    where?: SchoolWhereInput
    /**
     * Limit how many Schools to delete.
     */
    limit?: number
  }

  /**
   * School.departments
   */
  export type School$departmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    where?: DepartmentWhereInput
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    cursor?: DepartmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * School.schoolHead
   */
  export type School$schoolHeadArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School_Head
     */
    select?: School_HeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School_Head
     */
    omit?: School_HeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: School_HeadInclude<ExtArgs> | null
    where?: School_HeadWhereInput
  }

  /**
   * School.users
   */
  export type School$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * School without action
   */
  export type SchoolDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
  }


  /**
   * Model Department
   */

  export type AggregateDepartment = {
    _count: DepartmentCountAggregateOutputType | null
    _min: DepartmentMinAggregateOutputType | null
    _max: DepartmentMaxAggregateOutputType | null
  }

  export type DepartmentMinAggregateOutputType = {
    id: string | null
    departmentName: string | null
    description: string | null
    icon: string | null
    schoolId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DepartmentMaxAggregateOutputType = {
    id: string | null
    departmentName: string | null
    description: string | null
    icon: string | null
    schoolId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DepartmentCountAggregateOutputType = {
    id: number
    departmentName: number
    description: number
    icon: number
    schoolId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DepartmentMinAggregateInputType = {
    id?: true
    departmentName?: true
    description?: true
    icon?: true
    schoolId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DepartmentMaxAggregateInputType = {
    id?: true
    departmentName?: true
    description?: true
    icon?: true
    schoolId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DepartmentCountAggregateInputType = {
    id?: true
    departmentName?: true
    description?: true
    icon?: true
    schoolId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DepartmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Department to aggregate.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Departments
    **/
    _count?: true | DepartmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DepartmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DepartmentMaxAggregateInputType
  }

  export type GetDepartmentAggregateType<T extends DepartmentAggregateArgs> = {
        [P in keyof T & keyof AggregateDepartment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDepartment[P]>
      : GetScalarType<T[P], AggregateDepartment[P]>
  }




  export type DepartmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepartmentWhereInput
    orderBy?: DepartmentOrderByWithAggregationInput | DepartmentOrderByWithAggregationInput[]
    by: DepartmentScalarFieldEnum[] | DepartmentScalarFieldEnum
    having?: DepartmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DepartmentCountAggregateInputType | true
    _min?: DepartmentMinAggregateInputType
    _max?: DepartmentMaxAggregateInputType
  }

  export type DepartmentGroupByOutputType = {
    id: string
    departmentName: string
    description: string | null
    icon: string | null
    schoolId: string
    createdAt: Date
    updatedAt: Date
    _count: DepartmentCountAggregateOutputType | null
    _min: DepartmentMinAggregateOutputType | null
    _max: DepartmentMaxAggregateOutputType | null
  }

  type GetDepartmentGroupByPayload<T extends DepartmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DepartmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DepartmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DepartmentGroupByOutputType[P]>
            : GetScalarType<T[P], DepartmentGroupByOutputType[P]>
        }
      >
    >


  export type DepartmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    departmentName?: boolean
    description?: boolean
    icon?: boolean
    schoolId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    school?: boolean | SchoolDefaultArgs<ExtArgs>
    users?: boolean | Department$usersArgs<ExtArgs>
    _count?: boolean | DepartmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["department"]>

  export type DepartmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    departmentName?: boolean
    description?: boolean
    icon?: boolean
    schoolId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["department"]>

  export type DepartmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    departmentName?: boolean
    description?: boolean
    icon?: boolean
    schoolId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["department"]>

  export type DepartmentSelectScalar = {
    id?: boolean
    departmentName?: boolean
    description?: boolean
    icon?: boolean
    schoolId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DepartmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "departmentName" | "description" | "icon" | "schoolId" | "createdAt" | "updatedAt", ExtArgs["result"]["department"]>
  export type DepartmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    school?: boolean | SchoolDefaultArgs<ExtArgs>
    users?: boolean | Department$usersArgs<ExtArgs>
    _count?: boolean | DepartmentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DepartmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }
  export type DepartmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }

  export type $DepartmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Department"
    objects: {
      school: Prisma.$SchoolPayload<ExtArgs>
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      departmentName: string
      description: string | null
      icon: string | null
      schoolId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["department"]>
    composites: {}
  }

  type DepartmentGetPayload<S extends boolean | null | undefined | DepartmentDefaultArgs> = $Result.GetResult<Prisma.$DepartmentPayload, S>

  type DepartmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DepartmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DepartmentCountAggregateInputType | true
    }

  export interface DepartmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Department'], meta: { name: 'Department' } }
    /**
     * Find zero or one Department that matches the filter.
     * @param {DepartmentFindUniqueArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DepartmentFindUniqueArgs>(args: SelectSubset<T, DepartmentFindUniqueArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Department that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DepartmentFindUniqueOrThrowArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DepartmentFindUniqueOrThrowArgs>(args: SelectSubset<T, DepartmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Department that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindFirstArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DepartmentFindFirstArgs>(args?: SelectSubset<T, DepartmentFindFirstArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Department that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindFirstOrThrowArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DepartmentFindFirstOrThrowArgs>(args?: SelectSubset<T, DepartmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Departments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Departments
     * const departments = await prisma.department.findMany()
     * 
     * // Get first 10 Departments
     * const departments = await prisma.department.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const departmentWithIdOnly = await prisma.department.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DepartmentFindManyArgs>(args?: SelectSubset<T, DepartmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Department.
     * @param {DepartmentCreateArgs} args - Arguments to create a Department.
     * @example
     * // Create one Department
     * const Department = await prisma.department.create({
     *   data: {
     *     // ... data to create a Department
     *   }
     * })
     * 
     */
    create<T extends DepartmentCreateArgs>(args: SelectSubset<T, DepartmentCreateArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Departments.
     * @param {DepartmentCreateManyArgs} args - Arguments to create many Departments.
     * @example
     * // Create many Departments
     * const department = await prisma.department.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DepartmentCreateManyArgs>(args?: SelectSubset<T, DepartmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Departments and returns the data saved in the database.
     * @param {DepartmentCreateManyAndReturnArgs} args - Arguments to create many Departments.
     * @example
     * // Create many Departments
     * const department = await prisma.department.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Departments and only return the `id`
     * const departmentWithIdOnly = await prisma.department.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DepartmentCreateManyAndReturnArgs>(args?: SelectSubset<T, DepartmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Department.
     * @param {DepartmentDeleteArgs} args - Arguments to delete one Department.
     * @example
     * // Delete one Department
     * const Department = await prisma.department.delete({
     *   where: {
     *     // ... filter to delete one Department
     *   }
     * })
     * 
     */
    delete<T extends DepartmentDeleteArgs>(args: SelectSubset<T, DepartmentDeleteArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Department.
     * @param {DepartmentUpdateArgs} args - Arguments to update one Department.
     * @example
     * // Update one Department
     * const department = await prisma.department.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DepartmentUpdateArgs>(args: SelectSubset<T, DepartmentUpdateArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Departments.
     * @param {DepartmentDeleteManyArgs} args - Arguments to filter Departments to delete.
     * @example
     * // Delete a few Departments
     * const { count } = await prisma.department.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DepartmentDeleteManyArgs>(args?: SelectSubset<T, DepartmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Departments
     * const department = await prisma.department.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DepartmentUpdateManyArgs>(args: SelectSubset<T, DepartmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Departments and returns the data updated in the database.
     * @param {DepartmentUpdateManyAndReturnArgs} args - Arguments to update many Departments.
     * @example
     * // Update many Departments
     * const department = await prisma.department.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Departments and only return the `id`
     * const departmentWithIdOnly = await prisma.department.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DepartmentUpdateManyAndReturnArgs>(args: SelectSubset<T, DepartmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Department.
     * @param {DepartmentUpsertArgs} args - Arguments to update or create a Department.
     * @example
     * // Update or create a Department
     * const department = await prisma.department.upsert({
     *   create: {
     *     // ... data to create a Department
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Department we want to update
     *   }
     * })
     */
    upsert<T extends DepartmentUpsertArgs>(args: SelectSubset<T, DepartmentUpsertArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentCountArgs} args - Arguments to filter Departments to count.
     * @example
     * // Count the number of Departments
     * const count = await prisma.department.count({
     *   where: {
     *     // ... the filter for the Departments we want to count
     *   }
     * })
    **/
    count<T extends DepartmentCountArgs>(
      args?: Subset<T, DepartmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DepartmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Department.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DepartmentAggregateArgs>(args: Subset<T, DepartmentAggregateArgs>): Prisma.PrismaPromise<GetDepartmentAggregateType<T>>

    /**
     * Group by Department.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DepartmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DepartmentGroupByArgs['orderBy'] }
        : { orderBy?: DepartmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DepartmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDepartmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Department model
   */
  readonly fields: DepartmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Department.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DepartmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    school<T extends SchoolDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SchoolDefaultArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users<T extends Department$usersArgs<ExtArgs> = {}>(args?: Subset<T, Department$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Department model
   */
  interface DepartmentFieldRefs {
    readonly id: FieldRef<"Department", 'String'>
    readonly departmentName: FieldRef<"Department", 'String'>
    readonly description: FieldRef<"Department", 'String'>
    readonly icon: FieldRef<"Department", 'String'>
    readonly schoolId: FieldRef<"Department", 'String'>
    readonly createdAt: FieldRef<"Department", 'DateTime'>
    readonly updatedAt: FieldRef<"Department", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Department findUnique
   */
  export type DepartmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department findUniqueOrThrow
   */
  export type DepartmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department findFirst
   */
  export type DepartmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Departments.
     */
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department findFirstOrThrow
   */
  export type DepartmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Departments.
     */
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department findMany
   */
  export type DepartmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Departments to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department create
   */
  export type DepartmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Department.
     */
    data: XOR<DepartmentCreateInput, DepartmentUncheckedCreateInput>
  }

  /**
   * Department createMany
   */
  export type DepartmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Departments.
     */
    data: DepartmentCreateManyInput | DepartmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Department createManyAndReturn
   */
  export type DepartmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * The data used to create many Departments.
     */
    data: DepartmentCreateManyInput | DepartmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Department update
   */
  export type DepartmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Department.
     */
    data: XOR<DepartmentUpdateInput, DepartmentUncheckedUpdateInput>
    /**
     * Choose, which Department to update.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department updateMany
   */
  export type DepartmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Departments.
     */
    data: XOR<DepartmentUpdateManyMutationInput, DepartmentUncheckedUpdateManyInput>
    /**
     * Filter which Departments to update
     */
    where?: DepartmentWhereInput
    /**
     * Limit how many Departments to update.
     */
    limit?: number
  }

  /**
   * Department updateManyAndReturn
   */
  export type DepartmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * The data used to update Departments.
     */
    data: XOR<DepartmentUpdateManyMutationInput, DepartmentUncheckedUpdateManyInput>
    /**
     * Filter which Departments to update
     */
    where?: DepartmentWhereInput
    /**
     * Limit how many Departments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Department upsert
   */
  export type DepartmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Department to update in case it exists.
     */
    where: DepartmentWhereUniqueInput
    /**
     * In case the Department found by the `where` argument doesn't exist, create a new Department with this data.
     */
    create: XOR<DepartmentCreateInput, DepartmentUncheckedCreateInput>
    /**
     * In case the Department was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DepartmentUpdateInput, DepartmentUncheckedUpdateInput>
  }

  /**
   * Department delete
   */
  export type DepartmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter which Department to delete.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department deleteMany
   */
  export type DepartmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Departments to delete
     */
    where?: DepartmentWhereInput
    /**
     * Limit how many Departments to delete.
     */
    limit?: number
  }

  /**
   * Department.users
   */
  export type Department$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Department without action
   */
  export type DepartmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
  }


  /**
   * Model School_Head
   */

  export type AggregateSchool_Head = {
    _count: School_HeadCountAggregateOutputType | null
    _min: School_HeadMinAggregateOutputType | null
    _max: School_HeadMaxAggregateOutputType | null
  }

  export type School_HeadMinAggregateOutputType = {
    id: string | null
    userId: string | null
    schoolId: string | null
    assignedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type School_HeadMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    schoolId: string | null
    assignedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type School_HeadCountAggregateOutputType = {
    id: number
    userId: number
    schoolId: number
    assignedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type School_HeadMinAggregateInputType = {
    id?: true
    userId?: true
    schoolId?: true
    assignedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type School_HeadMaxAggregateInputType = {
    id?: true
    userId?: true
    schoolId?: true
    assignedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type School_HeadCountAggregateInputType = {
    id?: true
    userId?: true
    schoolId?: true
    assignedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type School_HeadAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which School_Head to aggregate.
     */
    where?: School_HeadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of School_Heads to fetch.
     */
    orderBy?: School_HeadOrderByWithRelationInput | School_HeadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: School_HeadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` School_Heads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` School_Heads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned School_Heads
    **/
    _count?: true | School_HeadCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: School_HeadMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: School_HeadMaxAggregateInputType
  }

  export type GetSchool_HeadAggregateType<T extends School_HeadAggregateArgs> = {
        [P in keyof T & keyof AggregateSchool_Head]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSchool_Head[P]>
      : GetScalarType<T[P], AggregateSchool_Head[P]>
  }




  export type School_HeadGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: School_HeadWhereInput
    orderBy?: School_HeadOrderByWithAggregationInput | School_HeadOrderByWithAggregationInput[]
    by: School_HeadScalarFieldEnum[] | School_HeadScalarFieldEnum
    having?: School_HeadScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: School_HeadCountAggregateInputType | true
    _min?: School_HeadMinAggregateInputType
    _max?: School_HeadMaxAggregateInputType
  }

  export type School_HeadGroupByOutputType = {
    id: string
    userId: string
    schoolId: string | null
    assignedAt: Date
    createdAt: Date
    updatedAt: Date
    _count: School_HeadCountAggregateOutputType | null
    _min: School_HeadMinAggregateOutputType | null
    _max: School_HeadMaxAggregateOutputType | null
  }

  type GetSchool_HeadGroupByPayload<T extends School_HeadGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<School_HeadGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof School_HeadGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], School_HeadGroupByOutputType[P]>
            : GetScalarType<T[P], School_HeadGroupByOutputType[P]>
        }
      >
    >


  export type School_HeadSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    schoolId?: boolean
    assignedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    school?: boolean | School_Head$schoolArgs<ExtArgs>
  }, ExtArgs["result"]["school_Head"]>

  export type School_HeadSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    schoolId?: boolean
    assignedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    school?: boolean | School_Head$schoolArgs<ExtArgs>
  }, ExtArgs["result"]["school_Head"]>

  export type School_HeadSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    schoolId?: boolean
    assignedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    school?: boolean | School_Head$schoolArgs<ExtArgs>
  }, ExtArgs["result"]["school_Head"]>

  export type School_HeadSelectScalar = {
    id?: boolean
    userId?: boolean
    schoolId?: boolean
    assignedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type School_HeadOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "schoolId" | "assignedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["school_Head"]>
  export type School_HeadInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    school?: boolean | School_Head$schoolArgs<ExtArgs>
  }
  export type School_HeadIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    school?: boolean | School_Head$schoolArgs<ExtArgs>
  }
  export type School_HeadIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    school?: boolean | School_Head$schoolArgs<ExtArgs>
  }

  export type $School_HeadPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "School_Head"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      school: Prisma.$SchoolPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      schoolId: string | null
      assignedAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["school_Head"]>
    composites: {}
  }

  type School_HeadGetPayload<S extends boolean | null | undefined | School_HeadDefaultArgs> = $Result.GetResult<Prisma.$School_HeadPayload, S>

  type School_HeadCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<School_HeadFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: School_HeadCountAggregateInputType | true
    }

  export interface School_HeadDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['School_Head'], meta: { name: 'School_Head' } }
    /**
     * Find zero or one School_Head that matches the filter.
     * @param {School_HeadFindUniqueArgs} args - Arguments to find a School_Head
     * @example
     * // Get one School_Head
     * const school_Head = await prisma.school_Head.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends School_HeadFindUniqueArgs>(args: SelectSubset<T, School_HeadFindUniqueArgs<ExtArgs>>): Prisma__School_HeadClient<$Result.GetResult<Prisma.$School_HeadPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one School_Head that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {School_HeadFindUniqueOrThrowArgs} args - Arguments to find a School_Head
     * @example
     * // Get one School_Head
     * const school_Head = await prisma.school_Head.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends School_HeadFindUniqueOrThrowArgs>(args: SelectSubset<T, School_HeadFindUniqueOrThrowArgs<ExtArgs>>): Prisma__School_HeadClient<$Result.GetResult<Prisma.$School_HeadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first School_Head that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {School_HeadFindFirstArgs} args - Arguments to find a School_Head
     * @example
     * // Get one School_Head
     * const school_Head = await prisma.school_Head.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends School_HeadFindFirstArgs>(args?: SelectSubset<T, School_HeadFindFirstArgs<ExtArgs>>): Prisma__School_HeadClient<$Result.GetResult<Prisma.$School_HeadPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first School_Head that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {School_HeadFindFirstOrThrowArgs} args - Arguments to find a School_Head
     * @example
     * // Get one School_Head
     * const school_Head = await prisma.school_Head.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends School_HeadFindFirstOrThrowArgs>(args?: SelectSubset<T, School_HeadFindFirstOrThrowArgs<ExtArgs>>): Prisma__School_HeadClient<$Result.GetResult<Prisma.$School_HeadPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more School_Heads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {School_HeadFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all School_Heads
     * const school_Heads = await prisma.school_Head.findMany()
     * 
     * // Get first 10 School_Heads
     * const school_Heads = await prisma.school_Head.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const school_HeadWithIdOnly = await prisma.school_Head.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends School_HeadFindManyArgs>(args?: SelectSubset<T, School_HeadFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$School_HeadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a School_Head.
     * @param {School_HeadCreateArgs} args - Arguments to create a School_Head.
     * @example
     * // Create one School_Head
     * const School_Head = await prisma.school_Head.create({
     *   data: {
     *     // ... data to create a School_Head
     *   }
     * })
     * 
     */
    create<T extends School_HeadCreateArgs>(args: SelectSubset<T, School_HeadCreateArgs<ExtArgs>>): Prisma__School_HeadClient<$Result.GetResult<Prisma.$School_HeadPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many School_Heads.
     * @param {School_HeadCreateManyArgs} args - Arguments to create many School_Heads.
     * @example
     * // Create many School_Heads
     * const school_Head = await prisma.school_Head.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends School_HeadCreateManyArgs>(args?: SelectSubset<T, School_HeadCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many School_Heads and returns the data saved in the database.
     * @param {School_HeadCreateManyAndReturnArgs} args - Arguments to create many School_Heads.
     * @example
     * // Create many School_Heads
     * const school_Head = await prisma.school_Head.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many School_Heads and only return the `id`
     * const school_HeadWithIdOnly = await prisma.school_Head.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends School_HeadCreateManyAndReturnArgs>(args?: SelectSubset<T, School_HeadCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$School_HeadPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a School_Head.
     * @param {School_HeadDeleteArgs} args - Arguments to delete one School_Head.
     * @example
     * // Delete one School_Head
     * const School_Head = await prisma.school_Head.delete({
     *   where: {
     *     // ... filter to delete one School_Head
     *   }
     * })
     * 
     */
    delete<T extends School_HeadDeleteArgs>(args: SelectSubset<T, School_HeadDeleteArgs<ExtArgs>>): Prisma__School_HeadClient<$Result.GetResult<Prisma.$School_HeadPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one School_Head.
     * @param {School_HeadUpdateArgs} args - Arguments to update one School_Head.
     * @example
     * // Update one School_Head
     * const school_Head = await prisma.school_Head.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends School_HeadUpdateArgs>(args: SelectSubset<T, School_HeadUpdateArgs<ExtArgs>>): Prisma__School_HeadClient<$Result.GetResult<Prisma.$School_HeadPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more School_Heads.
     * @param {School_HeadDeleteManyArgs} args - Arguments to filter School_Heads to delete.
     * @example
     * // Delete a few School_Heads
     * const { count } = await prisma.school_Head.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends School_HeadDeleteManyArgs>(args?: SelectSubset<T, School_HeadDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more School_Heads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {School_HeadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many School_Heads
     * const school_Head = await prisma.school_Head.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends School_HeadUpdateManyArgs>(args: SelectSubset<T, School_HeadUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more School_Heads and returns the data updated in the database.
     * @param {School_HeadUpdateManyAndReturnArgs} args - Arguments to update many School_Heads.
     * @example
     * // Update many School_Heads
     * const school_Head = await prisma.school_Head.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more School_Heads and only return the `id`
     * const school_HeadWithIdOnly = await prisma.school_Head.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends School_HeadUpdateManyAndReturnArgs>(args: SelectSubset<T, School_HeadUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$School_HeadPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one School_Head.
     * @param {School_HeadUpsertArgs} args - Arguments to update or create a School_Head.
     * @example
     * // Update or create a School_Head
     * const school_Head = await prisma.school_Head.upsert({
     *   create: {
     *     // ... data to create a School_Head
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the School_Head we want to update
     *   }
     * })
     */
    upsert<T extends School_HeadUpsertArgs>(args: SelectSubset<T, School_HeadUpsertArgs<ExtArgs>>): Prisma__School_HeadClient<$Result.GetResult<Prisma.$School_HeadPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of School_Heads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {School_HeadCountArgs} args - Arguments to filter School_Heads to count.
     * @example
     * // Count the number of School_Heads
     * const count = await prisma.school_Head.count({
     *   where: {
     *     // ... the filter for the School_Heads we want to count
     *   }
     * })
    **/
    count<T extends School_HeadCountArgs>(
      args?: Subset<T, School_HeadCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], School_HeadCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a School_Head.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {School_HeadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends School_HeadAggregateArgs>(args: Subset<T, School_HeadAggregateArgs>): Prisma.PrismaPromise<GetSchool_HeadAggregateType<T>>

    /**
     * Group by School_Head.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {School_HeadGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends School_HeadGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: School_HeadGroupByArgs['orderBy'] }
        : { orderBy?: School_HeadGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, School_HeadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSchool_HeadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the School_Head model
   */
  readonly fields: School_HeadFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for School_Head.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__School_HeadClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    school<T extends School_Head$schoolArgs<ExtArgs> = {}>(args?: Subset<T, School_Head$schoolArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the School_Head model
   */
  interface School_HeadFieldRefs {
    readonly id: FieldRef<"School_Head", 'String'>
    readonly userId: FieldRef<"School_Head", 'String'>
    readonly schoolId: FieldRef<"School_Head", 'String'>
    readonly assignedAt: FieldRef<"School_Head", 'DateTime'>
    readonly createdAt: FieldRef<"School_Head", 'DateTime'>
    readonly updatedAt: FieldRef<"School_Head", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * School_Head findUnique
   */
  export type School_HeadFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School_Head
     */
    select?: School_HeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School_Head
     */
    omit?: School_HeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: School_HeadInclude<ExtArgs> | null
    /**
     * Filter, which School_Head to fetch.
     */
    where: School_HeadWhereUniqueInput
  }

  /**
   * School_Head findUniqueOrThrow
   */
  export type School_HeadFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School_Head
     */
    select?: School_HeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School_Head
     */
    omit?: School_HeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: School_HeadInclude<ExtArgs> | null
    /**
     * Filter, which School_Head to fetch.
     */
    where: School_HeadWhereUniqueInput
  }

  /**
   * School_Head findFirst
   */
  export type School_HeadFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School_Head
     */
    select?: School_HeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School_Head
     */
    omit?: School_HeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: School_HeadInclude<ExtArgs> | null
    /**
     * Filter, which School_Head to fetch.
     */
    where?: School_HeadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of School_Heads to fetch.
     */
    orderBy?: School_HeadOrderByWithRelationInput | School_HeadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for School_Heads.
     */
    cursor?: School_HeadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` School_Heads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` School_Heads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of School_Heads.
     */
    distinct?: School_HeadScalarFieldEnum | School_HeadScalarFieldEnum[]
  }

  /**
   * School_Head findFirstOrThrow
   */
  export type School_HeadFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School_Head
     */
    select?: School_HeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School_Head
     */
    omit?: School_HeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: School_HeadInclude<ExtArgs> | null
    /**
     * Filter, which School_Head to fetch.
     */
    where?: School_HeadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of School_Heads to fetch.
     */
    orderBy?: School_HeadOrderByWithRelationInput | School_HeadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for School_Heads.
     */
    cursor?: School_HeadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` School_Heads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` School_Heads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of School_Heads.
     */
    distinct?: School_HeadScalarFieldEnum | School_HeadScalarFieldEnum[]
  }

  /**
   * School_Head findMany
   */
  export type School_HeadFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School_Head
     */
    select?: School_HeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School_Head
     */
    omit?: School_HeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: School_HeadInclude<ExtArgs> | null
    /**
     * Filter, which School_Heads to fetch.
     */
    where?: School_HeadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of School_Heads to fetch.
     */
    orderBy?: School_HeadOrderByWithRelationInput | School_HeadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing School_Heads.
     */
    cursor?: School_HeadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` School_Heads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` School_Heads.
     */
    skip?: number
    distinct?: School_HeadScalarFieldEnum | School_HeadScalarFieldEnum[]
  }

  /**
   * School_Head create
   */
  export type School_HeadCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School_Head
     */
    select?: School_HeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School_Head
     */
    omit?: School_HeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: School_HeadInclude<ExtArgs> | null
    /**
     * The data needed to create a School_Head.
     */
    data: XOR<School_HeadCreateInput, School_HeadUncheckedCreateInput>
  }

  /**
   * School_Head createMany
   */
  export type School_HeadCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many School_Heads.
     */
    data: School_HeadCreateManyInput | School_HeadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * School_Head createManyAndReturn
   */
  export type School_HeadCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School_Head
     */
    select?: School_HeadSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the School_Head
     */
    omit?: School_HeadOmit<ExtArgs> | null
    /**
     * The data used to create many School_Heads.
     */
    data: School_HeadCreateManyInput | School_HeadCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: School_HeadIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * School_Head update
   */
  export type School_HeadUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School_Head
     */
    select?: School_HeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School_Head
     */
    omit?: School_HeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: School_HeadInclude<ExtArgs> | null
    /**
     * The data needed to update a School_Head.
     */
    data: XOR<School_HeadUpdateInput, School_HeadUncheckedUpdateInput>
    /**
     * Choose, which School_Head to update.
     */
    where: School_HeadWhereUniqueInput
  }

  /**
   * School_Head updateMany
   */
  export type School_HeadUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update School_Heads.
     */
    data: XOR<School_HeadUpdateManyMutationInput, School_HeadUncheckedUpdateManyInput>
    /**
     * Filter which School_Heads to update
     */
    where?: School_HeadWhereInput
    /**
     * Limit how many School_Heads to update.
     */
    limit?: number
  }

  /**
   * School_Head updateManyAndReturn
   */
  export type School_HeadUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School_Head
     */
    select?: School_HeadSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the School_Head
     */
    omit?: School_HeadOmit<ExtArgs> | null
    /**
     * The data used to update School_Heads.
     */
    data: XOR<School_HeadUpdateManyMutationInput, School_HeadUncheckedUpdateManyInput>
    /**
     * Filter which School_Heads to update
     */
    where?: School_HeadWhereInput
    /**
     * Limit how many School_Heads to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: School_HeadIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * School_Head upsert
   */
  export type School_HeadUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School_Head
     */
    select?: School_HeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School_Head
     */
    omit?: School_HeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: School_HeadInclude<ExtArgs> | null
    /**
     * The filter to search for the School_Head to update in case it exists.
     */
    where: School_HeadWhereUniqueInput
    /**
     * In case the School_Head found by the `where` argument doesn't exist, create a new School_Head with this data.
     */
    create: XOR<School_HeadCreateInput, School_HeadUncheckedCreateInput>
    /**
     * In case the School_Head was found with the provided `where` argument, update it with this data.
     */
    update: XOR<School_HeadUpdateInput, School_HeadUncheckedUpdateInput>
  }

  /**
   * School_Head delete
   */
  export type School_HeadDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School_Head
     */
    select?: School_HeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School_Head
     */
    omit?: School_HeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: School_HeadInclude<ExtArgs> | null
    /**
     * Filter which School_Head to delete.
     */
    where: School_HeadWhereUniqueInput
  }

  /**
   * School_Head deleteMany
   */
  export type School_HeadDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which School_Heads to delete
     */
    where?: School_HeadWhereInput
    /**
     * Limit how many School_Heads to delete.
     */
    limit?: number
  }

  /**
   * School_Head.school
   */
  export type School_Head$schoolArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    where?: SchoolWhereInput
  }

  /**
   * School_Head without action
   */
  export type School_HeadDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School_Head
     */
    select?: School_HeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School_Head
     */
    omit?: School_HeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: School_HeadInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    baseSalary: Decimal | null
  }

  export type UserSumAggregateOutputType = {
    baseSalary: Decimal | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    username: string | null
    passwordHash: string | null
    role: $Enums.UserRole | null
    isActive: boolean | null
    firstName: string | null
    lastName: string | null
    email: string | null
    phoneLocal: string | null
    addressLocal: string | null
    city: string | null
    country: string | null
    phoneForeign: string | null
    addressForeign: string | null
    cityForeign: string | null
    countryForeign: string | null
    dateOfBirth: Date | null
    isLocal: boolean | null
    employeeType: $Enums.EmployeeType | null
    academicPosition: $Enums.AcademicPosition | null
    administrativePosition: $Enums.AdministrativePosition | null
    status: $Enums.EmployeeStatus | null
    departmentId: string | null
    schoolId: string | null
    baseSalary: Decimal | null
    bio: string | null
    profilePictureUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    passwordHash: string | null
    role: $Enums.UserRole | null
    isActive: boolean | null
    firstName: string | null
    lastName: string | null
    email: string | null
    phoneLocal: string | null
    addressLocal: string | null
    city: string | null
    country: string | null
    phoneForeign: string | null
    addressForeign: string | null
    cityForeign: string | null
    countryForeign: string | null
    dateOfBirth: Date | null
    isLocal: boolean | null
    employeeType: $Enums.EmployeeType | null
    academicPosition: $Enums.AcademicPosition | null
    administrativePosition: $Enums.AdministrativePosition | null
    status: $Enums.EmployeeStatus | null
    departmentId: string | null
    schoolId: string | null
    baseSalary: Decimal | null
    bio: string | null
    profilePictureUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    passwordHash: number
    role: number
    isActive: number
    firstName: number
    lastName: number
    email: number
    phoneLocal: number
    addressLocal: number
    city: number
    country: number
    phoneForeign: number
    addressForeign: number
    cityForeign: number
    countryForeign: number
    dateOfBirth: number
    isLocal: number
    employeeType: number
    academicPosition: number
    administrativePosition: number
    status: number
    departmentId: number
    schoolId: number
    baseSalary: number
    bio: number
    profilePictureUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    baseSalary?: true
  }

  export type UserSumAggregateInputType = {
    baseSalary?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    passwordHash?: true
    role?: true
    isActive?: true
    firstName?: true
    lastName?: true
    email?: true
    phoneLocal?: true
    addressLocal?: true
    city?: true
    country?: true
    phoneForeign?: true
    addressForeign?: true
    cityForeign?: true
    countryForeign?: true
    dateOfBirth?: true
    isLocal?: true
    employeeType?: true
    academicPosition?: true
    administrativePosition?: true
    status?: true
    departmentId?: true
    schoolId?: true
    baseSalary?: true
    bio?: true
    profilePictureUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    passwordHash?: true
    role?: true
    isActive?: true
    firstName?: true
    lastName?: true
    email?: true
    phoneLocal?: true
    addressLocal?: true
    city?: true
    country?: true
    phoneForeign?: true
    addressForeign?: true
    cityForeign?: true
    countryForeign?: true
    dateOfBirth?: true
    isLocal?: true
    employeeType?: true
    academicPosition?: true
    administrativePosition?: true
    status?: true
    departmentId?: true
    schoolId?: true
    baseSalary?: true
    bio?: true
    profilePictureUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    passwordHash?: true
    role?: true
    isActive?: true
    firstName?: true
    lastName?: true
    email?: true
    phoneLocal?: true
    addressLocal?: true
    city?: true
    country?: true
    phoneForeign?: true
    addressForeign?: true
    cityForeign?: true
    countryForeign?: true
    dateOfBirth?: true
    isLocal?: true
    employeeType?: true
    academicPosition?: true
    administrativePosition?: true
    status?: true
    departmentId?: true
    schoolId?: true
    baseSalary?: true
    bio?: true
    profilePictureUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    username: string
    passwordHash: string
    role: $Enums.UserRole
    isActive: boolean
    firstName: string
    lastName: string
    email: string
    phoneLocal: string | null
    addressLocal: string | null
    city: string | null
    country: string | null
    phoneForeign: string | null
    addressForeign: string | null
    cityForeign: string | null
    countryForeign: string | null
    dateOfBirth: Date | null
    isLocal: boolean
    employeeType: $Enums.EmployeeType
    academicPosition: $Enums.AcademicPosition | null
    administrativePosition: $Enums.AdministrativePosition | null
    status: $Enums.EmployeeStatus
    departmentId: string | null
    schoolId: string | null
    baseSalary: Decimal | null
    bio: string | null
    profilePictureUrl: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    passwordHash?: boolean
    role?: boolean
    isActive?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phoneLocal?: boolean
    addressLocal?: boolean
    city?: boolean
    country?: boolean
    phoneForeign?: boolean
    addressForeign?: boolean
    cityForeign?: boolean
    countryForeign?: boolean
    dateOfBirth?: boolean
    isLocal?: boolean
    employeeType?: boolean
    academicPosition?: boolean
    administrativePosition?: boolean
    status?: boolean
    departmentId?: boolean
    schoolId?: boolean
    baseSalary?: boolean
    bio?: boolean
    profilePictureUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    school?: boolean | User$schoolArgs<ExtArgs>
    department?: boolean | User$departmentArgs<ExtArgs>
    emergencyContacts?: boolean | User$emergencyContactsArgs<ExtArgs>
    todos?: boolean | User$todosArgs<ExtArgs>
    schoolHead?: boolean | User$schoolHeadArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    passwordHash?: boolean
    role?: boolean
    isActive?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phoneLocal?: boolean
    addressLocal?: boolean
    city?: boolean
    country?: boolean
    phoneForeign?: boolean
    addressForeign?: boolean
    cityForeign?: boolean
    countryForeign?: boolean
    dateOfBirth?: boolean
    isLocal?: boolean
    employeeType?: boolean
    academicPosition?: boolean
    administrativePosition?: boolean
    status?: boolean
    departmentId?: boolean
    schoolId?: boolean
    baseSalary?: boolean
    bio?: boolean
    profilePictureUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    school?: boolean | User$schoolArgs<ExtArgs>
    department?: boolean | User$departmentArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    passwordHash?: boolean
    role?: boolean
    isActive?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phoneLocal?: boolean
    addressLocal?: boolean
    city?: boolean
    country?: boolean
    phoneForeign?: boolean
    addressForeign?: boolean
    cityForeign?: boolean
    countryForeign?: boolean
    dateOfBirth?: boolean
    isLocal?: boolean
    employeeType?: boolean
    academicPosition?: boolean
    administrativePosition?: boolean
    status?: boolean
    departmentId?: boolean
    schoolId?: boolean
    baseSalary?: boolean
    bio?: boolean
    profilePictureUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    school?: boolean | User$schoolArgs<ExtArgs>
    department?: boolean | User$departmentArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    passwordHash?: boolean
    role?: boolean
    isActive?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phoneLocal?: boolean
    addressLocal?: boolean
    city?: boolean
    country?: boolean
    phoneForeign?: boolean
    addressForeign?: boolean
    cityForeign?: boolean
    countryForeign?: boolean
    dateOfBirth?: boolean
    isLocal?: boolean
    employeeType?: boolean
    academicPosition?: boolean
    administrativePosition?: boolean
    status?: boolean
    departmentId?: boolean
    schoolId?: boolean
    baseSalary?: boolean
    bio?: boolean
    profilePictureUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "passwordHash" | "role" | "isActive" | "firstName" | "lastName" | "email" | "phoneLocal" | "addressLocal" | "city" | "country" | "phoneForeign" | "addressForeign" | "cityForeign" | "countryForeign" | "dateOfBirth" | "isLocal" | "employeeType" | "academicPosition" | "administrativePosition" | "status" | "departmentId" | "schoolId" | "baseSalary" | "bio" | "profilePictureUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    school?: boolean | User$schoolArgs<ExtArgs>
    department?: boolean | User$departmentArgs<ExtArgs>
    emergencyContacts?: boolean | User$emergencyContactsArgs<ExtArgs>
    todos?: boolean | User$todosArgs<ExtArgs>
    schoolHead?: boolean | User$schoolHeadArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    school?: boolean | User$schoolArgs<ExtArgs>
    department?: boolean | User$departmentArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    school?: boolean | User$schoolArgs<ExtArgs>
    department?: boolean | User$departmentArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      school: Prisma.$SchoolPayload<ExtArgs> | null
      department: Prisma.$DepartmentPayload<ExtArgs> | null
      emergencyContacts: Prisma.$EmergencyContactPayload<ExtArgs>[]
      todos: Prisma.$TodoPayload<ExtArgs>[]
      schoolHead: Prisma.$School_HeadPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      passwordHash: string
      role: $Enums.UserRole
      isActive: boolean
      firstName: string
      lastName: string
      email: string
      phoneLocal: string | null
      addressLocal: string | null
      city: string | null
      country: string | null
      phoneForeign: string | null
      addressForeign: string | null
      cityForeign: string | null
      countryForeign: string | null
      dateOfBirth: Date | null
      isLocal: boolean
      employeeType: $Enums.EmployeeType
      academicPosition: $Enums.AcademicPosition | null
      administrativePosition: $Enums.AdministrativePosition | null
      status: $Enums.EmployeeStatus
      departmentId: string | null
      schoolId: string | null
      baseSalary: Prisma.Decimal | null
      bio: string | null
      profilePictureUrl: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    school<T extends User$schoolArgs<ExtArgs> = {}>(args?: Subset<T, User$schoolArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    department<T extends User$departmentArgs<ExtArgs> = {}>(args?: Subset<T, User$departmentArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    emergencyContacts<T extends User$emergencyContactsArgs<ExtArgs> = {}>(args?: Subset<T, User$emergencyContactsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmergencyContactPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    todos<T extends User$todosArgs<ExtArgs> = {}>(args?: Subset<T, User$todosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TodoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    schoolHead<T extends User$schoolHeadArgs<ExtArgs> = {}>(args?: Subset<T, User$schoolHeadArgs<ExtArgs>>): Prisma__School_HeadClient<$Result.GetResult<Prisma.$School_HeadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly phoneLocal: FieldRef<"User", 'String'>
    readonly addressLocal: FieldRef<"User", 'String'>
    readonly city: FieldRef<"User", 'String'>
    readonly country: FieldRef<"User", 'String'>
    readonly phoneForeign: FieldRef<"User", 'String'>
    readonly addressForeign: FieldRef<"User", 'String'>
    readonly cityForeign: FieldRef<"User", 'String'>
    readonly countryForeign: FieldRef<"User", 'String'>
    readonly dateOfBirth: FieldRef<"User", 'DateTime'>
    readonly isLocal: FieldRef<"User", 'Boolean'>
    readonly employeeType: FieldRef<"User", 'EmployeeType'>
    readonly academicPosition: FieldRef<"User", 'AcademicPosition'>
    readonly administrativePosition: FieldRef<"User", 'AdministrativePosition'>
    readonly status: FieldRef<"User", 'EmployeeStatus'>
    readonly departmentId: FieldRef<"User", 'String'>
    readonly schoolId: FieldRef<"User", 'String'>
    readonly baseSalary: FieldRef<"User", 'Decimal'>
    readonly bio: FieldRef<"User", 'String'>
    readonly profilePictureUrl: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.school
   */
  export type User$schoolArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    where?: SchoolWhereInput
  }

  /**
   * User.department
   */
  export type User$departmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    where?: DepartmentWhereInput
  }

  /**
   * User.emergencyContacts
   */
  export type User$emergencyContactsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyContact
     */
    select?: EmergencyContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmergencyContact
     */
    omit?: EmergencyContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmergencyContactInclude<ExtArgs> | null
    where?: EmergencyContactWhereInput
    orderBy?: EmergencyContactOrderByWithRelationInput | EmergencyContactOrderByWithRelationInput[]
    cursor?: EmergencyContactWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmergencyContactScalarFieldEnum | EmergencyContactScalarFieldEnum[]
  }

  /**
   * User.todos
   */
  export type User$todosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Todo
     */
    select?: TodoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Todo
     */
    omit?: TodoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodoInclude<ExtArgs> | null
    where?: TodoWhereInput
    orderBy?: TodoOrderByWithRelationInput | TodoOrderByWithRelationInput[]
    cursor?: TodoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TodoScalarFieldEnum | TodoScalarFieldEnum[]
  }

  /**
   * User.schoolHead
   */
  export type User$schoolHeadArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School_Head
     */
    select?: School_HeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School_Head
     */
    omit?: School_HeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: School_HeadInclude<ExtArgs> | null
    where?: School_HeadWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model EmergencyContact
   */

  export type AggregateEmergencyContact = {
    _count: EmergencyContactCountAggregateOutputType | null
    _min: EmergencyContactMinAggregateOutputType | null
    _max: EmergencyContactMaxAggregateOutputType | null
  }

  export type EmergencyContactMinAggregateOutputType = {
    id: string | null
    userId: string | null
    contactName: string | null
    relationship: string | null
    phonePrimary: string | null
    email: string | null
  }

  export type EmergencyContactMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    contactName: string | null
    relationship: string | null
    phonePrimary: string | null
    email: string | null
  }

  export type EmergencyContactCountAggregateOutputType = {
    id: number
    userId: number
    contactName: number
    relationship: number
    phonePrimary: number
    email: number
    _all: number
  }


  export type EmergencyContactMinAggregateInputType = {
    id?: true
    userId?: true
    contactName?: true
    relationship?: true
    phonePrimary?: true
    email?: true
  }

  export type EmergencyContactMaxAggregateInputType = {
    id?: true
    userId?: true
    contactName?: true
    relationship?: true
    phonePrimary?: true
    email?: true
  }

  export type EmergencyContactCountAggregateInputType = {
    id?: true
    userId?: true
    contactName?: true
    relationship?: true
    phonePrimary?: true
    email?: true
    _all?: true
  }

  export type EmergencyContactAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmergencyContact to aggregate.
     */
    where?: EmergencyContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmergencyContacts to fetch.
     */
    orderBy?: EmergencyContactOrderByWithRelationInput | EmergencyContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmergencyContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmergencyContacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmergencyContacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EmergencyContacts
    **/
    _count?: true | EmergencyContactCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmergencyContactMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmergencyContactMaxAggregateInputType
  }

  export type GetEmergencyContactAggregateType<T extends EmergencyContactAggregateArgs> = {
        [P in keyof T & keyof AggregateEmergencyContact]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmergencyContact[P]>
      : GetScalarType<T[P], AggregateEmergencyContact[P]>
  }




  export type EmergencyContactGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmergencyContactWhereInput
    orderBy?: EmergencyContactOrderByWithAggregationInput | EmergencyContactOrderByWithAggregationInput[]
    by: EmergencyContactScalarFieldEnum[] | EmergencyContactScalarFieldEnum
    having?: EmergencyContactScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmergencyContactCountAggregateInputType | true
    _min?: EmergencyContactMinAggregateInputType
    _max?: EmergencyContactMaxAggregateInputType
  }

  export type EmergencyContactGroupByOutputType = {
    id: string
    userId: string
    contactName: string
    relationship: string | null
    phonePrimary: string
    email: string | null
    _count: EmergencyContactCountAggregateOutputType | null
    _min: EmergencyContactMinAggregateOutputType | null
    _max: EmergencyContactMaxAggregateOutputType | null
  }

  type GetEmergencyContactGroupByPayload<T extends EmergencyContactGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmergencyContactGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmergencyContactGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmergencyContactGroupByOutputType[P]>
            : GetScalarType<T[P], EmergencyContactGroupByOutputType[P]>
        }
      >
    >


  export type EmergencyContactSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    contactName?: boolean
    relationship?: boolean
    phonePrimary?: boolean
    email?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emergencyContact"]>

  export type EmergencyContactSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    contactName?: boolean
    relationship?: boolean
    phonePrimary?: boolean
    email?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emergencyContact"]>

  export type EmergencyContactSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    contactName?: boolean
    relationship?: boolean
    phonePrimary?: boolean
    email?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emergencyContact"]>

  export type EmergencyContactSelectScalar = {
    id?: boolean
    userId?: boolean
    contactName?: boolean
    relationship?: boolean
    phonePrimary?: boolean
    email?: boolean
  }

  export type EmergencyContactOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "contactName" | "relationship" | "phonePrimary" | "email", ExtArgs["result"]["emergencyContact"]>
  export type EmergencyContactInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EmergencyContactIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EmergencyContactIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $EmergencyContactPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EmergencyContact"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      contactName: string
      relationship: string | null
      phonePrimary: string
      email: string | null
    }, ExtArgs["result"]["emergencyContact"]>
    composites: {}
  }

  type EmergencyContactGetPayload<S extends boolean | null | undefined | EmergencyContactDefaultArgs> = $Result.GetResult<Prisma.$EmergencyContactPayload, S>

  type EmergencyContactCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmergencyContactFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmergencyContactCountAggregateInputType | true
    }

  export interface EmergencyContactDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EmergencyContact'], meta: { name: 'EmergencyContact' } }
    /**
     * Find zero or one EmergencyContact that matches the filter.
     * @param {EmergencyContactFindUniqueArgs} args - Arguments to find a EmergencyContact
     * @example
     * // Get one EmergencyContact
     * const emergencyContact = await prisma.emergencyContact.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmergencyContactFindUniqueArgs>(args: SelectSubset<T, EmergencyContactFindUniqueArgs<ExtArgs>>): Prisma__EmergencyContactClient<$Result.GetResult<Prisma.$EmergencyContactPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EmergencyContact that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmergencyContactFindUniqueOrThrowArgs} args - Arguments to find a EmergencyContact
     * @example
     * // Get one EmergencyContact
     * const emergencyContact = await prisma.emergencyContact.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmergencyContactFindUniqueOrThrowArgs>(args: SelectSubset<T, EmergencyContactFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmergencyContactClient<$Result.GetResult<Prisma.$EmergencyContactPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmergencyContact that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmergencyContactFindFirstArgs} args - Arguments to find a EmergencyContact
     * @example
     * // Get one EmergencyContact
     * const emergencyContact = await prisma.emergencyContact.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmergencyContactFindFirstArgs>(args?: SelectSubset<T, EmergencyContactFindFirstArgs<ExtArgs>>): Prisma__EmergencyContactClient<$Result.GetResult<Prisma.$EmergencyContactPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmergencyContact that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmergencyContactFindFirstOrThrowArgs} args - Arguments to find a EmergencyContact
     * @example
     * // Get one EmergencyContact
     * const emergencyContact = await prisma.emergencyContact.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmergencyContactFindFirstOrThrowArgs>(args?: SelectSubset<T, EmergencyContactFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmergencyContactClient<$Result.GetResult<Prisma.$EmergencyContactPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EmergencyContacts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmergencyContactFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EmergencyContacts
     * const emergencyContacts = await prisma.emergencyContact.findMany()
     * 
     * // Get first 10 EmergencyContacts
     * const emergencyContacts = await prisma.emergencyContact.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const emergencyContactWithIdOnly = await prisma.emergencyContact.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmergencyContactFindManyArgs>(args?: SelectSubset<T, EmergencyContactFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmergencyContactPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EmergencyContact.
     * @param {EmergencyContactCreateArgs} args - Arguments to create a EmergencyContact.
     * @example
     * // Create one EmergencyContact
     * const EmergencyContact = await prisma.emergencyContact.create({
     *   data: {
     *     // ... data to create a EmergencyContact
     *   }
     * })
     * 
     */
    create<T extends EmergencyContactCreateArgs>(args: SelectSubset<T, EmergencyContactCreateArgs<ExtArgs>>): Prisma__EmergencyContactClient<$Result.GetResult<Prisma.$EmergencyContactPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EmergencyContacts.
     * @param {EmergencyContactCreateManyArgs} args - Arguments to create many EmergencyContacts.
     * @example
     * // Create many EmergencyContacts
     * const emergencyContact = await prisma.emergencyContact.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmergencyContactCreateManyArgs>(args?: SelectSubset<T, EmergencyContactCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EmergencyContacts and returns the data saved in the database.
     * @param {EmergencyContactCreateManyAndReturnArgs} args - Arguments to create many EmergencyContacts.
     * @example
     * // Create many EmergencyContacts
     * const emergencyContact = await prisma.emergencyContact.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EmergencyContacts and only return the `id`
     * const emergencyContactWithIdOnly = await prisma.emergencyContact.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmergencyContactCreateManyAndReturnArgs>(args?: SelectSubset<T, EmergencyContactCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmergencyContactPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EmergencyContact.
     * @param {EmergencyContactDeleteArgs} args - Arguments to delete one EmergencyContact.
     * @example
     * // Delete one EmergencyContact
     * const EmergencyContact = await prisma.emergencyContact.delete({
     *   where: {
     *     // ... filter to delete one EmergencyContact
     *   }
     * })
     * 
     */
    delete<T extends EmergencyContactDeleteArgs>(args: SelectSubset<T, EmergencyContactDeleteArgs<ExtArgs>>): Prisma__EmergencyContactClient<$Result.GetResult<Prisma.$EmergencyContactPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EmergencyContact.
     * @param {EmergencyContactUpdateArgs} args - Arguments to update one EmergencyContact.
     * @example
     * // Update one EmergencyContact
     * const emergencyContact = await prisma.emergencyContact.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmergencyContactUpdateArgs>(args: SelectSubset<T, EmergencyContactUpdateArgs<ExtArgs>>): Prisma__EmergencyContactClient<$Result.GetResult<Prisma.$EmergencyContactPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EmergencyContacts.
     * @param {EmergencyContactDeleteManyArgs} args - Arguments to filter EmergencyContacts to delete.
     * @example
     * // Delete a few EmergencyContacts
     * const { count } = await prisma.emergencyContact.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmergencyContactDeleteManyArgs>(args?: SelectSubset<T, EmergencyContactDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmergencyContacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmergencyContactUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EmergencyContacts
     * const emergencyContact = await prisma.emergencyContact.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmergencyContactUpdateManyArgs>(args: SelectSubset<T, EmergencyContactUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmergencyContacts and returns the data updated in the database.
     * @param {EmergencyContactUpdateManyAndReturnArgs} args - Arguments to update many EmergencyContacts.
     * @example
     * // Update many EmergencyContacts
     * const emergencyContact = await prisma.emergencyContact.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EmergencyContacts and only return the `id`
     * const emergencyContactWithIdOnly = await prisma.emergencyContact.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EmergencyContactUpdateManyAndReturnArgs>(args: SelectSubset<T, EmergencyContactUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmergencyContactPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EmergencyContact.
     * @param {EmergencyContactUpsertArgs} args - Arguments to update or create a EmergencyContact.
     * @example
     * // Update or create a EmergencyContact
     * const emergencyContact = await prisma.emergencyContact.upsert({
     *   create: {
     *     // ... data to create a EmergencyContact
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EmergencyContact we want to update
     *   }
     * })
     */
    upsert<T extends EmergencyContactUpsertArgs>(args: SelectSubset<T, EmergencyContactUpsertArgs<ExtArgs>>): Prisma__EmergencyContactClient<$Result.GetResult<Prisma.$EmergencyContactPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EmergencyContacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmergencyContactCountArgs} args - Arguments to filter EmergencyContacts to count.
     * @example
     * // Count the number of EmergencyContacts
     * const count = await prisma.emergencyContact.count({
     *   where: {
     *     // ... the filter for the EmergencyContacts we want to count
     *   }
     * })
    **/
    count<T extends EmergencyContactCountArgs>(
      args?: Subset<T, EmergencyContactCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmergencyContactCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EmergencyContact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmergencyContactAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EmergencyContactAggregateArgs>(args: Subset<T, EmergencyContactAggregateArgs>): Prisma.PrismaPromise<GetEmergencyContactAggregateType<T>>

    /**
     * Group by EmergencyContact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmergencyContactGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EmergencyContactGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmergencyContactGroupByArgs['orderBy'] }
        : { orderBy?: EmergencyContactGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EmergencyContactGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmergencyContactGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EmergencyContact model
   */
  readonly fields: EmergencyContactFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EmergencyContact.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmergencyContactClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EmergencyContact model
   */
  interface EmergencyContactFieldRefs {
    readonly id: FieldRef<"EmergencyContact", 'String'>
    readonly userId: FieldRef<"EmergencyContact", 'String'>
    readonly contactName: FieldRef<"EmergencyContact", 'String'>
    readonly relationship: FieldRef<"EmergencyContact", 'String'>
    readonly phonePrimary: FieldRef<"EmergencyContact", 'String'>
    readonly email: FieldRef<"EmergencyContact", 'String'>
  }
    

  // Custom InputTypes
  /**
   * EmergencyContact findUnique
   */
  export type EmergencyContactFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyContact
     */
    select?: EmergencyContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmergencyContact
     */
    omit?: EmergencyContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmergencyContactInclude<ExtArgs> | null
    /**
     * Filter, which EmergencyContact to fetch.
     */
    where: EmergencyContactWhereUniqueInput
  }

  /**
   * EmergencyContact findUniqueOrThrow
   */
  export type EmergencyContactFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyContact
     */
    select?: EmergencyContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmergencyContact
     */
    omit?: EmergencyContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmergencyContactInclude<ExtArgs> | null
    /**
     * Filter, which EmergencyContact to fetch.
     */
    where: EmergencyContactWhereUniqueInput
  }

  /**
   * EmergencyContact findFirst
   */
  export type EmergencyContactFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyContact
     */
    select?: EmergencyContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmergencyContact
     */
    omit?: EmergencyContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmergencyContactInclude<ExtArgs> | null
    /**
     * Filter, which EmergencyContact to fetch.
     */
    where?: EmergencyContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmergencyContacts to fetch.
     */
    orderBy?: EmergencyContactOrderByWithRelationInput | EmergencyContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmergencyContacts.
     */
    cursor?: EmergencyContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmergencyContacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmergencyContacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmergencyContacts.
     */
    distinct?: EmergencyContactScalarFieldEnum | EmergencyContactScalarFieldEnum[]
  }

  /**
   * EmergencyContact findFirstOrThrow
   */
  export type EmergencyContactFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyContact
     */
    select?: EmergencyContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmergencyContact
     */
    omit?: EmergencyContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmergencyContactInclude<ExtArgs> | null
    /**
     * Filter, which EmergencyContact to fetch.
     */
    where?: EmergencyContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmergencyContacts to fetch.
     */
    orderBy?: EmergencyContactOrderByWithRelationInput | EmergencyContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmergencyContacts.
     */
    cursor?: EmergencyContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmergencyContacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmergencyContacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmergencyContacts.
     */
    distinct?: EmergencyContactScalarFieldEnum | EmergencyContactScalarFieldEnum[]
  }

  /**
   * EmergencyContact findMany
   */
  export type EmergencyContactFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyContact
     */
    select?: EmergencyContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmergencyContact
     */
    omit?: EmergencyContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmergencyContactInclude<ExtArgs> | null
    /**
     * Filter, which EmergencyContacts to fetch.
     */
    where?: EmergencyContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmergencyContacts to fetch.
     */
    orderBy?: EmergencyContactOrderByWithRelationInput | EmergencyContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EmergencyContacts.
     */
    cursor?: EmergencyContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmergencyContacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmergencyContacts.
     */
    skip?: number
    distinct?: EmergencyContactScalarFieldEnum | EmergencyContactScalarFieldEnum[]
  }

  /**
   * EmergencyContact create
   */
  export type EmergencyContactCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyContact
     */
    select?: EmergencyContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmergencyContact
     */
    omit?: EmergencyContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmergencyContactInclude<ExtArgs> | null
    /**
     * The data needed to create a EmergencyContact.
     */
    data: XOR<EmergencyContactCreateInput, EmergencyContactUncheckedCreateInput>
  }

  /**
   * EmergencyContact createMany
   */
  export type EmergencyContactCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EmergencyContacts.
     */
    data: EmergencyContactCreateManyInput | EmergencyContactCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EmergencyContact createManyAndReturn
   */
  export type EmergencyContactCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyContact
     */
    select?: EmergencyContactSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmergencyContact
     */
    omit?: EmergencyContactOmit<ExtArgs> | null
    /**
     * The data used to create many EmergencyContacts.
     */
    data: EmergencyContactCreateManyInput | EmergencyContactCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmergencyContactIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EmergencyContact update
   */
  export type EmergencyContactUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyContact
     */
    select?: EmergencyContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmergencyContact
     */
    omit?: EmergencyContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmergencyContactInclude<ExtArgs> | null
    /**
     * The data needed to update a EmergencyContact.
     */
    data: XOR<EmergencyContactUpdateInput, EmergencyContactUncheckedUpdateInput>
    /**
     * Choose, which EmergencyContact to update.
     */
    where: EmergencyContactWhereUniqueInput
  }

  /**
   * EmergencyContact updateMany
   */
  export type EmergencyContactUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EmergencyContacts.
     */
    data: XOR<EmergencyContactUpdateManyMutationInput, EmergencyContactUncheckedUpdateManyInput>
    /**
     * Filter which EmergencyContacts to update
     */
    where?: EmergencyContactWhereInput
    /**
     * Limit how many EmergencyContacts to update.
     */
    limit?: number
  }

  /**
   * EmergencyContact updateManyAndReturn
   */
  export type EmergencyContactUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyContact
     */
    select?: EmergencyContactSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmergencyContact
     */
    omit?: EmergencyContactOmit<ExtArgs> | null
    /**
     * The data used to update EmergencyContacts.
     */
    data: XOR<EmergencyContactUpdateManyMutationInput, EmergencyContactUncheckedUpdateManyInput>
    /**
     * Filter which EmergencyContacts to update
     */
    where?: EmergencyContactWhereInput
    /**
     * Limit how many EmergencyContacts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmergencyContactIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EmergencyContact upsert
   */
  export type EmergencyContactUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyContact
     */
    select?: EmergencyContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmergencyContact
     */
    omit?: EmergencyContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmergencyContactInclude<ExtArgs> | null
    /**
     * The filter to search for the EmergencyContact to update in case it exists.
     */
    where: EmergencyContactWhereUniqueInput
    /**
     * In case the EmergencyContact found by the `where` argument doesn't exist, create a new EmergencyContact with this data.
     */
    create: XOR<EmergencyContactCreateInput, EmergencyContactUncheckedCreateInput>
    /**
     * In case the EmergencyContact was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmergencyContactUpdateInput, EmergencyContactUncheckedUpdateInput>
  }

  /**
   * EmergencyContact delete
   */
  export type EmergencyContactDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyContact
     */
    select?: EmergencyContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmergencyContact
     */
    omit?: EmergencyContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmergencyContactInclude<ExtArgs> | null
    /**
     * Filter which EmergencyContact to delete.
     */
    where: EmergencyContactWhereUniqueInput
  }

  /**
   * EmergencyContact deleteMany
   */
  export type EmergencyContactDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmergencyContacts to delete
     */
    where?: EmergencyContactWhereInput
    /**
     * Limit how many EmergencyContacts to delete.
     */
    limit?: number
  }

  /**
   * EmergencyContact without action
   */
  export type EmergencyContactDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyContact
     */
    select?: EmergencyContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmergencyContact
     */
    omit?: EmergencyContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmergencyContactInclude<ExtArgs> | null
  }


  /**
   * Model Todo
   */

  export type AggregateTodo = {
    _count: TodoCountAggregateOutputType | null
    _min: TodoMinAggregateOutputType | null
    _max: TodoMaxAggregateOutputType | null
  }

  export type TodoMinAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    description: string | null
    status: string | null
    completedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TodoMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    description: string | null
    status: string | null
    completedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TodoCountAggregateOutputType = {
    id: number
    userId: number
    title: number
    description: number
    status: number
    completedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TodoMinAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    description?: true
    status?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TodoMaxAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    description?: true
    status?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TodoCountAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    description?: true
    status?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TodoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Todo to aggregate.
     */
    where?: TodoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Todos to fetch.
     */
    orderBy?: TodoOrderByWithRelationInput | TodoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TodoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Todos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Todos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Todos
    **/
    _count?: true | TodoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TodoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TodoMaxAggregateInputType
  }

  export type GetTodoAggregateType<T extends TodoAggregateArgs> = {
        [P in keyof T & keyof AggregateTodo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTodo[P]>
      : GetScalarType<T[P], AggregateTodo[P]>
  }




  export type TodoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TodoWhereInput
    orderBy?: TodoOrderByWithAggregationInput | TodoOrderByWithAggregationInput[]
    by: TodoScalarFieldEnum[] | TodoScalarFieldEnum
    having?: TodoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TodoCountAggregateInputType | true
    _min?: TodoMinAggregateInputType
    _max?: TodoMaxAggregateInputType
  }

  export type TodoGroupByOutputType = {
    id: string
    userId: string
    title: string
    description: string | null
    status: string
    completedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: TodoCountAggregateOutputType | null
    _min: TodoMinAggregateOutputType | null
    _max: TodoMaxAggregateOutputType | null
  }

  type GetTodoGroupByPayload<T extends TodoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TodoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TodoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TodoGroupByOutputType[P]>
            : GetScalarType<T[P], TodoGroupByOutputType[P]>
        }
      >
    >


  export type TodoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["todo"]>

  export type TodoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["todo"]>

  export type TodoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["todo"]>

  export type TodoSelectScalar = {
    id?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TodoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "title" | "description" | "status" | "completedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["todo"]>
  export type TodoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TodoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TodoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TodoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Todo"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      title: string
      description: string | null
      status: string
      completedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["todo"]>
    composites: {}
  }

  type TodoGetPayload<S extends boolean | null | undefined | TodoDefaultArgs> = $Result.GetResult<Prisma.$TodoPayload, S>

  type TodoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TodoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TodoCountAggregateInputType | true
    }

  export interface TodoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Todo'], meta: { name: 'Todo' } }
    /**
     * Find zero or one Todo that matches the filter.
     * @param {TodoFindUniqueArgs} args - Arguments to find a Todo
     * @example
     * // Get one Todo
     * const todo = await prisma.todo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TodoFindUniqueArgs>(args: SelectSubset<T, TodoFindUniqueArgs<ExtArgs>>): Prisma__TodoClient<$Result.GetResult<Prisma.$TodoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Todo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TodoFindUniqueOrThrowArgs} args - Arguments to find a Todo
     * @example
     * // Get one Todo
     * const todo = await prisma.todo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TodoFindUniqueOrThrowArgs>(args: SelectSubset<T, TodoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TodoClient<$Result.GetResult<Prisma.$TodoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Todo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodoFindFirstArgs} args - Arguments to find a Todo
     * @example
     * // Get one Todo
     * const todo = await prisma.todo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TodoFindFirstArgs>(args?: SelectSubset<T, TodoFindFirstArgs<ExtArgs>>): Prisma__TodoClient<$Result.GetResult<Prisma.$TodoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Todo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodoFindFirstOrThrowArgs} args - Arguments to find a Todo
     * @example
     * // Get one Todo
     * const todo = await prisma.todo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TodoFindFirstOrThrowArgs>(args?: SelectSubset<T, TodoFindFirstOrThrowArgs<ExtArgs>>): Prisma__TodoClient<$Result.GetResult<Prisma.$TodoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Todos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Todos
     * const todos = await prisma.todo.findMany()
     * 
     * // Get first 10 Todos
     * const todos = await prisma.todo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const todoWithIdOnly = await prisma.todo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TodoFindManyArgs>(args?: SelectSubset<T, TodoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TodoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Todo.
     * @param {TodoCreateArgs} args - Arguments to create a Todo.
     * @example
     * // Create one Todo
     * const Todo = await prisma.todo.create({
     *   data: {
     *     // ... data to create a Todo
     *   }
     * })
     * 
     */
    create<T extends TodoCreateArgs>(args: SelectSubset<T, TodoCreateArgs<ExtArgs>>): Prisma__TodoClient<$Result.GetResult<Prisma.$TodoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Todos.
     * @param {TodoCreateManyArgs} args - Arguments to create many Todos.
     * @example
     * // Create many Todos
     * const todo = await prisma.todo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TodoCreateManyArgs>(args?: SelectSubset<T, TodoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Todos and returns the data saved in the database.
     * @param {TodoCreateManyAndReturnArgs} args - Arguments to create many Todos.
     * @example
     * // Create many Todos
     * const todo = await prisma.todo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Todos and only return the `id`
     * const todoWithIdOnly = await prisma.todo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TodoCreateManyAndReturnArgs>(args?: SelectSubset<T, TodoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TodoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Todo.
     * @param {TodoDeleteArgs} args - Arguments to delete one Todo.
     * @example
     * // Delete one Todo
     * const Todo = await prisma.todo.delete({
     *   where: {
     *     // ... filter to delete one Todo
     *   }
     * })
     * 
     */
    delete<T extends TodoDeleteArgs>(args: SelectSubset<T, TodoDeleteArgs<ExtArgs>>): Prisma__TodoClient<$Result.GetResult<Prisma.$TodoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Todo.
     * @param {TodoUpdateArgs} args - Arguments to update one Todo.
     * @example
     * // Update one Todo
     * const todo = await prisma.todo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TodoUpdateArgs>(args: SelectSubset<T, TodoUpdateArgs<ExtArgs>>): Prisma__TodoClient<$Result.GetResult<Prisma.$TodoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Todos.
     * @param {TodoDeleteManyArgs} args - Arguments to filter Todos to delete.
     * @example
     * // Delete a few Todos
     * const { count } = await prisma.todo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TodoDeleteManyArgs>(args?: SelectSubset<T, TodoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Todos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Todos
     * const todo = await prisma.todo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TodoUpdateManyArgs>(args: SelectSubset<T, TodoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Todos and returns the data updated in the database.
     * @param {TodoUpdateManyAndReturnArgs} args - Arguments to update many Todos.
     * @example
     * // Update many Todos
     * const todo = await prisma.todo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Todos and only return the `id`
     * const todoWithIdOnly = await prisma.todo.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TodoUpdateManyAndReturnArgs>(args: SelectSubset<T, TodoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TodoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Todo.
     * @param {TodoUpsertArgs} args - Arguments to update or create a Todo.
     * @example
     * // Update or create a Todo
     * const todo = await prisma.todo.upsert({
     *   create: {
     *     // ... data to create a Todo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Todo we want to update
     *   }
     * })
     */
    upsert<T extends TodoUpsertArgs>(args: SelectSubset<T, TodoUpsertArgs<ExtArgs>>): Prisma__TodoClient<$Result.GetResult<Prisma.$TodoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Todos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodoCountArgs} args - Arguments to filter Todos to count.
     * @example
     * // Count the number of Todos
     * const count = await prisma.todo.count({
     *   where: {
     *     // ... the filter for the Todos we want to count
     *   }
     * })
    **/
    count<T extends TodoCountArgs>(
      args?: Subset<T, TodoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TodoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Todo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TodoAggregateArgs>(args: Subset<T, TodoAggregateArgs>): Prisma.PrismaPromise<GetTodoAggregateType<T>>

    /**
     * Group by Todo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TodoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TodoGroupByArgs['orderBy'] }
        : { orderBy?: TodoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TodoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTodoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Todo model
   */
  readonly fields: TodoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Todo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TodoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Todo model
   */
  interface TodoFieldRefs {
    readonly id: FieldRef<"Todo", 'String'>
    readonly userId: FieldRef<"Todo", 'String'>
    readonly title: FieldRef<"Todo", 'String'>
    readonly description: FieldRef<"Todo", 'String'>
    readonly status: FieldRef<"Todo", 'String'>
    readonly completedAt: FieldRef<"Todo", 'DateTime'>
    readonly createdAt: FieldRef<"Todo", 'DateTime'>
    readonly updatedAt: FieldRef<"Todo", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Todo findUnique
   */
  export type TodoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Todo
     */
    select?: TodoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Todo
     */
    omit?: TodoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodoInclude<ExtArgs> | null
    /**
     * Filter, which Todo to fetch.
     */
    where: TodoWhereUniqueInput
  }

  /**
   * Todo findUniqueOrThrow
   */
  export type TodoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Todo
     */
    select?: TodoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Todo
     */
    omit?: TodoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodoInclude<ExtArgs> | null
    /**
     * Filter, which Todo to fetch.
     */
    where: TodoWhereUniqueInput
  }

  /**
   * Todo findFirst
   */
  export type TodoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Todo
     */
    select?: TodoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Todo
     */
    omit?: TodoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodoInclude<ExtArgs> | null
    /**
     * Filter, which Todo to fetch.
     */
    where?: TodoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Todos to fetch.
     */
    orderBy?: TodoOrderByWithRelationInput | TodoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Todos.
     */
    cursor?: TodoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Todos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Todos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Todos.
     */
    distinct?: TodoScalarFieldEnum | TodoScalarFieldEnum[]
  }

  /**
   * Todo findFirstOrThrow
   */
  export type TodoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Todo
     */
    select?: TodoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Todo
     */
    omit?: TodoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodoInclude<ExtArgs> | null
    /**
     * Filter, which Todo to fetch.
     */
    where?: TodoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Todos to fetch.
     */
    orderBy?: TodoOrderByWithRelationInput | TodoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Todos.
     */
    cursor?: TodoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Todos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Todos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Todos.
     */
    distinct?: TodoScalarFieldEnum | TodoScalarFieldEnum[]
  }

  /**
   * Todo findMany
   */
  export type TodoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Todo
     */
    select?: TodoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Todo
     */
    omit?: TodoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodoInclude<ExtArgs> | null
    /**
     * Filter, which Todos to fetch.
     */
    where?: TodoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Todos to fetch.
     */
    orderBy?: TodoOrderByWithRelationInput | TodoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Todos.
     */
    cursor?: TodoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Todos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Todos.
     */
    skip?: number
    distinct?: TodoScalarFieldEnum | TodoScalarFieldEnum[]
  }

  /**
   * Todo create
   */
  export type TodoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Todo
     */
    select?: TodoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Todo
     */
    omit?: TodoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodoInclude<ExtArgs> | null
    /**
     * The data needed to create a Todo.
     */
    data: XOR<TodoCreateInput, TodoUncheckedCreateInput>
  }

  /**
   * Todo createMany
   */
  export type TodoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Todos.
     */
    data: TodoCreateManyInput | TodoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Todo createManyAndReturn
   */
  export type TodoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Todo
     */
    select?: TodoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Todo
     */
    omit?: TodoOmit<ExtArgs> | null
    /**
     * The data used to create many Todos.
     */
    data: TodoCreateManyInput | TodoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Todo update
   */
  export type TodoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Todo
     */
    select?: TodoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Todo
     */
    omit?: TodoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodoInclude<ExtArgs> | null
    /**
     * The data needed to update a Todo.
     */
    data: XOR<TodoUpdateInput, TodoUncheckedUpdateInput>
    /**
     * Choose, which Todo to update.
     */
    where: TodoWhereUniqueInput
  }

  /**
   * Todo updateMany
   */
  export type TodoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Todos.
     */
    data: XOR<TodoUpdateManyMutationInput, TodoUncheckedUpdateManyInput>
    /**
     * Filter which Todos to update
     */
    where?: TodoWhereInput
    /**
     * Limit how many Todos to update.
     */
    limit?: number
  }

  /**
   * Todo updateManyAndReturn
   */
  export type TodoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Todo
     */
    select?: TodoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Todo
     */
    omit?: TodoOmit<ExtArgs> | null
    /**
     * The data used to update Todos.
     */
    data: XOR<TodoUpdateManyMutationInput, TodoUncheckedUpdateManyInput>
    /**
     * Filter which Todos to update
     */
    where?: TodoWhereInput
    /**
     * Limit how many Todos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Todo upsert
   */
  export type TodoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Todo
     */
    select?: TodoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Todo
     */
    omit?: TodoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodoInclude<ExtArgs> | null
    /**
     * The filter to search for the Todo to update in case it exists.
     */
    where: TodoWhereUniqueInput
    /**
     * In case the Todo found by the `where` argument doesn't exist, create a new Todo with this data.
     */
    create: XOR<TodoCreateInput, TodoUncheckedCreateInput>
    /**
     * In case the Todo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TodoUpdateInput, TodoUncheckedUpdateInput>
  }

  /**
   * Todo delete
   */
  export type TodoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Todo
     */
    select?: TodoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Todo
     */
    omit?: TodoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodoInclude<ExtArgs> | null
    /**
     * Filter which Todo to delete.
     */
    where: TodoWhereUniqueInput
  }

  /**
   * Todo deleteMany
   */
  export type TodoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Todos to delete
     */
    where?: TodoWhereInput
    /**
     * Limit how many Todos to delete.
     */
    limit?: number
  }

  /**
   * Todo without action
   */
  export type TodoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Todo
     */
    select?: TodoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Todo
     */
    omit?: TodoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodoInclude<ExtArgs> | null
  }


  /**
   * Model Event
   */

  export type AggregateEvent = {
    _count: EventCountAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  export type EventMinAggregateOutputType = {
    id: string | null
    title: string | null
    location: string | null
    startTime: Date | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventMaxAggregateOutputType = {
    id: string | null
    title: string | null
    location: string | null
    startTime: Date | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventCountAggregateOutputType = {
    id: number
    title: number
    location: number
    startTime: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EventMinAggregateInputType = {
    id?: true
    title?: true
    location?: true
    startTime?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventMaxAggregateInputType = {
    id?: true
    title?: true
    location?: true
    startTime?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventCountAggregateInputType = {
    id?: true
    title?: true
    location?: true
    startTime?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Event to aggregate.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Events
    **/
    _count?: true | EventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventMaxAggregateInputType
  }

  export type GetEventAggregateType<T extends EventAggregateArgs> = {
        [P in keyof T & keyof AggregateEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvent[P]>
      : GetScalarType<T[P], AggregateEvent[P]>
  }




  export type EventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
    orderBy?: EventOrderByWithAggregationInput | EventOrderByWithAggregationInput[]
    by: EventScalarFieldEnum[] | EventScalarFieldEnum
    having?: EventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventCountAggregateInputType | true
    _min?: EventMinAggregateInputType
    _max?: EventMaxAggregateInputType
  }

  export type EventGroupByOutputType = {
    id: string
    title: string
    location: string | null
    startTime: Date
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: EventCountAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  type GetEventGroupByPayload<T extends EventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventGroupByOutputType[P]>
            : GetScalarType<T[P], EventGroupByOutputType[P]>
        }
      >
    >


  export type EventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    location?: boolean
    startTime?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["event"]>

  export type EventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    location?: boolean
    startTime?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["event"]>

  export type EventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    location?: boolean
    startTime?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["event"]>

  export type EventSelectScalar = {
    id?: boolean
    title?: boolean
    location?: boolean
    startTime?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "location" | "startTime" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["event"]>

  export type $EventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Event"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      location: string | null
      startTime: Date
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["event"]>
    composites: {}
  }

  type EventGetPayload<S extends boolean | null | undefined | EventDefaultArgs> = $Result.GetResult<Prisma.$EventPayload, S>

  type EventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventCountAggregateInputType | true
    }

  export interface EventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Event'], meta: { name: 'Event' } }
    /**
     * Find zero or one Event that matches the filter.
     * @param {EventFindUniqueArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventFindUniqueArgs>(args: SelectSubset<T, EventFindUniqueArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Event that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventFindUniqueOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventFindUniqueOrThrowArgs>(args: SelectSubset<T, EventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventFindFirstArgs>(args?: SelectSubset<T, EventFindFirstArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventFindFirstOrThrowArgs>(args?: SelectSubset<T, EventFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.event.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.event.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventWithIdOnly = await prisma.event.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventFindManyArgs>(args?: SelectSubset<T, EventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Event.
     * @param {EventCreateArgs} args - Arguments to create a Event.
     * @example
     * // Create one Event
     * const Event = await prisma.event.create({
     *   data: {
     *     // ... data to create a Event
     *   }
     * })
     * 
     */
    create<T extends EventCreateArgs>(args: SelectSubset<T, EventCreateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Events.
     * @param {EventCreateManyArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventCreateManyArgs>(args?: SelectSubset<T, EventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Events and returns the data saved in the database.
     * @param {EventCreateManyAndReturnArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventCreateManyAndReturnArgs>(args?: SelectSubset<T, EventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Event.
     * @param {EventDeleteArgs} args - Arguments to delete one Event.
     * @example
     * // Delete one Event
     * const Event = await prisma.event.delete({
     *   where: {
     *     // ... filter to delete one Event
     *   }
     * })
     * 
     */
    delete<T extends EventDeleteArgs>(args: SelectSubset<T, EventDeleteArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Event.
     * @param {EventUpdateArgs} args - Arguments to update one Event.
     * @example
     * // Update one Event
     * const event = await prisma.event.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventUpdateArgs>(args: SelectSubset<T, EventUpdateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Events.
     * @param {EventDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.event.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventDeleteManyArgs>(args?: SelectSubset<T, EventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventUpdateManyArgs>(args: SelectSubset<T, EventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events and returns the data updated in the database.
     * @param {EventUpdateManyAndReturnArgs} args - Arguments to update many Events.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EventUpdateManyAndReturnArgs>(args: SelectSubset<T, EventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Event.
     * @param {EventUpsertArgs} args - Arguments to update or create a Event.
     * @example
     * // Update or create a Event
     * const event = await prisma.event.upsert({
     *   create: {
     *     // ... data to create a Event
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Event we want to update
     *   }
     * })
     */
    upsert<T extends EventUpsertArgs>(args: SelectSubset<T, EventUpsertArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.event.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends EventCountArgs>(
      args?: Subset<T, EventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EventAggregateArgs>(args: Subset<T, EventAggregateArgs>): Prisma.PrismaPromise<GetEventAggregateType<T>>

    /**
     * Group by Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventGroupByArgs['orderBy'] }
        : { orderBy?: EventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Event model
   */
  readonly fields: EventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Event.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Event model
   */
  interface EventFieldRefs {
    readonly id: FieldRef<"Event", 'String'>
    readonly title: FieldRef<"Event", 'String'>
    readonly location: FieldRef<"Event", 'String'>
    readonly startTime: FieldRef<"Event", 'DateTime'>
    readonly description: FieldRef<"Event", 'String'>
    readonly createdAt: FieldRef<"Event", 'DateTime'>
    readonly updatedAt: FieldRef<"Event", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Event findUnique
   */
  export type EventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findUniqueOrThrow
   */
  export type EventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findFirst
   */
  export type EventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findFirstOrThrow
   */
  export type EventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findMany
   */
  export type EventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event create
   */
  export type EventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data needed to create a Event.
     */
    data: XOR<EventCreateInput, EventUncheckedCreateInput>
  }

  /**
   * Event createMany
   */
  export type EventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Event createManyAndReturn
   */
  export type EventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Event update
   */
  export type EventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data needed to update a Event.
     */
    data: XOR<EventUpdateInput, EventUncheckedUpdateInput>
    /**
     * Choose, which Event to update.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event updateMany
   */
  export type EventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
  }

  /**
   * Event updateManyAndReturn
   */
  export type EventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
  }

  /**
   * Event upsert
   */
  export type EventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The filter to search for the Event to update in case it exists.
     */
    where: EventWhereUniqueInput
    /**
     * In case the Event found by the `where` argument doesn't exist, create a new Event with this data.
     */
    create: XOR<EventCreateInput, EventUncheckedCreateInput>
    /**
     * In case the Event was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventUpdateInput, EventUncheckedUpdateInput>
  }

  /**
   * Event delete
   */
  export type EventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Filter which Event to delete.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event deleteMany
   */
  export type EventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Events to delete
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to delete.
     */
    limit?: number
  }

  /**
   * Event without action
   */
  export type EventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const SchoolScalarFieldEnum: {
    id: 'id',
    schoolName: 'schoolName',
    description: 'description',
    icon: 'icon',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SchoolScalarFieldEnum = (typeof SchoolScalarFieldEnum)[keyof typeof SchoolScalarFieldEnum]


  export const DepartmentScalarFieldEnum: {
    id: 'id',
    departmentName: 'departmentName',
    description: 'description',
    icon: 'icon',
    schoolId: 'schoolId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DepartmentScalarFieldEnum = (typeof DepartmentScalarFieldEnum)[keyof typeof DepartmentScalarFieldEnum]


  export const School_HeadScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    schoolId: 'schoolId',
    assignedAt: 'assignedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type School_HeadScalarFieldEnum = (typeof School_HeadScalarFieldEnum)[keyof typeof School_HeadScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    passwordHash: 'passwordHash',
    role: 'role',
    isActive: 'isActive',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    phoneLocal: 'phoneLocal',
    addressLocal: 'addressLocal',
    city: 'city',
    country: 'country',
    phoneForeign: 'phoneForeign',
    addressForeign: 'addressForeign',
    cityForeign: 'cityForeign',
    countryForeign: 'countryForeign',
    dateOfBirth: 'dateOfBirth',
    isLocal: 'isLocal',
    employeeType: 'employeeType',
    academicPosition: 'academicPosition',
    administrativePosition: 'administrativePosition',
    status: 'status',
    departmentId: 'departmentId',
    schoolId: 'schoolId',
    baseSalary: 'baseSalary',
    bio: 'bio',
    profilePictureUrl: 'profilePictureUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const EmergencyContactScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    contactName: 'contactName',
    relationship: 'relationship',
    phonePrimary: 'phonePrimary',
    email: 'email'
  };

  export type EmergencyContactScalarFieldEnum = (typeof EmergencyContactScalarFieldEnum)[keyof typeof EmergencyContactScalarFieldEnum]


  export const TodoScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    title: 'title',
    description: 'description',
    status: 'status',
    completedAt: 'completedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TodoScalarFieldEnum = (typeof TodoScalarFieldEnum)[keyof typeof TodoScalarFieldEnum]


  export const EventScalarFieldEnum: {
    id: 'id',
    title: 'title',
    location: 'location',
    startTime: 'startTime',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EventScalarFieldEnum = (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'EmployeeType'
   */
  export type EnumEmployeeTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EmployeeType'>
    


  /**
   * Reference to a field of type 'EmployeeType[]'
   */
  export type ListEnumEmployeeTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EmployeeType[]'>
    


  /**
   * Reference to a field of type 'AcademicPosition'
   */
  export type EnumAcademicPositionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AcademicPosition'>
    


  /**
   * Reference to a field of type 'AcademicPosition[]'
   */
  export type ListEnumAcademicPositionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AcademicPosition[]'>
    


  /**
   * Reference to a field of type 'AdministrativePosition'
   */
  export type EnumAdministrativePositionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AdministrativePosition'>
    


  /**
   * Reference to a field of type 'AdministrativePosition[]'
   */
  export type ListEnumAdministrativePositionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AdministrativePosition[]'>
    


  /**
   * Reference to a field of type 'EmployeeStatus'
   */
  export type EnumEmployeeStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EmployeeStatus'>
    


  /**
   * Reference to a field of type 'EmployeeStatus[]'
   */
  export type ListEnumEmployeeStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EmployeeStatus[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type SchoolWhereInput = {
    AND?: SchoolWhereInput | SchoolWhereInput[]
    OR?: SchoolWhereInput[]
    NOT?: SchoolWhereInput | SchoolWhereInput[]
    id?: StringFilter<"School"> | string
    schoolName?: StringFilter<"School"> | string
    description?: StringNullableFilter<"School"> | string | null
    icon?: StringNullableFilter<"School"> | string | null
    createdAt?: DateTimeFilter<"School"> | Date | string
    updatedAt?: DateTimeFilter<"School"> | Date | string
    departments?: DepartmentListRelationFilter
    schoolHead?: XOR<School_HeadNullableScalarRelationFilter, School_HeadWhereInput> | null
    users?: UserListRelationFilter
  }

  export type SchoolOrderByWithRelationInput = {
    id?: SortOrder
    schoolName?: SortOrder
    description?: SortOrderInput | SortOrder
    icon?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    departments?: DepartmentOrderByRelationAggregateInput
    schoolHead?: School_HeadOrderByWithRelationInput
    users?: UserOrderByRelationAggregateInput
  }

  export type SchoolWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SchoolWhereInput | SchoolWhereInput[]
    OR?: SchoolWhereInput[]
    NOT?: SchoolWhereInput | SchoolWhereInput[]
    schoolName?: StringFilter<"School"> | string
    description?: StringNullableFilter<"School"> | string | null
    icon?: StringNullableFilter<"School"> | string | null
    createdAt?: DateTimeFilter<"School"> | Date | string
    updatedAt?: DateTimeFilter<"School"> | Date | string
    departments?: DepartmentListRelationFilter
    schoolHead?: XOR<School_HeadNullableScalarRelationFilter, School_HeadWhereInput> | null
    users?: UserListRelationFilter
  }, "id">

  export type SchoolOrderByWithAggregationInput = {
    id?: SortOrder
    schoolName?: SortOrder
    description?: SortOrderInput | SortOrder
    icon?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SchoolCountOrderByAggregateInput
    _max?: SchoolMaxOrderByAggregateInput
    _min?: SchoolMinOrderByAggregateInput
  }

  export type SchoolScalarWhereWithAggregatesInput = {
    AND?: SchoolScalarWhereWithAggregatesInput | SchoolScalarWhereWithAggregatesInput[]
    OR?: SchoolScalarWhereWithAggregatesInput[]
    NOT?: SchoolScalarWhereWithAggregatesInput | SchoolScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"School"> | string
    schoolName?: StringWithAggregatesFilter<"School"> | string
    description?: StringNullableWithAggregatesFilter<"School"> | string | null
    icon?: StringNullableWithAggregatesFilter<"School"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"School"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"School"> | Date | string
  }

  export type DepartmentWhereInput = {
    AND?: DepartmentWhereInput | DepartmentWhereInput[]
    OR?: DepartmentWhereInput[]
    NOT?: DepartmentWhereInput | DepartmentWhereInput[]
    id?: StringFilter<"Department"> | string
    departmentName?: StringFilter<"Department"> | string
    description?: StringNullableFilter<"Department"> | string | null
    icon?: StringNullableFilter<"Department"> | string | null
    schoolId?: StringFilter<"Department"> | string
    createdAt?: DateTimeFilter<"Department"> | Date | string
    updatedAt?: DateTimeFilter<"Department"> | Date | string
    school?: XOR<SchoolScalarRelationFilter, SchoolWhereInput>
    users?: UserListRelationFilter
  }

  export type DepartmentOrderByWithRelationInput = {
    id?: SortOrder
    departmentName?: SortOrder
    description?: SortOrderInput | SortOrder
    icon?: SortOrderInput | SortOrder
    schoolId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    school?: SchoolOrderByWithRelationInput
    users?: UserOrderByRelationAggregateInput
  }

  export type DepartmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DepartmentWhereInput | DepartmentWhereInput[]
    OR?: DepartmentWhereInput[]
    NOT?: DepartmentWhereInput | DepartmentWhereInput[]
    departmentName?: StringFilter<"Department"> | string
    description?: StringNullableFilter<"Department"> | string | null
    icon?: StringNullableFilter<"Department"> | string | null
    schoolId?: StringFilter<"Department"> | string
    createdAt?: DateTimeFilter<"Department"> | Date | string
    updatedAt?: DateTimeFilter<"Department"> | Date | string
    school?: XOR<SchoolScalarRelationFilter, SchoolWhereInput>
    users?: UserListRelationFilter
  }, "id">

  export type DepartmentOrderByWithAggregationInput = {
    id?: SortOrder
    departmentName?: SortOrder
    description?: SortOrderInput | SortOrder
    icon?: SortOrderInput | SortOrder
    schoolId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DepartmentCountOrderByAggregateInput
    _max?: DepartmentMaxOrderByAggregateInput
    _min?: DepartmentMinOrderByAggregateInput
  }

  export type DepartmentScalarWhereWithAggregatesInput = {
    AND?: DepartmentScalarWhereWithAggregatesInput | DepartmentScalarWhereWithAggregatesInput[]
    OR?: DepartmentScalarWhereWithAggregatesInput[]
    NOT?: DepartmentScalarWhereWithAggregatesInput | DepartmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Department"> | string
    departmentName?: StringWithAggregatesFilter<"Department"> | string
    description?: StringNullableWithAggregatesFilter<"Department"> | string | null
    icon?: StringNullableWithAggregatesFilter<"Department"> | string | null
    schoolId?: StringWithAggregatesFilter<"Department"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Department"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Department"> | Date | string
  }

  export type School_HeadWhereInput = {
    AND?: School_HeadWhereInput | School_HeadWhereInput[]
    OR?: School_HeadWhereInput[]
    NOT?: School_HeadWhereInput | School_HeadWhereInput[]
    id?: StringFilter<"School_Head"> | string
    userId?: StringFilter<"School_Head"> | string
    schoolId?: StringNullableFilter<"School_Head"> | string | null
    assignedAt?: DateTimeFilter<"School_Head"> | Date | string
    createdAt?: DateTimeFilter<"School_Head"> | Date | string
    updatedAt?: DateTimeFilter<"School_Head"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    school?: XOR<SchoolNullableScalarRelationFilter, SchoolWhereInput> | null
  }

  export type School_HeadOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    schoolId?: SortOrderInput | SortOrder
    assignedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    school?: SchoolOrderByWithRelationInput
  }

  export type School_HeadWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    schoolId?: string
    AND?: School_HeadWhereInput | School_HeadWhereInput[]
    OR?: School_HeadWhereInput[]
    NOT?: School_HeadWhereInput | School_HeadWhereInput[]
    assignedAt?: DateTimeFilter<"School_Head"> | Date | string
    createdAt?: DateTimeFilter<"School_Head"> | Date | string
    updatedAt?: DateTimeFilter<"School_Head"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    school?: XOR<SchoolNullableScalarRelationFilter, SchoolWhereInput> | null
  }, "id" | "userId" | "schoolId">

  export type School_HeadOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    schoolId?: SortOrderInput | SortOrder
    assignedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: School_HeadCountOrderByAggregateInput
    _max?: School_HeadMaxOrderByAggregateInput
    _min?: School_HeadMinOrderByAggregateInput
  }

  export type School_HeadScalarWhereWithAggregatesInput = {
    AND?: School_HeadScalarWhereWithAggregatesInput | School_HeadScalarWhereWithAggregatesInput[]
    OR?: School_HeadScalarWhereWithAggregatesInput[]
    NOT?: School_HeadScalarWhereWithAggregatesInput | School_HeadScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"School_Head"> | string
    userId?: StringWithAggregatesFilter<"School_Head"> | string
    schoolId?: StringNullableWithAggregatesFilter<"School_Head"> | string | null
    assignedAt?: DateTimeWithAggregatesFilter<"School_Head"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"School_Head"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"School_Head"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    isActive?: BoolFilter<"User"> | boolean
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    phoneLocal?: StringNullableFilter<"User"> | string | null
    addressLocal?: StringNullableFilter<"User"> | string | null
    city?: StringNullableFilter<"User"> | string | null
    country?: StringNullableFilter<"User"> | string | null
    phoneForeign?: StringNullableFilter<"User"> | string | null
    addressForeign?: StringNullableFilter<"User"> | string | null
    cityForeign?: StringNullableFilter<"User"> | string | null
    countryForeign?: StringNullableFilter<"User"> | string | null
    dateOfBirth?: DateTimeNullableFilter<"User"> | Date | string | null
    isLocal?: BoolFilter<"User"> | boolean
    employeeType?: EnumEmployeeTypeFilter<"User"> | $Enums.EmployeeType
    academicPosition?: EnumAcademicPositionNullableFilter<"User"> | $Enums.AcademicPosition | null
    administrativePosition?: EnumAdministrativePositionNullableFilter<"User"> | $Enums.AdministrativePosition | null
    status?: EnumEmployeeStatusFilter<"User"> | $Enums.EmployeeStatus
    departmentId?: StringNullableFilter<"User"> | string | null
    schoolId?: StringNullableFilter<"User"> | string | null
    baseSalary?: DecimalNullableFilter<"User"> | Decimal | DecimalJsLike | number | string | null
    bio?: StringNullableFilter<"User"> | string | null
    profilePictureUrl?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    school?: XOR<SchoolNullableScalarRelationFilter, SchoolWhereInput> | null
    department?: XOR<DepartmentNullableScalarRelationFilter, DepartmentWhereInput> | null
    emergencyContacts?: EmergencyContactListRelationFilter
    todos?: TodoListRelationFilter
    schoolHead?: XOR<School_HeadNullableScalarRelationFilter, School_HeadWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phoneLocal?: SortOrderInput | SortOrder
    addressLocal?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    phoneForeign?: SortOrderInput | SortOrder
    addressForeign?: SortOrderInput | SortOrder
    cityForeign?: SortOrderInput | SortOrder
    countryForeign?: SortOrderInput | SortOrder
    dateOfBirth?: SortOrderInput | SortOrder
    isLocal?: SortOrder
    employeeType?: SortOrder
    academicPosition?: SortOrderInput | SortOrder
    administrativePosition?: SortOrderInput | SortOrder
    status?: SortOrder
    departmentId?: SortOrderInput | SortOrder
    schoolId?: SortOrderInput | SortOrder
    baseSalary?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    profilePictureUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    school?: SchoolOrderByWithRelationInput
    department?: DepartmentOrderByWithRelationInput
    emergencyContacts?: EmergencyContactOrderByRelationAggregateInput
    todos?: TodoOrderByRelationAggregateInput
    schoolHead?: School_HeadOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    passwordHash?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    isActive?: BoolFilter<"User"> | boolean
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    phoneLocal?: StringNullableFilter<"User"> | string | null
    addressLocal?: StringNullableFilter<"User"> | string | null
    city?: StringNullableFilter<"User"> | string | null
    country?: StringNullableFilter<"User"> | string | null
    phoneForeign?: StringNullableFilter<"User"> | string | null
    addressForeign?: StringNullableFilter<"User"> | string | null
    cityForeign?: StringNullableFilter<"User"> | string | null
    countryForeign?: StringNullableFilter<"User"> | string | null
    dateOfBirth?: DateTimeNullableFilter<"User"> | Date | string | null
    isLocal?: BoolFilter<"User"> | boolean
    employeeType?: EnumEmployeeTypeFilter<"User"> | $Enums.EmployeeType
    academicPosition?: EnumAcademicPositionNullableFilter<"User"> | $Enums.AcademicPosition | null
    administrativePosition?: EnumAdministrativePositionNullableFilter<"User"> | $Enums.AdministrativePosition | null
    status?: EnumEmployeeStatusFilter<"User"> | $Enums.EmployeeStatus
    departmentId?: StringNullableFilter<"User"> | string | null
    schoolId?: StringNullableFilter<"User"> | string | null
    baseSalary?: DecimalNullableFilter<"User"> | Decimal | DecimalJsLike | number | string | null
    bio?: StringNullableFilter<"User"> | string | null
    profilePictureUrl?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    school?: XOR<SchoolNullableScalarRelationFilter, SchoolWhereInput> | null
    department?: XOR<DepartmentNullableScalarRelationFilter, DepartmentWhereInput> | null
    emergencyContacts?: EmergencyContactListRelationFilter
    todos?: TodoListRelationFilter
    schoolHead?: XOR<School_HeadNullableScalarRelationFilter, School_HeadWhereInput> | null
  }, "id" | "username" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phoneLocal?: SortOrderInput | SortOrder
    addressLocal?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    phoneForeign?: SortOrderInput | SortOrder
    addressForeign?: SortOrderInput | SortOrder
    cityForeign?: SortOrderInput | SortOrder
    countryForeign?: SortOrderInput | SortOrder
    dateOfBirth?: SortOrderInput | SortOrder
    isLocal?: SortOrder
    employeeType?: SortOrder
    academicPosition?: SortOrderInput | SortOrder
    administrativePosition?: SortOrderInput | SortOrder
    status?: SortOrder
    departmentId?: SortOrderInput | SortOrder
    schoolId?: SortOrderInput | SortOrder
    baseSalary?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    profilePictureUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    phoneLocal?: StringNullableWithAggregatesFilter<"User"> | string | null
    addressLocal?: StringNullableWithAggregatesFilter<"User"> | string | null
    city?: StringNullableWithAggregatesFilter<"User"> | string | null
    country?: StringNullableWithAggregatesFilter<"User"> | string | null
    phoneForeign?: StringNullableWithAggregatesFilter<"User"> | string | null
    addressForeign?: StringNullableWithAggregatesFilter<"User"> | string | null
    cityForeign?: StringNullableWithAggregatesFilter<"User"> | string | null
    countryForeign?: StringNullableWithAggregatesFilter<"User"> | string | null
    dateOfBirth?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    isLocal?: BoolWithAggregatesFilter<"User"> | boolean
    employeeType?: EnumEmployeeTypeWithAggregatesFilter<"User"> | $Enums.EmployeeType
    academicPosition?: EnumAcademicPositionNullableWithAggregatesFilter<"User"> | $Enums.AcademicPosition | null
    administrativePosition?: EnumAdministrativePositionNullableWithAggregatesFilter<"User"> | $Enums.AdministrativePosition | null
    status?: EnumEmployeeStatusWithAggregatesFilter<"User"> | $Enums.EmployeeStatus
    departmentId?: StringNullableWithAggregatesFilter<"User"> | string | null
    schoolId?: StringNullableWithAggregatesFilter<"User"> | string | null
    baseSalary?: DecimalNullableWithAggregatesFilter<"User"> | Decimal | DecimalJsLike | number | string | null
    bio?: StringNullableWithAggregatesFilter<"User"> | string | null
    profilePictureUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type EmergencyContactWhereInput = {
    AND?: EmergencyContactWhereInput | EmergencyContactWhereInput[]
    OR?: EmergencyContactWhereInput[]
    NOT?: EmergencyContactWhereInput | EmergencyContactWhereInput[]
    id?: StringFilter<"EmergencyContact"> | string
    userId?: StringFilter<"EmergencyContact"> | string
    contactName?: StringFilter<"EmergencyContact"> | string
    relationship?: StringNullableFilter<"EmergencyContact"> | string | null
    phonePrimary?: StringFilter<"EmergencyContact"> | string
    email?: StringNullableFilter<"EmergencyContact"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type EmergencyContactOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    contactName?: SortOrder
    relationship?: SortOrderInput | SortOrder
    phonePrimary?: SortOrder
    email?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type EmergencyContactWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EmergencyContactWhereInput | EmergencyContactWhereInput[]
    OR?: EmergencyContactWhereInput[]
    NOT?: EmergencyContactWhereInput | EmergencyContactWhereInput[]
    userId?: StringFilter<"EmergencyContact"> | string
    contactName?: StringFilter<"EmergencyContact"> | string
    relationship?: StringNullableFilter<"EmergencyContact"> | string | null
    phonePrimary?: StringFilter<"EmergencyContact"> | string
    email?: StringNullableFilter<"EmergencyContact"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type EmergencyContactOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    contactName?: SortOrder
    relationship?: SortOrderInput | SortOrder
    phonePrimary?: SortOrder
    email?: SortOrderInput | SortOrder
    _count?: EmergencyContactCountOrderByAggregateInput
    _max?: EmergencyContactMaxOrderByAggregateInput
    _min?: EmergencyContactMinOrderByAggregateInput
  }

  export type EmergencyContactScalarWhereWithAggregatesInput = {
    AND?: EmergencyContactScalarWhereWithAggregatesInput | EmergencyContactScalarWhereWithAggregatesInput[]
    OR?: EmergencyContactScalarWhereWithAggregatesInput[]
    NOT?: EmergencyContactScalarWhereWithAggregatesInput | EmergencyContactScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EmergencyContact"> | string
    userId?: StringWithAggregatesFilter<"EmergencyContact"> | string
    contactName?: StringWithAggregatesFilter<"EmergencyContact"> | string
    relationship?: StringNullableWithAggregatesFilter<"EmergencyContact"> | string | null
    phonePrimary?: StringWithAggregatesFilter<"EmergencyContact"> | string
    email?: StringNullableWithAggregatesFilter<"EmergencyContact"> | string | null
  }

  export type TodoWhereInput = {
    AND?: TodoWhereInput | TodoWhereInput[]
    OR?: TodoWhereInput[]
    NOT?: TodoWhereInput | TodoWhereInput[]
    id?: StringFilter<"Todo"> | string
    userId?: StringFilter<"Todo"> | string
    title?: StringFilter<"Todo"> | string
    description?: StringNullableFilter<"Todo"> | string | null
    status?: StringFilter<"Todo"> | string
    completedAt?: DateTimeNullableFilter<"Todo"> | Date | string | null
    createdAt?: DateTimeFilter<"Todo"> | Date | string
    updatedAt?: DateTimeFilter<"Todo"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TodoOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type TodoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TodoWhereInput | TodoWhereInput[]
    OR?: TodoWhereInput[]
    NOT?: TodoWhereInput | TodoWhereInput[]
    userId?: StringFilter<"Todo"> | string
    title?: StringFilter<"Todo"> | string
    description?: StringNullableFilter<"Todo"> | string | null
    status?: StringFilter<"Todo"> | string
    completedAt?: DateTimeNullableFilter<"Todo"> | Date | string | null
    createdAt?: DateTimeFilter<"Todo"> | Date | string
    updatedAt?: DateTimeFilter<"Todo"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type TodoOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TodoCountOrderByAggregateInput
    _max?: TodoMaxOrderByAggregateInput
    _min?: TodoMinOrderByAggregateInput
  }

  export type TodoScalarWhereWithAggregatesInput = {
    AND?: TodoScalarWhereWithAggregatesInput | TodoScalarWhereWithAggregatesInput[]
    OR?: TodoScalarWhereWithAggregatesInput[]
    NOT?: TodoScalarWhereWithAggregatesInput | TodoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Todo"> | string
    userId?: StringWithAggregatesFilter<"Todo"> | string
    title?: StringWithAggregatesFilter<"Todo"> | string
    description?: StringNullableWithAggregatesFilter<"Todo"> | string | null
    status?: StringWithAggregatesFilter<"Todo"> | string
    completedAt?: DateTimeNullableWithAggregatesFilter<"Todo"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Todo"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Todo"> | Date | string
  }

  export type EventWhereInput = {
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    id?: StringFilter<"Event"> | string
    title?: StringFilter<"Event"> | string
    location?: StringNullableFilter<"Event"> | string | null
    startTime?: DateTimeFilter<"Event"> | Date | string
    description?: StringNullableFilter<"Event"> | string | null
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
  }

  export type EventOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    location?: SortOrderInput | SortOrder
    startTime?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    title?: StringFilter<"Event"> | string
    location?: StringNullableFilter<"Event"> | string | null
    startTime?: DateTimeFilter<"Event"> | Date | string
    description?: StringNullableFilter<"Event"> | string | null
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
  }, "id">

  export type EventOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    location?: SortOrderInput | SortOrder
    startTime?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EventCountOrderByAggregateInput
    _max?: EventMaxOrderByAggregateInput
    _min?: EventMinOrderByAggregateInput
  }

  export type EventScalarWhereWithAggregatesInput = {
    AND?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    OR?: EventScalarWhereWithAggregatesInput[]
    NOT?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Event"> | string
    title?: StringWithAggregatesFilter<"Event"> | string
    location?: StringNullableWithAggregatesFilter<"Event"> | string | null
    startTime?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    description?: StringNullableWithAggregatesFilter<"Event"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
  }

  export type SchoolCreateInput = {
    id?: string
    schoolName: string
    description?: string | null
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    departments?: DepartmentCreateNestedManyWithoutSchoolInput
    schoolHead?: School_HeadCreateNestedOneWithoutSchoolInput
    users?: UserCreateNestedManyWithoutSchoolInput
  }

  export type SchoolUncheckedCreateInput = {
    id?: string
    schoolName: string
    description?: string | null
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    departments?: DepartmentUncheckedCreateNestedManyWithoutSchoolInput
    schoolHead?: School_HeadUncheckedCreateNestedOneWithoutSchoolInput
    users?: UserUncheckedCreateNestedManyWithoutSchoolInput
  }

  export type SchoolUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    schoolName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    departments?: DepartmentUpdateManyWithoutSchoolNestedInput
    schoolHead?: School_HeadUpdateOneWithoutSchoolNestedInput
    users?: UserUpdateManyWithoutSchoolNestedInput
  }

  export type SchoolUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    schoolName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    departments?: DepartmentUncheckedUpdateManyWithoutSchoolNestedInput
    schoolHead?: School_HeadUncheckedUpdateOneWithoutSchoolNestedInput
    users?: UserUncheckedUpdateManyWithoutSchoolNestedInput
  }

  export type SchoolCreateManyInput = {
    id?: string
    schoolName: string
    description?: string | null
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SchoolUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    schoolName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SchoolUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    schoolName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepartmentCreateInput = {
    id?: string
    departmentName: string
    description?: string | null
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    school: SchoolCreateNestedOneWithoutDepartmentsInput
    users?: UserCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUncheckedCreateInput = {
    id?: string
    departmentName: string
    description?: string | null
    icon?: string | null
    schoolId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    departmentName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    school?: SchoolUpdateOneRequiredWithoutDepartmentsNestedInput
    users?: UserUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    departmentName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    schoolId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentCreateManyInput = {
    id?: string
    departmentName: string
    description?: string | null
    icon?: string | null
    schoolId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DepartmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    departmentName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepartmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    departmentName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    schoolId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type School_HeadCreateInput = {
    id?: string
    assignedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSchoolHeadInput
    school?: SchoolCreateNestedOneWithoutSchoolHeadInput
  }

  export type School_HeadUncheckedCreateInput = {
    id?: string
    userId: string
    schoolId?: string | null
    assignedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type School_HeadUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSchoolHeadNestedInput
    school?: SchoolUpdateOneWithoutSchoolHeadNestedInput
  }

  export type School_HeadUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    schoolId?: NullableStringFieldUpdateOperationsInput | string | null
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type School_HeadCreateManyInput = {
    id?: string
    userId: string
    schoolId?: string | null
    assignedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type School_HeadUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type School_HeadUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    schoolId?: NullableStringFieldUpdateOperationsInput | string | null
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    username: string
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    firstName: string
    lastName: string
    email: string
    phoneLocal?: string | null
    addressLocal?: string | null
    city?: string | null
    country?: string | null
    phoneForeign?: string | null
    addressForeign?: string | null
    cityForeign?: string | null
    countryForeign?: string | null
    dateOfBirth?: Date | string | null
    isLocal?: boolean
    employeeType: $Enums.EmployeeType
    academicPosition?: $Enums.AcademicPosition | null
    administrativePosition?: $Enums.AdministrativePosition | null
    status?: $Enums.EmployeeStatus
    baseSalary?: Decimal | DecimalJsLike | number | string | null
    bio?: string | null
    profilePictureUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    school?: SchoolCreateNestedOneWithoutUsersInput
    department?: DepartmentCreateNestedOneWithoutUsersInput
    emergencyContacts?: EmergencyContactCreateNestedManyWithoutUserInput
    todos?: TodoCreateNestedManyWithoutUserInput
    schoolHead?: School_HeadCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username: string
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    firstName: string
    lastName: string
    email: string
    phoneLocal?: string | null
    addressLocal?: string | null
    city?: string | null
    country?: string | null
    phoneForeign?: string | null
    addressForeign?: string | null
    cityForeign?: string | null
    countryForeign?: string | null
    dateOfBirth?: Date | string | null
    isLocal?: boolean
    employeeType: $Enums.EmployeeType
    academicPosition?: $Enums.AcademicPosition | null
    administrativePosition?: $Enums.AdministrativePosition | null
    status?: $Enums.EmployeeStatus
    departmentId?: string | null
    schoolId?: string | null
    baseSalary?: Decimal | DecimalJsLike | number | string | null
    bio?: string | null
    profilePictureUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    emergencyContacts?: EmergencyContactUncheckedCreateNestedManyWithoutUserInput
    todos?: TodoUncheckedCreateNestedManyWithoutUserInput
    schoolHead?: School_HeadUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneLocal?: NullableStringFieldUpdateOperationsInput | string | null
    addressLocal?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    phoneForeign?: NullableStringFieldUpdateOperationsInput | string | null
    addressForeign?: NullableStringFieldUpdateOperationsInput | string | null
    cityForeign?: NullableStringFieldUpdateOperationsInput | string | null
    countryForeign?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isLocal?: BoolFieldUpdateOperationsInput | boolean
    employeeType?: EnumEmployeeTypeFieldUpdateOperationsInput | $Enums.EmployeeType
    academicPosition?: NullableEnumAcademicPositionFieldUpdateOperationsInput | $Enums.AcademicPosition | null
    administrativePosition?: NullableEnumAdministrativePositionFieldUpdateOperationsInput | $Enums.AdministrativePosition | null
    status?: EnumEmployeeStatusFieldUpdateOperationsInput | $Enums.EmployeeStatus
    baseSalary?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profilePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    school?: SchoolUpdateOneWithoutUsersNestedInput
    department?: DepartmentUpdateOneWithoutUsersNestedInput
    emergencyContacts?: EmergencyContactUpdateManyWithoutUserNestedInput
    todos?: TodoUpdateManyWithoutUserNestedInput
    schoolHead?: School_HeadUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneLocal?: NullableStringFieldUpdateOperationsInput | string | null
    addressLocal?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    phoneForeign?: NullableStringFieldUpdateOperationsInput | string | null
    addressForeign?: NullableStringFieldUpdateOperationsInput | string | null
    cityForeign?: NullableStringFieldUpdateOperationsInput | string | null
    countryForeign?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isLocal?: BoolFieldUpdateOperationsInput | boolean
    employeeType?: EnumEmployeeTypeFieldUpdateOperationsInput | $Enums.EmployeeType
    academicPosition?: NullableEnumAcademicPositionFieldUpdateOperationsInput | $Enums.AcademicPosition | null
    administrativePosition?: NullableEnumAdministrativePositionFieldUpdateOperationsInput | $Enums.AdministrativePosition | null
    status?: EnumEmployeeStatusFieldUpdateOperationsInput | $Enums.EmployeeStatus
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    schoolId?: NullableStringFieldUpdateOperationsInput | string | null
    baseSalary?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profilePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emergencyContacts?: EmergencyContactUncheckedUpdateManyWithoutUserNestedInput
    todos?: TodoUncheckedUpdateManyWithoutUserNestedInput
    schoolHead?: School_HeadUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    username: string
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    firstName: string
    lastName: string
    email: string
    phoneLocal?: string | null
    addressLocal?: string | null
    city?: string | null
    country?: string | null
    phoneForeign?: string | null
    addressForeign?: string | null
    cityForeign?: string | null
    countryForeign?: string | null
    dateOfBirth?: Date | string | null
    isLocal?: boolean
    employeeType: $Enums.EmployeeType
    academicPosition?: $Enums.AcademicPosition | null
    administrativePosition?: $Enums.AdministrativePosition | null
    status?: $Enums.EmployeeStatus
    departmentId?: string | null
    schoolId?: string | null
    baseSalary?: Decimal | DecimalJsLike | number | string | null
    bio?: string | null
    profilePictureUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneLocal?: NullableStringFieldUpdateOperationsInput | string | null
    addressLocal?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    phoneForeign?: NullableStringFieldUpdateOperationsInput | string | null
    addressForeign?: NullableStringFieldUpdateOperationsInput | string | null
    cityForeign?: NullableStringFieldUpdateOperationsInput | string | null
    countryForeign?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isLocal?: BoolFieldUpdateOperationsInput | boolean
    employeeType?: EnumEmployeeTypeFieldUpdateOperationsInput | $Enums.EmployeeType
    academicPosition?: NullableEnumAcademicPositionFieldUpdateOperationsInput | $Enums.AcademicPosition | null
    administrativePosition?: NullableEnumAdministrativePositionFieldUpdateOperationsInput | $Enums.AdministrativePosition | null
    status?: EnumEmployeeStatusFieldUpdateOperationsInput | $Enums.EmployeeStatus
    baseSalary?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profilePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneLocal?: NullableStringFieldUpdateOperationsInput | string | null
    addressLocal?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    phoneForeign?: NullableStringFieldUpdateOperationsInput | string | null
    addressForeign?: NullableStringFieldUpdateOperationsInput | string | null
    cityForeign?: NullableStringFieldUpdateOperationsInput | string | null
    countryForeign?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isLocal?: BoolFieldUpdateOperationsInput | boolean
    employeeType?: EnumEmployeeTypeFieldUpdateOperationsInput | $Enums.EmployeeType
    academicPosition?: NullableEnumAcademicPositionFieldUpdateOperationsInput | $Enums.AcademicPosition | null
    administrativePosition?: NullableEnumAdministrativePositionFieldUpdateOperationsInput | $Enums.AdministrativePosition | null
    status?: EnumEmployeeStatusFieldUpdateOperationsInput | $Enums.EmployeeStatus
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    schoolId?: NullableStringFieldUpdateOperationsInput | string | null
    baseSalary?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profilePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmergencyContactCreateInput = {
    id?: string
    contactName: string
    relationship?: string | null
    phonePrimary: string
    email?: string | null
    user: UserCreateNestedOneWithoutEmergencyContactsInput
  }

  export type EmergencyContactUncheckedCreateInput = {
    id?: string
    userId: string
    contactName: string
    relationship?: string | null
    phonePrimary: string
    email?: string | null
  }

  export type EmergencyContactUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    contactName?: StringFieldUpdateOperationsInput | string
    relationship?: NullableStringFieldUpdateOperationsInput | string | null
    phonePrimary?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutEmergencyContactsNestedInput
  }

  export type EmergencyContactUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    contactName?: StringFieldUpdateOperationsInput | string
    relationship?: NullableStringFieldUpdateOperationsInput | string | null
    phonePrimary?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmergencyContactCreateManyInput = {
    id?: string
    userId: string
    contactName: string
    relationship?: string | null
    phonePrimary: string
    email?: string | null
  }

  export type EmergencyContactUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    contactName?: StringFieldUpdateOperationsInput | string
    relationship?: NullableStringFieldUpdateOperationsInput | string | null
    phonePrimary?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmergencyContactUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    contactName?: StringFieldUpdateOperationsInput | string
    relationship?: NullableStringFieldUpdateOperationsInput | string | null
    phonePrimary?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TodoCreateInput = {
    id?: string
    title: string
    description?: string | null
    status?: string
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTodosInput
  }

  export type TodoUncheckedCreateInput = {
    id?: string
    userId: string
    title: string
    description?: string | null
    status?: string
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TodoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTodosNestedInput
  }

  export type TodoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TodoCreateManyInput = {
    id?: string
    userId: string
    title: string
    description?: string | null
    status?: string
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TodoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TodoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventCreateInput = {
    id?: string
    title: string
    location?: string | null
    startTime: Date | string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventUncheckedCreateInput = {
    id?: string
    title: string
    location?: string | null
    startTime: Date | string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventCreateManyInput = {
    id?: string
    title: string
    location?: string | null
    startTime: Date | string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DepartmentListRelationFilter = {
    every?: DepartmentWhereInput
    some?: DepartmentWhereInput
    none?: DepartmentWhereInput
  }

  export type School_HeadNullableScalarRelationFilter = {
    is?: School_HeadWhereInput | null
    isNot?: School_HeadWhereInput | null
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DepartmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SchoolCountOrderByAggregateInput = {
    id?: SortOrder
    schoolName?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SchoolMaxOrderByAggregateInput = {
    id?: SortOrder
    schoolName?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SchoolMinOrderByAggregateInput = {
    id?: SortOrder
    schoolName?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type SchoolScalarRelationFilter = {
    is?: SchoolWhereInput
    isNot?: SchoolWhereInput
  }

  export type DepartmentCountOrderByAggregateInput = {
    id?: SortOrder
    departmentName?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    schoolId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DepartmentMaxOrderByAggregateInput = {
    id?: SortOrder
    departmentName?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    schoolId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DepartmentMinOrderByAggregateInput = {
    id?: SortOrder
    departmentName?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    schoolId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SchoolNullableScalarRelationFilter = {
    is?: SchoolWhereInput | null
    isNot?: SchoolWhereInput | null
  }

  export type School_HeadCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    schoolId?: SortOrder
    assignedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type School_HeadMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    schoolId?: SortOrder
    assignedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type School_HeadMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    schoolId?: SortOrder
    assignedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumEmployeeTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.EmployeeType | EnumEmployeeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EmployeeType[] | ListEnumEmployeeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmployeeType[] | ListEnumEmployeeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEmployeeTypeFilter<$PrismaModel> | $Enums.EmployeeType
  }

  export type EnumAcademicPositionNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.AcademicPosition | EnumAcademicPositionFieldRefInput<$PrismaModel> | null
    in?: $Enums.AcademicPosition[] | ListEnumAcademicPositionFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.AcademicPosition[] | ListEnumAcademicPositionFieldRefInput<$PrismaModel> | null
    not?: NestedEnumAcademicPositionNullableFilter<$PrismaModel> | $Enums.AcademicPosition | null
  }

  export type EnumAdministrativePositionNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.AdministrativePosition | EnumAdministrativePositionFieldRefInput<$PrismaModel> | null
    in?: $Enums.AdministrativePosition[] | ListEnumAdministrativePositionFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.AdministrativePosition[] | ListEnumAdministrativePositionFieldRefInput<$PrismaModel> | null
    not?: NestedEnumAdministrativePositionNullableFilter<$PrismaModel> | $Enums.AdministrativePosition | null
  }

  export type EnumEmployeeStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EmployeeStatus | EnumEmployeeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EmployeeStatus[] | ListEnumEmployeeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmployeeStatus[] | ListEnumEmployeeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEmployeeStatusFilter<$PrismaModel> | $Enums.EmployeeStatus
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type DepartmentNullableScalarRelationFilter = {
    is?: DepartmentWhereInput | null
    isNot?: DepartmentWhereInput | null
  }

  export type EmergencyContactListRelationFilter = {
    every?: EmergencyContactWhereInput
    some?: EmergencyContactWhereInput
    none?: EmergencyContactWhereInput
  }

  export type TodoListRelationFilter = {
    every?: TodoWhereInput
    some?: TodoWhereInput
    none?: TodoWhereInput
  }

  export type EmergencyContactOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TodoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phoneLocal?: SortOrder
    addressLocal?: SortOrder
    city?: SortOrder
    country?: SortOrder
    phoneForeign?: SortOrder
    addressForeign?: SortOrder
    cityForeign?: SortOrder
    countryForeign?: SortOrder
    dateOfBirth?: SortOrder
    isLocal?: SortOrder
    employeeType?: SortOrder
    academicPosition?: SortOrder
    administrativePosition?: SortOrder
    status?: SortOrder
    departmentId?: SortOrder
    schoolId?: SortOrder
    baseSalary?: SortOrder
    bio?: SortOrder
    profilePictureUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    baseSalary?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phoneLocal?: SortOrder
    addressLocal?: SortOrder
    city?: SortOrder
    country?: SortOrder
    phoneForeign?: SortOrder
    addressForeign?: SortOrder
    cityForeign?: SortOrder
    countryForeign?: SortOrder
    dateOfBirth?: SortOrder
    isLocal?: SortOrder
    employeeType?: SortOrder
    academicPosition?: SortOrder
    administrativePosition?: SortOrder
    status?: SortOrder
    departmentId?: SortOrder
    schoolId?: SortOrder
    baseSalary?: SortOrder
    bio?: SortOrder
    profilePictureUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phoneLocal?: SortOrder
    addressLocal?: SortOrder
    city?: SortOrder
    country?: SortOrder
    phoneForeign?: SortOrder
    addressForeign?: SortOrder
    cityForeign?: SortOrder
    countryForeign?: SortOrder
    dateOfBirth?: SortOrder
    isLocal?: SortOrder
    employeeType?: SortOrder
    academicPosition?: SortOrder
    administrativePosition?: SortOrder
    status?: SortOrder
    departmentId?: SortOrder
    schoolId?: SortOrder
    baseSalary?: SortOrder
    bio?: SortOrder
    profilePictureUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    baseSalary?: SortOrder
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumEmployeeTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EmployeeType | EnumEmployeeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EmployeeType[] | ListEnumEmployeeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmployeeType[] | ListEnumEmployeeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEmployeeTypeWithAggregatesFilter<$PrismaModel> | $Enums.EmployeeType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEmployeeTypeFilter<$PrismaModel>
    _max?: NestedEnumEmployeeTypeFilter<$PrismaModel>
  }

  export type EnumAcademicPositionNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AcademicPosition | EnumAcademicPositionFieldRefInput<$PrismaModel> | null
    in?: $Enums.AcademicPosition[] | ListEnumAcademicPositionFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.AcademicPosition[] | ListEnumAcademicPositionFieldRefInput<$PrismaModel> | null
    not?: NestedEnumAcademicPositionNullableWithAggregatesFilter<$PrismaModel> | $Enums.AcademicPosition | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumAcademicPositionNullableFilter<$PrismaModel>
    _max?: NestedEnumAcademicPositionNullableFilter<$PrismaModel>
  }

  export type EnumAdministrativePositionNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AdministrativePosition | EnumAdministrativePositionFieldRefInput<$PrismaModel> | null
    in?: $Enums.AdministrativePosition[] | ListEnumAdministrativePositionFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.AdministrativePosition[] | ListEnumAdministrativePositionFieldRefInput<$PrismaModel> | null
    not?: NestedEnumAdministrativePositionNullableWithAggregatesFilter<$PrismaModel> | $Enums.AdministrativePosition | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumAdministrativePositionNullableFilter<$PrismaModel>
    _max?: NestedEnumAdministrativePositionNullableFilter<$PrismaModel>
  }

  export type EnumEmployeeStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EmployeeStatus | EnumEmployeeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EmployeeStatus[] | ListEnumEmployeeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmployeeStatus[] | ListEnumEmployeeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEmployeeStatusWithAggregatesFilter<$PrismaModel> | $Enums.EmployeeStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEmployeeStatusFilter<$PrismaModel>
    _max?: NestedEnumEmployeeStatusFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type EmergencyContactCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    contactName?: SortOrder
    relationship?: SortOrder
    phonePrimary?: SortOrder
    email?: SortOrder
  }

  export type EmergencyContactMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    contactName?: SortOrder
    relationship?: SortOrder
    phonePrimary?: SortOrder
    email?: SortOrder
  }

  export type EmergencyContactMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    contactName?: SortOrder
    relationship?: SortOrder
    phonePrimary?: SortOrder
    email?: SortOrder
  }

  export type TodoCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TodoMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TodoMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    location?: SortOrder
    startTime?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    location?: SortOrder
    startTime?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    location?: SortOrder
    startTime?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DepartmentCreateNestedManyWithoutSchoolInput = {
    create?: XOR<DepartmentCreateWithoutSchoolInput, DepartmentUncheckedCreateWithoutSchoolInput> | DepartmentCreateWithoutSchoolInput[] | DepartmentUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: DepartmentCreateOrConnectWithoutSchoolInput | DepartmentCreateOrConnectWithoutSchoolInput[]
    createMany?: DepartmentCreateManySchoolInputEnvelope
    connect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
  }

  export type School_HeadCreateNestedOneWithoutSchoolInput = {
    create?: XOR<School_HeadCreateWithoutSchoolInput, School_HeadUncheckedCreateWithoutSchoolInput>
    connectOrCreate?: School_HeadCreateOrConnectWithoutSchoolInput
    connect?: School_HeadWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutSchoolInput = {
    create?: XOR<UserCreateWithoutSchoolInput, UserUncheckedCreateWithoutSchoolInput> | UserCreateWithoutSchoolInput[] | UserUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: UserCreateOrConnectWithoutSchoolInput | UserCreateOrConnectWithoutSchoolInput[]
    createMany?: UserCreateManySchoolInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type DepartmentUncheckedCreateNestedManyWithoutSchoolInput = {
    create?: XOR<DepartmentCreateWithoutSchoolInput, DepartmentUncheckedCreateWithoutSchoolInput> | DepartmentCreateWithoutSchoolInput[] | DepartmentUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: DepartmentCreateOrConnectWithoutSchoolInput | DepartmentCreateOrConnectWithoutSchoolInput[]
    createMany?: DepartmentCreateManySchoolInputEnvelope
    connect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
  }

  export type School_HeadUncheckedCreateNestedOneWithoutSchoolInput = {
    create?: XOR<School_HeadCreateWithoutSchoolInput, School_HeadUncheckedCreateWithoutSchoolInput>
    connectOrCreate?: School_HeadCreateOrConnectWithoutSchoolInput
    connect?: School_HeadWhereUniqueInput
  }

  export type UserUncheckedCreateNestedManyWithoutSchoolInput = {
    create?: XOR<UserCreateWithoutSchoolInput, UserUncheckedCreateWithoutSchoolInput> | UserCreateWithoutSchoolInput[] | UserUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: UserCreateOrConnectWithoutSchoolInput | UserCreateOrConnectWithoutSchoolInput[]
    createMany?: UserCreateManySchoolInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DepartmentUpdateManyWithoutSchoolNestedInput = {
    create?: XOR<DepartmentCreateWithoutSchoolInput, DepartmentUncheckedCreateWithoutSchoolInput> | DepartmentCreateWithoutSchoolInput[] | DepartmentUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: DepartmentCreateOrConnectWithoutSchoolInput | DepartmentCreateOrConnectWithoutSchoolInput[]
    upsert?: DepartmentUpsertWithWhereUniqueWithoutSchoolInput | DepartmentUpsertWithWhereUniqueWithoutSchoolInput[]
    createMany?: DepartmentCreateManySchoolInputEnvelope
    set?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    disconnect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    delete?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    connect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    update?: DepartmentUpdateWithWhereUniqueWithoutSchoolInput | DepartmentUpdateWithWhereUniqueWithoutSchoolInput[]
    updateMany?: DepartmentUpdateManyWithWhereWithoutSchoolInput | DepartmentUpdateManyWithWhereWithoutSchoolInput[]
    deleteMany?: DepartmentScalarWhereInput | DepartmentScalarWhereInput[]
  }

  export type School_HeadUpdateOneWithoutSchoolNestedInput = {
    create?: XOR<School_HeadCreateWithoutSchoolInput, School_HeadUncheckedCreateWithoutSchoolInput>
    connectOrCreate?: School_HeadCreateOrConnectWithoutSchoolInput
    upsert?: School_HeadUpsertWithoutSchoolInput
    disconnect?: School_HeadWhereInput | boolean
    delete?: School_HeadWhereInput | boolean
    connect?: School_HeadWhereUniqueInput
    update?: XOR<XOR<School_HeadUpdateToOneWithWhereWithoutSchoolInput, School_HeadUpdateWithoutSchoolInput>, School_HeadUncheckedUpdateWithoutSchoolInput>
  }

  export type UserUpdateManyWithoutSchoolNestedInput = {
    create?: XOR<UserCreateWithoutSchoolInput, UserUncheckedCreateWithoutSchoolInput> | UserCreateWithoutSchoolInput[] | UserUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: UserCreateOrConnectWithoutSchoolInput | UserCreateOrConnectWithoutSchoolInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutSchoolInput | UserUpsertWithWhereUniqueWithoutSchoolInput[]
    createMany?: UserCreateManySchoolInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutSchoolInput | UserUpdateWithWhereUniqueWithoutSchoolInput[]
    updateMany?: UserUpdateManyWithWhereWithoutSchoolInput | UserUpdateManyWithWhereWithoutSchoolInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type DepartmentUncheckedUpdateManyWithoutSchoolNestedInput = {
    create?: XOR<DepartmentCreateWithoutSchoolInput, DepartmentUncheckedCreateWithoutSchoolInput> | DepartmentCreateWithoutSchoolInput[] | DepartmentUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: DepartmentCreateOrConnectWithoutSchoolInput | DepartmentCreateOrConnectWithoutSchoolInput[]
    upsert?: DepartmentUpsertWithWhereUniqueWithoutSchoolInput | DepartmentUpsertWithWhereUniqueWithoutSchoolInput[]
    createMany?: DepartmentCreateManySchoolInputEnvelope
    set?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    disconnect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    delete?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    connect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    update?: DepartmentUpdateWithWhereUniqueWithoutSchoolInput | DepartmentUpdateWithWhereUniqueWithoutSchoolInput[]
    updateMany?: DepartmentUpdateManyWithWhereWithoutSchoolInput | DepartmentUpdateManyWithWhereWithoutSchoolInput[]
    deleteMany?: DepartmentScalarWhereInput | DepartmentScalarWhereInput[]
  }

  export type School_HeadUncheckedUpdateOneWithoutSchoolNestedInput = {
    create?: XOR<School_HeadCreateWithoutSchoolInput, School_HeadUncheckedCreateWithoutSchoolInput>
    connectOrCreate?: School_HeadCreateOrConnectWithoutSchoolInput
    upsert?: School_HeadUpsertWithoutSchoolInput
    disconnect?: School_HeadWhereInput | boolean
    delete?: School_HeadWhereInput | boolean
    connect?: School_HeadWhereUniqueInput
    update?: XOR<XOR<School_HeadUpdateToOneWithWhereWithoutSchoolInput, School_HeadUpdateWithoutSchoolInput>, School_HeadUncheckedUpdateWithoutSchoolInput>
  }

  export type UserUncheckedUpdateManyWithoutSchoolNestedInput = {
    create?: XOR<UserCreateWithoutSchoolInput, UserUncheckedCreateWithoutSchoolInput> | UserCreateWithoutSchoolInput[] | UserUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: UserCreateOrConnectWithoutSchoolInput | UserCreateOrConnectWithoutSchoolInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutSchoolInput | UserUpsertWithWhereUniqueWithoutSchoolInput[]
    createMany?: UserCreateManySchoolInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutSchoolInput | UserUpdateWithWhereUniqueWithoutSchoolInput[]
    updateMany?: UserUpdateManyWithWhereWithoutSchoolInput | UserUpdateManyWithWhereWithoutSchoolInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type SchoolCreateNestedOneWithoutDepartmentsInput = {
    create?: XOR<SchoolCreateWithoutDepartmentsInput, SchoolUncheckedCreateWithoutDepartmentsInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutDepartmentsInput
    connect?: SchoolWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<UserCreateWithoutDepartmentInput, UserUncheckedCreateWithoutDepartmentInput> | UserCreateWithoutDepartmentInput[] | UserUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: UserCreateOrConnectWithoutDepartmentInput | UserCreateOrConnectWithoutDepartmentInput[]
    createMany?: UserCreateManyDepartmentInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<UserCreateWithoutDepartmentInput, UserUncheckedCreateWithoutDepartmentInput> | UserCreateWithoutDepartmentInput[] | UserUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: UserCreateOrConnectWithoutDepartmentInput | UserCreateOrConnectWithoutDepartmentInput[]
    createMany?: UserCreateManyDepartmentInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type SchoolUpdateOneRequiredWithoutDepartmentsNestedInput = {
    create?: XOR<SchoolCreateWithoutDepartmentsInput, SchoolUncheckedCreateWithoutDepartmentsInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutDepartmentsInput
    upsert?: SchoolUpsertWithoutDepartmentsInput
    connect?: SchoolWhereUniqueInput
    update?: XOR<XOR<SchoolUpdateToOneWithWhereWithoutDepartmentsInput, SchoolUpdateWithoutDepartmentsInput>, SchoolUncheckedUpdateWithoutDepartmentsInput>
  }

  export type UserUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<UserCreateWithoutDepartmentInput, UserUncheckedCreateWithoutDepartmentInput> | UserCreateWithoutDepartmentInput[] | UserUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: UserCreateOrConnectWithoutDepartmentInput | UserCreateOrConnectWithoutDepartmentInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutDepartmentInput | UserUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: UserCreateManyDepartmentInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutDepartmentInput | UserUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: UserUpdateManyWithWhereWithoutDepartmentInput | UserUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<UserCreateWithoutDepartmentInput, UserUncheckedCreateWithoutDepartmentInput> | UserCreateWithoutDepartmentInput[] | UserUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: UserCreateOrConnectWithoutDepartmentInput | UserCreateOrConnectWithoutDepartmentInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutDepartmentInput | UserUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: UserCreateManyDepartmentInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutDepartmentInput | UserUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: UserUpdateManyWithWhereWithoutDepartmentInput | UserUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSchoolHeadInput = {
    create?: XOR<UserCreateWithoutSchoolHeadInput, UserUncheckedCreateWithoutSchoolHeadInput>
    connectOrCreate?: UserCreateOrConnectWithoutSchoolHeadInput
    connect?: UserWhereUniqueInput
  }

  export type SchoolCreateNestedOneWithoutSchoolHeadInput = {
    create?: XOR<SchoolCreateWithoutSchoolHeadInput, SchoolUncheckedCreateWithoutSchoolHeadInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutSchoolHeadInput
    connect?: SchoolWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSchoolHeadNestedInput = {
    create?: XOR<UserCreateWithoutSchoolHeadInput, UserUncheckedCreateWithoutSchoolHeadInput>
    connectOrCreate?: UserCreateOrConnectWithoutSchoolHeadInput
    upsert?: UserUpsertWithoutSchoolHeadInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSchoolHeadInput, UserUpdateWithoutSchoolHeadInput>, UserUncheckedUpdateWithoutSchoolHeadInput>
  }

  export type SchoolUpdateOneWithoutSchoolHeadNestedInput = {
    create?: XOR<SchoolCreateWithoutSchoolHeadInput, SchoolUncheckedCreateWithoutSchoolHeadInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutSchoolHeadInput
    upsert?: SchoolUpsertWithoutSchoolHeadInput
    disconnect?: SchoolWhereInput | boolean
    delete?: SchoolWhereInput | boolean
    connect?: SchoolWhereUniqueInput
    update?: XOR<XOR<SchoolUpdateToOneWithWhereWithoutSchoolHeadInput, SchoolUpdateWithoutSchoolHeadInput>, SchoolUncheckedUpdateWithoutSchoolHeadInput>
  }

  export type SchoolCreateNestedOneWithoutUsersInput = {
    create?: XOR<SchoolCreateWithoutUsersInput, SchoolUncheckedCreateWithoutUsersInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutUsersInput
    connect?: SchoolWhereUniqueInput
  }

  export type DepartmentCreateNestedOneWithoutUsersInput = {
    create?: XOR<DepartmentCreateWithoutUsersInput, DepartmentUncheckedCreateWithoutUsersInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutUsersInput
    connect?: DepartmentWhereUniqueInput
  }

  export type EmergencyContactCreateNestedManyWithoutUserInput = {
    create?: XOR<EmergencyContactCreateWithoutUserInput, EmergencyContactUncheckedCreateWithoutUserInput> | EmergencyContactCreateWithoutUserInput[] | EmergencyContactUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmergencyContactCreateOrConnectWithoutUserInput | EmergencyContactCreateOrConnectWithoutUserInput[]
    createMany?: EmergencyContactCreateManyUserInputEnvelope
    connect?: EmergencyContactWhereUniqueInput | EmergencyContactWhereUniqueInput[]
  }

  export type TodoCreateNestedManyWithoutUserInput = {
    create?: XOR<TodoCreateWithoutUserInput, TodoUncheckedCreateWithoutUserInput> | TodoCreateWithoutUserInput[] | TodoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TodoCreateOrConnectWithoutUserInput | TodoCreateOrConnectWithoutUserInput[]
    createMany?: TodoCreateManyUserInputEnvelope
    connect?: TodoWhereUniqueInput | TodoWhereUniqueInput[]
  }

  export type School_HeadCreateNestedOneWithoutUserInput = {
    create?: XOR<School_HeadCreateWithoutUserInput, School_HeadUncheckedCreateWithoutUserInput>
    connectOrCreate?: School_HeadCreateOrConnectWithoutUserInput
    connect?: School_HeadWhereUniqueInput
  }

  export type EmergencyContactUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<EmergencyContactCreateWithoutUserInput, EmergencyContactUncheckedCreateWithoutUserInput> | EmergencyContactCreateWithoutUserInput[] | EmergencyContactUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmergencyContactCreateOrConnectWithoutUserInput | EmergencyContactCreateOrConnectWithoutUserInput[]
    createMany?: EmergencyContactCreateManyUserInputEnvelope
    connect?: EmergencyContactWhereUniqueInput | EmergencyContactWhereUniqueInput[]
  }

  export type TodoUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TodoCreateWithoutUserInput, TodoUncheckedCreateWithoutUserInput> | TodoCreateWithoutUserInput[] | TodoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TodoCreateOrConnectWithoutUserInput | TodoCreateOrConnectWithoutUserInput[]
    createMany?: TodoCreateManyUserInputEnvelope
    connect?: TodoWhereUniqueInput | TodoWhereUniqueInput[]
  }

  export type School_HeadUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<School_HeadCreateWithoutUserInput, School_HeadUncheckedCreateWithoutUserInput>
    connectOrCreate?: School_HeadCreateOrConnectWithoutUserInput
    connect?: School_HeadWhereUniqueInput
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumEmployeeTypeFieldUpdateOperationsInput = {
    set?: $Enums.EmployeeType
  }

  export type NullableEnumAcademicPositionFieldUpdateOperationsInput = {
    set?: $Enums.AcademicPosition | null
  }

  export type NullableEnumAdministrativePositionFieldUpdateOperationsInput = {
    set?: $Enums.AdministrativePosition | null
  }

  export type EnumEmployeeStatusFieldUpdateOperationsInput = {
    set?: $Enums.EmployeeStatus
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type SchoolUpdateOneWithoutUsersNestedInput = {
    create?: XOR<SchoolCreateWithoutUsersInput, SchoolUncheckedCreateWithoutUsersInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutUsersInput
    upsert?: SchoolUpsertWithoutUsersInput
    disconnect?: SchoolWhereInput | boolean
    delete?: SchoolWhereInput | boolean
    connect?: SchoolWhereUniqueInput
    update?: XOR<XOR<SchoolUpdateToOneWithWhereWithoutUsersInput, SchoolUpdateWithoutUsersInput>, SchoolUncheckedUpdateWithoutUsersInput>
  }

  export type DepartmentUpdateOneWithoutUsersNestedInput = {
    create?: XOR<DepartmentCreateWithoutUsersInput, DepartmentUncheckedCreateWithoutUsersInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutUsersInput
    upsert?: DepartmentUpsertWithoutUsersInput
    disconnect?: DepartmentWhereInput | boolean
    delete?: DepartmentWhereInput | boolean
    connect?: DepartmentWhereUniqueInput
    update?: XOR<XOR<DepartmentUpdateToOneWithWhereWithoutUsersInput, DepartmentUpdateWithoutUsersInput>, DepartmentUncheckedUpdateWithoutUsersInput>
  }

  export type EmergencyContactUpdateManyWithoutUserNestedInput = {
    create?: XOR<EmergencyContactCreateWithoutUserInput, EmergencyContactUncheckedCreateWithoutUserInput> | EmergencyContactCreateWithoutUserInput[] | EmergencyContactUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmergencyContactCreateOrConnectWithoutUserInput | EmergencyContactCreateOrConnectWithoutUserInput[]
    upsert?: EmergencyContactUpsertWithWhereUniqueWithoutUserInput | EmergencyContactUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EmergencyContactCreateManyUserInputEnvelope
    set?: EmergencyContactWhereUniqueInput | EmergencyContactWhereUniqueInput[]
    disconnect?: EmergencyContactWhereUniqueInput | EmergencyContactWhereUniqueInput[]
    delete?: EmergencyContactWhereUniqueInput | EmergencyContactWhereUniqueInput[]
    connect?: EmergencyContactWhereUniqueInput | EmergencyContactWhereUniqueInput[]
    update?: EmergencyContactUpdateWithWhereUniqueWithoutUserInput | EmergencyContactUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EmergencyContactUpdateManyWithWhereWithoutUserInput | EmergencyContactUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EmergencyContactScalarWhereInput | EmergencyContactScalarWhereInput[]
  }

  export type TodoUpdateManyWithoutUserNestedInput = {
    create?: XOR<TodoCreateWithoutUserInput, TodoUncheckedCreateWithoutUserInput> | TodoCreateWithoutUserInput[] | TodoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TodoCreateOrConnectWithoutUserInput | TodoCreateOrConnectWithoutUserInput[]
    upsert?: TodoUpsertWithWhereUniqueWithoutUserInput | TodoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TodoCreateManyUserInputEnvelope
    set?: TodoWhereUniqueInput | TodoWhereUniqueInput[]
    disconnect?: TodoWhereUniqueInput | TodoWhereUniqueInput[]
    delete?: TodoWhereUniqueInput | TodoWhereUniqueInput[]
    connect?: TodoWhereUniqueInput | TodoWhereUniqueInput[]
    update?: TodoUpdateWithWhereUniqueWithoutUserInput | TodoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TodoUpdateManyWithWhereWithoutUserInput | TodoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TodoScalarWhereInput | TodoScalarWhereInput[]
  }

  export type School_HeadUpdateOneWithoutUserNestedInput = {
    create?: XOR<School_HeadCreateWithoutUserInput, School_HeadUncheckedCreateWithoutUserInput>
    connectOrCreate?: School_HeadCreateOrConnectWithoutUserInput
    upsert?: School_HeadUpsertWithoutUserInput
    disconnect?: School_HeadWhereInput | boolean
    delete?: School_HeadWhereInput | boolean
    connect?: School_HeadWhereUniqueInput
    update?: XOR<XOR<School_HeadUpdateToOneWithWhereWithoutUserInput, School_HeadUpdateWithoutUserInput>, School_HeadUncheckedUpdateWithoutUserInput>
  }

  export type EmergencyContactUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<EmergencyContactCreateWithoutUserInput, EmergencyContactUncheckedCreateWithoutUserInput> | EmergencyContactCreateWithoutUserInput[] | EmergencyContactUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmergencyContactCreateOrConnectWithoutUserInput | EmergencyContactCreateOrConnectWithoutUserInput[]
    upsert?: EmergencyContactUpsertWithWhereUniqueWithoutUserInput | EmergencyContactUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EmergencyContactCreateManyUserInputEnvelope
    set?: EmergencyContactWhereUniqueInput | EmergencyContactWhereUniqueInput[]
    disconnect?: EmergencyContactWhereUniqueInput | EmergencyContactWhereUniqueInput[]
    delete?: EmergencyContactWhereUniqueInput | EmergencyContactWhereUniqueInput[]
    connect?: EmergencyContactWhereUniqueInput | EmergencyContactWhereUniqueInput[]
    update?: EmergencyContactUpdateWithWhereUniqueWithoutUserInput | EmergencyContactUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EmergencyContactUpdateManyWithWhereWithoutUserInput | EmergencyContactUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EmergencyContactScalarWhereInput | EmergencyContactScalarWhereInput[]
  }

  export type TodoUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TodoCreateWithoutUserInput, TodoUncheckedCreateWithoutUserInput> | TodoCreateWithoutUserInput[] | TodoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TodoCreateOrConnectWithoutUserInput | TodoCreateOrConnectWithoutUserInput[]
    upsert?: TodoUpsertWithWhereUniqueWithoutUserInput | TodoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TodoCreateManyUserInputEnvelope
    set?: TodoWhereUniqueInput | TodoWhereUniqueInput[]
    disconnect?: TodoWhereUniqueInput | TodoWhereUniqueInput[]
    delete?: TodoWhereUniqueInput | TodoWhereUniqueInput[]
    connect?: TodoWhereUniqueInput | TodoWhereUniqueInput[]
    update?: TodoUpdateWithWhereUniqueWithoutUserInput | TodoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TodoUpdateManyWithWhereWithoutUserInput | TodoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TodoScalarWhereInput | TodoScalarWhereInput[]
  }

  export type School_HeadUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<School_HeadCreateWithoutUserInput, School_HeadUncheckedCreateWithoutUserInput>
    connectOrCreate?: School_HeadCreateOrConnectWithoutUserInput
    upsert?: School_HeadUpsertWithoutUserInput
    disconnect?: School_HeadWhereInput | boolean
    delete?: School_HeadWhereInput | boolean
    connect?: School_HeadWhereUniqueInput
    update?: XOR<XOR<School_HeadUpdateToOneWithWhereWithoutUserInput, School_HeadUpdateWithoutUserInput>, School_HeadUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutEmergencyContactsInput = {
    create?: XOR<UserCreateWithoutEmergencyContactsInput, UserUncheckedCreateWithoutEmergencyContactsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEmergencyContactsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutEmergencyContactsNestedInput = {
    create?: XOR<UserCreateWithoutEmergencyContactsInput, UserUncheckedCreateWithoutEmergencyContactsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEmergencyContactsInput
    upsert?: UserUpsertWithoutEmergencyContactsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEmergencyContactsInput, UserUpdateWithoutEmergencyContactsInput>, UserUncheckedUpdateWithoutEmergencyContactsInput>
  }

  export type UserCreateNestedOneWithoutTodosInput = {
    create?: XOR<UserCreateWithoutTodosInput, UserUncheckedCreateWithoutTodosInput>
    connectOrCreate?: UserCreateOrConnectWithoutTodosInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutTodosNestedInput = {
    create?: XOR<UserCreateWithoutTodosInput, UserUncheckedCreateWithoutTodosInput>
    connectOrCreate?: UserCreateOrConnectWithoutTodosInput
    upsert?: UserUpsertWithoutTodosInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTodosInput, UserUpdateWithoutTodosInput>, UserUncheckedUpdateWithoutTodosInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumEmployeeTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.EmployeeType | EnumEmployeeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EmployeeType[] | ListEnumEmployeeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmployeeType[] | ListEnumEmployeeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEmployeeTypeFilter<$PrismaModel> | $Enums.EmployeeType
  }

  export type NestedEnumAcademicPositionNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.AcademicPosition | EnumAcademicPositionFieldRefInput<$PrismaModel> | null
    in?: $Enums.AcademicPosition[] | ListEnumAcademicPositionFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.AcademicPosition[] | ListEnumAcademicPositionFieldRefInput<$PrismaModel> | null
    not?: NestedEnumAcademicPositionNullableFilter<$PrismaModel> | $Enums.AcademicPosition | null
  }

  export type NestedEnumAdministrativePositionNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.AdministrativePosition | EnumAdministrativePositionFieldRefInput<$PrismaModel> | null
    in?: $Enums.AdministrativePosition[] | ListEnumAdministrativePositionFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.AdministrativePosition[] | ListEnumAdministrativePositionFieldRefInput<$PrismaModel> | null
    not?: NestedEnumAdministrativePositionNullableFilter<$PrismaModel> | $Enums.AdministrativePosition | null
  }

  export type NestedEnumEmployeeStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EmployeeStatus | EnumEmployeeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EmployeeStatus[] | ListEnumEmployeeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmployeeStatus[] | ListEnumEmployeeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEmployeeStatusFilter<$PrismaModel> | $Enums.EmployeeStatus
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumEmployeeTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EmployeeType | EnumEmployeeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EmployeeType[] | ListEnumEmployeeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmployeeType[] | ListEnumEmployeeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEmployeeTypeWithAggregatesFilter<$PrismaModel> | $Enums.EmployeeType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEmployeeTypeFilter<$PrismaModel>
    _max?: NestedEnumEmployeeTypeFilter<$PrismaModel>
  }

  export type NestedEnumAcademicPositionNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AcademicPosition | EnumAcademicPositionFieldRefInput<$PrismaModel> | null
    in?: $Enums.AcademicPosition[] | ListEnumAcademicPositionFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.AcademicPosition[] | ListEnumAcademicPositionFieldRefInput<$PrismaModel> | null
    not?: NestedEnumAcademicPositionNullableWithAggregatesFilter<$PrismaModel> | $Enums.AcademicPosition | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumAcademicPositionNullableFilter<$PrismaModel>
    _max?: NestedEnumAcademicPositionNullableFilter<$PrismaModel>
  }

  export type NestedEnumAdministrativePositionNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AdministrativePosition | EnumAdministrativePositionFieldRefInput<$PrismaModel> | null
    in?: $Enums.AdministrativePosition[] | ListEnumAdministrativePositionFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.AdministrativePosition[] | ListEnumAdministrativePositionFieldRefInput<$PrismaModel> | null
    not?: NestedEnumAdministrativePositionNullableWithAggregatesFilter<$PrismaModel> | $Enums.AdministrativePosition | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumAdministrativePositionNullableFilter<$PrismaModel>
    _max?: NestedEnumAdministrativePositionNullableFilter<$PrismaModel>
  }

  export type NestedEnumEmployeeStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EmployeeStatus | EnumEmployeeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EmployeeStatus[] | ListEnumEmployeeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmployeeStatus[] | ListEnumEmployeeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEmployeeStatusWithAggregatesFilter<$PrismaModel> | $Enums.EmployeeStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEmployeeStatusFilter<$PrismaModel>
    _max?: NestedEnumEmployeeStatusFilter<$PrismaModel>
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type DepartmentCreateWithoutSchoolInput = {
    id?: string
    departmentName: string
    description?: string | null
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUncheckedCreateWithoutSchoolInput = {
    id?: string
    departmentName: string
    description?: string | null
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentCreateOrConnectWithoutSchoolInput = {
    where: DepartmentWhereUniqueInput
    create: XOR<DepartmentCreateWithoutSchoolInput, DepartmentUncheckedCreateWithoutSchoolInput>
  }

  export type DepartmentCreateManySchoolInputEnvelope = {
    data: DepartmentCreateManySchoolInput | DepartmentCreateManySchoolInput[]
    skipDuplicates?: boolean
  }

  export type School_HeadCreateWithoutSchoolInput = {
    id?: string
    assignedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSchoolHeadInput
  }

  export type School_HeadUncheckedCreateWithoutSchoolInput = {
    id?: string
    userId: string
    assignedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type School_HeadCreateOrConnectWithoutSchoolInput = {
    where: School_HeadWhereUniqueInput
    create: XOR<School_HeadCreateWithoutSchoolInput, School_HeadUncheckedCreateWithoutSchoolInput>
  }

  export type UserCreateWithoutSchoolInput = {
    id?: string
    username: string
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    firstName: string
    lastName: string
    email: string
    phoneLocal?: string | null
    addressLocal?: string | null
    city?: string | null
    country?: string | null
    phoneForeign?: string | null
    addressForeign?: string | null
    cityForeign?: string | null
    countryForeign?: string | null
    dateOfBirth?: Date | string | null
    isLocal?: boolean
    employeeType: $Enums.EmployeeType
    academicPosition?: $Enums.AcademicPosition | null
    administrativePosition?: $Enums.AdministrativePosition | null
    status?: $Enums.EmployeeStatus
    baseSalary?: Decimal | DecimalJsLike | number | string | null
    bio?: string | null
    profilePictureUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    department?: DepartmentCreateNestedOneWithoutUsersInput
    emergencyContacts?: EmergencyContactCreateNestedManyWithoutUserInput
    todos?: TodoCreateNestedManyWithoutUserInput
    schoolHead?: School_HeadCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSchoolInput = {
    id?: string
    username: string
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    firstName: string
    lastName: string
    email: string
    phoneLocal?: string | null
    addressLocal?: string | null
    city?: string | null
    country?: string | null
    phoneForeign?: string | null
    addressForeign?: string | null
    cityForeign?: string | null
    countryForeign?: string | null
    dateOfBirth?: Date | string | null
    isLocal?: boolean
    employeeType: $Enums.EmployeeType
    academicPosition?: $Enums.AcademicPosition | null
    administrativePosition?: $Enums.AdministrativePosition | null
    status?: $Enums.EmployeeStatus
    departmentId?: string | null
    baseSalary?: Decimal | DecimalJsLike | number | string | null
    bio?: string | null
    profilePictureUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    emergencyContacts?: EmergencyContactUncheckedCreateNestedManyWithoutUserInput
    todos?: TodoUncheckedCreateNestedManyWithoutUserInput
    schoolHead?: School_HeadUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSchoolInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSchoolInput, UserUncheckedCreateWithoutSchoolInput>
  }

  export type UserCreateManySchoolInputEnvelope = {
    data: UserCreateManySchoolInput | UserCreateManySchoolInput[]
    skipDuplicates?: boolean
  }

  export type DepartmentUpsertWithWhereUniqueWithoutSchoolInput = {
    where: DepartmentWhereUniqueInput
    update: XOR<DepartmentUpdateWithoutSchoolInput, DepartmentUncheckedUpdateWithoutSchoolInput>
    create: XOR<DepartmentCreateWithoutSchoolInput, DepartmentUncheckedCreateWithoutSchoolInput>
  }

  export type DepartmentUpdateWithWhereUniqueWithoutSchoolInput = {
    where: DepartmentWhereUniqueInput
    data: XOR<DepartmentUpdateWithoutSchoolInput, DepartmentUncheckedUpdateWithoutSchoolInput>
  }

  export type DepartmentUpdateManyWithWhereWithoutSchoolInput = {
    where: DepartmentScalarWhereInput
    data: XOR<DepartmentUpdateManyMutationInput, DepartmentUncheckedUpdateManyWithoutSchoolInput>
  }

  export type DepartmentScalarWhereInput = {
    AND?: DepartmentScalarWhereInput | DepartmentScalarWhereInput[]
    OR?: DepartmentScalarWhereInput[]
    NOT?: DepartmentScalarWhereInput | DepartmentScalarWhereInput[]
    id?: StringFilter<"Department"> | string
    departmentName?: StringFilter<"Department"> | string
    description?: StringNullableFilter<"Department"> | string | null
    icon?: StringNullableFilter<"Department"> | string | null
    schoolId?: StringFilter<"Department"> | string
    createdAt?: DateTimeFilter<"Department"> | Date | string
    updatedAt?: DateTimeFilter<"Department"> | Date | string
  }

  export type School_HeadUpsertWithoutSchoolInput = {
    update: XOR<School_HeadUpdateWithoutSchoolInput, School_HeadUncheckedUpdateWithoutSchoolInput>
    create: XOR<School_HeadCreateWithoutSchoolInput, School_HeadUncheckedCreateWithoutSchoolInput>
    where?: School_HeadWhereInput
  }

  export type School_HeadUpdateToOneWithWhereWithoutSchoolInput = {
    where?: School_HeadWhereInput
    data: XOR<School_HeadUpdateWithoutSchoolInput, School_HeadUncheckedUpdateWithoutSchoolInput>
  }

  export type School_HeadUpdateWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSchoolHeadNestedInput
  }

  export type School_HeadUncheckedUpdateWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithWhereUniqueWithoutSchoolInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutSchoolInput, UserUncheckedUpdateWithoutSchoolInput>
    create: XOR<UserCreateWithoutSchoolInput, UserUncheckedCreateWithoutSchoolInput>
  }

  export type UserUpdateWithWhereUniqueWithoutSchoolInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutSchoolInput, UserUncheckedUpdateWithoutSchoolInput>
  }

  export type UserUpdateManyWithWhereWithoutSchoolInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutSchoolInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    isActive?: BoolFilter<"User"> | boolean
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    phoneLocal?: StringNullableFilter<"User"> | string | null
    addressLocal?: StringNullableFilter<"User"> | string | null
    city?: StringNullableFilter<"User"> | string | null
    country?: StringNullableFilter<"User"> | string | null
    phoneForeign?: StringNullableFilter<"User"> | string | null
    addressForeign?: StringNullableFilter<"User"> | string | null
    cityForeign?: StringNullableFilter<"User"> | string | null
    countryForeign?: StringNullableFilter<"User"> | string | null
    dateOfBirth?: DateTimeNullableFilter<"User"> | Date | string | null
    isLocal?: BoolFilter<"User"> | boolean
    employeeType?: EnumEmployeeTypeFilter<"User"> | $Enums.EmployeeType
    academicPosition?: EnumAcademicPositionNullableFilter<"User"> | $Enums.AcademicPosition | null
    administrativePosition?: EnumAdministrativePositionNullableFilter<"User"> | $Enums.AdministrativePosition | null
    status?: EnumEmployeeStatusFilter<"User"> | $Enums.EmployeeStatus
    departmentId?: StringNullableFilter<"User"> | string | null
    schoolId?: StringNullableFilter<"User"> | string | null
    baseSalary?: DecimalNullableFilter<"User"> | Decimal | DecimalJsLike | number | string | null
    bio?: StringNullableFilter<"User"> | string | null
    profilePictureUrl?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type SchoolCreateWithoutDepartmentsInput = {
    id?: string
    schoolName: string
    description?: string | null
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    schoolHead?: School_HeadCreateNestedOneWithoutSchoolInput
    users?: UserCreateNestedManyWithoutSchoolInput
  }

  export type SchoolUncheckedCreateWithoutDepartmentsInput = {
    id?: string
    schoolName: string
    description?: string | null
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    schoolHead?: School_HeadUncheckedCreateNestedOneWithoutSchoolInput
    users?: UserUncheckedCreateNestedManyWithoutSchoolInput
  }

  export type SchoolCreateOrConnectWithoutDepartmentsInput = {
    where: SchoolWhereUniqueInput
    create: XOR<SchoolCreateWithoutDepartmentsInput, SchoolUncheckedCreateWithoutDepartmentsInput>
  }

  export type UserCreateWithoutDepartmentInput = {
    id?: string
    username: string
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    firstName: string
    lastName: string
    email: string
    phoneLocal?: string | null
    addressLocal?: string | null
    city?: string | null
    country?: string | null
    phoneForeign?: string | null
    addressForeign?: string | null
    cityForeign?: string | null
    countryForeign?: string | null
    dateOfBirth?: Date | string | null
    isLocal?: boolean
    employeeType: $Enums.EmployeeType
    academicPosition?: $Enums.AcademicPosition | null
    administrativePosition?: $Enums.AdministrativePosition | null
    status?: $Enums.EmployeeStatus
    baseSalary?: Decimal | DecimalJsLike | number | string | null
    bio?: string | null
    profilePictureUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    school?: SchoolCreateNestedOneWithoutUsersInput
    emergencyContacts?: EmergencyContactCreateNestedManyWithoutUserInput
    todos?: TodoCreateNestedManyWithoutUserInput
    schoolHead?: School_HeadCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDepartmentInput = {
    id?: string
    username: string
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    firstName: string
    lastName: string
    email: string
    phoneLocal?: string | null
    addressLocal?: string | null
    city?: string | null
    country?: string | null
    phoneForeign?: string | null
    addressForeign?: string | null
    cityForeign?: string | null
    countryForeign?: string | null
    dateOfBirth?: Date | string | null
    isLocal?: boolean
    employeeType: $Enums.EmployeeType
    academicPosition?: $Enums.AcademicPosition | null
    administrativePosition?: $Enums.AdministrativePosition | null
    status?: $Enums.EmployeeStatus
    schoolId?: string | null
    baseSalary?: Decimal | DecimalJsLike | number | string | null
    bio?: string | null
    profilePictureUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    emergencyContacts?: EmergencyContactUncheckedCreateNestedManyWithoutUserInput
    todos?: TodoUncheckedCreateNestedManyWithoutUserInput
    schoolHead?: School_HeadUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDepartmentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDepartmentInput, UserUncheckedCreateWithoutDepartmentInput>
  }

  export type UserCreateManyDepartmentInputEnvelope = {
    data: UserCreateManyDepartmentInput | UserCreateManyDepartmentInput[]
    skipDuplicates?: boolean
  }

  export type SchoolUpsertWithoutDepartmentsInput = {
    update: XOR<SchoolUpdateWithoutDepartmentsInput, SchoolUncheckedUpdateWithoutDepartmentsInput>
    create: XOR<SchoolCreateWithoutDepartmentsInput, SchoolUncheckedCreateWithoutDepartmentsInput>
    where?: SchoolWhereInput
  }

  export type SchoolUpdateToOneWithWhereWithoutDepartmentsInput = {
    where?: SchoolWhereInput
    data: XOR<SchoolUpdateWithoutDepartmentsInput, SchoolUncheckedUpdateWithoutDepartmentsInput>
  }

  export type SchoolUpdateWithoutDepartmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    schoolName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schoolHead?: School_HeadUpdateOneWithoutSchoolNestedInput
    users?: UserUpdateManyWithoutSchoolNestedInput
  }

  export type SchoolUncheckedUpdateWithoutDepartmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    schoolName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schoolHead?: School_HeadUncheckedUpdateOneWithoutSchoolNestedInput
    users?: UserUncheckedUpdateManyWithoutSchoolNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutDepartmentInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutDepartmentInput, UserUncheckedUpdateWithoutDepartmentInput>
    create: XOR<UserCreateWithoutDepartmentInput, UserUncheckedCreateWithoutDepartmentInput>
  }

  export type UserUpdateWithWhereUniqueWithoutDepartmentInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutDepartmentInput, UserUncheckedUpdateWithoutDepartmentInput>
  }

  export type UserUpdateManyWithWhereWithoutDepartmentInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutDepartmentInput>
  }

  export type UserCreateWithoutSchoolHeadInput = {
    id?: string
    username: string
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    firstName: string
    lastName: string
    email: string
    phoneLocal?: string | null
    addressLocal?: string | null
    city?: string | null
    country?: string | null
    phoneForeign?: string | null
    addressForeign?: string | null
    cityForeign?: string | null
    countryForeign?: string | null
    dateOfBirth?: Date | string | null
    isLocal?: boolean
    employeeType: $Enums.EmployeeType
    academicPosition?: $Enums.AcademicPosition | null
    administrativePosition?: $Enums.AdministrativePosition | null
    status?: $Enums.EmployeeStatus
    baseSalary?: Decimal | DecimalJsLike | number | string | null
    bio?: string | null
    profilePictureUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    school?: SchoolCreateNestedOneWithoutUsersInput
    department?: DepartmentCreateNestedOneWithoutUsersInput
    emergencyContacts?: EmergencyContactCreateNestedManyWithoutUserInput
    todos?: TodoCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSchoolHeadInput = {
    id?: string
    username: string
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    firstName: string
    lastName: string
    email: string
    phoneLocal?: string | null
    addressLocal?: string | null
    city?: string | null
    country?: string | null
    phoneForeign?: string | null
    addressForeign?: string | null
    cityForeign?: string | null
    countryForeign?: string | null
    dateOfBirth?: Date | string | null
    isLocal?: boolean
    employeeType: $Enums.EmployeeType
    academicPosition?: $Enums.AcademicPosition | null
    administrativePosition?: $Enums.AdministrativePosition | null
    status?: $Enums.EmployeeStatus
    departmentId?: string | null
    schoolId?: string | null
    baseSalary?: Decimal | DecimalJsLike | number | string | null
    bio?: string | null
    profilePictureUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    emergencyContacts?: EmergencyContactUncheckedCreateNestedManyWithoutUserInput
    todos?: TodoUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSchoolHeadInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSchoolHeadInput, UserUncheckedCreateWithoutSchoolHeadInput>
  }

  export type SchoolCreateWithoutSchoolHeadInput = {
    id?: string
    schoolName: string
    description?: string | null
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    departments?: DepartmentCreateNestedManyWithoutSchoolInput
    users?: UserCreateNestedManyWithoutSchoolInput
  }

  export type SchoolUncheckedCreateWithoutSchoolHeadInput = {
    id?: string
    schoolName: string
    description?: string | null
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    departments?: DepartmentUncheckedCreateNestedManyWithoutSchoolInput
    users?: UserUncheckedCreateNestedManyWithoutSchoolInput
  }

  export type SchoolCreateOrConnectWithoutSchoolHeadInput = {
    where: SchoolWhereUniqueInput
    create: XOR<SchoolCreateWithoutSchoolHeadInput, SchoolUncheckedCreateWithoutSchoolHeadInput>
  }

  export type UserUpsertWithoutSchoolHeadInput = {
    update: XOR<UserUpdateWithoutSchoolHeadInput, UserUncheckedUpdateWithoutSchoolHeadInput>
    create: XOR<UserCreateWithoutSchoolHeadInput, UserUncheckedCreateWithoutSchoolHeadInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSchoolHeadInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSchoolHeadInput, UserUncheckedUpdateWithoutSchoolHeadInput>
  }

  export type UserUpdateWithoutSchoolHeadInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneLocal?: NullableStringFieldUpdateOperationsInput | string | null
    addressLocal?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    phoneForeign?: NullableStringFieldUpdateOperationsInput | string | null
    addressForeign?: NullableStringFieldUpdateOperationsInput | string | null
    cityForeign?: NullableStringFieldUpdateOperationsInput | string | null
    countryForeign?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isLocal?: BoolFieldUpdateOperationsInput | boolean
    employeeType?: EnumEmployeeTypeFieldUpdateOperationsInput | $Enums.EmployeeType
    academicPosition?: NullableEnumAcademicPositionFieldUpdateOperationsInput | $Enums.AcademicPosition | null
    administrativePosition?: NullableEnumAdministrativePositionFieldUpdateOperationsInput | $Enums.AdministrativePosition | null
    status?: EnumEmployeeStatusFieldUpdateOperationsInput | $Enums.EmployeeStatus
    baseSalary?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profilePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    school?: SchoolUpdateOneWithoutUsersNestedInput
    department?: DepartmentUpdateOneWithoutUsersNestedInput
    emergencyContacts?: EmergencyContactUpdateManyWithoutUserNestedInput
    todos?: TodoUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSchoolHeadInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneLocal?: NullableStringFieldUpdateOperationsInput | string | null
    addressLocal?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    phoneForeign?: NullableStringFieldUpdateOperationsInput | string | null
    addressForeign?: NullableStringFieldUpdateOperationsInput | string | null
    cityForeign?: NullableStringFieldUpdateOperationsInput | string | null
    countryForeign?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isLocal?: BoolFieldUpdateOperationsInput | boolean
    employeeType?: EnumEmployeeTypeFieldUpdateOperationsInput | $Enums.EmployeeType
    academicPosition?: NullableEnumAcademicPositionFieldUpdateOperationsInput | $Enums.AcademicPosition | null
    administrativePosition?: NullableEnumAdministrativePositionFieldUpdateOperationsInput | $Enums.AdministrativePosition | null
    status?: EnumEmployeeStatusFieldUpdateOperationsInput | $Enums.EmployeeStatus
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    schoolId?: NullableStringFieldUpdateOperationsInput | string | null
    baseSalary?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profilePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emergencyContacts?: EmergencyContactUncheckedUpdateManyWithoutUserNestedInput
    todos?: TodoUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SchoolUpsertWithoutSchoolHeadInput = {
    update: XOR<SchoolUpdateWithoutSchoolHeadInput, SchoolUncheckedUpdateWithoutSchoolHeadInput>
    create: XOR<SchoolCreateWithoutSchoolHeadInput, SchoolUncheckedCreateWithoutSchoolHeadInput>
    where?: SchoolWhereInput
  }

  export type SchoolUpdateToOneWithWhereWithoutSchoolHeadInput = {
    where?: SchoolWhereInput
    data: XOR<SchoolUpdateWithoutSchoolHeadInput, SchoolUncheckedUpdateWithoutSchoolHeadInput>
  }

  export type SchoolUpdateWithoutSchoolHeadInput = {
    id?: StringFieldUpdateOperationsInput | string
    schoolName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    departments?: DepartmentUpdateManyWithoutSchoolNestedInput
    users?: UserUpdateManyWithoutSchoolNestedInput
  }

  export type SchoolUncheckedUpdateWithoutSchoolHeadInput = {
    id?: StringFieldUpdateOperationsInput | string
    schoolName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    departments?: DepartmentUncheckedUpdateManyWithoutSchoolNestedInput
    users?: UserUncheckedUpdateManyWithoutSchoolNestedInput
  }

  export type SchoolCreateWithoutUsersInput = {
    id?: string
    schoolName: string
    description?: string | null
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    departments?: DepartmentCreateNestedManyWithoutSchoolInput
    schoolHead?: School_HeadCreateNestedOneWithoutSchoolInput
  }

  export type SchoolUncheckedCreateWithoutUsersInput = {
    id?: string
    schoolName: string
    description?: string | null
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    departments?: DepartmentUncheckedCreateNestedManyWithoutSchoolInput
    schoolHead?: School_HeadUncheckedCreateNestedOneWithoutSchoolInput
  }

  export type SchoolCreateOrConnectWithoutUsersInput = {
    where: SchoolWhereUniqueInput
    create: XOR<SchoolCreateWithoutUsersInput, SchoolUncheckedCreateWithoutUsersInput>
  }

  export type DepartmentCreateWithoutUsersInput = {
    id?: string
    departmentName: string
    description?: string | null
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    school: SchoolCreateNestedOneWithoutDepartmentsInput
  }

  export type DepartmentUncheckedCreateWithoutUsersInput = {
    id?: string
    departmentName: string
    description?: string | null
    icon?: string | null
    schoolId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DepartmentCreateOrConnectWithoutUsersInput = {
    where: DepartmentWhereUniqueInput
    create: XOR<DepartmentCreateWithoutUsersInput, DepartmentUncheckedCreateWithoutUsersInput>
  }

  export type EmergencyContactCreateWithoutUserInput = {
    id?: string
    contactName: string
    relationship?: string | null
    phonePrimary: string
    email?: string | null
  }

  export type EmergencyContactUncheckedCreateWithoutUserInput = {
    id?: string
    contactName: string
    relationship?: string | null
    phonePrimary: string
    email?: string | null
  }

  export type EmergencyContactCreateOrConnectWithoutUserInput = {
    where: EmergencyContactWhereUniqueInput
    create: XOR<EmergencyContactCreateWithoutUserInput, EmergencyContactUncheckedCreateWithoutUserInput>
  }

  export type EmergencyContactCreateManyUserInputEnvelope = {
    data: EmergencyContactCreateManyUserInput | EmergencyContactCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TodoCreateWithoutUserInput = {
    id?: string
    title: string
    description?: string | null
    status?: string
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TodoUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    description?: string | null
    status?: string
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TodoCreateOrConnectWithoutUserInput = {
    where: TodoWhereUniqueInput
    create: XOR<TodoCreateWithoutUserInput, TodoUncheckedCreateWithoutUserInput>
  }

  export type TodoCreateManyUserInputEnvelope = {
    data: TodoCreateManyUserInput | TodoCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type School_HeadCreateWithoutUserInput = {
    id?: string
    assignedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    school?: SchoolCreateNestedOneWithoutSchoolHeadInput
  }

  export type School_HeadUncheckedCreateWithoutUserInput = {
    id?: string
    schoolId?: string | null
    assignedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type School_HeadCreateOrConnectWithoutUserInput = {
    where: School_HeadWhereUniqueInput
    create: XOR<School_HeadCreateWithoutUserInput, School_HeadUncheckedCreateWithoutUserInput>
  }

  export type SchoolUpsertWithoutUsersInput = {
    update: XOR<SchoolUpdateWithoutUsersInput, SchoolUncheckedUpdateWithoutUsersInput>
    create: XOR<SchoolCreateWithoutUsersInput, SchoolUncheckedCreateWithoutUsersInput>
    where?: SchoolWhereInput
  }

  export type SchoolUpdateToOneWithWhereWithoutUsersInput = {
    where?: SchoolWhereInput
    data: XOR<SchoolUpdateWithoutUsersInput, SchoolUncheckedUpdateWithoutUsersInput>
  }

  export type SchoolUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    schoolName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    departments?: DepartmentUpdateManyWithoutSchoolNestedInput
    schoolHead?: School_HeadUpdateOneWithoutSchoolNestedInput
  }

  export type SchoolUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    schoolName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    departments?: DepartmentUncheckedUpdateManyWithoutSchoolNestedInput
    schoolHead?: School_HeadUncheckedUpdateOneWithoutSchoolNestedInput
  }

  export type DepartmentUpsertWithoutUsersInput = {
    update: XOR<DepartmentUpdateWithoutUsersInput, DepartmentUncheckedUpdateWithoutUsersInput>
    create: XOR<DepartmentCreateWithoutUsersInput, DepartmentUncheckedCreateWithoutUsersInput>
    where?: DepartmentWhereInput
  }

  export type DepartmentUpdateToOneWithWhereWithoutUsersInput = {
    where?: DepartmentWhereInput
    data: XOR<DepartmentUpdateWithoutUsersInput, DepartmentUncheckedUpdateWithoutUsersInput>
  }

  export type DepartmentUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    departmentName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    school?: SchoolUpdateOneRequiredWithoutDepartmentsNestedInput
  }

  export type DepartmentUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    departmentName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    schoolId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmergencyContactUpsertWithWhereUniqueWithoutUserInput = {
    where: EmergencyContactWhereUniqueInput
    update: XOR<EmergencyContactUpdateWithoutUserInput, EmergencyContactUncheckedUpdateWithoutUserInput>
    create: XOR<EmergencyContactCreateWithoutUserInput, EmergencyContactUncheckedCreateWithoutUserInput>
  }

  export type EmergencyContactUpdateWithWhereUniqueWithoutUserInput = {
    where: EmergencyContactWhereUniqueInput
    data: XOR<EmergencyContactUpdateWithoutUserInput, EmergencyContactUncheckedUpdateWithoutUserInput>
  }

  export type EmergencyContactUpdateManyWithWhereWithoutUserInput = {
    where: EmergencyContactScalarWhereInput
    data: XOR<EmergencyContactUpdateManyMutationInput, EmergencyContactUncheckedUpdateManyWithoutUserInput>
  }

  export type EmergencyContactScalarWhereInput = {
    AND?: EmergencyContactScalarWhereInput | EmergencyContactScalarWhereInput[]
    OR?: EmergencyContactScalarWhereInput[]
    NOT?: EmergencyContactScalarWhereInput | EmergencyContactScalarWhereInput[]
    id?: StringFilter<"EmergencyContact"> | string
    userId?: StringFilter<"EmergencyContact"> | string
    contactName?: StringFilter<"EmergencyContact"> | string
    relationship?: StringNullableFilter<"EmergencyContact"> | string | null
    phonePrimary?: StringFilter<"EmergencyContact"> | string
    email?: StringNullableFilter<"EmergencyContact"> | string | null
  }

  export type TodoUpsertWithWhereUniqueWithoutUserInput = {
    where: TodoWhereUniqueInput
    update: XOR<TodoUpdateWithoutUserInput, TodoUncheckedUpdateWithoutUserInput>
    create: XOR<TodoCreateWithoutUserInput, TodoUncheckedCreateWithoutUserInput>
  }

  export type TodoUpdateWithWhereUniqueWithoutUserInput = {
    where: TodoWhereUniqueInput
    data: XOR<TodoUpdateWithoutUserInput, TodoUncheckedUpdateWithoutUserInput>
  }

  export type TodoUpdateManyWithWhereWithoutUserInput = {
    where: TodoScalarWhereInput
    data: XOR<TodoUpdateManyMutationInput, TodoUncheckedUpdateManyWithoutUserInput>
  }

  export type TodoScalarWhereInput = {
    AND?: TodoScalarWhereInput | TodoScalarWhereInput[]
    OR?: TodoScalarWhereInput[]
    NOT?: TodoScalarWhereInput | TodoScalarWhereInput[]
    id?: StringFilter<"Todo"> | string
    userId?: StringFilter<"Todo"> | string
    title?: StringFilter<"Todo"> | string
    description?: StringNullableFilter<"Todo"> | string | null
    status?: StringFilter<"Todo"> | string
    completedAt?: DateTimeNullableFilter<"Todo"> | Date | string | null
    createdAt?: DateTimeFilter<"Todo"> | Date | string
    updatedAt?: DateTimeFilter<"Todo"> | Date | string
  }

  export type School_HeadUpsertWithoutUserInput = {
    update: XOR<School_HeadUpdateWithoutUserInput, School_HeadUncheckedUpdateWithoutUserInput>
    create: XOR<School_HeadCreateWithoutUserInput, School_HeadUncheckedCreateWithoutUserInput>
    where?: School_HeadWhereInput
  }

  export type School_HeadUpdateToOneWithWhereWithoutUserInput = {
    where?: School_HeadWhereInput
    data: XOR<School_HeadUpdateWithoutUserInput, School_HeadUncheckedUpdateWithoutUserInput>
  }

  export type School_HeadUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    school?: SchoolUpdateOneWithoutSchoolHeadNestedInput
  }

  export type School_HeadUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    schoolId?: NullableStringFieldUpdateOperationsInput | string | null
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutEmergencyContactsInput = {
    id?: string
    username: string
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    firstName: string
    lastName: string
    email: string
    phoneLocal?: string | null
    addressLocal?: string | null
    city?: string | null
    country?: string | null
    phoneForeign?: string | null
    addressForeign?: string | null
    cityForeign?: string | null
    countryForeign?: string | null
    dateOfBirth?: Date | string | null
    isLocal?: boolean
    employeeType: $Enums.EmployeeType
    academicPosition?: $Enums.AcademicPosition | null
    administrativePosition?: $Enums.AdministrativePosition | null
    status?: $Enums.EmployeeStatus
    baseSalary?: Decimal | DecimalJsLike | number | string | null
    bio?: string | null
    profilePictureUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    school?: SchoolCreateNestedOneWithoutUsersInput
    department?: DepartmentCreateNestedOneWithoutUsersInput
    todos?: TodoCreateNestedManyWithoutUserInput
    schoolHead?: School_HeadCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEmergencyContactsInput = {
    id?: string
    username: string
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    firstName: string
    lastName: string
    email: string
    phoneLocal?: string | null
    addressLocal?: string | null
    city?: string | null
    country?: string | null
    phoneForeign?: string | null
    addressForeign?: string | null
    cityForeign?: string | null
    countryForeign?: string | null
    dateOfBirth?: Date | string | null
    isLocal?: boolean
    employeeType: $Enums.EmployeeType
    academicPosition?: $Enums.AcademicPosition | null
    administrativePosition?: $Enums.AdministrativePosition | null
    status?: $Enums.EmployeeStatus
    departmentId?: string | null
    schoolId?: string | null
    baseSalary?: Decimal | DecimalJsLike | number | string | null
    bio?: string | null
    profilePictureUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    todos?: TodoUncheckedCreateNestedManyWithoutUserInput
    schoolHead?: School_HeadUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutEmergencyContactsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEmergencyContactsInput, UserUncheckedCreateWithoutEmergencyContactsInput>
  }

  export type UserUpsertWithoutEmergencyContactsInput = {
    update: XOR<UserUpdateWithoutEmergencyContactsInput, UserUncheckedUpdateWithoutEmergencyContactsInput>
    create: XOR<UserCreateWithoutEmergencyContactsInput, UserUncheckedCreateWithoutEmergencyContactsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEmergencyContactsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEmergencyContactsInput, UserUncheckedUpdateWithoutEmergencyContactsInput>
  }

  export type UserUpdateWithoutEmergencyContactsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneLocal?: NullableStringFieldUpdateOperationsInput | string | null
    addressLocal?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    phoneForeign?: NullableStringFieldUpdateOperationsInput | string | null
    addressForeign?: NullableStringFieldUpdateOperationsInput | string | null
    cityForeign?: NullableStringFieldUpdateOperationsInput | string | null
    countryForeign?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isLocal?: BoolFieldUpdateOperationsInput | boolean
    employeeType?: EnumEmployeeTypeFieldUpdateOperationsInput | $Enums.EmployeeType
    academicPosition?: NullableEnumAcademicPositionFieldUpdateOperationsInput | $Enums.AcademicPosition | null
    administrativePosition?: NullableEnumAdministrativePositionFieldUpdateOperationsInput | $Enums.AdministrativePosition | null
    status?: EnumEmployeeStatusFieldUpdateOperationsInput | $Enums.EmployeeStatus
    baseSalary?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profilePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    school?: SchoolUpdateOneWithoutUsersNestedInput
    department?: DepartmentUpdateOneWithoutUsersNestedInput
    todos?: TodoUpdateManyWithoutUserNestedInput
    schoolHead?: School_HeadUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEmergencyContactsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneLocal?: NullableStringFieldUpdateOperationsInput | string | null
    addressLocal?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    phoneForeign?: NullableStringFieldUpdateOperationsInput | string | null
    addressForeign?: NullableStringFieldUpdateOperationsInput | string | null
    cityForeign?: NullableStringFieldUpdateOperationsInput | string | null
    countryForeign?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isLocal?: BoolFieldUpdateOperationsInput | boolean
    employeeType?: EnumEmployeeTypeFieldUpdateOperationsInput | $Enums.EmployeeType
    academicPosition?: NullableEnumAcademicPositionFieldUpdateOperationsInput | $Enums.AcademicPosition | null
    administrativePosition?: NullableEnumAdministrativePositionFieldUpdateOperationsInput | $Enums.AdministrativePosition | null
    status?: EnumEmployeeStatusFieldUpdateOperationsInput | $Enums.EmployeeStatus
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    schoolId?: NullableStringFieldUpdateOperationsInput | string | null
    baseSalary?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profilePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    todos?: TodoUncheckedUpdateManyWithoutUserNestedInput
    schoolHead?: School_HeadUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutTodosInput = {
    id?: string
    username: string
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    firstName: string
    lastName: string
    email: string
    phoneLocal?: string | null
    addressLocal?: string | null
    city?: string | null
    country?: string | null
    phoneForeign?: string | null
    addressForeign?: string | null
    cityForeign?: string | null
    countryForeign?: string | null
    dateOfBirth?: Date | string | null
    isLocal?: boolean
    employeeType: $Enums.EmployeeType
    academicPosition?: $Enums.AcademicPosition | null
    administrativePosition?: $Enums.AdministrativePosition | null
    status?: $Enums.EmployeeStatus
    baseSalary?: Decimal | DecimalJsLike | number | string | null
    bio?: string | null
    profilePictureUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    school?: SchoolCreateNestedOneWithoutUsersInput
    department?: DepartmentCreateNestedOneWithoutUsersInput
    emergencyContacts?: EmergencyContactCreateNestedManyWithoutUserInput
    schoolHead?: School_HeadCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTodosInput = {
    id?: string
    username: string
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    firstName: string
    lastName: string
    email: string
    phoneLocal?: string | null
    addressLocal?: string | null
    city?: string | null
    country?: string | null
    phoneForeign?: string | null
    addressForeign?: string | null
    cityForeign?: string | null
    countryForeign?: string | null
    dateOfBirth?: Date | string | null
    isLocal?: boolean
    employeeType: $Enums.EmployeeType
    academicPosition?: $Enums.AcademicPosition | null
    administrativePosition?: $Enums.AdministrativePosition | null
    status?: $Enums.EmployeeStatus
    departmentId?: string | null
    schoolId?: string | null
    baseSalary?: Decimal | DecimalJsLike | number | string | null
    bio?: string | null
    profilePictureUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    emergencyContacts?: EmergencyContactUncheckedCreateNestedManyWithoutUserInput
    schoolHead?: School_HeadUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTodosInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTodosInput, UserUncheckedCreateWithoutTodosInput>
  }

  export type UserUpsertWithoutTodosInput = {
    update: XOR<UserUpdateWithoutTodosInput, UserUncheckedUpdateWithoutTodosInput>
    create: XOR<UserCreateWithoutTodosInput, UserUncheckedCreateWithoutTodosInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTodosInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTodosInput, UserUncheckedUpdateWithoutTodosInput>
  }

  export type UserUpdateWithoutTodosInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneLocal?: NullableStringFieldUpdateOperationsInput | string | null
    addressLocal?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    phoneForeign?: NullableStringFieldUpdateOperationsInput | string | null
    addressForeign?: NullableStringFieldUpdateOperationsInput | string | null
    cityForeign?: NullableStringFieldUpdateOperationsInput | string | null
    countryForeign?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isLocal?: BoolFieldUpdateOperationsInput | boolean
    employeeType?: EnumEmployeeTypeFieldUpdateOperationsInput | $Enums.EmployeeType
    academicPosition?: NullableEnumAcademicPositionFieldUpdateOperationsInput | $Enums.AcademicPosition | null
    administrativePosition?: NullableEnumAdministrativePositionFieldUpdateOperationsInput | $Enums.AdministrativePosition | null
    status?: EnumEmployeeStatusFieldUpdateOperationsInput | $Enums.EmployeeStatus
    baseSalary?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profilePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    school?: SchoolUpdateOneWithoutUsersNestedInput
    department?: DepartmentUpdateOneWithoutUsersNestedInput
    emergencyContacts?: EmergencyContactUpdateManyWithoutUserNestedInput
    schoolHead?: School_HeadUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTodosInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneLocal?: NullableStringFieldUpdateOperationsInput | string | null
    addressLocal?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    phoneForeign?: NullableStringFieldUpdateOperationsInput | string | null
    addressForeign?: NullableStringFieldUpdateOperationsInput | string | null
    cityForeign?: NullableStringFieldUpdateOperationsInput | string | null
    countryForeign?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isLocal?: BoolFieldUpdateOperationsInput | boolean
    employeeType?: EnumEmployeeTypeFieldUpdateOperationsInput | $Enums.EmployeeType
    academicPosition?: NullableEnumAcademicPositionFieldUpdateOperationsInput | $Enums.AcademicPosition | null
    administrativePosition?: NullableEnumAdministrativePositionFieldUpdateOperationsInput | $Enums.AdministrativePosition | null
    status?: EnumEmployeeStatusFieldUpdateOperationsInput | $Enums.EmployeeStatus
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    schoolId?: NullableStringFieldUpdateOperationsInput | string | null
    baseSalary?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profilePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emergencyContacts?: EmergencyContactUncheckedUpdateManyWithoutUserNestedInput
    schoolHead?: School_HeadUncheckedUpdateOneWithoutUserNestedInput
  }

  export type DepartmentCreateManySchoolInput = {
    id?: string
    departmentName: string
    description?: string | null
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateManySchoolInput = {
    id?: string
    username: string
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    firstName: string
    lastName: string
    email: string
    phoneLocal?: string | null
    addressLocal?: string | null
    city?: string | null
    country?: string | null
    phoneForeign?: string | null
    addressForeign?: string | null
    cityForeign?: string | null
    countryForeign?: string | null
    dateOfBirth?: Date | string | null
    isLocal?: boolean
    employeeType: $Enums.EmployeeType
    academicPosition?: $Enums.AcademicPosition | null
    administrativePosition?: $Enums.AdministrativePosition | null
    status?: $Enums.EmployeeStatus
    departmentId?: string | null
    baseSalary?: Decimal | DecimalJsLike | number | string | null
    bio?: string | null
    profilePictureUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DepartmentUpdateWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    departmentName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentUncheckedUpdateWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    departmentName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentUncheckedUpdateManyWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    departmentName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpdateWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneLocal?: NullableStringFieldUpdateOperationsInput | string | null
    addressLocal?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    phoneForeign?: NullableStringFieldUpdateOperationsInput | string | null
    addressForeign?: NullableStringFieldUpdateOperationsInput | string | null
    cityForeign?: NullableStringFieldUpdateOperationsInput | string | null
    countryForeign?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isLocal?: BoolFieldUpdateOperationsInput | boolean
    employeeType?: EnumEmployeeTypeFieldUpdateOperationsInput | $Enums.EmployeeType
    academicPosition?: NullableEnumAcademicPositionFieldUpdateOperationsInput | $Enums.AcademicPosition | null
    administrativePosition?: NullableEnumAdministrativePositionFieldUpdateOperationsInput | $Enums.AdministrativePosition | null
    status?: EnumEmployeeStatusFieldUpdateOperationsInput | $Enums.EmployeeStatus
    baseSalary?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profilePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    department?: DepartmentUpdateOneWithoutUsersNestedInput
    emergencyContacts?: EmergencyContactUpdateManyWithoutUserNestedInput
    todos?: TodoUpdateManyWithoutUserNestedInput
    schoolHead?: School_HeadUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneLocal?: NullableStringFieldUpdateOperationsInput | string | null
    addressLocal?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    phoneForeign?: NullableStringFieldUpdateOperationsInput | string | null
    addressForeign?: NullableStringFieldUpdateOperationsInput | string | null
    cityForeign?: NullableStringFieldUpdateOperationsInput | string | null
    countryForeign?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isLocal?: BoolFieldUpdateOperationsInput | boolean
    employeeType?: EnumEmployeeTypeFieldUpdateOperationsInput | $Enums.EmployeeType
    academicPosition?: NullableEnumAcademicPositionFieldUpdateOperationsInput | $Enums.AcademicPosition | null
    administrativePosition?: NullableEnumAdministrativePositionFieldUpdateOperationsInput | $Enums.AdministrativePosition | null
    status?: EnumEmployeeStatusFieldUpdateOperationsInput | $Enums.EmployeeStatus
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    baseSalary?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profilePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emergencyContacts?: EmergencyContactUncheckedUpdateManyWithoutUserNestedInput
    todos?: TodoUncheckedUpdateManyWithoutUserNestedInput
    schoolHead?: School_HeadUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneLocal?: NullableStringFieldUpdateOperationsInput | string | null
    addressLocal?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    phoneForeign?: NullableStringFieldUpdateOperationsInput | string | null
    addressForeign?: NullableStringFieldUpdateOperationsInput | string | null
    cityForeign?: NullableStringFieldUpdateOperationsInput | string | null
    countryForeign?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isLocal?: BoolFieldUpdateOperationsInput | boolean
    employeeType?: EnumEmployeeTypeFieldUpdateOperationsInput | $Enums.EmployeeType
    academicPosition?: NullableEnumAcademicPositionFieldUpdateOperationsInput | $Enums.AcademicPosition | null
    administrativePosition?: NullableEnumAdministrativePositionFieldUpdateOperationsInput | $Enums.AdministrativePosition | null
    status?: EnumEmployeeStatusFieldUpdateOperationsInput | $Enums.EmployeeStatus
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    baseSalary?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profilePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyDepartmentInput = {
    id?: string
    username: string
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    firstName: string
    lastName: string
    email: string
    phoneLocal?: string | null
    addressLocal?: string | null
    city?: string | null
    country?: string | null
    phoneForeign?: string | null
    addressForeign?: string | null
    cityForeign?: string | null
    countryForeign?: string | null
    dateOfBirth?: Date | string | null
    isLocal?: boolean
    employeeType: $Enums.EmployeeType
    academicPosition?: $Enums.AcademicPosition | null
    administrativePosition?: $Enums.AdministrativePosition | null
    status?: $Enums.EmployeeStatus
    schoolId?: string | null
    baseSalary?: Decimal | DecimalJsLike | number | string | null
    bio?: string | null
    profilePictureUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateWithoutDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneLocal?: NullableStringFieldUpdateOperationsInput | string | null
    addressLocal?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    phoneForeign?: NullableStringFieldUpdateOperationsInput | string | null
    addressForeign?: NullableStringFieldUpdateOperationsInput | string | null
    cityForeign?: NullableStringFieldUpdateOperationsInput | string | null
    countryForeign?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isLocal?: BoolFieldUpdateOperationsInput | boolean
    employeeType?: EnumEmployeeTypeFieldUpdateOperationsInput | $Enums.EmployeeType
    academicPosition?: NullableEnumAcademicPositionFieldUpdateOperationsInput | $Enums.AcademicPosition | null
    administrativePosition?: NullableEnumAdministrativePositionFieldUpdateOperationsInput | $Enums.AdministrativePosition | null
    status?: EnumEmployeeStatusFieldUpdateOperationsInput | $Enums.EmployeeStatus
    baseSalary?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profilePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    school?: SchoolUpdateOneWithoutUsersNestedInput
    emergencyContacts?: EmergencyContactUpdateManyWithoutUserNestedInput
    todos?: TodoUpdateManyWithoutUserNestedInput
    schoolHead?: School_HeadUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneLocal?: NullableStringFieldUpdateOperationsInput | string | null
    addressLocal?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    phoneForeign?: NullableStringFieldUpdateOperationsInput | string | null
    addressForeign?: NullableStringFieldUpdateOperationsInput | string | null
    cityForeign?: NullableStringFieldUpdateOperationsInput | string | null
    countryForeign?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isLocal?: BoolFieldUpdateOperationsInput | boolean
    employeeType?: EnumEmployeeTypeFieldUpdateOperationsInput | $Enums.EmployeeType
    academicPosition?: NullableEnumAcademicPositionFieldUpdateOperationsInput | $Enums.AcademicPosition | null
    administrativePosition?: NullableEnumAdministrativePositionFieldUpdateOperationsInput | $Enums.AdministrativePosition | null
    status?: EnumEmployeeStatusFieldUpdateOperationsInput | $Enums.EmployeeStatus
    schoolId?: NullableStringFieldUpdateOperationsInput | string | null
    baseSalary?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profilePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emergencyContacts?: EmergencyContactUncheckedUpdateManyWithoutUserNestedInput
    todos?: TodoUncheckedUpdateManyWithoutUserNestedInput
    schoolHead?: School_HeadUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneLocal?: NullableStringFieldUpdateOperationsInput | string | null
    addressLocal?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    phoneForeign?: NullableStringFieldUpdateOperationsInput | string | null
    addressForeign?: NullableStringFieldUpdateOperationsInput | string | null
    cityForeign?: NullableStringFieldUpdateOperationsInput | string | null
    countryForeign?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isLocal?: BoolFieldUpdateOperationsInput | boolean
    employeeType?: EnumEmployeeTypeFieldUpdateOperationsInput | $Enums.EmployeeType
    academicPosition?: NullableEnumAcademicPositionFieldUpdateOperationsInput | $Enums.AcademicPosition | null
    administrativePosition?: NullableEnumAdministrativePositionFieldUpdateOperationsInput | $Enums.AdministrativePosition | null
    status?: EnumEmployeeStatusFieldUpdateOperationsInput | $Enums.EmployeeStatus
    schoolId?: NullableStringFieldUpdateOperationsInput | string | null
    baseSalary?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profilePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmergencyContactCreateManyUserInput = {
    id?: string
    contactName: string
    relationship?: string | null
    phonePrimary: string
    email?: string | null
  }

  export type TodoCreateManyUserInput = {
    id?: string
    title: string
    description?: string | null
    status?: string
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmergencyContactUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    contactName?: StringFieldUpdateOperationsInput | string
    relationship?: NullableStringFieldUpdateOperationsInput | string | null
    phonePrimary?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmergencyContactUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    contactName?: StringFieldUpdateOperationsInput | string
    relationship?: NullableStringFieldUpdateOperationsInput | string | null
    phonePrimary?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmergencyContactUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    contactName?: StringFieldUpdateOperationsInput | string
    relationship?: NullableStringFieldUpdateOperationsInput | string | null
    phonePrimary?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TodoUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TodoUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TodoUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}