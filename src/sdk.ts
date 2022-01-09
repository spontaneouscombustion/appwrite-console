namespace Models {
	/**
	 * Collections List
	 */
	export type CollectionList = {
		/**
		 * Total number of items available on the server.
		 */
		sum: number;
		/**
		 * List of collections.
		 */
		collections: Collection[];
	};
	/**
	 * Indexes List
	 */
	export type IndexList = {
		/**
		 * Total number of items available on the server.
		 */
		sum: number;
		/**
		 * List of indexes.
		 */
		indexes: Index[];
	};
	/**
	 * Documents List
	 */
	export type DocumentList<Document extends Models.Document> = {
		/**
		 * Total number of items available on the server.
		 */
		sum: number;
		/**
		 * List of documents.
		 */
		documents: Document[];
	};
	/**
	 * Users List
	 */
	export type UserList<Preferences extends Models.Preferences> = {
		/**
		 * Total number of items available on the server.
		 */
		sum: number;
		/**
		 * List of users.
		 */
		users: User<Preferences>[];
	};
	/**
	 * Sessions List
	 */
	export type SessionList = {
		/**
		 * Total number of items available on the server.
		 */
		sum: number;
		/**
		 * List of sessions.
		 */
		sessions: Session[];
	};
	/**
	 * Logs List
	 */
	export type LogList = {
		/**
		 * Total number of items available on the server.
		 */
		sum: number;
		/**
		 * List of logs.
		 */
		logs: Log[];
	};
	/**
	 * Files List
	 */
	export type FileList = {
		/**
		 * Total number of items available on the server.
		 */
		sum: number;
		/**
		 * List of files.
		 */
		files: File[];
	};
	/**
	 * Teams List
	 */
	export type TeamList = {
		/**
		 * Total number of items available on the server.
		 */
		sum: number;
		/**
		 * List of teams.
		 */
		teams: Team[];
	};
	/**
	 * Memberships List
	 */
	export type MembershipList = {
		/**
		 * Total number of items available on the server.
		 */
		sum: number;
		/**
		 * List of memberships.
		 */
		memberships: Membership[];
	};
	/**
	 * Functions List
	 */
	export type FunctionList = {
		/**
		 * Total number of items available on the server.
		 */
		sum: number;
		/**
		 * List of functions.
		 */
		functions: Function[];
	};
	/**
	 * Runtimes List
	 */
	export type RuntimeList = {
		/**
		 * Total number of items available on the server.
		 */
		sum: number;
		/**
		 * List of runtimes.
		 */
		runtimes: Runtime[];
	};
	/**
	 * Tags List
	 */
	export type TagList = {
		/**
		 * Total number of items available on the server.
		 */
		sum: number;
		/**
		 * List of tags.
		 */
		tags: Tag[];
	};
	/**
	 * Executions List
	 */
	export type ExecutionList = {
		/**
		 * Total number of items available on the server.
		 */
		sum: number;
		/**
		 * List of executions.
		 */
		executions: Execution[];
	};
	/**
	 * Projects List
	 */
	export type ProjectList = {
		/**
		 * Total number of items available on the server.
		 */
		sum: number;
		/**
		 * List of projects.
		 */
		projects: Project[];
	};
	/**
	 * Webhooks List
	 */
	export type WebhookList = {
		/**
		 * Total number of items available on the server.
		 */
		sum: number;
		/**
		 * List of webhooks.
		 */
		webhooks: Webhook[];
	};
	/**
	 * API Keys List
	 */
	export type KeyList = {
		/**
		 * Total number of items available on the server.
		 */
		sum: number;
		/**
		 * List of keys.
		 */
		keys: Key[];
	};
	/**
	 * Platforms List
	 */
	export type PlatformList = {
		/**
		 * Total number of items available on the server.
		 */
		sum: number;
		/**
		 * List of platforms.
		 */
		platforms: Platform[];
	};
	/**
	 * Domains List
	 */
	export type DomainList = {
		/**
		 * Total number of items available on the server.
		 */
		sum: number;
		/**
		 * List of domains.
		 */
		domains: Domain[];
	};
	/**
	 * Countries List
	 */
	export type CountryList = {
		/**
		 * Total number of items available on the server.
		 */
		sum: number;
		/**
		 * List of countries.
		 */
		countries: Country[];
	};
	/**
	 * Continents List
	 */
	export type ContinentList = {
		/**
		 * Total number of items available on the server.
		 */
		sum: number;
		/**
		 * List of continents.
		 */
		continents: Continent[];
	};
	/**
	 * Languages List
	 */
	export type LanguageList = {
		/**
		 * Total number of items available on the server.
		 */
		sum: number;
		/**
		 * List of languages.
		 */
		languages: Language[];
	};
	/**
	 * Currencies List
	 */
	export type CurrencyList = {
		/**
		 * Total number of items available on the server.
		 */
		sum: number;
		/**
		 * List of currencies.
		 */
		currencies: Currency[];
	};
	/**
	 * Phones List
	 */
	export type PhoneList = {
		/**
		 * Total number of items available on the server.
		 */
		sum: number;
		/**
		 * List of phones.
		 */
		phones: Phone[];
	};
	/**
	 * Metric List
	 */
	export type MetricList = {
		/**
		 * Total number of items available on the server.
		 */
		value: number;
		/**
		 * List of metrics.
		 */
		timestamp: number;
	};
	/**
	 * Collection
	 */
	export type Collection = {
		/**
		 * Collection ID.
		 */
		$id: string;
		/**
		 * Collection read permissions.
		 */
		$read: string[];
		/**
		 * Collection write permissions.
		 */
		$write: string[];
		/**
		 * Collection name.
		 */
		name: string;
		/**
		 * Collection enabled.
		 */
		enabled: boolean;
		/**
		 * Collection permission model. Possible values: `document` or `collection`
		 */
		permission: string;
		/**
		 * Collection attributes.
		 */
		attributes: Attributes[];
		/**
		 * Collection indexes.
		 */
		indexes: Index[];
	};
	/**
	 * Attributes List
	 */
	export type AttributeList = {
		/**
		 * Total sum of items in the list.
		 */
		sum: number;
		/**
		 * List of attributes.
		 */
		attributes: Attributes[];
	};
	export type Attributes =
		| AttributeBoolean
		| AttributeEmail
		| AttributeEnum
		| AttributeFloat
		| AttributeInteger
		| AttributeIp
		| AttributeString
		| AttributeUrl;
	/**
	 * AttributeString
	 */
	export type AttributeString = {
		/**
		 * Attribute Key.
		 */
		key: string;
		/**
		 * Attribute type.
		 */
		type: string;
		/**
		 * Attribute status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed`
		 */
		status: string;
		/**
		 * Is attribute required?
		 */
		required: boolean;
		/**
		 * Is attribute an array?
		 */
		array?: boolean;
		/**
		 * Attribute size.
		 */
		size: string;
		/**
		 * Default value for attribute when not provided. Cannot be set when attribute is required.
		 */
		xdefault?: string;
	};
	/**
	 * AttributeInteger
	 */
	export type AttributeInteger = {
		/**
		 * Attribute Key.
		 */
		key: string;
		/**
		 * Attribute type.
		 */
		type: string;
		/**
		 * Attribute status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed`
		 */
		status: string;
		/**
		 * Is attribute required?
		 */
		required: boolean;
		/**
		 * Is attribute an array?
		 */
		array?: boolean;
		/**
		 * Minimum value to enforce for new documents.
		 */
		min?: number;
		/**
		 * Maximum value to enforce for new documents.
		 */
		max?: number;
		/**
		 * Default value for attribute when not provided. Cannot be set when attribute is required.
		 */
		xdefault?: number;
	};
	/**
	 * AttributeFloat
	 */
	export type AttributeFloat = {
		/**
		 * Attribute Key.
		 */
		key: string;
		/**
		 * Attribute type.
		 */
		type: string;
		/**
		 * Attribute status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed`
		 */
		status: string;
		/**
		 * Is attribute required?
		 */
		required: boolean;
		/**
		 * Is attribute an array?
		 */
		array?: boolean;
		/**
		 * Minimum value to enforce for new documents.
		 */
		min?: number;
		/**
		 * Maximum value to enforce for new documents.
		 */
		max?: number;
		/**
		 * Default value for attribute when not provided. Cannot be set when attribute is required.
		 */
		xdefault?: number;
	};
	/**
	 * AttributeBoolean
	 */
	export type AttributeBoolean = {
		/**
		 * Attribute Key.
		 */
		key: string;
		/**
		 * Attribute type.
		 */
		type: string;
		/**
		 * Attribute status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed`
		 */
		status: string;
		/**
		 * Is attribute required?
		 */
		required: boolean;
		/**
		 * Is attribute an array?
		 */
		array?: boolean;
		/**
		 * Default value for attribute when not provided. Cannot be set when attribute is required.
		 */
		xdefault?: boolean;
	};
	/**
	 * AttributeEmail
	 */
	export type AttributeEmail = {
		/**
		 * Attribute Key.
		 */
		key: string;
		/**
		 * Attribute type.
		 */
		type: string;
		/**
		 * Attribute status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed`
		 */
		status: string;
		/**
		 * Is attribute required?
		 */
		required: boolean;
		/**
		 * Is attribute an array?
		 */
		array?: boolean;
		/**
		 * String format.
		 */
		format: string;
		/**
		 * Default value for attribute when not provided. Cannot be set when attribute is required.
		 */
		xdefault?: string;
	};
	/**
	 * AttributeEnum
	 */
	export type AttributeEnum = {
		/**
		 * Attribute Key.
		 */
		key: string;
		/**
		 * Attribute type.
		 */
		type: string;
		/**
		 * Attribute status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed`
		 */
		status: string;
		/**
		 * Is attribute required?
		 */
		required: boolean;
		/**
		 * Is attribute an array?
		 */
		array?: boolean;
		/**
		 * Array of elements in enumerated type.
		 */
		elements: string[];
		/**
		 * String format.
		 */
		format: string;
		/**
		 * Default value for attribute when not provided. Cannot be set when attribute is required.
		 */
		xdefault?: string;
	};
	/**
	 * AttributeIP
	 */
	export type AttributeIp = {
		/**
		 * Attribute Key.
		 */
		key: string;
		/**
		 * Attribute type.
		 */
		type: string;
		/**
		 * Attribute status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed`
		 */
		status: string;
		/**
		 * Is attribute required?
		 */
		required: boolean;
		/**
		 * Is attribute an array?
		 */
		array?: boolean;
		/**
		 * String format.
		 */
		format: string;
		/**
		 * Default value for attribute when not provided. Cannot be set when attribute is required.
		 */
		xdefault?: string;
	};
	/**
	 * AttributeURL
	 */
	export type AttributeUrl = {
		/**
		 * Attribute Key.
		 */
		key: string;
		/**
		 * Attribute type.
		 */
		type: string;
		/**
		 * Attribute status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed`
		 */
		status: string;
		/**
		 * Is attribute required?
		 */
		required: boolean;
		/**
		 * Is attribute an array?
		 */
		array?: boolean;
		/**
		 * String format.
		 */
		format: string;
		/**
		 * Default value for attribute when not provided. Cannot be set when attribute is required.
		 */
		xdefault?: string;
	};
	/**
	 * Index
	 */
	export type Index = {
		/**
		 * Index Key.
		 */
		key: string;
		/**
		 * Index type.
		 */
		type: string;
		/**
		 * Index status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed`
		 */
		status: string;
		/**
		 * Index attributes.
		 */
		attributes: string[];
		/**
		 * Index orders.
		 */
		orders: string[];
	};
	/**
	 * Document
	 */
	export type Document = {
		/**
		 * Document ID.
		 */
		$id: string;
		/**
		 * Collection ID.
		 */
		$collection: string;
		/**
		 * Document read permissions.
		 */
		$read: string[];
		/**
		 * Document write permissions.
		 */
		$write: string[];
	};
	/**
	 * Log
	 */
	export type Log = {
		/**
		 * Event name.
		 */
		event: string;
		/**
		 * User ID.
		 */
		userId: string;
		/**
		 * User Email.
		 */
		userEmail: string;
		/**
		 * User Name.
		 */
		userName: string;
		/**
		 * API mode when event triggered.
		 */
		mode: string;
		/**
		 * IP session in use when the session was created.
		 */
		ip: string;
		/**
		 * Log creation time in Unix timestamp.
		 */
		time: number;
		/**
		 * Operating system code name. View list of [available options](https://github.com/appwrite/appwrite/blob/master/docs/lists/os.json).
		 */
		osCode: string;
		/**
		 * Operating system name.
		 */
		osName: string;
		/**
		 * Operating system version.
		 */
		osVersion: string;
		/**
		 * Client type.
		 */
		clientType: string;
		/**
		 * Client code name. View list of [available options](https://github.com/appwrite/appwrite/blob/master/docs/lists/clients.json).
		 */
		clientCode: string;
		/**
		 * Client name.
		 */
		clientName: string;
		/**
		 * Client version.
		 */
		clientVersion: string;
		/**
		 * Client engine name.
		 */
		clientEngine: string;
		/**
		 * Client engine name.
		 */
		clientEngineVersion: string;
		/**
		 * Device name.
		 */
		deviceName: string;
		/**
		 * Device brand name.
		 */
		deviceBrand: string;
		/**
		 * Device model name.
		 */
		deviceModel: string;
		/**
		 * Country two-character ISO 3166-1 alpha code.
		 */
		countryCode: string;
		/**
		 * Country name.
		 */
		countryName: string;
	};
	/**
	 * User
	 */
	export type User<Preferences extends Models.Preferences> = {
		/**
		 * User ID.
		 */
		$id: string;
		/**
		 * User name.
		 */
		name: string;
		/**
		 * User registration date in Unix timestamp.
		 */
		registration: number;
		/**
		 * User status. Pass `true` for enabled and `false` for disabled.
		 */
		status: boolean;
		/**
		 * Unix timestamp of the most recent password update
		 */
		passwordUpdate: number;
		/**
		 * User email address.
		 */
		email: string;
		/**
		 * Email verification status.
		 */
		emailVerification: boolean;
		/**
		 * User preferences as a key-value object
		 */
		prefs: Preferences;
	};
	/**
	 * Preferences
	 */
	export type Preferences = {};
	/**
	 * Session
	 */
	export type Session = {
		/**
		 * Session ID.
		 */
		$id: string;
		/**
		 * User ID.
		 */
		userId: string;
		/**
		 * Session expiration date in Unix timestamp.
		 */
		expire: number;
		/**
		 * Session Provider.
		 */
		provider: string;
		/**
		 * Session Provider User ID.
		 */
		providerUid: string;
		/**
		 * Session Provider Token.
		 */
		providerToken: string;
		/**
		 * IP in use when the session was created.
		 */
		ip: string;
		/**
		 * Operating system code name. View list of [available options](https://github.com/appwrite/appwrite/blob/master/docs/lists/os.json).
		 */
		osCode: string;
		/**
		 * Operating system name.
		 */
		osName: string;
		/**
		 * Operating system version.
		 */
		osVersion: string;
		/**
		 * Client type.
		 */
		clientType: string;
		/**
		 * Client code name. View list of [available options](https://github.com/appwrite/appwrite/blob/master/docs/lists/clients.json).
		 */
		clientCode: string;
		/**
		 * Client name.
		 */
		clientName: string;
		/**
		 * Client version.
		 */
		clientVersion: string;
		/**
		 * Client engine name.
		 */
		clientEngine: string;
		/**
		 * Client engine name.
		 */
		clientEngineVersion: string;
		/**
		 * Device name.
		 */
		deviceName: string;
		/**
		 * Device brand name.
		 */
		deviceBrand: string;
		/**
		 * Device model name.
		 */
		deviceModel: string;
		/**
		 * Country two-character ISO 3166-1 alpha code.
		 */
		countryCode: string;
		/**
		 * Country name.
		 */
		countryName: string;
		/**
		 * Returns true if this the current user session.
		 */
		current: boolean;
	};
	/**
	 * Token
	 */
	export type Token = {
		/**
		 * Token ID.
		 */
		$id: string;
		/**
		 * User ID.
		 */
		userId: string;
		/**
		 * Token secret key. This will return an empty string unless the response is returned using an API key or as part of a webhook payload.
		 */
		secret: string;
		/**
		 * Token expiration date in Unix timestamp.
		 */
		expire: number;
	};
	/**
	 * JWT
	 */
	export type Jwt = {
		/**
		 * JWT encoded string.
		 */
		jwt: string;
	};
	/**
	 * Locale
	 */
	export type Locale = {
		/**
		 * User IP address.
		 */
		ip: string;
		/**
		 * Country code in [ISO 3166-1](http://en.wikipedia.org/wiki/ISO_3166-1) two-character format
		 */
		countryCode: string;
		/**
		 * Country name. This field support localization.
		 */
		country: string;
		/**
		 * Continent code. A two character continent code &quot;AF&quot; for Africa, &quot;AN&quot; for Antarctica, &quot;AS&quot; for Asia, &quot;EU&quot; for Europe, &quot;NA&quot; for North America, &quot;OC&quot; for Oceania, and &quot;SA&quot; for South America.
		 */
		continentCode: string;
		/**
		 * Continent name. This field support localization.
		 */
		continent: string;
		/**
		 * True if country is part of the Europian Union.
		 */
		eu: boolean;
		/**
		 * Currency code in [ISO 4217-1](http://en.wikipedia.org/wiki/ISO_4217) three-character format
		 */
		currency: string;
	};
	/**
	 * File
	 */
	export type File = {
		/**
		 * File ID.
		 */
		$id: string;
		/**
		 * File read permissions.
		 */
		$read: string[];
		/**
		 * File write permissions.
		 */
		$write: string[];
		/**
		 * File name.
		 */
		name: string;
		/**
		 * File creation date in Unix timestamp.
		 */
		dateCreated: number;
		/**
		 * File MD5 signature.
		 */
		signature: string;
		/**
		 * File mime type.
		 */
		mimeType: string;
		/**
		 * File original size in bytes.
		 */
		sizeOriginal: number;
	};
	/**
	 * Team
	 */
	export type Team = {
		/**
		 * Team ID.
		 */
		$id: string;
		/**
		 * Team name.
		 */
		name: string;
		/**
		 * Team creation date in Unix timestamp.
		 */
		dateCreated: number;
		/**
		 * Total sum of team members.
		 */
		sum: number;
	};
	/**
	 * Membership
	 */
	export type Membership = {
		/**
		 * Membership ID.
		 */
		$id: string;
		/**
		 * User ID.
		 */
		userId: string;
		/**
		 * Team ID.
		 */
		teamId: string;
		/**
		 * User name.
		 */
		name: string;
		/**
		 * User email address.
		 */
		email: string;
		/**
		 * Date, the user has been invited to join the team in Unix timestamp.
		 */
		invited: number;
		/**
		 * Date, the user has accepted the invitation to join the team in Unix timestamp.
		 */
		joined: number;
		/**
		 * User confirmation status, true if the user has joined the team or false otherwise.
		 */
		confirm: boolean;
		/**
		 * User list of roles
		 */
		roles: string[];
	};
	/**
	 * Function
	 */
	export type Function = {
		/**
		 * Function ID.
		 */
		$id: string;
		/**
		 * Execution permissions.
		 */
		execute: string;
		/**
		 * Function name.
		 */
		name: string;
		/**
		 * Function creation date in Unix timestamp.
		 */
		dateCreated: number;
		/**
		 * Function update date in Unix timestamp.
		 */
		dateUpdated: number;
		/**
		 * Function status. Possible values: `disabled`, `enabled`
		 */
		status: string;
		/**
		 * Function execution runtime.
		 */
		runtime: string;
		/**
		 * Function active tag ID.
		 */
		tag: string;
		/**
		 * Function environment variables.
		 */
		vars: string;
		/**
		 * Function trigger events.
		 */
		events: string[];
		/**
		 * Function execution schedult in CRON format.
		 */
		schedule: string;
		/**
		 * Function next scheduled execution date in Unix timestamp.
		 */
		scheduleNext: number;
		/**
		 * Function next scheduled execution date in Unix timestamp.
		 */
		schedulePrevious: number;
		/**
		 * Function execution timeout in seconds.
		 */
		timeout: number;
	};
	/**
	 * Runtime
	 */
	export type Runtime = {
		/**
		 * Runtime ID.
		 */
		$id: string;
		/**
		 * Runtime Name.
		 */
		name: string;
		/**
		 * Runtime version.
		 */
		version: string;
		/**
		 * Base Docker image used to build the runtime.
		 */
		base: string;
		/**
		 * Image name of Docker Hub.
		 */
		image: string;
		/**
		 * Name of the logo image.
		 */
		logo: string;
		/**
		 * List of supported architectures.
		 */
		supports: string[];
	};
	/**
	 * Tag
	 */
	export type Tag = {
		/**
		 * Tag ID.
		 */
		$id: string;
		/**
		 * Function ID.
		 */
		functionId: string;
		/**
		 * The tag creation date in Unix timestamp.
		 */
		dateCreated: number;
		/**
		 * The entrypoint command in use to execute the tag code.
		 */
		command: string;
		/**
		 * The code size in bytes.
		 */
		size: string;
	};
	/**
	 * Execution
	 */
	export type Execution = {
		/**
		 * Execution ID.
		 */
		$id: string;
		/**
		 * Execution read permissions.
		 */
		$read: string[];
		/**
		 * Function ID.
		 */
		functionId: string;
		/**
		 * The execution creation date in Unix timestamp.
		 */
		dateCreated: number;
		/**
		 * The trigger that caused the function to execute. Possible values can be: `http`, `schedule`, or `event`.
		 */
		trigger: string;
		/**
		 * The status of the function execution. Possible values can be: `waiting`, `processing`, `completed`, or `failed`.
		 */
		status: string;
		/**
		 * The script exit code.
		 */
		exitCode: number;
		/**
		 * The script stdout output string. Logs the last 4,000 characters of the execution stdout output.
		 */
		stdout: string;
		/**
		 * The script stderr output string. Logs the last 4,000 characters of the execution stderr output
		 */
		stderr: string;
		/**
		 * The script execution time in seconds.
		 */
		time: number;
	};
	/**
	 * Project
	 */
	export type Project = {
		/**
		 * Project ID.
		 */
		$id: string;
		/**
		 * Project name.
		 */
		name: string;
		/**
		 * Project description.
		 */
		description: string;
		/**
		 * Project team ID.
		 */
		teamId: string;
		/**
		 * Project logo file ID.
		 */
		logo: string;
		/**
		 * Project website URL.
		 */
		url: string;
		/**
		 * Company legal name.
		 */
		legalName: string;
		/**
		 * Country code in [ISO 3166-1](http://en.wikipedia.org/wiki/ISO_3166-1) two-character format.
		 */
		legalCountry: string;
		/**
		 * State name.
		 */
		legalState: string;
		/**
		 * City name.
		 */
		legalCity: string;
		/**
		 * Company Address.
		 */
		legalAddress: string;
		/**
		 * Company Tax ID.
		 */
		legalTaxId: string;
		/**
		 * Max users allowed. 0 is unlimited.
		 */
		authLimit: number;
		/**
		 * List of Platforms.
		 */
		platforms: Platform[];
		/**
		 * List of Webhooks.
		 */
		webhooks: Webhook[];
		/**
		 * List of API Keys.
		 */
		keys: Key[];
		/**
		 * List of Domains.
		 */
		domains: Domain[];
		/**
		 * Amazon OAuth app ID.
		 */
		providerAmazonAppid: string;
		/**
		 * Amazon OAuth secret ID.
		 */
		providerAmazonSecret: string;
		/**
		 * Apple OAuth app ID.
		 */
		providerAppleAppid: string;
		/**
		 * Apple OAuth secret ID.
		 */
		providerAppleSecret: string;
		/**
		 * BitBucket OAuth app ID.
		 */
		providerBitbucketAppid: string;
		/**
		 * BitBucket OAuth secret ID.
		 */
		providerBitbucketSecret: string;
		/**
		 * Bitly OAuth app ID.
		 */
		providerBitlyAppid: string;
		/**
		 * Bitly OAuth secret ID.
		 */
		providerBitlySecret: string;
		/**
		 * Box OAuth app ID.
		 */
		providerBoxAppid: string;
		/**
		 * Box OAuth secret ID.
		 */
		providerBoxSecret: string;
		/**
		 * Discord OAuth app ID.
		 */
		providerDiscordAppid: string;
		/**
		 * Discord OAuth secret ID.
		 */
		providerDiscordSecret: string;
		/**
		 * Dropbox OAuth app ID.
		 */
		providerDropboxAppid: string;
		/**
		 * Dropbox OAuth secret ID.
		 */
		providerDropboxSecret: string;
		/**
		 * Facebook OAuth app ID.
		 */
		providerFacebookAppid: string;
		/**
		 * Facebook OAuth secret ID.
		 */
		providerFacebookSecret: string;
		/**
		 * GitHub OAuth app ID.
		 */
		providerGithubAppid: string;
		/**
		 * GitHub OAuth secret ID.
		 */
		providerGithubSecret: string;
		/**
		 * GitLab OAuth app ID.
		 */
		providerGitlabAppid: string;
		/**
		 * GitLab OAuth secret ID.
		 */
		providerGitlabSecret: string;
		/**
		 * Google OAuth app ID.
		 */
		providerGoogleAppid: string;
		/**
		 * Google OAuth secret ID.
		 */
		providerGoogleSecret: string;
		/**
		 * LinkedIn OAuth app ID.
		 */
		providerLinkedinAppid: string;
		/**
		 * LinkedIn OAuth secret ID.
		 */
		providerLinkedinSecret: string;
		/**
		 * Microsoft OAuth app ID.
		 */
		providerMicrosoftAppid: string;
		/**
		 * Microsoft OAuth secret ID.
		 */
		providerMicrosoftSecret: string;
		/**
		 * PayPal OAuth app ID.
		 */
		providerPaypalAppid: string;
		/**
		 * PayPal OAuth secret ID.
		 */
		providerPaypalSecret: string;
		/**
		 * PayPal OAuth app ID.
		 */
		providerPaypalSandboxAppid: string;
		/**
		 * PayPal OAuth secret ID.
		 */
		providerPaypalSandboxSecret: string;
		/**
		 * Salesforce OAuth app ID.
		 */
		providerSalesforceAppid: string;
		/**
		 * Salesforce OAuth secret ID.
		 */
		providerSalesforceSecret: string;
		/**
		 * Slack OAuth app ID.
		 */
		providerSlackAppid: string;
		/**
		 * Slack OAuth secret ID.
		 */
		providerSlackSecret: string;
		/**
		 * Spotify OAuth app ID.
		 */
		providerSpotifyAppid: string;
		/**
		 * Spotify OAuth secret ID.
		 */
		providerSpotifySecret: string;
		/**
		 * Tradeshift OAuth app ID.
		 */
		providerTradeshiftAppid: string;
		/**
		 * Tradeshift OAuth secret ID.
		 */
		providerTradeshiftSecret: string;
		/**
		 * Tradeshift OAuth app ID.
		 */
		providerTradeshiftBoxAppid: string;
		/**
		 * Tradeshift OAuth secret ID.
		 */
		providerTradeshiftBoxSecret: string;
		/**
		 * Twitch OAuth app ID.
		 */
		providerTwitchAppid: string;
		/**
		 * Twitch OAuth secret ID.
		 */
		providerTwitchSecret: string;
		/**
		 * VK OAuth app ID.
		 */
		providerVkAppid: string;
		/**
		 * VK OAuth secret ID.
		 */
		providerVkSecret: string;
		/**
		 * Yahoo OAuth app ID.
		 */
		providerYahooAppid: string;
		/**
		 * Yahoo OAuth secret ID.
		 */
		providerYahooSecret: string;
		/**
		 * Yammer OAuth app ID.
		 */
		providerYammerAppid: string;
		/**
		 * Yammer OAuth secret ID.
		 */
		providerYammerSecret: string;
		/**
		 * Yandex OAuth app ID.
		 */
		providerYandexAppid: string;
		/**
		 * Yandex OAuth secret ID.
		 */
		providerYandexSecret: string;
		/**
		 * WordPress OAuth app ID.
		 */
		providerWordpressAppid: string;
		/**
		 * WordPress OAuth secret ID.
		 */
		providerWordpressSecret: string;
		/**
		 * Mock OAuth app ID.
		 */
		providerMockAppid: string;
		/**
		 * Mock OAuth secret ID.
		 */
		providerMockSecret: string;
		/**
		 * Email/Password auth method status
		 */
		authEmailPassword: boolean;
		/**
		 * Magic URL auth method status
		 */
		authUsersAuthMagicURL: boolean;
		/**
		 * Anonymous auth method status
		 */
		authAnonymous: boolean;
		/**
		 * Invites auth method status
		 */
		authInvites: boolean;
		/**
		 * JWT auth method status
		 */
		authJWT: boolean;
		/**
		 * Phone auth method status
		 */
		authPhone: boolean;
		/**
		 * Account service status
		 */
		serviceStatusForAccount: boolean;
		/**
		 * Avatars service status
		 */
		serviceStatusForAvatars: boolean;
		/**
		 * Database service status
		 */
		serviceStatusForDatabase: boolean;
		/**
		 * Locale service status
		 */
		serviceStatusForLocale: boolean;
		/**
		 * Health service status
		 */
		serviceStatusForHealth: boolean;
		/**
		 * Storage service status
		 */
		serviceStatusForStorage: boolean;
		/**
		 * Teams service status
		 */
		serviceStatusForTeams: boolean;
		/**
		 * Users service status
		 */
		serviceStatusForUsers: boolean;
		/**
		 * Functions service status
		 */
		serviceStatusForFunctions: boolean;
	};
	/**
	 * Webhook
	 */
	export type Webhook = {
		/**
		 * Webhook ID.
		 */
		$id: string;
		/**
		 * Webhook name.
		 */
		name: string;
		/**
		 * Webhook URL endpoint.
		 */
		url: string;
		/**
		 * Webhook trigger events.
		 */
		events: string[];
		/**
		 * Indicated if SSL / TLS Certificate verification is enabled.
		 */
		security: boolean;
		/**
		 * HTTP basic authentication username.
		 */
		httpUser: string;
		/**
		 * HTTP basic authentication password.
		 */
		httpPass: string;
	};
	/**
	 * Key
	 */
	export type Key = {
		/**
		 * Key ID.
		 */
		$id: string;
		/**
		 * Key name.
		 */
		name: string;
		/**
		 * Allowed permission scopes.
		 */
		scopes: string[];
		/**
		 * Secret key.
		 */
		secret: string;
	};
	/**
	 * Domain
	 */
	export type Domain = {
		/**
		 * Domain ID.
		 */
		$id: string;
		/**
		 * Domain name.
		 */
		domain: string;
		/**
		 * Registerable domain name.
		 */
		registerable: string;
		/**
		 * TLD name.
		 */
		tld: string;
		/**
		 * Verification process status.
		 */
		verification: boolean;
		/**
		 * Certificate ID.
		 */
		certificateId: string;
	};
	/**
	 * Platform
	 */
	export type Platform = {
		/**
		 * Platform ID.
		 */
		$id: string;
		/**
		 * Platform name.
		 */
		name: string;
		/**
		 * Platform type. Possible values are: web, flutter-ios, flutter-android, ios, android, and unity.
		 */
		type: string;
		/**
		 * Platform Key. iOS bundle ID or Android package name.  Empty string for other platforms.
		 */
		key: string;
		/**
		 * App store or Google Play store ID.
		 */
		store: string;
		/**
		 * Web app hostname. Empty string for other platforms.
		 */
		hostname: string;
		/**
		 * HTTP basic authentication username.
		 */
		httpUser: string;
		/**
		 * HTTP basic authentication password.
		 */
		httpPass: string;
	};
	/**
	 * Country
	 */
	export type Country = {
		/**
		 * Country name.
		 */
		name: string;
		/**
		 * Country two-character ISO 3166-1 alpha code.
		 */
		code: string;
	};
	/**
	 * Continent
	 */
	export type Continent = {
		/**
		 * Continent name.
		 */
		name: string;
		/**
		 * Continent two letter code.
		 */
		code: string;
	};
	/**
	 * Language
	 */
	export type Language = {
		/**
		 * Language name.
		 */
		name: string;
		/**
		 * Language two-character ISO 639-1 codes.
		 */
		code: string;
		/**
		 * Language native name.
		 */
		nativeName: string;
	};
	/**
	 * Currency
	 */
	export type Currency = {
		/**
		 * Currency symbol.
		 */
		symbol: string;
		/**
		 * Currency name.
		 */
		name: string;
		/**
		 * Currency native symbol.
		 */
		symbolNative: string;
		/**
		 * Number of decimal digits.
		 */
		decimalDigits: number;
		/**
		 * Currency digit rounding.
		 */
		rounding: number;
		/**
		 * Currency code in [ISO 4217-1](http://en.wikipedia.org/wiki/ISO_4217) three-character format.
		 */
		code: string;
		/**
		 * Currency plural name
		 */
		namePlural: string;
	};
	/**
	 * Phone
	 */
	export type Phone = {
		/**
		 * Phone code.
		 */
		code: string;
		/**
		 * Country two-character ISO 3166-1 alpha code.
		 */
		countryCode: string;
		/**
		 * Country name.
		 */
		countryName: string;
	};
	/**
	 * Health Antivirus
	 */
	export type HealthAntivirus = {
		/**
		 * Antivirus version.
		 */
		version: string;
		/**
		 * Antivirus status. Possible values can are: `disabled`, `offline`, `online`
		 */
		status: string;
	};
	/**
	 * Health Queue
	 */
	export type HealthQueue = {
		/**
		 * Amount of actions in the queue.
		 */
		size: number;
	};
	/**
	 * Health Status
	 */
	export type HealthStatus = {
		/**
		 * Duration in milliseconds how long the health check took.
		 */
		ping: number;
		/**
		 * Service status. Possible values can are: `pass`, `fail`
		 */
		status: string;
	};
	/**
	 * Health Time
	 */
	export type HealthTime = {
		/**
		 * Current unix timestamp on trustful remote server.
		 */
		remoteTime: number;
		/**
		 * Current unix timestamp of local server where Appwrite runs.
		 */
		localTime: number;
		/**
		 * Difference of unix remote and local timestamps in milliseconds.
		 */
		diff: number;
	};
	/**
	 * UsageDatabase
	 */
	export type UsageDatabase = {
		/**
		 * The time range of the usage stats.
		 */
		range: string;
		/**
		 * Aggregated stats for total number of documents.
		 */
		documentsCount: MetricList[];
		/**
		 * Aggregated stats for total number of collections.
		 */
		collectionsCount: MetricList[];
		/**
		 * Aggregated stats for documents created.
		 */
		documentsCreate: MetricList[];
		/**
		 * Aggregated stats for documents read.
		 */
		documentsRead: MetricList[];
		/**
		 * Aggregated stats for documents updated.
		 */
		documentsUpdate: MetricList[];
		/**
		 * Aggregated stats for documents deleted.
		 */
		documentsDelete: MetricList[];
		/**
		 * Aggregated stats for collections created.
		 */
		collectionsCreate: MetricList[];
		/**
		 * Aggregated stats for collections read.
		 */
		collectionsRead: MetricList[];
		/**
		 * Aggregated stats for collections updated.
		 */
		collectionsUpdate: MetricList[];
		/**
		 * Aggregated stats for collections delete.
		 */
		collectionsDelete: MetricList[];
	};
	/**
	 * UsageCollection
	 */
	export type UsageCollection = {
		/**
		 * The time range of the usage stats.
		 */
		range: string;
		/**
		 * Aggregated stats for total number of documents.
		 */
		documentsCount: MetricList[];
		/**
		 * Aggregated stats for documents created.
		 */
		documentsCreate: MetricList[];
		/**
		 * Aggregated stats for documents read.
		 */
		documentsRead: MetricList[];
		/**
		 * Aggregated stats for documents updated.
		 */
		documentsUpdate: MetricList[];
		/**
		 * Aggregated stats for documents deleted.
		 */
		documentsDelete: MetricList[];
	};
	/**
	 * UsageUsers
	 */
	export type UsageUsers = {
		/**
		 * The time range of the usage stats.
		 */
		range: string;
		/**
		 * Aggregated stats for total number of users.
		 */
		usersCount: MetricList[];
		/**
		 * Aggregated stats for users created.
		 */
		usersCreate: MetricList[];
		/**
		 * Aggregated stats for users read.
		 */
		usersRead: MetricList[];
		/**
		 * Aggregated stats for users updated.
		 */
		usersUpdate: MetricList[];
		/**
		 * Aggregated stats for users deleted.
		 */
		usersDelete: MetricList[];
		/**
		 * Aggregated stats for sessions created.
		 */
		sessionsCreate: MetricList[];
		/**
		 * Aggregated stats for sessions created for a provider ( email, anonymous or oauth2 ).
		 */
		sessionsProviderCreate: MetricList[];
		/**
		 * Aggregated stats for sessions deleted.
		 */
		sessionsDelete: MetricList[];
	};
	/**
	 * StorageUsage
	 */
	export type UsageStorage = {
		/**
		 * The time range of the usage stats.
		 */
		range: string;
		/**
		 * Aggregated stats for the occupied storage size (in bytes).
		 */
		storage: MetricList[];
		/**
		 * Aggregated stats for total number of files.
		 */
		files: MetricList[];
	};
	/**
	 * UsageBuckets
	 */
	export type UsageBuckets = {
		/**
		 * The time range of the usage stats.
		 */
		range: string;
		/**
		 * Aggregated stats for total number of files in this bucket.
		 */
		filesCount: MetricList[];
		/**
		 * Aggregated stats for files created.
		 */
		filesCreate: MetricList[];
		/**
		 * Aggregated stats for files read.
		 */
		filesRead: MetricList[];
		/**
		 * Aggregated stats for files updated.
		 */
		filesUpdate: MetricList[];
		/**
		 * Aggregated stats for files deleted.
		 */
		filesDelete: MetricList[];
	};
	/**
	 * UsageFunctions
	 */
	export type UsageFunctions = {
		/**
		 * The time range of the usage stats.
		 */
		range: string;
		/**
		 * Aggregated stats for function executions.
		 */
		functionsExecutions: MetricList[];
		/**
		 * Aggregated stats for function execution failures.
		 */
		functionsFailures: MetricList[];
		/**
		 * Aggregated stats for function execution duration.
		 */
		functionsCompute: MetricList[];
	};
	/**
	 * UsageProject
	 */
	export type UsageProject = {
		/**
		 * The time range of the usage stats.
		 */
		range: string;
		/**
		 * Aggregated stats for number of requests.
		 */
		requests: MetricList[];
		/**
		 * Aggregated stats for consumed bandwidth.
		 */
		network: MetricList[];
		/**
		 * Aggregated stats for function executions.
		 */
		functions: MetricList[];
		/**
		 * Aggregated stats for number of documents.
		 */
		documents: MetricList[];
		/**
		 * Aggregated stats for number of collections.
		 */
		collections: MetricList[];
		/**
		 * Aggregated stats for number of users.
		 */
		users: MetricList[];
		/**
		 * Aggregated stats for the occupied storage size (in bytes).
		 */
		storage: MetricList[];
	};
}

