// 100% generated by gpt-4o

export class Emoji {
    shortcode: string;
    url: string;
    static_url: string;
    visible_in_picker: boolean;

    constructor(shortcode: string, url: string, static_url: string, visible_in_picker: boolean) {
        this.shortcode = shortcode;
        this.url = url;
        this.static_url = static_url;
        this.visible_in_picker = visible_in_picker;
    }
}

export class Mention {
    id: string;
    username: string;
    url: string;
    acct: string;

    constructor(id: string, username: string, url: string, acct: string) {
        this.id = id;
        this.username = username;
        this.url = url;
        this.acct = acct;
    }
}

export class Application {
    name: string;
    website: string | null;

    constructor(name: string, website: string | null) {
        this.name = name;
        this.website = website;
    }
}

export class Account {
    id: string;
    username: string;
    acct: string;
    display_name: string;
    locked: boolean;
    bot: boolean;
    discoverable: boolean | null;
    indexable: boolean;
    group: boolean;
    created_at: string;
    note: string;
    url: string;
    uri: string;
    avatar: string;
    avatar_static: string;
    header: string;
    header_static: string;
    followers_count: number;
    following_count: number;
    statuses_count: number;
    last_status_at: string;
    hide_collections: boolean | null;
    noindex: boolean;
    emojis: Emoji[];
    roles: string[];
    fields: any[];

    constructor(
        id: string, username: string, acct: string, display_name: string, locked: boolean, bot: boolean, discoverable: boolean | null,
        indexable: boolean, group: boolean, created_at: string, note: string, url: string, uri: string, avatar: string, avatar_static: string,
        header: string, header_static: string, followers_count: number, following_count: number, statuses_count: number, last_status_at: string,
        hide_collections: boolean | null, noindex: boolean, emojis: Emoji[], roles: string[], fields: any[]
    ) {
        this.id = id;
        this.username = username;
        this.acct = acct;
        this.display_name = display_name;
        this.locked = locked;
        this.bot = bot;
        this.discoverable = discoverable;
        this.indexable = indexable;
        this.group = group;
        this.created_at = created_at;
        this.note = note;
        this.url = url;
        this.uri = uri;
        this.avatar = avatar;
        this.avatar_static = avatar_static;
        this.header = header;
        this.header_static = header_static;
        this.followers_count = followers_count;
        this.following_count = following_count;
        this.statuses_count = statuses_count;
        this.last_status_at = last_status_at;
        this.hide_collections = hide_collections;
        this.noindex = noindex;
        this.emojis = emojis;
        this.roles = roles;
        this.fields = fields;
    }
}

export class Status {
    id: string;
    created_at: string;
    in_reply_to_id: string | null;
    in_reply_to_account_id: string | null;
    sensitive: boolean;
    spoiler_text: string;
    visibility: string;
    language: string;
    uri: string;
    url: string;
    replies_count: number;
    reblogs_count: number;
    favourites_count: number;
    edited_at: string | null;
    conversation_id: number;
    favourited: boolean;
    reblogged: boolean;
    muted: boolean;
    bookmarked: boolean;
    pinned: boolean;
    local_only: boolean;
    content: string;
    filtered: any[];
    reblog: any;
    application: Application;
    account: Account;
    media_attachments: any[];
    mentions: Mention[];
    tags: any[];
    emojis: Emoji[];
    reactions: any[];
    card: any;
    poll: any;

    constructor(
        id: string, created_at: string, in_reply_to_id: string | null, in_reply_to_account_id: string | null, sensitive: boolean, spoiler_text: string,
        visibility: string, language: string, uri: string, url: string, replies_count: number, reblogs_count: number, favourites_count: number,
        edited_at: string | null, conversation_id: number, favourited: boolean, reblogged: boolean, muted: boolean, bookmarked: boolean, pinned: boolean,
        local_only: boolean, content: string, filtered: any[], reblog: any, application: Application, account: Account, media_attachments: any[],
        mentions: Mention[], tags: any[], emojis: Emoji[], reactions: any[], card: any, poll: any
    ) {
        this.id = id;
        this.created_at = created_at;
        this.in_reply_to_id = in_reply_to_id;
        this.in_reply_to_account_id = in_reply_to_account_id;
        this.sensitive = sensitive;
        this.spoiler_text = spoiler_text;
        this.visibility = visibility;
        this.language = language;
        this.uri = uri;
        this.url = url;
        this.replies_count = replies_count;
        this.reblogs_count = reblogs_count;
        this.favourites_count = favourites_count;
        this.edited_at = edited_at;
        this.conversation_id = conversation_id;
        this.favourited = favourited;
        this.reblogged = reblogged;
        this.muted = muted;
        this.bookmarked = bookmarked;
        this.pinned = pinned;
        this.local_only = local_only;
        this.content = content;
        this.filtered = filtered;
        this.reblog = reblog;
        this.application = application;
        this.account = account;
        this.media_attachments = media_attachments;
        this.mentions = mentions;
        this.tags = tags;
        this.emojis = emojis;
        this.reactions = reactions;
        this.card = card;
        this.poll = poll;
    }
}