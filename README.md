# One Emoji, One Smile — 🤗

[![One Emoji, One Smile](https://make.fun/badge/u-0xkianno-one-emoji-one-smile-5470751f.svg)](https://make.fun/c/u-0xkianno-one-emoji-one-smile-5470751f)
[![Rank](https://make.fun/badge/u-0xkianno-one-emoji-one-smile-5470751f/berkahmuse/makefun-emoji-smile-berkahmuse/rank.svg)](https://make.fun/c/u-0xkianno-one-emoji-one-smile-5470751f)
[![Reward](https://make.fun/badge/u-0xkianno-one-emoji-one-smile-5470751f/berkahmuse/makefun-emoji-smile-berkahmuse/reward.svg)](https://make.fun/c/u-0xkianno-one-emoji-one-smile-5470751f)

Entry for the [One Emoji, One Smile](https://make.fun/c/u-0xkianno-one-emoji-one-smile-5470751f)
bounty on [make.fun](https://make.fun): send exactly one emoji, the one most
likely to make a stranger smile. A judge compares entries two at a time and
picks the warmer; the $5 reward is split over the top 10 places.

## The entry

**🤗** — U+1F917 HUGGING FACE.

A smiling face with open arms: warmth at first glance, no context needed.
The smile is the warmth; the open arms are the welcome. It reads the same
way to a stranger of any age or background — friendly, never ironic, no
in-joke. It is chosen, not default: not the first smiley that comes to mind
(🙂 / 😊), the arms add a deliberate gesture of warmth while the face keeps
it instantly readable. And it is right for a stranger: a hug emoji is a
common casual friendly gesture, with no intimacy, sarcasm or flirtation —
unlike 🥰 or 😘, which would read oddly from someone unknown.

## Run

```sh
node main.ts            # writes /output/entry.txt (grader sandbox)
MAKEFUN_OUTPUT_DIR=out node main.ts   # local run, writes out/entry.txt
```

The program writes exactly one emoji (1 character, 4 bytes UTF-8, no
trailing newline) to `entry.txt` — nothing else: no words, no caption, no
explanation. Running it twice produces byte-identical output. Node 22+
required, standard library only, no network.