type Payload = {
	[key: string]: any;
};

type Headers = {
	[key: string]: string;
};

type RealtimeResponse = {
	type: 'error' | 'event' | 'connected' | 'response';
	data:
		| RealtimeResponseAuthenticated
		| RealtimeResponseConnected
		| RealtimeResponseError
		| RealtimeResponseEvent<unknown>;
};

type RealtimeRequest = {
	type: 'authentication';
	data: RealtimeRequestAuthenticate;
};

export type RealtimeResponseEvent<T extends unknown> = {
	event: string;
	channels: string[];
	timestamp: number;
	payload: T;
};

type RealtimeResponseError = {
	code: number;
	message: string;
};

type RealtimeResponseConnected = {
	channels: string[];
	user?: object;
};

type RealtimeResponseAuthenticated = {
	to: string;
	success: boolean;
	user: object;
};

type RealtimeRequestAuthenticate = {
	session: string;
};

type Realtime = {
	socket?: WebSocket;
	timeout?: number;
	url?: string;
	lastMessage?: RealtimeResponse;
	channels: Set<string>;
	subscriptions: Map<
		number,
		{
			channels: string[];
			callback: (payload: RealtimeResponseEvent<any>) => void;
		}
	>;
	subscriptionsCounter: number;
	reconnect: boolean;
	reconnectAttempts: number;
	getTimeout: () => number;
	connect: () => void;
	createSocket: () => void;
	cleanUp: (channels: string[]) => void;
	onMessage: (event: MessageEvent) => void;
};

class AppwriteException extends Error {
	code: number;
	response: string;
	constructor(message: string, code: number = 0, response: string = '') {
		super(message);
		this.name = 'AppwriteException';
		this.message = message;
		this.code = code;
		this.response = response;
	}
}

class Appwrite {
	config = {
		endpoint: 'https://HOSTNAME/v1',
		endpointRealtime: '',
		project: '',
		key: '',
		jwt: '',
		locale: '',
		mode: ''
	};
	headers: Headers = {
		'x-sdk-version': 'appwrite:web:4.0.4',
		'X-Appwrite-Response-Format': '0.12.0'
	};

	/**
	 * Set Endpoint
	 *
	 * Your project endpoint
	 *
	 * @param {string} endpoint
	 *
	 * @returns {this}
	 */
	setEndpoint(endpoint: string): this {
		this.config.endpoint = endpoint;
		this.config.endpointRealtime =
			this.config.endpointRealtime ||
			this.config.endpoint.replace('https://', 'wss://').replace('http://', 'ws://');

		return this;
	}

	/**
	 * Set Realtime Endpoint
	 *
	 * @param {string} endpointRealtime
	 *
	 * @returns {this}
	 */
	setEndpointRealtime(endpointRealtime: string): this {
		this.config.endpointRealtime = endpointRealtime;

		return this;
	}

	/**
	 * Set Project
	 *
	 * Your project ID
	 *
	 * @param value string
	 *
	 * @return {this}
	 */
	setProject(value: string): this {
		this.headers['X-Appwrite-Project'] = value;
		this.config.project = value;
		return this;
	}

	/**
	 * Set Key
	 *
	 * Your secret API key
	 *
	 * @param value string
	 *
	 * @return {this}
	 */
	setKey(value: string): this {
		this.headers['X-Appwrite-Key'] = value;
		this.config.key = value;
		return this;
	}

