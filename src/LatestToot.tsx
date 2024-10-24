import "dreamland";
import { Account, Status } from "./Status";

// thanks cooleletronis (writabl) for like 90% of this code
export const LatestToot: Component<
  {},
  { note: Status; note_orig: Status; replyUser: Account; reblog: boolean; renderRoot: HTMLDivElement }
> = function () {
  this.css = `
      padding: 1.5rem;
      width: 100%;
      overflow: hidden;

      background-color: var(--mantle);
      border-radius: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.8rem;

      .material-symbols-rounded {
      font-size: 1.2rem;
      margin: 0;
      margin-right: 0.3rem;
      }

      #refresh, #open {
        color: var(--text)!important;
        text-decoration: none!important;
        border: none!important;
        cursor: pointer;
      }

      .pfp {
        width: 4rem;
        height: 4rem;
        border-radius: 50%;
      }

      .top {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        .material-symbols-rounded {
          font-size: 1.7rem;
        }
        .left {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 0.4rem;
        }
        .user {
          flex-direction: column;
        .name {
          margin-left: 0.8rem;
          display: flex;
          flex-direction: column;
          .displayname {
            font-weight: 650;
            font-family: var(--font-display);
            font-size: 1.2rem;
          }
          .handle {
            color: var(--subtext0);
          }
        }
        }
        .actions {
          display: flex;
          flex-direction: row;
          gap: 0.8rem;
          align-items: center;
        }
      }

      p {
        margin: 0;
      }


      #note-content {
        .h-card a {
          color: var(--accent)!important;
          font-weight: 600;
        }

        &.sensitive {
          filter: blur(5px) contrast(2.5);
          transition: filter 0.2s;

          &:hover {
            filter: blur(0) contrast(1);
            transition: filter 0.2s;
          }
        }
      }

      .file-header {
        display: flex;
        align-items: center;
        padding-block: 0.5rem;
        padding-inline: 0.8rem;
      }

      .file-inner {
          display: flex;
          flex-direction: column;
      }

      #content-warn {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.3rem;
        width: 100%;
        font-size: 1.1rem;
        font-weight: 500;

        font-family: var(--font-display);

        margin-block: 0.5rem;

        background: repeating-linear-gradient(
          45deg,
          var(--base),
          var(--base) 1em,
          var(--crust) 1em,
          var(--crust) 2em
        );

        border-radius: 2rem;
        padding: 0.1rem;

        & > span {
          font-size: 1.3rem;
        }
      }

      .reply {
        display: flex;
        align-items: center;
        color: var(--subtext0);
        .plyuser {
          // background-color: var(--crust);
          color: var(--subtext0);
          // border-radius: 5px;
          display: flex;
          align-items: center;
          margin: 0.15rem;
          padding-right: 0.15rem;
          & > img {
            width: 1.2rem;
            height: 1.2rem;
            border-radius: 50%;
            margin: 0.4rem;
          }
        }
      }

      .files {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 0.5rem;
        flex-wrap: wrap;
        margin-block: 0.5rem;
        & > .file {
          // padding: 0.8rem;
          border-radius: 0.7rem;

          background-color: var(--crust);

          max-height: 25rem;
          max-width: 25rem;
          overflow: hidden;
        }



        & .sensitive {
          & img,
          & video {
            filter: blur(40px) contrast(1.2);
            transition: filter 0.7s;

            &:hover {
              filter: blur(0) contrast(1);
              transition: filter 0.4s;
            }
          }
        }

        & img,
        & video,
        & audio {
          width: 100%;
          height: auto;
          border-radius: 0 0 0.7rem 0.7rem;
          cursor: pointer;
        }
      }

      .numfiles {
        color: var(--subtext0);
      }

      .footer {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        gap: 0.5rem;

        padding-top: 0.5rem;
        margin-top: 0.75rem;
        border-top: 1px solid var(--overlay1);
        color: var(--subtext0);
      }

      @media (orientation: portrait) {
        .footer {
          flex-direction: column!important;
          align-items: flex-start!important;
        }

        // .reply:nth-child(2) {
        //   display: none;
        // }
      }

      .reactions {
        display: flex;
        gap: 1rem;

        & > p {
          & > span {
            color: var(--text);
          }
          color: var(--subtext0);
          display: flex;
          align-items: center;
        }
      }

      button {
      background: transparent;
      border: none;
      color: var(--subtext0);
      cursor: pointer;
      outline: none;
      }

      #refresh span {
        transition: transform 0.4s ease;
        transform-origin: center;
        transform: rotate(0deg);
      }

      // #refresh:not(.loading):hover span {
      //   transform: rotate(360deg);
      // }

      #refresh.loading span {
        animation: spin 1s linear infinite;
      }

      @keyframes spin {
        100% {
          transform: rotate(360deg);
        }
      }

    `;
  this.note = JSON.parse(`
    {
        "id": "112456438092927884",
        "created_at": "2024-05-17T12:31:07.580Z",
        "in_reply_to_id": null,
        "in_reply_to_account_id": null,
        "sensitive": false,
        "spoiler_text": "",
        "visibility": "public",
        "language": "en",
        "uri": "https://wetdry.world/users/fish/statuses/112456438092927884",
        "url": "https://wetdry.world/@fish/112456438092927884",
        "replies_count": 420,
        "reblogs_count": 69,
        "favourites_count": 5318008,
        "edited_at": null,
        "conversation_id": 29969499,
        "favourited": false,
        "reblogged": false,
        "muted": false,
        "bookmarked": false,
        "pinned": false,
        "local_only": false,
        "content": "ceci n'est pas un toot",
        "filtered": [],
        "reblog": null,
        "application": {
          "name": "Mastodon for Samsung Smart Refrigerator",
          "website": null
        },
        "account": {
          "id": "112439434695773843",
          "username": "fish",
          "acct": "fish",
          "display_name": "bomberfish",
          "locked": false,
          "bot": false,
          "discoverable": null,
          "indexable": false,
          "group": false,
          "created_at": "2024-05-14T00:00:00.000Z",
          "note": "\u003Cp\u003Ecertified idiot\u003Cbr /\u003Eswift is the best language\u003Cbr /\u003Egeneral apple nerd\u003Cbr /\u003Eminor❗️\u003C/p\u003E\u003Cp\u003Eeither nerding out or shitposting on a semi irregular basis\u003C/p\u003E",
          "url": "https://wetdry.world/@fish",
          "uri": "https://wetdry.world/users/fish",
          "avatar": "https://media.wetdry.world/accounts/avatars/112/439/434/695/773/843/original/def7950fffcd404e.png",
          "avatar_static": "https://media.wetdry.world/accounts/avatars/112/439/434/695/773/843/original/def7950fffcd404e.png",
          "header": "https://media.wetdry.world/accounts/headers/112/439/434/695/773/843/original/c636e0895269c824.png",
          "header_static": "https://media.wetdry.world/accounts/headers/112/439/434/695/773/843/original/c636e0895269c824.png",
          "followers_count": 23,
          "following_count": 59,
          "statuses_count": 144,
          "last_status_at": "2024-05-17",
          "hide_collections": null,
          "noindex": false,
          "emojis": [],
          "roles": [],
          "fields": []
        },
        "media_attachments": [],
        "mentions": [],
        "tags": [],
        "emojis": [],
        "reactions": [],
        "card": null,
        "poll": null
      }
    `);

  this.replyUser = JSON.parse(`
    {
      "id": "112439434695773843",
      "username": "fish",
      "acct": "fish",
      "display_name": "bomberfish :neofox_bongo_up:",
      "locked": false,
      "bot": false,
      "discoverable": null,
      "indexable": false,
      "group": false,
      "created_at": "2024-05-14T00:00:00.000Z",
      "note": "\u003Cp\u003Ecertified idiot\u003Cbr /\u003Eswift is the best language\u003Cbr /\u003Egeneral apple nerd\u003Cbr /\u003Eminor❗️\u003C/p\u003E\u003Cp\u003Eeither nerding out or shitposting on a semi irregular basis\u003C/p\u003E",
      "url": "https://wetdry.world/@fish",
      "uri": "https://wetdry.world/users/fish",
      "avatar": "https://media.wetdry.world/accounts/avatars/112/439/434/695/773/843/original/def7950fffcd404e.png",
      "avatar_static": "https://media.wetdry.world/accounts/avatars/112/439/434/695/773/843/original/def7950fffcd404e.png",
      "header": "https://media.wetdry.world/accounts/headers/112/439/434/695/773/843/original/c636e0895269c824.png",
      "header_static": "https://media.wetdry.world/accounts/headers/112/439/434/695/773/843/original/c636e0895269c824.png",
      "followers_count": 23,
      "following_count": 59,
      "statuses_count": 145,
      "last_status_at": "2024-05-17",
      "hide_collections": null,
      "noindex": false,
      "emojis": [
        {
          "shortcode": "neofox_bongo_up",
          "url": "https://media.wetdry.world/custom_emojis/images/000/142/378/original/neofox_bongo_up.png",
          "static_url": "https://media.wetdry.world/custom_emojis/images/000/142/378/static/neofox_bongo_up.png",
          "visible_in_picker": true
        }
      ],
      "roles": [],
      "fields": []
    }
    `);

    this.reblog = false;

    this.note_orig = this.note;

  function urlToFileName(url: string): string {
    return url.split("/").pop() || "Unknown filename";
  }

  function mediaToElement(file: any): HTMLElement {
    switch (file.type) {
      case "image":
        return (
          <span class="file-inner">
            <span class="file-header">
              <span class="material-symbols-rounded">image</span>
              <span>{urlToFileName(file.url)}</span>
            </span>
            <img
              src={file.url}
              alt={file.description}
              title={file.description}
              loading="lazy"
              on:click={() => {
                window.open(file.url, "_blank");
              }}
              role="button"
            />
          </span>
        );
      case "video":
        return (
          <span class="file-inner">
            <span class="file-header">
              <span class="material-symbols-rounded">videocam</span>
              <span>{urlToFileName(file.url)}</span>
            </span>
            <video
              src={file.url}
              alt={file.description}
              title={file.description}
              controls
            />
          </span>
        );
      case "audio":
        return (
          <span class="file-inner">
            <span class="file-header">
              <span class="material-symbols-rounded">audiotrack</span>
              <span>{urlToFileName(file.url)}</span>
            </span>
            <audio
              src={file.url}
              alt={file.description}
              title={file.description}
              controls
            />
          </span>
        );
      default:
        return (
          <span
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <span class="material-symbols-rounded">attach_file</span>
            <a href={file.url} title={file.description}>
              {file.url.split("/").pop()}
            </a>
          </span>
        );
    }
  }

  async function getStatuses(user_id: string): Promise<[Status]> {
    let notesRaw = await fetch(
      `https://wetdry.world/api/v1/accounts/${user_id}/statuses?exclude_replies=true`,
      {
        credentials: "omit",
        headers: {
          "Content-Type": "application/json",
        },
        referrer: "https://wetdry.world/",
        method: "GET",
        mode: "cors",
      }
    );
    let notes: [Status] = await notesRaw.json();
    return notes;
  }

  async function getUserInfo(id: string): Promise<Account> {
    let userRaw = await fetch(`https://wetdry.world/api/v1/accounts/${id}`, {
      credentials: "omit",
      headers: {
        "Content-Type": "application/json",
      },
      referrer: "https://wetdry.world/",
      method: "GET",
      mode: "cors",
    });
    let user: Account = await userRaw.json();
    return user;
  }

  this.mount = async () => {
    let notes = await getStatuses("112439434695773843");
    console.log(notes);
    let note = notes[0];
    let i = 0;
    while (note.reblog || note.in_reply_to_id) {
      note = notes[i];
      i++;
    }
    console.log(note);
    console.log(note.reblog);

    // if (note.reblog) {
    //   console.log("reblog");
    //   this.note = note.reblog as Status;
    //   this.reblog = true;
    // } else {
    //   console.log("not a reblog");
    //   this.note = note;
    //   this.reblog = false;
    // }
    this.note = note;
    this.note_orig = note;
    console.log(this.note);
    document.dispatchEvent(new Event("force-tab-resize"));

    this.renderRoot.innerHTML = note.content;

    if (this.note.in_reply_to_account_id) {
      let replyUser = await getUserInfo(this.note.in_reply_to_account_id);
      console.log(replyUser);
      this.replyUser = replyUser;
    }
  };

  setTimeout(() => {
    this.mount!(); // jank workaround
  }, 800);

  return (
    <div>
      {use(this.note, (note) =>
        note ? (
          <div class="toot">
            <div class="top">
              <div class="left">
                <img class="pfp" loading="lazy" src={note.account.avatar} />
                <div class="user">
                  <div class="name">
                    <div class="displayname">{note.account.display_name}</div>
                    <div class="handle">
                      @{note.account.username}@wetdry.world
                    </div>
                  </div>
                </div>
              </div>
              <div class="actions">
                <span
                  id="refresh"
                  role="button"
                  title="Refresh latest post"
                  on:click={() => {
                    this.mount!();
                    document
                      .getElementById("refresh")!
                      .classList.add("loading");
                    document.dispatchEvent(new Event("force-tab-resize"));
                    setTimeout(() => {
                      document
                        .getElementById("refresh")!
                        .classList.remove("loading");
                    }, 1000);
                  }}
                >
                  <span class="material-symbols-rounded">refresh</span>
                </span>
                <a
                  href={note.url}
                  title="Open this post in new tab"
                  target="_blank"
                  id="open"
                >
                  <span class="material-symbols-rounded">open_in_new</span>
                </a>
              </div>
            </div>
            {this.reblog ? (
              <div class="reply">
                <span class="material-symbols-rounded">repeat</span> Reblogged by{" "}
                <a
                  href={`https://wetdry.world/@${this.note_orig.account.username}`}
                  target="_blank"
                >
                  <div class="plyuser">
                    <img loading="lazy" src={this.note_orig.account.avatar} />
                    {this.note_orig.account.username}
                  </div>
                </a>
              </div>
            ) : (
              ""
            )}
            {note.in_reply_to_id ? (
              <div class="reply">
                <span class="material-symbols-rounded">prompt_suggestion</span>{" "}
                <span>Replying to</span>{" "}
                <a
                  href={`https://wetdry.world/@${this.replyUser.username}/${note.in_reply_to_id}`}
                  target="_blank"
                >
                  <div class="plyuser">
                    <img loading="lazy" src={this.replyUser.avatar} />
                    {this.replyUser.username}
                  </div>
                </a>
              </div>
            ) : (
              ""
            )}
            {!note.sensitive ? (
              <p id="note-content" bind:this={use(this.renderRoot)}>
                {note.content}
              </p>
            ) : (
              <div>
                <p id="content-warn">
                  <span class="material-symbols-rounded">warning</span>{" "}
                  {note.spoiler_text}
                </p>

                <p
                  id="note-content"
                  class="sensitive"
                  bind:this={use(this.renderRoot)}
                >
                  {note.content}
                </p>
              </div>
            )}
            {note.media_attachments.length > 0 ? (
              <div>
                <h3 style={{
                  color: "var(--subtext0)",
                  fontFamily: "var(--font-display)",
                  fontWeight: "640",
                  marginBottom: "0.25rem"
                }}>Files ({use`${note.media_attachments.length}`})</h3>
                <div class="files">
                  {note.media_attachments.map((file) => (
                    <div class={note.sensitive ? "file sensitive" : "file"}>
                      {mediaToElement(file)}
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              ""
            )}

            {/* {note.media_attachments.length > 0 ? (
              <div class="numfiles">
                ({note.media_attachments.length}{" "}
                {"file" + (note.media_attachments.length > 1 ? "s" : "")})
              </div>
            ) : (
              ""
            )} */}

            <div class="footer">
              <span class="reactions">
                <p>
                  <span class="material-symbols-rounded">reply</span>{" "}
                  {note.replies_count}
                </p>
                <p>
                  <span class="material-symbols-rounded">repeat</span>
                  {note.reblogs_count}
                </p>
                <p>
                  <span class="material-symbols-rounded">star</span>
                  {note.favourites_count}
                </p>
                <p>
                  <span class="material-symbols-rounded">mood</span>
                  {Object.keys(note.reactions).length}
                </p>
              </span>
              <div id="details">
                {new Date(note.created_at).toLocaleString()} ·{" "}
                {note.application ? note.application.name : "Unknown"}
              </div>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )
      )}
    </div>
  );
};