	/**
	 * Set JWT
	 *
	 * Your secret JSON Web Token
	 *
	 * @param value string
	 *
	 * @return {this}
	 */
	setJWT(value: string): this {
		this.headers['X-Appwrite-JWT'] = value;
		this.config.jwt = value;
		return this;
	}

	/**
	 * Set Locale
	 *
	 * @param value string
	 *
	 * @return {this}
	 */
	setLocale(value: string): this {
		this.headers['X-Appwrite-Locale'] = value;
		this.config.locale = value;
		return this;
	}

	/**
	 * Set Mode
	 *
	 * @param value string
	 *
	 * @return {this}
	 */
	setMode(value: string): this {
		this.headers['X-Appwrite-Mode'] = value;
		this.config.mode = value;
		return this;
	}

	private realtime: Realtime = {
		socket: undefined,
		timeout: undefined,
		url: '',
		channels: new Set(),
		subscriptions: new Map(),
		subscriptionsCounter: 0,
		reconnect: true,
		reconnectAttempts: 0,
		lastMessage: undefined,
		connect: () => {
			clearTimeout(this.realtime.timeout);
			this.realtime.timeout = window?.setTimeout(() => {
				this.realtime.createSocket();
			}, 50);
		},
		getTimeout: () => {
			switch (true) {
				case this.realtime.reconnectAttempts < 5:
					return 1000;
				case this.realtime.reconnectAttempts < 15:
					return 5000;
				case this.realtime.reconnectAttempts < 100:
					return 10_000;
				default:
					return 60_000;
			}
		},
		createSocket: () => {
			if (this.realtime.channels.size < 1) return;

			const channels = new URLSearchParams();
			channels.set('project', this.config.project);
			this.realtime.channels.forEach((channel) => {
				channels.append('channels[]', channel);
			});

			const url = this.config.endpointRealtime + '/realtime?' + channels.toString();

			if (
				url !== this.realtime.url || // Check if URL is present
				!this.realtime.socket || // Check if WebSocket has not been created
				this.realtime.socket?.readyState > WebSocket.OPEN // Check if WebSocket is CLOSING (3) or CLOSED (4)
			) {
				if (
					this.realtime.socket &&
					this.realtime.socket?.readyState < WebSocket.CLOSING // Close WebSocket if it is CONNECTING (0) or OPEN (1)
				) {
					this.realtime.reconnect = false;
					this.realtime.socket.close();
				}

				this.realtime.url = url;
				this.realtime.socket = new WebSocket(url);
				this.realtime.socket.addEventListener('message', this.realtime.onMessage);
				this.realtime.socket.addEventListener('open', (_event) => {
					this.realtime.reconnectAttempts = 0;
				});
				this.realtime.socket.addEventListener('close', (event) => {
					if (
						!this.realtime.reconnect ||
						(this.realtime?.lastMessage?.type === 'error' && // Check if last message was of type error
							(<RealtimeResponseError>this.realtime?.lastMessage.data).code === 1008) // Check for policy violation 1008
					) {
						this.realtime.reconnect = true;
						return;
					}

					const timeout = this.realtime.getTimeout();
					console.error(
						`Realtime got disconnected. Reconnect will be attempted in ${timeout / 1000} seconds.`,
						event.reason
					);

					setTimeout(() => {
						this.realtime.reconnectAttempts++;
						this.realtime.createSocket();
					}, timeout);
				});
			}
		},
		onMessage: (event) => {
			try {
				const message: RealtimeResponse = JSON.parse(event.data);
				this.realtime.lastMessage = message;
				switch (message.type) {
					case 'connected':
						const cookie = JSON.parse(window.localStorage.getItem('cookieFallback') ?? '{}');
						const session = cookie?.[`a_session_${this.config.project}`];
						const messageData = <RealtimeResponseConnected>message.data;

						if (session && !messageData.user) {
							this.realtime.socket?.send(
								JSON.stringify(<RealtimeRequest>{
									type: 'authentication',
									data: {
										session
									}
								})
							);
						}
						break;
					case 'event':
						let data = <RealtimeResponseEvent<unknown>>message.data;
						if (data?.channels) {
							const isSubscribed = data.channels.some((channel) =>
								this.realtime.channels.has(channel)
							);
							if (!isSubscribed) return;
							this.realtime.subscriptions.forEach((subscription) => {
								if (data.channels.some((channel) => subscription.channels.includes(channel))) {
									setTimeout(() => subscription.callback(data));
								}
							});
						}
						break;
					case 'error':
						throw message.data;
					default:
						break;
				}
			} catch (e) {
				console.error(e);
			}
		},
		cleanUp: (channels) => {
			this.realtime.channels.forEach((channel) => {
				if (channels.includes(channel)) {
					let found = Array.from(this.realtime.subscriptions).some(([_key, subscription]) => {
						return subscription.channels.includes(channel);
					});

					if (!found) {
						this.realtime.channels.delete(channel);
					}
				}
			});
		}
	};

	/**
	 * Subscribes to Appwrite events and passes you the payload in realtime.
	 *
	 * @param {string|string[]} channels
	 * Channel to subscribe - pass a single channel as a string or multiple with an array of strings.
	 *
	 * Possible channels are:
	 * - account
	 * - collections
	 * - collections.[ID]
	 * - collections.[ID].documents
	 * - documents
	 * - documents.[ID]
	 * - files
	 * - files.[ID]
	 * - executions
	 * - executions.[ID]
	 * - functions.[ID]
	 * - teams
	 * - teams.[ID]
	 * - memberships
	 * - memberships.[ID]
	 * @param {(payload: RealtimeMessage) => void} callback Is called on every realtime update.
	 * @returns {() => void} Unsubscribes from events.
	 */
	subscribe<T extends unknown>(
		channels: string | string[],
		callback: (payload: RealtimeResponseEvent<T>) => void
	): () => void {
		let channelArray = typeof channels === 'string' ? [channels] : channels;
		channelArray.forEach((channel) => this.realtime.channels.add(channel));

		const counter = this.realtime.subscriptionsCounter++;
		this.realtime.subscriptions.set(counter, {
			channels: channelArray,
			callback
		});

		this.realtime.connect();

		return () => {
			this.realtime.subscriptions.delete(counter);
			this.realtime.cleanUp(channelArray);
			this.realtime.connect();
		};
	}

	private async call(
		method: string,
		url: URL,
		headers: Headers = {},
		params: Payload = {}
	): Promise<any> {
		method = method.toUpperCase();
		headers = {
			...headers,
			...this.headers
		};
		let options: RequestInit = {
			method,
			headers,
			credentials: 'include'
		};

		if (typeof window !== 'undefined' && window.localStorage) {
			headers['X-Fallback-Cookies'] = window.localStorage.getItem('cookieFallback') ?? '';
		}

		if (method === 'GET') {
			for (const [key, value] of Object.entries(this.flatten(params))) {
				url.searchParams.append(key, value);
			}
		} else {
			switch (headers['content-type']) {
				case 'application/json':
					options.body = JSON.stringify(params);
					break;

				case 'multipart/form-data':
					let formData = new FormData();

					for (const key in params) {
						if (Array.isArray(params[key])) {
							params[key].forEach((value: any) => {
								formData.append(key + '[]', value);
							});
						} else {
							formData.append(key, params[key]);
						}
					}

					options.body = formData;
					delete headers['content-type'];
					break;
			}
		}

		try {
			let data = null;
			const response = await fetch(url.toString(), options);

			if (response.headers.get('content-type')?.includes('application/json')) {
				data = await response.json();
			} else {
				data = {
					message: await response.text()
				};
			}

			if (400 <= response.status) {
				throw new AppwriteException(data?.message, response.status, data);
			}

			const cookieFallback = response.headers.get('X-Fallback-Cookies');

			if (typeof window !== 'undefined' && window.localStorage && cookieFallback) {
				window.console.warn(
					'Appwrite is using localStorage for session management. Increase your security by adding a custom domain as your API endpoint.'
				);
				window.localStorage.setItem('cookieFallback', cookieFallback);
			}

			return data;
		} catch (e) {
			if (e instanceof AppwriteException) {
				throw e;
			}
			throw new AppwriteException((<Error>e).message);
		}
	}

	private flatten(data: Payload, prefix = ''): Payload {
		let output: Payload = {};

		for (const key in data) {
			let value = data[key];
			let finalKey = prefix ? `${prefix}[${key}]` : key;

			if (Array.isArray(value)) {
				output = Object.assign(output, this.flatten(value, finalKey));
			} else {
				output[finalKey] = value;
			}
		}

		return output;
	}

	account = {
		/**
		 * Get Account
		 *
		 * Get currently logged in user data as JSON object.
		 *
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		get: async <Preferences extends Models.Preferences>(): Promise<Models.User<Preferences>> => {
			let path = '/account';
			let payload: Payload = {};

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'get',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * Create Account
		 *
		 * Use this endpoint to allow a new user to register a new account in your
		 * project. After the user registration completes successfully, you can use
		 * the [/account/verfication](/docs/client/account#accountCreateVerification)
		 * route to start verifying the user email address. To allow the new user to
		 * login to their new account, you need to create a new [account
		 * session](/docs/client/account#accountCreateSession).
		 *
		 * @param {string} userId
		 * @param {string} email
		 * @param {string} password
		 * @param {string} name
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		create: async <Preferences extends Models.Preferences>(
			userId: string,
			email: string,
			password: string,
			name?: string
		): Promise<Models.User<Preferences>> => {
			if (typeof userId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "userId"');
			}

			if (typeof email === 'undefined') {
				throw new AppwriteException('Missing required parameter: "email"');
			}

			if (typeof password === 'undefined') {
				throw new AppwriteException('Missing required parameter: "password"');
			}

			let path = '/account';
			let payload: Payload = {};

			if (typeof userId !== 'undefined') {
				payload['userId'] = userId;
			}

			if (typeof email !== 'undefined') {
				payload['email'] = email;
			}

			if (typeof password !== 'undefined') {
				payload['password'] = password;
			}

			if (typeof name !== 'undefined') {
				payload['name'] = name;
			}

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'post',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * Delete Account
		 *
		 * Delete a currently logged in user account. Behind the scene, the user
		 * record is not deleted but permanently blocked from any access. This is done
		 * to avoid deleted accounts being overtaken by new users with the same email
		 * address. Any user-related resources like documents or storage files should
		 * be deleted separately.
		 *
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		delete: async (): Promise<{}> => {
			let path = '/account';
			let payload: Payload = {};

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'delete',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * Update Account Email
		 *
		 * Update currently logged in user account email address. After changing user
		 * address, the user confirmation status will get reset. A new confirmation
		 * email is not sent automatically however you can use the send confirmation
		 * email endpoint again to send the confirmation email. For security measures,
		 * user password is required to complete this request.
		 * This endpoint can also be used to convert an anonymous account to a normal
		 * one, by passing an email address and a new password.
		 *
		 *
		 * @param {string} email
		 * @param {string} password
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		updateEmail: async <Preferences extends Models.Preferences>(
			email: string,
			password: string
		): Promise<Models.User<Preferences>> => {
			if (typeof email === 'undefined') {
				throw new AppwriteException('Missing required parameter: "email"');
			}

			if (typeof password === 'undefined') {
				throw new AppwriteException('Missing required parameter: "password"');
			}

			let path = '/account/email';
			let payload: Payload = {};

			if (typeof email !== 'undefined') {
				payload['email'] = email;
			}

			if (typeof password !== 'undefined') {
				payload['password'] = password;
			}

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'patch',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * Create Account JWT
		 *
		 * Use this endpoint to create a JSON Web Token. You can use the resulting JWT
		 * to authenticate on behalf of the current user when working with the
		 * Appwrite server-side API and SDKs. The JWT secret is valid for 15 minutes
		 * from its creation and will be invalid if the user will logout in that time
		 * frame.
		 *
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		createJWT: async (): Promise<Models.Jwt> => {
			let path = '/account/jwt';
			let payload: Payload = {};

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'post',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * Get Account Logs
		 *
		 * Get currently logged in user list of latest security activity logs. Each
		 * log returns user IP address, location and date and time of log.
		 *
		 * @param {number} limit
		 * @param {number} offset
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		getLogs: async (limit?: number, offset?: number): Promise<Models.LogList> => {
			let path = '/account/logs';
			let payload: Payload = {};

			if (typeof limit !== 'undefined') {
				payload['limit'] = limit;
			}

			if (typeof offset !== 'undefined') {
				payload['offset'] = offset;
			}

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'get',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * Update Account Name
		 *
		 * Update currently logged in user account name.
		 *
		 * @param {string} name
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		updateName: async <Preferences extends Models.Preferences>(
			name: string
		): Promise<Models.User<Preferences>> => {
			if (typeof name === 'undefined') {
				throw new AppwriteException('Missing required parameter: "name"');
			}

			let path = '/account/name';
			let payload: Payload = {};

			if (typeof name !== 'undefined') {
				payload['name'] = name;
			}

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'patch',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * Update Account Password
		 *
		 * Update currently logged in user password. For validation, user is required
		 * to pass in the new password, and the old password. For users created with
		 * OAuth and Team Invites, oldPassword is optional.
		 *
		 * @param {string} password
		 * @param {string} oldPassword
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		updatePassword: async <Preferences extends Models.Preferences>(
			password: string,
			oldPassword?: string
		): Promise<Models.User<Preferences>> => {
			if (typeof password === 'undefined') {
				throw new AppwriteException('Missing required parameter: "password"');
			}

			let path = '/account/password';
			let payload: Payload = {};

			if (typeof password !== 'undefined') {
				payload['password'] = password;
			}

			if (typeof oldPassword !== 'undefined') {
				payload['oldPassword'] = oldPassword;
			}

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'patch',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * Get Account Preferences
		 *
		 * Get currently logged in user preferences as a key-value object.
		 *
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		getPrefs: async <Preferences extends Models.Preferences>(): Promise<Preferences> => {
			let path = '/account/prefs';
			let payload: Payload = {};

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'get',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * Update Account Preferences
		 *
		 * Update currently logged in user account preferences. You can pass only the
		 * specific settings you wish to update.
		 *
		 * @param {object} prefs
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		updatePrefs: async <Preferences extends Models.Preferences>(
			prefs: object
		): Promise<Models.User<Preferences>> => {
			if (typeof prefs === 'undefined') {
				throw new AppwriteException('Missing required parameter: "prefs"');
			}

			let path = '/account/prefs';
			let payload: Payload = {};

			if (typeof prefs !== 'undefined') {
				payload['prefs'] = prefs;
			}

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'patch',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * Create Password Recovery
		 *
		 * Sends the user an email with a temporary secret key for password reset.
		 * When the user clicks the confirmation link he is redirected back to your
		 * app password reset URL with the secret key and email address values
		 * attached to the URL query string. Use the query string params to submit a
		 * request to the [PUT
		 * /account/recovery](/docs/client/account#accountUpdateRecovery) endpoint to
		 * complete the process. The verification link sent to the user's email
		 * address is valid for 1 hour.
		 *
		 * @param {string} email
		 * @param {string} url
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		createRecovery: async (email: string, url: string): Promise<Models.Token> => {
			if (typeof email === 'undefined') {
				throw new AppwriteException('Missing required parameter: "email"');
			}

			if (typeof url === 'undefined') {
				throw new AppwriteException('Missing required parameter: "url"');
			}

			let path = '/account/recovery';
			let payload: Payload = {};

			if (typeof email !== 'undefined') {
				payload['email'] = email;
			}

			if (typeof url !== 'undefined') {
				payload['url'] = url;
			}

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'post',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * Create Password Recovery (confirmation)
		 *
		 * Use this endpoint to complete the user account password reset. Both the
		 * **userId** and **secret** arguments will be passed as query parameters to
		 * the redirect URL you have provided when sending your request to the [POST
		 * /account/recovery](/docs/client/account#accountCreateRecovery) endpoint.
		 *
		 * Please note that in order to avoid a [Redirect
		 * Attack](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.md)
		 * the only valid redirect URLs are the ones from domains you have set when
		 * adding your platforms in the console interface.
		 *
		 * @param {string} userId
		 * @param {string} secret
		 * @param {string} password
		 * @param {string} passwordAgain
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		updateRecovery: async (
			userId: string,
			secret: string,
			password: string,
			passwordAgain: string
		): Promise<Models.Token> => {
			if (typeof userId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "userId"');
			}

			if (typeof secret === 'undefined') {
				throw new AppwriteException('Missing required parameter: "secret"');
			}

			if (typeof password === 'undefined') {
				throw new AppwriteException('Missing required parameter: "password"');
			}

			if (typeof passwordAgain === 'undefined') {
				throw new AppwriteException('Missing required parameter: "passwordAgain"');
			}

			let path = '/account/recovery';
			let payload: Payload = {};

			if (typeof userId !== 'undefined') {
				payload['userId'] = userId;
			}

			if (typeof secret !== 'undefined') {
				payload['secret'] = secret;
			}

			if (typeof password !== 'undefined') {
				payload['password'] = password;
			}

			if (typeof passwordAgain !== 'undefined') {
				payload['passwordAgain'] = passwordAgain;
			}

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'put',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * Get Account Sessions
		 *
		 * Get currently logged in user list of active sessions across different
		 * devices.
		 *
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		getSessions: async (): Promise<Models.SessionList> => {
			let path = '/account/sessions';
			let payload: Payload = {};

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'get',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * Create Account Session
		 *
		 * Allow the user to login into their account by providing a valid email and
		 * password combination. This route will create a new session for the user.
		 *
		 * @param {string} email
		 * @param {string} password
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		createSession: async (email: string, password: string): Promise<Models.Session> => {
			if (typeof email === 'undefined') {
				throw new AppwriteException('Missing required parameter: "email"');
			}

			if (typeof password === 'undefined') {
				throw new AppwriteException('Missing required parameter: "password"');
			}

			let path = '/account/sessions';
			let payload: Payload = {};

			if (typeof email !== 'undefined') {
				payload['email'] = email;
			}

			if (typeof password !== 'undefined') {
				payload['password'] = password;
			}

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'post',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * Delete All Account Sessions
		 *
		 * Delete all sessions from the user account and remove any sessions cookies
		 * from the end client.
		 *
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		deleteSessions: async (): Promise<{}> => {
			let path = '/account/sessions';
			let payload: Payload = {};

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'delete',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * Create Anonymous Session
		 *
		 * Use this endpoint to allow a new user to register an anonymous account in
		 * your project. This route will also create a new session for the user. To
		 * allow the new user to convert an anonymous account to a normal account, you
		 * need to update its [email and
		 * password](/docs/client/account#accountUpdateEmail) or create an [OAuth2
		 * session](/docs/client/account#accountCreateOAuth2Session).
		 *
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		createAnonymousSession: async (): Promise<Models.Session> => {
			let path = '/account/sessions/anonymous';
			let payload: Payload = {};

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'post',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * Create Magic URL session
		 *
		 * Sends the user an email with a secret key for creating a session. When the
		 * user clicks the link in the email, the user is redirected back to the URL
		 * you provided with the secret key and userId values attached to the URL
		 * query string. Use the query string parameters to submit a request to the
		 * [PUT
		 * /account/sessions/magic-url](/docs/client/account#accountUpdateMagicURLSession)
		 * endpoint to complete the login process. The link sent to the user's email
		 * address is valid for 1 hour. If you are on a mobile device you can leave
		 * the URL parameter empty, so that the login completion will be handled by
		 * your Appwrite instance by default.
		 *
		 * @param {string} userId
		 * @param {string} email
		 * @param {string} url
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		createMagicURLSession: async (
			userId: string,
			email: string,
			url?: string
		): Promise<Models.Token> => {
			if (typeof userId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "userId"');
			}

			if (typeof email === 'undefined') {
				throw new AppwriteException('Missing required parameter: "email"');
			}

			let path = '/account/sessions/magic-url';
			let payload: Payload = {};

			if (typeof userId !== 'undefined') {
				payload['userId'] = userId;
			}

			if (typeof email !== 'undefined') {
				payload['email'] = email;
			}

			if (typeof url !== 'undefined') {
				payload['url'] = url;
			}

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'post',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * Create Magic URL session (confirmation)
		 *
		 * Use this endpoint to complete creating the session with the Magic URL. Both
		 * the **userId** and **secret** arguments will be passed as query parameters
		 * to the redirect URL you have provided when sending your request to the
		 * [POST
		 * /account/sessions/magic-url](/docs/client/account#accountCreateMagicURLSession)
		 * endpoint.
		 *
		 * Please note that in order to avoid a [Redirect
		 * Attack](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.md)
		 * the only valid redirect URLs are the ones from domains you have set when
		 * adding your platforms in the console interface.
		 *
		 * @param {string} userId
		 * @param {string} secret
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		updateMagicURLSession: async (userId: string, secret: string): Promise<Models.Session> => {
			if (typeof userId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "userId"');
			}

			if (typeof secret === 'undefined') {
				throw new AppwriteException('Missing required parameter: "secret"');
			}

			let path = '/account/sessions/magic-url';
			let payload: Payload = {};

			if (typeof userId !== 'undefined') {
				payload['userId'] = userId;
			}

			if (typeof secret !== 'undefined') {
				payload['secret'] = secret;
			}

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'put',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * Create Account Session with OAuth2
		 *
		 * Allow the user to login to their account using the OAuth2 provider of their
		 * choice. Each OAuth2 provider should be enabled from the Appwrite console
		 * first. Use the success and failure arguments to provide a redirect URL's
		 * back to your app when login is completed.
		 *
		 * If there is already an active session, the new session will be attached to
		 * the logged-in account. If there are no active sessions, the server will
		 * attempt to look for a user with the same email address as the email
		 * received from the OAuth2 provider and attach the new session to the
		 * existing user. If no matching user is found - the server will create a new
		 * user..
		 *
		 *
		 * @param {string} provider
		 * @param {string} success
		 * @param {string} failure
		 * @param {string[]} scopes
		 * @throws {AppwriteException}
		 * @returns {void|string}
		 */
		createOAuth2Session: (
			provider: string,
			success?: string,
			failure?: string,
			scopes?: string[]
		): void | URL => {
			if (typeof provider === 'undefined') {
				throw new AppwriteException('Missing required parameter: "provider"');
			}

			let path = '/account/sessions/oauth2/{provider}'.replace('{provider}', provider);
			let payload: Payload = {};

			if (typeof success !== 'undefined') {
				payload['success'] = success;
			}

			if (typeof failure !== 'undefined') {
				payload['failure'] = failure;
			}

			if (typeof scopes !== 'undefined') {
				payload['scopes'] = scopes;
			}

			const uri = new URL(this.config.endpoint + path);
			payload['project'] = this.config.project;

			for (const [key, value] of Object.entries(this.flatten(payload))) {
				uri.searchParams.append(key, value);
			}
			if (typeof window !== 'undefined' && window?.location) {
				window.location.href = uri.toString();
			} else {
				return uri;
			}
		},

		/**
		 * Get Session By ID
		 *
		 * Use this endpoint to get a logged in user's session using a Session ID.
		 * Inputting 'current' will return the current session being used.
		 *
		 * @param {string} sessionId
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		getSession: async (sessionId: string): Promise<Models.Session> => {
			if (typeof sessionId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "sessionId"');
			}

			let path = '/account/sessions/{sessionId}'.replace('{sessionId}', sessionId);
			let payload: Payload = {};

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'get',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * Delete Account Session
		 *
		 * Use this endpoint to log out the currently logged in user from all their
		 * account sessions across all of their different devices. When using the
		 * option id argument, only the session unique ID provider will be deleted.
		 *
		 * @param {string} sessionId
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		deleteSession: async (sessionId: string): Promise<{}> => {
			if (typeof sessionId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "sessionId"');
			}

			let path = '/account/sessions/{sessionId}'.replace('{sessionId}', sessionId);
			let payload: Payload = {};

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'delete',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * Create Email Verification
		 *
		 * Use this endpoint to send a verification message to your user email address
		 * to confirm they are the valid owners of that address. Both the **userId**
		 * and **secret** arguments will be passed as query parameters to the URL you
		 * have provided to be attached to the verification email. The provided URL
		 * should redirect the user back to your app and allow you to complete the
		 * verification process by verifying both the **userId** and **secret**
		 * parameters. Learn more about how to [complete the verification
		 * process](/docs/client/account#accountUpdateVerification). The verification
		 * link sent to the user's email address is valid for 7 days.
		 *
		 * Please note that in order to avoid a [Redirect
		 * Attack](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.md),
		 * the only valid redirect URLs are the ones from domains you have set when
		 * adding your platforms in the console interface.
		 *
		 *
		 * @param {string} url
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		createVerification: async (url: string): Promise<Models.Token> => {
			if (typeof url === 'undefined') {
				throw new AppwriteException('Missing required parameter: "url"');
			}

			let path = '/account/verification';
			let payload: Payload = {};

			if (typeof url !== 'undefined') {
				payload['url'] = url;
			}

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'post',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * Create Email Verification (confirmation)
		 *
		 * Use this endpoint to complete the user email verification process. Use both
		 * the **userId** and **secret** parameters that were attached to your app URL
		 * to verify the user email ownership. If confirmed this route will return a
		 * 200 status code.
		 *
		 * @param {string} userId
		 * @param {string} secret
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		updateVerification: async (userId: string, secret: string): Promise<Models.Token> => {
			if (typeof userId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "userId"');
			}

			if (typeof secret === 'undefined') {
				throw new AppwriteException('Missing required parameter: "secret"');
			}

			let path = '/account/verification';
			let payload: Payload = {};

			if (typeof userId !== 'undefined') {
				payload['userId'] = userId;
			}

			if (typeof secret !== 'undefined') {
				payload['secret'] = secret;
			}

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'put',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		}
	};

	avatars = {
		/**
		 * Get Browser Icon
		 *
		 * You can use this endpoint to show different browser icons to your users.
		 * The code argument receives the browser code as it appears in your user
		 * /account/sessions endpoint. Use width, height and quality arguments to
		 * change the output settings.
		 *
		 * @param {string} code
		 * @param {number} width
		 * @param {number} height
		 * @param {number} quality
		 * @throws {AppwriteException}
		 * @returns {URL}
		 */
		getBrowser: (code: string, width?: number, height?: number, quality?: number): URL => {
			if (typeof code === 'undefined') {
				throw new AppwriteException('Missing required parameter: "code"');
			}

			let path = '/avatars/browsers/{code}'.replace('{code}', code);
			let payload: Payload = {};

			if (typeof width !== 'undefined') {
				payload['width'] = width;
			}

			if (typeof height !== 'undefined') {
				payload['height'] = height;
			}

			if (typeof quality !== 'undefined') {
				payload['quality'] = quality;
			}

			const uri = new URL(this.config.endpoint + path);
			payload['project'] = this.config.project;

			for (const [key, value] of Object.entries(this.flatten(payload))) {
				uri.searchParams.append(key, value);
			}
			return uri;
		},

		/**
		 * Get Credit Card Icon
		 *
		 * The credit card endpoint will return you the icon of the credit card
		 * provider you need. Use width, height and quality arguments to change the
		 * output settings.
		 *
		 * @param {string} code
		 * @param {number} width
		 * @param {number} height
		 * @param {number} quality
		 * @throws {AppwriteException}
		 * @returns {URL}
		 */
		getCreditCard: (code: string, width?: number, height?: number, quality?: number): URL => {
			if (typeof code === 'undefined') {
				throw new AppwriteException('Missing required parameter: "code"');
			}

			let path = '/avatars/credit-cards/{code}'.replace('{code}', code);
			let payload: Payload = {};

			if (typeof width !== 'undefined') {
				payload['width'] = width;
			}

			if (typeof height !== 'undefined') {
				payload['height'] = height;
			}

			if (typeof quality !== 'undefined') {
				payload['quality'] = quality;
			}

			const uri = new URL(this.config.endpoint + path);
			payload['project'] = this.config.project;

			for (const [key, value] of Object.entries(this.flatten(payload))) {
				uri.searchParams.append(key, value);
			}
			return uri;
		},

		/**
		 * Get Favicon
		 *
		 * Use this endpoint to fetch the favorite icon (AKA favicon) of any remote
		 * website URL.
		 *
		 *
		 * @param {string} url
		 * @throws {AppwriteException}
		 * @returns {URL}
		 */
		getFavicon: (url: string): URL => {
			if (typeof url === 'undefined') {
				throw new AppwriteException('Missing required parameter: "url"');
			}

			let path = '/avatars/favicon';
			let payload: Payload = {};

			if (typeof url !== 'undefined') {
				payload['url'] = url;
			}

			const uri = new URL(this.config.endpoint + path);
			payload['project'] = this.config.project;

			for (const [key, value] of Object.entries(this.flatten(payload))) {
				uri.searchParams.append(key, value);
			}
			return uri;
		},

		/**
		 * Get Country Flag
		 *
		 * You can use this endpoint to show different country flags icons to your
		 * users. The code argument receives the 2 letter country code. Use width,
		 * height and quality arguments to change the output settings.
		 *
		 * @param {string} code
		 * @param {number} width
		 * @param {number} height
		 * @param {number} quality
		 * @throws {AppwriteException}
		 * @returns {URL}
		 */
		getFlag: (code: string, width?: number, height?: number, quality?: number): URL => {
			if (typeof code === 'undefined') {
				throw new AppwriteException('Missing required parameter: "code"');
			}

			let path = '/avatars/flags/{code}'.replace('{code}', code);
			let payload: Payload = {};

			if (typeof width !== 'undefined') {
				payload['width'] = width;
			}

			if (typeof height !== 'undefined') {
				payload['height'] = height;
			}

			if (typeof quality !== 'undefined') {
				payload['quality'] = quality;
			}

			const uri = new URL(this.config.endpoint + path);
			payload['project'] = this.config.project;

			for (const [key, value] of Object.entries(this.flatten(payload))) {
				uri.searchParams.append(key, value);
			}
			return uri;
		},

		/**
		 * Get Image from URL
		 *
		 * Use this endpoint to fetch a remote image URL and crop it to any image size
		 * you want. This endpoint is very useful if you need to crop and display
		 * remote images in your app or in case you want to make sure a 3rd party
		 * image is properly served using a TLS protocol.
		 *
		 * @param {string} url
		 * @param {number} width
		 * @param {number} height
		 * @throws {AppwriteException}
		 * @returns {URL}
		 */
		getImage: (url: string, width?: number, height?: number): URL => {
			if (typeof url === 'undefined') {
				throw new AppwriteException('Missing required parameter: "url"');
			}

			let path = '/avatars/image';
			let payload: Payload = {};

			if (typeof url !== 'undefined') {
				payload['url'] = url;
			}

			if (typeof width !== 'undefined') {
				payload['width'] = width;
			}

			if (typeof height !== 'undefined') {
				payload['height'] = height;
			}

			const uri = new URL(this.config.endpoint + path);
			payload['project'] = this.config.project;

			for (const [key, value] of Object.entries(this.flatten(payload))) {
				uri.searchParams.append(key, value);
			}
			return uri;
		},

		/**
		 * Get User Initials
		 *
		 * Use this endpoint to show your user initials avatar icon on your website or
		 * app. By default, this route will try to print your logged-in user name or
		 * email initials. You can also overwrite the user name if you pass the 'name'
		 * parameter. If no name is given and no user is logged, an empty avatar will
		 * be returned.
		 *
		 * You can use the color and background params to change the avatar colors. By
		 * default, a random theme will be selected. The random theme will persist for
		 * the user's initials when reloading the same theme will always return for
		 * the same initials.
		 *
		 * @param {string} name
		 * @param {number} width
		 * @param {number} height
		 * @param {string} color
		 * @param {string} background
		 * @throws {AppwriteException}
		 * @returns {URL}
		 */
		getInitials: (
			name?: string,
			width?: number,
			height?: number,
			color?: string,
			background?: string
		): URL => {
			let path = '/avatars/initials';
			let payload: Payload = {};

			if (typeof name !== 'undefined') {
				payload['name'] = name;
			}

			if (typeof width !== 'undefined') {
				payload['width'] = width;
			}

			if (typeof height !== 'undefined') {
				payload['height'] = height;
			}

			if (typeof color !== 'undefined') {
				payload['color'] = color;
			}

			if (typeof background !== 'undefined') {
				payload['background'] = background;
			}

			const uri = new URL(this.config.endpoint + path);
			payload['project'] = this.config.project;

			for (const [key, value] of Object.entries(this.flatten(payload))) {
				uri.searchParams.append(key, value);
			}
			return uri;
		},

		/**
		 * Get QR Code
		 *
		 * Converts a given plain text to a QR code image. You can use the query
		 * parameters to change the size and style of the resulting image.
		 *
		 * @param {string} text
		 * @param {number} size
		 * @param {number} margin
		 * @param {boolean} download
		 * @throws {AppwriteException}
		 * @returns {URL}
		 */
		getQR: (text: string, size?: number, margin?: number, download?: boolean): URL => {
			if (typeof text === 'undefined') {
				throw new AppwriteException('Missing required parameter: "text"');
			}

			let path = '/avatars/qr';
			let payload: Payload = {};

			if (typeof text !== 'undefined') {
				payload['text'] = text;
			}

			if (typeof size !== 'undefined') {
				payload['size'] = size;
			}

			if (typeof margin !== 'undefined') {
				payload['margin'] = margin;
			}

			if (typeof download !== 'undefined') {
				payload['download'] = download;
			}

			const uri = new URL(this.config.endpoint + path);
			payload['project'] = this.config.project;

			for (const [key, value] of Object.entries(this.flatten(payload))) {
				uri.searchParams.append(key, value);
			}
			return uri;
		}
	};

	database = {
		/**
		 * List Collections
		 *
		 * Get a list of all the user collections. You can use the query params to
		 * filter your results. On admin mode, this endpoint will return a list of all
		 * of the project's collections. [Learn more about different API
		 * modes](/docs/admin).
		 *
		 * @param {string} search
		 * @param {number} limit
		 * @param {number} offset
		 * @param {string} cursor
		 * @param {string} cursorDirection
		 * @param {string} orderType
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		listCollections: async (
			search?: string,
			limit?: number,
			offset?: number,
			cursor?: string,
			cursorDirection?: string,
			orderType?: string
		): Promise<Models.CollectionList> => {
			let path = '/database/collections';
			let payload: Payload = {};

			if (typeof search !== 'undefined') {
				payload['search'] = search;
			}

			if (typeof limit !== 'undefined') {
				payload['limit'] = limit;
			}

			if (typeof offset !== 'undefined') {
				payload['offset'] = offset;
			}

			if (typeof cursor !== 'undefined') {
				payload['cursor'] = cursor;
			}

			if (typeof cursorDirection !== 'undefined') {
				payload['cursorDirection'] = cursorDirection;
			}

			if (typeof orderType !== 'undefined') {
				payload['orderType'] = orderType;
			}

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'get',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * Create Collection
		 *
		 * Create a new Collection.
		 *
		 * @param {string} collectionId
		 * @param {string} name
		 * @param {string} permission
		 * @param {string[]} read
		 * @param {string[]} write
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		createCollection: async (
			collectionId: string,
			name: string,
			permission: string,
			read: string[],
			write: string[]
		): Promise<Models.Collection> => {
			if (typeof collectionId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "collectionId"');
			}

			if (typeof name === 'undefined') {
				throw new AppwriteException('Missing required parameter: "name"');
			}

			if (typeof permission === 'undefined') {
				throw new AppwriteException('Missing required parameter: "permission"');
			}

			if (typeof read === 'undefined') {
				throw new AppwriteException('Missing required parameter: "read"');
			}

			if (typeof write === 'undefined') {
				throw new AppwriteException('Missing required parameter: "write"');
			}

			let path = '/database/collections';
			let payload: Payload = {};

			if (typeof collectionId !== 'undefined') {
				payload['collectionId'] = collectionId;
			}

			if (typeof name !== 'undefined') {
				payload['name'] = name;
			}

			if (typeof permission !== 'undefined') {
				payload['permission'] = permission;
			}

			if (typeof read !== 'undefined') {
				payload['read'] = read;
			}

			if (typeof write !== 'undefined') {
				payload['write'] = write;
			}

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'post',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * Get Collection
		 *
		 * Get a collection by its unique ID. This endpoint response returns a JSON
		 * object with the collection metadata.
		 *
		 * @param {string} collectionId
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		getCollection: async (collectionId: string): Promise<Models.Collection> => {
			if (typeof collectionId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "collectionId"');
			}

			let path = '/database/collections/{collectionId}'.replace('{collectionId}', collectionId);
			let payload: Payload = {};

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'get',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * Update Collection
		 *
		 * Update a collection by its unique ID.
		 *
		 * @param {string} collectionId
		 * @param {string} name
		 * @param {string} permission
		 * @param {string[]} read
		 * @param {string[]} write
		 * @param {boolean} enabled
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		updateCollection: async (
			collectionId: string,
			name: string,
			permission: string,
			read?: string[],
			write?: string[],
			enabled?: boolean
		): Promise<Models.Collection> => {
			if (typeof collectionId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "collectionId"');
			}

			if (typeof name === 'undefined') {
				throw new AppwriteException('Missing required parameter: "name"');
			}

			if (typeof permission === 'undefined') {
				throw new AppwriteException('Missing required parameter: "permission"');
			}

			let path = '/database/collections/{collectionId}'.replace('{collectionId}', collectionId);
			let payload: Payload = {};

			if (typeof name !== 'undefined') {
				payload['name'] = name;
			}

			if (typeof permission !== 'undefined') {
				payload['permission'] = permission;
			}

			if (typeof read !== 'undefined') {
				payload['read'] = read;
			}

			if (typeof write !== 'undefined') {
				payload['write'] = write;
			}

			if (typeof enabled !== 'undefined') {
				payload['enabled'] = enabled;
			}

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'put',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * Delete Collection
		 *
		 * Delete a collection by its unique ID. Only users with write permissions
		 * have access to delete this resource.
		 *
		 * @param {string} collectionId
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		deleteCollection: async (collectionId: string): Promise<{}> => {
			if (typeof collectionId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "collectionId"');
			}

			let path = '/database/collections/{collectionId}'.replace('{collectionId}', collectionId);
			let payload: Payload = {};

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'delete',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * List Attributes
		 *
		 *
		 * @param {string} collectionId
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		listAttributes: async (collectionId: string): Promise<Models.AttributeList> => {
			if (typeof collectionId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "collectionId"');
			}

			let path = '/database/collections/{collectionId}/attributes'.replace(
				'{collectionId}',
				collectionId
			);
			let payload: Payload = {};

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'get',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * Create Boolean Attribute
		 *
		 * Create a boolean attribute.
		 *
		 *
		 * @param {string} collectionId
		 * @param {string} key
		 * @param {boolean} required
		 * @param {boolean} xdefault
		 * @param {boolean} array
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		createBooleanAttribute: async (
			collectionId: string,
			key: string,
			required: boolean,
			xdefault?: boolean,
			array?: boolean
		): Promise<Models.AttributeBoolean> => {
			if (typeof collectionId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "collectionId"');
			}

			if (typeof key === 'undefined') {
				throw new AppwriteException('Missing required parameter: "key"');
			}

			if (typeof required === 'undefined') {
				throw new AppwriteException('Missing required parameter: "required"');
			}

			let path = '/database/collections/{collectionId}/attributes/boolean'.replace(
				'{collectionId}',
				collectionId
			);
			let payload: Payload = {};

			if (typeof key !== 'undefined') {
				payload['key'] = key;
			}

			if (typeof required !== 'undefined') {
				payload['required'] = required;
			}

			if (typeof xdefault !== 'undefined') {
				payload['default'] = xdefault;
			}

			if (typeof array !== 'undefined') {
				payload['array'] = array;
			}

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'post',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * Create Email Attribute
		 *
		 * Create an email attribute.
		 *
		 *
		 * @param {string} collectionId
		 * @param {string} key
		 * @param {boolean} required
		 * @param {string} xdefault
		 * @param {boolean} array
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		createEmailAttribute: async (
			collectionId: string,
			key: string,
			required: boolean,
			xdefault?: string,
			array?: boolean
		): Promise<Models.AttributeEmail> => {
			if (typeof collectionId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "collectionId"');
			}

			if (typeof key === 'undefined') {
				throw new AppwriteException('Missing required parameter: "key"');
			}

			if (typeof required === 'undefined') {
				throw new AppwriteException('Missing required parameter: "required"');
			}

			let path = '/database/collections/{collectionId}/attributes/email'.replace(
				'{collectionId}',
				collectionId
			);
			let payload: Payload = {};

			if (typeof key !== 'undefined') {
				payload['key'] = key;
			}

			if (typeof required !== 'undefined') {
				payload['required'] = required;
			}

			if (typeof xdefault !== 'undefined') {
				payload['default'] = xdefault;
			}

			if (typeof array !== 'undefined') {
				payload['array'] = array;
			}

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'post',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * Create Enum Attribute
		 *
		 *
		 * @param {string} collectionId
		 * @param {string} key
		 * @param {string[]} elements
		 * @param {boolean} required
		 * @param {string} xdefault
		 * @param {boolean} array
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		createEnumAttribute: async (
			collectionId: string,
			key: string,
			elements: string[],
			required: boolean,
			xdefault?: string,
			array?: boolean
		): Promise<Models.AttributeEnum> => {
			if (typeof collectionId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "collectionId"');
			}

			if (typeof key === 'undefined') {
				throw new AppwriteException('Missing required parameter: "key"');
			}

			if (typeof elements === 'undefined') {
				throw new AppwriteException('Missing required parameter: "elements"');
			}

			if (typeof required === 'undefined') {
				throw new AppwriteException('Missing required parameter: "required"');
			}

			let path = '/database/collections/{collectionId}/attributes/enum'.replace(
				'{collectionId}',
				collectionId
			);
			let payload: Payload = {};

			if (typeof key !== 'undefined') {
				payload['key'] = key;
			}

			if (typeof elements !== 'undefined') {
				payload['elements'] = elements;
			}

			if (typeof required !== 'undefined') {
				payload['required'] = required;
			}

			if (typeof xdefault !== 'undefined') {
				payload['default'] = xdefault;
			}

			if (typeof array !== 'undefined') {
				payload['array'] = array;
			}

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'post',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * Create Float Attribute
		 *
		 * Create a float attribute. Optionally, minimum and maximum values can be
		 * provided.
		 *
		 *
		 * @param {string} collectionId
		 * @param {string} key
		 * @param {boolean} required
		 * @param {string} min
		 * @param {string} max
		 * @param {string} xdefault
		 * @param {boolean} array
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		createFloatAttribute: async (
			collectionId: string,
			key: string,
			required: boolean,
			min?: string,
			max?: string,
			xdefault?: string,
			array?: boolean
		): Promise<Models.AttributeFloat> => {
			if (typeof collectionId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "collectionId"');
			}

			if (typeof key === 'undefined') {
				throw new AppwriteException('Missing required parameter: "key"');
			}

			if (typeof required === 'undefined') {
				throw new AppwriteException('Missing required parameter: "required"');
			}

			let path = '/database/collections/{collectionId}/attributes/float'.replace(
				'{collectionId}',
				collectionId
			);
			let payload: Payload = {};

			if (typeof key !== 'undefined') {
				payload['key'] = key;
			}

			if (typeof required !== 'undefined') {
				payload['required'] = required;
			}

			if (typeof min !== 'undefined') {
				payload['min'] = min;
			}

			if (typeof max !== 'undefined') {
				payload['max'] = max;
			}

			if (typeof xdefault !== 'undefined') {
				payload['default'] = xdefault;
			}

			if (typeof array !== 'undefined') {
				payload['array'] = array;
			}

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'post',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * Create Integer Attribute
		 *
		 * Create an integer attribute. Optionally, minimum and maximum values can be
		 * provided.
		 *
		 *
		 * @param {string} collectionId
		 * @param {string} key
		 * @param {boolean} required
		 * @param {number} min
		 * @param {number} max
		 * @param {number} xdefault
		 * @param {boolean} array
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		createIntegerAttribute: async (
			collectionId: string,
			key: string,
			required: boolean,
			min?: number,
			max?: number,
			xdefault?: number,
			array?: boolean
		): Promise<Models.AttributeInteger> => {
			if (typeof collectionId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "collectionId"');
			}

			if (typeof key === 'undefined') {
				throw new AppwriteException('Missing required parameter: "key"');
			}

			if (typeof required === 'undefined') {
				throw new AppwriteException('Missing required parameter: "required"');
			}

			let path = '/database/collections/{collectionId}/attributes/integer'.replace(
				'{collectionId}',
				collectionId
			);
			let payload: Payload = {};

			if (typeof key !== 'undefined') {
				payload['key'] = key;
			}

			if (typeof required !== 'undefined') {
				payload['required'] = required;
			}

			if (typeof min !== 'undefined') {
				payload['min'] = min;
			}

			if (typeof max !== 'undefined') {
				payload['max'] = max;
			}

			if (typeof xdefault !== 'undefined') {
				payload['default'] = xdefault;
			}

			if (typeof array !== 'undefined') {
				payload['array'] = array;
			}

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'post',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * Create IP Address Attribute
		 *
		 * Create IP address attribute.
		 *
		 *
		 * @param {string} collectionId
		 * @param {string} key
		 * @param {boolean} required
		 * @param {string} xdefault
		 * @param {boolean} array
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		createIpAttribute: async (
			collectionId: string,
			key: string,
			required: boolean,
			xdefault?: string,
			array?: boolean
		): Promise<Models.AttributeIp> => {
			if (typeof collectionId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "collectionId"');
			}

			if (typeof key === 'undefined') {
				throw new AppwriteException('Missing required parameter: "key"');
			}

			if (typeof required === 'undefined') {
				throw new AppwriteException('Missing required parameter: "required"');
			}

			let path = '/database/collections/{collectionId}/attributes/ip'.replace(
				'{collectionId}',
				collectionId
			);
			let payload: Payload = {};

			if (typeof key !== 'undefined') {
				payload['key'] = key;
			}

			if (typeof required !== 'undefined') {
				payload['required'] = required;
			}

			if (typeof xdefault !== 'undefined') {
				payload['default'] = xdefault;
			}

			if (typeof array !== 'undefined') {
				payload['array'] = array;
			}

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'post',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * Create String Attribute
		 *
		 * Create a string attribute.
		 *
		 *
		 * @param {string} collectionId
		 * @param {string} key
		 * @param {number} size
		 * @param {boolean} required
		 * @param {string} xdefault
		 * @param {boolean} array
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		createStringAttribute: async (
			collectionId: string,
			key: string,
			size: number,
			required: boolean,
			xdefault?: string,
			array?: boolean
		): Promise<Models.AttributeString> => {
			if (typeof collectionId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "collectionId"');
			}

			if (typeof key === 'undefined') {
				throw new AppwriteException('Missing required parameter: "key"');
			}

			if (typeof size === 'undefined') {
				throw new AppwriteException('Missing required parameter: "size"');
			}

			if (typeof required === 'undefined') {
				throw new AppwriteException('Missing required parameter: "required"');
			}

			let path = '/database/collections/{collectionId}/attributes/string'.replace(
				'{collectionId}',
				collectionId
			);
			let payload: Payload = {};

			if (typeof key !== 'undefined') {
				payload['key'] = key;
			}

			if (typeof size !== 'undefined') {
				payload['size'] = size;
			}

			if (typeof required !== 'undefined') {
				payload['required'] = required;
			}

			if (typeof xdefault !== 'undefined') {
				payload['default'] = xdefault;
			}

			if (typeof array !== 'undefined') {
				payload['array'] = array;
			}

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'post',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * Create URL Attribute
		 *
		 * Create a URL attribute.
		 *
		 *
		 * @param {string} collectionId
		 * @param {string} key
		 * @param {boolean} required
		 * @param {string} xdefault
		 * @param {boolean} array
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		createUrlAttribute: async (
			collectionId: string,
			key: string,
			required: boolean,
			xdefault?: string,
			array?: boolean
		): Promise<Models.AttributeUrl> => {
			if (typeof collectionId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "collectionId"');
			}

			if (typeof key === 'undefined') {
				throw new AppwriteException('Missing required parameter: "key"');
			}

			if (typeof required === 'undefined') {
				throw new AppwriteException('Missing required parameter: "required"');
			}

			let path = '/database/collections/{collectionId}/attributes/url'.replace(
				'{collectionId}',
				collectionId
			);
			let payload: Payload = {};

			if (typeof key !== 'undefined') {
				payload['key'] = key;
			}

			if (typeof required !== 'undefined') {
				payload['required'] = required;
			}

			if (typeof xdefault !== 'undefined') {
				payload['default'] = xdefault;
			}

			if (typeof array !== 'undefined') {
				payload['array'] = array;
			}

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'post',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * Get Attribute
		 *
		 *
		 * @param {string} collectionId
		 * @param {string} key
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		getAttribute: async (collectionId: string, key: string): Promise<{}> => {
			if (typeof collectionId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "collectionId"');
			}

			if (typeof key === 'undefined') {
				throw new AppwriteException('Missing required parameter: "key"');
			}

			let path = '/database/collections/{collectionId}/attributes/{key}'
				.replace('{collectionId}', collectionId)
				.replace('{key}', key);
			let payload: Payload = {};

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'get',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * Delete Attribute
		 *
		 *
		 * @param {string} collectionId
		 * @param {string} key
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		deleteAttribute: async (collectionId: string, key: string): Promise<{}> => {
			if (typeof collectionId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "collectionId"');
			}

			if (typeof key === 'undefined') {
				throw new AppwriteException('Missing required parameter: "key"');
			}

			let path = '/database/collections/{collectionId}/attributes/{key}'
				.replace('{collectionId}', collectionId)
				.replace('{key}', key);
			let payload: Payload = {};

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'delete',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * List Documents
		 *
		 * Get a list of all the user documents. You can use the query params to
		 * filter your results. On admin mode, this endpoint will return a list of all
		 * of the project's documents. [Learn more about different API
		 * modes](/docs/admin).
		 *
		 * @param {string} collectionId
		 * @param {string[]} queries
		 * @param {number} limit
		 * @param {number} offset
		 * @param {string} cursor
		 * @param {string} cursorDirection
		 * @param {string[]} orderAttributes
		 * @param {string[]} orderTypes
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		listDocuments: async <Document extends Models.Document>(
			collectionId: string,
			queries?: string[],
			limit?: number,
			offset?: number,
			cursor?: string,
			cursorDirection?: string,
			orderAttributes?: string[],
			orderTypes?: string[]
		): Promise<Models.DocumentList<Document>> => {
			if (typeof collectionId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "collectionId"');
			}

			let path = '/database/collections/{collectionId}/documents'.replace(
				'{collectionId}',
				collectionId
			);
			let payload: Payload = {};

			if (typeof queries !== 'undefined') {
				payload['queries'] = queries;
			}

			if (typeof limit !== 'undefined') {
				payload['limit'] = limit;
			}

			if (typeof offset !== 'undefined') {
				payload['offset'] = offset;
			}

			if (typeof cursor !== 'undefined') {
				payload['cursor'] = cursor;
			}

			if (typeof cursorDirection !== 'undefined') {
				payload['cursorDirection'] = cursorDirection;
			}

			if (typeof orderAttributes !== 'undefined') {
				payload['orderAttributes'] = orderAttributes;
			}

			if (typeof orderTypes !== 'undefined') {
				payload['orderTypes'] = orderTypes;
			}

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'get',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * Create Document
		 *
		 * Create a new Document. Before using this route, you should create a new
		 * collection resource using either a [server
		 * integration](/docs/server/database#databaseCreateCollection) API or
		 * directly from your database console.
		 *
		 * @param {string} collectionId
		 * @param {string} documentId
		 * @param {object} data
		 * @param {string[]} read
		 * @param {string[]} write
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		createDocument: async <Document extends Models.Document>(
			collectionId: string,
			documentId: string,
			data: object,
			read?: string[],
			write?: string[]
		): Promise<Document> => {
			if (typeof collectionId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "collectionId"');
			}

			if (typeof documentId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "documentId"');
			}

			if (typeof data === 'undefined') {
				throw new AppwriteException('Missing required parameter: "data"');
			}

			let path = '/database/collections/{collectionId}/documents'.replace(
				'{collectionId}',
				collectionId
			);
			let payload: Payload = {};

			if (typeof documentId !== 'undefined') {
				payload['documentId'] = documentId;
			}

			if (typeof data !== 'undefined') {
				payload['data'] = data;
			}

			if (typeof read !== 'undefined') {
				payload['read'] = read;
			}

			if (typeof write !== 'undefined') {
				payload['write'] = write;
			}

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'post',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * Get Document
		 *
		 * Get a document by its unique ID. This endpoint response returns a JSON
		 * object with the document data.
		 *
		 * @param {string} collectionId
		 * @param {string} documentId
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		getDocument: async <Document extends Models.Document>(
			collectionId: string,
			documentId: string
		): Promise<Document> => {
			if (typeof collectionId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "collectionId"');
			}

			if (typeof documentId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "documentId"');
			}

			let path = '/database/collections/{collectionId}/documents/{documentId}'
				.replace('{collectionId}', collectionId)
				.replace('{documentId}', documentId);
			let payload: Payload = {};

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'get',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * Update Document
		 *
		 * Update a document by its unique ID. Using the patch method you can pass
		 * only specific fields that will get updated.
		 *
		 * @param {string} collectionId
		 * @param {string} documentId
		 * @param {object} data
		 * @param {string[]} read
		 * @param {string[]} write
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		updateDocument: async <Document extends Models.Document>(
			collectionId: string,
			documentId: string,
			data: object,
			read?: string[],
			write?: string[]
		): Promise<Document> => {
			if (typeof collectionId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "collectionId"');
			}

			if (typeof documentId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "documentId"');
			}

			if (typeof data === 'undefined') {
				throw new AppwriteException('Missing required parameter: "data"');
			}

			let path = '/database/collections/{collectionId}/documents/{documentId}'
				.replace('{collectionId}', collectionId)
				.replace('{documentId}', documentId);
			let payload: Payload = {};

			if (typeof data !== 'undefined') {
				payload['data'] = data;
			}

			if (typeof read !== 'undefined') {
				payload['read'] = read;
			}

			if (typeof write !== 'undefined') {
				payload['write'] = write;
			}

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'patch',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * Delete Document
		 *
		 * Delete a document by its unique ID. This endpoint deletes only the parent
		 * documents, its attributes and relations to other documents. Child documents
		 * **will not** be deleted.
		 *
		 * @param {string} collectionId
		 * @param {string} documentId
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		deleteDocument: async (collectionId: string, documentId: string): Promise<{}> => {
			if (typeof collectionId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "collectionId"');
			}

			if (typeof documentId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "documentId"');
			}

			let path = '/database/collections/{collectionId}/documents/{documentId}'
				.replace('{collectionId}', collectionId)
				.replace('{documentId}', documentId);
			let payload: Payload = {};

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'delete',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * List Document Logs
		 *
		 * Get the document activity logs list by its unique ID.
		 *
		 * @param {string} collectionId
		 * @param {string} documentId
		 * @param {number} limit
		 * @param {number} offset
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		listDocumentLogs: async (
			collectionId: string,
			documentId: string,
			limit?: number,
			offset?: number
		): Promise<Models.LogList> => {
			if (typeof collectionId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "collectionId"');
			}

			if (typeof documentId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "documentId"');
			}

			let path = '/database/collections/{collectionId}/documents/{documentId}/logs'
				.replace('{collectionId}', collectionId)
				.replace('{documentId}', documentId);
			let payload: Payload = {};

			if (typeof limit !== 'undefined') {
				payload['limit'] = limit;
			}

			if (typeof offset !== 'undefined') {
				payload['offset'] = offset;
			}

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'get',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * List Indexes
		 *
		 *
		 * @param {string} collectionId
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		listIndexes: async (collectionId: string): Promise<Models.IndexList> => {
			if (typeof collectionId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "collectionId"');
			}

			let path = '/database/collections/{collectionId}/indexes'.replace(
				'{collectionId}',
				collectionId
			);
			let payload: Payload = {};

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'get',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * Create Index
		 *
		 *
		 * @param {string} collectionId
		 * @param {string} key
		 * @param {string} type
		 * @param {string[]} attributes
		 * @param {string[]} orders
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		createIndex: async (
			collectionId: string,
			key: string,
			type: string,
			attributes: string[],
			orders?: string[]
		): Promise<Models.Index> => {
			if (typeof collectionId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "collectionId"');
			}

			if (typeof key === 'undefined') {
				throw new AppwriteException('Missing required parameter: "key"');
			}

			if (typeof type === 'undefined') {
				throw new AppwriteException('Missing required parameter: "type"');
			}

			if (typeof attributes === 'undefined') {
				throw new AppwriteException('Missing required parameter: "attributes"');
			}

			let path = '/database/collections/{collectionId}/indexes'.replace(
				'{collectionId}',
				collectionId
			);
			let payload: Payload = {};

			if (typeof key !== 'undefined') {
				payload['key'] = key;
			}

			if (typeof type !== 'undefined') {
				payload['type'] = type;
			}

			if (typeof attributes !== 'undefined') {
				payload['attributes'] = attributes;
			}

			if (typeof orders !== 'undefined') {
				payload['orders'] = orders;
			}

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'post',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * Get Index
		 *
		 *
		 * @param {string} collectionId
		 * @param {string} key
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		getIndex: async (collectionId: string, key: string): Promise<Models.Index> => {
			if (typeof collectionId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "collectionId"');
			}

			if (typeof key === 'undefined') {
				throw new AppwriteException('Missing required parameter: "key"');
			}

			let path = '/database/collections/{collectionId}/indexes/{key}'
				.replace('{collectionId}', collectionId)
				.replace('{key}', key);
			let payload: Payload = {};

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'get',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * Delete Index
		 *
		 *
		 * @param {string} collectionId
		 * @param {string} key
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		deleteIndex: async (collectionId: string, key: string): Promise<{}> => {
			if (typeof collectionId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "collectionId"');
			}

			if (typeof key === 'undefined') {
				throw new AppwriteException('Missing required parameter: "key"');
			}

			let path = '/database/collections/{collectionId}/indexes/{key}'
				.replace('{collectionId}', collectionId)
				.replace('{key}', key);
			let payload: Payload = {};

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'delete',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * List Collection Logs
		 *
		 * Get the collection activity logs list by its unique ID.
		 *
		 * @param {string} collectionId
		 * @param {number} limit
		 * @param {number} offset
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		listCollectionLogs: async (
			collectionId: string,
			limit?: number,
			offset?: number
		): Promise<Models.LogList> => {
			if (typeof collectionId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "collectionId"');
			}

			let path = '/database/collections/{collectionId}/logs'.replace(
				'{collectionId}',
				collectionId
			);
			let payload: Payload = {};

			if (typeof limit !== 'undefined') {
				payload['limit'] = limit;
			}

			if (typeof offset !== 'undefined') {
				payload['offset'] = offset;
			}

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'get',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * Get usage stats for the database
		 *
		 *
		 * @param {string} range
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		getUsage: async (range?: string): Promise<Models.UsageDatabase> => {
			let path = '/database/usage';
			let payload: Payload = {};

			if (typeof range !== 'undefined') {
				payload['range'] = range;
			}

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'get',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * Get usage stats for a collection
		 *
		 *
		 * @param {string} collectionId
		 * @param {string} range
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		getCollectionUsage: async (
			collectionId: string,
			range?: string
		): Promise<Models.UsageCollection> => {
			if (typeof collectionId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "collectionId"');
			}

			let path = '/database/{collectionId}/usage'.replace('{collectionId}', collectionId);
			let payload: Payload = {};

			if (typeof range !== 'undefined') {
				payload['range'] = range;
			}

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'get',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		}
	};

	functions = {
		/**
		 * List Functions
		 *
		 * Get a list of all the project's functions. You can use the query params to
		 * filter your results.
		 *
		 * @param {string} search
		 * @param {number} limit
		 * @param {number} offset
		 * @param {string} cursor
		 * @param {string} cursorDirection
		 * @param {string} orderType
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		list: async (
			search?: string,
			limit?: number,
			offset?: number,
			cursor?: string,
			cursorDirection?: string,
			orderType?: string
		): Promise<Models.FunctionList> => {
			let path = '/functions';
			let payload: Payload = {};

			if (typeof search !== 'undefined') {
				payload['search'] = search;
			}

			if (typeof limit !== 'undefined') {
				payload['limit'] = limit;
			}

			if (typeof offset !== 'undefined') {
				payload['offset'] = offset;
			}

			if (typeof cursor !== 'undefined') {
				payload['cursor'] = cursor;
			}

			if (typeof cursorDirection !== 'undefined') {
				payload['cursorDirection'] = cursorDirection;
			}

			if (typeof orderType !== 'undefined') {
				payload['orderType'] = orderType;
			}

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'get',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * Create Function
		 *
		 * Create a new function. You can pass a list of
		 * [permissions](/docs/permissions) to allow different project users or team
		 * with access to execute the function using the client API.
		 *
		 * @param {string} functionId
		 * @param {string} name
		 * @param {string[]} execute
		 * @param {string} runtime
		 * @param {object} vars
		 * @param {string[]} events
		 * @param {string} schedule
		 * @param {number} timeout
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		create: async (
			functionId: string,
			name: string,
			execute: string[],
			runtime: string,
			vars?: object,
			events?: string[],
			schedule?: string,
			timeout?: number
		): Promise<Models.Function> => {
			if (typeof functionId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "functionId"');
			}

			if (typeof name === 'undefined') {
				throw new AppwriteException('Missing required parameter: "name"');
			}

			if (typeof execute === 'undefined') {
				throw new AppwriteException('Missing required parameter: "execute"');
			}

			if (typeof runtime === 'undefined') {
				throw new AppwriteException('Missing required parameter: "runtime"');
			}

			let path = '/functions';
			let payload: Payload = {};

			if (typeof functionId !== 'undefined') {
				payload['functionId'] = functionId;
			}

			if (typeof name !== 'undefined') {
				payload['name'] = name;
			}

			if (typeof execute !== 'undefined') {
				payload['execute'] = execute;
			}

			if (typeof runtime !== 'undefined') {
				payload['runtime'] = runtime;
			}

			if (typeof vars !== 'undefined') {
				payload['vars'] = vars;
			}

			if (typeof events !== 'undefined') {
				payload['events'] = events;
			}

			if (typeof schedule !== 'undefined') {
				payload['schedule'] = schedule;
			}

			if (typeof timeout !== 'undefined') {
				payload['timeout'] = timeout;
			}

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'post',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * List the currently active function runtimes.
		 *
		 * Get a list of all runtimes that are currently active in your project.
		 *
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		listRuntimes: async (): Promise<Models.RuntimeList> => {
			let path = '/functions/runtimes';
			let payload: Payload = {};

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'get',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * Get Function
		 *
		 * Get a function by its unique ID.
		 *
		 * @param {string} functionId
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		get: async (functionId: string): Promise<Models.Function> => {
			if (typeof functionId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "functionId"');
			}

			let path = '/functions/{functionId}'.replace('{functionId}', functionId);
			let payload: Payload = {};

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'get',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * Update Function
		 *
		 * Update function by its unique ID.
		 *
		 * @param {string} functionId
		 * @param {string} name
		 * @param {string[]} execute
		 * @param {object} vars
		 * @param {string[]} events
		 * @param {string} schedule
		 * @param {number} timeout
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		update: async (
			functionId: string,
			name: string,
			execute: string[],
			vars?: object,
			events?: string[],
			schedule?: string,
			timeout?: number
		): Promise<Models.Function> => {
			if (typeof functionId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "functionId"');
			}

			if (typeof name === 'undefined') {
				throw new AppwriteException('Missing required parameter: "name"');
			}

			if (typeof execute === 'undefined') {
				throw new AppwriteException('Missing required parameter: "execute"');
			}

			let path = '/functions/{functionId}'.replace('{functionId}', functionId);
			let payload: Payload = {};

			if (typeof name !== 'undefined') {
				payload['name'] = name;
			}

			if (typeof execute !== 'undefined') {
				payload['execute'] = execute;
			}

			if (typeof vars !== 'undefined') {
				payload['vars'] = vars;
			}

			if (typeof events !== 'undefined') {
				payload['events'] = events;
			}

			if (typeof schedule !== 'undefined') {
				payload['schedule'] = schedule;
			}

			if (typeof timeout !== 'undefined') {
				payload['timeout'] = timeout;
			}

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'put',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * Delete Function
		 *
		 * Delete a function by its unique ID.
		 *
		 * @param {string} functionId
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		delete: async (functionId: string): Promise<{}> => {
			if (typeof functionId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "functionId"');
			}

			let path = '/functions/{functionId}'.replace('{functionId}', functionId);
			let payload: Payload = {};

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'delete',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * List Executions
		 *
		 * Get a list of all the current user function execution logs. You can use the
		 * query params to filter your results. On admin mode, this endpoint will
		 * return a list of all of the project's executions. [Learn more about
		 * different API modes](/docs/admin).
		 *
		 * @param {string} functionId
		 * @param {number} limit
		 * @param {number} offset
		 * @param {string} search
		 * @param {string} cursor
		 * @param {string} cursorDirection
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		listExecutions: async (
			functionId: string,
			limit?: number,
			offset?: number,
			search?: string,
			cursor?: string,
			cursorDirection?: string
		): Promise<Models.ExecutionList> => {
			if (typeof functionId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "functionId"');
			}

			let path = '/functions/{functionId}/executions'.replace('{functionId}', functionId);
			let payload: Payload = {};

			if (typeof limit !== 'undefined') {
				payload['limit'] = limit;
			}

			if (typeof offset !== 'undefined') {
				payload['offset'] = offset;
			}

			if (typeof search !== 'undefined') {
				payload['search'] = search;
			}

			if (typeof cursor !== 'undefined') {
				payload['cursor'] = cursor;
			}

			if (typeof cursorDirection !== 'undefined') {
				payload['cursorDirection'] = cursorDirection;
			}

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'get',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * Create Execution
		 *
		 * Trigger a function execution. The returned object will return you the
		 * current execution status. You can ping the `Get Execution` endpoint to get
		 * updates on the current execution status. Once this endpoint is called, your
		 * function execution process will start asynchronously.
		 *
		 * @param {string} functionId
		 * @param {string} data
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		createExecution: async (functionId: string, data?: string): Promise<Models.Execution> => {
			if (typeof functionId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "functionId"');
			}

			let path = '/functions/{functionId}/executions'.replace('{functionId}', functionId);
			let payload: Payload = {};

			if (typeof data !== 'undefined') {
				payload['data'] = data;
			}

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'post',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * Get Execution
		 *
		 * Get a function execution log by its unique ID.
		 *
		 * @param {string} functionId
		 * @param {string} executionId
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		getExecution: async (functionId: string, executionId: string): Promise<Models.Execution> => {
			if (typeof functionId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "functionId"');
			}

			if (typeof executionId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "executionId"');
			}

			let path = '/functions/{functionId}/executions/{executionId}'
				.replace('{functionId}', functionId)
				.replace('{executionId}', executionId);
			let payload: Payload = {};

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'get',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * Update Function Tag
		 *
		 * Update the function code tag ID using the unique function ID. Use this
		 * endpoint to switch the code tag that should be executed by the execution
		 * endpoint.
		 *
		 * @param {string} functionId
		 * @param {string} tag
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		updateTag: async (functionId: string, tag: string): Promise<Models.Function> => {
			if (typeof functionId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "functionId"');
			}

			if (typeof tag === 'undefined') {
				throw new AppwriteException('Missing required parameter: "tag"');
			}

			let path = '/functions/{functionId}/tag'.replace('{functionId}', functionId);
			let payload: Payload = {};

			if (typeof tag !== 'undefined') {
				payload['tag'] = tag;
			}

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'patch',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * List Tags
		 *
		 * Get a list of all the project's code tags. You can use the query params to
		 * filter your results.
		 *
		 * @param {string} functionId
		 * @param {string} search
		 * @param {number} limit
		 * @param {number} offset
		 * @param {string} cursor
		 * @param {string} cursorDirection
		 * @param {string} orderType
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		listTags: async (
			functionId: string,
			search?: string,
			limit?: number,
			offset?: number,
			cursor?: string,
			cursorDirection?: string,
			orderType?: string
		): Promise<Models.TagList> => {
			if (typeof functionId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "functionId"');
			}

			let path = '/functions/{functionId}/tags'.replace('{functionId}', functionId);
			let payload: Payload = {};

			if (typeof search !== 'undefined') {
				payload['search'] = search;
			}

			if (typeof limit !== 'undefined') {
				payload['limit'] = limit;
			}

			if (typeof offset !== 'undefined') {
				payload['offset'] = offset;
			}

			if (typeof cursor !== 'undefined') {
				payload['cursor'] = cursor;
			}

			if (typeof cursorDirection !== 'undefined') {
				payload['cursorDirection'] = cursorDirection;
			}

			if (typeof orderType !== 'undefined') {
				payload['orderType'] = orderType;
			}

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'get',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * Create Tag
		 *
		 * Create a new function code tag. Use this endpoint to upload a new version
		 * of your code function. To execute your newly uploaded code, you'll need to
		 * update the function's tag to use your new tag UID.
		 *
		 * This endpoint accepts a tar.gz file compressed with your code. Make sure to
		 * include any dependencies your code has within the compressed file. You can
		 * learn more about code packaging in the [Appwrite Cloud Functions
		 * tutorial](/docs/functions).
		 *
		 * Use the "command" param to set the entry point used to execute your code.
		 *
		 * @param {string} functionId
		 * @param {string} command
		 * @param {File} code
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		createTag: async (functionId: string, command: string, code: File): Promise<Models.Tag> => {
			if (typeof functionId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "functionId"');
			}

			if (typeof command === 'undefined') {
				throw new AppwriteException('Missing required parameter: "command"');
			}

			if (typeof code === 'undefined') {
				throw new AppwriteException('Missing required parameter: "code"');
			}

			let path = '/functions/{functionId}/tags'.replace('{functionId}', functionId);
			let payload: Payload = {};

			if (typeof command !== 'undefined') {
				payload['command'] = command;
			}

			if (typeof code !== 'undefined') {
				payload['code'] = code;
			}

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'post',
				uri,
				{
					'content-type': 'multipart/form-data'
				},
				payload
			);
		},

		/**
		 * Get Tag
		 *
		 * Get a code tag by its unique ID.
		 *
		 * @param {string} functionId
		 * @param {string} tagId
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		getTag: async (functionId: string, tagId: string): Promise<Models.Tag> => {
			if (typeof functionId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "functionId"');
			}

			if (typeof tagId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "tagId"');
			}

			let path = '/functions/{functionId}/tags/{tagId}'
				.replace('{functionId}', functionId)
				.replace('{tagId}', tagId);
			let payload: Payload = {};

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'get',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * Delete Tag
		 *
		 * Delete a code tag by its unique ID.
		 *
		 * @param {string} functionId
		 * @param {string} tagId
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		deleteTag: async (functionId: string, tagId: string): Promise<{}> => {
			if (typeof functionId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "functionId"');
			}

			if (typeof tagId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "tagId"');
			}

			let path = '/functions/{functionId}/tags/{tagId}'
				.replace('{functionId}', functionId)
				.replace('{tagId}', tagId);
			let payload: Payload = {};

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'delete',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * Get Function Usage
		 *
		 *
		 * @param {string} functionId
		 * @param {string} range
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		getUsage: async (functionId: string, range?: string): Promise<Models.UsageFunctions> => {
			if (typeof functionId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "functionId"');
			}

			let path = '/functions/{functionId}/usage'.replace('{functionId}', functionId);
			let payload: Payload = {};

			if (typeof range !== 'undefined') {
				payload['range'] = range;
			}

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'get',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		}
	};

	health = {
		/**
		 * Get HTTP
		 *
		 * Check the Appwrite HTTP server is up and responsive.
		 *
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		get: async (): Promise<Models.HealthStatus> => {
			let path = '/health';
			let payload: Payload = {};

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'get',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * Get Antivirus
		 *
		 * Check the Appwrite Antivirus server is up and connection is successful.
		 *
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		getAntivirus: async (): Promise<Models.HealthAntivirus> => {
			let path = '/health/anti-virus';
			let payload: Payload = {};

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'get',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * Get Cache
		 *
		 * Check the Appwrite in-memory cache server is up and connection is
		 * successful.
		 *
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		getCache: async (): Promise<Models.HealthStatus> => {
			let path = '/health/cache';
			let payload: Payload = {};

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'get',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * Get DB
		 *
		 * Check the Appwrite database server is up and connection is successful.
		 *
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		getDB: async (): Promise<Models.HealthStatus> => {
			let path = '/health/db';
			let payload: Payload = {};

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'get',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * Get Certificates Queue
		 *
		 * Get the number of certificates that are waiting to be issued against
		 * [Letsencrypt](https://letsencrypt.org/) in the Appwrite internal queue
		 * server.
		 *
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		getQueueCertificates: async (): Promise<Models.HealthQueue> => {
			let path = '/health/queue/certificates';
			let payload: Payload = {};

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'get',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * Get Functions Queue
		 *
		 *
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		getQueueFunctions: async (): Promise<Models.HealthQueue> => {
			let path = '/health/queue/functions';
			let payload: Payload = {};

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'get',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * Get Logs Queue
		 *
		 * Get the number of logs that are waiting to be processed in the Appwrite
		 * internal queue server.
		 *
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		getQueueLogs: async (): Promise<Models.HealthQueue> => {
			let path = '/health/queue/logs';
			let payload: Payload = {};

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'get',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * Get Usage Queue
		 *
		 * Get the number of usage stats that are waiting to be processed in the
		 * Appwrite internal queue server.
		 *
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		getQueueUsage: async (): Promise<Models.HealthQueue> => {
			let path = '/health/queue/usage';
			let payload: Payload = {};

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'get',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * Get Webhooks Queue
		 *
		 * Get the number of webhooks that are waiting to be processed in the Appwrite
		 * internal queue server.
		 *
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		getQueueWebhooks: async (): Promise<Models.HealthQueue> => {
			let path = '/health/queue/webhooks';
			let payload: Payload = {};

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'get',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * Get Local Storage
		 *
		 * Check the Appwrite local storage device is up and connection is successful.
		 *
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		getStorageLocal: async (): Promise<Models.HealthStatus> => {
			let path = '/health/storage/local';
			let payload: Payload = {};

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'get',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * Get Time
		 *
		 * Check the Appwrite server time is synced with Google remote NTP server. We
		 * use this technology to smoothly handle leap seconds with no disruptive
		 * events. The [Network Time
		 * Protocol](https://en.wikipedia.org/wiki/Network_Time_Protocol) (NTP) is
		 * used by hundreds of millions of computers and devices to synchronize their
		 * clocks over the Internet. If your computer sets its own clock, it likely
		 * uses NTP.
		 *
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		getTime: async (): Promise<Models.HealthTime> => {
			let path = '/health/time';
			let payload: Payload = {};

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'get',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		}
	};

	locale = {
		/**
		 * Get User Locale
		 *
		 * Get the current user location based on IP. Returns an object with user
		 * country code, country name, continent name, continent code, ip address and
		 * suggested currency. You can use the locale header to get the data in a
		 * supported language.
		 *
		 * ([IP Geolocation by DB-IP](https://db-ip.com))
		 *
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		get: async (): Promise<Models.Locale> => {
			let path = '/locale';
			let payload: Payload = {};

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'get',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * List Continents
		 *
		 * List of all continents. You can use the locale header to get the data in a
		 * supported language.
		 *
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		getContinents: async (): Promise<Models.ContinentList> => {
			let path = '/locale/continents';
			let payload: Payload = {};

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'get',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * List Countries
		 *
		 * List of all countries. You can use the locale header to get the data in a
		 * supported language.
		 *
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		getCountries: async (): Promise<Models.CountryList> => {
			let path = '/locale/countries';
			let payload: Payload = {};

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'get',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * List EU Countries
		 *
		 * List of all countries that are currently members of the EU. You can use the
		 * locale header to get the data in a supported language.
		 *
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		getCountriesEU: async (): Promise<Models.CountryList> => {
			let path = '/locale/countries/eu';
			let payload: Payload = {};

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'get',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * List Countries Phone Codes
		 *
		 * List of all countries phone codes. You can use the locale header to get the
		 * data in a supported language.
		 *
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		getCountriesPhones: async (): Promise<Models.PhoneList> => {
			let path = '/locale/countries/phones';
			let payload: Payload = {};

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'get',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * List Currencies
		 *
		 * List of all currencies, including currency symbol, name, plural, and
		 * decimal digits for all major and minor currencies. You can use the locale
		 * header to get the data in a supported language.
		 *
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		getCurrencies: async (): Promise<Models.CurrencyList> => {
			let path = '/locale/currencies';
			let payload: Payload = {};

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'get',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * List Languages
		 *
		 * List of all languages classified by ISO 639-1 including 2-letter code, name
		 * in English, and name in the respective language.
		 *
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		getLanguages: async (): Promise<Models.LanguageList> => {
			let path = '/locale/languages';
			let payload: Payload = {};

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'get',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		}
	};

	projects = {
		/**
		 * List Projects
		 *
		 *
		 * @param {string} search
		 * @param {number} limit
		 * @param {number} offset
		 * @param {string} cursor
		 * @param {string} cursorDirection
		 * @param {string} orderType
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		list: async (
			search?: string,
			limit?: number,
			offset?: number,
			cursor?: string,
			cursorDirection?: string,
			orderType?: string
		): Promise<Models.ProjectList> => {
			let path = '/projects';
			let payload: Payload = {};

			if (typeof search !== 'undefined') {
				payload['search'] = search;
			}

			if (typeof limit !== 'undefined') {
				payload['limit'] = limit;
			}

			if (typeof offset !== 'undefined') {
				payload['offset'] = offset;
			}

			if (typeof cursor !== 'undefined') {
				payload['cursor'] = cursor;
			}

			if (typeof cursorDirection !== 'undefined') {
				payload['cursorDirection'] = cursorDirection;
			}

			if (typeof orderType !== 'undefined') {
				payload['orderType'] = orderType;
			}

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'get',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * Create Project
		 *
		 *
		 * @param {string} projectId
		 * @param {string} name
		 * @param {string} teamId
		 * @param {string} description
		 * @param {string} logo
		 * @param {string} url
		 * @param {string} legalName
		 * @param {string} legalCountry
		 * @param {string} legalState
		 * @param {string} legalCity
		 * @param {string} legalAddress
		 * @param {string} legalTaxId
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		create: async (
			projectId: string,
			name: string,
			teamId: string,
			description?: string,
			logo?: string,
			url?: string,
			legalName?: string,
			legalCountry?: string,
			legalState?: string,
			legalCity?: string,
			legalAddress?: string,
			legalTaxId?: string
		): Promise<Models.Project> => {
			if (typeof projectId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "projectId"');
			}

			if (typeof name === 'undefined') {
				throw new AppwriteException('Missing required parameter: "name"');
			}

			if (typeof teamId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "teamId"');
			}

			let path = '/projects';
			let payload: Payload = {};

			if (typeof projectId !== 'undefined') {
				payload['projectId'] = projectId;
			}

			if (typeof name !== 'undefined') {
				payload['name'] = name;
			}

			if (typeof teamId !== 'undefined') {
				payload['teamId'] = teamId;
			}

			if (typeof description !== 'undefined') {
				payload['description'] = description;
			}

			if (typeof logo !== 'undefined') {
				payload['logo'] = logo;
			}

			if (typeof url !== 'undefined') {
				payload['url'] = url;
			}

			if (typeof legalName !== 'undefined') {
				payload['legalName'] = legalName;
			}

			if (typeof legalCountry !== 'undefined') {
				payload['legalCountry'] = legalCountry;
			}

			if (typeof legalState !== 'undefined') {
				payload['legalState'] = legalState;
			}

			if (typeof legalCity !== 'undefined') {
				payload['legalCity'] = legalCity;
			}

			if (typeof legalAddress !== 'undefined') {
				payload['legalAddress'] = legalAddress;
			}

			if (typeof legalTaxId !== 'undefined') {
				payload['legalTaxId'] = legalTaxId;
			}

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'post',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * Get Project
		 *
		 *
		 * @param {string} projectId
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		get: async (projectId: string): Promise<Models.Project> => {
			if (typeof projectId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "projectId"');
			}

			let path = '/projects/{projectId}'.replace('{projectId}', projectId);
			let payload: Payload = {};

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'get',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * Update Project
		 *
		 *
		 * @param {string} projectId
		 * @param {string} name
		 * @param {string} description
		 * @param {string} logo
		 * @param {string} url
		 * @param {string} legalName
		 * @param {string} legalCountry
		 * @param {string} legalState
		 * @param {string} legalCity
		 * @param {string} legalAddress
		 * @param {string} legalTaxId
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		update: async (
			projectId: string,
			name: string,
			description?: string,
			logo?: string,
			url?: string,
			legalName?: string,
			legalCountry?: string,
			legalState?: string,
			legalCity?: string,
			legalAddress?: string,
			legalTaxId?: string
		): Promise<Models.Project> => {
			if (typeof projectId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "projectId"');
			}

			if (typeof name === 'undefined') {
				throw new AppwriteException('Missing required parameter: "name"');
			}

			let path = '/projects/{projectId}'.replace('{projectId}', projectId);
			let payload: Payload = {};

			if (typeof name !== 'undefined') {
				payload['name'] = name;
			}

			if (typeof description !== 'undefined') {
				payload['description'] = description;
			}

			if (typeof logo !== 'undefined') {
				payload['logo'] = logo;
			}

			if (typeof url !== 'undefined') {
				payload['url'] = url;
			}

			if (typeof legalName !== 'undefined') {
				payload['legalName'] = legalName;
			}

			if (typeof legalCountry !== 'undefined') {
				payload['legalCountry'] = legalCountry;
			}

			if (typeof legalState !== 'undefined') {
				payload['legalState'] = legalState;
			}

			if (typeof legalCity !== 'undefined') {
				payload['legalCity'] = legalCity;
			}

			if (typeof legalAddress !== 'undefined') {
				payload['legalAddress'] = legalAddress;
			}

			if (typeof legalTaxId !== 'undefined') {
				payload['legalTaxId'] = legalTaxId;
			}

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'patch',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * Delete Project
		 *
		 *
		 * @param {string} projectId
		 * @param {string} password
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		delete: async (projectId: string, password: string): Promise<{}> => {
			if (typeof projectId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "projectId"');
			}

			if (typeof password === 'undefined') {
				throw new AppwriteException('Missing required parameter: "password"');
			}

			let path = '/projects/{projectId}'.replace('{projectId}', projectId);
			let payload: Payload = {};

			if (typeof password !== 'undefined') {
				payload['password'] = password;
			}

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'delete',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * Update Project users limit
		 *
		 *
		 * @param {string} projectId
		 * @param {number} limit
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		updateAuthLimit: async (projectId: string, limit: number): Promise<Models.Project> => {
			if (typeof projectId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "projectId"');
			}

			if (typeof limit === 'undefined') {
				throw new AppwriteException('Missing required parameter: "limit"');
			}

			let path = '/projects/{projectId}/auth/limit'.replace('{projectId}', projectId);
			let payload: Payload = {};

			if (typeof limit !== 'undefined') {
				payload['limit'] = limit;
			}

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'patch',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * Update Project auth method status. Use this endpoint to enable or disable a given auth method for this project.
		 *
		 *
		 * @param {string} projectId
		 * @param {string} method
		 * @param {boolean} status
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		updateAuthStatus: async (
			projectId: string,
			method: string,
			status: boolean
		): Promise<Models.Project> => {
			if (typeof projectId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "projectId"');
			}

			if (typeof method === 'undefined') {
				throw new AppwriteException('Missing required parameter: "method"');
			}

			if (typeof status === 'undefined') {
				throw new AppwriteException('Missing required parameter: "status"');
			}

			let path = '/projects/{projectId}/auth/{method}'
				.replace('{projectId}', projectId)
				.replace('{method}', method);
			let payload: Payload = {};

			if (typeof status !== 'undefined') {
				payload['status'] = status;
			}

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'patch',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * List Domains
		 *
		 *
		 * @param {string} projectId
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		listDomains: async (projectId: string): Promise<Models.DomainList> => {
			if (typeof projectId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "projectId"');
			}

			let path = '/projects/{projectId}/domains'.replace('{projectId}', projectId);
			let payload: Payload = {};

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'get',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * Create Domain
		 *
		 *
		 * @param {string} projectId
		 * @param {string} domain
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		createDomain: async (projectId: string, domain: string): Promise<Models.Domain> => {
			if (typeof projectId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "projectId"');
			}

			if (typeof domain === 'undefined') {
				throw new AppwriteException('Missing required parameter: "domain"');
			}

			let path = '/projects/{projectId}/domains'.replace('{projectId}', projectId);
			let payload: Payload = {};

			if (typeof domain !== 'undefined') {
				payload['domain'] = domain;
			}

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'post',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * Get Domain
		 *
		 *
		 * @param {string} projectId
		 * @param {string} domainId
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		getDomain: async (projectId: string, domainId: string): Promise<Models.Domain> => {
			if (typeof projectId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "projectId"');
			}

			if (typeof domainId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "domainId"');
			}

			let path = '/projects/{projectId}/domains/{domainId}'
				.replace('{projectId}', projectId)
				.replace('{domainId}', domainId);
			let payload: Payload = {};

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'get',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * Delete Domain
		 *
		 *
		 * @param {string} projectId
		 * @param {string} domainId
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		deleteDomain: async (projectId: string, domainId: string): Promise<{}> => {
			if (typeof projectId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "projectId"');
			}

			if (typeof domainId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "domainId"');
			}

			let path = '/projects/{projectId}/domains/{domainId}'
				.replace('{projectId}', projectId)
				.replace('{domainId}', domainId);
			let payload: Payload = {};

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'delete',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * Update Domain Verification Status
		 *
		 *
		 * @param {string} projectId
		 * @param {string} domainId
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		updateDomainVerification: async (
			projectId: string,
			domainId: string
		): Promise<Models.Domain> => {
			if (typeof projectId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "projectId"');
			}

			if (typeof domainId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "domainId"');
			}

			let path = '/projects/{projectId}/domains/{domainId}/verification'
				.replace('{projectId}', projectId)
				.replace('{domainId}', domainId);
			let payload: Payload = {};

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'patch',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * List Keys
		 *
		 *
		 * @param {string} projectId
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		listKeys: async (projectId: string): Promise<Models.KeyList> => {
			if (typeof projectId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "projectId"');
			}

			let path = '/projects/{projectId}/keys'.replace('{projectId}', projectId);
			let payload: Payload = {};

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'get',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * Create Key
		 *
		 *
		 * @param {string} projectId
		 * @param {string} name
		 * @param {string[]} scopes
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		createKey: async (projectId: string, name: string, scopes: string[]): Promise<Models.Key> => {
			if (typeof projectId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "projectId"');
			}

			if (typeof name === 'undefined') {
				throw new AppwriteException('Missing required parameter: "name"');
			}

			if (typeof scopes === 'undefined') {
				throw new AppwriteException('Missing required parameter: "scopes"');
			}

			let path = '/projects/{projectId}/keys'.replace('{projectId}', projectId);
			let payload: Payload = {};

			if (typeof name !== 'undefined') {
				payload['name'] = name;
			}

			if (typeof scopes !== 'undefined') {
				payload['scopes'] = scopes;
			}

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'post',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * Get Key
		 *
		 *
		 * @param {string} projectId
		 * @param {string} keyId
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		getKey: async (projectId: string, keyId: string): Promise<Models.Key> => {
			if (typeof projectId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "projectId"');
			}

			if (typeof keyId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "keyId"');
			}

			let path = '/projects/{projectId}/keys/{keyId}'
				.replace('{projectId}', projectId)
				.replace('{keyId}', keyId);
			let payload: Payload = {};

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'get',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * Update Key
		 *
		 *
		 * @param {string} projectId
		 * @param {string} keyId
		 * @param {string} name
		 * @param {string[]} scopes
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		updateKey: async (
			projectId: string,
			keyId: string,
			name: string,
			scopes: string[]
		): Promise<Models.Key> => {
			if (typeof projectId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "projectId"');
			}

			if (typeof keyId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "keyId"');
			}

			if (typeof name === 'undefined') {
				throw new AppwriteException('Missing required parameter: "name"');
			}

			if (typeof scopes === 'undefined') {
				throw new AppwriteException('Missing required parameter: "scopes"');
			}

			let path = '/projects/{projectId}/keys/{keyId}'
				.replace('{projectId}', projectId)
				.replace('{keyId}', keyId);
			let payload: Payload = {};

			if (typeof name !== 'undefined') {
				payload['name'] = name;
			}

			if (typeof scopes !== 'undefined') {
				payload['scopes'] = scopes;
			}

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'put',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * Delete Key
		 *
		 *
		 * @param {string} projectId
		 * @param {string} keyId
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		deleteKey: async (projectId: string, keyId: string): Promise<{}> => {
			if (typeof projectId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "projectId"');
			}

			if (typeof keyId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "keyId"');
			}

			let path = '/projects/{projectId}/keys/{keyId}'
				.replace('{projectId}', projectId)
				.replace('{keyId}', keyId);
			let payload: Payload = {};

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'delete',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * Update Project OAuth2
		 *
		 *
		 * @param {string} projectId
		 * @param {string} provider
		 * @param {string} appId
		 * @param {string} secret
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		updateOAuth2: async (
			projectId: string,
			provider: string,
			appId?: string,
			secret?: string
		): Promise<Models.Project> => {
			if (typeof projectId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "projectId"');
			}

			if (typeof provider === 'undefined') {
				throw new AppwriteException('Missing required parameter: "provider"');
			}

			let path = '/projects/{projectId}/oauth2'.replace('{projectId}', projectId);
			let payload: Payload = {};

			if (typeof provider !== 'undefined') {
				payload['provider'] = provider;
			}

			if (typeof appId !== 'undefined') {
				payload['appId'] = appId;
			}

			if (typeof secret !== 'undefined') {
				payload['secret'] = secret;
			}

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'patch',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * List Platforms
		 *
		 *
		 * @param {string} projectId
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		listPlatforms: async (projectId: string): Promise<Models.PlatformList> => {
			if (typeof projectId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "projectId"');
			}

			let path = '/projects/{projectId}/platforms'.replace('{projectId}', projectId);
			let payload: Payload = {};

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'get',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * Create Platform
		 *
		 *
		 * @param {string} projectId
		 * @param {string} type
		 * @param {string} name
		 * @param {string} key
		 * @param {string} store
		 * @param {string} hostname
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		createPlatform: async (
			projectId: string,
			type: string,
			name: string,
			key?: string,
			store?: string,
			hostname?: string
		): Promise<Models.Platform> => {
			if (typeof projectId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "projectId"');
			}

			if (typeof type === 'undefined') {
				throw new AppwriteException('Missing required parameter: "type"');
			}

			if (typeof name === 'undefined') {
				throw new AppwriteException('Missing required parameter: "name"');
			}

			let path = '/projects/{projectId}/platforms'.replace('{projectId}', projectId);
			let payload: Payload = {};

			if (typeof type !== 'undefined') {
				payload['type'] = type;
			}

			if (typeof name !== 'undefined') {
				payload['name'] = name;
			}

			if (typeof key !== 'undefined') {
				payload['key'] = key;
			}

			if (typeof store !== 'undefined') {
				payload['store'] = store;
			}

			if (typeof hostname !== 'undefined') {
				payload['hostname'] = hostname;
			}

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'post',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * Get Platform
		 *
		 *
		 * @param {string} projectId
		 * @param {string} platformId
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		getPlatform: async (projectId: string, platformId: string): Promise<Models.Platform> => {
			if (typeof projectId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "projectId"');
			}

			if (typeof platformId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "platformId"');
			}

			let path = '/projects/{projectId}/platforms/{platformId}'
				.replace('{projectId}', projectId)
				.replace('{platformId}', platformId);
			let payload: Payload = {};

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'get',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * Update Platform
		 *
		 *
		 * @param {string} projectId
		 * @param {string} platformId
		 * @param {string} name
		 * @param {string} key
		 * @param {string} store
		 * @param {string} hostname
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		updatePlatform: async (
			projectId: string,
			platformId: string,
			name: string,
			key?: string,
			store?: string,
			hostname?: string
		): Promise<Models.Platform> => {
			if (typeof projectId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "projectId"');
			}

			if (typeof platformId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "platformId"');
			}

			if (typeof name === 'undefined') {
				throw new AppwriteException('Missing required parameter: "name"');
			}

			let path = '/projects/{projectId}/platforms/{platformId}'
				.replace('{projectId}', projectId)
				.replace('{platformId}', platformId);
			let payload: Payload = {};

			if (typeof name !== 'undefined') {
				payload['name'] = name;
			}

			if (typeof key !== 'undefined') {
				payload['key'] = key;
			}

			if (typeof store !== 'undefined') {
				payload['store'] = store;
			}

			if (typeof hostname !== 'undefined') {
				payload['hostname'] = hostname;
			}

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'put',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * Delete Platform
		 *
		 *
		 * @param {string} projectId
		 * @param {string} platformId
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		deletePlatform: async (projectId: string, platformId: string): Promise<{}> => {
			if (typeof projectId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "projectId"');
			}

			if (typeof platformId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "platformId"');
			}

			let path = '/projects/{projectId}/platforms/{platformId}'
				.replace('{projectId}', projectId)
				.replace('{platformId}', platformId);
			let payload: Payload = {};

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'delete',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * Update service status
		 *
		 *
		 * @param {string} projectId
		 * @param {string} service
		 * @param {boolean} status
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		updateServiceStatus: async (
			projectId: string,
			service: string,
			status: boolean
		): Promise<Models.Project> => {
			if (typeof projectId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "projectId"');
			}

			if (typeof service === 'undefined') {
				throw new AppwriteException('Missing required parameter: "service"');
			}

			if (typeof status === 'undefined') {
				throw new AppwriteException('Missing required parameter: "status"');
			}

			let path = '/projects/{projectId}/service'.replace('{projectId}', projectId);
			let payload: Payload = {};

			if (typeof service !== 'undefined') {
				payload['service'] = service;
			}

			if (typeof status !== 'undefined') {
				payload['status'] = status;
			}

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'patch',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * Get usage stats for a project
		 *
		 *
		 * @param {string} projectId
		 * @param {string} range
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		getUsage: async (projectId: string, range?: string): Promise<Models.UsageProject> => {
			if (typeof projectId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "projectId"');
			}

			let path = '/projects/{projectId}/usage'.replace('{projectId}', projectId);
			let payload: Payload = {};

			if (typeof range !== 'undefined') {
				payload['range'] = range;
			}

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'get',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * List Webhooks
		 *
		 *
		 * @param {string} projectId
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		listWebhooks: async (projectId: string): Promise<Models.WebhookList> => {
			if (typeof projectId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "projectId"');
			}

			let path = '/projects/{projectId}/webhooks'.replace('{projectId}', projectId);
			let payload: Payload = {};

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'get',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * Create Webhook
		 *
		 *
		 * @param {string} projectId
		 * @param {string} name
		 * @param {string[]} events
		 * @param {string} url
		 * @param {boolean} security
		 * @param {string} httpUser
		 * @param {string} httpPass
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		createWebhook: async (
			projectId: string,
			name: string,
			events: string[],
			url: string,
			security: boolean,
			httpUser?: string,
			httpPass?: string
		): Promise<Models.Webhook> => {
			if (typeof projectId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "projectId"');
			}

			if (typeof name === 'undefined') {
				throw new AppwriteException('Missing required parameter: "name"');
			}

			if (typeof events === 'undefined') {
				throw new AppwriteException('Missing required parameter: "events"');
			}

			if (typeof url === 'undefined') {
				throw new AppwriteException('Missing required parameter: "url"');
			}

			if (typeof security === 'undefined') {
				throw new AppwriteException('Missing required parameter: "security"');
			}

			let path = '/projects/{projectId}/webhooks'.replace('{projectId}', projectId);
			let payload: Payload = {};

			if (typeof name !== 'undefined') {
				payload['name'] = name;
			}

			if (typeof events !== 'undefined') {
				payload['events'] = events;
			}

			if (typeof url !== 'undefined') {
				payload['url'] = url;
			}

			if (typeof security !== 'undefined') {
				payload['security'] = security;
			}

			if (typeof httpUser !== 'undefined') {
				payload['httpUser'] = httpUser;
			}

			if (typeof httpPass !== 'undefined') {
				payload['httpPass'] = httpPass;
			}

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'post',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * Get Webhook
		 *
		 *
		 * @param {string} projectId
		 * @param {string} webhookId
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		getWebhook: async (projectId: string, webhookId: string): Promise<Models.Webhook> => {
			if (typeof projectId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "projectId"');
			}

			if (typeof webhookId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "webhookId"');
			}

			let path = '/projects/{projectId}/webhooks/{webhookId}'
				.replace('{projectId}', projectId)
				.replace('{webhookId}', webhookId);
			let payload: Payload = {};

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'get',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * Update Webhook
		 *
		 *
		 * @param {string} projectId
		 * @param {string} webhookId
		 * @param {string} name
		 * @param {string[]} events
		 * @param {string} url
		 * @param {boolean} security
		 * @param {string} httpUser
		 * @param {string} httpPass
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		updateWebhook: async (
			projectId: string,
			webhookId: string,
			name: string,
			events: string[],
			url: string,
			security: boolean,
			httpUser?: string,
			httpPass?: string
		): Promise<Models.Webhook> => {
			if (typeof projectId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "projectId"');
			}

			if (typeof webhookId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "webhookId"');
			}

			if (typeof name === 'undefined') {
				throw new AppwriteException('Missing required parameter: "name"');
			}

			if (typeof events === 'undefined') {
				throw new AppwriteException('Missing required parameter: "events"');
			}

			if (typeof url === 'undefined') {
				throw new AppwriteException('Missing required parameter: "url"');
			}

			if (typeof security === 'undefined') {
				throw new AppwriteException('Missing required parameter: "security"');
			}

			let path = '/projects/{projectId}/webhooks/{webhookId}'
				.replace('{projectId}', projectId)
				.replace('{webhookId}', webhookId);
			let payload: Payload = {};

			if (typeof name !== 'undefined') {
				payload['name'] = name;
			}

			if (typeof events !== 'undefined') {
				payload['events'] = events;
			}

			if (typeof url !== 'undefined') {
				payload['url'] = url;
			}

			if (typeof security !== 'undefined') {
				payload['security'] = security;
			}

			if (typeof httpUser !== 'undefined') {
				payload['httpUser'] = httpUser;
			}

			if (typeof httpPass !== 'undefined') {
				payload['httpPass'] = httpPass;
			}

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'put',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * Delete Webhook
		 *
		 *
		 * @param {string} projectId
		 * @param {string} webhookId
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		deleteWebhook: async (projectId: string, webhookId: string): Promise<{}> => {
			if (typeof projectId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "projectId"');
			}

			if (typeof webhookId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "webhookId"');
			}

			let path = '/projects/{projectId}/webhooks/{webhookId}'
				.replace('{projectId}', projectId)
				.replace('{webhookId}', webhookId);
			let payload: Payload = {};

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'delete',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		}
	};

	storage = {
		/**
		 * List Files
		 *
		 * Get a list of all the user files. You can use the query params to filter
		 * your results. On admin mode, this endpoint will return a list of all of the
		 * project's files. [Learn more about different API modes](/docs/admin).
		 *
		 * @param {string} search
		 * @param {number} limit
		 * @param {number} offset
		 * @param {string} cursor
		 * @param {string} cursorDirection
		 * @param {string} orderType
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		listFiles: async (
			search?: string,
			limit?: number,
			offset?: number,
			cursor?: string,
			cursorDirection?: string,
			orderType?: string
		): Promise<Models.FileList> => {
			let path = '/storage/files';
			let payload: Payload = {};

			if (typeof search !== 'undefined') {
				payload['search'] = search;
			}

			if (typeof limit !== 'undefined') {
				payload['limit'] = limit;
			}

			if (typeof offset !== 'undefined') {
				payload['offset'] = offset;
			}

			if (typeof cursor !== 'undefined') {
				payload['cursor'] = cursor;
			}

			if (typeof cursorDirection !== 'undefined') {
				payload['cursorDirection'] = cursorDirection;
			}

			if (typeof orderType !== 'undefined') {
				payload['orderType'] = orderType;
			}

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'get',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * Create File
		 *
		 * Create a new file. The user who creates the file will automatically be
		 * assigned to read and write access unless he has passed custom values for
		 * read and write arguments.
		 *
		 * @param {string} fileId
		 * @param {File} file
		 * @param {string[]} read
		 * @param {string[]} write
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		createFile: async (
			fileId: string,
			file: File,
			read?: string[],
			write?: string[]
		): Promise<Models.File> => {
			if (typeof fileId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "fileId"');
			}

			if (typeof file === 'undefined') {
				throw new AppwriteException('Missing required parameter: "file"');
			}

			let path = '/storage/files';
			let payload: Payload = {};

			if (typeof fileId !== 'undefined') {
				payload['fileId'] = fileId;
			}

			if (typeof file !== 'undefined') {
				payload['file'] = file;
			}

			if (typeof read !== 'undefined') {
				payload['read'] = read;
			}

			if (typeof write !== 'undefined') {
				payload['write'] = write;
			}

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'post',
				uri,
				{
					'content-type': 'multipart/form-data'
				},
				payload
			);
		},

		/**
		 * Get File
		 *
		 * Get a file by its unique ID. This endpoint response returns a JSON object
		 * with the file metadata.
		 *
		 * @param {string} fileId
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		getFile: async (fileId: string): Promise<Models.File> => {
			if (typeof fileId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "fileId"');
			}

			let path = '/storage/files/{fileId}'.replace('{fileId}', fileId);
			let payload: Payload = {};

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'get',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * Update File
		 *
		 * Update a file by its unique ID. Only users with write permissions have
		 * access to update this resource.
		 *
		 * @param {string} fileId
		 * @param {string[]} read
		 * @param {string[]} write
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		updateFile: async (fileId: string, read: string[], write: string[]): Promise<Models.File> => {
			if (typeof fileId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "fileId"');
			}

			if (typeof read === 'undefined') {
				throw new AppwriteException('Missing required parameter: "read"');
			}

			if (typeof write === 'undefined') {
				throw new AppwriteException('Missing required parameter: "write"');
			}

			let path = '/storage/files/{fileId}'.replace('{fileId}', fileId);
			let payload: Payload = {};

			if (typeof read !== 'undefined') {
				payload['read'] = read;
			}

			if (typeof write !== 'undefined') {
				payload['write'] = write;
			}

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'put',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * Delete File
		 *
		 * Delete a file by its unique ID. Only users with write permissions have
		 * access to delete this resource.
		 *
		 * @param {string} fileId
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		deleteFile: async (fileId: string): Promise<{}> => {
			if (typeof fileId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "fileId"');
			}

			let path = '/storage/files/{fileId}'.replace('{fileId}', fileId);
			let payload: Payload = {};

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'delete',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * Get File for Download
		 *
		 * Get a file content by its unique ID. The endpoint response return with a
		 * 'Content-Disposition: attachment' header that tells the browser to start
		 * downloading the file to user downloads directory.
		 *
		 * @param {string} fileId
		 * @throws {AppwriteException}
		 * @returns {URL}
		 */
		getFileDownload: (fileId: string): URL => {
			if (typeof fileId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "fileId"');
			}

			let path = '/storage/files/{fileId}/download'.replace('{fileId}', fileId);
			let payload: Payload = {};

			const uri = new URL(this.config.endpoint + path);
			payload['project'] = this.config.project;

			for (const [key, value] of Object.entries(this.flatten(payload))) {
				uri.searchParams.append(key, value);
			}
			return uri;
		},

		/**
		 * Get File Preview
		 *
		 * Get a file preview image. Currently, this method supports preview for image
		 * files (jpg, png, and gif), other supported formats, like pdf, docs, slides,
		 * and spreadsheets, will return the file icon image. You can also pass query
		 * string arguments for cutting and resizing your preview image.
		 *
		 * @param {string} fileId
		 * @param {number} width
		 * @param {number} height
		 * @param {string} gravity
		 * @param {number} quality
		 * @param {number} borderWidth
		 * @param {string} borderColor
		 * @param {number} borderRadius
		 * @param {number} opacity
		 * @param {number} rotation
		 * @param {string} background
		 * @param {string} output
		 * @throws {AppwriteException}
		 * @returns {URL}
		 */
		getFilePreview: (
			fileId: string,
			width?: number,
			height?: number,
			gravity?: string,
			quality?: number,
			borderWidth?: number,
			borderColor?: string,
			borderRadius?: number,
			opacity?: number,
			rotation?: number,
			background?: string,
			output?: string
		): URL => {
			if (typeof fileId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "fileId"');
			}

			let path = '/storage/files/{fileId}/preview'.replace('{fileId}', fileId);
			let payload: Payload = {};

			if (typeof width !== 'undefined') {
				payload['width'] = width;
			}

			if (typeof height !== 'undefined') {
				payload['height'] = height;
			}

			if (typeof gravity !== 'undefined') {
				payload['gravity'] = gravity;
			}

			if (typeof quality !== 'undefined') {
				payload['quality'] = quality;
			}

			if (typeof borderWidth !== 'undefined') {
				payload['borderWidth'] = borderWidth;
			}

			if (typeof borderColor !== 'undefined') {
				payload['borderColor'] = borderColor;
			}

			if (typeof borderRadius !== 'undefined') {
				payload['borderRadius'] = borderRadius;
			}

			if (typeof opacity !== 'undefined') {
				payload['opacity'] = opacity;
			}

			if (typeof rotation !== 'undefined') {
				payload['rotation'] = rotation;
			}

			if (typeof background !== 'undefined') {
				payload['background'] = background;
			}

			if (typeof output !== 'undefined') {
				payload['output'] = output;
			}

			const uri = new URL(this.config.endpoint + path);
			payload['project'] = this.config.project;

			for (const [key, value] of Object.entries(this.flatten(payload))) {
				uri.searchParams.append(key, value);
			}
			return uri;
		},

		/**
		 * Get File for View
		 *
		 * Get a file content by its unique ID. This endpoint is similar to the
		 * download method but returns with no  'Content-Disposition: attachment'
		 * header.
		 *
		 * @param {string} fileId
		 * @throws {AppwriteException}
		 * @returns {URL}
		 */
		getFileView: (fileId: string): URL => {
			if (typeof fileId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "fileId"');
			}

			let path = '/storage/files/{fileId}/view'.replace('{fileId}', fileId);
			let payload: Payload = {};

			const uri = new URL(this.config.endpoint + path);
			payload['project'] = this.config.project;

			for (const [key, value] of Object.entries(this.flatten(payload))) {
				uri.searchParams.append(key, value);
			}
			return uri;
		},

		/**
		 * Get usage stats for storage
		 *
		 *
		 * @param {string} range
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		getUsage: async (range?: string): Promise<Models.UsageStorage> => {
			let path = '/storage/usage';
			let payload: Payload = {};

			if (typeof range !== 'undefined') {
				payload['range'] = range;
			}

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'get',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * Get usage stats for a storage bucket
		 *
		 *
		 * @param {string} bucketId
		 * @param {string} range
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		getBucketUsage: async (bucketId: string, range?: string): Promise<Models.UsageBuckets> => {
			if (typeof bucketId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "bucketId"');
			}

			let path = '/storage/{bucketId}/usage'.replace('{bucketId}', bucketId);
			let payload: Payload = {};

			if (typeof range !== 'undefined') {
				payload['range'] = range;
			}

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'get',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		}
	};

	teams = {
		/**
		 * List Teams
		 *
		 * Get a list of all the teams in which the current user is a member. You can
		 * use the parameters to filter your results.
		 *
		 * In admin mode, this endpoint returns a list of all the teams in the current
		 * project. [Learn more about different API modes](/docs/admin).
		 *
		 * @param {string} search
		 * @param {number} limit
		 * @param {number} offset
		 * @param {string} cursor
		 * @param {string} cursorDirection
		 * @param {string} orderType
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		list: async (
			search?: string,
			limit?: number,
			offset?: number,
			cursor?: string,
			cursorDirection?: string,
			orderType?: string
		): Promise<Models.TeamList> => {
			let path = '/teams';
			let payload: Payload = {};

			if (typeof search !== 'undefined') {
				payload['search'] = search;
			}

			if (typeof limit !== 'undefined') {
				payload['limit'] = limit;
			}

			if (typeof offset !== 'undefined') {
				payload['offset'] = offset;
			}

			if (typeof cursor !== 'undefined') {
				payload['cursor'] = cursor;
			}

			if (typeof cursorDirection !== 'undefined') {
				payload['cursorDirection'] = cursorDirection;
			}

			if (typeof orderType !== 'undefined') {
				payload['orderType'] = orderType;
			}

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'get',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * Create Team
		 *
		 * Create a new team. The user who creates the team will automatically be
		 * assigned as the owner of the team. Only the users with the owner role can
		 * invite new members, add new owners and delete or update the team.
		 *
		 * @param {string} teamId
		 * @param {string} name
		 * @param {string[]} roles
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		create: async (teamId: string, name: string, roles?: string[]): Promise<Models.Team> => {
			if (typeof teamId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "teamId"');
			}

			if (typeof name === 'undefined') {
				throw new AppwriteException('Missing required parameter: "name"');
			}

			let path = '/teams';
			let payload: Payload = {};

			if (typeof teamId !== 'undefined') {
				payload['teamId'] = teamId;
			}

			if (typeof name !== 'undefined') {
				payload['name'] = name;
			}

			if (typeof roles !== 'undefined') {
				payload['roles'] = roles;
			}

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'post',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * Get Team
		 *
		 * Get a team by its ID. All team members have read access for this resource.
		 *
		 * @param {string} teamId
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		get: async (teamId: string): Promise<Models.Team> => {
			if (typeof teamId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "teamId"');
			}

			let path = '/teams/{teamId}'.replace('{teamId}', teamId);
			let payload: Payload = {};

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'get',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * Update Team
		 *
		 * Update a team using its ID. Only members with the owner role can update the
		 * team.
		 *
		 * @param {string} teamId
		 * @param {string} name
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		update: async (teamId: string, name: string): Promise<Models.Team> => {
			if (typeof teamId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "teamId"');
			}

			if (typeof name === 'undefined') {
				throw new AppwriteException('Missing required parameter: "name"');
			}

			let path = '/teams/{teamId}'.replace('{teamId}', teamId);
			let payload: Payload = {};

			if (typeof name !== 'undefined') {
				payload['name'] = name;
			}

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'put',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * Delete Team
		 *
		 * Delete a team using its ID. Only team members with the owner role can
		 * delete the team.
		 *
		 * @param {string} teamId
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		delete: async (teamId: string): Promise<{}> => {
			if (typeof teamId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "teamId"');
			}

			let path = '/teams/{teamId}'.replace('{teamId}', teamId);
			let payload: Payload = {};

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'delete',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * Get Team Memberships
		 *
		 * Use this endpoint to list a team's members using the team's ID. All team
		 * members have read access to this endpoint.
		 *
		 * @param {string} teamId
		 * @param {string} search
		 * @param {number} limit
		 * @param {number} offset
		 * @param {string} cursor
		 * @param {string} cursorDirection
		 * @param {string} orderType
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		getMemberships: async (
			teamId: string,
			search?: string,
			limit?: number,
			offset?: number,
			cursor?: string,
			cursorDirection?: string,
			orderType?: string
		): Promise<Models.MembershipList> => {
			if (typeof teamId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "teamId"');
			}

			let path = '/teams/{teamId}/memberships'.replace('{teamId}', teamId);
			let payload: Payload = {};

			if (typeof search !== 'undefined') {
				payload['search'] = search;
			}

			if (typeof limit !== 'undefined') {
				payload['limit'] = limit;
			}

			if (typeof offset !== 'undefined') {
				payload['offset'] = offset;
			}

			if (typeof cursor !== 'undefined') {
				payload['cursor'] = cursor;
			}

			if (typeof cursorDirection !== 'undefined') {
				payload['cursorDirection'] = cursorDirection;
			}

			if (typeof orderType !== 'undefined') {
				payload['orderType'] = orderType;
			}

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'get',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * Create Team Membership
		 *
		 * Invite a new member to join your team. If initiated from the client SDK, an
		 * email with a link to join the team will be sent to the member's email
		 * address and an account will be created for them should they not be signed
		 * up already. If initiated from server-side SDKs, the new member will
		 * automatically be added to the team.
		 *
		 * Use the 'url' parameter to redirect the user from the invitation email back
		 * to your app. When the user is redirected, use the [Update Team Membership
		 * Status](/docs/client/teams#teamsUpdateMembershipStatus) endpoint to allow
		 * the user to accept the invitation to the team.
		 *
		 * Please note that to avoid a [Redirect
		 * Attack](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.md)
		 * the only valid redirect URL's are the once from domains you have set when
		 * adding your platforms in the console interface.
		 *
		 * @param {string} teamId
		 * @param {string} email
		 * @param {string[]} roles
		 * @param {string} url
		 * @param {string} name
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		createMembership: async (
			teamId: string,
			email: string,
			roles: string[],
			url: string,
			name?: string
		): Promise<Models.Membership> => {
			if (typeof teamId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "teamId"');
			}

			if (typeof email === 'undefined') {
				throw new AppwriteException('Missing required parameter: "email"');
			}

			if (typeof roles === 'undefined') {
				throw new AppwriteException('Missing required parameter: "roles"');
			}

			if (typeof url === 'undefined') {
				throw new AppwriteException('Missing required parameter: "url"');
			}

			let path = '/teams/{teamId}/memberships'.replace('{teamId}', teamId);
			let payload: Payload = {};

			if (typeof email !== 'undefined') {
				payload['email'] = email;
			}

			if (typeof roles !== 'undefined') {
				payload['roles'] = roles;
			}

			if (typeof url !== 'undefined') {
				payload['url'] = url;
			}

			if (typeof name !== 'undefined') {
				payload['name'] = name;
			}

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'post',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * Get Team Membership
		 *
		 * Get a team member by the membership unique id. All team members have read
		 * access for this resource.
		 *
		 * @param {string} teamId
		 * @param {string} membershipId
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		getMembership: async (teamId: string, membershipId: string): Promise<Models.MembershipList> => {
			if (typeof teamId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "teamId"');
			}

			if (typeof membershipId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "membershipId"');
			}

			let path = '/teams/{teamId}/memberships/{membershipId}'
				.replace('{teamId}', teamId)
				.replace('{membershipId}', membershipId);
			let payload: Payload = {};

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'get',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * Update Membership Roles
		 *
		 * Modify the roles of a team member. Only team members with the owner role
		 * have access to this endpoint. Learn more about [roles and
		 * permissions](/docs/permissions).
		 *
		 * @param {string} teamId
		 * @param {string} membershipId
		 * @param {string[]} roles
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		updateMembershipRoles: async (
			teamId: string,
			membershipId: string,
			roles: string[]
		): Promise<Models.Membership> => {
			if (typeof teamId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "teamId"');
			}

			if (typeof membershipId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "membershipId"');
			}

			if (typeof roles === 'undefined') {
				throw new AppwriteException('Missing required parameter: "roles"');
			}

			let path = '/teams/{teamId}/memberships/{membershipId}'
				.replace('{teamId}', teamId)
				.replace('{membershipId}', membershipId);
			let payload: Payload = {};

			if (typeof roles !== 'undefined') {
				payload['roles'] = roles;
			}

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'patch',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * Delete Team Membership
		 *
		 * This endpoint allows a user to leave a team or for a team owner to delete
		 * the membership of any other team member. You can also use this endpoint to
		 * delete a user membership even if it is not accepted.
		 *
		 * @param {string} teamId
		 * @param {string} membershipId
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		deleteMembership: async (teamId: string, membershipId: string): Promise<{}> => {
			if (typeof teamId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "teamId"');
			}

			if (typeof membershipId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "membershipId"');
			}

			let path = '/teams/{teamId}/memberships/{membershipId}'
				.replace('{teamId}', teamId)
				.replace('{membershipId}', membershipId);
			let payload: Payload = {};

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'delete',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * Update Team Membership Status
		 *
		 * Use this endpoint to allow a user to accept an invitation to join a team
		 * after being redirected back to your app from the invitation email received
		 * by the user.
		 *
		 * @param {string} teamId
		 * @param {string} membershipId
		 * @param {string} userId
		 * @param {string} secret
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		updateMembershipStatus: async (
			teamId: string,
			membershipId: string,
			userId: string,
			secret: string
		): Promise<Models.Membership> => {
			if (typeof teamId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "teamId"');
			}

			if (typeof membershipId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "membershipId"');
			}

			if (typeof userId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "userId"');
			}

			if (typeof secret === 'undefined') {
				throw new AppwriteException('Missing required parameter: "secret"');
			}

			let path = '/teams/{teamId}/memberships/{membershipId}/status'
				.replace('{teamId}', teamId)
				.replace('{membershipId}', membershipId);
			let payload: Payload = {};

			if (typeof userId !== 'undefined') {
				payload['userId'] = userId;
			}

			if (typeof secret !== 'undefined') {
				payload['secret'] = secret;
			}

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'patch',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		}
	};

	users = {
		/**
		 * List Users
		 *
		 * Get a list of all the project's users. You can use the query params to
		 * filter your results.
		 *
		 * @param {string} search
		 * @param {number} limit
		 * @param {number} offset
		 * @param {string} cursor
		 * @param {string} cursorDirection
		 * @param {string} orderType
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		list: async <Preferences extends Models.Preferences>(
			search?: string,
			limit?: number,
			offset?: number,
			cursor?: string,
			cursorDirection?: string,
			orderType?: string
		): Promise<Models.UserList<Preferences>> => {
			let path = '/users';
			let payload: Payload = {};

			if (typeof search !== 'undefined') {
				payload['search'] = search;
			}

			if (typeof limit !== 'undefined') {
				payload['limit'] = limit;
			}

			if (typeof offset !== 'undefined') {
				payload['offset'] = offset;
			}

			if (typeof cursor !== 'undefined') {
				payload['cursor'] = cursor;
			}

			if (typeof cursorDirection !== 'undefined') {
				payload['cursorDirection'] = cursorDirection;
			}

			if (typeof orderType !== 'undefined') {
				payload['orderType'] = orderType;
			}

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'get',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * Create User
		 *
		 * Create a new user.
		 *
		 * @param {string} userId
		 * @param {string} email
		 * @param {string} password
		 * @param {string} name
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		create: async <Preferences extends Models.Preferences>(
			userId: string,
			email: string,
			password: string,
			name?: string
		): Promise<Models.User<Preferences>> => {
			if (typeof userId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "userId"');
			}

			if (typeof email === 'undefined') {
				throw new AppwriteException('Missing required parameter: "email"');
			}

			if (typeof password === 'undefined') {
				throw new AppwriteException('Missing required parameter: "password"');
			}

			let path = '/users';
			let payload: Payload = {};

			if (typeof userId !== 'undefined') {
				payload['userId'] = userId;
			}

			if (typeof email !== 'undefined') {
				payload['email'] = email;
			}

			if (typeof password !== 'undefined') {
				payload['password'] = password;
			}

			if (typeof name !== 'undefined') {
				payload['name'] = name;
			}

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'post',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * Get usage stats for the users API
		 *
		 *
		 * @param {string} range
		 * @param {string} provider
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		getUsage: async (range?: string, provider?: string): Promise<Models.UsageUsers> => {
			let path = '/users/usage';
			let payload: Payload = {};

			if (typeof range !== 'undefined') {
				payload['range'] = range;
			}

			if (typeof provider !== 'undefined') {
				payload['provider'] = provider;
			}

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'get',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * Get User
		 *
		 * Get a user by its unique ID.
		 *
		 * @param {string} userId
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		get: async <Preferences extends Models.Preferences>(
			userId: string
		): Promise<Models.User<Preferences>> => {
			if (typeof userId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "userId"');
			}

			let path = '/users/{userId}'.replace('{userId}', userId);
			let payload: Payload = {};

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'get',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * Delete User
		 *
		 * Delete a user by its unique ID.
		 *
		 * @param {string} userId
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		delete: async (userId: string): Promise<{}> => {
			if (typeof userId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "userId"');
			}

			let path = '/users/{userId}'.replace('{userId}', userId);
			let payload: Payload = {};

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'delete',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * Update Email
		 *
		 * Update the user email by its unique ID.
		 *
		 * @param {string} userId
		 * @param {string} email
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		updateEmail: async <Preferences extends Models.Preferences>(
			userId: string,
			email: string
		): Promise<Models.User<Preferences>> => {
			if (typeof userId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "userId"');
			}

			if (typeof email === 'undefined') {
				throw new AppwriteException('Missing required parameter: "email"');
			}

			let path = '/users/{userId}/email'.replace('{userId}', userId);
			let payload: Payload = {};

			if (typeof email !== 'undefined') {
				payload['email'] = email;
			}

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'patch',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * Get User Logs
		 *
		 * Get the user activity logs list by its unique ID.
		 *
		 * @param {string} userId
		 * @param {number} limit
		 * @param {number} offset
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		getLogs: async (userId: string, limit?: number, offset?: number): Promise<Models.LogList> => {
			if (typeof userId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "userId"');
			}

			let path = '/users/{userId}/logs'.replace('{userId}', userId);
			let payload: Payload = {};

			if (typeof limit !== 'undefined') {
				payload['limit'] = limit;
			}

			if (typeof offset !== 'undefined') {
				payload['offset'] = offset;
			}

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'get',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * Update Name
		 *
		 * Update the user name by its unique ID.
		 *
		 * @param {string} userId
		 * @param {string} name
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		updateName: async <Preferences extends Models.Preferences>(
			userId: string,
			name: string
		): Promise<Models.User<Preferences>> => {
			if (typeof userId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "userId"');
			}

			if (typeof name === 'undefined') {
				throw new AppwriteException('Missing required parameter: "name"');
			}

			let path = '/users/{userId}/name'.replace('{userId}', userId);
			let payload: Payload = {};

			if (typeof name !== 'undefined') {
				payload['name'] = name;
			}

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'patch',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * Update Password
		 *
		 * Update the user password by its unique ID.
		 *
		 * @param {string} userId
		 * @param {string} password
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		updatePassword: async <Preferences extends Models.Preferences>(
			userId: string,
			password: string
		): Promise<Models.User<Preferences>> => {
			if (typeof userId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "userId"');
			}

			if (typeof password === 'undefined') {
				throw new AppwriteException('Missing required parameter: "password"');
			}

			let path = '/users/{userId}/password'.replace('{userId}', userId);
			let payload: Payload = {};

			if (typeof password !== 'undefined') {
				payload['password'] = password;
			}

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'patch',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * Get User Preferences
		 *
		 * Get the user preferences by its unique ID.
		 *
		 * @param {string} userId
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		getPrefs: async <Preferences extends Models.Preferences>(
			userId: string
		): Promise<Preferences> => {
			if (typeof userId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "userId"');
			}

			let path = '/users/{userId}/prefs'.replace('{userId}', userId);
			let payload: Payload = {};

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'get',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * Update User Preferences
		 *
		 * Update the user preferences by its unique ID. You can pass only the
		 * specific settings you wish to update.
		 *
		 * @param {string} userId
		 * @param {object} prefs
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		updatePrefs: async <Preferences extends Models.Preferences>(
			userId: string,
			prefs: object
		): Promise<Preferences> => {
			if (typeof userId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "userId"');
			}

			if (typeof prefs === 'undefined') {
				throw new AppwriteException('Missing required parameter: "prefs"');
			}

			let path = '/users/{userId}/prefs'.replace('{userId}', userId);
			let payload: Payload = {};

			if (typeof prefs !== 'undefined') {
				payload['prefs'] = prefs;
			}

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'patch',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * Get User Sessions
		 *
		 * Get the user sessions list by its unique ID.
		 *
		 * @param {string} userId
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		getSessions: async (userId: string): Promise<Models.SessionList> => {
			if (typeof userId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "userId"');
			}

			let path = '/users/{userId}/sessions'.replace('{userId}', userId);
			let payload: Payload = {};

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'get',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * Delete User Sessions
		 *
		 * Delete all user's sessions by using the user's unique ID.
		 *
		 * @param {string} userId
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		deleteSessions: async (userId: string): Promise<{}> => {
			if (typeof userId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "userId"');
			}

			let path = '/users/{userId}/sessions'.replace('{userId}', userId);
			let payload: Payload = {};

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'delete',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * Delete User Session
		 *
		 * Delete a user sessions by its unique ID.
		 *
		 * @param {string} userId
		 * @param {string} sessionId
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		deleteSession: async (userId: string, sessionId: string): Promise<{}> => {
			if (typeof userId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "userId"');
			}

			if (typeof sessionId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "sessionId"');
			}

			let path = '/users/{userId}/sessions/{sessionId}'
				.replace('{userId}', userId)
				.replace('{sessionId}', sessionId);
			let payload: Payload = {};

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'delete',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * Update User Status
		 *
		 * Update the user status by its unique ID.
		 *
		 * @param {string} userId
		 * @param {boolean} status
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		updateStatus: async <Preferences extends Models.Preferences>(
			userId: string,
			status: boolean
		): Promise<Models.User<Preferences>> => {
			if (typeof userId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "userId"');
			}

			if (typeof status === 'undefined') {
				throw new AppwriteException('Missing required parameter: "status"');
			}

			let path = '/users/{userId}/status'.replace('{userId}', userId);
			let payload: Payload = {};

			if (typeof status !== 'undefined') {
				payload['status'] = status;
			}

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'patch',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		},

		/**
		 * Update Email Verification
		 *
		 * Update the user email verification status by its unique ID.
		 *
		 * @param {string} userId
		 * @param {boolean} emailVerification
		 * @throws {AppwriteException}
		 * @returns {Promise}
		 */
		updateVerification: async <Preferences extends Models.Preferences>(
			userId: string,
			emailVerification: boolean
		): Promise<Models.User<Preferences>> => {
			if (typeof userId === 'undefined') {
				throw new AppwriteException('Missing required parameter: "userId"');
			}

			if (typeof emailVerification === 'undefined') {
				throw new AppwriteException('Missing required parameter: "emailVerification"');
			}

			let path = '/users/{userId}/verification'.replace('{userId}', userId);
			let payload: Payload = {};

			if (typeof emailVerification !== 'undefined') {
				payload['emailVerification'] = emailVerification;
			}

			const uri = new URL(this.config.endpoint + path);
			return await this.call(
				'patch',
				uri,
				{
					'content-type': 'application/json'
				},
				payload
			);
		}
	};
}

export { Appwrite };
export type { AppwriteException, Models };